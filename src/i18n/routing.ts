import { defineRouting } from "next-intl/routing";

export const localeLabels: Record<string, string> = {
  kk: "Қазақша",
  ru: "Русский",
  en: "English",
};

export const routing = defineRouting({
  locales: ["kk", "ru", "en"],
  defaultLocale: "kk",
  localePrefix: "as-needed",
});

