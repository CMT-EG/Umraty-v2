import React from 'react';
import backArrow from "@/assets/reservations/backArrow.svg";
import Image from 'next/image';
import SummaryReservationComponent from '@/features/reservations/components/SummaryReservationComponent';

const StepTwoContent = ({ setCurrentStep }) => {
    return (
        <div className='w-[90%] mx-auto'>
            <button className='text-[#7B7B7B] font-bold flex items-center gap-1' onClick={() => setCurrentStep(1)}> <span><Image src={backArrow} alt='backArrow' /></span> الرجوع للخلف </button>
            <div className="w-full py-3 px-6 mt-5 text-white font-extrabold rounded-2xl bg-primary-600">ملخص الحجز</div>
            <SummaryReservationComponent isService={true} />
            <SummaryReservationComponent isService={false} />
            <SummaryReservationComponent isService={false} />
            <button type="button" className='bg-primary-600 w-full text-white py-3 font-extrabold rounded-xl mt-4' onClick={() => setCurrentStep(3)}>التاكيد</button>
        </div>
    );
};

export default StepTwoContent;