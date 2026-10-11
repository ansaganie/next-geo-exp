import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { serviceCategories } from "@/entities/service/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geoexploration.kz";
  const lastModified = new Date();

  const locales = routing.locales;

  const getUrl = (locale: string, path: string = "") => {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    return `${baseUrl}${prefix}${path}`;
  };

  const getAlternates = (path: string = "") => ({
    languages: Object.fromEntries(
      locales.map((loc) => [loc, getUrl(loc, path)]),
    ),
  });

  const routes: MetadataRoute.Sitemap = [];

  // Home pages
  locales.forEach((locale) => {
    routes.push({
      url: getUrl(locale),
      lastModified,
      changeFrequency: "weekly",
      priority: locale === "kk" ? 1.0 : locale === "ru" ? 0.95 : 0.8,
      alternates: getAlternates(),
    });
  });

  // Service category pages
  serviceCategories.forEach((category) => {
    locales.forEach((locale) => {
      const isDrilling = category === "drilling";
      const priority = isDrilling
        ? locale === "ru"
          ? 0.95
          : 0.9
        : locale === "ru" || locale === "kk"
          ? 0.85
          : 0.75;

      routes.push({
        url: getUrl(locale, `/services/${category}`),
        lastModified,
        changeFrequency: "weekly",
        priority,
        alternates: getAlternates(`/services/${category}`),
      });
    });
  });

  return routes;
}
