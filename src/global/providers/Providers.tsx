"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useInternetConnection } from "../hooks/internetConnection/useInternetConnection";
import { Toaster } from "@/global/shadcn/ui/toaster";

export default function Providers({ children }: { children: React.ReactNode }) {
  useInternetConnection();

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster />
    </>
  );
}
