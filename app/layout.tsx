import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactFAB } from "@/components/contact-fab";
import { LanguageProvider } from "@/components/language-provider";
import { BUSINESS, CONTACT } from "@/lib/pricing";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin", "greek"] });

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "EKOS TRANSFERS - Airport Transfers in Thessaloniki",
    template: "%s | EKOS TRANSFERS",
  },
  description:
    "Professional private driver service. Safe, reliable, and comfortable rides at competitive prices.",
  keywords: [
    "Thessaloniki airport transfer",
    "SKG airport taxi",
    "Thessaloniki private driver",
    "airport pickup Thessaloniki",
    "Halkidiki transfer",
    "Thessaloniki taxi service",
    "Greece airport transfer",
  ],
  openGraph: {
    title: "EKOS TRANSFERS - Airport Transfers in Thessaloniki",
    description:
      "Professional private driver service. Safe, reliable, and comfortable rides at competitive prices.",
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS.name,
    description:
      "Professional private driver service. Safe, reliable, and comfortable rides at competitive prices.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
      el: SITE_URL,
      "x-default": SITE_URL,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2340",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  image: `${SITE_URL}/logo.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  url: SITE_URL,
  description: BUSINESS.description,
  areaServed: [
    "Thessaloniki",
    "Halkidiki",
    "Kavala",
    "Katerini",
    "Edessa",
    "Northern Greece",
  ],
  priceRange: "€€",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thessaloniki",
    addressCountry: "GR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactFAB />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
