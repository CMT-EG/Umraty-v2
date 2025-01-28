"use client";
import React, { useState } from 'react';
import useHero from '../hooks/useHero';
import { DatePicker } from '@/global/components/datePicker/DatePicker';
import { Button } from '@/global/shadcn/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/global/shadcn/ui/tabs';
import { SelectOption } from '@/global/components/selectOption/SelectOption';
import { TimeInputOption } from '@/global/components/timeInput/TimeInputOption';
import { InputNumber } from '@/global/components/inputNumber/InputNumber';



const ReservationBox = () => {
   const now = new Date();
   const currentTime = now.toTimeString().slice(0, 5);
   const [time, setTime] = useState(currentTime);

   const handleTimeChange = (newTime: string) => {
      setTime(newTime);
   };
   const {
      hotelRequired,
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
      arrivalTime,
      availableArrivalTimes,
      departureTime,
      availableDepartureTimes,
      passengers,
      setPassengers,
      handleArrival,
      onSearch,
      destinations,
      handleDestination,
      takeoffs,
   } = useHero();
   const timezoneGroups = [
      { value: "est", label: "Eastern Standard Time (EST)" },
      { value: "cst", label: "Central Standard Time (CST)" },
      { value: "mst", label: "Mountain Standard Time (MST)" },
      { value: "pst", label: "Pacific Standard Time (PST)" },
      { value: "akst", label: "Alaska Standard Time (AKST)" },
      { value: "hst", label: "Hawaii Standard Time (HST)" },
   ];

   const handleTimezoneChange = (value: string) => {
      console.log("Selected timezone:", value);
   };
   return (
      <div className="absolute bottom-0 translate-y-2/3 md:inset-x-[5.5rem] inset-x-5 flex flex-col gap-4 bg-[#FCFCFD] rounded-[1.25rem] p-8 shadow-lg">
         <Tabs defaultValue="tab1" className="w-full" dir='rtl'>
            <TabsList>
               <TabsTrigger value="tab1">Tab 1</TabsTrigger>
               <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            </TabsList>
            =
            <TabsContent value="tab2" className="flex flex-wrap gap-4">
               {/* Hotel Required Fields */}
               <DatePicker
                  title='تاريخ الذهاب'
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
                  title='تاريخ الوصول'
                  className="flex-grow"
                  placeholder="ادخل تاريخ المغادرة"
                  date={finishDate}
                  onChange={(date) =>
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
               <select
                  value={arrivalTime}
                  onChange={(e) => setArrivalTime(e.target.value)}
                  className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
               >
                  <option value="">موعد الذهاب</option>
                  {availableArrivalTimes.map((time: any) => (
                     <option key={time} value={time}>
                        {time}
                     </option>
                  ))}
               </select>
               <select
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
               >
                  <option value="">موعد المغادرة</option>
                  {availableDepartureTimes.map((time: any) => (
                     <option key={time} value={time}>
                        {time}
                     </option>
                  ))}
               </select>
               <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
               >
                  <option value="">عدد المعتمرين</option>
                  {Array.from({ length: 10 }, (_, i) => (
                     <option key={i + 1} value={i + 1}>
                        {i + 1}
                     </option>
                  ))}
               </select>
            </TabsContent>
            <TabsContent value="tab1" className="flex flex-wrap items-center gap-4 w-full">
               {/* Non-Hotel Required Fields */}
               <DatePicker
                  title='تاريخ الذهاب'
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
                  title='تاريخ العودة'
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
                  placeholder="من أين أنت منطلق؟"
                  options={timezoneGroups}
                  onValueChange={handleTimezoneChange}
                  title='نقطة الانطلاق'
                  required
               />
               <SelectOption
                  placeholder="إلي أين أنت ذاهب؟"
                  options={timezoneGroups}
                  onValueChange={handleTimezoneChange}
                  title='نقطة الوصول'
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
               <InputNumber
                  title="المسافرون"
                  placeholder='إضافة ضيوف'
                  onChange={handleTimeChange}
                  required
               />
            </TabsContent>
         </Tabs>

         <Button
            size="lg"
            className="w-full  font-bold text-base"
            onClick={onSearch}
         >
            ابحث
         </Button>
      </div>
   );
};

export default ReservationBox;