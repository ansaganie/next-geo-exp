"use client";
import React from "react";
import { videos } from "@/data/videos";

export function VideoTestimonials() {
  const [active, setActive] = React.useState(videos[0].id);
  const current = videos.find((v) => v.id === active)!;
  return (
    <section
      id="video"
      aria-labelledby="video-heading"
      className="bg-muted/30 py-16"
    >
      <div className="mx-auto max-w-6xl px-8">
        <h2 id="video-heading" className="mb-8 text-2xl font-semibold">
          Видео
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded border bg-black">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${current.youtubeId}`}
                title={current.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-sm font-medium">{current.title}</div>
            <div className="text-xs text-muted-foreground">
              {current.subtitle}
            </div>
          </div>
          <div className="space-y-3">
            {videos.map((v) => (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                className={`flex w-full items-center gap-3 rounded border p-2 text-left text-xs ${
                  v.id === active ? "bg-primary text-primary-foreground" : ""
                }`}
                aria-pressed={v.id === active}
              >
                <span className="font-semibold leading-tight">{v.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
