import type { Metadata } from "next";
import { services, serviceCategories } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";
import { getTranslations } from "next-intl/server";

const cat = serviceCategories.hydrogeology;
const filtered = services.filter((s) => s.category === "hydrogeology");

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

export default async function HydrogeologyPage() {
  const t = await getTranslations("servicePages.hydrogeology");
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

      {filtered.length > 0 ? (
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {filtered.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-4xl px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            {t("detailsHeading")}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
