"use client";

import { InfoCheckIcon } from "@/main/global/assets/svg/InfoCheckIcon";
import { InfoIcon } from "@/main/global/assets/svg/InfoIcon";
import { PaymentIcon } from "@/main/global/assets/svg/PaymentIcon";

type Props = {
  currentStep: number;
}
function HeroSection({ currentStep }: Props) {
  return (
    <section className="bg-rooms-background bg-center bg-cover mb-[9rem]">
      <div className="relative text-white w-full px-5 sm:px-20 pt-40 md:pt-60 pb-24 md:pb-48 bg-black/70">
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="w-full sm:text-[2.5rem] text-[1.563rem] leading-[154%] font-extrabold mb-3">
            انت علي بعد خطوات من الحرم، اكمل الحجز
          </h1>
        </div>
        <div className="absolute bottom-0 translate-y-2/3 md:inset-x-[5.5rem] inset-x-5 md:px-8 md:py-11 px-[0.875rem] py-[0.875rem] flex items-center gap-4 bg-white rounded-[1.25rem] shadow-[0px_4px_42px_0px] shadow-black/10">
          <div className="flex flex-col items-center gap-2 sm:px-10">
            <div
              className={`size-16 rounded-full flex items-center justify-center ${
                currentStep > 0 ? "bg-primary-600" : "bg-[#F6F6F6]"
              }`}
            >
              <InfoIcon
                className={`size-9 ${
                  currentStep > 0 ? "fill-white" : "fill-[#717171]"
                }`}
              />
            </div>
            <p className="text-black sm:text-lg font-bold text-center">
              الخطوة الأولي
            </p>
            <p className="text-black/60 text-sm text-center">بيانات المسافر</p>
          </div>
          <div className="flex-grow border"></div>
          <div className="flex flex-col items-center gap-2 sm:px-10">
            <div
              className={`size-16 rounded-full flex items-center justify-center ${
                currentStep > 1 ? "bg-primary-600" : "bg-[#F6F6F6]"
              }`}
            >
              <InfoCheckIcon
                className={`size-9 ${
                  currentStep > 1 ? "fill-white" : "fill-[#717171]"
                }`}
              />
            </div>
            <p className="text-black sm:text-lg font-bold text-center">
              الخطوة الثانيه
            </p>
            <p className="text-black/60 text-sm text-center">مراجعة البيانات</p>
          </div>
          <div className="flex-grow border"></div>
          <div className="flex flex-col items-center gap-2 sm:px-10">
            <div
              className={`size-16 rounded-full flex items-center justify-center ${
                currentStep > 2 ? "bg-primary-600" : "bg-[#F6F6F6]"
              }`}
            >
              <PaymentIcon
                className={`size-9 ${
                  currentStep > 2 ? "fill-white" : "fill-[#717171]"
                }`}
              />
            </div>
            <p className="text-black sm:text-lg font-bold text-center">
              الخطوة الثالثه
            </p>
            <p className="text-black/60 text-sm text-center">الدفع</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
