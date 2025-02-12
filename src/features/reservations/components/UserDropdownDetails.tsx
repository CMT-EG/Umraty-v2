"use client";
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/global/shadcn/ui/accordion';
import { DropdownSearch } from '@/components/DropdownSearch';
import { fakeData } from '@/app/(home)/_blocks/hero/_blocks/reservationBox/constants/data';
import { DateReservationPicker } from './DateReservationPicker';
import { SelectOption } from '@/global/components/selectOption/SelectOption';
import { Input } from '@/global/shadcn/ui/input';
import { Label } from '@/global/shadcn/ui/label';
import passportIcon from '@/assets/reservations/passport.svg';
import Image from 'next/image';
import fileIcon from '@/assets/reservations/fileDownload.svg';
import PhoneInput from '@/global/components/phoneInput/PhoneInput';
import { User } from 'lucide-react';
import gender from "@/assets/reservations/gender.svg";
import nationality from "@/assets/reservations/nationality.svg";

const UserDropdownDetails = ({ withVisa }) => {
    const [phoneValue, setPhoneValue] = useState({ phone_number: "", phone_code: "966" });

    const handleValueChange = (newValue: { phone_number: string; phone_code: string; }) => {
        setPhoneValue(newValue);
    };

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='!border-none'>
                <AccordionTrigger className='hover:no-underline text-white bg-primary-600 rounded-lg py-3 px-6 text-center w-full items-center'>
                    <div className="flex items-center justify-between gap-4 w-full">
                        <p className='font-bold text-lg'>غرفة فردية</p>
                        <p className='text-sm font-bold'>80 ريال <span className='font-normal'>/ للفرد</span></p>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="w-full p-5">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-xl font-extrabold text-right">١٢- بيانات المسافر الثاني عشر</h2>
                        </div>
                        {withVisa ?
                            <div className='border border-gray-300 rounded-lg p-5 h-full'>
                                <h2 className="font-bold text-lg">1- البيانات الشخصية</h2>
                                <div className="grid grid-cols-3 gap-2 mt-8 w-full">
                                    <DropdownSearch
                                        placeholder='اكتب الاسم الأول هنا'
                                        selectOptions={fakeData}
                                    />
                                    <DropdownSearch
                                        placeholder='اكتب الاسم الأوسط هنا'
                                        selectOptions={fakeData}
                                    />
                                    <DropdownSearch
                                        placeholder='اكتب اسم العائلة هنا'
                                        selectOptions={fakeData}
                                    />
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <div className="flex-1">
                                        <DateReservationPicker
                                            title="تاريخ الميلاد"
                                            className="flex-grow"
                                            placeholder="xx/xx/xxxx"
                                            date={undefined} />
                                    </div>
                                    <div className="flex-1">
                                        <SelectOption
                                            title="الجنسية"
                                            options={fakeData}
                                            triggerClassName="text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-4 w-full text-black/70"
                                            placeholder="اختر الجنسية"
                                        />
                                    </div>
                                </div>
                                <h2 className="font-bold text-lg mt-5 mb-4">2- بيانات جواز السفر</h2>
                                <Label htmlFor="passport" className='font-bold text-black/70'>رقم جواز السفر</Label>
                                <div className="relative">
                                    <Image src={passportIcon} alt="passport icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                                    <Input
                                        type='number'
                                        className='text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-4 w-full text-black/70'
                                        placeholder='ادخل رقم جواز السفر'
                                    />
                                </div>
                                <div className="flex mt-6 mb-8">
                                    <div className="flex-1">
                                        <DateReservationPicker
                                            title="تاريخ إصدار جواز السفر"
                                            className="flex-grow"
                                            placeholder="xx/xx/xxxx"
                                            date={undefined} />
                                    </div>
                                    <div className="flex-1">
                                        <DateReservationPicker
                                            title="تاريخ انتهاء جواز السفر"
                                            className="flex-grow"
                                            placeholder="xx/xx/xxxx"
                                            date={undefined} />
                                    </div>
                                </div>
                                <h2 className="font-bold text-lg mt-14 mb-4">3- المستندات</h2>
                                <div className="flex items-stretch gap-4">
                                    <label htmlFor="passportFile" className='flex-1 cursor-pointer'>
                                        <p className='font-bold text-black/70 mb-3'>صورة جواز السفر</p>
                                        <div className='bg-[#F4F5F6] w-full h-36 rounded-xl flex items-center justify-center'>
                                            <div className='text-center'>
                                                <Image src={fileIcon} alt='fileIcon' className='mx-auto' />
                                                <p className='text-[#777E90] mt-2'>اسحب أو اختر ملفك للتحميل</p>
                                            </div>
                                        </div>
                                    </label>
                                    <Input
                                        type='file'
                                        className='hidden'
                                        id='passportFile'
                                    />
                                    <label htmlFor="personalFile" className='flex-1 cursor-pointer'>
                                        <p className='font-bold text-black/70 mb-3'>صورة بخلفية بيضاء</p>
                                        <div className='bg-[#F4F5F6] w-full h-36 rounded-xl flex items-center justify-center'>
                                            <div className='text-center'>
                                                <Image src={fileIcon} alt='fileIcon' className='mx-auto' />
                                                <p className='text-[#777E90] mt-2'>اسحب أو اختر ملفك للتحميل</p>
                                            </div>
                                        </div>
                                    </label>
                                    <Input
                                        type='file'
                                        className='hidden'
                                        id='personalFile'
                                    />
                                </div>
                                <h2 className="font-bold text-lg mt-8 mb-4">4- بيانات الاتصال</h2>
                                <PhoneInput
                                    label='رقم الهاتف'
                                    value={phoneValue}
                                    onValueChange={handleValueChange}
                                    className='bg-[#F6F6F6] border border-neutral-200 rounded-lg mt-2 mb-5 w-full'
                                />
                            </div>
                            :
                            <>
                                <div className="flex gap-4 mt-6">
                                    <div className='flex-1'>
                                        <Label htmlFor="passport" className='font-bold text-black/70'>الاسم كامل بالعربية</Label>
                                        <div className="relative">
                                            <User className='absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5' fill='#888888' color='#888888' />
                                            <Input
                                                type='number'
                                                className='text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-8 w-full text-black/70'
                                                placeholder='الاسم كامل'
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <SelectOption
                                            title="الجنس"
                                            options={fakeData}
                                            triggerClassName="text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-4 w-full text-black/70"
                                            placeholder="الجنس"
                                            innerIcon={<Image src={gender} alt='gender' />}
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <div className="flex-1">
                                        <SelectOption
                                            title="الجنسية"
                                            options={fakeData}
                                            triggerClassName="text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-4 w-full text-black/70"
                                            placeholder="اختر الجنسية"
                                            innerIcon={<Image src={nationality} alt='nationality' width={18} height={18} />}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <SelectOption
                                            title="نوع الهويه"
                                            options={fakeData}
                                            triggerClassName="text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-4 w-full text-black/70"
                                            placeholder="الهويه"
                                            innerIcon={<Image src={passportIcon} alt="passport icon" width={18} height={18} />}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Label htmlFor="passport" className='font-bold text-black/70'>رقم جواز السفر</Label>
                                        <div className="relative">
                                            <Image src={passportIcon} alt="passport icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                                            <Input
                                                type='number'
                                                className='text-sm flex justify-between font-normal bg-[#F6F6F6] h-10 py-2 mt-2 rounded-md px-8 w-full text-black/70'
                                                placeholder='ادخل رقم جواز السفر'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default UserDropdownDetails;
