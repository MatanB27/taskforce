export const APP_COLORS = {
  black: "black",
  white: "white",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  neutral: "neutral",
} as const;

export type AppColor = keyof typeof APP_COLORS;
