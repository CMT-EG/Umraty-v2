import { ReactNode, useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/global/shadcn/ui/form";
import { Input } from "@/global/shadcn/ui/input";
import { Textarea } from "@/global/shadcn/ui/textarea";
import { cn } from "@/global/shadcn/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { get } from "lodash";

type TFormField = {
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
  forwardedRef?: any;
  [key: string]: any;
  componentEndField?: ReactNode;
  isHorizontal?: boolean;
  readOnlyClassName?: string;
  isRequiredStyle?: boolean;
};

function TFormField({
  typeField = "input",
  form,
  name,
  label,
  labelInput,
  placeholder = "",
  description = "",
  forwardedRef,
  fromItemClassName = "",
  linkBelowField,
  componentEndField,
  isHorizontal = false,
  readOnlyClassName,
  isRequiredStyle,
  ...props
}: TFormField) {
  const { className, ...propsField } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [paddingEnd, setPaddingEnd] = useState<number>(10);
  const endFieldRef = useRef<HTMLDivElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (endFieldRef.current) {
      const endFieldWidth = endFieldRef.current.offsetWidth;
      console.log("endFieldWidth", endFieldWidth);
      setPaddingEnd(endFieldWidth + 4);
    }
  }, [componentEndField]);

  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => {
        const { onChange, ...fieldProps } = field;
        return (
          <FormItem
            className={cn(
              "w-full flex flex-col gap-2",
              isHorizontal && "flex-row items-center justify-between",
              fromItemClassName
            )}
          >
            {label && (
              <FormLabel
                className={cn(
                  "text-[#131416] text-base font-extrabold",
                  isHorizontal && "text-nowrap w-[150px] truncate py-1"
                )}
              >
                {label}{" "}
                {isRequiredStyle && <span className="text-delete">{"*"}</span>}
              </FormLabel>
            )}
            <FormControl className="!mt-0 !pt-0">
              {typeField === "textarea" ? (
                <>
                  <Textarea
                    className={cn(
                      "bg-secondry-50 placeholder-secondry-800 focus-visible:ring-0 min-h-[150px] !mt-0",
                      props.readOnly && readOnlyClassName,
                      isHorizontal && "w-full",
                      !!get(form.formState?.errors, name)
                        ? "border-delete"
                        : "border-gray-300",
                      className
                    )}
                    aria-label={labelInput || placeholder}
                    placeholder={placeholder}
                    onChange={(e) =>
                      propsField.inputMode === "decimal" ||
                      propsField.inputMode === "numeric" ||
                      propsField.type === "number"
                        ? onChange(
                            e.target.value
                              ? parseFloat(e.target.value)
                              : undefined
                          )
                        : onChange(e.target.value)
                    }
                    {...propsField}
                    {...fieldProps}
                    ref={forwardedRef}
                  />
                  {linkBelowField}
                </>
              ) : (
                <div className={cn("relative", isHorizontal && "w-full")}>
                  <Input
                    className={cn(
                      isHorizontal && "w-full",
                      props.readOnly && readOnlyClassName,
                      !!get(form.formState?.errors, name)
                        ? "border-delete"
                        : "border-gray-300",
                      className
                    )}
                    style={{ paddingInlineEnd: paddingEnd }}
                    aria-label={labelInput || placeholder}
                    placeholder={placeholder}
                    onChange={(e) =>
                      propsField.inputMode === "decimal" ||
                      propsField.inputMode === "numeric" ||
                      propsField.type === "number"
                        ? onChange(
                            e.target.value
                              ? parseFloat(e.target.value)
                              : undefined
                          )
                        : onChange(e.target.value)
                    }
                    {...propsField}
                    {...fieldProps}
                    ref={forwardedRef}
                    type={
                      props.type === "password" && showPassword
                        ? "text"
                        : props.type
                    }
                  />
                  {(props.type === "password" || componentEndField) && (
                    <div
                      ref={endFieldRef}
                      className="absolute w-fit inset-y-0 end-0 pe-3 flex items-center text-gray-400 focus:outline-none"
                    >
                      {componentEndField && componentEndField}
                      {props.type === "password" && (
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="leading-none h-fit"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                  {linkBelowField}
                </div>
              )}
            </FormControl>
            <FormMessage />
            {description && <FormDescription>{description}</FormDescription>}
          </FormItem>
        );
      }}
    />
  );
}

export default TFormField;
