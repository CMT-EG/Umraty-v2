import Image from "next/image";
import roomImg from "@/../public/rooms_background.avif";
import {
  Bath,
  BedDouble,
  Expand,
  Minus,
  Plus,
  UserRound,
  UsersRound,
  Utensils,
  Wifi,
} from "lucide-react";
import { Button } from "@/global/shadcn/ui/button";
type Props = {
  item: any;
};
export default function RoomItem({ item }: Props) {
  return (
    <div className="flex flex-col sm:flex-row items-center w-full sm:max-w-[526px] 2xl:max-w-[627px] sm:h-[289px] relative bg-white rounded-lg shadow-[-4px_2px_20px_2px_rgba(94,94,94,0.06)]  overflow-hidden  mx-auto sm:mx-0">
      <div className="w-full sm:w-[226px] lg:w-[326px] 2xl:w-[526px] h-[289px] bg-[#fbfcfc] justify-center items-center gap-2.5 inline-flex">
        <Image
          width={226}
          height={289}
          className="w-full h-[289px] rounded-s-lg"
          src={item?.image || roomImg}
          alt="room"
          unoptimized
        />
      </div>
      <div className="flex-col justify-start  gap-5 inline-flex w-full p-4 pe-6">
        <div className="self-stretch justify-between items-center gap-4 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <UsersRound className="w-6 h-6" fill="#8B6343" stroke="#8B6343" />
            <div className="text-[#131416] text-2xl font-bold">غرفه عاديه</div>
          </div>
          <div className="border border-l-[#ebe4d6] w-[2px] h-[27px]"></div>
          <div className="flex-col justify-start items-center gap-11 inline-flex">
            <div className="self-stretch text-center">
              <span className="text-[#050505] text-xl font-bold">80 ريال</span>
              <span className="text-[#131416] text-xl font-bold"> </span>
              <span className="text-[#878787] text-[15px] font-normal">
                / للفرد{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[142px] flex-col justify-center gap-[11px] flex">
          <div className="self-stretch h-[52px] px-6 bg-white rounded-lg justify-between items-center inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <Expand className="w-3 h-3" />
              <div className="text-[#050505] text-sm font-normal">140 متر</div>
            </div>
            <div className="border border-l-[#ebe4d6] w-[2px] h-[12px]"></div>
            <div className="justify-start items-center gap-1 flex">
              <BedDouble className="w-3 h-3" />
              <div className="text-[#050505] text-sm font-normal">2 سرير</div>
            </div>
            <div className="border border-l-[#ebe4d6] w-[2px] h-[12px]"></div>
            <div className="justify-start items-center  gap-1 flex">
              <Bath className="w-3 h-3 transform scale-x-[-1]" />
              <div className="text-[#050505] text-sm font-normal">2 حمام</div>
            </div>
          </div>
          <div className="self-stretch h-[52px] px-3 bg-white rounded-lg justify-center items-center gap-4 inline-flex">
            <div className="justify-start items-center gap-1.5 flex">
              <Utensils className="w-3.5 h-3.5" />
              <div className="text-[#050505] text-sm font-normal">
                تشمل الافطار و الغداء
              </div>
            </div>
            <div className="border border-l-[#ebe4d6] w-[2px] h-[12px]"></div>
            <div className="justify-start items-center gap-[5px] flex">
              <Wifi className="w-3 h-3" />
              <div className="text-[#050505] text-sm font-normal">
                واى فاى مجانى
              </div>
            </div>
          </div>
          <div className="px-4 bg-white rounded-lg items-center inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <BedDouble className="w-3 h-3" />
              <div className="text-[#050505] text-sm font-normal">المتاح :</div>
              <div className="text-[#050505] text-sm font-normal">2 سرير</div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-3 inline-flex">
          <div className="h-6 justify-start items-center gap-2 flex">
            <UserRound className="w-6 h-6" fill="#8B6343" stroke="#8B6343" />
            <div className="text-[#050505] text-sm font-bold">
              عدد المسافرين{" "}
            </div>
          </div>
          <div className="border border-[#fbfcfc] justify-start items-center gap-4 flex">
            <Button className="w-[31px] h-8 pl-[8.53px] pr-[8.52px] py-[8.80px] bg-[#8b6343] rounded flex-col justify-center items-center inline-flex overflow-hidden">
              <Minus />
            </Button>
            <div className="text-[#131416] text-base font-normal font-['Alexandria']">
              1
            </div>
            <Button className="w-[31px] h-8 pl-[8.53px] pr-[8.52px] py-[8.80px] bg-[#8b6343] rounded flex-col justify-center items-center inline-flex overflow-hidden">
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
