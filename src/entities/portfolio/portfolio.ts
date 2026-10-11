export type PortfolioItem = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "topo-1",
    title: "Топографическая съёмка",
    subtitle: "Кадастр, проектирование",
    image: "/assets/images/portfolio-01.webp",
    category: "topography",
  },
  {
    id: "drill-1",
    title: "Бурение скважин",
    subtitle: "Инженерно-геологические изыскания",
    image: "/assets/images/portfolio-02.webp",
    category: "drilling",
  },
  {
    id: "gps-1",
    title: "GPS/RTK съёмка",
    subtitle: "Высокоточная привязка",
    image: "/assets/images/portfolio-03.webp",
    category: "geodesy",
  },
  {
    id: "geo-work-1",
    title: "Геологические работы",
    subtitle: "Отчёты и лаборатория",
    image: "/assets/images/portfolio-04.webp",
    category: "geology",
  },
];
