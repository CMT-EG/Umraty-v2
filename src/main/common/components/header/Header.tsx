"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPerson } from "react-icons/go";
import { useEffect, useState } from "react";
import { Button } from "@/main/common/shadcn/ui/button";
import { cn } from "@/main/common/shadcn/lib/utils";
import { getCookie, deleteCookie } from "cookies-next/client";

export default function Header({
  variant = "white",
  className,
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "dark" | "white" | "transparent";
}) {
  const [showSignIn, setShowSingIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    setShowSingIn(!accessToken); // Show "Sign In" if no token exists.
  }, []);

  const handleLogout = () => {
    deleteCookie("accessToken"); // Remove the token from cookies.
    location.reload(); // Reload the page to reflect the state change.
  };

  return (
    <header
      className={cn(
        `w-full py-[0.875rem] px-5 md:py-3 md:px-20 flex items-center justify-between ${
          variant === "white"
            ? "bg-white"
            : variant === "dark"
            ? "bg-[#1A1A1A] border-b border-neutral-500"
            : "bg-transparent border-b border-neutral-500"
        } z-30`,
        className
      )}
    >
      <div className="flex items-center">
        <Image
          src={"/logo.webp"}
          width={276}
          height={128}
          className={`md:h-16 h-11 w-fit sm:me-5 md:me-8 ${
            variant === "white" ? "brightness-0" : ""
          }`}
          alt="Logo"
        />
        <Link
          href={"/"}
          className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 me-1 sm:me-3 md:me-6 border-b-2 ${
            pathname === "/"
              ? "text-primary border-primary"
              : `${
                  variant === "white" ? "text-neutral-400" : "text-neural-200"
                } border-transparent hover:text-primary hover:border-primary`
          } transition-colors`}
        >
          الرئيسية
        </Link>
        <Link
          href={"/reservations"}
          className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 me-1 sm:me-3 md:me-6 border-b-2 ${
            pathname === "/reservations"
              ? "text-primary border-primary"
              : `${
                  variant === "white" ? "text-neutral-400" : "text-neural-200"
                } border-transparent hover:text-primary hover:border-primary`
          } transition-colors`}
        >
          إدارة الحجز
        </Link>
      </div>
      {showSignIn ? (
        <Button className="sm:px-5 px-3" asChild>
          <Link href={"/sign-in"}>
            <GoPerson
              className="sm:size-5 size-4 sm:me-2 me-1"
              strokeWidth={1}
            />
            <span>تسجيل الدخول</span>
          </Link>
        </Button>
      ) : (
        <Button className="sm:px-5 px-3" onClick={handleLogout}>
          <GoPerson className="sm:size-5 size-4 sm:me-2 me-1" strokeWidth={1} />
          <span>تسجيل الخروج</span>
        </Button>
      )}
    </header>
  );
}
