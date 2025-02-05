import ReactSelect from "react-select";
import { FormDescription } from "@/global/shadcn/ui/form";
import { Input } from "@/global/shadcn/ui/input";
import { cn } from "@/global/shadcn/lib/utils";
import { get, isPlainObject } from "lodash";
import { useEffect, useState } from "react";
import { Controller, useWatch } from "react-hook-form";
import TFieldDisplay from "../TFieldDisplay";
import { CustomOption } from "./blocks/CustomOption";
import { customStyles } from "./styles/customStyleReactSelect";

type Option = {
  value: any;
  label: any;
};

type TReactSelectField = {
  form: any;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  options?: Option[] | undefined | any;
  disabled?: boolean;
  HandleChange?: (params: string) => void;
  labelClassName?: string;
  defaultValue?: string;
  beforeChange?: ({
    selectedOption,
    field,
  }: {
    selectedOption?: Option;
    field?: any;
  }) => boolean | Promise<boolean>;
  afterChange?: ({
    selectedOption,
    field,
  }: {
    selectedOption?: Option;
    field?: any;
  }) => void;
  noOptionsMessage?: string;
  showChecked?: boolean;
  isMulti?: boolean;
  wrapperClassName?: string;
  menuPortalTarget?: HTMLElement;
  enableLabelEmpty?: boolean;
  readOnly?: boolean;
  items?: any;
  isView?: boolean;
  optionFields?: any;
  isFemale?: boolean;
  filterOption?: (option: any, inputValue: string) => any;
  addNoThingOptions?: boolean;
  multiViewPrefex?: "-" | "." | "";
  readOnlyClassName?: string;
  isHorizontal?: boolean;
  isRequiredStyle?: boolean;
  placeholderStyle?: React.CSSProperties | any;
  triggerBackground?: string;
  [key: string]: any;
};

