import { ReservationHero } from '@/components/reservations/ReservationHero';
import { ReservationSteps } from '@/components/reservations/ReservationSteps';
import StepOneContent from '@/components/reservations/steps/StepOneContent';
import React from 'react';

const Page = () => {
    return (
        <>
            <ReservationHero />
            <ReservationSteps currentStep={1} />
            <StepOneContent />
        </>
    );
};

export default Page;