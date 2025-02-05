import { DateRangeFilter } from "@/global/components/TForm/dateFilter/DateRangeFilter";
import { Suspense } from "react";

export default function SearchSection() {
  return (
    <section className="w-full relative z-20 container">
      <div className="flex flex-col gap-[56px] w-full grow">
        <div className="bg-steps w-full">
          <div className="mt-[-70px] relative z-20 w-full mx-auto flex justify-between gap-4 bg-[#FCFCFD] rounded-[1.25rem] shadow-lg p-[43px] items-center">
            <Suspense fallback={<div></div>}>
              <DateRangeFilter />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
