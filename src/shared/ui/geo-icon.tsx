import type { ReactNode, SVGProps } from "react";

// Monoline geoscience icon set: 24px grid, 1.75 stroke, round caps/joins, currentColor.
// Icons never contain text, letters or digits — the site is trilingual (ru/kk/en).
const geoIcons = {
  // Services
  "core-drilling": (
    <>
      <rect x="7" y="3" width="10" height="14" rx="1" />
      <path d="M10 3v14M14 3v14" />
      <path d="M5 21h14" />
      <path d="M7 17l2.5 4M17 17l-2.5 4M12 17v4" />
    </>
  ),
  "water-well-drilling": (
    <>
      <path d="M4 21h16" />
      <path d="M7 21L11 4h2l4 17" />
      <path d="M8.5 13h7M9.5 8h5" />
      <path d="M12 13v8" />
      <path d="M18 10s-2.5 2.5-2.5 4.5a2.5 2.5 0 0 0 5 0C20.5 12.5 18 10 18 10z" />
    </>
  ),
  "geotechnical-drilling": (
    <>
      <path d="M3 10h18" />
      <path d="M3 15h18" />
      <path d="M3 20h18" />
      <path d="M12 2v18" />
      <path d="M9 5l3-3 3 3" />
      <path d="M10 10v6h4v-6" />
    </>
  ),
  "engineering-geodesy": (
    <>
      <path d="M8 3v6h8V3" />
      <circle cx="12" cy="5.5" r="2" />
      <path d="M7 11h10" />
      <path d="M12 11v11M12 11l-5 11M12 11l5 11" />
    </>
  ),
  topo: (
    <>
      <path d="M3 19c4-2 7-2 11 0s5 1 7-1" />
      <path d="M3 13c3-3 7-3 11 0s5 1 7-2" />
      <path d="M4 7c3-2 6-2 9 0s5 1 7-1" />
      <circle cx="16" cy="5" r="1" />
    </>
  ),
  stakeout: (
    <>
      <circle cx="12" cy="7" r="4.5" />
      <path d="M12 2.5v9" />
      <path d="M7.5 7h9" />
      <path d="M11 11.5l1 9.5 1-9.5" />
      <path d="M6 21h12" />
    </>
  ),
  cadastral: (
    <>
      <path d="M5 5l14-2 1 15-14 3z" />
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="19" cy="3" r="1.5" />
      <circle cx="20" cy="18" r="1.5" />
      <circle cx="6" cy="21" r="1.5" />
    </>
  ),
  facade: (
    <>
      <rect x="4" y="6" width="12" height="15" />
      <path d="M8 10h4M8 14h4M8 18h4" />
      <path d="M19 6v15M17 6h4M17 21h4" />
    </>
  ),
  scan3d: (
    <>
      <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
      <path d="M12 7l5 3v5l-5 3-5-3v-5z" />
      <path d="M12 13v5M7 10l5 3 5-3" />
    </>
  ),
  landscape: (
    <>
      <path d="M2 20l20-8" />
      <path d="M11 3.5l-3.5 5.5h7z" />
      <path d="M11 7l-4.5 6h9z" />
      <path d="M11 13v3.6" />
    </>
  ),
  vertical: (
    <>
      <path d="M3 21h11V4H3z" />
      <path d="M6.5 8h4M6.5 12h4M6.5 16h4" />
      <path d="M16 4h4M20 4v11" />
      <path d="M18.5 15h3L20 19z" />
    </>
  ),
  "geo-survey": (
    <>
      <path d="M12 6l9 4-9 4-9-4z" />
      <path d="M3 14l9 4 9-4" />
      <path d="M3 18l9 4 9-4" />
      <path d="M17 2v8.5" />
      <path d="M15.5 8.5l1.5 2.5 1.5-2.5" />
    </>
  ),
  tacheometry: (
    <>
      <rect x="8" y="3" width="8" height="7" rx="1" />
      <path d="M6 6.5h2M16 6.5h2" />
      <circle cx="12" cy="6.5" r="1.5" />
      <path d="M12 10v12M12 13l-5 9M12 13l5 9" />
    </>
  ),
  asbuilt: (
    <>
      <path d="M4 4h11l5 5v11H4z" />
      <path d="M15 4v5h5" />
      <path d="M8 14l2.5 2.5 5.5-5.5" />
    </>
  ),
  "field-supplies": (
    <>
      <rect x="3" y="6" width="18" height="13" rx="1" />
      <path d="M3 12.5h18" />
      <rect x="5" y="8" width="5" height="3" rx="0.75" />
      <rect x="12" y="8" width="7" height="3" rx="0.75" />
      <rect x="5" y="14.5" width="8" height="3" rx="0.75" />
      <rect x="15" y="14.5" width="4" height="3" rx="0.75" />
    </>
  ),

  // Service Categories
  "category-geodesy": (
    <>
      <circle cx="12" cy="7" r="4" />
      <path d="M12 3v8M8 7h8" />
      <path d="M12 11v11M12 11l-5 11M12 11l5 11" />
    </>
  ),
  // Geologist's hammer — paths from Lucide "pickaxe" (ISC licence).
  "category-geotechnical": (
    <>
      <path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" />
      <path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" />
      <path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" />
      <path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" />
    </>
  ),
  "category-drilling": (
    <>
      <path d="M3 21h18" />
      <path d="M5 21L8 3h2l3 18" />
      <path d="M6.5 12h5M7.3 7.5h3.4" />
      <path d="M6.5 12l4.2-4.5" />
      <path d="M18 11s-3 3.3-3 5.5a3 3 0 0 0 6 0C21 14.3 18 11 18 11z" />
    </>
  ),
  "category-hydrogeology": (
    <>
      <path d="M12 2.5s-4 4.5-4 7a4 4 0 0 0 8 0c0-2.5-4-7-4-7z" />
      <path d="M3 16c3-1.5 6-1.5 9 0s6 1.5 9 0" />
      <path d="M3 20c3-1.5 6-1.5 9 0s6 1.5 9 0" />
    </>
  ),
  "category-equipment": (
    <>
      <path d="M9.5 8C6.5 10 5 13 5 16a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5c0-3-1.5-6-4.5-8" />
      <path d="M9 8h6" />
      <path d="M10 8L8.5 4M14 8l1.5-4M12 8V4" />
      <rect x="9.5" y="13" width="5" height="4" rx="0.5" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type GeoIconName = keyof typeof geoIcons;

interface GeoIconProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  name: GeoIconName;
}

// Decorative by default; pass aria-label (and aria-hidden={false}) when the icon stands alone.
export function GeoIcon({ name, ...props }: GeoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {geoIcons[name]}
    </svg>
  );
}
