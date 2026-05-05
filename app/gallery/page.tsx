"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HeroSection } from "@/components/hero-section";
import { useTranslations } from "@/components/language-provider";

export default function GalleryPage() {
  const t = useTranslations();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const EXTERIOR_IMAGES = [
    {
      src: "/images/gallery/vito-exterior-1.jpg",
      alt: t.galleryPage.images.exterior1Alt,
      label: t.galleryPage.exterior1Label,
    },
    {
      src: "/images/gallery/vito-exterior-2.jpg",
      alt: t.galleryPage.images.exterior2Alt,
      label: t.galleryPage.exterior2Label,
    },
    {
      src: "/images/gallery/vito-exterior-3.jpg",
      alt: t.galleryPage.images.exterior3Alt,
      label: t.galleryPage.exterior3Label,
    },
  ];

  const INTERIOR_IMAGES = [
    {
      src: "/images/gallery/vito-interior-1.jpg",
      alt: t.galleryPage.images.interior1Alt,
      label: t.galleryPage.interior1Label,
    },
    {
      src: "/images/gallery/vito-interior-2.jpg",
      alt: t.galleryPage.images.interior2Alt,
      label: t.galleryPage.interior2Label,
    },
    {
      src: "/images/gallery/vito-interior-3.jpg",
      alt: t.galleryPage.images.interior3Alt,
      label: t.galleryPage.interior3Label,
    },
  ];

  const ALL_IMAGES = [...EXTERIOR_IMAGES, ...INTERIOR_IMAGES];

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : prev === 0 ? ALL_IMAGES.length - 1 : prev - 1,
    );
  }, [ALL_IMAGES.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null
        ? null
        : prev === ALL_IMAGES.length - 1
          ? 0
          : prev + 1,
    );
  }, [ALL_IMAGES.length]);

  const currentImage =
    lightboxIndex !== null ? ALL_IMAGES[lightboxIndex] : null;

  return (
    <>
      <HeroSection
        title={t.galleryPage.heroTitle}
        subtitle={t.galleryPage.heroSubtitle}
        imageSrc="/images/hero-gallery.jpg"
        imageAlt="Mercedes-Benz Vito"
        size="medium"
      />

      {/* Exterior Section */}
      <section className="py-16 lg:py-24">
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
      <section className="bg-muted/50 py-16 lg:py-24">
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
                onClick={() =>
                  setLightboxIndex(EXTERIOR_IMAGES.length + idx)
                }
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

      {/* Lightbox Dialog */}
      <Dialog
        open={lightboxIndex !== null}
        onOpenChange={() => setLightboxIndex(null)}
      >
        <DialogContent
          className="max-w-[95vw] border-0 bg-black/95 p-0 gap-0"
          showCloseButton={false}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          {currentImage && (
            <div className="relative flex h-[85vh] w-full items-center justify-center">
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Close"
              >
                <X className="size-5" />
              </button>

              <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
                {lightboxIndex! + 1} / {ALL_IMAGES.length}
              </div>

              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>

              <div className="relative h-full w-full">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                onClick={handleNext}
                className="absolute right-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="size-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                {currentImage.label}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
