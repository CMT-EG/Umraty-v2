import { Button } from "@/global/shadcn/ui/button";
import HotelItem from "./blocks/hotelItem/HotelItem";
import { ChevronLeft } from "lucide-react";

type Props = {
  data: any[];
};
export default function Hotels({ data }: Props) {
  return (
    <section className="flex flex-col gap-10 container max-h-[2429px] overflow-auto">
      {data?.map((item, i) => (
        <HotelItem key={i} item={item} />
      ))}
      <Button
        type="button"
        className="w-full px-24 py-3.5 bg-[#8b6343] rounded-full justify-center items-center gap-3 inline-flex text-[#fbfcfc] text-base font-extrabold"
      >
        <span>احجز الأن</span>
        <ChevronLeft className="w-4 h-4" />
      </Button>
    </section>
  );
}
