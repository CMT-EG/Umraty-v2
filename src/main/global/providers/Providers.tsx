"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useInternetConnection } from "../hooks/internetConnection/useInternetConnection";
import { ClickToComponent } from "click-to-react-component";
import { Toaster } from "@/main/common/shadcn/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  useInternetConnection();

  const queryClient = new QueryClient();
  return (
    <>
      <ClickToComponent />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </>
  );
}
