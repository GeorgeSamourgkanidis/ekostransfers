import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import GalleryContent from "./_content";

export const metadata: Metadata = {
  title: en.meta.galleryTitle,
  description: en.meta.galleryDescription,
  openGraph: {
    title: `${en.meta.galleryTitle} | EKOS TRANSFERS`,
    description: en.meta.galleryDescription,
  },
};

export default function Page() {
  return <GalleryContent />;
}
