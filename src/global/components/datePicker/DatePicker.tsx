import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shadcn/ui/popover";
import { cn } from "../../shadcn/lib/utils";
import { CalenderIcon } from "@/global/assets/svg/CalenderIcon";
import { Calendar } from "../../shadcn/ui/calendar";
import { formatDate } from "../../utils/date";

interface DatePickerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  title: string;
  required?: boolean;
  placeholder: string;
  date: Date | undefined;
  onChange: (value: Date | undefined) => void;
}

export function DatePicker({
  title,
  required = false,
  placeholder,
  className,
  date,
  onChange,
  ...props
}: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex items-center gap-3 px-2.5 h-14 flex-grow cursor-pointer",
            placeholder
          )}
          {...props}
        >
          <CalenderIcon />
          <span className="text-black shrink-0 grow-0 font-bold">
            {title} {required && <span className="text-red-500">*</span>}
            <br />
            <span className="text-sm font-normal text-[#777E90] w-fit shrink-0 grow-0">
              {date ? formatDate(date) : placeholder}
            </span>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={onChange}
          initialFocus
          disabled={(day) => day < today}
          className={className}
        />
      </PopoverContent>
    </Popover>
  );
}
