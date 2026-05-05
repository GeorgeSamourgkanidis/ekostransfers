"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "@/components/language-provider";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const t = useTranslations();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, this would send to an API endpoint
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="border-0 shadow-md">
        <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="size-8 text-accent" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-card-foreground">
            {t.contactForm.messageSent}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t.contactForm.thankYou}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "", message: "" });
            }}
          >
            {t.contactForm.sendAnother}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-sm font-medium text-card-foreground"
            >
              {t.contactForm.fullName}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder={t.contactForm.namePlaceholder}
              className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-sm font-medium text-card-foreground"
              >
                {t.contactForm.email}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder={t.contactForm.emailPlaceholder}
                className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-phone"
                className="text-sm font-medium text-card-foreground"
              >
                {t.contactForm.phone}
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={t.contactForm.phonePlaceholder}
                className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-sm font-medium text-card-foreground"
            >
              {t.contactForm.message}
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder={t.contactForm.messagePlaceholder}
              className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Send className="size-4" />
            {t.contactForm.sendMessage}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
