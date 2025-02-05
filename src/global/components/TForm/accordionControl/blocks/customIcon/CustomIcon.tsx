import { cn } from "@/global/shadcn/lib/utils";

type Props = {
  expandedItems: string[];
  value: string;
};
export default function CustomIcon({ expandedItems, value }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-8 h-8 bg-primary-600 rounded-full shrink-0 transition-transform duration-200",
        expandedItems?.includes(value) ? "rotate-180" : ""
      )}
    >
      <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[7px] border-t-white"></div>
    </div>
  );
}
