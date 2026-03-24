import type { IconProps } from "./types";

export const Logo = ({
  size = 36,
  color = "#002D62",
  className = "",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill="none"
    >
      <g
        stroke={color}
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M100 140H300" />
        <path d="M200 140V300L320 180" />
        <path d="M200 140V300L80 180" />
        <path d="M160 220H240" />
      </g>
    </svg>
  );
};
