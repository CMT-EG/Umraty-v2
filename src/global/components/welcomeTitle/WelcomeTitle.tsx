import React from "react";
import { cn } from "../../shadcn/lib/utils";

type Props = {
  title?: string;
  subTitle?: string;
  [key: string]: any;
};

export default function WelcomeTitle({ title, subTitle, ...props }: Props) {
  return (
    <div
      className={cn("flex flex-col pt-4", props?.className)}
      {...props}
    >
      <p className="text-[#030a0b] text-[24px] sm:text-[40px] font-extrabold text-nowrap">
        {title}
      </p>
      {subTitle && (
        <p className="pt-1 text-[#7b7b7b]">{subTitle}</p>
      )}
    </div>
  );
}
