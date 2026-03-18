"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";
import { slides, type Slide } from "@/shared/lib/slides";
import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
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
    })
  );

  useEffect(() => {
    if (!api) return;

    const plugin = autoplayPlugin.current;
    plugin.play();
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
      plugin.stop();
    };
  }, [api]);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="min-h-screen flex items-center overflow-hidden"
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
        {/* Subtle overlay + gentle vignette for balanced contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/25 to-transparent" />
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
          >
            <CarouselContent>
              {slides.map((slide: Slide) => (
                <CarouselItem key={slide.id}>
                  <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Content Column */}
                    <Card className="border-none bg-transparent shadow-none">
                      <CardContent className="p-0 flex flex-col justify-center space-y-6">
                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight drop-shadow-lg">
                          {slide.title}
                        </h3>

                        {/* Points List */}
                        <ul className="space-y-3 text-base md:text-lg drop-shadow">
                          {slide.points.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-1">
                                <CheckCircle2 className="h-4 w-4" />
                              </div>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Visual Column - Portfolio Images */}
                    <Card className="hidden lg:flex items-center justify-center border-none bg-transparent shadow-none">
                      <CardContent className="p-0 relative w-full max-w-md aspect-[4/3]">
                        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 0vw, 33vw"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Numbered Dots Navigation */}
            <div className="mt-8 flex justify-center gap-3">
              {slides.map((slide, index) => (
                <Button
                  key={slide.id}
                  onClick={() => api?.scrollTo(index)}
                  variant={current === index ? "default" : "outline"}
                  size="icon"
                  className={cn(
                    "w-10 h-10 rounded-md font-semibold text-sm transition-all duration-300 hover:cursor-pointer",
                    current === index
                      ? "shadow-md"
                      : "text-primary hover:text-primary bg-background/70 backdrop-blur-sm hover:bg-background/90",
                    "hover:scale-105"
                  )}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  aria-current={current === index}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
