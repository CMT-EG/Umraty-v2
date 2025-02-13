"use client";
import HotelInfoComponent from '@/features/reservations/components/HotelInfoComponent';
import hotelImage from "@/assets/reservations/hotelImage.svg";
import React from 'react';
import TotalHotelsCost from '@/features/reservations/components/TotalHotelsCost';
import HotelProgressSteps from '../../../features/reservations/components/HotelProgressSteps';
import CurrentHotel from '@/features/reservations/components/CurrentHotel';
import UserDropdownDetails from '@/features/reservations/components/UserDropdownDetails';

const StepOneContent = ({ setCurrentStep }) => {
    const [currentHotel, _] = React.useState<any>(1);

    return (
        <div className='flex items-start gap-10 w-[90%] mx-auto'>
            <div className="w-[60%]">
                <div className="bg-[#FCFCFD] rounded-[1.25rem] py-5 px-8 shadow-lg mb-20">
                    <div className="flex flex-col h-auto md:flex-row justify-between items-center gap-4">
                        <HotelProgressSteps
                            isActive={currentHotel === 1 && true}
                            title='الخطوة الأولي'
                            description='بيانات المسافرين بفندق مكة المكرمة'
                        />
                        <div className="border-t w-full flex-1 border-[#E0E0E0]"></div>
                        <HotelProgressSteps
                            isActive={currentHotel === 2 && true}
                            title='الخطوة الثانية'
                            description='بيانات المسافرين بفندق المدينة المنورة'
                        />
                    </div>
                    <CurrentHotel
                        hotelImage={hotelImage}
                        hotelName='فندق برج ساعة مكة الملكي'
                        hotelLocation='جوموسويو ماه. إينونو كاد. رقم:8، دبى'
                        arrivalDate='الجمعة 5 سبتمبر'
                        departureDate='الجمعة  13 سبتمبر'
                    />
                </div>
                <UserDropdownDetails withVisa={true} setCurrentStep={setCurrentStep} />
            </div>
            <div className="w-[40%] flex flex-col gap-5">
                <HotelInfoComponent
                    imageUrl={hotelImage}
                    hotelName="فندق برج ساعة مكة الملكي"
                    rating={4.2}
                    rooms={[
                        { roomType: 'غرفة عادية', bookedFor: 'تم الحجز لـ 12 فرد', price: '80 ريال / الفرد' },
                        { roomType: '2 × غرفه عاديه', price: '100 ريال' },
                        { roomType: '5 × غرفة سرير مزدوج أو سريرين توام' },
                    ]}
                    priceDetails={[
                        { label: 'التكلفه الفرعيه', amount: '960 ريال' },
                        { label: 'الضرائب', amount: '400 ريال' },
                    ]}
                    totalPrice="1,360 ريال"
                    meters={200}
                    bed={2}
                    bathroom={3}
                    wifi
                    airConditioning
                    metal
                    meal
                />
                <HotelInfoComponent
                    imageUrl={hotelImage}
                    hotelName="فندق آل فيصل بالمدينة المنورة"
                    rating={4.2}
                    rooms={[
                        { roomType: 'غرفة عادية', bookedFor: 'تم الحجز لـ 12 فرد' },
                        { roomType: '2 × غرفه عاديه' },
                        { roomType: '5 × غرفة سرير مزدوج أو سريرين توام' },
                    ]}
                    priceDetails={[
                        { label: 'التكلفه الفرعيه', amount: '960 ريال' },
                        { label: 'الضرائب', amount: '400 ريال' },
                    ]}
                    totalPrice="1,360 ريال"
                    meters={200}
                    bed={2}
                    bathroom={3}
                    wifi
                    airConditioning
                    metal
                    meal
                />
                <TotalHotelsCost
                    priceDetails={[{ name: 'التكلفه الفرعيه', price: 960 },
                    { name: 'الضرائب', price: 400 },]}
                    totalPrice={2720}
                />
            </div>
        </div>
    );
};

export default StepOneContent;