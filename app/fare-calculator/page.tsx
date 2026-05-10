"use client";

import { HeroSection } from "@/components/hero-section";
import { FareCalculatorForm } from "@/components/fare-calculator-form";
import { POPULAR_ROUTES, PRICING, calculateFare } from "@/lib/pricing";
import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";
import { useTranslations } from "@/components/language-provider";

export default function FareCalculatorPage() {
  const t = useTranslations();

  return (
    <>
      <HeroSection
        title={t.fareCalculatorPage.heroTitle}
        subtitle={t.fareCalculatorPage.heroSubtitle}
        imageSrc="/images/hero-calculator.jpg"
        imageAlt="Scenic road in northern Greece"
        size="medium"
      />

      {/* Calculator Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Calculator Form */}
            <div className="lg:col-span-3">
              <FareCalculatorForm />
            </div>

            {/* Sidebar Info */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* Pricing Info */}
              <Card className="border-0 bg-primary shadow-md">
                <CardContent className="flex flex-col gap-4 p-6">
                  <h3 className="font-serif text-lg font-semibold text-primary-foreground">
                    {t.fareCalculatorPage.pricingDetails}
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-2">
                      <span className="text-sm text-primary-foreground/70">
                        {t.fareCalculatorPage.baseFare}
                      </span>
                      <span className="font-semibold text-primary-foreground">
                        {PRICING.baseFare.toFixed(2)} {PRICING.currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-primary-foreground/10 pb-2">
                      <span className="text-sm text-primary-foreground/70">
                        {t.fareCalculatorPage.ratePerKm}
                      </span>
                      <span className="font-semibold text-primary-foreground">
                        {PRICING.perKmRate.toFixed(2)} {PRICING.currency}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-foreground/70">
                        {t.fareCalculatorPage.minimumFare}
                      </span>
                      <span className="font-semibold text-primary-foreground">
                        {PRICING.minimumFare.toFixed(2)} {PRICING.currency}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <div className="flex gap-3 rounded-xl bg-accent/10 p-4">
                <Info className="size-5 shrink-0 text-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t.fareCalculatorPage.disclaimer}
                </p>
              </div>

              {/* Quick Routes */}
              <Card className="border-0 shadow-md">
                <CardContent className="flex flex-col gap-4 p-6">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {t.fareCalculatorPage.popularRoutes}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {POPULAR_ROUTES.map((route, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-border pb-2 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-sm font-medium text-card-foreground">
                            {route.to}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {route.distance} {t.common.km} ~ {route.duration}{" "}
                            {t.common.min}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-accent">
                          {calculateFare(route.distance).toFixed(0)}{" "}
                          {PRICING.currency}
                        </span>
                      </div>
                    ))}
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
