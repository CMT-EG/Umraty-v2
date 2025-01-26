"use client";
import { useQuery } from "@tanstack/react-query";

import React, { useState } from "react";
import HeroSection from "./heroSection/HeroSection";
import ReservationItem from "./reservationItem/ReservationItem";
import requestHelpers from "@/global/shadcn/lib/requestHelpers";
function Reservations() {
  const [currentTab, setCurrentTab] = useState<"present" | "past">("past");
  const { data } = useQuery({
    queryKey: ["userBookings"],
    queryFn: () => {
      return requestHelpers.getData("/bookings/get-user-bookings/");
    },
  });

  return (
    <>
      <HeroSection currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <section className="flex flex-col gap-12 sm:px-20 sm:py-20 px-5 py-11">
        <div className="flex flex-col gap-8">
          <div className="self-stretch flex flex-col items-stretch gap-11">
            {data?.map((item: any) => (
              <ReservationItem key={item?.id} bookingData={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Reservations;
