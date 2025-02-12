import Image from 'next/image';
import React from 'react';
import checkUser from "../../constants/checkUser.svg";
import users from "../../constants/users.svg";

type RoomDetails = {
    roomType: string;
    price?: string;
    bookedFor?: string;
};

type PriceDetails = {
    label: string;
    amount: string;
};

type HotelDetailsProps = {
    imageUrl: string;
    hotelName: string;
    rating: number;
    rooms: RoomDetails[];
    priceDetails: PriceDetails[];
    totalPrice: string;
};

export const HotelDetails: React.FC<HotelDetailsProps> = ({
    imageUrl,
    hotelName,
    rating,
    rooms,
    priceDetails,
    totalPrice,
}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-full mx-auto flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center flex-1">
                    <Image
                        src={imageUrl}
                        alt={hotelName}
                        width={48}
                        height={36}
                        className="w-48 h-36 object-cover rounded-lg ml-4"
                    />
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{hotelName}</h2>
                        <div className="flex items-center gap-2 text-xs mt-2">
                            <span className="bg-[#F6F6F6] rounded-lg py-2 px-4">{rating.toFixed(1)}</span>
                            <span className='text-[#747577] text-sm'> 54 تقييماً {" "} <span className='font-bold text-black'>جيد جداً</span></span>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3">تفاصيل الغرف</h3>
                    <div className="flex flex-col space-y-2">
                        {rooms.map((room, index) => (
                            <div className="flex justify-between items-center" key={index}>
                                <div className="flex gap-2 items-center">
                                    {index === 0 ? <Image src={checkUser} alt='checkUser' /> : <Image src={users} alt='users' />}
                                    <span>{room.bookedFor || `${room.roomType}`}</span>
                                </div>
                                {room.price && <span className="text-gray-600">{room.price}</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t mt-4 pt-4">
                <h3 className="text-lg font-semibold mb-3">تفاصيل الأسعار</h3>
                <div className="flex flex-col space-y-2">
                    {priceDetails.map((detail, index) => (
                        <div className="flex justify-between" key={index}>
                            <span>{detail.label}</span>
                            <span>{detail.amount}</span>
                        </div>
                    ))}
                    <div className="flex justify-between text-lg border-t !mt-5 pt-3">
                        <span>إجمالي</span>
                        <span className='font-bold'>{totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
