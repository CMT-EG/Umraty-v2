
import React, { useState } from 'react';
import PhoneInput from '@/global/components/phoneInput/PhoneInput';
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/global/shadcn/ui/dialog';
import Image from 'next/image';
import logo from "@/global/assets/logo/logo-dark.png";
import Link from 'next/link';

export const NotAuthorizedPopup = () => {

    const [phoneValue, setPhoneValue] = useState({ phone_number: "", phone_code: "966" });

    const handleValueChange = (newValue: { phone_number: string; phone_code: string; }) => {
        setPhoneValue(newValue);
    };

    return (
        <DialogContent>
            <DialogHeader className='mt-12'>
                <Image src={logo} alt='phone number' width={120} height={120} className='mx-auto mb-4' />
                <DialogTitle className='text-center text-2xl font-extrabold w-full'>الرجاء تسجيل الدخول لعرض حجوزاتك</DialogTitle>
                <DialogDescription className='w-full text-center'>
                    لا يمكنك استعراض الحجوزات أو إدارتها إلا بعد تسجيل الدخول إلى حسابك على منصة عمرتي.
                </DialogDescription>
                <PhoneInput
                    label='رقم الهاتف'
                    value={phoneValue}
                    onValueChange={handleValueChange}
                    className='bg-transparent border border-neutral-200 rounded-lg mt-2 mb-5 w-full'
                />
                <Link href={"/login"} className='bg-primary-600 rounded-3xl text-white font-bold text-center py-3 text-sm !mb-2 w-full'>تسجيل الدخول</Link>
                <DialogClose className='bg-transparent border border-primary-600 rounded-3xl text-primary-600 font-bold py-3 text-sm !mb-4 w-full'>العودة للصفحة الرئيسية</DialogClose>
            </DialogHeader>
        </DialogContent>
    );
};