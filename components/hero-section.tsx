import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  size?: "large" | "medium";
  overlay?: "dark" | "darker";
  centered?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  children,
  size = "large",
  overlay = "dark",
  centered = false,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden",
        size === "large" ? "min-h-[70vh]" : "min-h-[50vh]"
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0",
          overlay === "dark"
            ? "bg-primary/60"
            : "bg-primary/75"
        )}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 lg:px-8">
        <div
          className={cn(
            "max-w-3xl",
            centered && "mx-auto text-center",
          )}
        >
          <h1
            className={cn(
              "font-serif font-bold leading-tight tracking-tight text-primary-foreground text-balance",
              size === "large" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80 md:text-xl text-pretty">
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-4",
                centered && "justify-center",
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
