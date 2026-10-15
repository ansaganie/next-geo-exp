import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/shared/config/site";
import { getCanonicalPath, getLanguageAlternates } from "@/shared/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  const ogLocaleMap: Record<string, string> = {
    kk: "kk_KZ",
    ru: "ru_RU",
    en: "en_US",
  };

  const canonicalUrl = getCanonicalPath(locale);

  const keywordsByLocale: Record<string, string[]> = {
    kk: [
      "астанада ұңғыма бұрғылау",
      "қазақстанда ұңғыма бұрғылау",
      "суға ұңғыма бұрғылау",
      "бағаналық бұрғылау",
      "колонковое бурение астана",
      "инженерлік-геологиялық зерттеулер",
      "геология Қазақстан",
      "геодезия Астана",
      "топографиялық түсірілім",
      "GeoExploration",
      "ұңғыма бұрғылау",
    ],
    ru: [
      "бурение скважин",
      "бурение в астане",
      "бурение в казахстане",
      "бурение на воду",
      "колонковое бурение",
      "бурение скважин астана",
      "бурение скважин на воду казахстан",
      "инженерно-геологические изыскания",
      "геология астана",
      "геодезия и топография",
      "топографическая съемка",
      "GeoExploration",
      "изыскания Казахстан",
    ],
    en: [
      "borehole drilling astana",
      "drilling kazakhstan",
      "core drilling kazakhstan",
      "water well drilling",
      "engineering-geological surveys",
      "geology kazakhstan",
      "geodesy astana",
      "topographic mapping",
      "GeoExploration",
    ],
  };

  return {
    title: t("title"),
    description: t("description"),
    icons: { icon: "/favicon.ico" },
    keywords: keywordsByLocale[locale] ?? keywordsByLocale.kk,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(),
    },
    other: {
      "geo.region": siteConfig.geo.region,
      "geo.placename": siteConfig.geo.placename,
      "geo.position": siteConfig.geo.position,
      ICBM: siteConfig.geo.icbm,
    },
    verification: {
      google:
        process.env.GOOGLE_VERIFICATION ||
        process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex:
        process.env.YANDEX_VERIFICATION ||
        process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: ogLocaleMap[locale] ?? "kk_KZ",
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    robots: { index: true, follow: true },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("ogDescription"),
      images: [siteConfig.ogImage],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#89ABC2",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations("common");

  return (
    <html lang={locale} className={cn(inter.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
            >
              {t("skipToContent")}
            </a>
            {children}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": ["LocalBusiness", "ProfessionalService"],
                  "@id": `${siteConfig.url}/#organization`,
                  name: siteConfig.name,
                  url: siteConfig.url,
                  logo: `${siteConfig.url}${siteConfig.ogImage}`,
                  image: `${siteConfig.url}${siteConfig.ogImage}`,
                  telephone: siteConfig.contact.phoneMain,
                  email: siteConfig.contact.email,
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      locale === "kk"
                        ? "Астана қ."
                        : locale === "en"
                          ? "Astana"
                          : "г. Астана",
                    addressLocality:
                      locale === "en" ? "Astana" : "Астана",
                    addressRegion:
                      locale === "en" ? "Astana" : "Астана",
                    addressCountry: "KZ",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: siteConfig.geo.latitude,
                    longitude: siteConfig.geo.longitude,
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "09:00",
                      closes: "18:00",
                    },
                  ],
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Astana",
                    },
                    {
                      "@type": "Country",
                      name: "Kazakhstan",
                    },
                  ],
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone:
                        process.env.NEXT_PUBLIC_PHONE_MAIN || "+77755020555",
                      contactType: "customer service",
                      areaServed: "KZ",
                      availableLanguage: ["ru", "kk", "en"],
                    },
                  ],
                  sameAs: [
                    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
                    process.env.NEXT_PUBLIC_WHATSAPP_BASE || "",
                  ].filter(Boolean),
                }),
              }}
            />
            <script
              type="speculationrules"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  prefetch: [
                    {
                      where: {
                        and: [
                          { href_matches: "/*" },
                          { not: { href_matches: "/api/*" } },
                        ],
                      },
                      eagerness: "moderate",
                    },
                  ],
                }),
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
