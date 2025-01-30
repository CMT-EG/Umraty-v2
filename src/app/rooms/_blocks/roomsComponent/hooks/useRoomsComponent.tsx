import { toast } from "@/global/shadcn/hooks/use-toast";
import requestHelpers from "@/global/shadcn/lib/requestHelpers";
import { API_ROOT } from "@/global/env/variablesEnv";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

type RoomsStateType = {
  [key: number]: {
    id: number;
    rooms_quantity: number;
    passengers_count: number;
    roomName: string;
    roomPrice: number;
  };
};

export default function useRoomsComponent() {
  const searchParams = useSearchParams();
  const dateFrom = searchParams.get("date_from");
  const dateTo = searchParams.get("date_to");
  console.log(searchParams.get("date_to"));
  const { data: hotelData } = useQuery({
    queryKey: ["hotelData"],
    queryFn: () => {
      return requestHelpers.getData(`${API_ROOT}/hotels/get-hotel/1/`);
    },
  });

  const { data: roomsData } = useQuery({
    queryKey: ["roomsData"],
    queryFn: () => {
      return requestHelpers.getData(
        `${API_ROOT}/room-types/get/?date_from=${dateFrom}&date_to=${dateTo}`
      );
    },
  });

  console.log(roomsData?.data);

  const [roomsState, setRoomsState] = useState<RoomsStateType>(() => {
    const savedRoomsState = localStorage?.getItem("roomsState");
    return savedRoomsState ? JSON.parse(savedRoomsState) : {};
  });

  const updateLocalStorage = (updatedRoomsState: RoomsStateType) => {
    localStorage?.setItem("roomsState", JSON.stringify(updatedRoomsState));
  };

  const handleRoomsStateChange = (
    roomId: number,
    capacity: number,
    increment: boolean,
    roomName: string,
    roomPrice: number,
    quantity: number // Add quantity as a new parameter
  ) => {
    setRoomsState((prevState) => {
      const roomCount = prevState[roomId]?.rooms_quantity || 0;

      // Calculate new room count based on the passenger limit
      const newRoomCount = increment
        ? Math.min(roomCount + 1, Math.floor(quantity / capacity))
        : Math.max(roomCount - 1, 0);

      // Create a copy of the current state
      const updatedState = { ...prevState };

      if (newRoomCount === 0) {
        // Remove the room from updatedState if no passengers are left
        delete updatedState[roomId];
      } else {
        // Otherwise, update the room information
        updatedState[roomId] = {
          id: roomId,
          rooms_quantity: newRoomCount,
          roomName: roomName,
          roomPrice: roomPrice,
          passengers_count: newRoomCount * capacity,
        };
      }

      // Update localStorage only with rooms that have passengers and rooms
      updateLocalStorage(updatedState); // Update localStorage whenever state changes
      return updatedState;
    });
  };

  const onBooking = () => {
    if (Object.values(roomsState).length === 0) {
      toast({
        variant: "destructive",
        title: "من فضلك اختار الغرف",
      });
      // toast.warn("من فضلك اختار الغرف");
    } else {
      // window.location.href = "/reservation?hotel=true";
    }
  };
  return {
    roomsData,
    roomsState,
    handleRoomsStateChange,
    hotelData,
    onBooking,
  };
}
