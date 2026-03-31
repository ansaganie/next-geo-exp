"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/shared/ui/sheet";
import { Menu, Moon, Sun, ChevronDown } from "lucide-react";
import { navLinks, headerCta } from "@/shared/lib/links";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-card/95 backdrop-blur-md supports-backdrop-filter:bg-card/80 border-b border-border/60 shadow-sm"
          : "bg-transparent",
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
              {navItems.map((item) =>
                item.children ? (
                  <DropdownMenu key={item.href}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "px-3 py-2 text-sm font-medium transition-colors gap-1",
                          scrolled
                            ? "text-foreground hover:text-secondary hover:bg-secondary/10"
                            : "text-white hover:text-white hover:bg-white/20",
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      <DropdownMenuItem asChild>
                        <a href={item.href} className="font-medium">
                          Все услуги
                        </a>
                      </DropdownMenuItem>
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href}>{child.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors",
                      scrolled
                        ? "text-foreground hover:text-secondary hover:bg-secondary/10"
                        : "text-white hover:text-white hover:bg-white/20",
                      activeHash === item.href &&
                        (scrolled
                          ? "font-bold text-secondary underline underline-offset-4 decoration-secondary"
                          : "font-bold text-white underline underline-offset-4"),
                    )}
                    asChild
                  >
                    <a
                      href={item.href}
                      aria-current={
                        activeHash === item.href ? "page" : undefined
                      }
                    >
                      {item.label}
                    </a>
                  </Button>
                ),
              )}
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
              <SheetTitle className="sr-only">
                Главное меню навигации
              </SheetTitle>
              <nav
                className="flex flex-col gap-1"
                aria-label="Мобильная навигация"
              >
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "justify-start w-full",
                        activeHash === item.href &&
                          "font-bold text-secondary underline underline-offset-4 decoration-secondary",
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
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Button
                            key={child.href}
                            variant="ghost"
                            size="sm"
                            className="justify-start text-muted-foreground hover:text-foreground"
                            asChild
                          >
                            <Link href={child.href}>{child.label}</Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="default" className="mt-2" asChild>
                  <a href={headerCta.href}>{headerCta.label}</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={cn(
                "transition-colors",
                scrolled
                  ? "text-foreground hover:bg-secondary/10"
                  : "text-white hover:bg-white/20",
              )}
              aria-label={theme === "dark" ? "Светлая тема" : "Тёмная тема"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button
            size="sm"
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
          >
            <a href={headerCta.href}>{headerCta.label}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
