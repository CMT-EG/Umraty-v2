"use client";
import { OTPFrame } from "@/components/auth-components";
import Header from "@/main/common/components/header/header";


export default function OTP({ phoneNumber }: { phoneNumber: string }) {
  return (
    <div className='relative flex-grow bg-[#EBE4D6] flex flex-col items-stretch'>
      <Header variant='dark' />
      <main className='flex-grow p-5 md:p-20 flex items-center justify-center'>
        <OTPFrame
          phoneNumber={phoneNumber}
          onSuccess={() => {
            location.href = "/";
          }}
        />
      </main>
    </div>
  );
}
