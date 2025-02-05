import { cn } from "@/global/shadcn/lib/utils";
import AddDecorativeElements from "./_blocks/decorativeElements/DecorativeElements";

type Props = {
  step: any;
  index: number;
  stepslength: number;
};
export default function BookingStepsItem({ step, index, stepslength }: Props) {
  return (
    <div className="relative flex flex-col items-center text-center flex-1">
      <AddDecorativeElements>
        <div className="flex flex-col gap-8 items-center text-center flex-1">
          <div className="relative mb-6">
            <div
              className={cn(
                "flex items-center justify-center bg-white w-[128px] h-[160px] rounded-[24px] shadow-3d transform",
                index === 0 || index === stepslength - 1
                  ? "rotate-[15deg]"
                  : "-rotate-[15deg]"
              )}
            >
              <div
                className={`w-12 h-12 ${step.bgColor} rounded-full flex items-center justify-center`}
              >
                {step.icon}
              </div>
            </div>
            <svg
              width="178"
              height="184"
              viewBox="0 0 180 186"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1 -start-5 -z-10"
            >
              <path
                d="M139.511 15.2684C154.099 24.4575 166.298 37.2724 173.314 53.021C180.203 68.4876 180.032 85.6775 178.383 102.529C176.701 119.716 173.715 137.043 163.712 151.12C153.279 165.802 138.545 177.564 121.322 182.833C104.191 188.074 86.0329 184.829 68.7325 180.178C51.4199 175.523 33.3784 169.834 21.8668 156.091C10.5189 142.543 10.0626 123.738 6.89454 106.352C3.67499 88.6835 -2.67134 70.6635 3.20807 53.6936C9.25216 36.2483 23.415 22.6517 39.2071 13.0874C54.5472 3.79678 72.5474 0.449895 90.4773 0.839773C107.863 1.21782 124.798 5.99972 139.511 15.2684Z"
                fill="#F4F5F6"
              />
            </svg>
            {/* Dotted Connector Line */}
            {/* {disappearDashLine && ( */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={`${530 - 56 * (stepslength - 2)}`}
              height="137"
              fill="none"
              viewBox={`0 0 ${530 - 56 * (stepslength - 2)} 137`}
              className={cn(
                index !== stepslength - 1 ? "block" : "hidden",
                index % 2 !== 0 ? "sm:block" : "sm:hidden",
                index % 3 !== 0 ? "md:block" : "md:hidden",
                index !== 0 ? "lg:block" : "lg:hidden",
                "absolute rotate-90 sm:rotate-0 -end-28 sm:top-1 sm:end-5 -z-20"
              )}
            >
              <path
                stroke="#E6E8EC"
                strokeDasharray="4 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1134.22 4.648C1114.25 24.818 965.922 136.95 814.191 135.7c-140.893-1.162-199.457-172.606-458.616-75.717C127.869 145.11 73.298 52.394 1.8 1.802"
              ></path>
            </svg>
            {/* )} */}
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-semibold mb-1 text-[#23262F] min-w-[290px]">
              {step.title}
            </h3>
            <p className="text-sm text-[#777E90]">{step.subtitle}</p>
          </div>
        </div>
      </AddDecorativeElements>
    </div>
  );
}
//stepslength => number on item on row based on responsive
