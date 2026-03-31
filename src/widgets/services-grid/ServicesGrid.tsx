import React from "react";
import { services } from "@/entities/service/services";
import { ServiceCard } from "@/entities/service/ServiceCard";
import { getTranslations } from "next-intl/server";

export async function ServicesGrid() {
  const t = await getTranslations("servicesGrid");
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
            {t("eyebrow")}
          </p>
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight"
          >
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary/60" />
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
