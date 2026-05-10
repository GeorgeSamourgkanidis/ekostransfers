import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import ServicesContent from "./_content";

export const metadata: Metadata = {
  title: en.meta.servicesTitle,
  description: en.meta.servicesDescription,
  openGraph: {
    title: `${en.meta.servicesTitle} | EKOS TRANSFERS`,
    description: en.meta.servicesDescription,
  },
};

export default function Page() {
  return <ServicesContent />;
}
