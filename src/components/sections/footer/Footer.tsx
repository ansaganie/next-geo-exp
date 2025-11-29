import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail } from "lucide-react";
import { siInstagram, siWhatsapp, type SimpleIcon } from "simple-icons";
import { BrandIcon } from "@/components/ui/brand-icon";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/ui/external-link";

export function Footer() {
  const serviceLinks = [
    { label: "Бурение скважин на воду", href: "#services" },
    { label: "Инженерно-геологические изыскания", href: "#services" },
    { label: "Геодезия и топография", href: "#services" },
    { label: "Вынос в натуру", href: "#services" },
  ];

  type ContactLink = {
    label: string;
    href: string;
    aria: string;
    external?: boolean;
    brand?: SimpleIcon;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  };

  const contactLinks: ContactLink[] = [
    {
      label: "WhatsApp",
      href: `${process.env.NEXT_PUBLIC_WHATSAPP_BASE}`,
      external: true,
      brand: siWhatsapp,
      aria: "Открыть чат WhatsApp",
    },
    {
      label: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Телефон",
      href: `tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`,
      icon: Phone,
      aria: `Позвонить по номеру ${
        process.env.NEXT_PUBLIC_PHONE_DISPLAY || "основной телефон"
      }`,
    },
    {
      label: process.env.NEXT_PUBLIC_EMAIL || "Email",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
      icon: Mail,
      aria: `Написать на email ${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      label: "Instagram",
      href: `${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`,
      external: true,
      brand: siInstagram,
      aria: "Перейти в профиль Instagram",
    },
  ];

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
                          className="text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
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
