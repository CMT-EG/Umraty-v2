"use client";

import { Button } from "@/global/shadcn/ui/button";
import RoomCard from "./_blocks/roomCard/RoomCard";
import { MapIcon } from "@/global/assets/svg/MapIcon";
import useMediaQuery from "@/global/hooks/mediaQuery/useMediaQuery";

type RoomsStateType = {
  [key: number]: {
    id: number;
    rooms_quantity: number;
    passengers_count: number;
    roomName: string;
    roomPrice: number;
  };
};

type RoomType = {
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
}[];
type Props = {
  rooms: RoomType;
  roomsState: RoomsStateType;
  handleRoomsStateChange: (
    roomId: number,
    capacity: number,
    increment: boolean,
    name: string,
    price: number,
    quantity: number
  ) => any;
  hotelData: any;
  onBooking: () => any;
};
function AvailableRoomsSection({
  rooms,
  roomsState,
  handleRoomsStateChange,
  hotelData,
  onBooking,
}: Props) {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: isSmallScreen ? "repeat(1, 1fr)" : "repeat(2, 1fr)",
    gap: 16,
  };

  console.log("ROOMS:", rooms);
  return (
    <section className="flex flex-col sm:px-20 px-5">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center items-stretch gap-2 mb-10">
        <div className="flex flex-col gap-2">
          <h1 className="sm:text-3xl text-2xl font-bold">{hotelData?.name}</h1>

          <div className="flex items-center">
            <MapIcon className="size-5" />
            <p className="text-neural-600 text-[0.75rem]">
              {hotelData?.location}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            size={"lg"}
            className="text-base flex-grow"
            onClick={() => onBooking()}
          >
            احجز الأن
          </Button>
        </div>
      </div>
      <h3 className="sm:text-2xl text-xl font-medium mb-7 font-alexandria">
        الغرف المتاحه
      </h3>
      <div
        className="min-w-full flex gap-7 justify-between flex-wrap mb-14 rooms-box"
        style={gridStyle}
      >
        {rooms?.map((room) => (
          <RoomCard
            key={"Room-" + room.id}
            {...room}
            roomsState={roomsState}
            handleRoomsStateChange={handleRoomsStateChange}
          />
        ))}
      </div>
      <Button
        size={"lg"}
        className="w-full text-base"
        onClick={() => onBooking()}
      >
        احجز الأن
      </Button>
    </section>
  );
}

export default AvailableRoomsSection;
