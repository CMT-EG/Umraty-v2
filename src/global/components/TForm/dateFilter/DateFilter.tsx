"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { format } from "date-fns";

import { cn } from "@/global/shadcn/lib/utils";
import { Button } from "@/global/shadcn/ui/button";
import { Calendar } from "@/global/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/global/shadcn/ui/popover";
import { ar } from "date-fns/locale";
import DateSVG from "./asstes/DateSVG";

interface DateFilterProps {
  title?: string;
  minValue?: Date | null;
  maxValue?: Date | null;
  name: string;
  setDateValue?: (date: Date | null) => void;
}

export function DateFilter({
  title,
  minValue,
  maxValue,
  name,
  setDateValue,
}: DateFilterProps) {
  const [date, setDate] = React.useState<Date | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // تحديث قيمة التاريخ عند تغيير الـ searchParams
  React.useEffect(() => {
    const dateParam = searchParams.get(name);
    if (dateParam) {
      const newDate = new Date(dateParam);
      setDate(newDate);
      setDateValue && setDateValue(newDate);
    } else {
      setDate(null);
      setDateValue && setDateValue(null);
    }
  }, [searchParams, name, setDateValue]);

  // تحديث التاريخ في URL وتحديث البحث
  const handleDateChange = (selectedDate: Date | undefined) => {
    const newDate = selectedDate || null;
    setDate(newDate);
    setDateValue && setDateValue(newDate);

    const currentParams = new URLSearchParams(window.location.search);
    if (newDate) {
      currentParams.set(name, newDate.toISOString());
    } else {
      currentParams.delete(name);
    }

    const queryString = currentParams.toString();
    router.replace(`?${queryString}`);
    router.refresh(); // ✅ إجبار تحديث البحث
  };

  // تعطيل التواريخ خارج النطاق المحدد
  const isDisabled = (date: Date) => {
    if (minValue && date < minValue) return true;
    if (maxValue && date > maxValue) return true;
    return false;
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "relative ps-10 flex gap-2 w-full sm:w-full justify-start text-start font-normal bg-[#F6F6F6]",
            !date && "text-muted-foreground"
          )}
        >
          <DateSVG className="absolute start-4" />
          {date ? (
            format(date, "dd/MM/yyyy", { locale: ar })
          ) : (
            <span className="text-gray-400">{title || "أختر التاريخ"}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          locale={ar}
          mode="single"
          selected={date || undefined}
          onSelect={handleDateChange}
          initialFocus
          disabled={isDisabled}
        />
      </PopoverContent>
    </Popover>
  );
}
