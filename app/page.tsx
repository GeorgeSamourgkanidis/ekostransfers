import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import HomeContent from "./_home-content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  description: en.meta.homeDescription,
  keywords: [
    "Thessaloniki airport transfer",
    "SKG airport taxi",
    "Thessaloniki private driver",
    "airport pickup Thessaloniki",
    "VIP airport transfer",
    "luxury transfer Thessaloniki",
    "Mercedes van transfer",
    "spacious airport van",
    "Thessaloniki chauffeur",
    "premium transfer Greece",
    "executive airport transfer",
    "taxi van Thessaloniki",
    "VIP driver Thessaloniki",
    "airport transfer van",
    "private van Greece",
  ],
  openGraph: {
    title: en.meta.homeTitle,
    description: en.meta.homeDescription,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.homeTitle,
    description: en.meta.homeDescription,
    images: ["/logo.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I book a transfer with EKOS TRANSFERS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book via WhatsApp, Viber, phone, or email. We respond within minutes and confirm your trip — no app needed.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a transfer from Thessaloniki Airport cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transfers from Thessaloniki Airport (SKG) are charged based on distance with a fixed price quoted upfront. For specific destination prices, check our pricing page.",
      },
    },
    {
      "@type": "Question",
      name: "What vehicle do you use for transfers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use a Mercedes-Benz Vito — a spacious, air-conditioned van that comfortably accommodates up to 7 passengers with plenty of luggage space.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle flight delays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track your flight in real-time and adjust the pickup time automatically. There is no extra charge for flight delays — we wait for you.",
      },
    },
  ],
};

export default function Page() {
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
      <HomeContent />
    </>
  );
}
