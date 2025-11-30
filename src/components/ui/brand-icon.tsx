import type { SVGProps } from "react";

export interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

interface BrandIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  icon: SimpleIconData;
  label?: string; // override accessible label
}

// Accessible brand icon component using simple-icons data.
export function BrandIcon({ icon, label, ...props }: BrandIconProps) {
  return (
    <svg
      role="img"
      aria-label={label || icon.title}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d={icon.path} />
    </svg>
  );
}

export default BrandIcon;
