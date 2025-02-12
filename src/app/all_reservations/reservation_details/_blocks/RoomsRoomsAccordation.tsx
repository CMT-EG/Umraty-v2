"use client";
import React, { useState } from 'react';
import { fakeData } from '@/app/(home)/_blocks/hero/_blocks/reservationBox/constants/data';
import { SelectOption } from '@/global/components/selectOption/SelectOption';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/global/shadcn/ui/accordion';
import { Input } from '@/global/shadcn/ui/input';
import { User } from 'lucide-react';
import gender from "../../constants/gender.svg";
import nationality from "../../constants/nationality.svg";
import nationalId from "../../constants/nationalId.svg";
import Image from 'next/image';

export const RoomsAccordation = () => {
    const [isDisabled, setIsDisabled] = useState(false);
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
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-right">١٢- بيانات المسافر الثاني عشر</h2>
                        </div>
                        <div className="flex items-center mt-8 w-full gap-4">
                            <div className="flex-1">
                                <label className="text-sm font-medium mb-2 block">الاسم كامل بالعربية</label>
                                <div className="relative">
                                    <Input
                                        className="pr-8 text-right h-11 border-none bg-[#F6F6F6]"
                                        placeholder="الاسم"
                                    />
                                    <User className="absolute right-2 top-2.5 h-5 w-5 text-transparent" fill='#888888' />
                                </div>
                            </div>
                            <SelectOption
                                titleClassName='font-normal mb-0'
                                title="تاريخ العودة"
                                options={fakeData}
                                containerClassName='flex-1'
                                triggerClassName="w-full border-none bg-[#F6F6F6] mt-2 rounded-md h-11 px-3 py-2"
                                placeholder="اختر تاريخ العودة"
                                innerIcon={<Image src={gender} alt=' gender' className='w-4 h-4' />}
                            />
                            <SelectOption
                                titleClassName='font-normal mb-0'
                                title="تاريخ العودة"
                                options={fakeData}
                                containerClassName='flex-1'
                                triggerClassName="w-full border-none bg-[#F6F6F6] mt-2 rounded-md h-11 px-3 py-2"
                                placeholder="اختر تاريخ العودة"
                                innerIcon={<Image src={nationality} alt=' nationality' className='w-4 h-4' />}
                            />
                            <SelectOption
                                titleClassName='font-normal mb-0'
                                title="تاريخ العودة"
                                options={fakeData}
                                containerClassName='flex-1'
                                triggerClassName="w-full border-none bg-[#F6F6F6] mt-2 rounded-md h-11 px-3 py-2"
                                placeholder="اختر تاريخ العودة"
                                innerIcon={<Image src={nationalId} alt=' nationalId' className='w-4 h-4' />}
                            />
                            <div className="flex-1">
                                <label className="text-sm font-medium text-right mb-2 block">رقم الهوية</label>
                                <div className="relative">
                                    <Input
                                        className="pr-8 text-right border-none bg-[#F6F6F6]"
                                        placeholder="رقم الهوية الوطنية"
                                    />
                                    <Image src={nationalId} alt=' nationalId' className='w-4 h-4 absolute right-2 top-3.5' />
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={() => setIsDisabled(!isDisabled)} className='mt-6 bg-primary-600 w-full rounded-3xl text-white font-extrabold text-center py-3'>{isDisabled ? "حفظ" : "تعديل البيانات"}</button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};
