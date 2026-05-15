import type { Metadata } from "next";
import PricingContent from "./_content";

const SITE_URL = "https://ekostransfers.com";

export const metadata: Metadata = {
  title: "Transfer Prices",
  description:
    "Fixed prices for private transfers. Transparent pricing — no hidden fees or meter surprises. Book your ride with EKOS TRANSFERS.",
  openGraph: {
    title: "Transfer Prices | EKOS TRANSFERS",
    description:
      "Fixed prices for private transfers from Thessaloniki Airport (SKG) and city center to all Halkidiki destinations.",
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

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PricingContent />
    </>
  );
}
