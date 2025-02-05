"use client";
import { ReactNode, useRef, useState } from "react";
import TFormField from "../TForm/TFormField";
import SuggestionsDropdown from "./SuggestionsDropdown";

type TFormFieldType = {
  form?: any;
  typeField?: string | "textarea" | "input";
  name: string;
  label?: string;
  labelInput?: string;
  placeholder?: string;
  description?: string;
  fromItemClassName?: string;
  defaultValue?: string;
  linkBelowField?: ReactNode;
  componentEndField?: ReactNode;
  isHorizontal?: boolean;
  readOnlyClassName?: string;
  isRequiredStyle?: boolean;
  labelClassName?: string;
  [key: string]: any;
};

type Props = {
  index?: number;
  handleSelectItem: (item: any, index?: number) => void;
  data?: any[];
} & TFormFieldType;

export default function TFormFieldWithMenu({
  index,
  handleSelectItem,
  data,
  typeField = "input",
  form,
  name,
  label,
  labelInput,
  placeholder = "",
  description = "",
  fromItemClassName = "",
  linkBelowField,
  componentEndField,
  isHorizontal = false,
  readOnlyClassName,
  isRequiredStyle,
  labelClassName,
  ...props
}: Props) {
  const [activeDropdownName, setActiveDropdownName] = useState<string | null>(
    null
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex flex-col gap-4 relative">
      <TFormField
        typeField={typeField}
        form={form}
        name={name}
        label={label}
        labelInput={labelInput}
        placeholder={placeholder}
        description={description}
        forwardedRef={inputRef}
        fromItemClassName={fromItemClassName}
        linkBelowField={linkBelowField}
        componentEndField={componentEndField}
        isHorizontal={isHorizontal}
        readOnlyClassName={readOnlyClassName}
        isRequiredStyle={isRequiredStyle}
        labelClassName={labelClassName}
        onClick={() => {
          props?.onClick?.();
          setActiveDropdownName(inputRef.current?.name || null);
        }}
        autoComplete={"off"}
        {...props}
      />
      {activeDropdownName === inputRef.current?.name && (
        <SuggestionsDropdown
          inputRef={inputRef}
          inputValue={form?.watch(name)}
          data={data}
          onSelectItem={(item: any) => {
            handleSelectItem(item, index);
          }}
          nameKey="name"
          setActiveDropdownName={setActiveDropdownName}
          activeIndex={index}
        />
      )}
    </div>
  );
}
