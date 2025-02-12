import React from 'react';
import ProgressStepComponent from './ProgressStepComponent';
import StepOneIcon from '@/assets/reservations/StepOneIcon';
import StepTwoIcon from '@/assets/reservations/StepTwoIcon';
import StepThreeIcon from '@/assets/reservations/StepThreeIcon';

interface ReservationStepsProps {
    currentStep: number;
}

export const ReservationSteps = ({ currentStep = 1 }: ReservationStepsProps) => {
    return (
        <div className="mt-[-50px] z-50 relative w-[90%] mx-auto">
            <div className="flex flex-col h-auto md:flex-row justify-between items-center gap-4 bg-[#FCFCFD] rounded-[1.25rem] py-5 px-8 shadow-lg mb-20">
                <ProgressStepComponent
                    isActive={currentStep === 1 && true}
                    icon={<StepOneIcon color={currentStep === 1 ? "#ffffff" : "#717171"} />}
                    title='الخطوة الأولي'
                    description='بيانات المسافرين والتسكين'
                />
                <div className="border-t w-full flex-1 border-[#E0E0E0]"></div>
                <ProgressStepComponent
                    isActive={currentStep === 2 && true}
                    icon={<StepTwoIcon color={currentStep === 2 ? "#ffffff" : "#717171"} />}
                    title='الخطوة الثانيه'
                    description='ملخص الحجز'
                />
                <div className="border-t w-full flex-1 border-[#E0E0E0]"></div>
                <ProgressStepComponent
                    isActive={currentStep === 3 && true}
                    icon={<StepThreeIcon color={currentStep === 3 ? "#ffffff" : "#717171"} />}
                    title='الخطوة الثالثه'
                    description='الدفع'
                />
            </div>
        </div>
    );
};
