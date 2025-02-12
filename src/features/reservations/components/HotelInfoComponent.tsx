import Image from 'next/image';
import React from 'react';
import checkUser from "@/assets/reservations/checkUser.svg";
import users from "@/assets/reservations/users.svg";
import metersIcon from "@/assets/reservations/meters.svg";
import bedIcon from "@/assets/reservations/bed.svg";
import bathroomIcon from "@/assets/reservations/bathroom.svg";
import wifiIcon from "@/assets/reservations/wifi.svg";
import airConditioningIcon from "@/assets/reservations/airConditioning.svg";
import metalIcon from "@/assets/reservations/metal.svg";
import mealIcon from "@/assets/reservations/meal.svg";

type RoomDetails = {
    roomType: string;
    price?: string;
    bookedFor?: string;
};

type PriceDetails = {
    label: string;
    amount: string;
};

type HotelInfoComponentProps = {
    imageUrl: string;
    hotelName: string;
    rating: number;
    rooms: RoomDetails[];
    priceDetails: PriceDetails[];
    totalPrice: string;
    meters: number;
    bed: number;
    bathroom: number;
    wifi: boolean;
    airConditioning: boolean;
    metal: boolean;
    meal: boolean;
};

const HotelInfoComponent: React.FC<HotelInfoComponentProps> = ({
    imageUrl,
    hotelName,
    rating,
    rooms,
    priceDetails,
    totalPrice,
    meters,
    bed,
    bathroom,
    wifi,
    airConditioning,
    metal,
    meal,
}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-full mx-auto flex flex-col">
            <div className="flex flex-col gap-5 items-start mb-4">
                <div className="flex items-center ">
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
                <div className="bg-[#F7F4EF] rounded-lg p-2 font-bold w-full">حجزك فى امان بواسطة عمرتي </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">تفاصيل الغرف</h3>
                    <div className="flex flex-col space-y-2">
                        {rooms.map((room, index) => (
                            <div className="flex justify-between items-center" key={index}>
                                <div className="flex gap-2 items-center">
                                    {index === 0 ? <Image src={checkUser} alt='checkUser' /> : <Image src={users} alt='users' />}
                                    <span>{room.bookedFor || `${room.roomType}`}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                        <div className="flex items-center gap-1">
                            <Image src={metersIcon} width={16} height={18} alt='meters' />
                            <p className='text-sm'>{meters} متر</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={bedIcon} width={16} height={18} alt='bed' />
                            <p className='text-sm'>{bed} سرير</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={bathroomIcon} width={16} height={18} alt='bathroom' />
                            <p className='text-sm'>{bathroom} حمام</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={wifiIcon} width={16} height={18} alt='wifi' />
                            <p className='text-sm'>{wifi ? 'واى فاى مجانى' : 'لا يوجد'}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={airConditioningIcon} width={16} height={18} alt='airConditioning' />
                            <p className='text-sm'>{airConditioning ? "مكيف هوائي" : "لا يوجد"}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={metalIcon} width={16} height={18} alt='metal' />
                            <p className='text-sm'>{metal ? "خدمة الغرف" : ' لا يوجد'}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image src={mealIcon} width={16} height={18} alt='meal' />
                            <p className='text-sm'>{meal ? "تشمل الافطار و الغداء" : "لا يوجد"} </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t mt-4 pt-4">
                <h3 className="text-lg font-semibold mb-3">تفاصيل الأسعار</h3>
                <div className="flex flex-col space-y-2">
                    {priceDetails.map((detail, index) => (
                        <div className="flex justify-between" key={index}>
                            <span>{detail.label}</span>
                            <span className='font-bold'>{detail.amount}</span>
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

export default HotelInfoComponent;