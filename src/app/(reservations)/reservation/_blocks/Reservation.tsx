"use client";
import { Button } from "@/main/common/shadcn/ui/button";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import HeroSection from "./_blocks/heroSection/HeroSection";
import StepsContainer from "./_blocks/stepsContainer/StepsContainer";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import { roundToTwoDecimals } from "@/main/common/utils/numbers";
import { InfoCheckIcon } from "@/main/global/assets/svg/InfoCheckIcon";
import { AuthDialog } from "@/app/(auth)/shared/_blocks/authDialog/AuthDialog";
import { creditCardType } from "./_blocks/stepsContainer/_blocks/thirdStep/ThirdStep";
import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import { toast } from "@/main/common/shadcn/hooks/use-toast";
import { getCookie } from "cookies-next/client";

interface TravelerInfo {
  full_name: string;
  national_id: string;
  nationality: string;
  gender: string;
  id_type: string;
}

interface RoomInfo {
  [key: string]: TravelerInfo[];
}

function Reservation() {
  const isLoggedIn = true;

  // Define initial data only if localStorage is available (browser environment check)
  const initialData: any[] =
    typeof window !== "undefined" && localStorage?.getItem("roomsState")
      ? Object.values(JSON.parse(localStorage.getItem("roomsState") ?? ""))
      : [];

  const searchParams = useSearchParams();
  const isFinalStep = !!searchParams.get("is_final");
  const hotelInfoRequired = searchParams.get("hotel") === "true";

  const [currentStep, setCurrentStep] = useState(isFinalStep ? 4 : 1);
  const [cards, setCards] = useState<creditCardType[]>([
    {
      cardNumber: "45654612356448",
      cvv: "526",
      expDate: "02/27",
      holderName: "كريم يوسف محمد",
      country: "مصر",
    },
  ]);

  const router = useRouter();

  const [chosenCard, setChosenCard] = useState<
    (creditCardType & { id: number }) | null
  >(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  const [roomsInfo, setRoomsInfo] = useState<RoomInfo>(() => {
    if (typeof window !== "undefined" && localStorage?.getItem("roomsState")) {
      const initialRoomsInfo: any = Object.values(
        JSON.parse(localStorage.getItem("roomsState") ?? "")
      );
      initialData.forEach((room) => {
        initialRoomsInfo[room.id] = Array(room.passengers_count).fill({
          full_name: "",
          national_id: "",
          nationality: "",
          room_id: room.id,
        });
      });
      return initialRoomsInfo;
    }
    return {}; // return empty object if localStorage is not available
  });

  const handleRoomInfoChange = (
    roomId: number,
    travelerIndex: number,
    field: keyof TravelerInfo,
    value: string
  ) => {
    setRoomsInfo((prevState) => ({
      ...prevState,
      [roomId]: prevState[roomId].map((traveler, index) =>
        index === travelerIndex ? { ...traveler, [field]: value } : traveler
      ),
    }));
  };

  const addCard = (card: creditCardType) => {
    setCards((lastValue) => [...lastValue, card]);
  };

  const [startDate, setStartDate] = useState<Date | null>(() => {
    const storedStartDate =
      typeof window !== "undefined" ? localStorage.getItem("startDate") : null;
    return storedStartDate ? new Date(JSON.parse(storedStartDate)) : null;
  });

  const [finishDate, setFinishDate] = useState<Date | null>(() => {
    const storedFinishDate =
      typeof window !== "undefined" ? localStorage.getItem("finishDate") : null;
    return storedFinishDate ? new Date(JSON.parse(storedFinishDate)) : null;
  });
  const arrivalPrice = JSON.parse(
    localStorage.getItem("arrivalTripPrice") ?? ""
  );
  const returnPrice = JSON.parse(localStorage.getItem("returnTripPrice") ?? "");
  const totalPrice = arrivalPrice + returnPrice;
  const accessToken = getCookie("accessToken");
  const urgent = true;
  const { data: settingsData } = useQuery({
    queryKey: ["settingsData"],
    queryFn: () => {
      return requestHelpers.getData(`${API_ROOT}/settings/get/`);
    },
  });

  const getDaysDifference = (
    start: Date | null,
    finish: Date | null
  ): number | null => {
    if (start && finish) {
      const msPerDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
      const differenceInMs = finish.getTime() - start.getTime();
      return Math.max(0, Math.ceil(differenceInMs / msPerDay)); // No subtraction here
    }
    return null; // Return null if either date is missing
  };

  const daysDifference = getDaysDifference(startDate, finishDate);
  const hotelRequired = new URLSearchParams(window.location.search).get(
    "hotel"
  );
  const willPay =
    new URLSearchParams(window.location.search).get("will_pay") === "true";
  console.log("HOTEL REQUIRED:", hotelRequired === "true");
  const rooms =
    hotelRequired === "true"
      ? localStorage.getItem("roomsState")
        ? Object.values(JSON.parse(localStorage.getItem("roomsState") || "{}"))
        : []
      : [];

  console.log(rooms);
  console.log("roomsInfo:", roomsInfo);

  const totalPassengers =
    hotelRequired === "true"
      ? rooms.reduce(
          (total: number, room: any) => total + room.passengers_count,
          0
        )
      : (() => {
          const passengersFromStorage = localStorage.getItem("passengers");
          return passengersFromStorage ? JSON.parse(passengersFromStorage) : 0;
        })();

  const passengerCost =
    hotelRequired === "true"
      ? rooms.reduce((acc: number, room: any) => {
          return acc + room.passengers_count * room.roomPrice * daysDifference!;
        }, 0)
      : 0;

  console.log("passengerCost:", passengerCost);

  const transportationCost =
    hotelRequired === "true"
      ? rooms.reduce((acc: number, room: any) => {
          return (
            acc + room.passengers_count * settingsData?.cost_of_transportation
          );
        }, 0)
      : totalPassengers * (totalPrice || 0);
  const baseCost = passengerCost + transportationCost;
  const taxAmount = (baseCost * (settingsData?.tax_percentage ?? 0)) / 100;
  const subtotal = baseCost + taxAmount;

  const roundedPassengerCost = roundToTwoDecimals(passengerCost);
  const roundedTransportationCost = roundToTwoDecimals(transportationCost);
  const roundedBaseCost = roundToTwoDecimals(baseCost);
  const roundedTaxAmount = roundToTwoDecimals(taxAmount);
  const roundedSubtotal = roundToTwoDecimals(subtotal);

  const [tripNumber, setTripNumber] = useState<string>(
    localStorage.getItem("tripNumber") || ""
  );

  const [arrivalTime, setArrivalTime] = useState<string>(
    localStorage.getItem("arrivalTime") || ""
  );

  const [departureTime, setDepartureTime] = useState<string>(
    localStorage.getItem("departureTime") || ""
  );

  const [arrivalLocation, setArrivalLocation] = useState<string>(
    localStorage.getItem("arrivalLocation") || ""
  );

  const [destination, setDestination] = useState<string>(
    localStorage.getItem("destination") || ""
  );

  const passengersCount = localStorage.getItem("passengers")
    ? JSON.parse(localStorage.getItem("passengers") || "")
    : 0;

  const [passengers, setPassengers] = useState<any>([]);

  const onBooking = async () => {
    const passengersInfo = Object.values(roomsInfo).slice(1); // Assuming roomsInfo contains the passenger data
    const bookedRooms = initialData; // Booked room data
    const dateFrom = startDate!.toISOString().split("T")[0]; // Start date in YYYY-MM-DD format
    const dateTo = finishDate!.toISOString().split("T")[0]; // End date in YYYY-MM-DD format

    // Get the search param "hotelRequired" from the URL (assuming you have access to it via `searchParams` or `router.query`)
    const hotelRequired = new URLSearchParams(window.location.search).get(
      "hotel"
    );

    const bookingData: any = {
      room_types: bookedRooms,
      date_from: dateFrom,
      date_to: dateTo,
      passengers: passengersInfo,
      total_price: roundedSubtotal,
      trip_number: tripNumber,
      trip_date: arrivalTime,
      passengers_count: passengersCount,
    };

    bookingData.arrivalLocation = arrivalLocation;
    bookingData.arrivalTime = arrivalTime;
    bookingData.departureTime = departureTime;
    bookingData.destination = destination;

    bookingData.urgent = "yes";
    // If hotelRequired is "true" (string), append 'type' as 'hotel'
    if (hotelRequired === "true") {
      bookingData.type = "hotel";
    } else {
      // Otherwise, add additional transport-related details and set 'type' as 'transportation'
      bookingData.type = "transportation";
      bookingData.passengers = passengers;
      bookingData.arrivalLocation = arrivalLocation;
      bookingData.arrivalTime = arrivalTime;
      bookingData.destination = destination;
      bookingData.finishDate = dateTo;
      bookingData.startDate = dateFrom;
    }

    try {
      const res = await requestHelpers.postData(
        "/bookings/create-booking/",
        bookingData,
        {}
      );

      const sessionID = res?.data?.session_id;
      if (res.status === 201) {
        if (!urgent) {
          if ((window as any).GeideaCheckout) {
            const onSuccess = () => {
              console.log("Payment Success");
            };
            const onError = (error: any) => {
              console.error("Payment Error:", error);
            };
            const onCancel = () => {
              console.log("Payment Cancelled");
            };

            const payment = new (window as any).GeideaCheckout(
              onSuccess,
              onError,
              onCancel
            );
            payment.startPayment(sessionID);
          }
        } else {
          toast({
            variant: "default",
            title: "تم تأكيد الحجز بنجاح",
          })
          // toast.success("تم تأكيد الحجز بنجاح");
          router.replace("/");
        }
      }
      if (res.status === 208) {
        if (!urgent) {
          if (willPay) {
            if ((window as any).GeideaCheckout) {
              const onSuccess = () => {
                console.log("Payment Success");
              };
              const onError = (error: any) => {
                console.error("Payment Error:", error);
              };
              const onCancel = () => {
                console.log("Payment Cancelled");
              };
              // Initialize the GeideaCheckout
              const payment = new (window as any).GeideaCheckout(
                onSuccess,
                onError,
                onCancel
              );
              payment.startPayment(sessionID);
            }
          }
        } else
          toast({
            variant: "destructive",
            title: "لديك بالفعل حجز غير مدفوع،أذهب لصفحة ادارة الحجز وقم بدفعه",
          });
        // toast.warn(
        //   "لديك بالفعل حجز غير مدفوع،أذهب لصفحة ادارة الحجز وقم بدفعه"
        // );
      }
      console.log(bookingData);
    } catch (e) {
      console.log(e);
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => {
      return onBooking();
    },
  });

  useEffect(() => {
    if (isFinalStep) {
      // localStorage.removeItem("startDate");
      // localStorage.removeItem("finishDate");
      // localStorage.removeItem("roomsState");
      // localStorage.removeItem("tripNumber");
      // localStorage.removeItem("arrivalTime");
      localStorage.clear();
    }
  }, [isFinalStep]);

  useEffect(() => {
    if (passengers.length === 0 && passengersCount > 0) {
      const initialPassengers = Array.from({ length: passengersCount }, () => ({
        full_name: "",
        national_id: "",
        nationality: "",
        gender: "",
        id_type: "",
      }));
      setPassengers(initialPassengers);
    }
  }, [passengersCount]);

  return (
    <>
      <HeroSection currentStep={currentStep} />
      {currentStep < 4 && (
        <StepsContainer
          data={initialData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          roomInfo={roomsInfo}
          handleRoomInfoChange={handleRoomInfoChange}
          cards={cards}
          addCard={addCard}
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          isLoggedIn={isLoggedIn}
          setLoginDialogOpen={setLoginDialogOpen}
          onBooking={mutateAsync}
          passengersCost={roundedPassengerCost}
          transportationCost={roundedTransportationCost}
          totalPassengers={totalPassengers}
          taxAmount={roundedTaxAmount}
          baseCost={roundedBaseCost}
          subtotal={roundedSubtotal}
          loading={isPending}
          token={accessToken}
          passengers={passengers}
          passengersCount={passengersCount}
          setPassengers={setPassengers}
        />
      )}
      {currentStep === 4 && (
        <div className="w-full px-5 pb-10 pt-0 lg:pt-12">
          <div className="w-full mx-auto max-w-2xl p-10 rounded-xl bg-white shadow-xl shadow-black/5 flex flex-col items-center justify-center">
            <div className="sm:size-32 size-16 bg-primary-600 rounded-full flex items-center justify-center mb-4">
              <InfoCheckIcon className="sm:size-16 size-8 fill-white" />
            </div>
            <p className="sm:text-2xl text-lg text-center font-bold mb-2">
              شكرًا لك على تقديم طلب الحجز
            </p>
            <p className="sm:text-base text-sm text-center text-neural-900 max-w-lg mb-6">
              سنتمكن من مراجعة المعلومات التي قدمتها في الصفحة السابقة. وستتلقى
              رسالة على هاتفك للتأكيد.
            </p>
            <Button
              size={"lg"}
              className="text-base w-full max-w-sm mb-4"
              onClick={() => router.push("/reservations")}
            >
              <Link href="/reservations"> مراجعة بياناتك</Link>
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="text-base w-full max-w-sm"
              onClick={() => router.push("/")}
            >
              <Link href="/">العودة الى الرئيسية</Link>
            </Button>
          </div>
        </div>
      )}
      <AuthDialog
        dialogOpen={loginDialogOpen}
        setDialogOpen={setLoginDialogOpen}
      />
    </>
  );
}

export default Reservation;
