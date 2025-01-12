import { useAuth } from "@/main/global/store/auth/useAuth";
import { messages } from "../../shared/apiMessages";
import { displayToast, messageApiInLang } from "../../shared/ApiUtils";
import { AxiosError } from "axios";

export type ErrorResponseData = { status: string; message: string };

export const handleAxiosApiError = (error: AxiosError<ErrorResponseData>, config: { skipErrorToast?: boolean | number[] }) => {
  const skipErrorToast = config?.skipErrorToast;
  const statusCode = error?.response?.status;

  // Skip toast if skipErrorToast is true or if it's an array containing the current status code
  if (skipErrorToast === true || (Array.isArray(skipErrorToast) && statusCode && skipErrorToast.includes(statusCode))) {
    return;
  }

  const language = (localStorage.getItem("i18nextLng") as "en" | "ar") || "en";
  const { defaultTitle, genericErrorMessage, noResponseMessage } = messages[language];

  if (error.response) {
    if (statusCode === 401 && window.location.pathname !== "/auth/login") {
      console.log("Unauthorized");
      useAuth.getState().logout();
      // Redirect to login page
      location.replace(`/auth/login`);
      return;
    }

    const errorMessage = messageApiInLang(error.response.data?.message);
    displayToast("destructive", defaultTitle, errorMessage || "");
  } else if (error.request) {
    displayToast("destructive", defaultTitle, noResponseMessage);
    console.log("Error", error.request);
  } else {
    displayToast("destructive", defaultTitle, genericErrorMessage);
    console.error("Error", error.message);
  }
};
