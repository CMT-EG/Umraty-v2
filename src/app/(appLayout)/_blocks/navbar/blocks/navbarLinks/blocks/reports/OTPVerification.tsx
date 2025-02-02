import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/global/components/inputOtp/InputOtp';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/global/shadcn/ui/dialog';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import Image from 'next/image';
import React, { useState } from 'react';
import verificationImage from "./assets/verification.svg";

export const OTPVerification = ({ setCurrentStep, handleBackButton }) => {
    const [otpValue, setOtpValue] = useState('');

    return (
        <DialogContent>
            <DialogHeader className='mt-12'>
                <Image src={verificationImage} alt='phone number' width={110} height={110} className='mx-auto mb-4' />
                <DialogTitle className='text-center text-2xl font-extrabold w-full'>تحقق من رقم هاتفك</DialogTitle>
                <DialogDescription className='w-full text-center'>
                    تم ارسال رمز تاكيد على رقم هاتفك, تحقق من هاتفك يرجى إدخاله أدناه
                    <br />
                    <span className='!mt-2'>+20 114 364 9865 <span className="!font-bold !text-primary-600 mx-2">تعديل</span></span>
                </DialogDescription>
                <div className="mx-auto !mt-6">
                    <InputOTP
                        maxLength={6}
                        value={otpValue}
                        onChange={(value) => setOtpValue(value)}
                        pattern={REGEXP_ONLY_DIGITS}
                    >
                        <InputOTPGroup className="gap-2">
                            {Array(6)
                                .fill(1)
                                .map((_, index) => (
                                    <InputOTPSlot
                                        key={index}
                                        index={index}
                                        className="sm:size-16 border-[#d1d1d1]"
                                    />
                                ))}
                        </InputOTPGroup>
                    </InputOTP>
                </div>
                <button type="button" className='bg-primary-600 rounded-3xl text-white font-bold py-3 text-sm !mt-6 !mb-3 w-full' onClick={setCurrentStep}>تأكيد</button>
                <button type="button" className='bg-transparent border border-primary-600 rounded-3xl text-primary-600 font-bold py-3 text-sm !mb-4 w-full' onClick={handleBackButton}>الرجوع</button>
                <div className="flex justify-center gap-1 text-center">
                    <span className="text-[#878787] text-sm font-normal leading-normal">
                        لم يصلك رمز التحقق بعد ؟ يرجي المحاولة مرة أخري في
                    </span>
                    <span className="text-[#8b6343] text-sm font-bold leading-normal">
                        00:56
                    </span>
                </div>
            </DialogHeader>

        </DialogContent>
    );
};

export default OTPVerification;