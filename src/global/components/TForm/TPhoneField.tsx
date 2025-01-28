import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/global/shadcn/ui/form";
import { cn } from "@/global/shadcn/lib/utils";
import { get } from "lodash";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import ar from "react-phone-input-2/lang/ar.json";
import TFieldDisplay from "./TFieldDisplay";

type TPhoneField = {
  form?: any;
  name: string;
  label?: string;
  labelInput?: string;
  placeholder?: string;
  description?: string;
  fromItemClassName?: string;
  defaultValue?: string;
  forwardedRef?: any;
  isHorizontal?: boolean;
  readOnlyClassName?: string;
  readOnly?: boolean;
  isRequiredStyle?: boolean;
  // [key: string]: any;
};

function TPhoneField({
  form,
  name,
  label,
  labelInput,
  placeholder = "",
  description = "",
  forwardedRef,
  fromItemClassName = "",
  isHorizontal = false,
  readOnlyClassName,
  readOnly = false,
  isRequiredStyle,
  // ...props
}: TPhoneField) {
  return (
    <>
      {readOnly && (
        <TFieldDisplay
          label={label}
          value={get(form?.getValues(), name)}
          valueClassName={readOnlyClassName}
          isHorizontal={isHorizontal}
          isRequiredStyle={isRequiredStyle}
        />
      )}
      {!readOnly && (
        <FormField
          control={form?.control}
          name={name}
          render={({ field }) => {
            const { onChange, ...fieldProps } = field;
            return (
              <FormItem
                className={cn(
                  "w-full flex flex-col items-start gap-2",
                  isHorizontal && "flex-row justify-between",
                  fromItemClassName
                )}
              >
                {label && (
                  <FormLabel
                    className={cn(
                      "text-gray-600",
                      isHorizontal && "text-nowrap w-fit truncate py-1"
                    )}
                  >
                    {label}{" "}
                    {isRequiredStyle && (
                      <span className="text-delete">{"*"}</span>
                    )}
                  </FormLabel>
                )}
                <FormControl
                  className={cn(
                    "!mt-0 !pt-0",
                    !!get(form.formState?.errors, name)
                      ? "border-delete"
                      : "border-gray-300"
                  )}
                >
                  <div
                    dir="ltr"
                    className={cn("relative w-full")}
                    ref={forwardedRef}
                  >
                    <PhoneInput
                      localization={ar}
                      aria-label={labelInput || placeholder}
                      placeholder={placeholder}
                      // country={translateCountryName(getCountry(), "ar")}
                      excludeCountries={["il"]}
                      onChange={(value) => onChange(value)}
                      // inputProps={props}
                      containerClass="w-fullblock !h-10 !rounded-md font-Alexandria w-full"
                      inputClass="w-full !h-10 !rounded-md flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-gray-300"
                      buttonClass="!h-10 !w-10 !rounded-md !border-e-0"
                      dropdownClass="w-full !rounded-md"
                      searchClass="!h-10 !rounded-md flex items-center"
                      autoFormat={false}
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                      {...fieldProps}
                    />
                  </div>
                </FormControl>
                <FormMessage />
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
              </FormItem>
            );
          }}
        />
      )}
    </>
  );
}

export default TPhoneField;
