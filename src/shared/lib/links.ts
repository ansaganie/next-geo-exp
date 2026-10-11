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
    href: "/#services",
    children: [
      { labelKey: "geodesy", href: "/services/geodesy" },
      { labelKey: "geotechnical", href: "/services/geotechnical" },
      { labelKey: "drilling", href: "/services/drilling" },
      { labelKey: "hydrogeology", href: "/services/hydrogeology" },
      { labelKey: "equipment", href: "/services/equipment" },
    ],
  },
  { labelKey: "portfolio", href: "/#portfolio" },
  { labelKey: "about", href: "/#about" },
  { labelKey: "contacts", href: "/#contact-us" },
];

export const serviceLinks: NavLink[] = [
  { labelKey: "geodesy", href: "/services/geodesy" },
  { labelKey: "geotechnical", href: "/services/geotechnical" },
  { labelKey: "drilling", href: "/services/drilling" },
  { labelKey: "hydrogeology", href: "/services/hydrogeology" },
  { labelKey: "equipment", href: "/services/equipment" },
];

export type ContactLink = {
  id?: "whatsapp" | "phone" | "email" | "instagram";
  label: string;
  href: string;
  aria: string;
  external?: boolean;
  brand?: SimpleIcon;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

const defaultPhoneMain = "+77755020555";
const defaultPhoneDisplay = "+7 (775) 502-05-55";
const defaultEmail = "info@geoexploration.kz";

export const phoneMain = process.env.NEXT_PUBLIC_PHONE_MAIN || defaultPhoneMain;
export const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
  process.env.NEXT_PUBLIC_PHONE_MAIN ||
  defaultPhoneDisplay;
export const email = process.env.NEXT_PUBLIC_EMAIL || defaultEmail;
export const whatsappHref =
  process.env.NEXT_PUBLIC_WHATSAPP_BASE ||
  `https://wa.me/${phoneMain.replace(/\D/g, "")}`;

export const contactLinks: ContactLink[] = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: whatsappHref,
    external: true,
    brand: siWhatsapp,
    aria: "Открыть чат WhatsApp",
  },
  {
    id: "phone",
    label: phoneDisplay,
    href: `tel:${phoneMain}`,
    icon: Phone,
    aria: `Позвонить по номеру ${phoneDisplay}`,
  },
  {
    id: "email",
    label: email,
    href: `mailto:${email}`,
    icon: Mail,
    aria: `Написать на email ${email}`,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    external: true,
    brand: siInstagram,
    aria: "Перейти в профиль Instagram",
  },
];

export const headerCta = {
  labelKey: "submitRequest",
  href: "/#contact-us",
};
