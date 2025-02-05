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
import { Dispatch, SetStateAction } from "react";
import SuccessIconSVG from "./assets/svg/SuccessIconSVG";
import { cn } from "@/global/shadcn/lib/utils";

type Props = {
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  btnText?: string;
  isBrownColor?: boolean;
  dialogClassName?: string;
};
export function TSuccessDialog({
  open = false,
  setOpen,
  title,
  subTitle,
  btnText = "إغلاق",
  isBrownColor,
  dialogClassName,
}: Props) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        {/* <DialogTrigger asChild>
          <div>
            <Button
              type="button"
              variant={"outline"}
              className="text-green-300 h-[30px]"
            >
              افتح
            </Button>
          </div>
        </DialogTrigger> */}
        <DialogContent
          className={cn(
            "sm:w-[500px] max-sm:w-[90%] flex flex-col gap-8 items-center justify-center rounded-[20px]",
            dialogClassName
          )}
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <div
            className={cn(
              "h-[140px] w-[140px] flex justify-center items-center rounded-full shrink-0",
              isBrownColor ? "bg-[#F7F4EF]" : "bg-[#EBFEF4]"
            )}
          >
            <div
              className={cn(
                "h-[104px] w-[104px] shrink-0 flex justify-center items-center rounded-full",
                isBrownColor ? "bg-[#D9CAAF]" : "bg-[#A4F6CE]"
              )}
            >
              <SuccessIconSVG
                className={cn(
                  "w-[54px] h-[54px]",
                  isBrownColor ? "text-primary-600" : "text-[#0abf7e]"
                )}
                stroke={isBrownColor ? "#8B6343" : "#0ABF7E"}
              />
            </div>
          </div>

          <DialogHeader className="flex flex-col items-center gap-4">
            {title && (
              <DialogTitle className="text-center text-[#131416] text-[28px] md:text-[40px] font-extrabold">
                {title}
              </DialogTitle>
            )}
            {subTitle && (
              <DialogDescription className="text-center text-neutral-600/90 text-base tracking-tight leading-none">
                {subTitle}
              </DialogDescription>
            )}
          </DialogHeader>
          <DialogFooter className="flex gap-3 !justify-center !items-center w-full">
            <Button
              className={cn(
                "h-[42px] w-full shrink-1 font-extrabold rounded-full text-[#fbfcfc]",
                isBrownColor
                  ? "bg-primary-600 hover:text-primary-400"
                  : "bg-[#0abf7e] hover:bg-[#0abf7ecc]"
              )}
              onClick={() => setOpen && setOpen(false)}
            >
              {btnText}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

/*
{isAllow ||
  (isAllowMethod() && (
))}
*/
