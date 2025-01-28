export default function HeaderContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="justify-center items-center gap-2.5 inline-flex">
        <div className="w-[22px] h-0.5 bg-[#8b6343] rounded-[30px]"></div>
        <h2 className="text-right text-[#8b6343] text-2xl font-extrabold">
          تقييم خدماتنا
        </h2>
      </div>
      <p className=" max-w-[750px] text-center text-[#131416] text-[30px] md:text-[40px] lg:text-[45px] 2xl:text-[64px] font-extrabold">
        كيف كانت تجربتك معنا؟ نحن هنا لنستمع إلى رأيك
      </p>
      <p className="text-center text-[#878787] text-2xl font-normal leading-[150%] lg:px-20">
        {`"تقييمك ليس مجرد رأي، بل هو خطوة أساسية تساعدنا على تحسين خدماتنا وتقديم
          تجربة أفضل لك ولجميع عملائنا. شاركنا ملاحظاتك لنبني تجربة مثالية معًا."`}
      </p>
    </div>
  );
}
