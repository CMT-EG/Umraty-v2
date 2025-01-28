"use client";
import { Button } from "@/global/shadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/global/shadcn/ui/dialog";
import TButton from "@/global/components/TForm/TButton";
import PhoneOtpSVG from "./assets/PhoneOtpSVG";
import { Controller } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/global/components/inputOtp/InputOtp";
import { REGEXP_ONLY_DIGITS } from "input-otp";

type Props = {
  id?: number | string;
  body?: any;
  form?: any;
  mutate?: any;
  isPending?: boolean;
  isAllow?: boolean;
  title?: string;
  subTitle?: string;
  open?: boolean;
  setOpen?: any;
  phoneNumber?: string | number;
};

export function OtpForm({
  id,
  body,
  form,
  mutate,
  isPending,
  isAllow: _isAllow = false,
  title,
  subTitle,
  open,
  setOpen,
  phoneNumber,
}: Props) {
  // const { isAllowMethod } = useHasPermission({ type: "disActive" });

  const handleDisActive = () => {
    const onSuccess = () => {
      setOpen(false);
      form.reset({});
    };
    const onError = (error: Error) => {
      console.error("Error editing employee:", error);
    };
    if (mutate && id && !isPending) {
      mutate(
        { id, ...body },
        {
          onSuccess,
          onError,
        }
      );
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:w-[500px] sm:h-98 max-sm:w-[90%] flex flex-col gap-8 items-center justify-center"
        onInteractOutside={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <div className="h-[140px] w-[140px] flex justify-center items-center rounded-full bg-[#F7F4EF] shrink-0">
          <div className="h-[104px] w-[104px] shrink-0 flex justify-center items-center rounded-full bg-[#D9CAAF]">
            <PhoneOtpSVG className="w-[54px] h-[54px] text-primary-600" />
          </div>
        </div>

        <DialogHeader className="flex flex-col gap-4">
          {title && (
            <DialogTitle className="text-center text-[#131416] text-[40px] font-extrabold leading-none">
              {title}
            </DialogTitle>
          )}
          {subTitle && (
            <DialogDescription className="text-center text-[#878787] text-base tracking-tight leading-none">
              {subTitle}
            </DialogDescription>
          )}
          {phoneNumber && (
            <DialogDescription className="text-center text-[#878787] text-base tracking-tight leading-none">
              {phoneNumber}
            </DialogDescription>
          )}
        </DialogHeader>
        <div dir="ltr" className="mb-6">
          <Controller
            control={form.control}
            name="code"
            render={({ field }) => (
              <InputOTP
                maxLength={6}
                value={field.value}
                onChange={field.onChange}
                pattern={REGEXP_ONLY_DIGITS}
              >
                <InputOTPGroup className="gap-2">
                  {Array(6)
                    .fill(1)
                    .map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className="sm:size-16 border-[#d1d1d1]"

                      />
                    ))}
                </InputOTPGroup>
              </InputOTP>
            )}
          />
          {form?.formState?.errors?.code && (
            <p className="text-red-500 text-sm">{form?.formState?.errors?.code?.message}</p>
          )}
        </div>
        <DialogFooter className="flex !flex-col gap-3 !justify-center !items-center w-full">
          <TButton
            type="submit"
            disabled={isPending}
            onClick={() => {
              handleDisActive();
            }}
            className=" h-[42px] w-full shrink-1 font-extrabold rounded-full text-white"
          >
            {"التأكيد"}
          </TButton>
          <Button
            className=" h-[42px] w-full shrink-1  font-extrabold rounded-full text-primary hover:text-primary-400 text-[15px] uppercase leading-relaxed tracking-wide"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            {"الرجوع"}
          </Button>
          <div className="flex justify-center gap-1 text-center">
            <span className="text-[#878787] text-sm font-normal leading-normal">
              لم يصلك رمز التحقق بعد ؟ يرجي المحاولة مرة أخري في
            </span>
            <span className="text-[#8b6343] text-sm font-bold leading-normal">
              00:56
            </span>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
