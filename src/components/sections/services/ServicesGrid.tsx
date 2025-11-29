import React from "react";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesGrid() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-16">
      <div className="mx-auto max-w-6xl px-8">
        <h2 id="services-heading" className="mb-10 text-2xl font-semibold">
          Наши услуги
        </h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
