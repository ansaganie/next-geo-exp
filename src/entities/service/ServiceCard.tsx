import React from "react";
import { Link } from "@/i18n/navigation";
import { Service } from "@/entities/service/services";
import { GeoIcon } from "@/shared/ui/geo-icon";
import { getTranslations } from "next-intl/server";
import { cn } from "@/shared/lib/utils";

// `linked` makes the whole card a link to its Service Category page.
// Category pages pass `linked={false}` so a card never links to the page it is on.
export async function ServiceCard({
  service,
  linked = true,
}: {
  service: Service;
  linked?: boolean;
}) {
  const t = await getTranslations("serviceItems");
  const tCat = await getTranslations("categories");
  const tCard = await getTranslations("serviceCard");

  const content = (
    <>
      <div
        className={cn(
          "mb-4 flex size-12 items-center justify-center rounded-[10px] bg-muted text-foreground transition-colors duration-300",
          linked && "group-hover:bg-secondary/10 group-hover:text-secondary",
        )}
      >
        <GeoIcon name={service.icon} className="size-6" />
      </div>
      <p className="mb-1 text-[11px] font-semibold uppercase leading-snug tracking-[0.08em] text-primary">
        {tCat(`${service.category}.label`)}
      </p>
      <h3 className="mb-2 text-[15px] font-semibold leading-snug text-card-foreground">
        {t(`${service.id}.title`)}
      </h3>
      <p className="line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
        {t(`${service.id}.description`)}
      </p>
      {linked ? (
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-secondary">
          {tCard("learnMore")}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          >
            →
          </span>
        </span>
      ) : null}
    </>
  );

  const base =
    "flex h-full flex-col rounded-xl border border-border/60 bg-card p-5 text-left shadow-xs";

  if (!linked) {
    return <article className={base}>{content}</article>;
  }

  return (
    <Link
      href={`/services/${service.category}`}
      className={cn(
        base,
        "group transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0",
      )}
    >
      {content}
    </Link>
  );
}
