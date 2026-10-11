import { describe, expect, it } from "bun:test";
import { routing, localeLabels } from "./routing";
import { getPathname } from "./navigation";

describe("i18n routing configuration", () => {
  it("configures Kazakh as default locale with kk, ru, en supported locales", () => {
    expect(routing.defaultLocale).toBe("kk");
    expect(routing.locales).toEqual(["kk", "ru", "en"]);
  });

  it("lists Kazakh first in localeLabels", () => {
    expect(Object.keys(localeLabels)).toEqual(["kk", "ru", "en"]);
    expect(localeLabels).toEqual({
      kk: "Қазақша",
      ru: "Русский",
      en: "English",
    });
  });

  it("formats pathnames with prefix-less Kazakh and prefixed Russian and English", () => {
    expect(getPathname({ href: "/", locale: "kk" })).toBe("/");
    expect(getPathname({ href: "/", locale: "ru" })).toBe("/ru");
    expect(getPathname({ href: "/", locale: "en" })).toBe("/en");

    expect(getPathname({ href: "/services/drilling", locale: "kk" })).toBe(
      "/services/drilling"
    );
    expect(getPathname({ href: "/services/drilling", locale: "ru" })).toBe(
      "/ru/services/drilling"
    );
    expect(getPathname({ href: "/services/drilling", locale: "en" })).toBe(
      "/en/services/drilling"
    );
  });
});
