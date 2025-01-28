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
    required?: boolean;
    icon?: React.ReactNode;
}

export function SelectOption({
    placeholder = "من أين أنت منطلق؟",
    options,
    triggerClassName,
    contentClassName,
    onValueChange,
    title,
    icon,
    required = false
}: SelectOptionProps) {
    return (
        <Select onValueChange={onValueChange} dir="rtl">
            <div className="flex items-center gap-3">
                {icon}
                <div className="flex flex-col w-full">
                    <p className="text-black font-bold mb-1">{title} {required && <span className="text-red-500">*</span>}</p>
                    <SelectTrigger className={`${triggerClassName} text-[#777E90] !appearance-none focus:outline-none`}>
                        <SelectValue placeholder={placeholder} />
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
    );
}
