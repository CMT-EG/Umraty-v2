export const PersonIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="#8B6343"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 10C1.9 10 0 14 0 14V16H16V14C16 14 14.1 10 8 10Z"
        fill="current"
      />
      <path
        d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
        fill="current"
      />
    </svg>
  );
};