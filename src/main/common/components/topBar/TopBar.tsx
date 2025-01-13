import Link from "next/link";
import {
  BsFillEnvelopeFill,
  BsGeoAltFill,
  BsInstagram,
  BsPhoneFill,
  BsWhatsapp,
} from "react-icons/bs";

export default function TopBar() {
  return (
    <div className="py-[0.875rem] px-5 md:py-3 md:px-20 flex items-center justify-center md:justify-between flex-wrap md:gap-2 gap-3 bg-primary-600 text-white/85">
      <div className="flex items-center sm:justify-between justify-center flex-wrap flex-grow max-w-2xl gap-2 font-alexandria">
        <div className="flex items-center sm:gap-2 gap-1">
          <div className="md:size-7 size-6 rounded-full flex items-center justify-center bg-primary-500">
            <BsFillEnvelopeFill className="md:size-4 size-[0.7rem]" />
          </div>
          <span className="md:text-sm text-[0.55rem] font-semibold" dir="ltr">
            a@aletqan.com.sa
          </span>
        </div>
        {/* phone */}
        <div className="flex items-center sm:gap-2 gap-1">
          <div className="md:size-7 size-6 rounded-full flex items-center justify-center bg-primary-500">
            <BsPhoneFill className="md:size-4 size-[0.7rem]" />
          </div>
          <span className="md:text-sm text-[0.55rem] font-semibold" dir="ltr">
            +966534093333
          </span>
        </div>
        {/* location */}
        <div className="flex items-center sm:gap-2 gap-1">
          <div className="md:size-7 size-6 rounded-full flex items-center justify-center bg-primary-500">
            <BsGeoAltFill className="md:size-4 size-[0.7rem]" />
          </div>
          <span className="md:text-sm text-[0.46rem] font-semibold">
            جدة - المملكة العربية السعودية
          </span>
        </div>
      </div>
      <div className="flex items-center md:gap-8 gap-4">
        {/* social media */}
        <div className="flex items-center md:gap-4 sm:gap-3 gap-2">
          {/* instagram */}
          <Link
            href={"https://www.instagram.com/umraty_aletqan/profilecard/"}
            className="md:size-7 size-6 rounded-full flex items-center justify-center bg-primary-500 hover:text-primary-500 hover:bg-white transition-colors"
            target="_blank"
          >
            <BsInstagram className="md:size-[0.9rem] size-[0.7rem]" />
          </Link>
          <Link
            href="https://wa.me/966534093333"
            className="md:size-7 size-6 rounded-full flex items-center justify-center bg-primary-500 hover:text-primary-500 hover:bg-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="md:size-[0.9rem] size-[0.7rem]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
