import { Button } from "@/shared/ui/button";

interface CtaBannerProps {
  heading?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaBanner({
  heading = "Нужна консультация?",
  description = "Свяжитесь с нами для бесплатной оценки вашего проекта. Наши специалисты ответят в течение 24 часов.",
  ctaLabel = "Связаться с нами",
  ctaHref = "/#contact-us",
}: CtaBannerProps) {
  return (
    <section className="bg-secondary/10 py-16" aria-label="Призыв к действию">
      <div className="mx-auto max-w-3xl px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          {heading}
        </h2>
        <p className="mt-3 text-muted-foreground">{description}</p>
        <Button
          size="lg"
          asChild
          className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </section>
  );
}
