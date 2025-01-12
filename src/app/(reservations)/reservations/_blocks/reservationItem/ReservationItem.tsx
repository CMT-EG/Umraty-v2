"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useReservationItem from "./hooks/useReservationItem";
import { cn } from "@/main/common/shadcn/lib/utils";
import { MapIcon } from "@/main/global/assets/svg/MapIcon";
import { HotelTimeIcon } from "@/main/global/assets/svg/HotelTimeIcon";
import { PersonIcon } from "@/main/global/assets/svg/PersonIcon";

function ReservationItem({ className, bookingData, ...props }: any) {
  const {endDate, startDate, onPayBooking, handleDelete} = useReservationItem({ bookingData });

  return (
    <div
      className={cn(
        "relative p-5 rounded-xl bg-white shadow-[0px_4px_42px_0px] shadow-black/10 flex flex-col items-stretch",
        className
      )}
      {...props}
    >
      <div className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 size-12 rounded-full bg-white shadow-[0px_4px_42px_0px] shadow-black/10 flex items-center justify-center'>
        <div className='size-6 rounded-full border-[2.5px] border-[#00a36c] flex items-center justify-center'>
          <Check className='size-3 text-[#00a36c]' strokeWidth={5} />
        </div>
      </div>
      <div className='flex gap-2 mb-3 justify-between'>
        <div className='flex gap-[10px]'>
          <Image
            src={"/service-1.jpg"}
            width={80}
            height={80}
            alt='room'
            className='size-[60px] sm:size-[80px] object-cover rounded-xl'
          />
          <div className='flex flex-col'>
            <p className='sm:text-xl font-bold'>جدة</p>
            <div className='flex items-center'>
              <MapIcon className='size-5' />
              <p className='text-neural-600 text-[0.75rem]'>
                {/* {hotelData?.data.location} */}
                جدة الاتقان سكوير
              </p>
            </div>
          </div>
        </div>

        <div>
          <span
            className='py-2 px-5 bg-primary-600 text-white text-lg font-bold rounded-lg flex items-center cursor-pointer'
            onClick={handleDelete}
          >
            الغاء الحجز
          </span>
          {bookingData?.payment_done ? (
            <Link
              href={"https://maps.app.goo.gl/c2KHbZpKKF6VN32q9"}
              target='_blank'
              className='py-2 px-5 bg-white text-primary-600 border-primary-600 border-solid border-[1px] text-lg font-bold rounded-lg flex items-center justify-center mt-2.5'
            >
              موقعنا
            </Link>
          ) : (
            <span
              onClick={() => onPayBooking()}
              className='py-2 cursor-pointer px-5 bg-white text-primary-600 border-primary-600 border-solid border-[1px] text-lg font-bold rounded-lg flex items-center justify-center mt-2.5'
            >
              أدفع الأن !
            </span>
          )}
        </div>
      </div>
      <div className='w-full border border-dashed mt-2 mb-4'></div>
      <div className='flex md:flex-row flex-col items-center justify-between w-full'>
        <div className='flex-grow flex items-center justify-evenly text-[#222222] text-center'>
          <div className='flex flex-col items-center gap-2'>
            <p className='sm:text-xl text-[0.875rem] font-bold'>{startDate}</p>
            <p className='sm:text-base text-[0.75rem]'>الوصول</p>
          </div>
          <HotelTimeIcon className='px-4' />
          <div className='flex flex-col items-center gap-2'>
            <p className='sm:text-xl text-[0.875rem] font-bold'>{endDate}</p>
            <p className='sm:text-base text-[0.75rem]'>المغادرة</p>
          </div>
        </div>

        <div className='self-stretch border border-dashed md:mx-4 md:my-0 my-4'></div>
        <div className='flex md:flex-col gap-2'>
          <span className='py-2 px-5 bg-primary-600 text-white text-lg font-bold rounded-lg flex items-center'>
            {bookingData?.payment_amount} ريال
            <span className='font-normal text-base'>/ للفرد</span>
          </span>
          <div className='flex md:flex-row flex-col md:items-center items-start gap-2 justify-center'>
            <div className='flex items-center text-sm'>
              <PersonIcon className='size-4 me-1' />
              <span> {bookingData?.passengers_count} مسافر</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;