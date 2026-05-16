"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { useTranslations } from "@/components/language-provider";
import { FaqSection } from "@/components/faq-section";

const LightboxDialog = dynamic(() => import("./lightbox-dialog"), {
  ssr: false,
});

export default function GalleryContent() {
  const t = useTranslations();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const EXTERIOR_IMAGES = [
    {
      src: "/images/hero-home.jpeg",
      alt: t.galleryPage.images.exterior1Alt,
      label: t.galleryPage.exterior1Label,
    },
  ];

  const INTERIOR_IMAGES = [
    {
      src: "/images/hero-services.jpeg",
      alt: t.galleryPage.images.interior1Alt,
      label: t.galleryPage.interior1Label,
    },
  ];

  const DESTINATION_IMAGES = [
    {
      src: "/images/gallery/location-white-tower.jpg",
      alt: t.galleryPage.destinationImages.whiteTowerAlt,
      label: t.galleryPage.destinationImages.whiteTowerLabel,
    },
    {
      src: "/images/gallery/location-meteora.jpg",
      alt: t.galleryPage.destinationImages.meteoraAlt,
      label: t.galleryPage.destinationImages.meteoraLabel,
    },
    {
      src: "/images/gallery/location-petralona-cave.jpg",
      alt: t.galleryPage.destinationImages.petralonaCaveAlt,
      label: t.galleryPage.destinationImages.petralonaCaveLabel,
    },
    {
      src: "/images/gallery/location-edessa-waterfalls.jpg",
      alt: t.galleryPage.destinationImages.edessaWaterfallsAlt,
      label: t.galleryPage.destinationImages.edessaWaterfallsLabel,
    },
    {
      src: "/images/gallery/location-roman-byzantine.jpg",
      alt: t.galleryPage.destinationImages.romanByzantineAlt,
      label: t.galleryPage.destinationImages.romanByzantineLabel,
    },
    {
      src: "/images/gallery/location-local-food-market.jpg",
      alt: t.galleryPage.destinationImages.localFoodMarketAlt,
      label: t.galleryPage.destinationImages.localFoodMarketLabel,
    },
  ];

  const ALL_IMAGES = [
    ...EXTERIOR_IMAGES,
    ...INTERIOR_IMAGES,
    ...DESTINATION_IMAGES,
  ];
  const interiorsOffset = EXTERIOR_IMAGES.length;
  const destinationsOffset = EXTERIOR_IMAGES.length + INTERIOR_IMAGES.length;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? ALL_IMAGES.length - 1 : prev - 1,
    );
  }, [ALL_IMAGES.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === ALL_IMAGES.length - 1 ? 0 : prev + 1,
    );
  }, [ALL_IMAGES.length]);

  const currentImage =
    lightboxIndex !== null ? ALL_IMAGES[lightboxIndex] : null;

  return (
    <>
      <HeroSection
        title={t.galleryPage.heroTitle}
        subtitle={t.galleryPage.heroSubtitle}
        imageSrc="/images/hero-home.jpeg"
        imageAlt="Mercedes-Benz Vito"
        size="medium"
      />

      {/* Exterior Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              {t.galleryPage.exteriorTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.galleryPage.exteriorSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(idx)}
                className="group cursor-pointer overflow-hidden rounded-xl border bg-card text-left shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="py-3 text-center text-sm font-medium">
                  {img.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="bg-muted/50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              {t.galleryPage.interiorTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.galleryPage.interiorSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INTERIOR_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(interiorsOffset + idx)}
                className="group cursor-pointer overflow-hidden rounded-xl border bg-card text-left shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="py-3 text-center text-sm font-medium">
                  {img.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              {t.galleryPage.destinationsTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.galleryPage.destinationsSubtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DESTINATION_IMAGES.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setLightboxIndex(destinationsOffset + idx)}
                className="group cursor-pointer overflow-hidden rounded-xl border bg-card text-left shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="py-3 text-center text-sm font-medium">
                  {img.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <LightboxDialog
        lightboxIndex={lightboxIndex}
        currentImage={currentImage}
        totalImages={ALL_IMAGES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onClose={() => setLightboxIndex(null)}
      />
      <FaqSection title={t.galleryPage.faqTitle} items={t.galleryPage.faq} />
    </>
  );
}
