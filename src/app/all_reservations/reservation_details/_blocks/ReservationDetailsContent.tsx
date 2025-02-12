import React from 'react';
import { InfoRow } from '../../_blocks/components/InfoRow';
import { StatusBadge } from '../../_blocks/components/StatusBadge';
import { HotelDetails } from '../components/HotelDetails';
import hotelImage from "../../constants/hotelImage.svg";
import { RoomsAccordation } from './RoomsRoomsAccordation';

export const ReservationDetailsContent = () => {
    return (
        <div className="mt-[-50px] z-50 relative w-[90%] mx-auto">
            <div className="gap-4 bg-[#FCFCFD] rounded-[1.25rem] py-6 px-10 shadow-lg mb-20">
                <div className="flex justify-between items-center gap-4 w-full">
                    <p className="text-lg font-bold text-gray-800">
                        حجز رقم: 123456#
                    </p>
                    <InfoRow
                        label='حالة الحجز :'
                        value={<StatusBadge status='غير مدفوع' />}
                        labelClassName='min-w-fit'
                        containerClassName='gap-1'
                    />
                    <InfoRow
                        label='سعر الحجز :'
                        value={" 2500 ر.س"}
                        labelClassName='min-w-fit'
                        containerClassName='gap-1'
                    />
                </div>
            </div>
            <HotelDetails
                imageUrl={hotelImage}
                hotelName="فندق برج ساعة مكة الملكي"
                rating={4.2}
                rooms={[
                    { roomType: 'غرفة عادية', bookedFor: 'تم الحجز لـ 12 فرد', price: '80 ريال / الفرد' },
                    { roomType: '2 × غرفه عاديه', price: '100 ريال' },
                    { roomType: '5 × غرفة سرير مزدوج أو سريرين توام' },
                ]}
                priceDetails={[
                    { label: 'التكلفه الفرعيه', amount: '960 ريال' },
                    { label: 'الضرائب', amount: '400 ريال' },
                ]}
                totalPrice="1,360 ريال"
            />
            <RoomsAccordation />
        </div>
    );
};
