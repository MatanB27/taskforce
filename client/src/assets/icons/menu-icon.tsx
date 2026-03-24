import type { IconProps } from "./types";

export const MenuIcon = ({
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
        <path d="M4 7H20" />
        <path d="M4 12H20" />
        <path d="M4 17H20" />
      </g>
    </svg>
  );
};
