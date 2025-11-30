"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { slides, type Slide, type TitleSegment } from "@/shared/lib/slides";
import { Badge } from "@/shared/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/shared/ui/carousel";
import { cn } from "@/shared/lib/utils";

export function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const renderTitle = (segments: TitleSegment[]) => {
    return segments.map((segment, idx) => {
      if (segment.emphasis === "primary") {
        return (
          <em key={idx} className="text-primary not-italic font-semibold">
            {segment.text}
          </em>
        );
      }
      if (segment.emphasis === "accent") {
        return (
          <span key={idx} className="text-amber-500 font-semibold">
            {segment.text}
          </span>
        );
      }
      return <span key={idx}>{segment.text}</span>;
    });
  };

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
                      {/* Badge */}
                      <div>
                        <Badge
                          variant="default"
                          className="mb-4 px-4 py-1.5 text-sm font-medium shadow-lg"
                        >
                          {slide.badge}
                        </Badge>
                      </div>

                      {/* Title with Emphasis */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                        {renderTitle(slide.titleSegments)}
                      </h3>

                      {/* Points List */}
                      <ul className="space-y-2.5 text-base md:text-lg text-foreground/90">
                        {slide.points.map((point: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-primary mt-1 flex-shrink-0">
                              ➤
                            </span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Column - Portfolio Images */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="relative w-full max-w-md aspect-[4/3]">
                        <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                          <Image
                            src={
                              slide.id === "drilling"
                                ? "/assets/images/portfolio-02.jpg"
                                : slide.id === "geo-survey"
                                ? "/assets/images/portfolio-01.jpg"
                                : slide.id === "geodesy"
                                ? "/assets/images/portfolio-03.jpg"
                                : "/assets/images/portfolio-04.jpg"
                            }
                            alt={slide.badge}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 0vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Numbered Dots Navigation */}
            <div className="mt-8 flex justify-center gap-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => scrollTo(index)}
                  className={cn(
                    "relative flex items-center justify-center transition-all duration-300",
                    "w-12 h-12 rounded-full font-bold text-lg",
                    "hover:scale-110",
                    current === index
                      ? "bg-primary text-primary-foreground shadow-lg scale-110"
                      : "bg-background/60 text-foreground/70 backdrop-blur-sm border border-foreground/20 hover:bg-background/80"
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
