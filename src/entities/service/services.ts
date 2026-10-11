import type { GeoIconName } from "@/shared/ui/geo-icon";

export type ServiceCategory =
  | "geodesy"
  | "geotechnical"
  | "drilling"
  | "hydrogeology"
  | "equipment";

export type Service = {
  id: string;
  icon: GeoIconName;
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    id: "engineering-geodesy",
    icon: "engineering-geodesy",
    category: "geodesy",
  },
  { id: "topo", icon: "topo", category: "geodesy" },
  {
    id: "stakeout",
    icon: "stakeout",
    category: "geodesy",
  },
  {
    id: "cadastral",
    icon: "cadastral",
    category: "geodesy",
  },
  { id: "facade", icon: "facade", category: "geodesy" },
  { id: "scan3d", icon: "scan3d", category: "geodesy" },
  {
    id: "landscape",
    icon: "landscape",
    category: "geodesy",
  },
  {
    id: "vertical",
    icon: "vertical",
    category: "geodesy",
  },
  {
    id: "geo-survey",
    icon: "geo-survey",
    category: "geotechnical",
  },
  {
    id: "tacheometry",
    icon: "tacheometry",
    category: "geodesy",
  },
  {
    id: "asbuilt",
    icon: "asbuilt",
    category: "geodesy",
  },
  {
    id: "field-supplies",
    icon: "field-supplies",
    category: "equipment",
  },
];
