import * as React from "react";

const SuccessIconSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="54"
    height="54"
    fill="none"
    viewBox="0 0 54 54"
    {...props}
  >
    <path
      stroke={props?.stroke || "#0ABF7E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M19.125 33.75h15.75m-15.75 6.75H27m15.75-36h-31.5A2.25 2.25 0 0 0 9 6.75v40.5a2.25 2.25 0 0 0 2.25 2.25h31.5A2.25 2.25 0 0 0 45 47.25V6.75a2.25 2.25 0 0 0-2.25-2.25"
      {...props}
    ></path>
    <path
      stroke={props?.stroke || "#0ABF7E"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="m33.75 14.625-9 9-4.5-4.5"
      {...props}
    ></path>
  </svg>
);

export default SuccessIconSVG;
