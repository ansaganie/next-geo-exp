import { describe, expect, it, mock } from "bun:test";

mock.module("next/font/google", () => ({
  Inter: () => ({ variable: "--font-inter" }),
}));

mock.module("next-intl/server", () => ({
  getTranslations: async () => (key: string) => `translated-${key}`,
  setRequestLocale: () => {},
  getMessages: async () => ({}),
}));

const { generateMetadata, generateStaticParams } = await import("./layout");

describe("LocaleLayout metadata", () => {
  it("generates static params for all locales with kk first", () => {
    expect(generateStaticParams()).toEqual([
      { locale: "kk" },
      { locale: "ru" },
      { locale: "en" },
    ]);
  });

  it("configures canonical and alternates with prefix-less Kazakh", async () => {
    const metaKk = await generateMetadata({
      params: Promise.resolve({ locale: "kk" }),
    });

    expect(metaKk.alternates?.canonical).toBe("https://geoexploration.kz");
    expect(metaKk.alternates?.languages).toEqual({
      "x-default": "https://geoexploration.kz",
      kk: "https://geoexploration.kz",
      ru: "https://geoexploration.kz/ru",
      en: "https://geoexploration.kz/en",
    });
    expect(metaKk.openGraph?.url).toBe("https://geoexploration.kz");
    expect(metaKk.openGraph?.locale).toBe("kk_KZ");
  });

  it("configures canonical and alternates for Russian and English", async () => {
    const metaRu = await generateMetadata({
      params: Promise.resolve({ locale: "ru" }),
    });
    expect(metaRu.alternates?.canonical).toBe("https://geoexploration.kz/ru");
    expect(metaRu.openGraph?.url).toBe("https://geoexploration.kz/ru");
    expect(metaRu.openGraph?.locale).toBe("ru_RU");

    const metaEn = await generateMetadata({
      params: Promise.resolve({ locale: "en" }),
    });
    expect(metaEn.alternates?.canonical).toBe("https://geoexploration.kz/en");
    expect(metaEn.openGraph?.url).toBe("https://geoexploration.kz/en");
    expect(metaEn.openGraph?.locale).toBe("en_US");
  });

  it("localizes keywords by locale", async () => {
    const metaKk = await generateMetadata({
      params: Promise.resolve({ locale: "kk" }),
    });
    expect(metaKk.keywords).toContain("инженерлік-геологиялық зерттеулер");
    expect(metaKk.keywords).toContain("ұңғыма бұрғылау");

    const metaRu = await generateMetadata({
      params: Promise.resolve({ locale: "ru" }),
    });
    expect(metaRu.keywords).toContain("инженерно-геологические изыскания");
    expect(metaRu.keywords).toContain("бурение скважин");

    const metaEn = await generateMetadata({
      params: Promise.resolve({ locale: "en" }),
    });
    expect(metaEn.keywords).toContain("engineering-geological surveys");
    expect(metaEn.keywords).toContain("water well drilling");
  });

  it("falls back to kk_KZ for unknown openGraph locale", async () => {
    const metaUnknown = await generateMetadata({
      params: Promise.resolve({ locale: "unknown" }),
    });
    expect(metaUnknown.openGraph?.locale).toBe("kk_KZ");
  });

  it("configures regional geo tags for Kazakhstan/Astana", async () => {
    const metaKk = await generateMetadata({
      params: Promise.resolve({ locale: "kk" }),
    });
    expect(metaKk.other?.["geo.region"]).toBe("KZ-AST");
    expect(metaKk.other?.["geo.placename"]).toBe("Astana");
    expect(metaKk.other?.ICBM).toBe("51.169392, 71.449074");
  });
});
