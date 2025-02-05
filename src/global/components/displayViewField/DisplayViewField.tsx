import { cn } from "@/global/shadcn/lib/utils";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  value?: string | number | null | React.ReactNode;
  label?: string;
  type?: "text" | "image";
  href?: string;
  containerClassName?: string;
  containerValueClassName?: string;
  valueClassName?: string;
  labelClassName?: string;
  isHorizontal?: boolean;
  componentEndField?: React.ReactNode;
  items?: string[] | React.ReactNode[];
  [key: string]: any;
};
export default function DisplayViewField({
  value,
  label,
  type = "text",
  href,
  containerClassName,
  containerValueClassName,
  valueClassName,
  labelClassName,
  isHorizontal,
  componentEndField,
  items,
  ...props
}: Props) {
  return (
    <>
      {(value || label) && (
        <div
          className={cn(
            "w-full flex gap-2",
            isHorizontal
              ? "flex-row items-center justify-between flex-wrap"
              : "flex-col",
            items && "items-start",
            containerClassName
          )}
          {...props}
        >
          {label && (
            <p
              title={label}
              className={cn(
                "text-gray-600",
                isHorizontal && "text-nowrap min-w-[150px] py-1",
                labelClassName
              )}
            >
              {label}
            </p>
          )}
          <div
            className={cn("flex flex-wrap pt-1 grow", containerValueClassName)}
          >
            {value && type === "text" && !href && (
              <div className={cn("text-sm font-semibold grow", valueClassName)}>
                {value}
              </div>
            )}
            {items && type === "text" && !href && (
              <ul className="flex flex-col gap-2">
                {items?.map((item: any, index: number) => (
                  <li
                    key={index}
                    className={cn("text-sm font-semibold grow", valueClassName)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {value && type === "text" && href && (
              <div className="grow">
                <Link
                  href={href}
                  className={cn(
                    "text-sm font-semibold w-fit text-primary-600 border-b border-b-primary-600 hover:text-primary-400 hover:border-b-primary-400",
                    valueClassName
                  )}
                >
                  {value}
                </Link>
              </div>
            )}
            {value && type === "image" && (
              <Image
                width={300}
                height={250}
                src={value as string}
                alt="preview"
                className={cn("block w-full h-full rounded-md", valueClassName)}
              />
            )}
            {!value && type === "image" && (
              <div
                className={cn(
                  "flex justify-center items-center w-[300px] h-[250px] border-2 rounded-lg border-dashed border-gray-400 text-center",
                  valueClassName
                )}
              >
                <ImageUp size={40} className="text-primary-600" />
              </div>
            )}
            {componentEndField}
          </div>
        </div>
      )}
    </>
  );
}
