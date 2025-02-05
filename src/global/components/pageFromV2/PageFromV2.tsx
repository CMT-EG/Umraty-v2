"use client";
import { cn } from "@/global/shadcn/lib/utils";
import React from "react";

type Props = {
  isLoading?: boolean;
  title?: string;
  titleNote?: string;
  componentsInHeader?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};
export default function PageFromV2({
  isLoading = false,
  title,
  titleNote,
  componentsInHeader,
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "border rounded-2xl p-6 bg-white font-Alexandria",
        className
      )}
    >
      <div className="flex justify-between items-center">
        {title && (
          <h1 className="font-semibold font-Alexandria">
            {title} <span className="text-gray-600">{titleNote}</span>
          </h1>
        )}
        <div className="flex gap-2">{componentsInHeader}</div>
      </div>
      {(title || componentsInHeader) && <hr className="block w-full my-4" />}
      <div>
        {!isLoading && (
          <div className="flex flex-col max-h-full gap-6 pt-3 h-100-31px">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
