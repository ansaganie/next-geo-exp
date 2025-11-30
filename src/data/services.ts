export type Service = {
  id: string;
  title: string;
  icon: string; // relative path under public/assets/images
  description: string;
};

export const services: Service[] = [
  {
    id: "engineering-geodesy",
    title: "Инженерная геодезия",
    icon: "/assets/images/geo-icon-01.png",
    description: "Геодезическое сопровождение строительства и проектирования",
  },
  {
    id: "topo",
    title: "Топографическая съёмка",
    icon: "/assets/images/geo-icon-02.png",
    description: "Создание топопланов для проектных и кадастровых работ",
  },
  {
    id: "stakeout",
    title: "Вынос в натуру",
    icon: "/assets/images/geo-icon-03.png",
    description: "Разметка осей зданий и инженерных сетей",
  },
  {
    id: "geo-support",
    title: "Геодезическое сопровождение",
    icon: "/assets/images/geo-icon-04.png",
    description: "Постоянный контроль точности строительных работ",
  },
  {
    id: "cadastral",
    title: "Кадастровая съёмка",
    icon: "/assets/images/geo-icon-05.png",
    description: "Документы для регистрации земли и объектов",
  },
  {
    id: "facade",
    title: "Съёмка фасадов",
    icon: "/assets/images/geo-icon-06.png",
    description: "Высокоточные измерения зданий и сооружений",
  },
  {
    id: "scan3d",
    title: "3D-сканирование",
    icon: "/assets/images/geo-icon-07.png",
    description: "Цифровые модели местности и зданий",
  },
  {
    id: "landscape",
    title: "Геодезия для ландшафта",
    icon: "/assets/images/geo-icon-09.png",
    description: "Планировка участков и подготовка под благоустройство",
  },
  {
    id: "vertical",
    title: "Контроль вертикальности",
    icon: "/assets/images/geo-icon-10.png",
    description: "Мониторинг конструкций на предмет отклонений",
  },
  {
    id: "geo-survey",
    title: "Инженерно-геологические изыскания",
    icon: "/assets/images/geo-icon-11.png",
    description: "Бурение скважин, лабораторные анализы, отчёты",
  },
  {
    id: "tacheometry",
    title: "Тахеометрическая съёмка",
    icon: "/assets/images/geo-icon-12.png",
    description: "Построение планов и вычисление объёмов",
  },
  {
    id: "asbuilt",
    title: "Исполнительная съёмка",
    icon: "/assets/images/geo-icon-13.png",
    description: "Фактическое расположение построенных объектов",
  },
  {
    id: "core-boxes",
    title: "Керновые ящики PQ/HQ/NQ",
    icon: "/assets/images/geo-icon-14.png",
    description: "Прочные стандартизированные ящики для керна",
  },
  {
    id: "sample-bags",
    title: "Мешки для проб",
    icon: "/assets/images/geo-icon-15.png",
    description: "Пошив мешков для отбора и хранения образцов",
  },
];
