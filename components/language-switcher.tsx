"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

const LANGUAGES = [
  {
    code: "en" as const,
    label: "English",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        className="size-5 rounded-sm object-cover"
      >
        <clipPath id="a">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id="b">
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
        <g clipPath="url(#a)">
          <path d="M0 0v30h60V0z" fill="#012169" />
          <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0 0l60 30m0-30L0 30"
            clipPath="url(#b)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
  {
    code: "el" as const,
    label: "Ελληνικά",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 18"
        className="size-5 rounded-sm object-cover"
      >
        <rect width="27" height="18" fill="#0D5EAF" />
        <rect y="2" width="27" height="2" fill="#fff" />
        <rect y="6" width="27" height="2" fill="#fff" />
        <rect y="10" width="27" height="2" fill="#fff" />
        <rect y="14" width="27" height="2" fill="#fff" />
        <rect width="10" height="10" fill="#0D5EAF" />
        <rect x="4" width="2" height="10" fill="#fff" />
        <rect y="4" width="10" height="2" fill="#fff" />
      </svg>
    ),
  },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === locale)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors",
          "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
        )}
      >
        {currentLang.flag}
        <span className="hidden sm:inline">{currentLang.label}</span>
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.selectLanguage}
          className={cn(
            "absolute right-0 top-full mt-2 z-50",
            "min-w-[140px] overflow-hidden rounded-xl border border-primary-foreground/10",
            "bg-primary shadow-xl",
            "animate-in fade-in-0 zoom-in-95 duration-150",
          )}
        >
          {LANGUAGES.map((lang) => (
            <li key={lang.code} role="option" aria-selected={locale === lang.code}>
              <button
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                  locale === lang.code
                    ? "bg-accent/20 text-accent font-medium"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                {lang.flag}
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
