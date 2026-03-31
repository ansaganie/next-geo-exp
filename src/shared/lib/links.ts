import { siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { Phone, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

export type NavLink = {
  /** i18n key resolved via `nav.<key>` namespace */
  labelKey: string;
  href: string;
  children?: NavLink[];
};

export const navLinks: NavLink[] = [
  {
    labelKey: "services",
    href: "#services",
    children: [
      { labelKey: "geodesy", href: "/services/geodesy" },
      { labelKey: "geotechnical", href: "/services/geotechnical" },
      { labelKey: "drilling", href: "/services/drilling" },
      { labelKey: "hydrogeology", href: "/services/hydrogeology" },
      { labelKey: "equipment", href: "/services/equipment" },
    ],
  },
  { labelKey: "portfolio", href: "#portfolio" },
  { labelKey: "about", href: "#about" },
  { labelKey: "contacts", href: "#contact-us" },
];

export const serviceLinks: NavLink[] = [
  { labelKey: "geodesy", href: "/services/geodesy" },
  { labelKey: "geotechnical", href: "/services/geotechnical" },
  { labelKey: "drilling", href: "/services/drilling" },
  { labelKey: "hydrogeology", href: "/services/hydrogeology" },
  { labelKey: "equipment", href: "/services/equipment" },
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
  labelKey: "submitRequest",
  href: "#contact-us",
};
