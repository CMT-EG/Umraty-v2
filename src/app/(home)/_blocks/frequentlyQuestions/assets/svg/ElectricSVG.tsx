import * as React from "react";

const ElectricSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="17"
    fill="none"
    viewBox="0 0 12 17"
    {...props}
  >
    <path
      fill="#777E91"
      d="m.763 9.753 6.238-8.637c.412-.571 1.314-.195 1.198.5L7.333 6.81h3.363c.544 0 .859.616.54 1.057L5 16.503c-.412.572-1.314.195-1.198-.5l.866-5.193H1.304a.667.667 0 0 1-.54-1.057"
      {...props}
    ></path>
  </svg>
);

export default ElectricSVG;
