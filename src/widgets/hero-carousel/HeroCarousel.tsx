"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";
import { slides, type Slide } from "@/shared/lib/slides";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
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
    Autoplay({ delay: 10000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  const scrollTo = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bgbg.png"
          alt=""
          fill
          className="object-cover animate-in fade-in duration-1000"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-32">
        <div className="container mx-auto px-4">
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
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <Card className="border-none bg-background/80 backdrop-blur-xl shadow-2xl animate-in slide-in-from-left duration-700">
                      <CardContent className="p-8 md:p-12 space-y-6">
                        <Badge
                          variant="default"
                          className="text-sm font-medium animate-in fade-in slide-in-from-top duration-500 delay-100"
                        >
                          {slide.badge}
                        </Badge>

                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-in fade-in slide-in-from-top duration-500 delay-200">
                          {slide.title}
                        </h3>

                        <Separator className="animate-in fade-in duration-500 delay-300" />

                        <ul className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500 delay-400">
                          {slide.points.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 group"
                              style={{
                                animationDelay: `${400 + idx * 50}ms`,
                              }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                              <span className="text-foreground/90 leading-relaxed text-base md:text-lg">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Image */}
                    <div className="hidden lg:block relative h-[600px] animate-in fade-in slide-in-from-right duration-700">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50 group">
                        <Image
                          src={slide.image}
                          alt={slide.badge}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation */}
            <div className="mt-12 flex justify-center gap-2 animate-in fade-in duration-500 delay-500">
              {slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  onClick={() => scrollTo(index)}
                  variant={current === index ? "default" : "outline"}
                  size="icon"
                  className={cn(
                    "h-12 w-12 rounded-full transition-all duration-300",
                    current === index && "scale-110 shadow-lg"
                  )}
                  aria-label={`Перейти к слайду ${index + 1}: ${slide.badge}`}
                  aria-current={current === index}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
