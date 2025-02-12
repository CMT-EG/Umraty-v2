import { cn } from "@/global/shadcn/lib/utils";
import { Calendar } from "@/global/shadcn/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/global/shadcn/ui/popover";
import { formatDate } from "@/global/utils/date";
import * as React from "react";
import calendar from "@/assets/reservations/calendar.svg";
import Image from "next/image";

interface DateReservationPickerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    title: string;
    required?: boolean;
    placeholder: string;
    date: Date | undefined;
    onChange?: (value: Date | undefined) => void;
}

export function DateReservationPicker({
    title,
    required = false,
    placeholder,
    className,
    date,
    onChange,
    ...props
}: DateReservationPickerProps) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className={cn(
                        "flex items-center gap-3 flex-grow cursor-pointer",
                        placeholder
                    )}
                    {...props}
                >
                    <span className="text-black/70 h-10 w-full block font-bold">
                        {title} {required && <span className="text-red-500">*</span>}
                        <br />
                        <span className="text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-3 rounded-md px-4 w-full text-[#777E90]">
                            {date ? formatDate(date) : placeholder}
                            <Image src={calendar} alt="calendar" />
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
