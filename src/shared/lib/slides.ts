export type Slide = {
  id: string;
  badge: string;
  title: string;
  subtitle?: string;
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
    title: "Бурение гидрогеологических скважин",
    points: [
      "Бурение под частные нужды (полив, дом)",
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
    title: "Бурение и инженерно-геологические скважины",
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
    title: "Измерения для определения границ участков",
    points: [
      "Разработка карт, планов и схем",
      "Проверка точности расположения объектов",
      "Составление топографических карт и планов",
      "Определение рельефа и объектов",
      "Геодезическое сопровождение строительства",
    ],
    whatsappText: WHATSAPP_DEFAULT,
    phone: PHONE_DISPLAY,
  },
];
