"use client";

import HeroSection from "../heroSection/HeroSection";
import AvailableRoomsSection from "../availableRoomsSection/AvailableRoomsSection";
import useRoomsComponent from "./hooks/useRoomsComponent";

function RoomsComponent() {

  const {roomsData, roomsState, handleRoomsStateChange, hotelData, onBooking} = useRoomsComponent();

  return (
    <>
      <HeroSection />
      <AvailableRoomsSection
        rooms={roomsData?.data}
        roomsState={roomsState}
        handleRoomsStateChange={handleRoomsStateChange}
        hotelData={hotelData?.data}
        onBooking={onBooking}
      />
      {/* <ContactSection /> */}
    </>
  );
}
export default RoomsComponent;
