import { cn } from "@/global/shadcn/lib/utils";

type Props = {
  step: any;
  stepNumber: number;
  current: number;
  totalSteps: number;
};
export default function StepsProgresssItem({
  step,
  stepNumber,
  current,
  totalSteps,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center",
        totalSteps !== stepNumber ? "grow" : ""
      )}
    >
      <div className="flex flex-col gap-8 items-center justify-center text-center min-w-[190px] py-3 w-fit">
        <div
          className={cn(
            "flex items-center justify-center  text-white rounded-full w-fit",
            stepNumber <= current ? "bg-primary-600" : "bg-[#3A354161]"
          )}
        >
          <div
            className={`w-[60px] h-[60px] ${step.bgColor} rounded-full flex items-center justify-center`}
          >
            {step.icon}
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center text-center h-[60px]">
          <h3 className="text-lg font-semibold mb-1 text-[#23262F]">
            {step.title}
          </h3>
          <p className="text-sm text-[#777E90]">{step.subtitle}</p>
        </div>
      </div>
      {totalSteps !== stepNumber && (
        <div className="relative bg-neutral-100 h-1 w-full">
          {stepNumber < current && (
            <div className="absolute inset-0 bg-primary" />
          )}
          {/* <div className="absolute top-1/2 -translate-y-1/2 start-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-[#5D5D5DDB] md:bg-primary-100"></div>
          {stepNumber <= current && (
            <div className="absolute top-1/2 -translate-y-1/2 start-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-primary-600" />
          )} */}
        </div>
      )}
    </div>
  );
}
//stepslength => number on item on row based on responsive
