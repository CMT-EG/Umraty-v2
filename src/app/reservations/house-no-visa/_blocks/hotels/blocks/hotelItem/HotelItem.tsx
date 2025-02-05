"use client";
import GridCards from "@/global/components/girdCards/GridCards";
import { Button } from "@/global/shadcn/ui/button";
import { Rating } from "@smastrom/react-rating";
import { MapPin } from "lucide-react";
import RoomItem from "./blocks/roomItem/RoomItem";
import useMediaQuery from "@/global/hooks/mediaQuery/useMediaQuery";

type Props = {
  item: any;
};

export default function HotelItem({ item }: Props) {
  const isXXLarg = useMediaQuery("min(width: 1536px)");

  return (
    <div className="flex flex-col border-b border-dashed pb-12">
      <div className="flex gap-4 items-center justify-between flex-wrap">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h3 className="text-[#131416] text-[28px] sm:text-[32px] font-extrabold">
              {item?.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-[#112211] text-xs text-nowrap">
                {`فندق ${item?.star_Number} نجوم`}
              </span>
              <Rating
                style={{ maxWidth: 180 }}
                value={item?.star_Number}
                readOnly
                transition="zoom"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <MapPin className="text-primary-600" />
            <p className="text-[#5d5d5d] text-xs font-normal max-w-[400px] truncate">
              {item?.location}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-8 px-4 py-2 rounded border border-[#888888] justify-center items-center gap-1 flex">
              <p className="text-[#222223] text-xs font-medium">{item?.rate}</p>
            </div>
            <p className={"text-[#050505] text-xs font-normal"}>
              جيد جداً 371 تقييماً
            </p>
          </div>
        </div>
        <Button className="h-12 px-4 py-2 bg-[#8b6343] rounded-xl justify-center items-center gap-1 text-white text-sm font-bold  inline-flex shrink-0">
          احجز الان
        </Button>
      </div>
      <div className="flex flex-col gap-[28px]">
        <h3 className="text-center sm:text-start text-black text-2xl font-medium font-['Alexandria'] capitalize leading-relaxed">
          الغرف المتاحه
        </h3>
        <GridCards
          data={item?.rooms}
          itemWidth={isXXLarg ? "627px" : "526px"}
          interComponent={({ item }) => <RoomItem item={item} />}
        />
      </div>
    </div>
  );
}
