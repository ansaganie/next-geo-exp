import type { Metadata } from "next";
import { services } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";
import { getTranslations } from "next-intl/server";
import {
  CheckCircle2,
  ChevronDown,
  Layers,
  Wrench,
  FileCheck2,
  ShieldCheck,
} from "lucide-react";

const filtered = services.filter((s) => s.category === "drilling");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "servicePages.drilling",
  });
  const localePrefix = locale === "kk" ? "" : `/${locale}`;
  const canonicalUrl = `https://geoexploration.kz${localePrefix}/services/drilling`;

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        kk: "https://geoexploration.kz/services/drilling",
        ru: "https://geoexploration.kz/ru/services/drilling",
        en: "https://geoexploration.kz/en/services/drilling",
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonicalUrl,
      type: "website",
    },
  };
}

export default async function DrillingPage() {
  const t = await getTranslations("servicePages.drilling");
  const tCat = await getTranslations("categories.drilling");
  const tBread = await getTranslations("breadcrumbs");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: t("faq.q1"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a1"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q2"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a2"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q3"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a3"),
        },
      },
      {
        "@type": "Question",
        name: t("faq.q4"),
        acceptedAnswer: {
          "@type": "Answer",
          text: t("faq.a4"),
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Borehole Drilling and Core Drilling",
    name: t("pageHeading"),
    provider: {
      "@type": "LocalBusiness",
      name: "GeoExploration",
      telephone: process.env.NEXT_PUBLIC_PHONE_MAIN || "+77755020555",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Astana",
        addressCountry: "KZ",
      },
    },
    areaServed: [
      { "@type": "City", name: "Astana" },
      { "@type": "Country", name: "Kazakhstan" },
    ],
    description: t("metaDescription"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <PageHeader
        title={t("pageHeading")}
        subtitle={t("pageSubtitle")}
        breadcrumbs={[
          { label: tBread("home"), href: "/" },
          { label: tBread("services") },
          { label: tCat("label") },
        ]}
      />

      {/* Primary Drilling Services Grid */}
      {filtered.length > 0 ? (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-8">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
                {t("servicesEyebrow")}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t("servicesHeading")}
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} linked={false} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Featured Core Drilling Pillar Section */}
      <section
        id="core-drilling"
        className="scroll-mt-20 border-y border-border/40 bg-muted/20 py-20"
      >
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
                  {t("coreSection.badge")}
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {t("coreSection.eyebrow")}
                </span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {t("coreSection.title")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {t("coreSection.description")}
              </p>
              <ul className="space-y-3 pt-2 text-sm text-foreground/90 md:text-base">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span>{t("coreSection.bullet1")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span>{t("coreSection.bullet2")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-secondary" />
                  <span>{t("coreSection.bullet3")}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border/60 bg-card p-6 shadow-xs lg:col-span-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-card-foreground">
                <Layers className="size-5 text-secondary" />
                {t("specs.title")}
              </h3>
              <div className="divide-y divide-border/60 text-sm">
                <div className="py-3">
                  <span className="text-muted-foreground">{t("specs.spec1Label")}</span>
                  <div className="font-semibold text-foreground">{t("specs.spec1Value")}</div>
                </div>
                <div className="py-3">
                  <span className="text-muted-foreground">{t("specs.spec2Label")}</span>
                  <div className="font-semibold text-foreground">{t("specs.spec2Value")}</div>
                </div>
                <div className="py-3">
                  <span className="text-muted-foreground">{t("specs.spec3Label")}</span>
                  <div className="font-semibold text-foreground">{t("specs.spec3Value")}</div>
                </div>
                <div className="py-3">
                  <span className="text-muted-foreground">{t("specs.spec4Label")}</span>
                  <div className="font-semibold text-foreground">{t("specs.spec4Value")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drilling Technology and Regional Capabilities */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t("detailsHeading")}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>
      </section>

      {/* Workflow Stages */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
              {t("stages.eyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t("stages.title")}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-xs">
              <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-muted text-foreground">
                <Wrench className="size-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {t("stages.stage1Title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stages.stage1Desc")}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-xs">
              <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-muted text-foreground">
                <Layers className="size-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {t("stages.stage2Title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stages.stage2Desc")}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-xs">
              <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-muted text-foreground">
                <ShieldCheck className="size-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {t("stages.stage3Title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stages.stage3Desc")}
              </p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-5 shadow-xs">
              <div className="mb-4 flex size-12 items-center justify-center rounded-[10px] bg-muted text-foreground">
                <FileCheck2 className="size-6 text-foreground" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-card-foreground">
                {t("stages.stage4Title")}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("stages.stage4Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) with Accordion */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-8">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
              {t("faq.eyebrow")}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t("faq.title")}
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 bg-secondary" />
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl border border-border/60 bg-card p-5 transition-all open:shadow-xs">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                <span>{t("faq.q1")}</span>
                <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("faq.a1")}
              </p>
            </details>

            <details className="group rounded-xl border border-border/60 bg-card p-5 transition-all open:shadow-xs">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                <span>{t("faq.q2")}</span>
                <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("faq.a2")}
              </p>
            </details>

            <details className="group rounded-xl border border-border/60 bg-card p-5 transition-all open:shadow-xs">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                <span>{t("faq.q3")}</span>
                <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("faq.a3")}
              </p>
            </details>

            <details className="group rounded-xl border border-border/60 bg-card p-5 transition-all open:shadow-xs">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                <span>{t("faq.q4")}</span>
                <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t("faq.a4")}
              </p>
            </details>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
