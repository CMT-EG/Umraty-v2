import { JSX } from 'react';

interface InfoRowProps {
    label: string;
    value: string | number | JSX.Element;
    labelClassName?: string;
    valueClassName?: string;
    containerClassName?: string;
}
export const InfoRow = ({ label, value, labelClassName, valueClassName, containerClassName }: InfoRowProps) => (
    <div className={`${containerClassName} flex gap-3 text-sm items-center`}>
        <div className={`${labelClassName} text-[#5D5D5DDB] font-bold min-w-[120px]`}>{label}</div>
        <div className={`${valueClassName} font-extrabold`}>{value}</div>
    </div>
);