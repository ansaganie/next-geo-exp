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

  const localePrefix = locale === "kk" ? "" : `/${locale}`;
  const canonicalUrl = `https://geoexploration.kz${localePrefix}`;

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
    metadataBase: new URL("https://geoexploration.kz"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        kk: "https://geoexploration.kz",
        ru: "https://geoexploration.kz/ru",
        en: "https://geoexploration.kz/en",
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: canonicalUrl,
      siteName: "GeoExploration",
      locale: ogLocaleMap[locale] ?? "kk_KZ",
      type: "website",
      images: [
        {
          url: "/assets/images/Logo.png",
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
      images: ["/assets/images/Logo.png"],
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
                  "@id": "https://geoexploration.kz/#organization",
                  name: "GeoExploration",
                  url: "https://geoexploration.kz",
                  logo: "https://geoexploration.kz/assets/images/Logo.png",
                  image: "https://geoexploration.kz/assets/images/Logo.png",
                  telephone: process.env.NEXT_PUBLIC_PHONE_MAIN || "+77755020555",
                  email: process.env.NEXT_PUBLIC_EMAIL || "info@geoexploration.kz",
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "г. Астана",
                    addressLocality: "Астана",
                    addressRegion: "Астана",
                    addressCountry: "KZ",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 51.169392,
                    longitude: 71.449074,
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
