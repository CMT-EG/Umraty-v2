import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/global/shadcn/ui/dialog';
import Image from 'next/image';
import React, { useState } from 'react';
import reportFlag from "./assets/problem_report.svg";
import { SelectOption } from '@/global/components/selectOption/SelectOption';
import { fakeData } from '@/app/(home)/_blocks/hero/_blocks/reservationBox/constants/data';

export const ProblemReport = ({ setCurrentStep }) => {
    const [data, setData] = useState({})
    return (
        <DialogContent className='max-w-[620px]'>
            <DialogHeader className='mt-12'>
                <Image src={reportFlag} alt='phone number' width={110} height={110} className='mx-auto mb-4' />
                <DialogTitle className='text-center text-2xl font-extrabold w-full'>الإبلاغ عن مشكلة</DialogTitle>
                <DialogDescription className='w-full text-center !mb-6'>
                    يرجى تقديم تفاصيل حول المشكلة التي تواجهها حتى نتمكن من مساعدتك بشكل أفضل
                </DialogDescription>
                <SelectOption
                    title="نوع المشكلة"
                    required
                    options={fakeData}
                    triggerClassName="w-full border-[#D1D1D1] mt-1 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md "
                    placeholder="اختر نوع المشكلة"
                />
                <p className="text-black font-bold mb-1 text-start !mt-5">شرح المشكلة <span className="text-red-500">*</span></p>
                <textarea className="w-full border border-[#D1D1D1] rounded-xl px-3 py-2 h-36 focus:outline-none placeholder:text-sm" placeholder='اكتب مشكلتك هنا.'></textarea>
                <button type="button" className='bg-primary-600 rounded-3xl text-white font-bold py-3 text-sm !mb-5 !mt-4 w-full' onClick={setCurrentStep}>إرسال البلاغ</button>
            </DialogHeader>
        </DialogContent>
    );
};
