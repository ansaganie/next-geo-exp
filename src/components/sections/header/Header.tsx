import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
  return (
    <header className={cn("w-full border-b bg-background", className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4 px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/Logo.png"
            alt="GeoExploration"
            width={140}
            height={40}
          />
        </div>
        <nav className="text-sm font-medium">
          <ul className="flex gap-8">
            <li>
              <a href="#top">Главное</a>
            </li>
            <li>
              <a href="#services">Услуги</a>
            </li>
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#portfolio">Работы</a>
            </li>
            <li>
              <a href="#video">Видео</a>
            </li>
            <li>
              <a href="#contact-us">Контакты</a>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="#contact-us"
            className="rounded bg-primary px-4 py-2 text-primary-foreground text-sm"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </header>
  );
}
