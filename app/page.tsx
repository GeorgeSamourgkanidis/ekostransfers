import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import HomeContent from "./_home-content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: { absolute: en.meta.homeTitle },
  description: en.meta.homeDescription,
  openGraph: {
    title: en.meta.homeTitle,
    description: en.meta.homeDescription,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomeContent />
    </>
  );
}
