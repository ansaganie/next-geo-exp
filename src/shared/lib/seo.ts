import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/shared/config/site";

export function getCanonicalPath(locale: string, path: string = ""): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const cleanPath = path === "" || path === "/" ? "" : normalizedPath;
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}${cleanPath}`;
}

export function getLanguageAlternates(path: string = ""): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": getCanonicalPath(routing.defaultLocale, path),
  };

  for (const loc of routing.locales) {
    languages[loc] = getCanonicalPath(loc, path);
  }

  return languages;
}

export interface ServiceMetadataOptions {
  locale: string;
  categorySlug: string;
  title: string;
  description: string;
}

export function constructServiceMetadata({
  locale,
  categorySlug,
  title,
  description,
}: ServiceMetadataOptions): Metadata {
  const path = `/services/${categorySlug}`;
  const canonicalUrl = getCanonicalPath(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
  };
}