function TReactSelect({
  form,
  name,
  label,
  placeholder = "",
  description = "",
  options: passedOptions,
  labelClassName,
  defaultValue: _defaultValue,
  beforeChange,
  afterChange,
  noOptionsMessage,
  showChecked = true,
  isMulti = false,
  wrapperClassName,
  enableLabelEmpty = false,
  menuPortalTarget,
  readOnly = false,
  items,
  optionFields,
  filterOption,
  addNoThingOptions,
  multiViewPrefex = ".",
  readOnlyClassName = "",
  isHorizontal = false,
  isRequiredStyle = false,
  placeholderStyle,
  triggerBackground,
  ...props
}: TReactSelectField) {
  const [item, setItem] = useState<any>();
  const [isClient, setIsClient] = useState(false); // Track whether the component is mounted on the client side

  const optionValue = useWatch({
    control: form.control,
    name,
  });

  function createOptionsArray(
    data: any[],

    valueField: any,
    ...labelFields: any[]
  ) {
    return data.map((item) => ({
      value: item[valueField] as string | number,
      label: labelFields.map((field) => item[field]).join(" "),
    }));
  }

  const options = passedOptions
    ? passedOptions
    : items
    ? [
        ...createOptionsArray(
          items,
          optionFields?.value || "id",
          Array.isArray(optionFields?.label)
            ? optionFields?.label[0]
            : optionFields?.label
            ? optionFields?.label
            : "name" //note: fields may be different in your API
        ),
      ]
    : [];

  addNoThingOptions && options.push({ label: "لا يوجد", value: undefined });

  useEffect(() => {
    // Only run after component mounts on the client
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (optionValue && items && items?.length > 0) {
      const item = items?.find(
        (item: any) => item?.[optionFields?.value || "id"] === optionValue
      );
      !Array.isArray(item) ? setItem(item) : setItem(item[0]);
    }
  }, [optionValue]);

  const isError = !!get(form.formState?.errors, name);

  return (
    <div className={`flex flex-col gap-2 w-full ${wrapperClassName}`}>
      {label && (
        <div
          className={cn(
            "flex justify-between items-center",
            isHorizontal && "flex justify-between items-center"
          )}
        >
          {label && (
            <label
              htmlFor={name}
              className={cn(
                `text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-[#5d5d5d]/90 font-normal`,
                labelClassName
              )}
            >
              {label}{" "}
              {isRequiredStyle && <span className="text-delete">{"*"}</span>}
            </label>
          )}
        </div>
      )}
      {enableLabelEmpty && <div className="h-[14px]"></div>}
      {options && (
        <Controller
          control={form.control}
          name={name}
          render={({ field }) => (
            <>
              {readOnly &&
                !isMulti &&
                (isPlainObject(
                  options?.find((c: any) => c?.value === field?.value)?.label
                ) ? (
                  <TFieldDisplay
                    value={
                      Array.isArray(options) &&
                      options?.find((c) => c?.value === field?.value)?.label
                    }
                    valueClassName={cn(
                      "pointer-events-none",
                      readOnlyClassName
                    )}
                  />
                ) : (
                  <Input
                    id={name}
                    {...props}
                    value={
                      Array.isArray(options) &&
                      options?.find((c) => c?.value === field?.value)?.label
                    }
                    readOnly
                  />
                ))}
              {readOnly && isMulti && (
                <div
                  className={cn(
                    `flex flex-col gap-1 min-h-10 max-h-[25.8rem] overflow-y-auto w-full rounded-md border border-solid border-secondry-300 bg-background px-3 py-2 text-sm ring-offset-background`,
                    label ? "mt-2" : "",
                    readOnlyClassName
                  )}
                >
                  {options
                    ?.filter((c: any) => field?.value?.includes(c?.value))
                    .map((el: any, index: number) => (
                      <p key={index} className="flex items-center gap-2">
                        {multiViewPrefex === "." && (
                          <span className="text-gray-500 w-[3px] h-[3px] bg-gray-500 rounded-full"></span>
                        )}
                        {multiViewPrefex === "-" && (
                          <span className="text-gray-500">-</span>
                        )}
                        <span>{el?.label}</span>
                      </p>
                    ))}
                </div>
              )}
              {!readOnly && isClient && ( // Only render ReactSelect on client side
                <ReactSelect
                  id={name}
                  isMulti={isMulti as false}
                  classNamePrefix="react-select"
                  ref={field.ref}
                  options={options}
                  value={
                    (Array.isArray(options) &&
                      (!isMulti
                        ? options?.find((c) => c?.value === field?.value)
                        : options?.filter((c) =>
                            field?.value?.includes(c?.value)
                          ))) ||
                    ""
                  }
                  onChange={(selectedOption) => {
                    if (
                      !beforeChange ||
                      (!!beforeChange &&
                        beforeChange({ selectedOption, field }))
                    ) {
                      selectedOption &&
                        !isMulti &&
                        field.onChange(selectedOption.value);
                      selectedOption &&
                        isMulti &&
                        field.onChange(
                          selectedOption?.map((option: any) => option.value)
                        );
                      afterChange && afterChange({ selectedOption, field });
                    }
                  }}
                  components={{
                    Option: (props) => (
                      <CustomOption {...props} showChecked={showChecked} />
                    ),
                  }}
                  styles={customStyles(
                    readOnly,
                    showChecked,
                    isError,
                    placeholderStyle,
                    triggerBackground
                  )}
                  openMenuOnClick={!readOnly}
                  isSearchable={!readOnly}
                  noOptionsMessage={() => noOptionsMessage || "لا يوجد نتائج"}
                  placeholder={placeholder}
                  inputId={name}
                  menuPortalTarget={menuPortalTarget || undefined}
                  filterOption={filterOption}
                  isDisabled={props?.disabled}
                  {...props}
                />
              )}
            </>
          )}
        />
      )}
      {isError && (
        <span className="text-xs font-medium text-destructive">
          {!!get(form.formState?.errors, name)?.message as any}
        </span>
      )}
      {description && (
        <FormDescription>{description}</FormDescription>
      )}
    </div>
  );
}

export default TReactSelect;
