"use client";

import React from "react";
import { Button } from "@/global/shadcn/ui/button";
import TButton from "@/global/components/TForm/TButton";
import { UsersRound } from "lucide-react";
import BackButton from "@/global/components/backButton/BackButton";
import { TSuccessDialog } from "@/global/components/TForm/success/TSuccessDialog";

type Props = {
  form: any;
  prev: any;
  isPending?: boolean;
  openRequestSaver?: boolean;
  setOpenRequestSaver?: any;
  openPaymentSuccess?: boolean;
  setOpenPaymentSuccess?: any;
};
export default function Step3({
  form: _form,
  prev,
  isPending = false,
  openRequestSaver,
  setOpenRequestSaver,
  openPaymentSuccess,
  setOpenPaymentSuccess,
}: Props) {
  // form.watch("")

  return (
    <div className="bg-white">
      <BackButton text={"الرجوع للخلف"} prev={prev} />
      <div className="w-full px-6 py-8 bg-gradient-to-r from-white to-white rounded-xl shadow-[0px_8px_16px_-8px_rgba(15,15,15,0.10)] flex-col justify-start items-start gap-6 flex">
        <div className="w-full shrink px-8 py-4 bg-white rounded-lg border border-[#d1d1d1] items-start gap-2 flex flex-col">
          <h3 className="text-[#131416] text-xl font-bold">
            باقة الخدمة الأساسية ( غير شامل السكن)
          </h3>
          <div className="h-4 justify-end items-center gap-1.5 flex">
            <UsersRound className="w-4 h-4 text-primary-600" />
            <p className="text-[#878787] text-xs font-normal">
              تم ملء بيانات الحجز ل 12 فرد
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 self-end mt-4 w-full">
        <TButton
          type="submit"
          className={
            "h-[60px] px-24 py-[22px] bg-[#8b6343] rounded-[90px] justify-center items-center w-full text-base font-extrabold"
          }
          disabled={isPending}
        >
          الدفع
        </TButton>
        <TButton
          type="button"
          variant={"outline"}
          className="flex justify-center self-end min-w-[305px] items-center border-primary-600 text-primary-600 hover:text-primary-700 hover:bg-primary-100 h-[60px] px-24 py-[22px] rounded-[90px] w-full text-base font-extrabold"
        >
          حفظ الطلب
        </TButton>
      </div>
      <TSuccessDialog
        open={openPaymentSuccess}
        setOpen={setOpenPaymentSuccess}
        title={"تم الدفع بنجاح"}
        subTitle={
          <div className="text-center">
            <span className="text-[#878787] text-2xl font-extrabold font-['Almarai'] leading-loose">
              تم حفظ حجزكم برقم{" "}
            </span>
            <span className="text-[#0abf7e] text-2xl font-extrabold font-['Almarai'] leading-loose">
              XXXX
            </span>
          </div>
        }
      />
      <TSuccessDialog
        open={openRequestSaver}
        setOpen={setOpenRequestSaver}
        title={
          <div
            className={
              "text-center flex gap-2 flex-wrap justify-center mx-auto  text-[28px] md:text-[40px]"
            }
          >
            <span className="text-[#131416] font-extrabold">
              تم حفظ حجزكم برقم
            </span>
            <span className="text-[#8b6343] font-extrabold">XXXX</span>
          </div>
        }
        subTitle={
          <div className={"text-center flex justify-center gap-2 flex-wrap"}>
            <span className="text-[#878787] text-base lg:text-2xl font-extrabold">
              يرجي الدفع قبل
            </span>
            <span className="text-[#8b6343] text-base lg:text-2xl font-extrabold">
              XX/XX/XXXX
            </span>
            <span className="text-[#878787] text-base lg:text-2xl font-extrabold">
              الساعة
            </span>
            <span className="text-[#8b6343] text-base lg:text-2xl font-extrabold">
              XX:XX
            </span>
            <span className="text-[#878787] text-base lg:text-2xl font-extrabold">
              اليوم
            </span>
          </div>
        }
        dialogClassName={"!sm:w-[597px] max-w-[90%]"}
        isBrownColor
      />
    </div>
  );
}
