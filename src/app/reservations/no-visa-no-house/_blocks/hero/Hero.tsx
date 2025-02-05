import HomeSVG from "@/global/assets/svg/HomeSVG";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-full text-white">
      <nav className="text-sm">
        <ol className="flex gap-4">
          <li>
            <a href="#" className="flex gap-2 items-center justify-center">
              <HomeSVG fill="#fff" />
              الرئيسية
            </a>
          </li>
          <li>{" > "}</li>
          <li>
            <a href="#" className="flex gap-2 items-center justify-center">
              مدن
            </a>
          </li>
          <li>{" > "}</li>
          <li>
            <a
              href="#"
              className="underline flex gap-2 items-center justify-center font-semibold"
            >
              مكه - المدينة المنورة
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
}
