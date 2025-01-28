import { cn } from "@/global/shadcn/lib/utils";

type TFieldDisplay = {
  label?: string;
  value?: string | number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
  isHorizontal?: boolean;
  isRequiredStyle?: boolean;
  [key: string]: any;
};

function TFieldDisplay({
  label,
  value,
  valueClassName = "",
  labelClassName = "",
  className = "",
  isHorizontal = false,
  isRequiredStyle = false,
  ...props
}: TFieldDisplay) {
  return (
    <>
      {value && (
        <div
          className={cn(
            `flex flex-col text-base font-semibold text-start w-full text-neutral-600`,
            className
          )}
        >
          {label && (
            <h3
              className={cn(
                `block text-sm font-medium leading-none text-gray-600`,
                isHorizontal && "text-nowrap w-[150px] truncate py-1",

                labelClassName
              )}
            >
              {label}{" "}
              {isRequiredStyle && <span className="text-delete">{"*"}</span>}
            </h3>
          )}
          <p
            className={cn(
              `flex gap min-h-10 max-h-[8.4rem] overflow-y-auto mt-2 w-full rounded-md border border-dashed border-secondry-300 bg-background px-3 py-2 text-sm ring-offset-background`,
              valueClassName
            )}
            {...props}
          >
            {value}
          </p>
        </div>
      )}
    </>
  );
}

export default TFieldDisplay;
