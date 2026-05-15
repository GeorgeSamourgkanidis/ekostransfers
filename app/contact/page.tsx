import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import ContactContent from "./_content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: en.meta.contactTitle,
  description: en.meta.contactDescription,
  openGraph: {
    title: `${en.meta.contactTitle} | EKOS TRANSFERS`,
    description: en.meta.contactDescription,
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactContent />
    </>
  );
}
