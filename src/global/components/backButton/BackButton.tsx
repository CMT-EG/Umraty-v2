"use client";
import { cn } from "@/global/shadcn/lib/utils";
import { Button } from "@/global/shadcn/ui/button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  text?: string;
  toHome?: boolean;
  isAbsolute?: boolean;
  className?: string;
  prev?: () => void;
  [key: string]: any;
};
export default function BackButton({
  text = "الرجوع للخلف",
  toHome = false,
  isAbsolute = false,
  className,
  prev,
  ...props
}: Props) {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant={"ghost"}
      className={cn(
        " h-6 justify-end items-center gap-2 inline-flex w-fit p-5",
        isAbsolute && "absolute top-2 start-2",
        className
      )}
      onClick={() => {
        prev ? prev() : toHome && !prev ? router.push("/") : router.back();
      }}
      {...props}
    >
      <MoveRight className="!w-4 !h-6 relative" />
      <div className="text-right text-[#7b7b7b] font-bold">{text}</div>
    </Button>
  );
}
