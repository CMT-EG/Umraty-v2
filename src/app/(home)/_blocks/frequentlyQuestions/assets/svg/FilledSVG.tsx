import * as React from "react";

const FilledSVG = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      fill="#777E91"
      d="M6 12.81a6 6 0 0 0 5.993-6.296.35.35 0 0 1 .342-.37h.998c.737 0 1.334.596 1.334 1.332v6.667c0 .736-.597 1.333-1.334 1.333H6.667a1.333 1.333 0 0 1-1.334-1.333v-.998a.35.35 0 0 1 .371-.342q.147.006.296.007"
      {...props}
    ></path>
    <path
      fill="#777E91"
      d="M10.667 6.81a4.667 4.667 0 1 1-9.334 0 4.667 4.667 0 0 1 9.334 0"
      {...props}
    ></path>
  </svg>
);

export default FilledSVG;
