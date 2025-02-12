import Image from 'next/image';
import React from 'react';
import locationMark from "@/assets/reservations/locationMark.svg";
import HotelIcon from '@/assets/reservations/HotelIcon';
import line from "@/assets/reservations/separatingLine.svg";

interface CurrentHotelProps {
    hotelImage: string;
    hotelName: string;
    hotelLocation: string;
    arrivalDate: string;
    departureDate: string;
}

const CurrentHotel = ({ hotelImage, hotelName, hotelLocation, arrivalDate, departureDate }: CurrentHotelProps) => {
    return (
        <div>
            <div className="flex items-center mt-8 rounded-lg border border-[#D1D1D1] p-4">
                <Image
                    src={hotelImage}
                    alt={"hotelName"}
                    className="w-24 h-24 object-cover rounded-lg ml-4"
                />
                <div>
                    <h2 className="text-lg font-bold text-gray-800">{hotelName}</h2>
                    <p className='text-xs text-[#5D5D5D] flex items-center mt-2 gap-1'><Image src={locationMark} alt='locationMark' />{hotelLocation}</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-8">
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>{arrivalDate}</h3>
                    <p className='text-sm text-[#5D5D5D]'>الوصول للفندق</p>
                </div>
                <div className='text-center flex items-center gap-2'>
                    <Image src={line} alt='arrow' />
                    <HotelIcon color="#8B6343" className='w-12 h-12' />
                    <Image src={line} alt='arrow' className='rotate-180' />
                </div>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>{departureDate}</h3>
                    <p className='text-sm text-[#5D5D5D]'>مغادرة الفندق</p>
                </div>
            </div>
        </div>
    );
};

export default CurrentHotel;