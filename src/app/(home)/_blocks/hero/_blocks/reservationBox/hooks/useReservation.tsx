"use client";
import { useState } from 'react';

export const useReservation = () => {
    const [currentTab, setCurrentTab] = useState("withoutVisa");
    const [step, setStep] = useState(1);
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const total = adults + children + infants;

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
        adults,
        setAdults,
        children,
        setChildren,
        infants,
        setInfants,
        total,
        increment,
        decrement
    };
};
