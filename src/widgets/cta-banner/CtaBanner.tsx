import { Button } from "@/shared/ui/button";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

interface CtaBannerProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export async function CtaBanner({
  heading,
  description,
  ctaLabel,
  ctaHref = "/#contact-us",
}: CtaBannerProps) {
  const t = await getTranslations("cta");
  return (
    <section className="bg-secondary/10 py-16" aria-label={t("ariaLabel")}>
      <div className="mx-auto max-w-3xl px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {heading ?? t("heading")}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {description ?? t("description")}
        </p>
        <Button
          size="lg"
          asChild
          className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <Link href={ctaHref}>{ctaLabel ?? t("button")}</Link>
        </Button>
      </div>
    </section>
  );
}
