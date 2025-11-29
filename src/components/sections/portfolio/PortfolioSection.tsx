"use client";
import React from "react";
import Image from "next/image";
import { portfolioItems } from "@/data/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-16"
    >
      <div className="mx-auto max-w-6xl px-8">
        <h2 id="portfolio-heading" className="mb-10 text-2xl font-semibold">
          Наши работы и проекты
        </h2>
        <Carousel>
          <CarouselContent>
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="group overflow-hidden rounded border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={480}
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
