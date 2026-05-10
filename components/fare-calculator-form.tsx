"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  MapPin,
  Navigation,
  Loader2,
  Clock,
  Route,
  MessageCircle,
  AlertCircle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICING } from "@/lib/pricing";
import { generateWhatsAppUrl, generateBookingMessage } from "@/lib/whatsapp";
import { useTranslations } from "@/components/language-provider";

interface Suggestion {
  label: string;
  lat: number;
  lon: number;
}

interface LocationValue {
  label: string;
  lat: number | null;
  lon: number | null;
}

interface FareResult {
  from: string;
  to: string;
  distanceKm: number;
  durationMin: number;
  fareEur: number;
  currency: string;
}

// ---- Autocomplete Input ----

function AddressInput({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  selectHint,
  clearLabel,
  locationConfirmedLabel,
}: {
  id: string;
  label: string;
  icon: typeof MapPin;
  value: LocationValue;
  onChange: (val: LocationValue) => void;
  placeholder: string;
  selectHint: string;
  clearLabel: string;
  locationConfirmedLabel: string;
}) {
  const [query, setQuery] = useState(value.label);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external value changes
  useEffect(() => {
    setQuery(value.label);
  }, [value.label]);

  const fetchSuggestions = useCallback(async (q: string) => {
    if (q.trim().length < 2) {
      setSuggestions([]);
      setOpen(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        `/api/autocomplete?q=${encodeURIComponent(q.trim())}`,
      );
      const data: Suggestion[] = await res.json();
      setSuggestions(data);
      setOpen(data.length > 0);
      setActiveIndex(-1);
    } catch {
      setSuggestions([]);
      setOpen(false);
    } finally {
      setLoading(false);
    }
  }, []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setQuery(val);
    // Clear any previously selected coordinates since user is typing new text
    onChange({ label: val, lat: null, lon: null });

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(val);
    }, 350);
  }

  function selectSuggestion(s: Suggestion) {
    // Shorten the display label
    const short = shortenLabel(s.label);
    setQuery(short);
    setSuggestions([]);
    setOpen(false);
    onChange({ label: short, lat: s.lat, lon: s.lon });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  function handleClear() {
    setQuery("");
    setSuggestions([]);
    setOpen(false);
    onChange({ label: "", lat: null, lon: null });
    inputRef.current?.focus();
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const hasCoords = value.lat != null && value.lon != null;

  return (
    <div className="flex flex-col gap-2" ref={wrapperRef}>
      <label htmlFor={id} className="text-sm font-medium text-card-foreground">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-accent" />
        <input
          ref={inputRef}
          id={id}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-autocomplete="list"
          aria-controls={`${id}-listbox`}
          aria-activedescendant={
            activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
          }
          autoComplete="off"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (suggestions.length > 0) setOpen(true);
          }}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-input bg-background pr-10 pl-11 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
        />
        {/* Status indicators */}
        <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
          {loading && (
            <Loader2 className="size-4 animate-spin text-muted-foreground" />
          )}
          {hasCoords && !loading && (
            <div
              className="size-2 rounded-full bg-emerald-500"
              title={locationConfirmedLabel}
            />
          )}
          {query.length > 0 && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="rounded-full p-0.5 text-muted-foreground hover:text-foreground"
              aria-label={clearLabel}
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {/* Dropdown */}
        {open && (
          <ul
            id={`${id}-listbox`}
            role="listbox"
            className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-auto rounded-xl border border-border bg-card shadow-lg"
          >
            {suggestions.map((s, i) => (
              <li
                key={`${s.lat}-${s.lon}-${i}`}
                id={`${id}-option-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                className={`flex cursor-pointer items-start gap-2 px-3 py-2.5 text-sm ${
                  i === activeIndex
                    ? "bg-accent/10 text-card-foreground"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-card-foreground"
                }`}
                onMouseDown={() => selectSuggestion(s)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="line-clamp-2 leading-snug">
                  {shortenLabel(s.label)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {!hasCoords && query.length >= 2 && !loading && (
        <p className="text-xs text-muted-foreground">{selectHint}</p>
      )}
    </div>
  );
}

/** Shorten a Nominatim display_name for readability */
function shortenLabel(full: string): string {
  // Nominatim returns "Place, Street, Area, City, Region, PostCode, Country"
  // Keep up to 4 parts for a reasonable label
  const parts = full.split(", ");
  if (parts.length <= 4) return full;
  return parts.slice(0, 4).join(", ");
}

// ---- Main Form ----

export function FareCalculatorForm() {
  const [fromLocation, setFromLocation] = useState<LocationValue>({
    label: "Thessaloniki Airport, Thermi, Thessaloniki",
    lat: 40.5197,
    lon: 22.9709,
  });
  const [toLocation, setToLocation] = useState<LocationValue>({
    label: "",
    lat: null,
    lon: null,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FareResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations();

  async function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    if (!fromLocation.label.trim() || !toLocation.label.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/calculate-fare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fromAddress: fromLocation.label.trim(),
          toAddress: toLocation.label.trim(),
          fromLat: fromLocation.lat,
          fromLon: fromLocation.lon,
          toLat: toLocation.lat,
          toLon: toLocation.lon,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setResult(data);
    } catch {
      setError("Failed to connect. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  }

  const whatsappUrl = result
    ? generateWhatsAppUrl(
        generateBookingMessage({
          from: result.from,
          to: result.to,
          distance: `${result.distanceKm} km`,
          duration: `${result.durationMin} min`,
          fare: `${result.fareEur.toFixed(2)} ${result.currency}`,
        }),
      )
    : null;

  return (
    <div className="flex flex-col gap-8">
      {/* Form */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="font-serif text-2xl font-bold text-card-foreground">
            {t.fareForm.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {t.fareForm.description}
          </p>

          <form onSubmit={handleCalculate} className="mt-6 flex flex-col gap-5">
            <AddressInput
              id="from-address"
              label={t.fareForm.pickupLocation}
              icon={MapPin}
              value={fromLocation}
              onChange={setFromLocation}
              placeholder={t.fareForm.pickupPlaceholder}
              selectHint={t.fareForm.selectSuggestion}
              clearLabel={t.fareForm.clear}
              locationConfirmedLabel={t.fareForm.locationConfirmed}
            />

            <AddressInput
              id="to-address"
              label={t.fareForm.destination}
              icon={Navigation}
              value={toLocation}
              onChange={setToLocation}
              placeholder={t.fareForm.destinationPlaceholder}
              selectHint={t.fareForm.selectSuggestion}
              clearLabel={t.fareForm.clear}
              locationConfirmedLabel={t.fareForm.locationConfirmed}
            />

            <Button
              type="submit"
              disabled={
                loading ||
                !fromLocation.label.trim() ||
                !toLocation.label.trim()
              }
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {loading ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  {t.fareForm.calculating}
                </>
              ) : (
                t.fareForm.calculateFare
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
          <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Result */}
      {result && (
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <h3 className="font-serif text-xl font-bold text-card-foreground">
              {t.fareForm.yourFareEstimate}
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {/* Route summary */}
              <div className="flex flex-col gap-2 rounded-xl bg-muted/50 p-4">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t.fareForm.fromLabel}
                    </p>
                    <p className="text-sm font-medium text-card-foreground">
                      {result.from}
                    </p>
                  </div>
                </div>
                <div className="ml-2 h-4 border-l-2 border-dashed border-accent/30" />
                <div className="flex items-start gap-2">
                  <Navigation className="mt-0.5 size-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {t.fareForm.toLabel}
                    </p>
                    <p className="text-sm font-medium text-card-foreground">
                      {result.to}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/50 p-4">
                  <Route className="size-5 text-accent" />
                  <span className="text-lg font-bold text-card-foreground">
                    {result.distanceKm}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.common.km}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 rounded-xl bg-muted/50 p-4">
                  <Clock className="size-5 text-accent" />
                  <span className="text-lg font-bold text-card-foreground">
                    {result.durationMin}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.common.min}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 rounded-xl bg-accent/10 p-4">
                  <span className="text-xs font-semibold uppercase text-accent">
                    {t.fareForm.fare}
                  </span>
                  <span className="text-2xl font-bold text-accent">
                    {result.fareEur.toFixed(0)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {result.currency}
                  </span>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>{t.fareCalculatorPage.baseFare}</span>
                  <span>
                    {PRICING.baseFare.toFixed(2)} {result.currency}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>
                    {t.fareForm.distance} ({result.distanceKm} {t.common.km} x{" "}
                    {PRICING.perKmRate.toFixed(2)})
                  </span>
                  <span>
                    {(result.distanceKm * PRICING.perKmRate).toFixed(2)}{" "}
                    {result.currency}
                  </span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 font-semibold text-card-foreground">
                  <span>{t.fareForm.totalEstimate}</span>
                  <span>
                    {result.fareEur.toFixed(2)} {result.currency}
                  </span>
                </div>
              </div>

              {/* WhatsApp Book */}
              {whatsappUrl && (
                <Button
                  asChild
                  size="lg"
                  className="mt-2 w-full bg-[#25d366] text-[#fff] hover:bg-[#20bd5a]"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-5" />
                    {t.fareForm.bookThisTrip}
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
