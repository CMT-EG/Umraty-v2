"use client";
import { useState } from 'react';

export const useReservation = () => {
    const [currentTab, setCurrentTab] = useState("withoutVisa");
    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep(2);
    };
    const handleSelectionChange = (selected: string) => {
        console.log('Selected:', selected);
    };

    return { currentTab, setCurrentTab, step, setStep, handleNextStep, handleSelectionChange };
};
