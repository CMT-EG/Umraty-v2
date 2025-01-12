import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/main/common/shadcn/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/main/common/shadcn/ui/popover";
import { countriesArray } from "@/main/common/utils/countries";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FlagImage, ParsedCountry } from "react-international-phone";

export function CountryCodeDropdown({
  country,
  setCountry,
}: {
  country: ParsedCountry;
  setCountry: (country: ParsedCountry) => any;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="px-3 flex items-center justify-center gap-2 shrink-0 select-none cursor-pointer">
          <span dir="ltr" className="text-[0.8rem] font-bold text-neural-950">
            +{country.dialCode}
          </span>
          <FlagImage iso2={country.iso2} className="w-8" />
          <BsChevronDown className="size-2 text-neural-400" strokeWidth={1} />
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-36"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Command>
          <CommandInput placeholder="بحث ..." />
          <CommandList>
            <CommandEmpty>لا يوجد نتائج</CommandEmpty>
            <CommandSeparator />
            <CommandGroup>
              {countriesArray.map((country) => (
                <CommandItem
                  key={`+${country.dialCode} - ${country.name}`}
                  value={`+${country.dialCode} - ${country.name}`}
                  onSelect={() => {
                    setCountry(country);
                    setOpen(false);
                  }}
                >
                  <FlagImage className="w-8 me-2" iso2={country.iso2} />
                  <span dir="ltr">+{country.dialCode}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}