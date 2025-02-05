import React, { useState } from 'react';
import PhoneInput from '@/global/components/phoneInput/PhoneInput';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/global/shadcn/ui/dialog';
import Image from 'next/image';
import phone from "./assets/phone.svg";

export const PhonePopup = ({ setCurrentStep }) => {
    const [phoneValue, setPhoneValue] = useState({ phone_number: "", phone_code: "966" });

    const handleValueChange = (newValue: { phone_number: string; phone_code: string; }) => {
        setPhoneValue(newValue);
    };

    return (
        <DialogContent>
            <DialogHeader className='mt-12'>
                <Image src={phone} alt='phone number' width={110} height={110} className='mx-auto mb-4' />
                <DialogTitle className='text-center text-2xl font-extrabold w-full'>أدخل رقم هاتفك</DialogTitle>
                <DialogDescription className='w-full text-center'>
                    يرجى إدخال رقم هاتفك بالصيغة الدولية للمتابعة
                </DialogDescription>
                <PhoneInput
                    label='رقم الهاتف'
                    value={phoneValue}
                    onValueChange={handleValueChange}
                    className='bg-transparent border border-neutral-200 rounded-lg mt-2 mb-5 w-full'
                />
                <button type="button" className='bg-primary-600 rounded-3xl text-white font-bold py-3 text-sm !mb-5 w-full' onClick={setCurrentStep}>التحقق</button>
            </DialogHeader>
        </DialogContent>
    );
};