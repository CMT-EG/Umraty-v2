import React from 'react';
import ProgressStepComponent from './ProgressStepComponent';
import StepOneIcon from '@/assets/reservations/StepOneIcon';
import StepTwoIcon from '@/assets/reservations/StepTwoIcon';
import StepThreeIcon from '@/assets/reservations/StepThreeIcon';

interface ReservationStepsProps {
    currentStep: number;
}

export const ReservationSteps = ({ currentStep = 1 }: ReservationStepsProps) => {
    const firstStep = currentStep === 1 || currentStep === 2 || currentStep === 3;
    const secondStep = currentStep === 2 || currentStep === 3;
    const thirdStep = currentStep === 3;

    return (
        <div className="mt-[-50px] z-50 relative w-[90%] mx-auto">
            <div className="flex flex-col h-auto md:flex-row justify-between items-center gap-4 bg-[#FCFCFD] rounded-[1.25rem] py-5 px-8 shadow-lg mb-20">
                <ProgressStepComponent
                    isActive={firstStep && true}
                    icon={<StepOneIcon color={firstStep ? "#ffffff" : "#717171"} />}
                    title='الخطوة الأولي'
                    description='بيانات المسافرين والتسكين'
                />
                <div className={`border-t w-full flex-1 ${currentStep > 1 ? "border-primary-600" : "border-[#E0E0E0]"}`}></div>
                <ProgressStepComponent
                    isActive={secondStep && true}
                    icon={<StepTwoIcon color={secondStep ? "#ffffff" : "#717171"} />}
                    title='الخطوة الثانيه'
                    description='ملخص الحجز'
                />
                <div className={`border-t w-full flex-1 b ${currentStep > 2 ? "border-primary-600" : "border-[#E0E0E0]"}`}></div>
                <ProgressStepComponent
                    isActive={thirdStep && true}
                    icon={<StepThreeIcon color={thirdStep ? "#ffffff" : "#717171"} />}
                    title='الخطوة الثالثه'
                    description='الدفع'
                />
            </div>
        </div>
    );
};
