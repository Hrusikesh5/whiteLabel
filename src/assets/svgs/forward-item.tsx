import React from "react";

interface CustomIconProps {
  className?: string;
}

const ForwardIcon: React.FC<CustomIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.3801 10.3799V13.6099C17.3801 16.2999 16.3001 17.3799 13.6101 17.3799H10.3801C7.69011 17.3799 6.61011 16.2999 6.61011 13.6099V10.3799C6.61011 7.68988 7.69011 6.60986 10.3801 6.60986H13.6101C16.3101 6.61986 17.3801 7.68988 17.3801 10.3799Z"
        stroke="#606060"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 5.76999V9C22 11.69 20.92 12.77 18.23 12.77H17.38V10.39C17.38 7.70001 16.3 6.62 13.61 6.62H11.23V5.76999C11.23 3.07999 12.31 2 15 2H18.23C20.92 2 22 3.07999 22 5.76999Z"
        stroke="#606060"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18.23V15C2 12.31 3.08 11.23 5.77 11.23H6.62V13.61C6.62 16.3 7.7 17.38 10.39 17.38H12.77V18.23C12.77 20.92 11.69 22 9 22H5.77C3.08 22 2 20.92 2 18.23Z"
        stroke="#606060"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ForwardIcon;
