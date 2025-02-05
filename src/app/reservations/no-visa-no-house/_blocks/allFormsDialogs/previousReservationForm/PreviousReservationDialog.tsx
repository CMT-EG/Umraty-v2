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
import { CircleAlert } from "lucide-react";
import { cn } from "@/global/shadcn/lib/utils";

type Props = {
  title?: string;
  subTitle?: string;
  open?: boolean;
  setOpen?: any;
  phoneNumber?: string | number;
  handleFunction?: () => void;
  compoentContent?: any;
  className?: string;
};

export function PreviousReservationDialog({
  title,
  subTitle,
  open,
  setOpen,
  phoneNumber,
  handleFunction,
  compoentContent,
  className,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(
          "max-sm:w-[90%] flex flex-col gap-8 items-center justify-start rounded-[20px]",
          className
        )}
        onInteractOutside={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <div className="h-[140px] w-[140px] flex justify-center items-center rounded-full bg-[#F7F4EF] shrink-0">
          <div className="h-[104px] w-[104px] shrink-0 flex justify-center items-center rounded-full bg-[#D9CAAF]">
            <CircleAlert className="w-[54px] h-[54px] text-primary-600" />
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
        {compoentContent}
        <DialogFooter className="flex gap-3 !justify-center !items-center w-full">
          <TButton
            type="button"
            onClick={() => {
              handleFunction && handleFunction();
              setOpen(false);
            }}
            className=" h-[42px] w-full shrink-1 font-extrabold rounded-full text-white"
          >
            {"نعم"}
          </TButton>
          <Button
            className=" h-[42px] w-full shrink-1  font-extrabold rounded-full text-primary hover:text-primary-400 text-[15px] uppercase leading-relaxed tracking-wide"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            {"لا"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
