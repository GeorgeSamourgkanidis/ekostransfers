"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface LightboxImage {
  src: string;
  alt: string;
  label: string;
}

interface Props {
  lightboxIndex: number | null;
  currentImage: LightboxImage | null;
  totalImages: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export default function LightboxDialog({
  lightboxIndex,
  currentImage,
  totalImages,
  onPrev,
  onNext,
  onClose,
}: Props) {
  return (
    <Dialog open={lightboxIndex !== null} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[95vw] border-0 bg-black/95 p-0 gap-0"
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">
          {currentImage?.label || "Image lightbox"}
        </DialogTitle>
        {currentImage && (
          <div className="relative flex h-[85vh] w-full items-center justify-center">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="absolute top-4 left-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white backdrop-blur-sm">
              {lightboxIndex! + 1} / {totalImages}
            </div>

            <button
              onClick={onPrev}
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
              />
            </div>

            <button
              onClick={onNext}
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
  );
}
