"use client";
import React, { ReactNode } from "react";
import { useRef } from "react";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/global/shadcn/ui/form";
import { cn } from "@/global/shadcn/lib/utils";
import TimePicker from "./TimePicker";
import { get } from "lodash";

interface TimePickerFormFieldProps {
  form: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  fromItemClassName?: string;
  allowedFormats?: ("hms" | "hm" | "ms" | "h" | "m" | "s")[];
  isHorizontal?: boolean;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  componentEndField?: ReactNode;
  appearIcon?: boolean;
}

const TTimePicker: React.FC<TimePickerFormFieldProps> = ({
  form,
  name,
  label,
  description,
  fromItemClassName = "",
  allowedFormats = ["hm"],
  isHorizontal = false,
  className,
  disabled,
  componentEndField,
  readOnly,
  appearIcon,
  ...props
}) => {
  const endFieldRef = useRef<HTMLDivElement>(null);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const { onChange, value, ...fieldProps } = field;

        return (
          <FormItem
            className={cn(
              "w-full",
              isHorizontal && "flex items-center justify-between",
              fromItemClassName
            )}
          >
            {label && (
              <FormLabel
                className={cn(
                  "text-gray-600",
                  isHorizontal && "text-nowrap w-[150px] truncate py-1"
                )}
              >
                {label}
              </FormLabel>
            )}
            <FormControl>
              <div className={cn("relative", isHorizontal && "w-full")}>
                <TimePicker
                  value={value}
                  onChange={onChange}
                  allowedFormats={allowedFormats}
                  className={cn(
                    isHorizontal && "w-full",
                    disabled && "opacity-50 cursor-not-allowed",
                    !!get(form.formState?.errors, name)
                      ? "border-delete"
                      : "border-gray-300",
                    className
                  )}
                  readOnly={readOnly}
                  appearIcon={appearIcon}
                  {...fieldProps}
                  {...props}
                />
                {componentEndField && (
                  <div
                    ref={endFieldRef}
                    className="absolute w-fit inset-y-0 end-0 pe-3 flex items-center text-gray-400 focus:outline-none"
                  >
                    {componentEndField}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
            {description && <FormDescription>{description}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
};

export default TTimePicker;
