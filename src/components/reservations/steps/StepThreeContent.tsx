import React from 'react';
import backArrow from "@/assets/reservations/backArrow.svg";
import Image from 'next/image';
import usersIcon from "@/assets/reservations/users.svg";
import CurrentHotel from '@/features/reservations/components/CurrentHotel';
import hotelImage from "@/assets/reservations/hotelImage.svg";

const StepThreeContent = ({ setCurrentStep }) => {
    return (
        <div className='w-[90%] mx-auto'>
            <button className='text-[#7B7B7B] font-bold flex items-center gap-1' onClick={() => setCurrentStep(2)}> <span><Image src={backArrow} alt='backArrow' /></span> الرجوع للخلف </button>
            <div className="mt-10 shadow-xl rounded-2xl mb-8 p-8">
                <div className="border border-[#D1D1D1] py-4 px-8 rounded-2xl">
                    <h3 className='font-extrabold text-xl '>باقة الخدمة الأساسية ( غير شامل السكن)</h3>
                    <p className='flex items-center gap-2 mt-2 text-[#888888] text-sm'><Image src={usersIcon} alt='usersIcon' /> تم ملء بيانات الحجز ل 12 فرد </p>
                </div>
                <div className="my-6 border-b-2 border-b-primary-600 w-full"></div>
                <CurrentHotel
                    hotelImage={hotelImage}
                    hotelName='فندق برج ساعة مكة الملكي'
                    hotelLocation='جوموسويو ماه. إينونو كاد. رقم:8، دبى'
                    arrivalDate='الجمعة 5 سبتمبر'
                    departureDate='الجمعة  13 سبتمبر'
                />
                <div className="my-6 border-b-2 border-b-primary-600 w-full"></div>
                <CurrentHotel
                    hotelImage={hotelImage}
                    hotelName='فندق برج ساعة مكة الملكي'
                    hotelLocation='جوموسويو ماه. إينونو كاد. رقم:8، دبى'
                    arrivalDate='الجمعة 5 سبتمبر'
                    departureDate='الجمعة  13 سبتمبر'
                />
            </div>
            <button type="button" className='bg-primary-600 w-full text-white py-3 border border-primary-600 font-extrabold rounded-xl mt-4'>الدفع</button>
            <button type="button" className='text-primary-600 w-full bg-transparent border border-primary-600 py-3 font-extrabold rounded-xl mt-4'>حفظ الطلب</button>
        </div>
    );
};

export default StepThreeContent;