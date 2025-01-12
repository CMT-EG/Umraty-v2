//i18nUtils.ts
import { toast } from "@/main/common/shadcn/hooks/use-toast";

import { successMessages } from "./apiMessages";
import { HttpMethodMudation } from "./ApiTypes";

// HttpMethodEnum.ts

export function messageApiInLang(message: string | null) {
  if (message?.includes("*#*")) return localStorage.getItem("i18nextLng") === "en" ? message?.split("*#*")[0] : message?.split("*#*")[1];

  return message;
}

export const displayToast = (variant: "default" | "destructive", title: string, description: string) => {
  toast({
    variant,
    color: variant === "destructive" ? "white" : "black",
    title,
    description,
  });
};

// Function to handle success toasts
export const handleSuccessToast = (method: HttpMethodMudation, config?: { skipSuccessToast?: boolean }) => {
  if (config?.skipSuccessToast) return;

  const language = (localStorage.getItem("i18nextLng") as "en" | "ar") || "en";
  const message = successMessages[method][language];

  displayToast("default", message, "");
};