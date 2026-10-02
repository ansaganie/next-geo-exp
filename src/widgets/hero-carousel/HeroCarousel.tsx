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
import { useTranslations } from "next-intl";

export function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const t = useTranslations("hero");

  // Get translated slide data
  const translatedSlides = slides.map((slide) => ({
    ...slide,
    title: t(`slides.${slide.id}.title`),
    points: t.raw(`slides.${slide.id}.points`) as string[],
  }));

  const autoplayPlugin = useRef(
    Autoplay({
      delay: 10000,
    }),
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
      className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bgbg.webp"
          alt=""
          fill
          className="object-cover"
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
        />
        {/* Earthy warm overlay with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(22,19%,24%)]/70 via-[hsl(22,19%,24%)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 id="hero-heading" className="sr-only">
            {t("heading")}
          </h2>

          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent>
              {translatedSlides.map((slide: Slide) => (
                <CarouselItem key={slide.id}>
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
                    {/* Content Column */}
                    <Card className="border-none bg-transparent shadow-none">
                      <CardContent className="p-0 flex flex-col justify-center space-y-4 md:space-y-5">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                          {slide.title}
                        </h3>

                        {/* Points List */}
                        <ul className="space-y-2 md:space-y-2.5 text-sm md:text-base text-white/90 drop-shadow">
                          {slide.points.map((point: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="mt-1 flex-shrink-0 rounded-full bg-secondary/20 p-1">
                                <CheckCircle2 className="h-4 w-4 text-secondary" />
                              </div>
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Visual Column - Portfolio Images */}
                    <Card className="hidden lg:flex items-center justify-center border-none bg-transparent shadow-none">
                      <CardContent className="p-0 relative w-full max-w-sm xl:max-w-md aspect-[4/3]">
                        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
                          <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 0vw, 33vw"
                            loading="lazy"
                            fetchPriority="low"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Numbered Dots Navigation */}
            <div className="mt-6 md:mt-8 flex justify-center gap-3">
              {translatedSlides.map((slide, index) => (
                <Button
                  key={slide.id}
                  onClick={() => api?.scrollTo(index)}
                  variant={current === index ? "default" : "outline"}
                  size="icon"
                  className={cn(
                    "w-10 h-10 rounded-md font-semibold text-sm transition-all duration-300 hover:cursor-pointer",
                    current === index
                      ? "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90"
                      : "text-white border-white/40 hover:text-white bg-white/10 backdrop-blur-sm hover:bg-white/20",
                    "hover:scale-105",
                  )}
                  aria-label={t("goToSlide", {
                    index: index + 1,
                    title: slide.title,
                  })}
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
