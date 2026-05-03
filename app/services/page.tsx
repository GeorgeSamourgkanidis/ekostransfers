import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  Car,
  MapPin,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Building,
  Palmtree,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { BUSINESS } from "@/lib/pricing";
import { generateWhatsAppUrl, generateSimpleMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore the services offered by ${BUSINESS.name} - airport pickups, drop-offs, city tours, and long-distance transfers in Thessaloniki, Greece.`,
};

const SERVICES = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description:
      "Start your trip in Thessaloniki with zero stress. I personally meet you at the arrivals gate with a name sign and help with your luggage.",
    features: [
      "Meet & greet at arrivals hall",
      "Real-time flight tracking",
      "Free waiting time for flight delays",
      "Help with luggage",
      "Comfortable air-conditioned sedan"
    ],
    highlight: "Most Popular",
  },
  {
    icon: Car,
    title: "Airport Drop-off",
    description:
      "Get to Thessaloniki Airport on time, every time. I pick you up from any address in the city or surrounding area and drive you directly to your terminal.",
    features: [
      "Pickup from any address",
      "Timely departure to match your flight",
      "Luggage assistance",
      "Comfortable and clean vehicle",
      "Fixed price, no meter surprises"
    ],
    highlight: null,
  },
  {
    icon: Building,
    title: "City Tours & Sightseeing",
    description:
      "Discover Thessaloniki like a local. I take you to the most iconic spots and hidden gems of this beautiful city, at your own pace.",
    features: [
      "White Tower & waterfront",
      "Ano Poli (Upper Town)",
      "Roman & Byzantine monuments",
      "Local food market stops",
      "Flexible duration and itinerary",
      "Local tips and recommendations",
    ],
    highlight: null,
  },
  {
    icon: Palmtree,
    title: "Halkidiki Transfers",
    description:
      "Heading to the beaches of Halkidiki? I offer direct transfers from Thessaloniki Airport or city center to anywhere in Halkidiki.",
    features: [
      "Direct airport to Halkidiki transfer",
      "Scenic coastal routes",
      "Spacious vehicle for beach gear",
      "Round-trip packages available"
    ],
    highlight: "Popular in Summer",
  },
  {
    icon: ArrowRight,
    title: "Long Distance Transfers",
    description:
      "Need to get further? I provide comfortable long-distance transfers to cities and destinations across northern Greece and beyond.",
    features: [
      "Kavala, Drama, Serres",
      "Katerini, Litochoro (Mount Olympus)",
      "Alexandroupoli",
      "Cross-border transfers available",
      "Rest stops as needed"
    ],
    highlight: null,
  },
  {
    icon: MapPin,
    title: "Hotel & Event Transfers",
    description:
      "Attending a conference, or special event? I provide reliable transfers between any two locations in the Thessaloniki area.",
    features: [
      "Hotel to venue transfers",
      "Conference & event pickups",
      "Round-trip service",
      "On-time guarantee",
      "Professional and discreet",
    ],
    highlight: null,
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="From a quick airport pickup to a full day exploring Thessaloniki, we offer a range of professional transfer services tailored to your needs."
        imageSrc="/images/hero-services.jpg"
        imageAlt="Interior of a premium transfer vehicle"
        size="medium"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
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
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              How It Works
            </h2>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Get a Quote",
                description:
                  "Contact us with your pickup and drop-off locations.",
              },
              {
                step: "2",
                title: "Confirm Booking",
                description:
                  "We reply with the price and availability. Confirm your booking with just a message -- no deposits or apps needed.",
              },
              {
                step: "3",
                title: "Enjoy the Ride",
                description:
                  "We pick you up on time, help with your luggage, and drive you safely to your destination.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-4 text-center">
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

      {/* CTA */}
      {/* <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Need a Custom Quote?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Try our free fare calculator for an instant estimate, or reach out
            directly for a personalized quote.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/fare-calculator">
                Fare Calculator
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#25d366] text-[#fff] hover:bg-[#20bd5a]"
            >
              <a
                href={generateWhatsAppUrl(generateSimpleMessage())}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section> */}
    </>
  );
}
