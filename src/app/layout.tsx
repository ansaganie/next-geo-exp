import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GeoExploration – Геологические и инженерные услуги",
  description:
    "Профессиональные инженерно-геологические изыскания, бурение скважин на воду, геодезия и топографическая съемка по всему Казахстану.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
