import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Breadcrumb = { label: string; href?: string };

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  bgImage?: string;
}

export async function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  bgImage = "/assets/images/bgbg.png",
}: PageHeaderProps) {
  const t = await getTranslations("breadcrumbs");
  return (
    <section
      className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-accent"
      aria-label={title}
    >
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/80 to-accent" />

      <div className="relative z-10 mx-auto max-w-4xl px-8 py-16 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label={t("label")} className="mb-4">
            <ol className="flex items-center justify-center gap-1 text-sm text-accent-foreground/60">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1">
                  {i > 0 && (
                    <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  )}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-accent-foreground transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-accent-foreground/90">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-lg text-accent-foreground/70">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
