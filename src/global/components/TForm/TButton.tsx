import { Button } from "@/global/shadcn/ui/button";

type TButtonProps = {
  children: React.ReactNode;
  isPending?: boolean;
  [key: string]: any;
};

function TButton({ children, isPending = false, ...props }: TButtonProps) {
  return (
    <Button
      // type="submit"
      className="flex items-center gap-2 w-full"
      disabled={isPending}
      {...props}
    >
      {isPending && <SubmitLoading />}
      {!isPending && children}
    </Button>
  );
}

function SubmitLoading() {
  return (
    <div
      className="w-30 h-6 bg-gray-300 
  bg-[linear-gradient(#25b09b_0_0)_0/0%_no-repeat] 
  animate-load
  [mask-image:radial-gradient(circle_closest-side,#000_94%,#0000)_0_0/25%_100%,linear-gradient(#000_0_0)_center/calc(100%_-_12px)_calc(100%_-_12px)_no-repeat]"
    ></div>
  );
}

export default TButton;
