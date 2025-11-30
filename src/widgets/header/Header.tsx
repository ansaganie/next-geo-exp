"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/shared/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks, headerCta } from "@/shared/lib/links";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    const onHashChange = () => {
      setActiveHash(window.location.hash);
    };
    onScroll();
    setActiveHash(window.location.hash);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const navItems = navLinks;

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all",
        scrolled
          ? "bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60"
          : "bg-transparent"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 rounded-sm bg-primary px-4 py-2 text-primary-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
      >
        Перейти к основному содержимому
      </a>
      <div className={"container flex items-center justify-between py-0"}>
        <div className="mr-8 flex">
          <Link href="/" className={"flex items-center transition-all py-2"}>
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
              sizes="(max-width: 768px) 140px, 220px"
              className="transition-all"
            />
          </Link>
        </div>

        <nav
          className="hidden md:flex flex-1 items-center justify-center"
          role="navigation"
          aria-label="Главная навигация"
        >
          <NavigationMenu className="w-full justify-center">
            <NavigationMenuList className="flex items-center gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    "px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/10 transition-colors",
                    activeHash === item.href &&
                      "font-bold text-primary underline underline-offset-4"
                  )}
                  asChild
                >
                  <a
                    href={item.href}
                    aria-current={activeHash === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </Button>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Меню">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <nav
                className="flex flex-col gap-1"
                aria-label="Мобильная навигация"
              >
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "justify-start", // align text left
                      activeHash === item.href &&
                        "font-bold text-primary underline underline-offset-4"
                    )}
                    asChild
                  >
                    <a
                      href={item.href}
                      {...(activeHash === item.href && {
                        "aria-current": "page",
                      })}
                    >
                      {item.label}
                    </a>
                  </Button>
                ))}
                <Button variant="default" className="mt-2" asChild>
                  <a href={headerCta.href}>{headerCta.label}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center">
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href={headerCta.href}>{headerCta.label}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
