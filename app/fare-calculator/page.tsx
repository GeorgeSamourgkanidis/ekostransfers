import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import FareCalculatorContent from "./_content";

export const metadata: Metadata = {
  title: en.meta.fareCalculatorTitle,
  description: en.meta.fareCalculatorDescription,
  openGraph: {
    title: `${en.meta.fareCalculatorTitle} | EKOS TRANSFERS`,
    description: en.meta.fareCalculatorDescription,
  },
};

export default function Page() {
  return <FareCalculatorContent />;
}
