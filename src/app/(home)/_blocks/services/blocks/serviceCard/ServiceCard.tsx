import Image from "next/image";
import React from "react";

type Props = { service: any };

const ServiceCard = ({ service }: Props) => {
  const stateTextArray = service?.title.split(" ");
  const beforeIndexPart = stateTextArray.slice(0, service?.coloredWordIndex[0]);
  const coloredWord = stateTextArray
    .slice(service?.coloredWordIndex[0], service?.coloredWordIndex[1] + 1)
    .join(" ");
  const afterIndexPart = stateTextArray.slice(service?.coloredWordIndex[1] + 1);

  return (
    <div
      key={service.id}
      className={`relative text-center lg:text-start rounded-lg sm:rounded-xl overflow-hidden ${service.className} h-72 rounded-[40px]`}
    >
      <Image
        width={900}
        height={550}
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover rounded-[40px]"
      />
      <div className="absolute bottom-0 start-0 w-full h-28 bg-gradient-to-t from-[#1b1b1b] to-transparent rounded-[40px]" />
      <h3 className="absolute w-full bottom-3 sm:bottom-4 px-1 sm:start-2 text-white text-xl lg:text-[1.75rem] font-extrabold rounded-[40px] ">
        {beforeIndexPart.join(" ")}{" "}
        <span className="text-primary-400">{coloredWord}</span>{" "}
        {afterIndexPart.join(" ")}
      </h3>
    </div>
  );
};

export default ServiceCard;
