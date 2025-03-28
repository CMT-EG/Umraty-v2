"use client";
import { CalenderIcon } from "@/global/assets/svg/CalenderIcon";
import * as React from "react";
import TimePicker from "../TForm/timePacker/TimePicker";

interface TimeInputOptionProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  title: string;
  required?: boolean;
  inputClassName?: string;
}

export function TimeInputOption({
  value,
  onChange,
  title,
  required = false,
  inputClassName = "",
}: TimeInputOptionProps) {
  const triggerRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (triggerRef.current) {
      triggerRef.current.click();
    }
  };

  return (
    <div className="flex items-center flex-grow gap-3 cursor-pointer" onClick={handleClick}>
      <CalenderIcon />
      <div className="flex flex-col">
        <p className="text-black font-bold mb-1">
          {title} {required && <span className="text-red-500">*</span>}
        </p>
        <div className="relative">
          <TimePicker
            ref={triggerRef}
            value={value}
            onChange={onChange}
            allowedFormats={["hm"]}
            inputClassName={`${inputClassName} w-full text-center !appearance-none text-[#777E90] border-none !p-0 focus:outline-none focus:ring-0 text-sm cursor-pointer`}
          />
          {/* <input
            type="time"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${inputClassName} w-full text-center !appearance-none text-[#777E90] border-none p-0 focus:outline-none text-sm`}
          /> */}
        </div>
      </div>
    </div>
  );
}
