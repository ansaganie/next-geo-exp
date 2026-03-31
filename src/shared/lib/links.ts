import { siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { Phone, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type NavLink = { label: string; href: string; children?: NavLink[] };

export const navLinks: NavLink[] = [
  {
    label: "Услуги",
    href: "#services",
    children: [
      { label: "Геодезия и топография", href: "/services/geodesy" },
      {
        label: "Инженерно-геологические изыскания",
        href: "/services/geotechnical",
      },
      { label: "Бурение скважин", href: "/services/drilling" },
      { label: "Гидрогеология", href: "/services/hydrogeology" },
      { label: "Оборудование и материалы", href: "/services/equipment" },
    ],
  },
  { label: "Портфолио", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact-us" },
];

export const serviceLinks: NavLink[] = [
  { label: "Геодезия и топография", href: "/services/geodesy" },
  {
    label: "Инженерно-геологические изыскания",
    href: "/services/geotechnical",
  },
  { label: "Бурение скважин", href: "/services/drilling" },
  { label: "Гидрогеология", href: "/services/hydrogeology" },
  { label: "Оборудование и материалы", href: "/services/equipment" },
];

export type ContactLink = {
  label: string;
  href: string;
  aria: string;
  external?: boolean;
  brand?: SimpleIcon;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export const contactLinks: ContactLink[] = [
  {
    label: "WhatsApp",
    href: process.env.NEXT_PUBLIC_WHATSAPP_BASE || "",
    external: true,
    brand: siWhatsapp,
    aria: "Открыть чат WhatsApp",
  },
  {
    label: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Телефон",
    href: `tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`,
    icon: Phone,
    aria: `Позвонить по номеру ${
      process.env.NEXT_PUBLIC_PHONE_DISPLAY || "основной телефон"
    }`,
  },
  {
    label: process.env.NEXT_PUBLIC_EMAIL || "Email",
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    icon: Mail,
    aria: `Написать на email ${process.env.NEXT_PUBLIC_EMAIL}`,
  },
  {
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    external: true,
    brand: siInstagram,
    aria: "Перейти в профиль Instagram",
  },
];

export const headerCta = {
  label: "Оставить заявку",
  href: "#contact-us",
};
