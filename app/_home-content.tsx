"use client";

import Link from "next/link";
import {
  Plane,
  Shield,
  Clock,
  Star,
  Palmtree,
  TreePalm,
  Car,
  ArrowRight,
  Languages,
  CreditCard,
  Hotel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { POPULAR_ROUTES } from "@/lib/pricing";
import { useTranslations } from "@/components/language-provider";

export default function HomeContent() {
  const t = useTranslations();

  const STATS = [
    {
      value: t.home.stats.hotels,
      label: t.home.stats.hotelsLabel,
      icon: Hotel,
    },
    {
      value: t.home.stats.available,
      label: t.home.stats.availableLabel,
      icon: Clock,
    },
    {
      value: t.home.stats.airport,
      label: t.home.stats.airportLabel,
      icon: Plane,
    },
    {
      value: t.home.stats.tours,
      label: t.home.stats.toursLabel,
      icon: TreePalm,
    },
  ];

  const SERVICES = [
    {
      icon: Plane,
      title: t.home.services.airportPickup.title,
      description: t.home.services.airportPickup.description,
    },
    {
      icon: Car,
      title: t.home.services.airportDropoff.title,
      description: t.home.services.airportDropoff.description,
    },
    {
      icon: Palmtree,
      title: t.servicesPage.services.halkidiki.title,
      description: t.servicesPage.services.halkidiki.description,
    },
    {
      icon: ArrowRight,
      title: t.home.services.longDistance.title,
      description: t.home.services.longDistance.description,
    },
  ];

  const FEATURES = [
    {
      icon: Shield,
      title: t.home.features.safe.title,
      description: t.home.features.safe.description,
    },
    {
      icon: CreditCard,
      title: t.home.features.fixedPrices.title,
      description: t.home.features.fixedPrices.description,
    },
    {
      icon: Clock,
      title: t.home.features.punctual.title,
      description: t.home.features.punctual.description,
    },
    {
      icon: Star,
      title: t.home.features.meetGreet.title,
      description: t.home.features.meetGreet.description,
    },
    {
      icon: Languages,
      title: t.home.features.multilingual.title,
      description: t.home.features.multilingual.description,
    },
    {
      icon: Car,
      title: t.home.features.comfortable.title,
      description: t.home.features.comfortable.description,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={t.home.heroTitle}
        subtitle={t.home.heroSubtitle}
        imageSrc="/images/hero-home.png"
        imageAlt="Professional airport transfer vehicle at Thessaloniki Airport"
        size="large"
        centered
      >
        <Button
          asChild
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/contact">{t.common.contactUs}</Link>
        </Button>
      </HeroSection>

      {/* Stats Bar */}
      <section className="relative -mt-16 z-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border shadow-xl md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 bg-card px-6 py-8 text-center"
              >
                <stat.icon className="size-6 text-accent" />
                <span className="text-2xl font-bold text-card-foreground">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t.home.servicesSection}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t.home.servicesTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Card
                key={service.title}
                className="group border-0 bg-card shadow-md transition-shadow hover:shadow-lg"
              >
                <CardContent className="flex flex-col items-start gap-4 p-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10">
                    <service.icon className="size-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                {t.home.viewAllServices}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              {t.home.featuresTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/15">
                  <feature.icon className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-foreground/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              {t.home.popularRoutesTitle}
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.home.routeTableHeaders.route}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.home.routeTableHeaders.distance}
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      {t.home.routeTableHeaders.duration}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {POPULAR_ROUTES.map((route, index) => (
                    <tr
                      key={index}
                      className="border-b last:border-0 transition-colors hover:bg-muted/30"
                    >
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-foreground">
                          {route.to}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.common.from} {route.from}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {route.distance} {t.common.km}
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        ~{route.duration} {t.common.min}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
