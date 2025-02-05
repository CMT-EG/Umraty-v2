import { Minus, Plus } from "lucide-react";
import React from "react";

interface AgeGroupCounterProps {
  pilgrims: number;
  setPilgrims: React.Dispatch<React.SetStateAction<number>>;
  increment: (setter: React.Dispatch<React.SetStateAction<number>>) => void;
  decrement: (
    setter: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => void;
}

const AgeGroupCounter: React.FC<AgeGroupCounterProps> = ({
  pilgrims,
  setPilgrims,
  increment,
  decrement,
}) => {
  return (
    <div className="p-4 space-y-4 w-full" dir="rtl">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-base font-bold">عدد المعتمرين</h1>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => increment(setPilgrims)}
            className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3] rounded-full disabled:opacity-30"
          >
            <Plus />
          </button>
          <p className="mx-2 w-3 text-center"> {pilgrims} </p>
          <button
            onClick={() => decrement(setPilgrims, pilgrims)}
            disabled={pilgrims === 0}
            className="h-5 w-5 flex items-center justify-center border-2 font-bold border-[#B1B5C3] text-[#B1B5C3]  rounded-full disabled:opacity-30"
          >
            <Minus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGroupCounter;
