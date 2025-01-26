"use client";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { Button } from "@/global/shadcn/ui/button";
import { rightTabs } from "./constant/tabs";
import { redirect, RedirectType, usePathname } from "next/navigation";
import LangChanger from "./blocks/langChanger/LangChanger";
import { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next/client";
import { cn } from "@/global/shadcn/lib/utils";

export default function NavbarLinks({ open = false }: { open?: boolean }) {
  const pathname = usePathname();
  const [showSignIn, setShowSingIn] = useState(false);

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    setShowSingIn(!accessToken);
  }, []);

  const handleLogout = () => {
    deleteCookie("accessToken");
    redirect("/sign-in", RedirectType.replace);
  };

  return (
    <ul className={cn("hidden flex-col lg:flex-row flex-1 items-start lg:items-center justify-between gap-3", open ? "flex": "lg:flex")}>
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5">
        {rightTabs?.map((tab, index) => (
          <li key={index}>
            <Link
              href={tab?.href}
              className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${
                pathname === tab?.href
                  ? "text-primary border-primary"
                  : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
              } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
            >
              {tab?.title}
            </Link>
          </li>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-fit gap-3 lg:gap-0">
        <li>
          <Link
            href={"/faq"}
            className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${
              pathname === "/faq"
                ? "text-primary border-primary"
                : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
            } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
          >
            الأسئلة الشائعة
          </Link>
        </li>
        <LangChanger />
        {showSignIn ? (
          <Button className="sm:px-5 px-3 rounded-full text-white" asChild>
            <Link href={"/sign-in"}>
              <GoPerson
                className="sm:size-5 size-4 sm:me-2 me-1"
                strokeWidth={1}
              />
              <span>تسجيل الدخول</span>
            </Link>
          </Button>
        ) : (
          <Button
            className="sm:px-5 px-3 rounded-full text-white"
            onClick={handleLogout}
          >
            <GoPerson
              className="sm:size-5 size-4 sm:me-2 me-1"
              strokeWidth={1}
            />
            <span>تسجيل الخروج</span>
          </Button>
        )}
      </div>
    </ul>
  );
}
