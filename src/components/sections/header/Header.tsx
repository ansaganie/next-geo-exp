"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header({ className: _className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    onScroll();
    onHashChange();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const navItems = [
    { href: "#top", label: "Главная" },
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О нас" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#video", label: "Видео" },
    { href: "#contact-us", label: "Контакты" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 rounded bg-primary px-4 py-2 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Перейти к основному содержимому
      </a>
      <div className={"container flex items-center justify-between py-0"}>
        <div className="mr-8 flex">
          <a href="/" className={"flex items-center transition-all py-2"}>
            <Image
              src={
                scrolled
                  ? "/assets/images/Logoblack.png"
                  : "/assets/images/Logo.png"
              }
              alt="Логотип компании GeoExploration"
              width={scrolled ? 140 : 220}
              height={scrolled ? 40 : 60}
              priority
              className={cn(
                "transition-all",
                scrolled ? "opacity-100" : "opacity-100"
              )}
            />
          </a>
        </div>

        <nav
          className="flex flex-1 items-center justify-center"
          role="navigation"
          aria-label="Главная навигация"
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "text-foreground hover:text-primary hover:bg-primary/10",
                activeHash === item.href &&
                  "font-bold text-primary underline underline-offset-4"
              )}
              asChild
            >
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center">
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact-us">Оставить заявку</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
