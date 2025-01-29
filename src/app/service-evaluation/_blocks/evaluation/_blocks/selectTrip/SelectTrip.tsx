"use client";
import TripDetails from "./_blocks/tripDetails/TripDetails";


export default function SelectTrip() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6 bg-[#8b5e3c] rounded-2xl my-20">
      <TripDetails
        tripNumber="#166229"
        tripNumberLabel="رقم الرحلة"
        title="تفاصيل الرحلة"
        bookingNumber="21125"
        bookingNumberLabel="رقم الحجز"
        tripDate="22/2/2025"
        tripDateLabel="تاريخ الرحلة"
      />
    </div>
  );
}
