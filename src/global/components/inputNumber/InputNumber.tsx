"use client";
import * as React from "react";
import { UserIcon } from "@/global/assets/svg/UserIcon";
import "./style.css";

interface InputNumberProps {
    placeholder?: string;
    onChange: (value: string) => void;
    title: string;
    required?: boolean;
    inputClassName?: string;
}

export function InputNumber({
    placeholder,
    onChange,
    title,
    required = false,
    inputClassName = "",
}: InputNumberProps) {

    return (
        <div className="flex items-center flex-grow gap-3">
            <UserIcon />
            <div className="flex flex-col">
                <p className="text-black font-bold mb-1">
                    {title} {required && <span className="text-red-500">*</span>}
                </p>
                <div className="relative">
                    <input
                        type="number"
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className={`${inputClassName} w-full !appearance-none text-[#777E90] border-none p-0 focus:outline-none text-sm`}
                    />
                </div>
            </div>
        </div>
    );
}
