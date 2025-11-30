import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-muted/30 py-16"
    >
      <div className="mx-auto max-w-6xl px-8 grid gap-10 md:grid-cols-2">
        <div>
          <Image
            src="/assets/images/about-left-image.png"
            alt="GeoExploration оборудование"
            width={560}
            height={420}
            className="rounded"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 id="about-heading" className="mb-4 text-2xl font-semibold">
            Комплексные инженерные решения — от геодезии до бурения
          </h2>
          <p className="mb-6 text-sm leading-relaxed">
            Мы предоставляем полный спектр профессиональных услуг: геодезия,
            топография, инженерно-геологические изыскания, бурение скважин.
            Работаем для частных и корпоративных клиентов: от подготовки участка
            до сопровождения строительства.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center rounded border p-3">
              <div className="text-lg font-bold">300+</div>
              <div className="text-xs">Объектов в год</div>
            </div>
            <div className="flex flex-col items-center rounded border p-3">
              <div className="text-lg font-bold">200+</div>
              <div className="text-xs">Инженерных съёмок</div>
            </div>
            <div className="flex flex-col items-center rounded border p-3">
              <div className="text-lg font-bold">500+</div>
              <div className="text-xs">Довольных клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
