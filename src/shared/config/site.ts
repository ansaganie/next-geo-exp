export const siteConfig = {
  name: "GeoExploration",
  url: "https://geoexploration.kz",
  ogImage: "/assets/images/Logo.png",
  geo: {
    region: "KZ-AST",
    placename: "Astana",
    latitude: 51.169392,
    longitude: 71.449074,
    position: "51.169392;71.449074",
    icbm: "51.169392, 71.449074",
  },
  contact: {
    phoneMain: process.env.NEXT_PUBLIC_PHONE_MAIN || "+77755020555",
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+7 (775) 502-05-55",
    email: process.env.NEXT_PUBLIC_EMAIL || "info@geoexploration.kz",
  },
} as const;
