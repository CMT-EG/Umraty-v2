"use client";
import useMediaQuery from "@/global/hooks/mediaQuery/useMediaQuery";
import { cn } from "@/global/shadcn/lib/utils";

type Props = {
  itemWidth?: string;
  data?: any[];
  interComponent?: (props: { item: any }) => React.ReactNode;
};
export default function GridCards({
  itemWidth = "526px",
  data,
  interComponent,
}: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={cn(
        "justify-between gap-5 w-full max-h-[1029px] overflow-auto"
      )}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${
          isMobile ? "100%" : itemWidth
        }, 1fr))`,
      }}
    >
      {data?.map((item, index) => (
        <div key={index} className="w-full">
          {interComponent && interComponent({ item })}
        </div>
      ))}
    </div>
  );
}
