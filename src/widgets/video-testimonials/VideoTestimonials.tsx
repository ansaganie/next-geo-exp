"use client";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { videos } from "@/entities/video/videos";
import { useTranslations } from "next-intl";

export function VideoTestimonials() {
  const [active, setActive] = React.useState(videos[0].id);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const current = videos.find((v) => v.id === active)!;
  const t = useTranslations("video");
  return (
    <section
      id="video"
      aria-labelledby="video-heading"
      className="bg-muted/40 py-20 section-deferred"
    >
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-secondary">
            {t("eyebrow")}
          </p>
          <h2 id="video-heading" className="text-3xl font-bold tracking-tight">
            {t("heading")}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-secondary/60" />
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-black shadow-lg">
              {isPlaying ? (
                <iframe
                  className="h-full w-full border-0"
                  src={`https://www.youtube.com/embed/${current.youtubeId}?autoplay=1`}
                  title={t(`items.${current.id}.title`)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="group relative h-full w-full">
                  <Image
                    src={`https://i.ytimg.com/vi/${current.youtubeId}/hqdefault.jpg`}
                    alt={t(`items.${current.id}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/20 cursor-pointer"
                    aria-label={`Play ${t(`items.${current.id}.title`)}`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-xl transition-transform duration-200 group-hover:scale-110">
                      <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
                    </div>
                  </button>
                </div>
              )}
            </div>
            <div className="mt-4 text-base font-semibold">
              {t(`items.${current.id}.title`)}
            </div>
            <div className="text-sm text-muted-foreground">
              {t(`items.${current.id}.subtitle`)}
            </div>
          </div>
          <div className="space-y-3">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition-all duration-200 ${
                  v.id === active
                    ? "border-secondary bg-secondary text-secondary-foreground shadow-md"
                    : "border-border/60 bg-card hover:border-secondary/30 hover:shadow-sm"
                }`}
                aria-pressed={v.id === active}
              >
                <span className="font-medium leading-tight">
                  {t(`items.${v.id}.title`)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
