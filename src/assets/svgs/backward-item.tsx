import React from "react";

interface IconProps {
  className?: string;
}

const BackwardIcon: React.FC<IconProps> = ({ className = "" }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3801 11.0001V13.6201C17.3801 16.3101 16.3101 17.3801 13.6201 17.3801H11.0001V16.1501C11.0001 13.9001 10.1001 13.0001 7.85011 13.0001H6.62012V10.3801C6.62012 7.69013 7.69011 6.62012 10.3801 6.62012H13.0001V7.85013C13.0001 10.1001 13.9001 11.0001 16.1501 11.0001H17.3801Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackwardIcon;
