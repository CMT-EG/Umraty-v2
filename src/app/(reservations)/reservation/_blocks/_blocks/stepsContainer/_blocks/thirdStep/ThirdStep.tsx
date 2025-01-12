"use client";
import { Button } from "@/main/common/shadcn/ui/button";
import HotelInfo from "../hotelInfo/HotelInfo";
import MultipleRoomField from "../multipleRoomField/MultipleRoomField";
import { z } from "zod";
import { creditCardSchema } from "./schema/creditCardSchema";

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
export type creditCardType = z.infer<typeof creditCardSchema>;

type Props = {
  data: any[];
  setCurrentStep: (value: number) => any;
  roomInfo: RoomInfo;
  handleRoomInfoChange: handleRoomInfoChangeType;
  cards: creditCardType[];
  addCard: (value: creditCardType) => any;
  chosenCard: (creditCardType & { id: number }) | null;
  setChosenCard: (value: (creditCardType & { id: number }) | null) => any;
  isLoggedIn: boolean;
  setLoginDialogOpen: (value: boolean) => any;
  hotelData: any;
  onBooking: () => any;
  loading: boolean;
  passengers: any;
  setPassengers: any;
  countOfPassengers: any;
};

function ThirdStep({
  data,
  roomInfo,
  handleRoomInfoChange,
  isLoggedIn,
  setLoginDialogOpen,
  hotelData,
  onBooking,
  loading,
  passengers,
  setPassengers,
  countOfPassengers,
}: Props) {
  return (
    <div className="flex flex-col">
      <HotelInfo hotelData={hotelData} />
      <p className="text-xl mb-3">اضافة بيانات الدفع</p>
      {data.length > 1 ? (
        <MultipleRoomField
          data={data}
          roomInfo={roomInfo}
          handleRoomInfoChange={handleRoomInfoChange}
          passengers={passengers}
          setPassengers={setPassengers}
          countOfPassengers={countOfPassengers}
        />
      ) : null}

      <Button
        size={"lg"}
        className="mt-5 text-base"
        disabled={loading}
        onClick={() => {
          if (isLoggedIn) {
            onBooking();
          } else {
            setLoginDialogOpen(true);
          }
        }}
      >
        تأكيد الحجز
      </Button>
    </div>
  );
}

export default ThirdStep;
