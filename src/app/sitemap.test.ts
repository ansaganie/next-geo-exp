import { describe, it, expect } from "bun:test";
import sitemap from "./sitemap";

describe("dynamic sitemap", () => {
  it("generates entries for all locales and categories", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThan(0);

    const urls = entries.map((e) => e.url);

    // Root URLs
    expect(urls).toContain("https://geoexploration.kz");
    expect(urls).toContain("https://geoexploration.kz/ru");
    expect(urls).toContain("https://geoexploration.kz/en");

    // Drilling URLs
    expect(urls).toContain("https://geoexploration.kz/services/drilling");
    expect(urls).toContain("https://geoexploration.kz/ru/services/drilling");
    expect(urls).toContain("https://geoexploration.kz/en/services/drilling");
  });

  it("includes multilingual hreflang alternates in each entry", () => {
    const entries = sitemap();
    const drillingRu = entries.find(
      (e) => e.url === "https://geoexploration.kz/ru/services/drilling",
    );

    expect(drillingRu).toBeDefined();
    expect(drillingRu?.alternates?.languages?.kk).toBe(
      "https://geoexploration.kz/services/drilling",
    );
    expect(drillingRu?.alternates?.languages?.ru).toBe(
      "https://geoexploration.kz/ru/services/drilling",
    );
    expect(drillingRu?.alternates?.languages?.en).toBe(
      "https://geoexploration.kz/en/services/drilling",
    );
  });
});
