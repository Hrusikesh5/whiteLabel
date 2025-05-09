import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedManageBookingIcon: React.FC<CustomIconProps> = ({
  className,
}) => {
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
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="white"
      />
      <path
        d="M18.3101 8.87C18.3101 9.28 17.9801 9.62 17.5601 9.62H12.3101C11.9001 9.62 11.5601 9.28 11.5601 8.87C11.5601 8.46 11.9001 8.12 12.3101 8.12H17.5601C17.9801 8.12 18.3101 8.46 18.3101 8.87Z"
        fill="white"
      />
      <path
        d="M9.97006 7.9L7.72006 10.15C7.57006 10.3 7.38006 10.37 7.19006 10.37C7.00006 10.37 6.80006 10.3 6.66006 10.15L5.91006 9.4C5.61006 9.11 5.61006 8.63 5.91006 8.34C6.20006 8.05 6.67006 8.05 6.97006 8.34L7.19006 8.56L8.91006 6.84C9.20006 6.55 9.67006 6.55 9.97006 6.84C10.2601 7.13 10.2601 7.61 9.97006 7.9Z"
        fill="white"
      />
      <path
        d="M18.3101 15.87C18.3101 16.28 17.9801 16.62 17.5601 16.62H12.3101C11.9001 16.62 11.5601 16.28 11.5601 15.87C11.5601 15.46 11.9001 15.12 12.3101 15.12H17.5601C17.9801 15.12 18.3101 15.46 18.3101 15.87Z"
        fill="white"
      />
      <path
        d="M9.97006 14.9L7.72006 17.15C7.57006 17.3 7.38006 17.37 7.19006 17.37C7.00006 17.37 6.80006 17.3 6.66006 17.15L5.91006 16.4C5.61006 16.11 5.61006 15.63 5.91006 15.34C6.20006 15.05 6.67006 15.05 6.97006 15.34L7.19006 15.56L8.91006 13.84C9.20006 13.55 9.67006 13.55 9.97006 13.84C10.2601 14.13 10.2601 14.61 9.97006 14.9Z"
        fill="white"
      />
    </svg>
  );
};
export default SelectedManageBookingIcon;
