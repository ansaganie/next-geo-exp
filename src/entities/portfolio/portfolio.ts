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
    image: "/assets/images/portfolio-01.jpg",
    category: "topography",
  },
  {
    id: "drill-1",
    title: "Бурение скважин",
    subtitle: "Инженерно-геологические изыскания",
    image: "/assets/images/portfolio-02.jpg",
    category: "drilling",
  },
  {
    id: "gps-1",
    title: "GPS/RTK съёмка",
    subtitle: "Высокоточная привязка",
    image: "/assets/images/portfolio-03.jpg",
    category: "geodesy",
  },
  {
    id: "geo-work-1",
    title: "Геологические работы",
    subtitle: "Отчёты и лаборатория",
    image: "/assets/images/portfolio-04.jpg",
    category: "geology",
  },
];
