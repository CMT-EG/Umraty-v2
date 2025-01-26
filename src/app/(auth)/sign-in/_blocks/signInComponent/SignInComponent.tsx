"use client";

import { SignInFrame } from "@/app/(auth)/shared/_blocks/signInFrame/SignInFrame";
import NavBar from "@/global/components/navbar/NavBar";
import { useRouter } from "next/navigation";

export default function SignInComponent() {
  const router = useRouter();
  function onSuccess(phoneNumber: string) {
    router.push(`/otp?phone_number=${encodeURIComponent(phoneNumber)}`);
  }
  return (
    <div className="relative flex-grow bg-sign-in-background flex flex-col items-stretch">
      <NavBar variant="dark" />
      <main className="flex-grow p-5 md:p-20 grid lg:grid-cols-2 grid-cols-1 bg-black/70">
        <SignInFrame onSuccess={onSuccess} />
        <div className="hidden md:flex items-center justify-center">
          <div className="flex flex-col">
            <span className="font-bold text-[5rem] leading-[1] text-white/85">
              مع <span className="text-primary-500">عمرتى...</span>
            </span>
            <span className="mt-7 text-[2.125rem] font-bold text-white/85">
              من الفكرة إلى الذكرى
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
