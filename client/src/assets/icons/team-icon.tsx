import type { IconProps } from "./types";

export const TeamIcon = ({
  size = 24,
  color = "black",
  className = "",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <g
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8.5" r="2.5" />
        <circle cx="16.5" cy="9.5" r="2" />
        <path d="M4.5 18C4.96 15.97 6.78 14.5 9 14.5C11.22 14.5 13.04 15.97 13.5 18" />
        <path d="M14.5 17.5C14.83 16.11 16.06 15.1 17.5 15.1C18.94 15.1 20.17 16.11 20.5 17.5" />
      </g>
    </svg>
  );
};
