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

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  subTitle?: string;
  btnText?: string;
};
export function TSuccessDialog({
  open,
  setOpen,
  title,
  subTitle,
  btnText = "إغلاق",
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
          className="sm:w-[500px] max-sm:w-[90%] flex flex-col gap-8 items-center justify-center rounded-[20px]"
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <div className="h-[140px] w-[140px] flex justify-center items-center rounded-full bg-[#EBFEF4] shrink-0">
            <div className="h-[104px] w-[104px] shrink-0 flex justify-center items-center rounded-full bg-[#A4F6CE]">
              <SuccessIconSVG className="w-[54px] h-[54px]" />
            </div>
          </div>

          <DialogHeader className="flex flex-col gap-4">
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
              className="h-[42px] w-full shrink-1 font-extrabold rounded-full bg-[#0abf7e] hover:bg-[#0abf7ecc] text-[#fbfcfc]"
              onClick={() => setOpen(false)}
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
