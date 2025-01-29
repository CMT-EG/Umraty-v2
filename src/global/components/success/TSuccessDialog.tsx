"use client";
import { Button } from "@/global/shadcn/ui/button";
import { Trash } from "lucide-react";
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
          className="sm:w-[500px] sm:h-96 max-sm:w-[90%] flex flex-col gap-8 items-center justify-center"
          onInteractOutside={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <div className="h-24 w-24 flex justify-center items-center rounded-full bg-[#FF4C51]">
            <div className="h-14 w-14 flex justify-center items-center rounded-full shadow-[0px_20px_40px_0px_rgba(0,0,0,0.30)] bg-white">
              <Trash className="w-6 h-6 text-[#FF4C51]" />
            </div>
          </div>

          <DialogHeader className="flex flex-col gap-4">
            {title && (
              <DialogTitle className="text-center text-2xl font-medium leading-none">
                {title}
              </DialogTitle>
            )}
            {subTitle && (
              <DialogDescription className="text-center text-neutral-600/90 text-base tracking-tight leading-none">
                {subTitle}
              </DialogDescription>
            )}
          </DialogHeader>
          <DialogFooter className="flex gap-3 !justify-center !items-center">
            <Button
              className=" h-[42px] w-full shrink-1 text-[#050505] text-[15px] font-medium uppercase leading-relaxed tracking-wide"
              variant="outline"
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
