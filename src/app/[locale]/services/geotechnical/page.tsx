import type { Metadata } from "next";
import { services } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";
import { getTranslations } from "next-intl/server";

const filtered = services.filter((s) => s.category === "geotechnical");

export async function generateMetadata(): Promise<Metadata> {
  const tCat = await getTranslations("categories.geotechnical");
  return {
    title: `${tCat("label")} — GeoExploration`,
    description: tCat("description"),
    openGraph: {
      title: `${tCat("label")} — GeoExploration`,
      description: tCat("description"),
    },
  };
}

export default async function GeotechnicalPage() {
  const t = await getTranslations("servicePages.geotechnical");
  const tCat = await getTranslations("categories.geotechnical");
  const tBread = await getTranslations("breadcrumbs");
  const tItems = await getTranslations("serviceItems");

  return (
    <>
      <PageHeader
        title={tCat("label")}
        subtitle={tCat("description")}
        breadcrumbs={[
          { label: tBread("home"), href: "/" },
          { label: tBread("services") },
          { label: tCat("label") },
        ]}
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            {t("detailsHeading")}
          </h2>
          <div className="space-y-6">
            {filtered.map((s) => (
              <div key={s.id} className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {tItems(`${s.id}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {tItems(`${s.id}.details`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
