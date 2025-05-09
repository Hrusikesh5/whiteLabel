import React from "react";

interface CustomIconProps {
  className?: string;
}

const SelectedRegionIcon: React.FC<CustomIconProps> = ({ className }) => {
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
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill="white"
      />
      <path
        d="M11.9999 15.12C13.723 15.12 15.1199 13.7231 15.1199 12C15.1199 10.2769 13.723 8.88 11.9999 8.88C10.2768 8.88 8.87988 10.2769 8.87988 12C8.87988 13.7231 10.2768 15.12 11.9999 15.12Z"
        fill="white"
      />
      <path
        d="M12.75 2V4.04H12.74C12.5 4.01 12.25 4 12 4C11.75 4 11.5 4.01 11.26 4.04H11.25V2C11.25 1.59 11.59 1.25 12 1.25C12.41 1.25 12.75 1.59 12.75 2Z"
        fill="white"
      />
      <path
        d="M4 12C4 12.25 4.01 12.51 4.04 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H4.04C4.01 11.49 4 11.75 4 12Z"
        fill="white"
      />
      <path
        d="M12.75 19.96V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V19.96H11.26C11.5 19.99 11.75 20 12 20C12.25 20 12.5 19.99 12.74 19.96H12.75Z"
        fill="white"
      />
      <path
        d="M22.75 12C22.75 12.41 22.41 12.75 22 12.75H19.96C19.99 12.51 20 12.25 20 12C20 11.75 19.99 11.49 19.96 11.25H22C22.41 11.25 22.75 11.59 22.75 12Z"
        fill="white"
      />
    </svg>
  );
};
export default SelectedRegionIcon;
