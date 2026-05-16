import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import GalleryContent from "./_content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: en.meta.galleryTitle,
  description: en.meta.galleryDescription,
  keywords: [
    "Mercedes Vito transfer van",
    "VIP transfer vehicle Greece",
    "luxury transfer van Thessaloniki",
    "private transfer vehicle Greece",
    "Mercedes van airport transfer",
    "spacious passenger van",
    "Vito taxi Thessaloniki",
    "airport transfer vehicle photos",
    "premium van interior",
    "executive transfer vehicle",
    "luxury chauffeur van",
    "group transfer van",
    "Mercedes Vito interior",
    "VIP van Thessaloniki",
    "spacious airport transfer vehicle",
  ],
  openGraph: {
    title: `${en.meta.galleryTitle} | EKOS TRANSFERS`,
    description: en.meta.galleryDescription,
    url: `${SITE_URL}/gallery`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${en.meta.galleryTitle} | EKOS TRANSFERS`,
    description: en.meta.galleryDescription,
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
      name: "Gallery",
      item: `${SITE_URL}/gallery`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many passengers can the Mercedes Vito carry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mercedes-Benz Vito comfortably seats up to 7 passengers with plenty of room for everyone.",
      },
    },
    {
      "@type": "Question",
      name: "Is there enough space for luggage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the Vito has a spacious luggage area that can accommodate multiple suitcases, bags, strollers, and beach equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Is the vehicle air-conditioned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the vehicle has full climate control to keep you comfortable year-round.",
      },
    },
    {
      "@type": "Question",
      name: "Is the vehicle cleaned regularly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. The vehicle is thoroughly cleaned and sanitized before every trip to ensure a spotless experience.",
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
      <GalleryContent />
    </>
  );
}
