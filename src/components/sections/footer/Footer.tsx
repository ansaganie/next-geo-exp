import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const serviceLinks = [
    "Бурение скважин на воду",
    "Инженерно-геологические изыскания",
    "Геодезия и топография",
    "Вынос в натуру",
  ];

  const contactLinks = [
    {
      label: "WhatsApp",
      href: `${process.env.NEXT_PUBLIC_WHATSAPP_BASE}`,
      external: true,
    },
    {
      label: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Телефон",
      href: `tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`,
    },
    {
      label: process.env.NEXT_PUBLIC_EMAIL || "info@gex.kz",
      href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}`,
    },
    {
      label: "Instagram",
      href: `${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`,
      external: true,
    },
  ];

  return (
    <footer className="border-t bg-muted/50" aria-labelledby="footer-heading">
      <div className="container py-12">
        <h2 id="footer-heading" className="sr-only">
          Футер сайта GeoExploration
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/assets/images/Logofooter.png"
              alt="GeoExploration"
              width={150}
              height={50}
            />
            <p className="text-sm text-muted-foreground">
              Профессиональные геологические и геодезические услуги
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Услуги</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {serviceLinks.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
