import type { Metadata } from "next";
import PricingContent from "./_content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: "Transfer Prices",
  description:
    "Fixed prices for private transfers. Transparent pricing — no hidden fees or meter surprises. Book your ride with EKOS TRANSFERS.",
  keywords: [
    "Halkidiki transfer prices",
    "Thessaloniki airport taxi cost",
    "VIP transfer cost Greece",
    "luxury van price Thessaloniki",
    "Mercedes van transfer price",
    "SKG to Halkidiki price",
    "airport transfer rates",
    "fixed price transfer Greece",
    "premium van rates",
    "executive transfer pricing",
    "spacious van transfer cost",
    "Kassandra transfer price",
    "Sithonia taxi rates",
    "group transfer prices",
    "private transfer pricing",
  ],
  openGraph: {
    title: "Transfer Prices | EKOS TRANSFERS",
    description:
      "Fixed prices for private transfers from Thessaloniki Airport (SKG) and city center to all Halkidiki destinations.",
    url: `${SITE_URL}/pricing`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Transfer Prices | EKOS TRANSFERS",
    description:
      "Fixed prices for private transfers. Transparent pricing — no hidden fees.",
    images: ["/logo.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Transfer Prices",
      item: `${SITE_URL}/pricing`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are the prices per person or per vehicle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All prices are per vehicle, not per person. Whether you are traveling alone or with a group, the price stays the same.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The price includes all taxes, tolls, fuel, flight tracking, and meet & greet at the airport. No hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge extra for luggage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, luggage is included at no extra cost. Our Mercedes Vito has ample space for suitcases, bags, and beach gear.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer round-trip transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, round-trip transfers are available. The round-trip price is listed next to each destination on the pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "Can I pay in cash?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, cash payment is accepted. We also accept bank transfer upon request.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PricingContent />
    </>
  );
}
