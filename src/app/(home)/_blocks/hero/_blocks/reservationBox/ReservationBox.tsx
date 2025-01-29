"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/global/shadcn/ui/tabs";
import { WithoutVisa } from "./_blocks/WithoutVisa";
import { WithVisa } from "./_blocks/WithVisa";
import { useReservation } from "./hooks/useReservation";

const ReservationBox = () => {
  const { currentTab, setCurrentTab } = useReservation();

  return (
    <div className="bg-reservation">
      <div className=" mt-[-70px] z-50 relative w-[90%] mx-auto flex flex-col gap-4 bg-[#FCFCFD] rounded-[1.25rem] p-8 shadow-lg">
        <Tabs
          defaultValue={currentTab}
          onValueChange={setCurrentTab}
          className="w-full"
          dir="rtl"
        >
          <TabsList className="flex justify-between items-center gap-4 mb-8 bg-transparent">
            <div className="flex gap-4">
              <TabsTrigger
                value="withoutVisa"
                className="data-[state=active]:text-primary-600 data-[state=active]:bg-transparent data-[state=active]:border-b border-b-primary-600 rounded-none font-bold text-neutral-400 pb-4"
              >
                الحجز بدون تأشيرة
              </TabsTrigger>
              <TabsTrigger
                value="withVisa"
                className="data-[state=active]:text-primary-600 data-[state=active]:bg-transparent data-[state=active]:border-b border-b-primary-600 rounded-none font-bold text-neutral-400 pb-4"
              >
                الحجز بتأشيرة
              </TabsTrigger>
            </div>
            {currentTab === "withoutVisa" && (
              <Tabs defaultValue="withHousing" dir="rtl">
                <TabsList className="flex bg-transparent border border-primary-600 rounded-3xl overflow-hidden p-0">
                  <TabsTrigger
                    value="withHousing"
                    className="data-[state=active]:text-white data-[state=active]:bg-primary-600 rounded-none font-bold text-neutral-400 w-28 h-full"
                  >
                    بسكن
                  </TabsTrigger>
                  <TabsTrigger
                    value="withoutHousing"
                    className="data-[state=active]:text-white data-[state=active]:bg-primary-600 rounded-none font-bold text-neutral-400 w-28 h-full"
                  >
                    بدون سكن
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            )}
          </TabsList>

          {/* Without Visa */}
          <WithoutVisa isVisa={"withoutVisa"} />

          {/* With Visa */}
          <WithVisa isVisa={"withVisa"} />
        </Tabs>
      </div>
    </div>
  );
};

export default ReservationBox;
