import React from "react";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="border-t bg-background py-12"
      aria-labelledby="footer-heading"
    >
      <div className="mx-auto max-w-6xl px-8">
        <h2 id="footer-heading" className="sr-only">
          Футер сайта GeoExploration
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/assets/images/Logofooter.png"
              alt="GeoExploration"
              width={150}
              height={50}
            />
            <div className="mt-3 text-sm">
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`}>
                {process.env.NEXT_PUBLIC_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <div className="text-sm">
            <h3 className="mb-2 font-semibold">Услуги</h3>
            <ul className="space-y-1">
              <li>Бурение скважин</li>
              <li>Инженерно-геологические изыскания</li>
              <li>Геодезия и топография</li>
              <li>Вынос в натуру</li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="mb-2 font-semibold">Контакты</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_WHATSAPP_BASE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_MAIN}`}>
                  Телефон
                </a>
              </li>
              <li>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`${process.env.NEXT_PUBLIC_INSTAGRAM_URL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-muted-foreground">
          © 2025 GeoExploration. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
