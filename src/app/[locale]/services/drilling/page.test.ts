import { describe, it, expect } from "bun:test";
import { generateMetadata } from "./page";
import ruMessages from "../../../../../messages/ru.json";
import kkMessages from "../../../../../messages/kk.json";

describe("DrillingPage generateMetadata & localized translations", () => {
  it("configures canonical and hreflang alternates for Russian locale", async () => {
    const metaRu = await generateMetadata({
      params: Promise.resolve({ locale: "ru" }),
    });

    expect(metaRu.alternates?.canonical).toBe(
      "https://geoexploration.kz/ru/services/drilling",
    );
    expect(metaRu.alternates?.languages?.kk).toBe(
      "https://geoexploration.kz/services/drilling",
    );
    expect(metaRu.alternates?.languages?.ru).toBe(
      "https://geoexploration.kz/ru/services/drilling",
    );
    expect(metaRu.alternates?.languages?.en).toBe(
      "https://geoexploration.kz/en/services/drilling",
    );
  });

  it("configures canonical for prefix-less Kazakh locale", async () => {
    const metaKk = await generateMetadata({
      params: Promise.resolve({ locale: "kk" }),
    });

    expect(metaKk.alternates?.canonical).toBe(
      "https://geoexploration.kz/services/drilling",
    );
  });

  it("contains high-intent geo-targeted keywords in Russian messages", () => {
    const drillingRu = ruMessages.servicePages.drilling;
    expect(drillingRu.metaTitle).toContain("Астане");
    expect(drillingRu.metaTitle).toContain("Казахстане");
    expect(drillingRu.metaTitle).toContain("колонковое");
    expect(drillingRu.metaTitle).toContain("на воду");
    expect(drillingRu.metaDescription).toContain("УРБ-2А2");
  });

  it("contains high-intent geo-targeted keywords in Kazakh messages", () => {
    const drillingKk = kkMessages.servicePages.drilling;
    expect(drillingKk.metaTitle).toContain("Астана");
    expect(drillingKk.metaTitle).toContain("Қазақстан");
    expect(drillingKk.metaTitle).toContain("бағаналық");
    expect(drillingKk.metaTitle).toContain("суға");
  });
});
