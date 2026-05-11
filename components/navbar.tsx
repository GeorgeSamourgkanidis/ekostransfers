"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/pricing";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "@/components/language-provider";
import {
  generateWhatsAppUrl,
  generateViberUrl,
  generateSimpleMessage,
} from "@/lib/whatsapp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations();

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Company Logo" width={85} height={68} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-accent/20 text-accent"
                  : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <Phone className="size-4" />
            <span>{CONTACT.phone}</span>
          </a>
          <Button
            asChild
            className="bg-[#25d366] text-[#fff] hover:bg-[#20bd5a]"
            size="sm"
          >
            <a
              href={generateWhatsAppUrl(generateSimpleMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              {t.contact.whatsapp}
            </a>
          </Button>
          <Button
            asChild
            className="bg-[#7360f2] text-[#fff] hover:bg-[#5f4fd6]"
            size="sm"
          >
            <a
              href={generateViberUrl(generateSimpleMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="size-4" />
              {t.contact.viber}
            </a>
          </Button>
        </div>

        {/* Mobile Language + Menu */}
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                {mobileOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
                <span className="sr-only">{t.nav.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-primary">
              <SheetHeader>
                <SheetTitle />
              </SheetHeader>
              <div className="flex flex-col gap-2 px-4 pt-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-accent/20 text-accent"
                        : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
