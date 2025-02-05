import React from "react";
import StepsProgresssItem from "./StepsProgresssItem/StepsProgresssItem";

export default function StepsProgressItems({ stepsData, currentStep }: any) {
  return (
    <div className="flex items-start mx-auto overflow-scroll no-scrollbar w-full">
      {stepsData?.map((step: any, index: number) => (
        <StepsProgresssItem
          key={index}
          step={step}
          stepNumber={index + 1}
          current={currentStep}
          totalSteps={stepsData?.length}
        />
      ))}
    </div>
  );
}
