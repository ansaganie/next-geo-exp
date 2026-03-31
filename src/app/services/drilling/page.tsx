import type { Metadata } from "next";
import { services, serviceCategories } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";

const cat = serviceCategories.drilling;
const filtered = services.filter((s) => s.category === "drilling");

export const metadata: Metadata = {
  title: `${cat.label} — GeoExploration`,
  description: cat.description,
  openGraph: {
    title: `${cat.label} — GeoExploration`,
    description: cat.description,
  },
};

export default function DrillingPage() {
  return (
    <>
      <PageHeader
        title={cat.label}
        subtitle={cat.description}
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Услуги" },
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
            О бурении скважин
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Компания GeoExploration выполняет бурение разведочных,
              гидрогеологических и инженерно-геологических скважин глубиной до
              200 метров. Мы применяем колонковое, шнековое и роторное бурение в
              зависимости от геологических условий и целей заказчика.
            </p>
            <p>
              Все работы выполняются с полным циклом документирования: ведение
              буровых журналов, отбор проб грунта и воды, описание керна и
              составление геолого-технических разрезов.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
