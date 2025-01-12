"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../../shadcn/ui/popover";
import { cn } from "../../shadcn/lib/utils";
import { CalenderIcon } from "@/main/global/assets/svg/CalenderIcon";
import { Calendar } from "../../shadcn/ui/calendar";
import { formatDate } from "../../utils/date";

export function DatePicker({
  placeholder,
  className: _className,
  date,
  onChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  placeholder: string;
  date: Date | undefined;
  onChange: (_value: Date | undefined) => any;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex items-center px-2.5 h-14 bg-neural-50 rounded-xl flex-grow",
            placeholder
          )}
        >
          <CalenderIcon className='size-4 me-2 shrink-0 grow-0' />
          <span className='text-sm text-neutral-600 w-fit shrink-0 grow-0'>
            {date ? formatDate(date) : placeholder}
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={onChange}
          initialFocus
          disabled={(day) => day < today} // Disable previous days
        />
      </PopoverContent>
    </Popover>
  );
}
