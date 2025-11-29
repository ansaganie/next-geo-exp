import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header({ className }: { className?: string }) {
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
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex">
          <a href="#top" className="flex items-center">
            <Image
              src="/assets/images/Logo.png"
              alt="GeoExploration"
              width={140}
              height={40}
              priority
            />
          </a>
        </div>

        <nav className="flex flex-1 items-center justify-center">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <div className="flex items-center">
          <Button asChild>
            <a href="#contact-us">Оставить заявку</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
