import type { IconProps } from "./types";

export const CancelIcon = ({
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
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6L18 18" />
        <path d="M18 6L6 18" />
      </g>
    </svg>
  );
};