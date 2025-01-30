"use client";

import { cn } from "@/global/shadcn/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};
export default function TopBarDisplay({ children }: Props) {
  const pathName = usePathname();
  return (
    <div className={cn("w-full", pathName === "/login" ? "hidden" : "")}>
      {children}
    </div>
  );
}
