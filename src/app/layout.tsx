import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GeoExploration – Geological & Engineering Services",
  description:
    "Professional engineering-geological surveys, water well drilling, geodesy, and topographic mapping across Kazakhstan.",
  metadataBase: new URL("https://geoexploration.kz"),
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}


