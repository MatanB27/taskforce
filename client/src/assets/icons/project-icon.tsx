import type { IconProps } from "./types";

export const ProjectIcon = ({
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
        <path d="M4 7.5C4 6.12 5.12 5 6.5 5H10.25L11.75 7H17.5C18.88 7 20 8.12 20 9.5V17.5C20 18.88 18.88 20 17.5 20H6.5C5.12 20 4 18.88 4 17.5V7.5Z" />
        <path d="M4 10H20" />
      </g>
    </svg>
  );
};
