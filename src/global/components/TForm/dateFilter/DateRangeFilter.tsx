"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { format } from "date-fns";
import { ar } from "date-fns/locale";

import { Button } from "@/global/shadcn/ui/button";
import { Calendar } from "@/global/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/global/shadcn/ui/popover";
import DateSVG from "./asstes/DateSVG";
import { ArrowRightLeft } from "lucide-react";

export function DateRangeFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // تخزين التواريخ المختارة محليًا قبل الإرسال
  const [tempStartDate, setTempStartDate] = React.useState<Date | null>(null);
  const [tempEndDate, setTempEndDate] = React.useState<Date | null>(null);

  React.useEffect(() => {
    const startParam = searchParams.get("start_date");
    const endParam = searchParams.get("end_date");

    setTempStartDate(startParam ? new Date(startParam) : null);
    setTempEndDate(endParam ? new Date(endParam) : null);
  }, [searchParams]);

  // تحديث التاريخ في URL عند النقر على الزر
  const applyDateFilter = () => {
    const currentParams = new URLSearchParams(window.location.search);

    if (tempStartDate) {
      currentParams.set("start_date", tempStartDate.toISOString());
    } else {
      currentParams.delete("start_date");
    }

    if (tempEndDate) {
      currentParams.set("end_date", tempEndDate.toISOString());
    } else {
      currentParams.delete("end_date");
    }

    router.replace(`?${currentParams.toString()}`);
    router.refresh();
  };

  // تبديل القيم بين start_date و end_date
  const swapDates = () => {
    setTempStartDate(tempEndDate);
    setTempEndDate(tempStartDate);
  };

  return (
    <div className="flex flex-col items-center sm:flex-row justify-between gap-4 w-full">
      {/* اختيار تاريخ البداية */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="relative ps-10 flex gap-2 w-full justify-start bg-[#F6F6F6]"
          >
            <DateSVG className="absolute start-4" />
            {tempStartDate ? (
              format(tempStartDate, "dd/MM/yyyy", { locale: ar })
            ) : (
              <span className="text-gray-400">اختر تاريخ البداية</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            locale={ar}
            mode="single"
            selected={tempStartDate || undefined}
            onSelect={(date) => setTempStartDate(date || null)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* زر تبديل التواريخ */}
      <Button
        variant="ghost"
        onClick={swapDates}
        disabled={!tempStartDate && !tempEndDate}
        className="h-10 w-10 flex items-center justify-center rounded-full border border-[#888888] sm:mt-0 mt-4"
      >
        <ArrowRightLeft className="text-[#1C1B1F]" />
      </Button>
      {/* اختيار تاريخ النهاية */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="relative ps-10 flex gap-2 w-full justify-start bg-[#F6F6F6]"
          >
            <DateSVG className="absolute start-4" />
            {tempEndDate ? (
              format(tempEndDate, "dd/MM/yyyy", { locale: ar })
            ) : (
              <span className="text-gray-400">اختر تاريخ النهاية</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            locale={ar}
            mode="single"
            selected={tempEndDate || undefined}
            onSelect={(date) => setTempEndDate(date || null)}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {/* زر تطبيق التواريخ */}
      <Button
        onClick={applyDateFilter}
        disabled={!tempStartDate && !tempEndDate}
        className="h-10 px-4 bg-primary-600 w-full sm:w-[182px] shrink-0 sm:mt-0 mt-4"
      >
        ابحث
      </Button>
    </div>
  );
}
