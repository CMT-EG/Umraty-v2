import { toast } from "@/main/common/shadcn/hooks/use-toast";
import { useEffect, useState } from "react";

interface UseInternetConnectionReturn {
  isOnline: boolean;
  connectionType: "online" | "offline";
}

export const useInternetConnection = (): UseInternetConnectionReturn => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    // Handle online event
    const handleOnline = () => {
      setIsOnline(true);
      toast({ title: "أنت متصل بالانترنت" });
    };

    // Handle offline event
    const handleOffline = () => {
      setIsOnline(false);
      toast({ title: "أنت غير متصل بالانترنت" });
    };

    // Add event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return {
    isOnline,
    connectionType: isOnline ? "online" : "offline",
  };
};
