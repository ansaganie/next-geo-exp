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
    ru: "ru_RU",
    kk: "kk_KZ",
    en: "en_US",
  };

  return {
    title: t("title"),
    description: t("description"),
    icons: { icon: "/favicon.ico" },
    keywords: [
      "геология",
      "инженерно-геологические изыскания",
      "бурение скважин",
      "бурение воды",
      "геодезия",
      "топографическая съемка",
      "кадастровые работы",
      "GeoExploration",
      "изыскания Казахстан",
    ],
    metadataBase: new URL("https://geoexploration.kz"),
    alternates: {
      canonical: "https://geoexploration.kz",
      languages: {
        ru: "https://geoexploration.kz",
        kk: "https://geoexploration.kz/kk",
        en: "https://geoexploration.kz/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("ogDescription"),
      url: "https://geoexploration.kz",
      siteName: "GeoExploration",
      locale: ogLocaleMap[locale] ?? "ru_RU",
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
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground",
        )}
      >
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
            <main id="main" role="main">
              {children}
            </main>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "GeoExploration",
                  url: "https://geoexploration.kz",
                  logo: "https://geoexploration.kz/assets/images/Logo.png",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: process.env.NEXT_PUBLIC_PHONE_MAIN || "",
                      contactType: "customer service",
                      areaServed: "KZ",
                      availableLanguage: ["ru"],
                    },
                  ],
                  sameAs: [
                    process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
                    process.env.NEXT_PUBLIC_WHATSAPP_BASE || "",
                  ].filter(Boolean),
                }),
              }}
            />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
