"use client";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/global/shadcn/lib/utils";

type TimeFormat = "hms" | "hm" | "ms" | "h" | "m" | "s";

interface TimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  allowedFormats?: TimeFormat[];
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  readOnly?: boolean;
  appearIcon?: boolean;
  inputClassName?: string;
  [key: string]: any;
}

interface FormatLabels {
  hms: string;
  hm: string;
  ms: string;
  h: string;
  m: string;
  s: string;
}

const TimePicker = React.forwardRef<HTMLInputElement, TimePickerProps>(
  (
    {
      value = "",
      onChange,
      allowedFormats = ["hms", "hm", "ms", "h", "m", "s"],
      className = "",
      disabled = false,
      placeholder = "حدد الوقت",
      name,
      readOnly = false,
      appearIcon = true,
      inputClassName,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedTime, setSelectedTime] = useState<string>(value);
    const [period, setPeriod] = useState<"AM" | "PM">("AM");
    const [format, setFormat] = useState<TimeFormat>(allowedFormats[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const formats: FormatLabels = {
      hms: "Hours, Minutes & Seconds",
      hm: "Hours & Minutes",
      ms: "Minutes & Seconds",
      h: "Hours Only",
      m: "Minutes Only",
      s: "Seconds Only",
    };

    const hours: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes: string[] = [
      "00",
      "05",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55",
    ];
    const seconds: string[] = Array.from({ length: 60 }, (_, i) =>
      i.toString().padStart(2, "0")
    );

    useEffect(() => {
      setSelectedTime(value);
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
      if (!allowedFormats.includes(format)) {
        setFormat(allowedFormats[0]);
        setSelectedTime("");
        onChange?.("");
      }
    }, [allowedFormats, format, onChange]);

    const formatTimeSelection = (
      hour: string | number,
      minute: string,
      second?: string
    ): string => {
      switch (format) {
        case "hms":
          return `${hour}:${minute}:${second || "00"} ${period}`;
        case "hm":
          return `${hour}:${minute} ${period}`;
        case "ms":
          return `${minute}:${second || "00"}`;
        case "h":
          return `${hour} ${period}`;
        case "m":
          return `${minute}`;
        case "s":
          return `${second || "00"}`;
        default:
          return `${hour}:${minute} ${period}`;
      }
    };

    const handleTimeInput = (e: ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.target.value;
      setSelectedTime(newValue);
      onChange?.(newValue);
    };

    const handleTimeSelection = (newTime: string): void => {
      setSelectedTime(newTime);
      onChange?.(newTime);
    };

    const toggleDropdown = (): void => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const shouldShowHours: boolean = ["hms", "hm", "h"].includes(format);
    const shouldShowMinutes: boolean = ["hms", "hm", "ms", "m"].includes(
      format
    );
    const shouldShowSeconds: boolean = ["hms", "ms", "s"].includes(format);
    const shouldShowPeriod: boolean = ["hms", "hm", "h"].includes(format);

    return (
      <div
        className={cn(
          "relative w-full",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        ref={dropdownRef}
      >
        <div className="relative">
          <input
            ref={ref}
            type="text"
            name={name}
            className={cn(
              "w-full px-4 py-2 ps-9 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500",
              disabled && "bg-gray-100 cursor-not-allowed",
              inputClassName
            )}
            placeholder={placeholder}
            value={selectedTime}
            onChange={handleTimeInput}
            onClick={toggleDropdown}
            disabled={disabled}
            readOnly={readOnly}
            onKeyDown={(e) => {
              e.preventDefault();
            }}
            {...props}
          />
          <button
            className={cn(
              "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400",
              !disabled && "hover:text-gray-600",
              disabled && "cursor-not-allowed"
            )}
            onClick={() => {
              !readOnly && toggleDropdown();
            }}
            type="button"
            disabled={disabled}
          >
            {appearIcon && <Clock size={20} />}
          </button>
        </div>

        {isOpen && !readOnly && !disabled && (
          <div className="absolute mt-1 w-full max-w-[300px] bg-white border rounded-md shadow-lg z-10">
            {allowedFormats.length > 1 && (
              <div className="p-2 border-b">
                <select
                  className="w-full p-2 border rounded-md"
                  value={format}
                  onChange={(e) => {
                    setFormat(e.target.value as TimeFormat);
                    setSelectedTime("");
                    onChange?.("");
                  }}
                >
                  {Object.entries(formats)
                    .filter(([key]) =>
                      allowedFormats.includes(key as TimeFormat)
                    )
                    .map(([key, label]) => (
                      <option key={key} value={key}>
                        {label}
                      </option>
                    ))}
                </select>
              </div>
            )}

            <div className="flex flex-row-reverse p-2 border-b">
              {shouldShowHours && (
                <div className="flex-1 pr-1 border-x">
                  <p className="text-center text-gray-600 select-none">ساعة</p>
                  <div className="max-h-48 overflow-y-auto">
                    {hours.map((hour) => (
                      <button
                        key={hour}
                        className="w-full text-left px-3 py-1 hover:bg-primary-50 rounded"
                        onClick={() => {
                          const parts = selectedTime.split(/[:\s]/);
                          const currentMinute = parts[1] || "00";
                          const currentSecond = parts[2] || "00";
                          const newTime = formatTimeSelection(
                            hour,
                            currentMinute,
                            currentSecond
                          );
                          handleTimeSelection(newTime);
                        }}
                        type="button"
                      >
                        {hour}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {shouldShowMinutes && (
                <div className="flex-1 px-1 border-x border-l">
                  <p className="text-center text-gray-600 select-none">دقيقة</p>
                  <div className="max-h-48 overflow-y-auto">
                    {minutes.map((minute) => (
                      <button
                        key={minute}
                        className="w-full text-left px-3 py-1 hover:bg-primary-50 rounded"
                        onClick={() => {
                          const parts = selectedTime.split(/[:\s]/);
                          const currentHour = parts[0] || "12";
                          const currentSecond = parts[2] || "00";
                          const newTime = formatTimeSelection(
                            currentHour,
                            minute,
                            currentSecond
                          );
                          handleTimeSelection(newTime);
                        }}
                        type="button"
                      >
                        {minute}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {shouldShowSeconds && (
                <div className="flex-1 pl-1 border-x border-l">
                  <p className="text-center text-gray-600 select-none">ثانية</p>
                  <div className="max-h-48 overflow-y-auto">
                    {seconds.map((second) => (
                      <button
                        key={second}
                        className="w-full text-left px-3 py-1 hover:bg-primary-50 rounded"
                        onClick={() => {
                          const parts = selectedTime.split(/[:\s]/);
                          const currentHour = parts[0] || "12";
                          const currentMinute = parts[1] || "00";
                          const newTime = formatTimeSelection(
                            currentHour,
                            currentMinute,
                            second
                          );
                          handleTimeSelection(newTime);
                        }}
                        type="button"
                      >
                        {second}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {shouldShowPeriod && (
              <div className="flex items-center gap-4 p-2 border-x border-t">
                <button
                  className={cn(
                    "px-3 py-1 rounded",
                    period === "AM"
                      ? "bg-primary-500 text-white"
                      : "hover:bg-primary-50"
                  )}
                  onClick={() => {
                    setPeriod("AM");
                    if (selectedTime) {
                      const newTime = selectedTime.replace(/PM$/, "AM");
                      handleTimeSelection(newTime);
                    }
                  }}
                  type="button"
                >
                  AM
                </button>
                <button
                  className={cn(
                    "px-3 py-1 rounded",
                    period === "PM"
                      ? "bg-primary-500 text-white"
                      : "hover:bg-primary-50"
                  )}
                  onClick={() => {
                    setPeriod("PM");
                    if (selectedTime) {
                      const newTime = selectedTime.replace(/AM$/, "PM");
                      handleTimeSelection(newTime);
                    }
                  }}
                  type="button"
                >
                  PM
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";

export default TimePicker;
