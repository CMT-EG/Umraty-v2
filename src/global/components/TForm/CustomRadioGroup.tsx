"use client";

import { Label } from "@/global/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/global/shadcn/ui/radio-group";

type Props = {
  value?: any;
  onChange?: (value: any) => void;
  options?: { value: any; label: any }[];
  label?: string;
};
export default function CustomRadioGroup({
  value,
  onChange,
  options,
  label,
}: Props) {
  const dir =
    typeof window !== "undefined" ? document.documentElement.dir : "ltr";
  return (
    <RadioGroup dir={dir as any} value={value} onValueChange={onChange}>
      {label && <Label className="text-lg font-semibold mb-4">{label}</Label>}
      <div className="flex gap-3">
        {options?.map((option) => (
          <div key={option.value} className="flex items-center gap-4">
            <RadioGroupItem value={option.value} id={option.value} />
            <Label
              htmlFor={option.value}
              className="text-[#131416] text-2xl font-normal"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
}
