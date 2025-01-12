"use client";

import { DatePicker } from "@/main/common/components/datePicker/DatePicker";
import useHero from "./hooks/useHero";
import { Button } from "@/main/common/shadcn/ui/button";

function Hero() {
  const {
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
    takeoffs
  } = useHero();
  return (
    <section className="bg-hero-background bg-bottom bg-cover mb-[9rem]">
      <div className="relative text-white w-full px-5 sm:px-20 pt-40 md:pt-60 pb-24 md:pb-48 bg-gradient-to-b from-black to-black/50">
        <div className="flex flex-col md:items-start items-center md:text-start text-center max-w-[639px]">
          <div className="bg-[#404449] rounded-full px-8 py-2.5 font-bold sm:text-base text-[0.75rem] mb-4">
            مرحباً بك في منصة عمرتى! 👋
          </div>
          <h1 className="sm:text-[2.5rem] text-[1.563rem]# leading-[154%] font-extrabold mb-3">
            {settings?.first_text}
          </h1>
          <h3
            className="sm:text-2xl text-[0.75rem]# leading-[175%] sm:mb-14 mb-2"
            style={{
              lineHeight: "2rem",
            }}
          >
            {settings?.second_text}
          </h3>
          <h3
            className="sm:text-4xl text-[0.75rem]# leading-[175%] sm:mb-14 mb-6 font-bold"
            style={{
              lineHeight: "1rem",
            }}
          >
            {settings?.bold_text}
          </h3>
          <Button
            size="lg"
            className="rounded-full mb-[50px]"
            onClick={() =>
              window.open("https://maps.app.goo.gl/c2KHbZpKKF6VN32q9", "_blank")
            }
          >
            اللوكيشن تبعنا
          </Button>
        </div>
        <div className="absolute bottom-0 translate-y-2/3 md:inset-x-[5.5rem] inset-x-5 flex flex-col gap-4 bg-white rounded-[1.25rem] p-8 shadow-lg">
          {hotelRequired === "yes" ? (
            <div className="flex flex-wrap gap-4">
              {/* Hotel Required Fields */}
              <DatePicker
                className="flex-grow"
                placeholder="ادخل تاريخ الذهاب"
                date={startDate}
                onChange={(date) =>
                  handleDateChange(
                    date,
                    setStartDate,
                    setArrivalTime,
                    setAvailableArrivalTimes,
                    "go",
                    arrivalLocation
                  )
                }
              />

              <DatePicker
                className="flex-grow"
                placeholder="ادخل تاريخ المغادرة"
                date={finishDate}
                onChange={(date) =>
                  handleDateChange(
                    date,
                    setFinishDate,
                    setDepartureTime,
                    setAvailableDepartureTimes,
                    "return",
                    destination
                  )
                }
              />
              <select
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="">موعد الذهاب</option>
                {availableArrivalTimes.map((time: any) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="">موعد المغادرة</option>
                {availableDepartureTimes.map((time: any) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="">عدد المعتمرين</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex flex-wrap gap-4">
              {/* Non-Hotel Required Fields */}
              <DatePicker
                className="flex-grow"
                placeholder="تاريخ الذهاب"
                date={startDate}
                onChange={(date) =>
                  handleDateChange(
                    date,
                    setStartDate,
                    setArrivalTime,
                    setAvailableArrivalTimes,
                    "go",
                    arrivalLocation
                  )
                }
              />
              <DatePicker
                className="flex-grow"
                placeholder="تاريخ العودة"
                date={finishDate}
                onChange={(date) =>
                  handleDateChange(
                    date,
                    setFinishDate,
                    setDepartureTime,
                    setAvailableDepartureTimes,
                    "return",
                    destination
                  )
                }
              />

              <select
                value={arrivalLocation}
                onChange={(e) =>
                  handleArrival(
                    startDate,
                    setStartDate,
                    setArrivalTime,
                    setAvailableArrivalTimes,
                    "go",
                    e.target.value,
                    e.target.value
                  )
                }
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="" disabled>
                  اختر نقطة الانطلاق
                </option>
                {takeoffs?.map((takeoff: any) => (
                  <option key={takeoff.name} value={takeoff.name}>
                    {takeoff.name}
                  </option>
                ))}
              </select>
              <select
                value={destination}
                onChange={(e) =>
                  handleDestination(
                    finishDate,
                    setFinishDate,
                    setDepartureTime,
                    setAvailableDepartureTimes,
                    "return",
                    e.target.value,
                    e.target.value
                  )
                }
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="" disabled>
                  اختر وجهتك
                </option>
                {destinations?.map((dest: any) => (
                  <option key={dest.name} value={dest.name}>
                    {dest.name}
                  </option>
                ))}
              </select>
              <select
                value={arrivalTime}
                onChange={(e) => setArrivalTime(e.target.value)}
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="">موعد الذهاب</option>
                {availableArrivalTimes.map((time: any) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <select
                value={departureTime}
                onChange={(e) => setDepartureTime(e.target.value)}
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
              >
                <option value="">موعد العودة</option>
                {availableDepartureTimes.map((time: any) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={passengers}
                onChange={(e) =>
                  setPassengers(
                    Math.min(10, Math.max(1, Number(e.target.value)))
                  )
                } // Ensure value is within range
                className="bg-neutral-50 rounded-xl p-3 flex-grow text-black"
                placeholder="عدد المعتمرين، الحد الأقصي 10 معتمرين"
                min="1" // Minimum value
                max="10" // Maximum value
              />
            </div>
          )}

          <Button
            size="lg"
            className="w-full  font-bold text-base"
            onClick={onSearch}
          >
            ابحث
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
