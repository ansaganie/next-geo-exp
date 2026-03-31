"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/entities/portfolio/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/ui/carousel";
import { useTranslations } from "next-intl";

const categoryToService: Record<string, string> = {
  topography: "/services/geodesy",
  drilling: "/services/drilling",
  geodesy: "/services/geodesy",
  geology: "/services/geotechnical",
};

export function PortfolioSection() {
  const t = useTranslations("portfolio");
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
            {t("eyebrow")}
          </p>
          <h2
            id="portfolio-heading"
            className="text-3xl font-bold tracking-tight"
          >
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary/60" />
        </div>
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {portfolioItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <Link
                  href={categoryToService[item.category] ?? "/services/geodesy"}
                  className="group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={t(`items.${item.id}.title`)}
                      width={640}
                      height={480}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-block rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {t("viewMore")}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">
                      {t(`items.${item.id}.title`)}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {t(`items.${item.id}.subtitle`)}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-center gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
