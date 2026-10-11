import { describe, it, expect, mock } from "bun:test";
import React from "react";
import { renderToString } from "react-dom/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/shared/providers/theme-provider";

mock.module("@/i18n/navigation", () => ({
  Link: ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) =>
    React.createElement("a", { href, ...props }, children),
  useRouter: () => ({
    push: () => {},
    replace: () => {},
    prefetch: () => {},
    back: () => {},
  }),
  usePathname: () => "/",
  redirect: () => {},
  getPathname: () => "/",
}));

mock.module("@/shared/ui/sheet", () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sheet">{children}</div>
  ),
  SheetTrigger: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sheet-trigger">{children}</div>
  ),
  SheetContent: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="sheet-content" {...props}>
      {children}
    </div>
  ),
  SheetTitle: ({
    children,
    ...props
  }: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-testid="sheet-title" {...props}>
      {children}
    </div>
  ),
}));

const { Header } = await import("./Header");
const { headerCta } = await import("@/shared/lib/links");

const messages = {
  header: {
    skipToMain: "Басты мазмұнға өту",
    logoAlt: "GeoExploration логотипі",
    mainNav: "Басты мәзір",
    mobileNav: "Мобильді мәзір",
    menu: "Мәзір",
    mainMenu: "Басты мәзір",
    allServices: "Барлық қызметтер",
    language: "Тіл",
    lightTheme: "Ашық тақырып",
    darkTheme: "Күңгірт тақырып",
  },
  nav: {
    services: "Қызметтер",
    portfolio: "Жобалар",
    about: "Біз туралы",
    contacts: "Байланыс",
    geodesy: "Геодезия",
    geotechnical: "Инженерлік геология",
    drilling: "Бұрғылау",
    hydrogeology: "Гидрогеология",
    equipment: "Жабдықтар",
    submitRequest: "Өтінім қалдыру",
  },
};

function renderHeader() {
  return renderToString(
    <NextIntlClientProvider locale="kk" messages={messages} onError={() => {}}>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

describe("Header mobile CTA button", () => {
  it("renders the primary CTA button in the mobile header controls bar outside the sheet", () => {
    const html = renderHeader();

    // Verify mobile controls container exists
    expect(html).toContain("flex md:hidden items-center");

    // Extract mobile controls container markup
    const mobileContainerMatch = html.match(
      /<div class="[^"]*flex md:hidden items-center[^"]*">([\s\S]*?)<\/div>/
    );
    expect(mobileContainerMatch).not.toBeNull();
    const mobileContainerHtml = mobileContainerMatch ? mobileContainerMatch[0] : "";

    // The mobile container must include the CTA button linking to headerCta.href
    expect(mobileContainerHtml).toContain(`href="${headerCta.href}"`);
    expect(mobileContainerHtml).toContain("Өтінім қалдыру");
    expect(mobileContainerHtml).toContain("bg-secondary text-secondary-foreground");
    expect(mobileContainerHtml).toContain("text-xs px-2.5 h-8 sm:text-sm sm:px-3 sm:h-9 mr-2");

    // The CTA button must appear before the Sheet trigger menu button
    const ctaIndex = mobileContainerHtml.indexOf(`href="${headerCta.href}"`);
    const menuTriggerIndex = mobileContainerHtml.indexOf('aria-label="Мәзір"');
    expect(ctaIndex).toBeGreaterThan(-1);
    expect(menuTriggerIndex).toBeGreaterThan(-1);
    expect(ctaIndex).toBeLessThan(menuTriggerIndex);
  });

  it("does not render the duplicate CTA button inside the mobile sheet navigation drawer", () => {
    const html = renderHeader();

    // Find the mobile sheet nav list
    const sheetNavMatch = html.match(
      /<nav[^>]*aria-label="Мобильді мәзір"[^>]*>([\s\S]*?)<\/nav>/
    );
    expect(sheetNavMatch).not.toBeNull();
    const sheetNavHtml = sheetNavMatch ? sheetNavMatch[1] : "";

    // Sheet nav must NOT contain the duplicate CTA button
    expect(sheetNavHtml).not.toContain("mt-2");
    expect(sheetNavHtml).not.toContain("Өтінім қалдыру");
  });
});
