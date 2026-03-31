"use client";
import React from "react";
import { videos } from "@/entities/video/videos";
import { useTranslations } from "next-intl";

export function VideoTestimonials() {
  const [active, setActive] = React.useState(videos[0].id);
  const current = videos.find((v) => v.id === active)!;
  const t = useTranslations("video");
  return (
    <section
      id="video"
      aria-labelledby="video-heading"
      className="bg-muted/40 py-20"
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
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/60 bg-black shadow-lg">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${current.youtubeId}`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-base font-semibold">{current.title}</div>
            <div className="text-sm text-muted-foreground">
              {current.subtitle}
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
                <span className="font-medium leading-tight">{v.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
