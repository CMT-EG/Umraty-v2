"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/global/shadcn/ui/popover";
import { Button } from "@/global/shadcn/ui/button";
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from "@/global/shadcn/ui/command";
import { cn } from "@/global/shadcn/lib/utils";

interface DropdownSearchProps {
    placeholder: string;
    selectOptions: { value: any, label: any; }[];
}

export function DropdownSearch({ placeholder, selectOptions }: DropdownSearchProps) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between bg-[#F6F6F6] text-[#333]"
                >
                    {value
                        ? selectOptions?.find((framework) => framework.value === value)?.label
                        : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandList>
                        {/* <CommandEmpty>No framework found.</CommandEmpty> */}
                        <CommandGroup>
                            {selectOptions?.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue);
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
