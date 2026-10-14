import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { serviceCategories } from "@/entities/service/services";
import { getCanonicalPath, getLanguageAlternates } from "@/shared/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const locales = routing.locales;

  const routes: MetadataRoute.Sitemap = [];

  // Home pages
  locales.forEach((locale) => {
    routes.push({
      url: getCanonicalPath(locale),
      lastModified,
      changeFrequency: "weekly",
      priority: locale === "kk" ? 1.0 : locale === "ru" ? 0.95 : 0.8,
      alternates: {
        languages: getLanguageAlternates(),
      },
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

      const path = `/services/${category}`;
      routes.push({
        url: getCanonicalPath(locale, path),
        lastModified,
        changeFrequency: "weekly",
        priority,
        alternates: {
          languages: getLanguageAlternates(path),
        },
      });
    });
  });

  return routes;
}
