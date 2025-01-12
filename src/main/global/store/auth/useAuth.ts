import { create } from "zustand";
import { setCookie, getCookie, deleteCookie } from "cookies-next/server";
import { jwtDecode } from "jwt-decode";
import { fromUnixTime, differenceInSeconds } from "date-fns";
import { getTokenExpiration } from "@/main/common/utils/auth";

interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
}

interface AuthActions {
  setAccessToken: (token: string) => Promise<void>;
  clearAuth: () => Promise<void>;
  initializeAuth: () => Promise<void>;
  logout: () => Promise<void>; // Added logout function
}

interface DataInToken {
  exp: number;
  // Add other token fields as needed
}

const COOKIE_NAME = "auth_token";

export const useAuth = create<AuthState & AuthActions>()((set) => ({
  accessToken: null,
  isLoading: true,

  initializeAuth: async () => {
    try {
      const token = await getCookie(COOKIE_NAME);
      if (token) {
        const tokenStr = String(token);
        const expirationTime = fromUnixTime(
          jwtDecode<DataInToken>(tokenStr).exp
        );
        const isExpired = expirationTime < new Date();

        set({
          accessToken: isExpired ? null : tokenStr,
          isLoading: false,
        });

        if (isExpired) {
          await deleteCookie(COOKIE_NAME);
        }
      } else {
        set({
          accessToken: null,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error("Failed to initialize auth:", error);
      set({
        accessToken: null,
        isLoading: false,
      });
    }
  },

  setAccessToken: async (token: string) => {
    try {
      const maxAge = getTokenExpiration(token);

      if (maxAge <= 0) {
        throw new Error("Token is already expired");
      }

      await setCookie(COOKIE_NAME, token, {
        secure: true,
        sameSite: "strict" as const,
        maxAge: maxAge,
      });

      set({ accessToken: token });
    } catch (error) {
      console.error("Failed to set access token:", error);
      throw error;
    }
  },

  clearAuth: async () => {
    try {
      await deleteCookie(COOKIE_NAME);
      set({ accessToken: null });
    } catch (error) {
      console.error("Failed to clear auth:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await deleteCookie(COOKIE_NAME);
      set({ accessToken: null });
    } catch (error) {
      console.error("Failed to log out:", error);
      throw error;
    }
  },
}));
