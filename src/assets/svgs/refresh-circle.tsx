import React from "react";

type RefreshIconProps = {
  className?: string;
};

const RefreshIcon: React.FC<RefreshIconProps> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className} // Allows className from parent components
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor" // Makes the stroke color dynamic
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.01001 14.51C8.19001 14.81 8.41 15.09 8.66 15.34C10.5 17.18 13.49 17.18 15.34 15.34C16.09 14.59 16.52 13.64 16.66 12.67"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33997 11.33C7.47997 10.35 7.90997 9.40997 8.65997 8.65997C10.5 6.81997 13.49 6.81997 15.34 8.65997C15.6 8.91997 15.81 9.19999 15.99 9.48999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.81995 17.18V14.51H10.4899"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.18 6.82001V9.48999H13.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RefreshIcon;
