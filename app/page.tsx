import Link from "next/link";
import {
  Plane,
  Shield,
  Clock,
  Star,
  MapPin,
  TreePalm,
  Car,
  ArrowRight,
  Languages,
  CreditCard,
  Hotel
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import {
  BUSINESS,
  POPULAR_ROUTES,
  PRICING,
  calculateFare,
} from "@/lib/pricing";

const STATS = [
  {
    value: "Hotels",
    label: "Hotels transfers",
    icon: Hotel,
  },
  { value: "24/7", label: "Available", icon: Clock },
  { value: "SKG", label: "Thessaloniki Airport", icon: Plane },
  { value: "Halkidiki", label: "City Tours", icon: TreePalm },
];

const SERVICES = [
  {
    icon: Plane,
    title: "Airport Pickup",
    description:
      "We meet you at arrivals with a name sign. Flight tracking included so we are always on time, even if your flight is delayed.",
  },
  {
    icon: Car,
    title: "Airport Drop-off",
    description:
      "Timely pickup from your hotel or any location in Thessaloniki. We make sure you get to the airport stress-free.",
  },
  {
    icon: MapPin,
    title: "City Tours",
    description:
      "Explore Thessaloniki with a local driver. Visit the White Tower, Ano Poli, the waterfront, and more at your own pace.",
  },
  {
    icon: ArrowRight,
    title: "Long Distance",
    description:
      "Transfers to Halkidiki, Kavala, Katerini, and other destinations. Comfortable rides with competitive fixed prices.",
  },
];

const FEATURES = [
  {
    icon: Shield,
    title: "Safe & Professional",
    description:
      "Licensed, insured, and experienced driver for your peace of mind.",
  },
  {
    icon: CreditCard,
    title: "Fixed Prices",
    description: "No hidden fees or surprises. Know your fare before you book.",
  },
  {
    icon: Clock,
    title: "Always Punctual",
    description: "We track your flight and adjust pickup time automatically.",
  },
  {
    icon: Star,
    title: "Meet & Greet",
    description: "Personal welcome at the airport with your name sign.",
  },
  {
    icon: Languages,
    title: "Multilingual",
    description:
      "Communication in Greek, English, Russian and more for your comfort.",
  },
  {
    icon: Car,
    title: "Comfortable Vehicle",
    description: "Clean, air-conditioned sedan with space for your luggage.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    origin: "London, UK",
    rating: 5,
    text: "Excellent service! Demis was waiting for us at arrivals even though our flight was 30 minutes late. Very comfortable ride to our hotel. Highly recommended!",
  },
  {
    name: "Marco T.",
    origin: "Milan, Italy",
    rating: 5,
    text: "Used Demis Driver for our transfer to Halkidiki. Great car, friendly driver, and fair price. We booked the return trip as well. Top service!",
  },
  {
    name: "Anna K.",
    origin: "Berlin, Germany",
    rating: 5,
    text: "So easy to book via WhatsApp. Got an instant reply and the price was exactly as quoted. The car was spotless. Will use again on my next visit!",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Your Trusted Transfer"
        subtitle="Professional private driver service from Thessaloniki Airport (SKG) to any destination. Safe, comfortable, and always on time."
        imageSrc="/images/hero-home.jpg"
        imageAlt="Professional airport transfer vehicle at Thessaloniki Airport"
        size="large"
      ></HeroSection>

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
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              What We Offer
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Our Transfer Services
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
                View All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Why Travelers Choose Us
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
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Popular Routes
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      Route
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      Distance
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      Duration
                    </th>
                    {/* <th className="px-6 py-4 text-sm font-semibold text-foreground">
                      Estimated Fare
                    </th> */}
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
                          {"from "}
                          {route.from}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {route.distance} km
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        ~{route.duration} min
                      </td>
                      {/* <td className="px-6 py-4">
                        <span className="text-lg font-bold text-accent">
                          {calculateFare(route.distance).toFixed(0)}{" "}
                          {PRICING.currency}
                        </span>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-accent-foreground md:text-4xl text-balance">
            Ready to Book Your Transfer?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-accent-foreground/80">
            Get in touch for confirmation. Available 24/7 for airport pickups
            and drop-offs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="!bg-background border-accent-foreground/20 bg-transparent text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
