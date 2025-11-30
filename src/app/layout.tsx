import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeoExploration – Геологические и инженерные услуги",
  description:
    "Профессиональные инженерно-геологические изыскания, бурение скважин на воду, геодезия и топографическая съемка по всему Казахстану.",
  icons: {
    icon: "/favicon.ico",
  },
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
  },
  openGraph: {
    title: "GeoExploration – Геологические и инженерные услуги",
    description:
      "Инженерно-геологические изыскания, бурение скважин на воду, геодезические и топографические работы в Казахстане.",
    url: "https://geoexploration.kz",
    siteName: "GeoExploration",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/assets/images/Logo.png",
        width: 1200,
        height: 630,
        alt: "GeoExploration – Геологические и инженерные услуги",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoExploration – Геологические и инженерные услуги",
    description:
      "Инженерно-геологические изыскания, бурение скважин на воду, геодезические и топографические работы в Казахстане.",
    images: ["/assets/images/Logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1e40af",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-background font-sans antialiased text-foreground"
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Перейти к содержимому
        </a>
        <main id="main" role="main">
          {children}
        </main>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
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
      </body>
    </html>
  );
}
