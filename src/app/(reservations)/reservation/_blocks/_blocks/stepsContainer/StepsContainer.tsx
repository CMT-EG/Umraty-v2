"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import ThirdStep from "./_blocks/thirdStep/ThirdStep";
import SecondStep from "./_blocks/secondStep/SecondStep";
import FirstStep from "./_blocks/firstStep/FirstStep";
import { API_ROOT } from "@/main/global/env/variablesEnv";
import requestHelpers from "@/main/common/shadcn/lib/requestHelpers";
import { PersonIcon } from "@/main/global/assets/svg/PersonIcon";

function StepsContainer({
  currentStep,
  setCurrentStep,
  roomInfo,
  handleRoomInfoChange,
  cards,
  addCard,
  chosenCard,
  setChosenCard,
  isLoggedIn,
  setLoginDialogOpen,
  onBooking,
  loading,
  totalPassengers,
  taxAmount,
  baseCost,
  subtotal,
  token,
  passengers,
  passengersCount,
  setPassengers,
}: any) {
  const { data: hotelData } = useQuery({
    queryKey: ["hotelData"],
    queryFn: () => {
      return requestHelpers.getData(`${API_ROOT}/hotels/get-hotel/1/`);
    },
  });

  const rooms = localStorage.getItem("roomsState")
    ? Object.values(JSON.parse(localStorage.getItem("roomsState") || "{}"))
    : [];

  useEffect(() => {
    if (!token) {
      setLoginDialogOpen(true);
    }
  }, [token]);
  const searchParams = useSearchParams();
  const needHotel = searchParams.get("hotel");
  // const payment = new GeideaCheckout()
  return (
    <div className="sm:px-20 px-5 grid lg:grid-cols-[1fr_448px] lg:gap-9 gap-5 pb-10 pt-0 lg:pt-12">
      <div className="md:order-1 order-3">
        {currentStep === 1 && (
          <FirstStep
            data={rooms}
            roomInfo={roomInfo}
            setCurrentStep={setCurrentStep}
            handleRoomInfoChange={handleRoomInfoChange}
            isLoggedIn={isLoggedIn}
            setLoginDialogOpen={setLoginDialogOpen}
            hotelData={hotelData?.data}
            token={token}
            passengers={passengers}
            setPassengers={setPassengers}
            countOfPassengers={passengersCount}
          />
        )}
        {currentStep === 2 && (
          <SecondStep
            data={rooms}
            hotelData={hotelData?.data}
            setCurrentStep={setCurrentStep}
            roomInfo={roomInfo}
            handleRoomInfoChange={handleRoomInfoChange}
            isLoggedIn={isLoggedIn}
            setLoginDialogOpen={setLoginDialogOpen}
            passengers={passengers}
            setPassengers={setPassengers}
            countOfPassengers={passengersCount}
          />
        )}
        {currentStep === 3 && (
          <ThirdStep
            data={rooms}
            hotelData={hotelData?.data}
            setCurrentStep={setCurrentStep}
            roomInfo={roomInfo}
            handleRoomInfoChange={handleRoomInfoChange}
            cards={cards}
            addCard={addCard}
            chosenCard={chosenCard}
            setChosenCard={setChosenCard}
            isLoggedIn={isLoggedIn}
            setLoginDialogOpen={setLoginDialogOpen}
            onBooking={onBooking}
            loading={loading}
            passengers={passengers}
            setPassengers={setPassengers}
            countOfPassengers={passengersCount}
          />
        )}
      </div>
      <div className="order-2">
        <div className="sm:p-7 p-4 rounded-xl bg-white shadow-xl shadow-black/5 flex flex-col">
          {needHotel == "true" && (
            <div className="flex gap-5">
              <Image
                src="/room-image.png"
                alt="room"
                width={120}
                height={120}
                className="rounded-lg size-[120px] object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="sm:text-xl font-bold mb-2">
                  {hotelData?.data?.name}
                </p>
              </div>
            </div>
          )}
          <div className="my-3 p-2 w-full text-start font-bold bg-primary-50 rounded-lg">
            حجزك فى امان بواسطة عمرتي
          </div>
          <p className="font-bold mb-5">
            تفاصيل {needHotel == "yes" ? "الغرف" : "الحجز"} :
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center text-sm">
              <PersonIcon className="h-4 font-medium" />
              <span>
                تم الحجز لي {totalPassengers}{" "}
                {totalPassengers > 1 ? "افراد" : "فرد"}
              </span>
            </div>
            {/* {rooms.map((room: any, index: number) => (
              <div key={index} className='flex gap-2 items-center text-sm'>
                <PeopleIcon className='h-4 font-medium' />
                <span>{room.roomName}</span>
              </div>
            ))} */}
          </div>
          <div className="w-full border my-5" />
          <p className="font-bold font-alexandria mb-5">تفاصيل الأسعار</p>
          <div className="w-full flex justify-between items-center text-[0.875rem] mb-5">
            <p>التكلفه الفرعيه (غير شامل الضريبة)</p>
            <p className="font-bold">{baseCost} ريال</p>
          </div>
          <div className="w-full flex justify-between items-center text-[0.875rem]">
            <p>الضرائب (ضريبة القيمة المضافة 15%)</p>
            <p className="font-bold">{taxAmount} ريال</p>
          </div>
          <div className="w-full border my-4" />
          <div className="w-full flex justify-between items-center">
            <p>الاجمالي شامل الضريبة</p>
            <p className="font-bold">{subtotal} ريال</p>
          </div>
          <div className="w-full border my-5" />
          <p className="font-bold font-alexandria mb-5">الشروط والاحكام</p>
          <div className="w-full flex justify-between items-center text-[0.875rem] mb-5">
            {needHotel == "true" ? (
              <p>دخول الفندق الساعة 2 ظهرا ، والخروج الساعة 12 ظهرا</p>
            ) : (
              <p>الخدمة بدون سكن</p>
            )}
          </div>
          <div className="w-full flex justify-between items-center text-[0.875rem]">
            <p>الحجز غير قابل للتعديل.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StepsContainer;
