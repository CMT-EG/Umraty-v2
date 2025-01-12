"use client";

import { DatePicker } from "@/main/common/components/datePicker/DatePicker";
import { Button } from "@/main/common/shadcn/ui/button";
import { ArrowLeftRight} from "lucide-react";
import useHeroSection from "./hooks/useHeroSection";

function HeroSection() {
  const {
    onSearch,
    setFinishDate,
    finishDate,
    setStartDate,
    startDate
  } = useHeroSection();

  return (
    <section className='bg-rooms-background bg-center bg-cover mb-[9rem]'>
      <div className='relative text-white w-full px-5 sm:px-20 pt-40 md:pt-60 pb-24 md:pb-48 bg-black/70'>
        <div className='w-full flex flex-col items-center text-center'>
          <h1 className='w-full sm:text-[2.5rem] text-[1.563rem] leading-[154%] font-extrabold mb-3'>
            احجز رحلتك الان
          </h1>
        </div>
        <div className='absolute bottom-0 translate-y-2/3 md:inset-x-[5.5rem] inset-x-5 md:px-8 md:py-11 px-[0.875rem] py-[0.875rem] flex md:flex-row flex-col md:items-center items-stretch gap-4 bg-white rounded-[1.25rem] shadow-[0px_4px_42px_0px] shadow-black/10'>
          <div className='flex items-center gap-2 sm:gap-4 flex-grow'>
            <DatePicker
              className='flex-grow'
              placeholder='ادخل تاريخ البدأ'
              date={startDate}
              onChange={setStartDate}
            />
            <div className='border border-neural-400 rounded-full size-8 flex items-center justify-center'>
              <ArrowLeftRight className='text-[#1C1B1F] size-4' />
            </div>
            <DatePicker
              className='flex-grow'
              placeholder='ادخل تاريخ الإنتهاء'
              date={finishDate}
              onChange={setFinishDate}
            />
          </div>
          <Button
            size='lg'
            className='w-full lg:w-[182px] md:w-[120px] font-bold text-base'
            onClick={() => onSearch()}
          >
            ابحث
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
