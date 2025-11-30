import { siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { Phone, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Видео", href: "#video" }, // existing id
  { label: "Контакты", href: "#contact-us" }, // existing id
];

export const serviceLinks: NavLink[] = [
  { label: "Бурение скважин на воду", href: "#services" },
  { label: "Инженерно-геологические изыскания", href: "#services" },
  { label: "Геодезия и топография", href: "#services" },
  { label: "Вынос в натуру", href: "#services" },
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
