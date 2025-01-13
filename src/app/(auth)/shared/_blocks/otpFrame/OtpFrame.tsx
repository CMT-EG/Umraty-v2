"use client";
import { Button } from "@/main/common/shadcn/ui/button";
import React, { useEffect, useState, useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { BsChatLeftDots } from "react-icons/bs";
import Link from "next/link";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/main/common/components/inputOtp/InputOtp";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { z } from "zod";
import { otpSchema } from "../../schema/otpSchema";
import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import { setCookie } from "cookies-next/client";
import { toast } from "@/main/common/shadcn/hooks/use-toast";
import { formatTime } from "@/main/common/utils/date";

type otpSchemaType = z.infer<typeof otpSchema>;

export function OTPFrame({
  onSuccess,
  phoneNumber,
}: React.HTMLAttributes<HTMLDivElement> & {
  phoneNumber: string;
  onSuccess?: () => any;
}) {
  const [loading, setLoading] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);
  const [globalErrorMessage, setGlobalErrorMessage] = useState("");
  const [countDown, setCountdown] = useState(10);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<otpSchemaType>({
    resolver: zodResolver(otpSchema),
    defaultValues: { code: "" },
  });

  // Memoizing the onFinish function
  const onFinish = useCallback(() => {
    console.log("time out");
  }, []);

  useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => setCountdown(countDown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countDown === 0 && onFinish) {
      onFinish();
    }
  }, [countDown, onFinish]);

  async function resendCode() {
    setCodeLoading(true);
    await requestHelpers.postData(
      `${API_ROOT}/auth/customer/send-otp/`,
      {
        phone_number: phoneNumber,
      }
    );
    setCountdown(10);
    setCodeLoading(false);
  }

  async function onSubmit(values: otpSchemaType) {
    console.log("SUBMITTED");
    setLoading(true);
    const response = await requestHelpers.postData(
      `${API_ROOT}/auth/customer/verify-otp/`,
      {
        otp: values.code,
        phone_number: phoneNumber,
      }
    );
    if (response.status !== 200) {
      setLoading(false);
      setGlobalErrorMessage("حدث خطأ ما, حاول ثانية في وقت لاحق");
    } else {
      setCookie("accessToken", response.data?.access, {
        maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
        path: "/", // Accessible across the entire site
        secure: true, // Only sent over HTTPS
      });
      setCookie("refresh", response.data?.refresh, {
        maxAge: 60 * 60 * 24 * 7, // Expires in 7 days
        path: "/", // Accessible across the entire site
        secure: true, // Only sent over HTTPS
      });
      toast({
        title: "مرحباً بك في عمرتي",
        description: "تم التسجيل بنجاح",
      });
      if (onSuccess) {
        await onSuccess();
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-xl px-8 py-11 flex flex-col items-center bg-white rounded-[1.25rem]"
    >
      <div className="sm:size-[140px] size-[100px] flex items-center justify-center rounded-full bg-[#f7f4ef] md:mb-9 mb-6">
        <div className="sm:size-[100px] size-[70px] flex items-center justify-center rounded-full bg-[#d9caaf]">
          <BsChatLeftDots className="sm:size-12 size-8 text-[#8b6343]" />
        </div>
      </div>
      <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold mb-3 text-center">
        تأكيد رقم الهاتف
      </h1>
      <p className="text-sm md:text-base text-center text-[#5d5d5d] mb-4">
        تم ارسال رمز تاكيد على رقم هاتفك, تحقق من هاتفك وادخل الرمز
      </p>
      <div className="flex items-center gap-2 text-sm sm:mb-11 mb-5">
        <span dir="ltr" className="text-[#3d3d3d]">
          {phoneNumber}
        </span>
        <Link href={"/sign-in"} className="font-bold text-sm text-[#8b6343]">
          تعديل
        </Link>
      </div>
      <div dir="ltr" className="mb-6">
        <Controller
          control={control}
          name="code"
          render={({ field }) => (
            <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
              <InputOTPGroup className="gap-2">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot key={index} index={index} className="sm:size-16" />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        {errors.code && <p className="text-red-500 text-sm">{errors.code.message}</p>}
      </div>
      <Button className="w-full mb-3" size={"lg"} disabled={loading} type="submit">
        {loading ? <Loader2 className="size-5 animate-spin" /> : "تأكيد"}
      </Button>

      <Button className="w-full mb-3" size={"lg"} variant={"outline"} asChild>
        <Link href={"/sign-in"}> العودة لتسجيل البيانات</Link>
      </Button>
      {globalErrorMessage && (
        <p className="text-red-500 text-sm text-center py-2">{globalErrorMessage}</p>
      )}
      {countDown > 0 && (
        <p className="text-neural-500 text-sm">
          يرجى محاولة إرسال رمز مرة اخرى بعد{" "}
          <span className="text-primary-600 font-bold">{formatTime(countDown)}</span>
        </p>
      )}
      {countDown === 0 && (
        <p
          className={`text-primary-500 hover:underline text-sm cursor-pointer ${
            codeLoading ? "pointer-events-none" : "pointer-events-auto"
          }`}
          onClick={resendCode}
        >
          {codeLoading ? <Loader2 className="size-4 animate-spin" /> : "ارسال رمز جديد"}
        </p>
      )}
    </form>
  );
}
