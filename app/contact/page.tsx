import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import ContactContent from "./_content";

export const metadata: Metadata = {
  title: en.meta.contactTitle,
  description: en.meta.contactDescription,
  openGraph: {
    title: `${en.meta.contactTitle} | EKOS TRANSFERS`,
    description: en.meta.contactDescription,
  },
};

export default function Page() {
  return <ContactContent />;
}
