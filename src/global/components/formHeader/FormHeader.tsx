import { cn } from "@/global/shadcn/lib/utils";

type Props = { title?: string; [key: string]: any };

function FormHeader({ title, ...props }: Props) {
  const { title: _title, className, ...rest } = props;
  return (
    <>
      {title && (
        <div className="flex justify-between items-center">
          <h2
            className={cn(
              "text-2xl text-start w-fit max-w-full text-secondry truncate ps-2 text-[#131416] font-extrabold",
              className
            )}
            {...rest}
          >
            {title}
          </h2>
        </div>
      )}
    </>
  );
}

export default FormHeader;
