"use client";
import React from "react";
import { slides, type Slide } from "@/shared/lib/slides";
import { Button } from "@/shared/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";

const WHATSAPP_BASE = process.env.NEXT_PUBLIC_WHATSAPP_BASE;
const PHONE_MAIN = process.env.NEXT_PUBLIC_PHONE_MAIN;

export function HeroCarousel() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="bg-foreground/5"
    >
      <div className="mx-auto max-w-6xl px-8 py-12">
        <h2 id="hero-heading" className="sr-only">
          Ключевые услуги GeoExploration
        </h2>
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide: Slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col justify-center">
                    <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
                      {slide.badge}
                    </span>
                    <h3 className="mb-4 text-2xl font-semibold leading-tight">
                      {slide.title}
                    </h3>
                    <ul className="mb-6 text-sm space-y-1">
                      {slide.points.map((p: string) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3">
                      <Button asChild variant="default">
                        <a
                          href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                            slide.whatsappText
                          )}`}
                        >
                          Whatsapp
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={`tel:${PHONE_MAIN}`}>{slide.phone}</a>
                      </Button>
                    </div>
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
