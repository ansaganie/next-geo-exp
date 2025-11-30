"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";
import { slides, type Slide } from "@/shared/lib/slides";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/shared/ui/carousel";
import { cn } from "@/shared/lib/utils";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bgbg.png"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Lighter overlay for better background visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/40 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="hero-heading" className="sr-only">
            Ключевые услуги GeoExploration
          </h2>

          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {slides.map((slide: Slide) => (
                <CarouselItem key={slide.id}>
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Content Column */}
                    <div className="flex flex-col justify-center space-y-6">
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-primary">
                        {slide.title}
                      </h3>

                      {/* Points List */}
                      <ul className="space-y-3 text-base md:text-lg">
                        {slide.points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-1">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                            </div>
                            <span className="leading-relaxed text-foreground/80">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Column - Portfolio Images */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-[4/3]">
                        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={slide.image}
                            alt={slide.badge}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 0vw, 33vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Numbered Dots Navigation */}
            <div className="mt-8 flex justify-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "relative flex items-center justify-center transition-all duration-300 cursor-pointer",
                    "w-10 h-10 rounded-md font-semibold text-sm",
                    "hover:scale-105",
                    current === index
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-background/70 text-foreground/60 backdrop-blur-sm border border-border hover:bg-background/90 hover:text-foreground/80"
                  )}
                  aria-label={`Go to slide ${index + 1}: ${slide.badge}`}
                  aria-current={current === index ? "true" : "false"}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
