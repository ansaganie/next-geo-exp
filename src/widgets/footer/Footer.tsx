import Image from "next/image";
import { Separator } from "@/shared/ui/separator";
// Icons now provided via centralized data definitions in contactLinks
import { BrandIcon } from "@/shared/ui/brand-icon";
import { Button } from "@/shared/ui/button";
import { ExternalLink } from "@/shared/ui/external-link";
import { serviceLinks, contactLinks } from "@/shared/lib/links";

export function Footer() {
  // serviceLinks & contactLinks imported from central data file

  return (
    <footer
      className="border-t bg-muted/50"
      aria-labelledby="footer-heading"
      role="contentinfo"
    >
      <div className="container py-12">
        <h2 id="footer-heading" className="sr-only">
          Футер сайта GeoExploration
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4" aria-labelledby="footer-company-heading">
            <Image
              src="/assets/images/Logofooter.png"
              alt="Логотип компании GeoExploration"
              width={150}
              height={50}
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground">
              Профессиональные геологические и геодезические услуги
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4" aria-labelledby="footer-services-heading">
            <h3 id="footer-services-heading" className="font-semibold">
              Услуги
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground" role="list">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-foreground transition-colors"
                    aria-label={`Перейти к разделу: ${service.label}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4" aria-labelledby="footer-contacts-heading">
            <h3 id="footer-contacts-heading" className="font-semibold">
              Контакты
            </h3>
            <address className="not-italic">
              <ul className="space-y-2 text-sm" role="list">
                {contactLinks.map((link) => {
                  const {
                    icon: LucideIcon,
                    brand: brandIconData,
                    external,
                  } = link;
                  const content = (
                    <span className="flex items-center gap-2">
                      {brandIconData ? (
                        <BrandIcon
                          icon={brandIconData}
                          className="h-4 w-4"
                          aria-hidden="true"
                          label={link.label}
                        />
                      ) : LucideIcon ? (
                        <LucideIcon className="h-4 w-4" aria-hidden="true" />
                      ) : null}
                      <span>{link.label}</span>
                    </span>
                  );
                  return (
                    <li key={link.label}>
                      {external ? (
                        <ExternalLink
                          href={link.href}
                          aria-label={link.aria}
                          className="text-muted-foreground hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xs"
                        >
                          {content}
                        </ExternalLink>
                      ) : (
                        <Button
                          asChild
                          variant="link"
                          className="p-0 h-auto text-muted-foreground hover:text-foreground"
                        >
                          <a href={link.href} aria-label={link.aria}>
                            {content}
                          </a>
                        </Button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </address>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GeoExploration. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
