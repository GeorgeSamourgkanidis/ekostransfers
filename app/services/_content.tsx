"use client";

import {
  Plane,
  Car,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Building,
  Palmtree,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { useTranslations } from "@/components/language-provider";

export default function ServicesContent() {
  const t = useTranslations();

  const SERVICES = [
    {
      icon: Plane,
      title: t.servicesPage.services.airportPickup.title,
      description: t.servicesPage.services.airportPickup.description,
      features: t.servicesPage.services.airportPickup.features,
      highlight: t.servicesPage.services.airportPickup.highlight,
    },
    {
      icon: Car,
      title: t.servicesPage.services.airportDropoff.title,
      description: t.servicesPage.services.airportDropoff.description,
      features: t.servicesPage.services.airportDropoff.features,
      highlight: null,
    },
    {
      icon: Building,
      title: t.servicesPage.services.cityTours.title,
      description: t.servicesPage.services.cityTours.description,
      features: t.servicesPage.services.cityTours.features,
      highlight: null,
    },
    {
      icon: Palmtree,
      title: t.servicesPage.services.halkidiki.title,
      description: t.servicesPage.services.halkidiki.description,
      features: t.servicesPage.services.halkidiki.features,
      highlight: t.servicesPage.services.halkidiki.highlight,
    },
    {
      icon: ArrowRight,
      title: t.servicesPage.services.longDistance.title,
      description: t.servicesPage.services.longDistance.description,
      features: t.servicesPage.services.longDistance.features,
      highlight: null,
    },
    {
      icon: MapPin,
      title: t.servicesPage.services.hotelEvent.title,
      description: t.servicesPage.services.hotelEvent.description,
      features: t.servicesPage.services.hotelEvent.features,
      highlight: null,
    },
  ];

  const STEPS = [
    {
      step: "1",
      title: t.servicesPage.steps.step1.title,
      description: t.servicesPage.steps.step1.description,
    },
    {
      step: "2",
      title: t.servicesPage.steps.step2.title,
      description: t.servicesPage.steps.step2.description,
    },
    {
      step: "3",
      title: t.servicesPage.steps.step3.title,
      description: t.servicesPage.steps.step3.description,
    },
  ];

  return (
    <>
      <HeroSection
        title={t.servicesPage.heroTitle}
        subtitle={t.servicesPage.heroSubtitle}
        imageSrc="/images/hero-services.png"
        imageAlt="Interior of a premium transfer vehicle"
        size="medium"
      />

      {/* Services Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card
                key={service.title}
                className="group relative border-0 bg-card shadow-md transition-shadow hover:shadow-lg"
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                    {service.highlight}
                  </div>
                )}
                <CardContent className="flex flex-col gap-5 p-6">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-accent/10">
                    <service.icon className="size-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-primary py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              {t.servicesPage.howItWorksTitle}
            </h2>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-accent text-2xl font-bold text-accent-foreground">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
