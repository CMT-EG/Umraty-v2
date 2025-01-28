// components/TripDetails.tsx
import React from "react";

interface TripDetailsProps {
  tripNumber: string;
  tripNumberLabel: string;
  title: string;
  bookingNumber: string;
  bookingNumberLabel: string;
  tripDate: string;
  tripDateLabel: string;
}

const TripDetails: React.FC<TripDetailsProps> = ({
  tripNumber,
  tripNumberLabel,
  title,
  bookingNumber,
  bookingNumberLabel,
  tripDate,
  tripDateLabel,
}) => {
  return (
    <div className="w-full bg-[#8B5E3C] text-white py-6 flex flex-col gap-[31px] justify-between items-center text-center">
      <h3 className="text-2xl font-extrabold">{title}</h3>

      <div className="flex justify-between items-center text-center w-full">
        {/* Trip Date */}
        <div>
          <p className="text-2xl font-extrabold">{tripDate}</p>
          <p className="">{tripDateLabel}</p>
        </div>
        {/* Title */}
        <div>
          <p className="text-2xl font-extrabold">{bookingNumber}</p>
          <p className="">{bookingNumberLabel}</p>
        </div>
        {/* Trip Number */}
        <div>
          <p className="text-2xl font-extrabold">{tripNumber}</p>
          <p className="">{tripNumberLabel}</p>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
