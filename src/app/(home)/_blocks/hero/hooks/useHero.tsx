"use client";

import requestHelpers from "@/global/shadcn/lib/requestHelpers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/global/shadcn/hooks/use-toast";
import { API_ROOT } from "@/global/env/variablesEnv";

export default function useHero() {
  const [startDate, setStartDate] = useState<any>(null);
  const [finishDate, setFinishDate] = useState<any>(null);
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [departureTime, setDepartureTime] = useState<string>("");
  const [availableArrivalTimes, setAvailableArrivalTimes] = useState<string[]>(
    []
  );
  const [availableDepartureTimes, setAvailableDepartureTimes] = useState<
    string[]
  >([]);
  const [hotelRequired] = useState<string>("no");
  const [arrivalLocation, setArrivalLocation] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  // const [destination, setDestination] = useState<string>("");
  const [passengers, setPassengers] = useState<number>(0);
  const [_loadingArrivalTimes, setLoadingArrivalTimes] =
    useState<boolean>(false);
  const [_loadingDepartureTimes, setLoadingDepartureTimes] =
    useState<boolean>(false);

  const router = useRouter();

  const { data: takeoffs } = useQuery({
    queryKey: ["takeoffs"],
    queryFn: () => requestHelpers.getData("/takeoffs/get/"),
  });

  const { data: destinations } = useQuery({
    queryKey: ["destinations"],
    queryFn: () => requestHelpers.getData("/destinations/get/"),
  });

  const fetchAvailableTimes = async (
    date: string,
    type: string,
    point: string
  ) => {
    try {
      const queryPoint =
        type === "go" ? `takeoff=${point}` : `destination=${point}`;
      const query = `/trips/get-by-date/${date}/?trip_type=${type}&${queryPoint}`;
      console.log("API Request:", query);

      const res = await requestHelpers.getData(query);
      console.log("API Response:", res);
      return res.data || [];
    } catch (error) {
      console.error("Error fetching available times:", error);
      toast({
        variant: "destructive",
        color: "white",
        title: "خطأ أثناء جلب المواعيد المتاحة!",
      });
      // toast.error("خطأ أثناء جلب المواعيد المتاحة!");
      return [];
    } finally {
      setLoadingArrivalTimes(false); // Stop loading arrival times
      setLoadingDepartureTimes(false); // Stop loading departure times
    }
  };

  const handleDateChange = async (
    date: any,
    setDate: any,
    setTime: any,
    setAvailableTimes: any,
    type: string,
    point: string,
    destination?: string,
    setDestination?: any,
    arrivalLocation?: string,
    setArrivalLocation?: any
  ) => {
    setDate(date);
    setDestination?.(destination);
    setArrivalLocation?.(arrivalLocation);
    if (date) {
      const formattedDate = date.toISOString().slice(0, 10);
      console.log(
        `Fetching available times for ${type} trip on ${formattedDate}`
      );
      const times = await fetchAvailableTimes(formattedDate, type, point);
      console.log(`Available times for ${type} trip:`, times); // Log the available times
      // setAvailableTimes(times);
      setTime(""); // Reset the selected time
    } else {
      setAvailableTimes([]);
      setTime("");
    }
  };

  const handleArrival = async (
    date: any,
    setDate: any,
    setTime: any,
    setAvailableTimes: any,
    type: string,
    point: string,
    arrivalLocation: string
  ) => {
    handleDateChange(date, setDate, setTime, setAvailableTimes, type, point);
    setArrivalLocation(arrivalLocation);
  };

  const handleDestination = async (
    date: string,
    setDate: any,
    setTime: any,
    setAvailableTimes: any,
    type: string,
    point: string,
    destination: string
  ) => {
    handleDateChange(date, setDate, setTime, setAvailableTimes, type, point);
    setDestination(destination);
  };

  const onSearch = async () => {
    if (hotelRequired === "yes") {
      if (!startDate || !finishDate || !arrivalTime || !departureTime) {
        toast({
          variant: "destructive",
          color: "white",
          title: "من فضلك ادخل جميع المعلومات المطلوبة!",
        });
        // toast.warn("من فضلك ادخل جميع المعلومات المطلوبة!");
        return;
      }

      try {
        const formattedStartDate = `${startDate!.toISOString().slice(0, 10)}`;
        const formattedFinishDate = `${finishDate!.toISOString().slice(0, 10)}`;

        // Save inputs to localStorage
        localStorage.setItem(
          "startDate",
          JSON.stringify(startDate!.toISOString())
        );
        localStorage.setItem(
          "finishDate",
          JSON.stringify(finishDate!.toISOString())
        );
        localStorage.setItem("arrivalTime", arrivalTime);
        localStorage.setItem("departureTime", departureTime);
        localStorage.setItem("arrivalLocation", arrivalLocation);
        localStorage.setItem("destination", destination);

        const res = await requestHelpers.getData(
          `/room-inventory/check/?date_from=${formattedStartDate}&date_to=${formattedFinishDate}&type=all&passengers_count=${passengers}`,
          { showToast: true, error: (error) => error.message }
        );

        if (!res?.is_available) {
          toast({
            variant: "default",
            title: res?.message,
          });
          // toast.info(res?.message);
        } else {
          router.push(
            `/rooms?date_from=${formattedStartDate}&date_to=${formattedFinishDate}`
          );
        }
        console.log("RES:", res);
      } catch (error: any) {
        console.log("ERR:", error);
        toast({
          variant: "destructive",
          color: "white",
          title: error?.message,
        });
        // toast.error(error?.message);
      }
    } else {
      if (
        !startDate ||
        !finishDate ||
        !arrivalTime ||
        !departureTime ||
        // arrivalLocation ||
        // destination ||
        passengers < 1
      ) {
        toast({
          variant: "destructive",
          color: "white",
          title: "من فضلك ادخل جميع المعلومات المطلوبة!",
        });
        // toast.warn("من فضلك ادخل جميع المعلومات المطلوبة!");
        return;
      }
      try {
        const formattedStartDate = `${startDate!.toISOString().slice(0, 10)}`;
        const formattedFinishDate = `${finishDate!.toISOString().slice(0, 10)}`;

        // Save inputs to localStorage
        localStorage.setItem(
          "startDate",
          JSON.stringify(startDate!.toISOString())
        );
        localStorage.setItem(
          "finishDate",
          JSON.stringify(finishDate!.toISOString())
        );
        localStorage.setItem("arrivalLocation", arrivalLocation);
        localStorage.setItem("destination", destination);
        localStorage.setItem("passengers", passengers.toString());
        localStorage.setItem("arrivalTime", arrivalTime);
        localStorage.setItem("departureTime", departureTime);
        const takeoffTrip = await requestHelpers.getData(
          `/trips/get-trip/?trip_time=${arrivalTime}&point=${arrivalLocation}&end_point=${destination}&trip_date=${formattedStartDate}`,
          {
            showToast: true,
            error: (error) => error.message,
          }
        );
        localStorage.setItem("arrivalTripPrice", takeoffTrip?.data.price);
        const returnTrip = await requestHelpers.getData(
          `/trips/get-trip/?trip_time=${departureTime}&point=${destination}&end_point=${arrivalLocation}&trip_date=${formattedFinishDate}`
        );
        localStorage.setItem("returnTripPrice", returnTrip?.data.price);
        console.log("TRIP:", takeoffTrip);
        const res = await requestHelpers.getData(
          `/room-inventory/check/?date_from=${formattedStartDate}&date_to=${formattedFinishDate}&type=all&passengers_count=${passengers}`,
          { showToast: true }
        );
        if (!res?.is_available) {
          toast({
            variant: "default",
            title: res?.message,
          });
          // toast.info(res?.message);
        } else {
          router.push("/reservation?hotel=false");
          window.location.href = "/reservation?hotel=false";
        }
      } catch (error: any) {
        console.log("ERR:", error);
        toast({
          variant: "destructive",
          color: "white",
          title: error?.message,
        });
        // toast.error(`${error.message}`);
      }
    }
  };

  useEffect(() => {
    const fetchTimes = async () => {
      if (startDate && finishDate && arrivalLocation && destination) {
        console.log("Fetching trips for start and finish dates");

        // Format dates to YYYY-MM-DD
        const formattedStartDate = startDate.toISOString().slice(0, 10);
        const formattedFinishDate = finishDate.toISOString().slice(0, 10);

        try {
          // Call the new endpoint
          const data = await requestHelpers.getData(
            `/trips/get-listed/?takeoff=${arrivalLocation}&destination=${destination}&start_date=${formattedStartDate}&finish_date=${formattedFinishDate}`
          );

          // Update state with the fetched times
          if (data.start_trips) {
            setAvailableArrivalTimes(data.start_trips);
          }
          if (data.finish_trips) {
            setAvailableDepartureTimes(data.finish_trips);
          }
        } catch (error) {
          console.error("Error fetching trips:", error);
        } finally {
          setLoadingArrivalTimes(false);
          setLoadingDepartureTimes(false);
        }
      }
    };

    // Only fetch when all necessary parameters are set
    if (startDate && finishDate && arrivalLocation && destination) {
      setLoadingArrivalTimes(true);
      setLoadingDepartureTimes(true);
      fetchTimes();
    }
  }, [startDate, finishDate, arrivalLocation, destination]);

  useEffect(() => {
    if (arrivalTime && departureTime) {
    }
  }, [arrivalTime, departureTime]);

  const { data: settings, isLoading: _isLoading } = useQuery({
    queryKey: ["settingsData"],
    queryFn: () => {
      return requestHelpers.getData(`${API_ROOT}/settings/get/`);
    },
  });

  return {
    settings,
    hotelRequired,
    startDate,
    setStartDate,
    handleDateChange,
    setArrivalTime,
    setAvailableArrivalTimes,
    arrivalLocation,
    finishDate,
    setFinishDate,
    setDepartureTime,
    setAvailableDepartureTimes,
    destination,
    arrivalTime,
    availableArrivalTimes,
    departureTime,
    availableDepartureTimes,
    passengers,
    setPassengers,
    handleArrival,
    onSearch,
    destinations,
    handleDestination,
    takeoffs,
  };
}
