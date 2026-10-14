export type SlideConfig = {
  id: string;
  image: string;
};

export type Slide = SlideConfig & {
  title: string;
  points: string[];
};

export const slides: SlideConfig[] = [
  {
    id: "drilling",
    image: "/assets/images/portfolio-02.webp",
  },
  {
    id: "geo-survey",
    image: "/assets/images/portfolio-01.webp",
  },
  {
    id: "geodesy",
    image: "/assets/images/portfolio-03.webp",
  },
  {
    id: "hydrogeology",
    image: "/assets/images/portfolio-04.webp",
  },
];
