"use client";

import { Button } from "@/global/shadcn/ui/button";
import HotelInfo from "../hotelInfo/HotelInfo";
import MultipleRoomField from "../multipleRoomField/MultipleRoomField";

interface TravelerInfo {
  full_name: string;
  national_id: string;
  nationality: string;
  gender: string;
  id_type: string;
}

interface RoomInfo {
  [key: string]: TravelerInfo[];
}

type handleRoomInfoChangeType = (
  roomId: number,
  travelerIndex: number,
  field: keyof TravelerInfo,
  value: string
) => any;

type Props = {
  data: any[];
  setCurrentStep: (value: number) => any;
  roomInfo: RoomInfo;
  handleRoomInfoChange: handleRoomInfoChangeType;
  isLoggedIn: boolean;
  setLoginDialogOpen: (value: boolean) => any;
  hotelData: any;
  passengers: any;
  setPassengers: any;
  countOfPassengers: any;
};
function SecondStep({
  data,
  roomInfo,
  setCurrentStep,
  handleRoomInfoChange,
  isLoggedIn,
  setLoginDialogOpen,
  hotelData,
  passengers,
  setPassengers,
  countOfPassengers,
}: Props) {
  return (
    <div className="flex flex-col">
      <HotelInfo hotelData={hotelData} />
      <p className="text-xl mb-3">تأكيد بيانات المسافرين</p>
      <MultipleRoomField
        data={data}
        roomInfo={roomInfo}
        handleRoomInfoChange={handleRoomInfoChange}
        passengers={passengers}
        setPassengers={setPassengers}
        countOfPassengers={countOfPassengers}
      />
      <Button
        size={"lg"}
        className="mt-5 text-base"
        onClick={() => {
          if (isLoggedIn) {
            setCurrentStep(3);
          } else {
            setLoginDialogOpen(true);
          }
        }}
      >
        تأكيد البيانات
      </Button>
    </div>
  );
}
export default SecondStep;
