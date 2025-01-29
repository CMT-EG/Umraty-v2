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
  return (
    <RadioGroup value={value} onValueChange={onChange}>
      {label && <Label className="text-lg font-semibold mb-4">{label}</Label>}
      {options?.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroup>
  );
}
