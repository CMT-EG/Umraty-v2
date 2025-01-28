"use client";
import useHero from "./hooks/useHero";

function Hero() {
  const { settings } = useHero();

  return (
    <section className="bg-hero-background bg-bottom bg-cover">
      <div className="relative text-white w-full px-5 sm:px-20 pt-40 md:pt-60 pb-24 md:pb-48 bg-gradient-to-b from-black to-black/50">
        <div className="flex flex-col md:items-start items-center md:text-start text-center max-w-[639px]">
          <div className="bg-[#404449] rounded-full px-8 py-2.5 font-bold sm:text-base text-[0.75rem] mb-4">
            مرحباً بك في منصة عمرتى! 👋
          </div>
          <h1 className="sm:text-[2.5rem] text-[1.563rem]# leading-[154%] font-extrabold mb-3">
            {settings?.first_text}
          </h1>
          <h3
            className="sm:text-2xl text-[0.75rem]# leading-[175%] sm:mb-14 mb-2"
            style={{
              lineHeight: "2rem",
            }}
          >
            {settings?.second_text}
          </h3>
          <h3
            className="sm:text-4xl text-[0.75rem]# leading-[175%] sm:mb-14 mb-6 font-bold"
            style={{
              lineHeight: "1rem",
            }}
          >
            {settings?.bold_text}
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Hero;
