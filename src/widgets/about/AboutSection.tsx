import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-muted/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-8 grid gap-12 md:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/assets/images/about-left-image.png"
            alt="GeoExploration оборудование"
            width={560}
            height={420}
            className="rounded-xl object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
            О компании
          </p>
          <h2
            id="about-heading"
            className="mb-5 text-3xl font-bold tracking-tight"
          >
            Комплексные инженерные решения — от геодезии до бурения
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
            Мы предоставляем полный спектр профессиональных услуг: геодезия,
            топография, инженерно-геологические изыскания, бурение скважин.
            Работаем для частных и корпоративных клиентов: от подготовки участка
            до сопровождения строительства.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center rounded-xl border border-secondary/20 bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-2xl font-bold text-secondary">300+</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Объектов в год
              </div>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-primary/20 bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Инженерных съёмок
              </div>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-accent/20 bg-card p-4 shadow-sm transition-shadow hover:shadow-md">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Довольных клиентов
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
