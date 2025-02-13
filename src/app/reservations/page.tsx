"use client";
import { ReservationHero } from '@/components/reservations/ReservationHero';
import { ReservationSteps } from '@/components/reservations/ReservationSteps';
import StepOneContent from '@/components/reservations/steps/StepOneContent';
import StepThreeContent from '@/components/reservations/steps/StepThreeContent';
import StepTwoContent from '@/components/reservations/steps/StepTwoContent';
import React from 'react';

const Page = () => {
    const [currentReservationStep, setCurrentReservationStep] = React.useState(3);

    return (
        <>
            <ReservationHero
                title={currentReservationStep === 1 ?
                    "فندق برج ساعة مكة الملكي"
                    : currentReservationStep === 2 ?
                        "ملخص الحجز"
                        :
                        "الدفع"
                }
            />
            <ReservationSteps currentStep={currentReservationStep} />
            {currentReservationStep === 1 ?
                <StepOneContent setCurrentStep={setCurrentReservationStep} />
                : currentReservationStep === 2 ?
                    <StepTwoContent setCurrentStep={setCurrentReservationStep} />
                    : currentReservationStep === 3 ?
                        <StepThreeContent setCurrentStep={setCurrentReservationStep} />
                        :
                        null
            }
        </>
    );
};

export default Page;