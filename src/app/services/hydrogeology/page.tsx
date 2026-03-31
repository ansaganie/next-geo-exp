import type { Metadata } from "next";
import { services, serviceCategories } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { PageHeader } from "@/widgets/page-header/PageHeader";
import { CtaBanner } from "@/widgets/cta-banner/CtaBanner";

const cat = serviceCategories.hydrogeology;
const filtered = services.filter((s) => s.category === "hydrogeology");

export const metadata: Metadata = {
  title: `${cat.label} — GeoExploration`,
  description: cat.description,
  openGraph: {
    title: `${cat.label} — GeoExploration`,
    description: cat.description,
  },
};

export default function HydrogeologyPage() {
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
            О гидрогеологии
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Гидрогеологические работы включают поиск и оценку подземных водных
              ресурсов. Мы проводим разведочное бурение, откачки, определяем
              дебит скважин и качество воды.
            </p>
            <p>
              По результатам исследований разрабатываем проект водозаборной
              скважины с расчётом зон санитарной охраны и оформлением
              необходимой разрешительной документации.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
