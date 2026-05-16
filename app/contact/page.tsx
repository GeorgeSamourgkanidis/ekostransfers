import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import ContactContent from "./_content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: en.meta.contactTitle,
  description:
    "Book your airport transfer in Thessaloniki. Contact us via WhatsApp, Viber, phone, or email. Available 24/7 for airport pickups, drop-offs, and Halkidiki transfers.",
  keywords: [
    "book airport transfer Thessaloniki",
    "Thessaloniki transfer contact",
    "VIP airport transfer booking",
    "luxury transfer reservation",
    "Mercedes van booking",
    "contact Thessaloniki taxi",
    "book private driver Thessaloniki",
    "SKG transfer booking",
    "Halkidiki transfer booking",
    "airport pickup reservation",
    "premium van transfer Greece",
    "executive chauffeur booking",
    "luxury driver Thessaloniki",
    "spacious airport van booking",
    "VIP transfer WhatsApp",
  ],
  openGraph: {
    title: `${en.meta.contactTitle} | EKOS TRANSFERS`,
    description:
      "Book your airport transfer in Thessaloniki. Contact us via WhatsApp, Viber, phone, or email. Available 24/7.",
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${en.meta.contactTitle} | EKOS TRANSFERS`,
    description:
      "Book your airport transfer in Thessaloniki. Contact us via WhatsApp, Viber, phone, or email. Available 24/7.",
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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly will you respond to my message?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We typically respond within a few minutes. For the fastest response, contact us via WhatsApp or Viber.",
      },
    },
    {
      "@type": "Question",
      name: "How do I confirm my booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your booking is confirmed with just a message. Payment is upon arrival.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a transfer for someone else?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, just provide us with their flight details, name, and destination. We will meet them at arrivals with their name sign.",
      },
    },
    {
      "@type": "Question",
      name: "What if I need to cancel or change my booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cancellations and changes are easy — just contact us via WhatsApp, Viber, phone, or email and we will handle it immediately.",
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
      <ContactContent />
    </>
  );
}
