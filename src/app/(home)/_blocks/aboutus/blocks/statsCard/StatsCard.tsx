import React from "react";

type Props = { state: any };
const StatsCard = ({ state }: Props) => {
  const stateTextArray = state.text.split(" ");
  return (
    <div
      className={`flex flex-col gap-8 justify-center items-center bg-white rounded-lg p-8 text-center shadow-md transition-transform hover:scale-105 w-[370px] shrink-0`}
    >
      <div className="bg-beige-100 bg-[#EBE4D6] rounded-lg w-[100px] h-[100px] flex items-center justify-center mx-auto shrink-0">
        {state.icon}
      </div>
      <h3 className="text-center text-[#b49164] text-[40px] font-extrabold leading-none">
        {state.number}
      </h3>
      <p className="text-[#131416] text-[32px] font-extrabold">
        {stateTextArray[0]}{" "}
        <span className="text-primary-400">{stateTextArray[1]}</span>{" "}
        {stateTextArray.slice(2).join(" ")}
      </p>
    </div>
  );
};

export default StatsCard;
