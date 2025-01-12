"use client";
import { Button } from "@/main/common/shadcn/ui/button";
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

type Props =  {
  data: any[];
  setCurrentStep: (value: number) => any;
  roomInfo: RoomInfo;
  handleRoomInfoChange: handleRoomInfoChangeType;
  isLoggedIn: boolean;
  setLoginDialogOpen: (value: boolean) => any;
  hotelData: any;
  token: any;
  passengers: any;
  setPassengers: any;
  countOfPassengers: any;
}
function FirstStep({
  data,
  roomInfo,
  setCurrentStep,
  handleRoomInfoChange,
  setLoginDialogOpen,
  hotelData,
  token,
  passengers,
  setPassengers,
  countOfPassengers,
}: Props) {
  const validateFields = () => {
    // Check all room info fields for empty values
    const allFieldsFilled = data.every((room) => {
      const roomTravelers = roomInfo[room.id];
      return roomTravelers.every(
        (traveler: TravelerInfo) =>
          traveler.full_name && traveler.national_id && traveler.nationality
      );
    });

    // Check all passenger fields for empty values (if hotel is not required)
    if (!hotelData?.hotelRequired) {
      return passengers.every(
        (passenger: TravelerInfo) =>
          passenger.full_name && passenger.national_id && passenger.nationality
      );
    }

    return allFieldsFilled;
  };

  return (
    <div className='flex flex-col'>
      <HotelInfo hotelData={hotelData} />
      <p className='text-xl mb-3'>ادخال بيانات المسافرين</p>
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
        className='mt-5 text-base'
        onClick={() => {
          if (validateFields()) {
            if (token) {
              setCurrentStep(3);
            } else {
              setLoginDialogOpen(true);
            }
          } else {
            alert("يرجى ملء جميع الحقول المطلوبة.");
          }
        }}
      >
        حجز
      </Button>
    </div>
  );
}
export default FirstStep;
