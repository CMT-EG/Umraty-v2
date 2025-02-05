"use client";
import Image from "next/image";
import useHero from "./hooks/useHero";
import KaabaSVG from "./assets/svg/KaabaSVG";

function Hero() {
  const { settings } = useHero();

  return (
    <section className="flex flex-col relative ">
      <div className="self-end flex flex-col gap-10 items-center lg:flex-row justify-between  text-center lg:text-start  relative w-full px-5 sm:px-20 pt-5 pb-[70px] bg-white">
        <div className="flex flex-col md:items-start items-center max-w-[639px] xl:mb-24">
          <div className="bg-[#F7F4EF] text-[#2F1E19] rounded-full px-8 py-2.5 font-bold sm:text-base text-[0.75rem] mb-4 mx-auto lg:mx-0">
            مرحباً بك في منصة عمرتى! 👋
          </div>
          <h1 className="sm:text-[2.5rem] text-[1.563rem] font-extrabold mb-3 text-[#2F1E19]">
            {/* {settings?.first_text} */}
            أداء العمرة أصبح أسهل من أي وقت مضى
          </h1>
          <h3
            className="sm:text-2xl text-[0.75rem] leading-[175%] text-[#2F1E19] w-full"
            style={{
              lineHeight: "2rem",
            }}
          >
            {/* {settings?.second_text} */}
            احجز بكل سهولة رحلتك للعمرة، مع خيارات مرنة تشمل السكن، التأشيرة،
            وخدمات النقل، بأقل التكاليف وبأفضل تجربة.
          </h3>
        </div>
        <div>
          <KaabaSVG className="w-full h-fit sm:w-[480px] sm:h-[370px] xl:w-[650px] xl:h-[550px] shrink-0" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
