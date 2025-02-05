import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/global/shadcn/ui/dialog';
import Image from 'next/image';
import React from 'react';
import success from "./assets/success.svg";

export const SuccessPopup = () => {
    return (
        <DialogContent className='max-w-[620px]'>
            <DialogHeader className='mt-12'>
                <Image src={success} alt='phone number' width={110} height={110} className='mx-auto mb-4' />
                <DialogTitle className='text-center text-2xl font-extrabold w-full'>تم إرسال البلاغ بنجاح رقم بلاغك هو: ××××.</DialogTitle>
                <DialogDescription className='w-full text-center !mb-6'>
                    شكرًا لك على بلاغك. تم حفظ بلاغك بنجاح.
                </DialogDescription>
                <DialogClose type="button" className='bg-[#0ABF7E] rounded-3xl text-white font-bold py-3 text-sm !mb-5 !mt-4 w-full'>إغلاق</DialogClose>
            </DialogHeader>
        </DialogContent>
    );
};
