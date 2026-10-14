import { describe, it, expect } from "bun:test";
import {
  getCanonicalPath,
  getLanguageAlternates,
  constructServiceMetadata,
} from "./seo";

describe("SEO utility helpers", () => {
  it("computes prefix-less path for default locale (kk)", () => {
    expect(getCanonicalPath("kk", "/services/drilling")).toBe(
      "https://geoexploration.kz/services/drilling",
    );
    expect(getCanonicalPath("kk", "")).toBe("https://geoexploration.kz");
  });

  it("computes prefixed path for Russian and English", () => {
    expect(getCanonicalPath("ru", "/services/drilling")).toBe(
      "https://geoexploration.kz/ru/services/drilling",
    );
    expect(getCanonicalPath("en", "/services/drilling")).toBe(
      "https://geoexploration.kz/en/services/drilling",
    );
  });

  it("generates full language alternates including x-default", () => {
    const alternates = getLanguageAlternates("/services/drilling");
    expect(alternates["x-default"]).toBe(
      "https://geoexploration.kz/services/drilling",
    );
    expect(alternates.kk).toBe(
      "https://geoexploration.kz/services/drilling",
    );
    expect(alternates.ru).toBe(
      "https://geoexploration.kz/ru/services/drilling",
    );
    expect(alternates.en).toBe(
      "https://geoexploration.kz/en/services/drilling",
    );
  });

  it("constructs service metadata with openGraph and alternates", () => {
    const meta = constructServiceMetadata({
      locale: "ru",
      categorySlug: "geodesy",
      title: "Геодезия - GeoExploration",
      description: "Инженерная геодезия",
    });

    expect(meta.title).toBe("Геодезия - GeoExploration");
    expect(meta.alternates?.canonical).toBe(
      "https://geoexploration.kz/ru/services/geodesy",
    );
    expect(meta.alternates?.languages?.["x-default"]).toBe(
      "https://geoexploration.kz/services/geodesy",
    );
    expect(meta.openGraph?.url).toBe(
      "https://geoexploration.kz/ru/services/geodesy",
    );
  });
});
