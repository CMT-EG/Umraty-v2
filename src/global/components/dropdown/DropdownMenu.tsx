import React from 'react';
import { DropdownMenuContent, DropdownMenuTrigger, DropdownMenu } from '@/global/shadcn/ui/dropdown-menu';

interface DropdownProps {
    children: React.ReactNode;
    title: string;
    icon?: React.ReactNode;
    required?: boolean;
    placeholder: string;
}

export const Dropdown = ({ title, children, icon, required, placeholder }: DropdownProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2  rounded">
                <div className="flex items-center flex-grow gap-3">
                    {icon}
                    <div className="flex flex-col">
                        <p className="text-black font-bold mb-1">
                            {title} {required && <span className="text-red-500">*</span>}
                        </p>
                        <p className='text-[#777E90] font-normal text-sm'>{placeholder}</p>
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
                {children}
            </DropdownMenuContent>
        </DropdownMenu>

    );
};
