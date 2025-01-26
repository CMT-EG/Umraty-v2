"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { cn } from "@/global/shadcn/lib/utils";
import { reviews } from "@/global/fakedata/reviews";
import { Avatar, AvatarFallback, AvatarImage } from "@/global/shadcn/ui/avatar";
import PlyrVideo from "@/global/components/video/PlyrVideo";
import logoImg from "@/global/assets/logo/logo-dark.svg";
import Image from "next/image";
import { Separator } from "@/global/shadcn/ui/separator";
import QuoteSvg from "./blocks/assets/svg/QuoteSvg";
import Link from "next/link";
import ReactStars from "react-stars";

export default function TestimonialsItems() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="justify-between items-center gap-10 md:gap-28 grid grid-cols-4 mb-5 w-full">
        <div className="block col-span-4 lg:col-span-2 cols-s shrink-1">
          <div className="mt-10 mb-5 w-full">
            <Image
              className="block w-[122.97px] h-full"
              src={logoImg}
              alt="logo"
            />
          </div>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#8B6343",
                "--swiper-pagination-color": "#8B6343",
              } as any
            }
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <p className="text-right font-['Almarai'] font-normal text-[#22262e] text-2xl leading-loose">
                  {`"${review?.review}"`}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <QuoteSvg />
                    <p className="font-bold text-[#22262e] text-sm">
                      {review?.name}
                    </p>
                  </div>
                  <Separator className="w-[2px] h-1" />
                  <div className="flex items-center gap-3">
                    <ReactStars
                      count={5}
                      value={review?.rate}
                      edit={false}
                      // onChange={ratingChanged}
                      size={28}
                      color2={"#ffd700"}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Link
            href="#"
            className="inline-flex justify-center items-center gap-3 border-[#e5e8eb] border-2 mt-5 px-6 py-4 rounded-[90px]"
          >
            المزيد من التقييمات
          </Link>
        </div>

        <PlyrVideo
          url={"hb2KwtxJpj8" as string}
          provider={"youtube" as any}
          poster={"./images/intro-video-poster.png"}
          className="block col-span-4 md:col-span-2 rounded-xl overflow-hidden aspect-3/4 shrink-0"
        />
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 4,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className={cn(
                "transition-colors duration-300 cursor-pointer",
                activeIndex === index ? "border-b-2 border-primary-600" : ""
              )}
            >
              <div className="flex items-center gap-4 pb-6">
                <Avatar className="w-12 h-12">
                  <AvatarImage
                    width={48}
                    height={48}
                    src={review?.image as any}
                    alt={review?.name}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {review?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-bold text-[#22262e] text-sm">
                  {review?.name}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
