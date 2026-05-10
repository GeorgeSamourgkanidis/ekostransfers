"use client";

import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { CONTACT } from "@/lib/pricing";
import {
  generateWhatsAppUrl,
  generateViberUrl,
  generateSimpleMessage,
} from "@/lib/whatsapp";
import { useTranslations } from "@/components/language-provider";

export default function ContactContent() {
  const t = useTranslations();

  const CONTACT_METHODS = [
    {
      icon: MessageCircle,
      title: t.contact.whatsapp,
      value: t.contact.chatNow,
      href: generateWhatsAppUrl(generateSimpleMessage()),
      highlight: "whatsapp",
      external: true,
    },
    {
      icon: Phone,
      title: t.contact.viber,
      value: t.contact.callOnViber,
      href: generateViberUrl(generateSimpleMessage()),
      highlight: "viber",
      external: true,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: CONTACT.phone,
      href: `tel:${CONTACT.whatsapp}`,
      highlight: "none",
      external: false,
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      highlight: "none",
      external: false,
    },
  ];

  return (
    <>
      <HeroSection
        title={t.contactPage.heroTitle}
        subtitle={t.contactPage.heroSubtitle}
        imageSrc="/logo.png"
        imageAlt="Thessaloniki port area at sunset"
        size="medium"
      />

      {/* Contact Methods */}
      <section className="relative -mt-16 z-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border shadow-xl sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_METHODS.map((method) => {
              const bgClass =
                method.highlight === "whatsapp"
                  ? "bg-[#25d366] text-white hover:bg-[#20bd5a]"
                  : method.highlight === "viber"
                    ? "bg-[#7360f2] text-white hover:bg-[#5f4fd6]"
                    : "bg-card text-card-foreground hover:bg-muted/50";
              const isColored = method.highlight !== "none";
              return (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center gap-3 px-4 py-4 text-center transition-colors ${bgClass}`}
                >
                  <method.icon
                    className={`size-6 ${isColored ? "text-white" : "text-accent"}`}
                  />
                  <span className="text-sm font-semibold">{method.title}</span>
                  <span
                    className={`text-sm font-medium ${isColored ? "text-white" : "text-accent"}`}
                  >
                    {method.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground text-balance">
                {t.contactPage.sendMessage}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.contactPage.sendMessageDescription}
              </p>
            </div>

            {/* Info Side */}
            <div className="flex flex-col gap-8">
              {/* Operating Hours */}
              <Card className="border-0 bg-primary shadow-md">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <Clock className="size-6 text-accent" />
                    <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                      {t.contactPage.operatingHours}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-foreground/70">
                        {t.contactPage.transfers}
                      </span>
                      <span className="font-semibold text-accent">24/7</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary-foreground/70">
                        {t.contactPage.response}
                      </span>
                      <span className="font-semibold text-accent">
                        {t.contactPage.lessThan30Min}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
