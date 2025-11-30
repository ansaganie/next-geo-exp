export type TitleSegment = {
  text: string;
  emphasis?: "primary" | "accent"; // primary = blue, accent = orange
};

export type Slide = {
  id: string;
  badge: string;
  titleSegments: TitleSegment[]; // Structured title with emphasis
  points: string[];
  whatsappText: string;
  phone: string;
};

const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "";
const WHATSAPP_DEFAULT = "Здравствуйте! пишу с сайта GEOEXPLORATION";

export const slides: Slide[] = [
  {
    id: "drilling",
    badge: "Бурение скважин",
    titleSegments: [
      { text: "Бурение " },
      { text: "гидрогеологических", emphasis: "primary" },
      { text: " " },
      { text: "скважин", emphasis: "accent" },
    ],
    points: [
      "Бурение под частные нужды (полив, частный дом)",
      "Бурение геофизических скважин",
      "Колонковое бурение",
      "Шнековое бурение",
      "Ударно-канатное бурение",
    ],
    whatsappText: WHATSAPP_DEFAULT,
    phone: PHONE_DISPLAY,
  },
  {
    id: "geo-survey",
    badge: "Инженерно-геологические изыскания",
    titleSegments: [
      { text: "Бурение", emphasis: "primary" },
      { text: " и " },
      { text: "инженерно-геологические", emphasis: "accent" },
      { text: " скважины" },
    ],
    points: [
      "Отбор проб нарушенной и ненарушенной структуры",
      "Полевые испытания: штамповые, SPT, CPT, DPT",
      "Полный комплекс лабораторных испытаний",
      "Подготовка и выдача технического отчета",
    ],
    whatsappText: WHATSAPP_DEFAULT,
    phone: PHONE_DISPLAY,
  },
  {
    id: "geodesy",
    badge: "Геодезия и топография",
    titleSegments: [
      { text: "Измерения " },
      { text: "для определения", emphasis: "primary" },
      { text: " границ " },
      { text: "земельных участков", emphasis: "accent" },
    ],
    points: [
      "Разработка карт, планов и схем",
      "Проверка точности расположения объектов на местности",
      "Составление топографических карт и планов",
      "Определение рельефа, размещения природных и искусственных объектов",
      "Геодезическое сопровождение строительства",
      "Разметка фундаментов, дорог и других объектов",
      "Контроль точности выполнения проектных работ",
      "Аэрофотосъемка и лазерное сканирование",
      "Геодезическое сопровождение строительства",
      "Съемка для проектирования",
      "Специализированные геодезические исследования",
    ],
    whatsappText: WHATSAPP_DEFAULT,
    phone: PHONE_DISPLAY,
  },
  {
    id: "hydrogeology",
    badge: "Гидрогеология",
    titleSegments: [
      { text: "Получение", emphasis: "primary" },
      { text: " " },
      { text: "разрешительных документов", emphasis: "accent" },
      { text: " на специальное водопользование" },
    ],
    points: [
      "Гидрогеологические исследования",
      "Проектирование водозаборных скважин",
      "Режимные работы по мониторингу подземных вод",
      "Составление отчетов",
      "Переоценка запасов месторождений подземных вод",
      "Прогноз водопритоков",
    ],
    whatsappText: WHATSAPP_DEFAULT,
    phone: PHONE_DISPLAY,
  },
];
