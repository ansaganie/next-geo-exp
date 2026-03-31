import type { Metadata } from "next";
import { services, serviceCategories } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";
import { getTranslations } from "next-intl/server";

const cat = serviceCategories.geotechnical;
const filtered = services.filter((s) => s.category === "geotechnical");

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${cat.label} — GeoExploration`,
    description: cat.description,
    openGraph: {
      title: `${cat.label} — GeoExploration`,
      description: cat.description,
    },
  };
}

export default async function GeotechnicalPage() {
  const t = await getTranslations("servicePages.geotechnical");
  const tBread = await getTranslations("breadcrumbs");

  return (
    <>
      <PageHeader
        title={cat.label}
        subtitle={cat.description}
        breadcrumbs={[
          { label: tBread("home"), href: "/" },
          { label: tBread("services") },
          { label: cat.label },
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
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground">
                  {s.details || s.description}
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
