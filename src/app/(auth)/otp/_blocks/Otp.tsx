"use client";

import { useRouter } from "next/navigation";
import Header from "@/main/common/components/header/Header";
import { OTPFrame } from "../../shared/_blocks/otpFrame/OtpFrame";

interface OTPProps {
  phoneNumber: string;
}

export default function OTP({ phoneNumber }: OTPProps) {
  const router = useRouter();

  const handleSuccess = () => {
    // Using router.push is preferred over location.href in Next.js
    router.push("/");
  };

  return (
    <div className="relative flex-grow bg-[#EBE4D6] flex flex-col items-stretch">
      <Header variant="dark" />
      <main className="flex-grow p-5 md:p-20 flex items-center justify-center">
        <OTPFrame phoneNumber={phoneNumber} onSuccess={handleSuccess} />
      </main>
    </div>
  );
}
