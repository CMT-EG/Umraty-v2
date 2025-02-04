"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/global/shadcn/ui/popover";
import { Button } from "@/global/shadcn/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/global/shadcn/ui/command";
import { cn } from "@/global/shadcn/lib/utils";
import { useGetAllFlights } from "./useAirlineQuery";

interface AirlineComboboxProps {
    placeholder?: string;
    triggerClassName?: string;
    contentClassName?: string;
    onValueChange?: (value: string) => void;
    title: string;
    required?: boolean;
    icon?: React.ReactNode;
}

export function AirlineCombobox({
    placeholder,
    triggerClassName,
    contentClassName,
    onValueChange,
    title,
    icon,
    required = false,
}: AirlineComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const { data } = useGetAllFlights();

    const handleValueChange = (newValue: string) => {
        setValue(newValue);
        if (onValueChange) {
            onValueChange(newValue);
        }
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div onClick={handleClick} className="cursor-pointer w-full">
            <Popover open={open} onOpenChange={setOpen}>
                <div className="flex items-center gap-3">
                    {icon}
                    <div className="flex flex-col w-full">
                        <p className="text-black font-bold mb-3 text-start">
                            {title} {required && <span className="text-red-500">*</span>}
                        </p>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className={`${triggerClassName} w-full justify-between text-[#777E90] !appearance-none hover:bg-white hover:text-[#777E90] focus:outline-none`}
                            >
                                {value
                                    ? data?.data?.find((airline) => airline.icao_code === value)
                                        ?.airline_name
                                    : placeholder || "اختر شركة الطيران"}
                                <ChevronDown className="bg-primary-600 h-4 w-4 text-white rounded-md" />
                            </Button>
                        </PopoverTrigger>
                    </div>
                </div>
                <PopoverContent className={`${contentClassName} !w-[500px] p-0`} align="start">
                    <Command>
                        <CommandInput placeholder="ابحث عن شركة الطيران" className="mr-2" />
                        <CommandList>
                            <CommandEmpty>No airline found.</CommandEmpty>
                            <CommandGroup>
                                {data?.data?.map((airline) => (
                                    <CommandItem
                                        key={airline.icao_code}
                                        value={airline.airline_name}
                                        onSelect={() => {
                                            const newValue = airline.icao_code === value ? "" : airline.icao_code;
                                            handleValueChange(newValue);
                                            setOpen(false);
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === airline.icao_code ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {airline.airline_name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}