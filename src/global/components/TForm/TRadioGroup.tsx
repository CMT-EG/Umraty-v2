"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/global/shadcn/ui/form";
import { RadioGroup, RadioGroupItem } from "@/global/shadcn/ui/radio-group";

type Option = {
  value: any;
  label: any;
};

type TRadioGroup = {
  form?: any;
  name: string;
  label?: string;
  fromItemClassName?: string;
  outerfromItemClassName?: string;
  defaultValue?: string;
  radioItems: Option[];
  radioGroupClassName?: string;
  isRequiredStyle?: boolean;
  [key: string]: any;
};

export default function TRadioGroup({
  form,
  name,
  label,
  fromItemClassName = "",
  outerfromItemClassName = "",
  radioItems,
  defaultValue,
  radioGroupClassName = "",
  isRequiredStyle = false,
  ...props
}: TRadioGroup) {
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${outerfromItemClassName}`}>
          {label && (
            <FormLabel className="mt-2 text-[#5d5d5d]/90">{label}{" "}
                {isRequiredStyle && <span className="text-delete">{"*"}</span>}</FormLabel>
          )}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value || defaultValue}
              className="flex gap-3"
              dir={"rtl"}
              {...props}
            >
              {radioItems.reverse()?.map((el: any, index: number) => {
                return (
                  <FormItem
                    key={`${el.value}-${index}`}
                    className={`flex items-center justify-center  gap-1 ${
                      el.value === field.value
                        ? "text-primary"
                        : "text-secondry-700"
                    } ${fromItemClassName}`}
                    defaultChecked={
                      el.value === field.value || el.value === defaultValue
                    }
                  >
                    <FormControl
                      className={`flex items-center justify-center mt-0`}
                    >
                      <RadioGroupItem
                        type="button"
                        value={el.value}
                        className={radioGroupClassName}
                      />
                    </FormControl>
                    <FormLabel className="cursor-pointer !mt-0 !mb-0">
                      {el.label}
                    </FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
