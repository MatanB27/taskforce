import { ICON_COMPONENTS } from "./config";
import type { IconProps } from "./types";

interface GenericIconProps extends IconProps {
  name: keyof typeof ICON_COMPONENTS;
}

export const Icon = ({ name, ...props }: GenericIconProps) => {
  const Component = ICON_COMPONENTS[name];

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};
