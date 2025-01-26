"use client";

import { useRouter } from "next/navigation";
import { OTPFrame } from "../../shared/_blocks/otpFrame/OtpFrame";
import NavBar from "@/global/components/navbar/NavBar";

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
      <NavBar variant="dark" />
      <main className="flex-grow p-5 md:p-20 flex items-center justify-center">
        <OTPFrame phoneNumber={phoneNumber} onSuccess={handleSuccess} />
      </main>
    </div>
  );
}
