import React from "react";

type Props = {
  children?: React.ReactNode;
};
export default function AddDecorativeElements({ children }: Props) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 end-1 w-[10px] h-[10px] bg-purple-200 rotate-45" />
        <div className="absolute top-32 end-1/4 w-2 h-2 bg-blue-200 rotate-45" />
        <div className="absolute top-9 start-1/4 w-1 h-1 bg-pink-200 rotate-45" />
        <div className="absolute top-1 start-4 w-2 h-2 bg-yellow-200 rotate-45" />
        <div className="absolute bottom-24 end-1/4 w-2 h-2 bg-blue-200 rotate-45" />
        <div className="absolute bottom-18 start-1/4 w-1 h-1 bg-pink-200 rotate-45" />
        <div className="absolute bottom-20 start-4 w-2 h-2 bg-yellow-200 rotate-45" />
      </div>
      {children}
    </>
  );
}
