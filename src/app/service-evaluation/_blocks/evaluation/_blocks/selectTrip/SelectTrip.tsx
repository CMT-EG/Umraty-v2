"use client";
import { useState } from "react";
import { Button } from "@/global/shadcn/ui/button";
import TripDetails from "./_blocks/tripDetails/TripDetails";
import {
  SelectContentTwo,
  SelectItemTwo,
  SelectTriggerTwo,
  SelectTwo,
  SelectValueTwo,
} from "@/global/shadcn/ui/selectTwo";

export default function SelectTrip() {
  const [selectedValue, setSelectedValue] = useState("");

  const tripOptions = [
    { value: "option1", label: "الرحلة الأولى" },
    { value: "option2", label: "الرحلة الثانية" },
    { value: "option3", label: "الرحلة الثالثة" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-[#8b5e3c] rounded-2xl my-20">
      {/* Dropdown */}
      <div className="w-full">
        <label className="block mb-2 text-right text-white">
          اختر الرحلة المراد تقسيمها
        </label>
        <SelectTwo
          value={selectedValue}
          onValueChange={(value) => setSelectedValue(value)}
        >
          <SelectTriggerTwo className="w-full bg-[#8b5e3c] text-white border border-white rounded-lg focus:ring-0 focus:ring-offset-0">
            <SelectValueTwo placeholder="اختر الرحلة" />
          </SelectTriggerTwo>
          <SelectContentTwo className="bg-white text-[#8b5e3c]">
            {tripOptions.map((option) => (
              <SelectItemTwo key={option.value} value={option.value}>
                {option.label}
              </SelectItemTwo>
            ))}
          </SelectContentTwo>
        </SelectTwo>
      </div>

      {/* Button */}
      <Button
        className="mt-4 px-8 py-2 bg-white text-[#8b5e3c] rounded-lg shadow-md hover:bg-[#f5f5f5] w-full"
        onClick={() =>
          alert(`تم اختيار: ${selectedValue || "لم يتم الاختيار"}`)
        }
      >
        الاختيار
      </Button>
      <TripDetails
        tripNumber="#166229"
        tripNumberLabel="رقم الرحلة"
        title="تفاصيل الرحلة"
        bookingNumber="21125"
        bookingNumberLabel="رقم الحجز"
        tripDate="22/2/2025"
        tripDateLabel="تاريخ الرحلة"
      />
    </div>
  );
}
