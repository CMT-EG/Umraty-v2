import { toast } from "@/main/common/shadcn/hooks/use-toast";
import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { useState } from "react";

export default function useHeroSection() {
  const [startDate, setStartDate] = useState<any>(
    localStorage.getItem("startDate")
      ? new Date(JSON.parse(localStorage?.getItem("startDate")!))
      : null
  );

  const [finishDate, setFinishDate] = useState<any>(
    localStorage.getItem("finishDate")
      ? new Date(JSON.parse(localStorage?.getItem("finishDate")!))
      : null
  );

  const onSearch = async () => {
    if (!startDate || !finishDate) {
      toast({
        variant: "destructive",
        title: "من فضلك ادخل تاريخ الذهاب والعودة!",
      })
      // toast.warn("من فضلك ادخل تاريخ الذهاب والعودة!");
      return;
    }

    // Store in localStorage in UTC
    localStorage.setItem("startDate", JSON.stringify(startDate!.toISOString()));
    localStorage.setItem(
      "finishDate",
      JSON.stringify(finishDate!.toISOString())
    );

    // Format the dates to 'YYYY-MM-DD' in UTC
    const formattedStartDate = `${startDate!.getUTCFullYear()}-${(
      startDate!.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${startDate!
      .getUTCDate()
      .toString()
      .padStart(2, "0")}`;

    const formattedFinishDate = `${finishDate!.getUTCFullYear()}-${(
      finishDate!.getUTCMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${finishDate!
      .getUTCDate()
      .toString()
      .padStart(2, "0")}`;

    const passengers = JSON.parse(localStorage.getItem("passengers") || "");
    try {
      const res = await requestHelpers.getData(
        `${API_ROOT}/room-inventory/check/?date_from=${formattedStartDate}&date_to=${formattedFinishDate}&type=all&passengers_count=${passengers}`,
        {
          showToast: true,
        }
      );
      if (!res?.is_available) {
        toast({
          variant: "default",
          title: res?.message,
        })
        // toast.info(res?.message);
      } else {
        const newUrl = `/rooms?date_from=${formattedStartDate}&date_to=${formattedFinishDate}`;

        // Update the browser's location to the new URL, which will reload the page
        window.location.href = newUrl;
      }
      console.log(res);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.message,
      })
      // toast.error(`${error.message}`);
    }
  };
  return { onSearch, setFinishDate, finishDate, setStartDate, startDate };
}
