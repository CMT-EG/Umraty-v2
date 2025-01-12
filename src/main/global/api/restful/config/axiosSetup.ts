import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { getCookie, setCookie } from "cookies-next/server";
import { toast } from "@/main/common/shadcn/hooks/use-toast";
import { HttpMethodMudation } from "../../shared/ApiTypes";
import { handleSuccessToast } from "../../shared/ApiUtils";
import { ErrorResponseData, handleAxiosApiError } from "./handleAxiosApiError";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { getTokenExpiration } from "@/main/common/utils/auth";

// Extend InternalAxiosRequestConfig to include our custom properties
export interface CustomInternalAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  skipErrorToast?: boolean | number[];
  skipSuccessToast?: boolean;
  customToastMessage?: string;
}

// Set the base URL for Axios
axios.defaults.baseURL = API_ROOT;

// Function to refresh the token
const refreshToken = async (): Promise<string> => {
  const refreshToken = (await getCookie("refresh")) as string;
  if (!refreshToken) throw new Error("No refresh token available");

  const response = await axios.post(
    `${axios.defaults.baseURL}auth/token/refresh/`,
    {
      refresh: refreshToken,
    }
  );

  const newAccessToken = response.data.access;
  const newRefreshToken = response.data.refresh;

  // Set the new tokens in cookies
  setCookie("accessToken", newAccessToken);
  setCookie("refresh", newRefreshToken);

  return newAccessToken;
};

// Axios request interceptor to add token to headers
axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const customConfig = config as CustomInternalAxiosRequestConfig;
    let accessToken = (await getCookie("accessToken")) as string;

    if (accessToken && !customConfig.headers?.skipAuth) {
      const maxAge = getTokenExpiration(accessToken);
      const isExpired = maxAge <= 0;

      if (isExpired) {
        accessToken = await refreshToken();
      }

      customConfig.headers = customConfig.headers || {};
      customConfig.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (customConfig.headers?.skipAuth) {
      delete customConfig?.headers?.skipAuth;
    }

    return customConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Axios response interceptor to handle errors and success toasts
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const config = response.config as CustomInternalAxiosRequestConfig;
    if (!config.skipSuccessToast) {
      const customToastMessage = config.customToastMessage;
      if (customToastMessage) {
        toast({ title: customToastMessage });
      } else {
        const method = response.config.method as HttpMethodMudation;
        if (["post", "put", "delete", "patch"].includes(method)) {
          handleSuccessToast(method, config);
        }
      }
    }
    return response;
  },
  (error: AxiosError<ErrorResponseData, unknown>) => {
    handleAxiosApiError(
      error,
      error?.config as CustomInternalAxiosRequestConfig
    );
    return Promise.reject(error);
  }
);

export default axios;
