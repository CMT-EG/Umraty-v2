"use client";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatDateToArabic } from "@/global/utils/date";
import { MapIcon } from "@/global/assets/svg/MapIcon";
import { HotelTimeIcon } from "@/global/assets/svg/HotelTimeIcon";
import roomImg from "@/global/assets/images/room-image.png";

function HotelInfo({ hotelData }: any) {
  const [startDate] = useState<Date | null>(() => {
    const storedStartDate =
      typeof window !== "undefined" ? localStorage.getItem("startDate") : null;
    return storedStartDate ? new Date(JSON.parse(storedStartDate)) : null;
  });

  const [finishDate] = useState<Date | null>(() => {
    const storedFinishDate =
      typeof window !== "undefined" ? localStorage.getItem("finishDate") : null;
    return storedFinishDate ? new Date(JSON.parse(storedFinishDate)) : null;
  });

  const searchParams = useSearchParams();
  const needHotel = searchParams.get("hotel");
  console.log("NEED HOTEL:", needHotel);

  return (
    <div className="sm:p-7 p-4 rounded-xl bg-white shadow-xl shadow-black/5 flex flex-col mb-5">
      {needHotel == "true" && (
        <div className="flex gap-2 p-2 border rounded-2xl mb-5">
          <Image
            src={roomImg}
            width={80}
            height={80}
            alt="room"
            className="size-[60px] sm:size-[80px] object-cover rounded-xl"
          />
          <div className="flex flex-col">
            <p className="sm:text-xl font-bold mb-2">{hotelData?.name}</p>
            <div className="flex items-center">
              <MapIcon className="size-5" />
              <p className="text-neural-600 text-[0.75rem]">
                {hotelData?.location}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between text-[#222222] text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="sm:text-xl text-base font-bold">
            {formatDateToArabic(startDate)}
          </p>
          <p className="sm:text-base text-sm">الوصول </p>
        </div>
        <HotelTimeIcon className="px-2" />
        <div className="flex flex-col items-center gap-2">
          <p className="sm:text-xl text-base font-bold">
            {formatDateToArabic(finishDate)}
          </p>
          <p className="sm:text-base text-sm">المغادرة </p>
        </div>
      </div>
    </div>
  );
}
export default HotelInfo;
