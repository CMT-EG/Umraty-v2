"use client";
import { DatePicker } from "@/global/components/datePicker/DatePicker";
import { SelectOption } from "@/global/components/selectOption/SelectOption";
import { TimeInputOption } from "@/global/components/timeInput/TimeInputOption";
import { TabsContent } from "@/global/shadcn/ui/tabs";
import React, { useState } from "react";
import useHero from "../../../hooks/useHero";
import { Search } from "lucide-react";
import { SelectArrow } from "@/global/assets/svg/SelectArrow";
import { fakeData } from "../constants/data";
import AgeGroupCounter from "@/global/components/ageGroupCounter/AgeGroupCounter";
import { useReservation } from "../hooks/useReservation";
import { Dropdown } from "@/global/components/dropdown/DropdownMenu";
import { UserIcon } from "@/global/assets/svg/UserIcon";

export const WithoutVisa = ({ isVisa }) => {
  const { pilgrims, setPilgrims, increment, decrement } = useReservation();

  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  const [time, setTime] = useState(currentTime);

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
  };
  const {
    startDate,
    setStartDate,
    handleDateChange,
    setArrivalTime,
    setAvailableArrivalTimes,
    arrivalLocation,
    finishDate,
    setFinishDate,
    setDepartureTime,
    setAvailableDepartureTimes,
    destination,
  } = useHero();

  return (
    <TabsContent
      value={isVisa}
      className="flex flex-wrap items-center gap-4 w-full"
    >
      <DatePicker
        title="تاريخ الذهاب"
        required
        className="flex-grow"
        placeholder="إضافة تاريخ"
        date={startDate}
        onChange={(date) =>
          handleDateChange(
            date,
            setStartDate,
            setArrivalTime,
            setAvailableArrivalTimes,
            "go",
            arrivalLocation
          )
        }
      />
      <DatePicker
        title="تاريخ العودة"
        className="flex-grow"
        placeholder="إضافة تاريخ"
        date={finishDate}
        onChange={(date: any) =>
          handleDateChange(
            date,
            setFinishDate,
            setDepartureTime,
            setAvailableDepartureTimes,
            "return",
            destination
          )
        }
      />
      <SelectOption
        icon={<SelectArrow />}
        triggerClassName="h-4 border-none p-0 [&_svg]:hidden w-[150px]"
        placeholder="من أين أنت منطلق؟"
        options={fakeData}
        title="نقطة الانطلاق"
        required
      />
      <SelectOption
        icon={<SelectArrow />}
        triggerClassName="h-4 border-none p-0 [&_svg]:hidden w-[150px]"
        placeholder="إلي أين أنت ذاهب؟"
        options={fakeData}
        title="نقطة الوصول"
      />
      <TimeInputOption
        title="توقيت رحلة الذهاب"
        value={time}
        onChange={handleTimeChange}
        required
      />
      <TimeInputOption
        title="توقيت رحلة العودة"
        value={time}
        onChange={handleTimeChange}
      />
      <Dropdown
        icon={<UserIcon />}
        title="المسافرون"
        required
        placeholder={pilgrims ? `${pilgrims} معتمرين` : "إضافة ضيوف"}
      >
        <AgeGroupCounter
          pilgrims={pilgrims}
          setPilgrims={setPilgrims}
          increment={increment}
          decrement={decrement}
        />
      </Dropdown>

      <button
        type="submit"
        className="text-white bg-primary-600 size-12 flex items-center justify-center rounded-full"
      >
        <Search className="h-5 w-5" />
      </button>
    </TabsContent>
  );
};
