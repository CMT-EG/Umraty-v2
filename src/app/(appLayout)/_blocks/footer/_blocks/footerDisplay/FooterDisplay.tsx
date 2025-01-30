"use client";

import { cn } from "@/global/shadcn/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};
export default function FooterDisplay({ children }: Props) {
  const pathName = usePathname();
  return (
    <footer
      className={cn(
        "relative overflow-hidden sm:px-20 px-5 bg-[#262626] text-white flex flex-col items-stretch  top-[282px] sm:top-[125px] self-end mt-auto w-full",
        pathName === "/login" ? "hidden" : ""
      )}
    >
      {children}
    </footer>
  );
}
