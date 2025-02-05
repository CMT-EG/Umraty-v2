"use client";

import { useState } from "react";
import { PreviousReservationDialog } from "./previousReservationForm/PreviousReservationDialog";
import TSearchFrontField from "@/global/components/TForm/TSearchFrontField";
import { TSuccessDialog } from "@/global/components/TForm/success/TSuccessDialog";
import { Search } from "lucide-react";
import { Checkbox } from "@/global/shadcn/ui/checkbox";

export default function AllFormsDialogs() {
  const [searchQuery, setSearchQuery] = useState("");

  const [openOne, setOpenOne] = useState(true);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);

  return (
    <div>
      <PreviousReservationDialog
        title={"لديك حجز سابق!"}
        subTitle={"هل تود استرجاع بعض المعتمرين منه؟"}
        open={openOne}
        setOpen={setOpenOne}
        handleFunction={() => {
          setOpenTwo(true);
        }}
        compoentContent={<></>}
        className={"!sm:w-[576px] max-w-[576px]"}
      />
      <PreviousReservationDialog
        title={"اختر المعتمرين المراد استرجاع بياناتهم"}
        subTitle={"هل تود استرجاع بعض المعتمرين منه؟"}
        open={openTwo}
        setOpen={setOpenTwo}
        handleFunction={() => {
          setOpenThree(true);
        }}
        compoentContent={
          <div className="flex flex-col gap-6 w-full h-full">
            <div className="flex items-center gap-6 w-full ">
              <TSearchFrontField onSearch={(query) => setSearchQuery(query)} />
              <div className="h-8 w-8 shrink-0 bg-primary-600 rounded-full flex items-center justify-center">
                <Search className="h-4 w-4 text-[#FCFCFD]" />
              </div>
            </div>
            <div className="overflow-y-auto max-h-[30vh]">
              {Array(10)
                .fill(1)
                .map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex gap-4 h-[48px] items-center "
                    >
                      <Checkbox
                        id={item}
                        dir="ltr"
                        checked={item?.actions?.includes("GET")}
                      />
                      <label
                        htmlFor={item}
                        className="text-[#131416] text-sm font-bold w-full"
                      >
                        {"علي محمد أحمد"}
                      </label>
                    </div>
                  );
                })}
            </div>
          </div>
        }
        className={"!sm:w-[731px] max-w-[731px]"}
      />
      <TSuccessDialog
        open={openThree}
        setOpen={setOpenThree}
        title={"تم استرجاع بيانات المعتمرين بنجاح"}
      />
    </div>
  );
}
