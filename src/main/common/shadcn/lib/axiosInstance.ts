import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { getCookie, setCookie } from "cookies-next/client";

import { API_ROOT } from "@/main/global/env/variablesEnv";
import { getTokenExpiration } from "../../utils/auth";

// Use `const` since `accessToken` is never reassigned
const accessToken = getCookie("accessToken") ? getCookie("accessToken") : "";
const refreshToken = getCookie("refresh") ? getCookie("refresh") : "";

// Create axios instance with base URL
const axiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: {},
});

// Only append the access token if it's found and valid
if (accessToken) {
  const maxAge = getTokenExpiration(accessToken);
  const isExpired = maxAge <= 0;
  if (!isExpired) {
    axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  }
}

// Add request interceptor to refresh the token if it's expired
if (accessToken) {
  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwtDecode(accessToken);
    console.log(user);
    console.log("ACCESS:", accessToken);
    const maxAge = getTokenExpiration(accessToken);
    const isExpired = maxAge <= 0;
    if (!isExpired) return req;

    // If token is expired, refresh it
    const response = await axios.post(`${API_ROOT}/auth/token/refresh/`, {
      refresh: refreshToken,
    });

    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;

    // Set the new tokens in cookies
    setCookie("accessToken", newAccessToken);
    setCookie("refresh", newRefreshToken);

    // Update the Authorization header with the new access token
    req.headers.Authorization = `Bearer ${newAccessToken}`;
    return req;
  });
}

export default axiosInstance;
