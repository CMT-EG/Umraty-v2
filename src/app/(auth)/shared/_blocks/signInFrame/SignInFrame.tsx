import Image from "next/image";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { Button } from "@/main/common/shadcn/ui/button";
import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import PhoneInput from "@/main/common/components/phoneInput/PhoneInput";
import { cn } from "@/main/common/shadcn/lib/utils";
import { phoneSchema } from "../../schema/phoneSchema";
export function SignInFrame({
  onSuccess,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  onSuccess?: (phoneNumber: string) => any;
}) {
  const [loading, setLoading] = useState(false);
  const [globalErrorMessage, setGlobalErrorMessage] = useState("");
  type phoneSchemaType = z.infer<typeof phoneSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<phoneSchemaType>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: { phone_code: "966", phone_number: "" } },
  });

  async function onSubmit(values: phoneSchemaType) {
    setLoading(true);
    const res = await requestHelpers.postData(
      `${API_ROOT}/auth/customer/send-otp/`,
      {
        phone_number: `+${values.phone.phone_code}${values.phone.phone_number}`,
      }
    );
    if (res.status != 200) {
      setLoading(false);
      setGlobalErrorMessage("حدث خطأ ما, حاول ثانية في وقت لاحق");
    } else {
      if (onSuccess) {
        onSuccess(`+${values.phone.phone_code}${values.phone.phone_number}`);
      }
    }
  }

  return (
    <div
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <div className="w-full max-w-xl md:py-20 py-10 px-8 bg-white rounded-[1.25rem] flex flex-col items-center">
        <Image
          src={"/logo-colored.png"}
          width={424}
          height={196}
          alt="Logo"
          className="w-[13.5rem] md:mb-11 mb-5"
        />
        <h1 className="text-4xl font-extrabold mb-8">معلومات الأتصال</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="phone_number" className="text-neutral-500">
              رقم الهاتف
            </label>
            <Controller
              control={control}
              name="phone"
              render={({ field: { value, onChange } }) => (
                <PhoneInput value={value} onValueChange={onChange} />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">
                {errors.phone.message || errors.phone.phone_number?.message}
              </p>
            )}
          </div>
          <Button
            size={"lg"}
            className="w-full text-base"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              "تسجيل البيانات"
            )}
          </Button>
          {globalErrorMessage && (
            <p className="text-red-500 text-center text-sm py-2">
              {globalErrorMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
