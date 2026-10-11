export type VideoItem = {
  id: string;
  title: string;
  subtitle: string;
  youtubeId: string;
};

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Геодезический проект",
    subtitle: "Точная съемка местности & инженерные решения",
    youtubeId: "ce7H-kcXLcg",
  },
  {
    id: "v2",
    title: "Топографическая съемка",
    subtitle: "Создание планов & карт для проектных работ",
    youtubeId: "HSjod_yyJRw",
  },
  {
    id: "v3",
    title: "Вынос в натуру",
    subtitle: "Перенос проектных точек на местность",
    youtubeId: "xiOLj1FEuXI",
  },
  {
    id: "v4",
    title: "Инженерные изыскания",
    subtitle: "Подготовка данных для проектирования & строительства",
    youtubeId: "Woh19B6trbE",
  },
];
