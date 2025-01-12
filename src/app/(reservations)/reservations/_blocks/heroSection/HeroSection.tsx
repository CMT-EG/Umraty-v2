"use client";

type Props = {
  currentTab: "present" | "past";
  setCurrentTab: (value: "present" | "past") => any;
};

function HeroSection({ currentTab: _currentTab, setCurrentTab }: Props) {
  return (
    <section className="bg-rooms-background bg-center bg-cover mb-[9rem]">
      <div className="relative text-white w-full px-5 sm:px-20 pt-40 md:pt-60 pb-24 md:pb-48 bg-black/70">
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="w-full sm:text-[2.5rem] text-[1.563rem] leading-[154%] font-extrabold mb-3">
            هنا تري كل حجوزاتك
          </h1>
        </div>
        <div className="absolute bottom-0 translate-y-2/3 md:inset-x-[5.5rem] inset-x-5 md:px-8 md:py-11 px-[0.875rem] py-[0.875rem]  sm:flex-row flex-col sm:items-center items-stretch gap-4 bg-white rounded-[1.25rem] shadow-[0px_4px_42px_0px] shadow-black/10 block">
          <div
            className={`sm:basis-1/2 h-[73px] rounded-xl flex items-center justify-center text-xl font-bold select-none cursor-pointer ${"bg-primary-600 text-white"} transition-colors`}
            onClick={() => setCurrentTab("past")}
          >
            الحجوزات السابقة
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
