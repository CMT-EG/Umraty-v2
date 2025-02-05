"use client";
import { useState } from 'react';

export const useReservation = () => {
    const [currentTab, setCurrentTab] = useState("withoutVisa");
    const [step, setStep] = useState(1);
    const [pilgrims, setPilgrims] = useState(0);


    const increment = (setter: React.Dispatch<React.SetStateAction<number>>) => {
        setter((prev) => prev + 1);
    };

    const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
        if (value > 0) {
            setter((prev) => prev - 1);
        }
    };
    const handleNextStep = () => {
        setStep(2);
    };
    const handleSelectionChange = (selected: string) => {
        console.log('Selected:', selected);
    };

    return {
        currentTab,
        setCurrentTab,
        step,
        setStep,
        handleNextStep,
        handleSelectionChange,
        pilgrims,
        setPilgrims,
        increment,
        decrement
    };
};
