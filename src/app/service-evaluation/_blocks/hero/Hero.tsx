import { Button } from "@/global/shadcn/ui/button";
import Background from "./_blocks/background/Background";

export default function Hero() {
  return (
    <section className="container relative w-full min-h-[450px] h-rvh rounded-2xl">
      <div className="flex flex-col text-center sm:text-start items-center sm:items-start gap-4 md:gap-5 lg:gap-7 p-5 md:ms-5 lg:ms-20 mt-[132px]">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-7">
          <h1 className="text-[#2f1e19] text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-[150%]">
            كيف كانت تجربتك معنا؟
          </h1>
          <p className="max-w-[973px] text-primary-800  text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold leading-[200%]">
            نقدّر ملاحظاتك ونستخدمها لتحسين خدماتنا بشكل مستمر.
          </p>
          <p className="max-w-[973px] text-primary-700  text-sm md:text-base lg:text-xl xl:text-1xl 2xl:text-2xl font-extrabold leading-loose">
            يرجى تقييم تجربتك لمساعدتنا في تقديم الأفضل دائمًا
          </p>
        </div>
        <Button className="w-fit px-5 lg:px-7 py-2  rounded-full text-white lg:text-[18px]">
          ابدأ التقييم الآن
        </Button>
      </div>

      <Background />
    </section>
  );
}
