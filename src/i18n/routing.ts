import { defineRouting } from "next-intl/routing";

export const localeLabels: Record<string, string> = {
  ru: "Русский",
  kk: "Қазақша",
  en: "English",
};

export const routing = defineRouting({
  locales: ["ru", "kk", "en"],
  defaultLocale: "ru",
  localePrefix: "as-needed",
});
