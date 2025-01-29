"use client";
import Image from "next/image";
import { cn } from "@/global/shadcn/lib/utils";
import logo from "@/global/assets/logo/logo-dark.png";
import { Separator } from "@/global/shadcn/ui/separator";
import NavbarLinks from "./blocks/navbarLinks/NavbarLinks";
import { MobileMenu } from "./blocks/navbarLinks/MobileMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({
  variant = "white",
  className,
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "dark" | "white" | "transparent";
}) {
  const pathName = usePathname();
  return (
    <header
      className={cn(
        `w-full py-[0.875rem] px-5 md:py-3 md:px-10 lg:px-16 flex items-center justify-between  z-30 h-[88px]`,
        variant === "white"
          ? " bg-[#FCFCFD] text-neutral-400"
          : " bg-[#1C1B1F] text-neural-200",
        pathName === "/login" && "hidden",
        className
      )}
    >
      <div className="flex items-center justify-between h-full">
        <Link href={"/"}>
          <Image
            src={logo}
            width={69.17}
            height={36}
            className={`md:h-16 h-11 w-fit ${
              variant === "white" ? "brightness-0" : ""
            }`}
            alt="Logo"
          />
        </Link>
        <Separator
          orientation="vertical"
          className="hidden lg:block bg-[#E6E8EC] mx-10"
        />
      </div>

      <NavbarLinks />
      <MobileMenu />
    </header>
  );
}
// variant === "white" ? "text-neutral-400" : "text-neural-200"
