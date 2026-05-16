"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  title: string;
  items: FaqItem[];
}

export function FaqSection({ title, items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/50 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-center md:text-4xl text-balance">
          {title}
        </h2>

        <div className="mt-8 flex flex-col gap-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border bg-card shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-muted/50"
              >
                <span className="text-sm font-semibold md:text-base">
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
                    openIndex === idx && "rotate-180",
                  )}
                />
              </button>
              {openIndex === idx && (
                <div className="border-t px-6 py-4 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
