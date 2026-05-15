"use client";

import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { PRICE_SECTIONS } from "@/lib/pricing-data";
import { useTranslations } from "@/components/language-provider";

export default function PricingContent() {
  const t = useTranslations();

  const allEntries = PRICE_SECTIONS.flatMap((s) => s.entries);

  return (
    <>
      <HeroSection
        title={t.pricingPage.heroTitle}
        subtitle={t.pricingPage.heroSubtitle}
        imageSrc="/logo.png"
        imageAlt="transfer prices"
        size="medium"
      />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.pricingPage.destinationHeader}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.pricingPage.fromAirportHeader}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.pricingPage.fromCenterHeader}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allEntries.map((entry) => (
                    <tr
                      key={entry.key}
                      className="border-b last:border-0 transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-foreground">
                        {
                          t.pricingPage.destinations[
                            entry.key as keyof typeof t.pricingPage.destinations
                          ]
                        }
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {entry.fromAirport}€
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {entry.fromCenter}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <Link href="/contact">
            <h2 className="font-serif text-3xl font-bold text-accent-foreground md:text-4xl text-balance cursor-pointer hover:underline">
              {t.common.bookNow}
            </h2>
          </Link>
          <p className="mt-4 text-lg leading-relaxed text-accent-foreground/80">
            {t.pricingPage.ctaSubtitle}
          </p>
        </div>
      </section>
    </>
  );
}
