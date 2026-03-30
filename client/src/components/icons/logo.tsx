import * as React from "react"

import { cn } from "@/lib/utils"

type LogoProps = Omit<React.ComponentPropsWithoutRef<"svg">, "children"> & {
  title?: string
}

export function Logo({ className, title = "Taskforce", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className={cn("size-5 text-foreground", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 8.5C7 6.01472 9.01472 4 11.5 4H16.5C18.9853 4 21 6.01472 21 8.5V13.5C21 15.9853 18.9853 18 16.5 18H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 10.5C3 8.01472 5.01472 6 7.5 6H12.5C14.9853 6 17 8.01472 17 10.5V15.5C17 17.9853 14.9853 20 12.5 20H7.5C5.01472 20 3 17.9853 3 15.5V10.5Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 12H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

