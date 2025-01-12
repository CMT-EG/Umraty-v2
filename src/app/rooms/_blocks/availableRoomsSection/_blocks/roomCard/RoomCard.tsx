"use client";

import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import { Button } from "@/main/common/shadcn/ui/button";
import { BathIcon } from "@/main/global/assets/svg/BathIcon";
import { BedIcon } from "@/main/global/assets/svg/BedIcon";
import { ExpandIcon } from "@/main/global/assets/svg/ExpandIcon";
import { FoodIcon } from "@/main/global/assets/svg/FoodIcon";
import { PeopleIcon } from "@/main/global/assets/svg/PeopleIcon";
import { PersonIcon } from "@/main/global/assets/svg/PersonIcon";
import { WifiIcon } from "@/main/global/assets/svg/WifiIcon";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { useQuery } from "@tanstack/react-query";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";

type RoomsStateType = {
  [key: number]: {
    id: number;
    rooms_quantity: number;
    passengers_count: number;
    roomName: string;
    roomPrice: number;
  };
};

function RoomCard({
  id,
  imageURL: _imageURL,
  name,
  price,
  capacity_num,
  meters,
  beds_count,
  bathroom_count,
  has_dinner,
  has_free_wifi,
  roomsState,
  handleRoomsStateChange,
  quantity,
}: {
  id: number;
  imageURL: string;
  name: string;
  price: number;
  capacity_num: number;
  meters: number;
  beds_count: number;
  bathroom_count: number;
  has_dinner: boolean;
  has_free_wifi: boolean;
  quantity: number;
  roomsState: RoomsStateType;
  handleRoomsStateChange: (
    roomId: number,
    capacity: number,
    increment: boolean,
    roomName: string,
    roomPrice: number,
    quantity: number
  ) => any;
}) {
  const { data: settingsData } = useQuery({
    queryKey: ["settingsData"],
    queryFn: () => {
      return requestHelpers.getData(`${API_ROOT}/settings/get/`);
    },
  });
  
  return (
    <div className="flex-grow rounded-[0.5rem] overflow-hidden flex sm:gap-4 gap-2 bg-white shadow-[-4px_2px_20px_0px] shadow-[#5E5E5E]/10">
      <Image
        src="/room-image.png"
        alt="room"
        width={226}
        height={273}
        className="object-cover sm:w-[226px] w-32 h-full"
      />
      <div className="flex-grow flex flex-col justify-center gap-5 sm:py-7 py-[0.875rem] sm:pe-9 pe-2">
        <div className="flex items-center">
          <PeopleIcon className="md:h-[15px] h-[12px] md:me-3 me-1" />
          <p className="lg:text-2xl md:text-xl text-[0.75rem] font-bold">
            {name}
          </p>
          <div className="h-full border mx-4"></div>
          <p className="text-neural-950 lg:text-xl md:text-lg text-[0.75rem] font-bold">
            {Number(price) + Number(settingsData?.cost_of_transportation)} ريال{" "}
            <span className="md:text-base text-[0.5rem] font-normal text-neutral-600">
              / للفرد
            </span>
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-3">
          <div className="flex items-center justify-evenly sm:gap-5 gap-2 sm:p-[1.125rem] p-2 bg-primary-50 rounded-[0.5rem] w-full whitespace-nowrap">
            <div className="flex items-center sm:text-sm text-[0.6rem]">
              <ExpandIcon className="sm:size-[0.875rem] size-[0.75rem] me-1" />
              <span>{meters}</span>
            </div>
            <div className="h-[0.875rem] border"></div>
            <div className="flex items-center sm:text-sm text-[0.6rem]">
              <BedIcon className="sm:size-[0.875rem] size-[0.75rem] me-1" />
              <span>{beds_count}</span>
            </div>
            <div className="h-[0.875rem] border"></div>
            <div className="flex items-center sm:text-sm text-[0.6rem]">
              <BathIcon className="sm:size-[0.875rem] size-[0.75rem] me-1" />
              <span>{bathroom_count}</span>
            </div>
          </div>
          {has_dinner || has_free_wifi ? (
            <div className="flex items-center justify-evenly sm:gap-5 gap-2 sm:p-[1.125rem] p-2 bg-primary-50 rounded-[0.5rem] w-full whitespace-nowrap">
              {has_dinner && (
                <>
                  <div className="flex items-center sm:text-sm text-[0.6rem]">
                    <FoodIcon className="sm:size-[0.875rem] size-[0.75rem] me-1" />
                    <span>تشمل الافطار والغداء</span>
                  </div>
                  <div className="h-[0.875rem] border"></div>
                </>
              )}
              {has_free_wifi && (
                <div className="flex items-center sm:text-sm text-[0.6rem]">
                  <WifiIcon className="sm:size-[0.875rem] size-[0.75rem] me-1" />
                  <span>واي فاي مجاني</span>
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div className="flex items-center">
          <PersonIcon className="sm:h-[15px] h-[10px] me-2" />
          <span className="sm:text-sm text-[0.625rem] font-bold text-neutral-950 me-2">
            عدد المسافرين
          </span>
          <Button
            size={"icon"}
            className="sm:rounded-[0.375rem] rounded-[0.188rem] sm:size-8 size-[1.5rem]"
            onClick={() => {
              handleRoomsStateChange(
                id,
                capacity_num,
                false,
                name,
                price,
                quantity
              );
            }}
          >
            <Minus className="sm:size-4 size-2" />
          </Button>
          <div className="sm:size-8 size-[1.5rem] w-7 sm:text-base text-sm flex items-center justify-center font-alexandria">
            {roomsState[id]?.passengers_count ?? 0}
          </div>
          <Button
            size={"icon"}
            className="sm:rounded-[0.375rem] rounded-[0.188rem] sm:size-8 size-[1.5rem]"
            onClick={() => {
              handleRoomsStateChange(
                id,
                capacity_num,
                true,
                name,
                price,
                quantity
              );
            }}
          >
            <Plus className="sm:size-4 size-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
export default RoomCard;
