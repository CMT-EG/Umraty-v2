"use client";
import { TabsContent } from '@/global/shadcn/ui/tabs';
import React from 'react';
import { SelectOption } from '@/global/components/selectOption/SelectOption';
import PreferenceSelector from '@/global/components/PreferenceSelect/PreferenceSelector';
import { useReservation } from '../hooks/useReservation';

export const WithVisa = ({ isVisa }) => {
    const { step, handleNextStep, handleSelectionChange } = useReservation();

    return (
        <TabsContent value={isVisa}>
            {step === 1 ?
                <div>
                    <SelectOption
                        title='شركة الطيران'
                        options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                        triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                        placeholder=' اختر شركة الطيران '
                    />
                    <div className="flex items-center gap-4 w-full mt-4">
                        <div className="flex-1">
                            <SelectOption
                                title='تاريخ الذهاب'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر تاريخ الذهاب'
                            />
                        </div>
                        <div className="flex-1">
                            <SelectOption
                                title='نقطة الانطلاق'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر نقطة الانطلاق'
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full mt-4">
                        <div className="flex-1">
                            <SelectOption
                                title='رقم الذهاب'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر رقم الرحلة'
                            />
                        </div>
                        <div className="flex-1">
                            <SelectOption
                                title='توقيت الذهاب'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر توقيت الذهاب'
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full mt-4">
                        <div className="flex-1">
                            <SelectOption
                                title='تاريخ العودة'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر تاريخ العودة'
                            />
                        </div>
                        <div className="flex-1">
                            <SelectOption
                                title='نقطة الوصول'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر نقطة الوصول'
                            />
                        </div>
                    </div>
                </div>
                :
                <div>
                    <PreferenceSelector
                        question="هل تريد خدمة النقل من مكة للمدينة المنورة ؟"
                        option1="نعم"
                        option2="لا"
                        onSelectionChange={handleSelectionChange}
                    />
                    <PreferenceSelector
                        question="هل تريد السكن بالمدينة المنورة؟"
                        option1="نعم"
                        option2="لا"
                        onSelectionChange={handleSelectionChange}
                    />
                    <PreferenceSelector
                        question="هل تريد خدمة النقل من المدينة المنورة ؟"
                        option1="نعم"
                        option2="لا"
                        onSelectionChange={handleSelectionChange}
                    />
                    <div className="border-t border-t-primary-400 my-8 border-dashed w-full"></div>
                    <SelectOption
                        title='عدد المسافرين'
                        options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                        triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                        placeholder='اختر عدد المسافرين'
                    />
                    <div className="border-t border-t-primary-400 my-8 border-dashed w-full"></div>
                    <div className="flex items-center gap-4 w-full mt-4">
                        <div className="flex-1">
                            <SelectOption
                                title='رقم رحلة العودة '
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر رقم الرحلة'
                            />
                        </div>
                        <div className="flex-1">
                            <SelectOption
                                title='توقيت العودة'
                                options={[{ label: "القاهرة", value: "Cairo" }, { label: "الجيزة", value: "Giza" }]}
                                triggerClassName='w-full border-[#D1D1D1] mt-2 rounded-xl px-3 py-2 [&_svg]:bg-primary-600 [&_svg]:opacity-100 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-white [&_svg]:rounded-md '
                                placeholder='اختر توقيت الذهاب'
                            />
                        </div>
                    </div>
                </div>

            }

            <button type="button" className='bg-primary-600 text-white rounded-2xl px-3 py-2 mt-7 w-full' onClick={handleNextStep}>التالي</button>
        </TabsContent>
    );
};
