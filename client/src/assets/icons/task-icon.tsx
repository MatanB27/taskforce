import type { IconProps } from "./types";

export const TaskIcon = ({
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
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="M9 3.5V6.5" />
        <path d="M15 3.5V6.5" />
        <path d="M4 9.5H20" />
        <path d="M8 13H12" />
        <path d="M8 16H11" />
        <path d="M15.25 14.25L16.5 15.5L18.75 13.25" />
      </g>
    </svg>
  );
};
