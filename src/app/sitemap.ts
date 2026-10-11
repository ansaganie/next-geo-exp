import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geoexploration.kz";
  const lastModified = new Date();

  const locales = ["kk", "ru", "en"] as const;
  const categories = [
    "drilling",
    "geotechnical",
    "geodesy",
    "hydrogeology",
    "equipment",
  ];

  const getUrl = (locale: (typeof locales)[number], path: string = "") => {
    const prefix = locale === "kk" ? "" : `/${locale}`;
    return `${baseUrl}${prefix}${path}`;
  };

  const getAlternates = (path: string = "") => ({
    languages: {
      kk: getUrl("kk", path),
      ru: getUrl("ru", path),
      en: getUrl("en", path),
    },
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
  categories.forEach((category) => {
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
