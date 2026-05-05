"use client";

import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/pricing";
import {
  generateWhatsAppUrl,
  generateViberUrl,
  generateSimpleMessage,
} from "@/lib/whatsapp";

const CONTACT_OPTIONS = [
  {
    label: "Phone",
    href: `tel:${CONTACT.phone}`,
    icon: Phone,
    color: "bg-primary",
    textColor: "text-primary-foreground",
    hoverColor: "hover:bg-primary/90",
    external: false,
  },
  {
    label: "Viber",
    href: generateViberUrl(generateSimpleMessage()),
    icon: Phone,
    color: "bg-[#7360f2]",
    textColor: "text-white",
    hoverColor: "hover:bg-[#5f4fd6]",
    external: true,
  },
  {
    label: "WhatsApp",
    href: generateWhatsAppUrl(generateSimpleMessage()),
    icon: MessageCircle,
    color: "bg-[#25d366]",
    textColor: "text-white",
    hoverColor: "hover:bg-[#20bd5a]",
    external: true,
  },
];

export function ContactFAB() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 lg:hidden">
      {/* Contact option bubbles */}
      <div className="flex flex-col items-end gap-3">
        {CONTACT_OPTIONS.map((option, index) => {
          const Icon = option.icon;
          return (
            <a
              key={option.label}
              href={option.href}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              aria-label={`Contact via ${option.label}`}
              className={cn(
                "flex items-center gap-2.5 rounded-full px-4 py-2.5 shadow-lg transition-all duration-300",
                option.color,
                option.textColor,
                option.hoverColor,
                "origin-bottom-right",
                open
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-4 scale-75 opacity-0 pointer-events-none",
              )}
              style={{
                transitionDelay: open
                  ? `${index * 60}ms`
                  : `${(CONTACT_OPTIONS.length - 1 - index) * 40}ms`,
              }}
              onClick={() => setOpen(false)}
            >
              <Icon className="size-4 shrink-0" />
              <span className="text-sm font-medium">{option.label}</span>
            </a>
          );
        })}
      </div>

      {/* Main FAB button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        aria-expanded={open}
        className={cn(
          "flex size-14 items-center justify-center rounded-full shadow-xl transition-all duration-300",
          "bg-accent text-accent-foreground hover:bg-accent/90",
        )}
      >
        {open ? (
          <X className="size-6" />
        ) : (
          <MessageCircle className="size-6" />
        )}
      </button>
    </div>
  );
}
