export type ServiceCategory =
  | "geodesy"
  | "geotechnical"
  | "drilling"
  | "hydrogeology"
  | "equipment";

export type Service = {
  id: string;
  icon: string; // relative path under public/assets/images
  category: ServiceCategory;
};

export const services: Service[] = [
  {
    id: "engineering-geodesy",
    icon: "/assets/images/geo-icon-01.png",
    category: "geodesy",
  },
  { id: "topo", icon: "/assets/images/geo-icon-02.png", category: "geodesy" },
  {
    id: "stakeout",
    icon: "/assets/images/geo-icon-03.png",
    category: "geodesy",
  },
  {
    id: "cadastral",
    icon: "/assets/images/geo-icon-05.png",
    category: "geodesy",
  },
  { id: "facade", icon: "/assets/images/geo-icon-06.png", category: "geodesy" },
  { id: "scan3d", icon: "/assets/images/geo-icon-07.png", category: "geodesy" },
  {
    id: "landscape",
    icon: "/assets/images/geo-icon-09.png",
    category: "geodesy",
  },
  {
    id: "vertical",
    icon: "/assets/images/geo-icon-10.png",
    category: "geodesy",
  },
  {
    id: "geo-survey",
    icon: "/assets/images/geo-icon-11.png",
    category: "geotechnical",
  },
  {
    id: "tacheometry",
    icon: "/assets/images/geo-icon-12.png",
    category: "geodesy",
  },
  {
    id: "asbuilt",
    icon: "/assets/images/geo-icon-13.png",
    category: "geodesy",
  },
  {
    id: "field-supplies",
    icon: "/assets/images/geo-icon-14.png",
    category: "equipment",
  },
];
