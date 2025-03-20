"use client";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { Button } from "@/global/shadcn/ui/button";
import { rightTabs } from "../../constant/tabs";
import LangChanger from "../langChanger/LangChanger";
import { cn } from "@/global/shadcn/lib/utils";
import { PhonePopup } from "../reports/PhonePopup";
import { Dialog, DialogTrigger } from "@/global/shadcn/ui/dialog";
import OTPVerification from "../reports/OTPVerification";
import { ProblemReport } from "../reports/ProblemReport";
import { SuccessPopup } from "../reports/SuccessPopup";
import { NotAuthorizedPopup } from "./_blocks/NotAuthorizedPopup";
import { useNavbarLinks } from "./hooks/useNavbarLinks";
import { useState } from "react";

export default function NavbarLinks({ open = false }: { open?: boolean; }) {
  const { pathname, showSignIn, currentStep, handleBackButton, handleLogout, setCurrentStep } = useNavbarLinks();
  const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <ul
      className={cn(
        "hidden flex-col lg:flex-row flex-1 items-start lg:items-center justify-between gap-3",
        open ? "flex" : "lg:flex"
      )}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-5">
        {rightTabs?.map((tab, index) => (
          <li key={index}>
            {showSignIn && tab?.href === "/all_reservations" ? <Dialog>
              <DialogTrigger
                className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${pathname === "/faq"
                  ? "text-primary border-primary"
                  : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
                  } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
                onClick={() => { }}
              >
                الحجوزات
              </DialogTrigger>
              {pathname !== "/login" && <NotAuthorizedPopup />}
            </Dialog>
              :
              <Link
                href={tab?.href}
                className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${pathname === tab?.href
                  ? "text-primary border-primary"
                  : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
                  } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
              >
                {tab?.title}
              </Link>
            }
          </li>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center w-fit gap-3 lg:gap-0">
        <li>
          <Dialog>
            <DialogTrigger
              className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${pathname === "/faq"
                ? "text-primary border-primary"
                : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
                } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
              onClick={() => setCurrentStep(1)}
            >
              الإبلاغ
            </DialogTrigger>
            {currentStep === 1 ? <PhonePopup  setPhoneNumber={setPhoneNumber} setCurrentStep={() => setCurrentStep(2)} />
              : currentStep === 2 ? <OTPVerification phoneNumber={phoneNumber} setCurrentStep={() => setCurrentStep(3)} handleBackButton={handleBackButton} />
                : currentStep === 3 ? <ProblemReport setCurrentStep={() => setCurrentStep(4)} />
                  : currentStep === 4 ? <SuccessPopup />
                    : null}
            {showSignIn ? (
          <Button className="sm:px-5 px-3 rounded-full text-white" asChild>
            <DialogTrigger onClick={() => setCurrentStep(1)}>
              <GoPerson
                className="sm:size-5 size-4 sm:me-2 me-1"
                strokeWidth={1}
              />
              <span>تسجيل الدخول</span>
            </DialogTrigger>
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
          </Dialog>
        </li>
        <li>
          <Link
            href={"/faq"}
            className={`text-[0.8rem] py-2 md:text-sm px-2 md:px-4 border-b-2 ${pathname === "/faq"
              ? "text-primary border-primary"
              : `text-[#777E90] border-transparent hover:text-primary hover:border-primary`
              } text-[#777e90] text-sm font-extrabold font-['Almarai'] transition-colors text-nowrap`}
          >
            الأسئلة الشائعة
          </Link>
        </li>
        <LangChanger />
        
      </div>
    </ul>
  );
}
