"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/global/shadcn/ui/select";
import "./style.css";

interface SelectOptionProps {
    placeholder?: string;
    options: { value: string; label: string; }[];
    triggerClassName?: string;
    contentClassName?: string;
    onValueChange?: (value: string) => void;
    title: string;
    titleClassName?: string;
    required?: boolean;
    icon?: React.ReactNode;
    innerIcon?: React.ReactNode;
    disabled?: boolean;
    containerClassName?: string;
}

export function SelectOption({
    placeholder,
    options,
    triggerClassName,
    contentClassName,
    onValueChange,
    title,
    titleClassName,
    icon,
    innerIcon,
    required = false,
    disabled = false,
    containerClassName,
}: SelectOptionProps) {
    const triggerRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        if (triggerRef.current) {
            triggerRef.current.click();
        }
    };

    return (
        <div onClick={handleClick} className={`${containerClassName} cursor-pointer`}>
            <Select onValueChange={onValueChange} dir="rtl" disabled={disabled}>
                <div className="flex items-center gap-3">
                    {icon}
                    <div className="flex flex-col w-full">
                        <p className={`${titleClassName} text-black font-bold mb-1 text-start`}>{title} {required && <span className="text-red-500">*</span>}</p>
                        <SelectTrigger ref={triggerRef} className={`${triggerClassName} text-[#777E90] !appearance-none focus:outline-none`}>
                            <div className="flex items-center gap-2">

                                {innerIcon}
                                <SelectValue placeholder={placeholder} />
                            </div>
                        </SelectTrigger>
                        <SelectContent className={contentClassName}>
                            {options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </div>
                </div>
            </Select>
        </div>
    );
}