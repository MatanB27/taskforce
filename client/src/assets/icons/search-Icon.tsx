import type { IconProps } from "./types";

export const SearchIcon = ({
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
        <circle cx="11" cy="11" r="6" />
        <path d="M16 16L21 21" />
      </g>
    </svg>
  );
};

