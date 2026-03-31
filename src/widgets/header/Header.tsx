"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
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
import { Menu, Moon, Sun, ChevronDown, Globe } from "lucide-react";
import { navLinks, headerCta } from "@/shared/lib/links";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, localeLabels } from "@/i18n/routing";
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
  const t = useTranslations("header");
  const tNav = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
  }

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
        href="#main"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 rounded-sm bg-primary px-4 py-2 text-primary-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
      >
        {t("skipToMain")}
      </a>
      <div className={"container flex items-center justify-between py-0"}>
        <div className="mr-8 flex">
          <Link href="/" className={"flex items-center transition-all py-2"}>
            <Image
              src="/assets/images/logo.svg"
              alt={t("logoAlt")}
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
          aria-label={t("mainNav")}
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
                            : "text-foreground hover:text-secondary hover:bg-secondary/10",
                        )}
                      >
                        {tNav(item.labelKey)}
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      <DropdownMenuItem asChild>
                        <Link href={item.href} className="font-medium">
                          {t("allServices")}
                        </Link>
                      </DropdownMenuItem>
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.href} asChild>
                          <Link href={child.href}>{tNav(child.labelKey)}</Link>
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
                        : "text-foreground hover:text-secondary hover:bg-secondary/10",
                      activeHash === item.href &&
                        "font-bold text-secondary underline underline-offset-4 decoration-secondary",
                    )}
                    asChild
                  >
                    <Link
                      href={item.href}
                      aria-current={
                        activeHash === item.href ? "page" : undefined
                      }
                    >
                      {tNav(item.labelKey)}
                    </Link>
                  </Button>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("menu")}>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetTitle className="sr-only">{t("mainMenu")}</SheetTitle>
              <nav className="flex flex-col gap-1" aria-label={t("mobileNav")}>
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "justify-start w-full whitespace-normal text-left",
                        activeHash === item.href &&
                          "font-bold text-secondary underline underline-offset-4 decoration-secondary",
                      )}
                      asChild
                    >
                      <Link
                        href={item.href}
                        {...(activeHash === item.href && {
                          "aria-current": "page",
                        })}
                      >
                        {tNav(item.labelKey)}
                      </Link>
                    </Button>
                    {item.children && (
                      <div className="ml-4 flex flex-col gap-0.5">
                        {item.children.map((child) => (
                          <Button
                            key={child.href}
                            variant="ghost"
                            size="sm"
                            className="justify-start text-muted-foreground hover:text-foreground whitespace-normal text-left h-auto py-1.5"
                            asChild
                          >
                            <Link href={child.href}>
                              {tNav(child.labelKey)}
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button variant="default" className="mt-2" asChild>
                  <Link href={headerCta.href}>{tNav(headerCta.labelKey)}</Link>
                </Button>
              </nav>
              {mounted && (
                <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 hover:text-foreground"
                        aria-label={t("language")}
                      >
                        <Globe className="h-4 w-4" aria-hidden="true" />
                        <span className="text-xs uppercase">{locale}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {routing.locales.map((loc) => (
                        <DropdownMenuItem
                          key={loc}
                          onClick={() => switchLocale(loc)}
                          className={cn(loc === locale && "font-bold")}
                        >
                          {localeLabels[loc]}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="hover:text-foreground"
                    aria-label={
                      theme === "dark" ? t("lightTheme") : t("darkTheme")
                    }
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {mounted && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "gap-1 transition-colors hover:text-foreground",
                      scrolled
                        ? "text-foreground hover:bg-secondary/10"
                        : "text-foreground hover:bg-secondary/10",
                    )}
                    aria-label={t("language")}
                  >
                    <Globe className="h-4 w-4" aria-hidden="true" />
                    <span className="text-xs uppercase">{locale}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {routing.locales.map((loc) => (
                    <DropdownMenuItem
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(loc === locale && "font-bold")}
                    >
                      {localeLabels[loc]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "transition-colors hover:text-foreground",
                  scrolled
                    ? "text-foreground hover:bg-secondary/10"
                    : "text-foreground hover:bg-secondary/10",
                )}
                aria-label={theme === "dark" ? t("lightTheme") : t("darkTheme")}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </>
          )}
          <Button
            size="sm"
            asChild
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg"
          >
            <Link href={headerCta.href}>{tNav(headerCta.labelKey)}</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
