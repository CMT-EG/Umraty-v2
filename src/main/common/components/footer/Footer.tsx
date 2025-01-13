import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import Logo from "@/main/global/assets/logo/Aletqan-Logo.png";
import { QuotesIcon } from "@/main/global/assets/svg/QuotesIcon";
import { SMSTrackingIcon } from "@/main/global/assets/svg/SMSTrackingIcon";
import mosqueImg from "@/main/global/assets/images/mosque.svg";
export default function Footer() {
  return (
    <footer className='relative overflow-hidden sm:px-20 px-5 bg-[#262626] text-white flex flex-col items-stretch  top-[282px] sm:top-[125px] '>
      <div className='relative z-10 py-10 w-full max-w-[1132px] flex sm:items-center items-start justify-between gap-5 min-[1050px]:flex-row flex-col'>
        <div className='flex flex-col items-start'>
          <Image
            src={Logo}
            alt='logo'
            width={138}
            height={64}
            className='mb-7'
          />
          <p className='relative max-w-[417px] text-sm leading-[1.625rem] ms-5 mb-6'>
            <QuotesIcon className='absolute translate-x-[120%] -translate-y-[70%]' />
            نحن منصة عمرتي التابعة لشركة الإتقان الأساسية للتطوير ، ومقرها
            الرئيس في مدينة جدة ، في برج الإتقان سكوير ، وهي شركة سعودية متخصصة
            في تنظيم الرحلات السياحية والحاصلة على ترخيص وزارة السياحة وعلي
            ترخيص من وزارة الحج والعمرة، تتبع الشركة لمجموعة الإتقان التي تعمل
            في مجال خدمات الحج والعمرة منذ أكثر من أربعة وثلاثون عاماً.
            <QuotesIcon className='inline rotate-180 -translate-x-[30%] translate-y-[90%]' />
          </p>
          <div className='flex items-center justify-center gap-3 flex-wrap'>
            <Link
              href={"https://www.instagram.com/umraty_aletqan/profilecard/"}
              target='_blank'
              className='flex items-center gap-2 sm:px-5 px-4 sm:py-3 py-2.5 rounded-full border border-[#3B3B3B] select-none hover:bg-white hover:text-[#262626] transition-colors cursor-pointer'
            >
              <BsInstagram className='size-4' />
              <p className='font-[0.75rem] leading-[1.625rem]'>انستجرام</p>
            </Link>
            <Link
              href='https://wa.me/966534093333'
              target='_blank'
              className='flex items-center gap-2 sm:px-5 px-4 sm:py-3 py-2.5 rounded-full border border-[#3B3B3B] select-none hover:bg-white hover:text-[#262626] transition-colors cursor-pointer'
            >
              <BsWhatsapp className='size-4' />
              <p className='font-[0.75rem] leading-[1.625rem]'>واتساب</p>
            </Link>
          </div>
        </div>
        <div className='flex-grow max-w-[36.438rem] min-[1050px]:w-auto w-full flex justify-between sm:flex-row flex-col gap-5'>
          <div className='order-2'>
            <h3 className='relative text-lg font-bold sm:mb-7 mb-10 w-fit'>
              <span className='relative z-[1]'>تواصل معنا</span>
              <div className='absolute bottom-0 w-full h-2.5 bg-[#5E4627] -translate-x-2' />
            </h3>
            <div className='bg-[#404040] py-3 px-5 rounded-xl flex items-center mb-4 w-64'>
              <SMSTrackingIcon className='size-[2.125rem] me-5' />
              <div className='text-neural-50'>
                <p className='text-[0.625rem] leading-[18.6px]'>
                  او راسلنا عبر بريدنا الإلكترونى:
                </p>
                <p className='text-[0.75rem] leading-[22px] font-medium'>
                  a@umraty.com
                </p>
              </div>
            </div>
            <div className='bg-[#404040] py-3 px-5 rounded-xl flex items-center mb-4 w-64'>
              {/* <WhatsappColoredRoundedIcon className='size-[2.125rem] me-5' /> */}
              <div className='text-neural-50'>
                <p className='text-[0.625rem] leading-[18.6px]'>تواصل معنا:</p>
                <p className='text-[0.75rem] leading-[22px] font-medium'>
                  00966534093333
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative z-10 border-t border-white/35 py-6 flex items-center justify-between md:flex-row flex-col gap-5'>
        <p className='md:order-1 order-3 text-white/85 text-[0.75rem]'>
          جميع الحقوق محفوظة © 2024{" "}
        </p>
      </div>
      <Image
        src={mosqueImg}
        width={300}
        height={315}
        alt='mosque'
        className='absolute sm:bottom-0 sm:-left-20 sm:top-auto -left-32 top-[42rem] size-64'
      />
    </footer>
  );
}
