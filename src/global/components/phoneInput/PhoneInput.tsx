import { BiPhoneCall } from "react-icons/bi";
import { cn } from "../../shadcn/lib/utils";
import { CountryCodeDropdown } from "./_blocks/countryCodeDropdown/CountryCodeDropdown";
import { countriesArray } from "../../utils/countries";

type PhoneInputType = {
  phone_number: string;
  phone_code: string;
};
type Props = React.HTMLAttributes<HTMLDivElement> & {
  value: PhoneInputType;
  onValueChange: (value: PhoneInputType) => any;
  label?: string;
};
export default function PhoneInput({
  value,
  onValueChange,
  className,
  label,
  ...props
}: Props) {
  return (
    <div>
      <label className="!text-right block text-[#888888] text-base">{label}</label>
      <div
        className={cn(
          "bg-[#F6F6F6] h-14 rounded-xl flex items-stretch",
          className
        )}
        {...props}
      >
        <div className="w-14 flex items-center justify-center shrink-0">
          <BiPhoneCall className="size-6 -scale-x-100 text-primary-600" />
        </div>
        <input
          type="text"
          id="phone_number"
          value={value.phone_number}
          onChange={(e) =>
            onValueChange({
              phone_number: e.currentTarget.value,
              phone_code: value.phone_code,
            })
          }
          className="bg-transparent focus-visible:outline-none w-full"
          placeholder="ادخل هاتفك"
        />
        <CountryCodeDropdown
          country={
            countriesArray.find((c) => c.dialCode === value.phone_code) ||
            countriesArray.find((c) => c.dialCode === "966")!
          }
          setCountry={(val) =>
            onValueChange({
              phone_number: value.phone_number,
              phone_code: val.dialCode,
            })
          }
        />
      </div>
    </div>
  );
}
