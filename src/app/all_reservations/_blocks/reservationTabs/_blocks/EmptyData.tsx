import React from 'react';
import emptyData from "../assets/emptyData.svg";
import Image from 'next/image';
import Link from 'next/link';

export const EmptyData = () => {
    return (
        <div className='text-center'>
            <h2 className='font-extrabold text-4xl'>لم تقم بأي حجز بعد!</h2>
            <p className='text-gray-500 mt-4'> ابدأ رحلتك للعمرة الآن بسهولة ويسر مع منصة عمرتي</p>
            <Image src={emptyData} alt='empty data' className='mx-auto' width={700} />
            <Link href={"/"} className='bg-primary-600 rounded-3xl w-full block py-2 mt-5 text-white text-center font-extrabold'>احجز الآن</Link>
        </div>
    );
};