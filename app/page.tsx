import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import HomeContent from "./_home-content";

export const metadata: Metadata = {
  title: { absolute: en.meta.homeTitle },
  description: en.meta.homeDescription,
  openGraph: {
    title: en.meta.homeTitle,
    description: en.meta.homeDescription,
  },
};

export default function Page() {
  return <HomeContent />;
}
