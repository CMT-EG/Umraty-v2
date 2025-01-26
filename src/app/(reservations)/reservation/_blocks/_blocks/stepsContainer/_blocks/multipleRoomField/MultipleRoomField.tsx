"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/global/shadcn/ui/accordion";
import { IdCard, MapPinHouse } from "lucide-react";
import { useSearchParams } from "next/navigation";
import InputField from "./_blocks/inputField/InputField";
import { PersonIcon } from "@/global/assets/svg/PersonIcon";

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

type handleRoomInfoChangeType = (
  roomId: number,
  travelerIndex: number,
  field: keyof TravelerInfo,
  value: string
) => any;

type Props = {
  data: any[];
  roomInfo: RoomInfo;
  handleRoomInfoChange: handleRoomInfoChangeType;
  passengers: TravelerInfo[];
  setPassengers: React.Dispatch<React.SetStateAction<TravelerInfo[]>>;
  countOfPassengers: any;
};

function MultipleRoomField({
  data,
  roomInfo,
  handleRoomInfoChange,
  passengers,
  setPassengers,
  countOfPassengers,
}: Props) {
  const searchParams = useSearchParams();
  const isHotelRequired = searchParams.get("hotel") == "true";

  const handlePassengerChange = (
    index: number,
    field: keyof TravelerInfo,
    value: string
  ) => {
    setPassengers((prevPassengers) =>
      prevPassengers.map((passenger, i) =>
        i === index ? { ...passenger, [field]: value } : passenger
      )
    );
  };

  console.log("COUNT:", countOfPassengers);

  return (
    <Accordion type="multiple" className="space-y-5" defaultValue={["Room-0"]}>
      {isHotelRequired ? (
        data.map((room, roomIndex) => {
          return (
            <AccordionItem
              key={"Room-" + roomIndex}
              value={"Room-" + roomIndex}
              className="border-b-0"
            >
              <AccordionTrigger className="bg-primary-600 rounded-xl px-5 text-white hover:no-underline">
                {room?.roomName}
              </AccordionTrigger>
              <AccordionContent className="pt-5 flex flex-col gap-6">
                {Array.from({ length: (room as any).passengers_count }).map(
                  (_, travelerIndex) => (
                    <div
                      key={"Room-" + roomIndex + "Traveler-" + travelerIndex}
                    >
                      <p className="font-bold text-base mb-2">
                        {travelerIndex + 1}- بيانات المسافر {travelerIndex + 1}
                      </p>
                      <div className="flex md:flex-row flex-col md:items-center items-stretch gap-2">
                        <div className="flex-grow">
                          <p className="font-bold text-[0.75rem] mb-4 text-black/60">
                            الاسم كامل بالعربية
                          </p>
                          <div className="bg-neutral-50 rounded-xl flex items-center">
                            <div className="size-12 flex items-center justify-center">
                              <PersonIcon className="fill-neutral-400" />
                            </div>
                            <input
                              type="text"
                              placeholder="الاسم كامل"
                              value={
                                roomInfo[room.id][travelerIndex]?.full_name
                              }
                              onChange={(e) =>
                                handleRoomInfoChange(
                                  room.id,
                                  travelerIndex,
                                  "full_name",
                                  e.currentTarget.value
                                )
                              }
                              className="focus-visible:outline-none bg-transparent self-stretch flex-grow"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="font-bold text-[0.75rem] mb-4 text-black/60">
                            الهويه
                          </p>
                          <div className="bg-neutral-50 rounded-xl flex items-center">
                            <div className="size-12 flex items-center justify-center">
                              <IdCard
                                className="text-neutral-400"
                                strokeWidth={1.5}
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="الهويه"
                              value={
                                roomInfo[room.id][travelerIndex]?.national_id
                              }
                              onChange={(e) =>
                                handleRoomInfoChange(
                                  room.id,
                                  travelerIndex,
                                  "national_id",
                                  e.currentTarget.value
                                )
                              }
                              required
                              className="focus-visible:outline-none bg-transparent self-stretch flex-grow placeholder:h-full"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <p className="font-bold text-[0.75rem] mb-4 text-black/60">
                            الجنسيه
                          </p>
                          <div className="bg-neutral-50 rounded-xl flex items-center">
                            <div className="size-12 flex items-center justify-center">
                              <MapPinHouse
                                className="text-neutral-400"
                                strokeWidth={1.5}
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="الجنسيه"
                              value={
                                roomInfo[room.id][travelerIndex]?.nationality
                              }
                              onChange={(e) =>
                                handleRoomInfoChange(
                                  room.id,
                                  travelerIndex,
                                  "nationality",
                                  e.currentTarget.value
                                )
                              }
                              required
                              className="focus-visible:outline-none bg-transparent self-stretch flex-grow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })
      ) : (
        <Accordion
          type="multiple"
          className="space-y-5"
          defaultValue={["PilgrimData"]}
        >
          <AccordionItem value="PilgrimData" className="border-b-0">
            <AccordionTrigger className="bg-primary-600 rounded-xl px-5 text-white hover:no-underline">
              بيانات المعتمرين
            </AccordionTrigger>
            <AccordionContent className="pt-5 flex flex-col gap-6">
              {Array.from({ length: countOfPassengers }).map(
                (_, travelerIndex) => (
                  <div key={`Pilgrim-${travelerIndex}`}>
                    <p className="font-bold text-base mb-2">
                      {travelerIndex + 1}- بيانات المسافر {travelerIndex + 1}
                    </p>
                    <div className="flex md:flex-row flex-col md:items-center items-stretch gap-2">
                      {/* Full Name Field */}
                      <InputField
                        label="الاسم كامل بالعربية"
                        placeholder="الاسم كامل"
                        value={passengers[travelerIndex]?.full_name || ""}
                        onChange={(value) =>
                          handlePassengerChange(
                            travelerIndex,
                            "full_name",
                            value
                          )
                        }
                        icon={<PersonIcon className="fill-neutral-400" />}
                      />

                      {/* National ID Field */}
                      <InputField
                        label="الهويه"
                        placeholder="الهويه"
                        value={passengers[travelerIndex]?.national_id || ""}
                        onChange={(value) =>
                          handlePassengerChange(
                            travelerIndex,
                            "national_id",
                            value
                          )
                        }
                        icon={
                          <IdCard
                            className="text-neutral-400"
                            strokeWidth={1.5}
                          />
                        }
                      />

                      {/* Nationality Field */}
                      <InputField
                        label="الجنسيه"
                        placeholder="الجنسيه"
                        value={passengers[travelerIndex]?.nationality || ""}
                        onChange={(value) =>
                          handlePassengerChange(
                            travelerIndex,
                            "nationality",
                            value
                          )
                        }
                        icon={
                          <MapPinHouse
                            className="text-neutral-400"
                            strokeWidth={1.5}
                          />
                        }
                      />
                    </div>
                  </div>
                )
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </Accordion>
  );
}
export default MultipleRoomField;
