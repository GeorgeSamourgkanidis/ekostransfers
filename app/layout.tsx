import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactFAB } from "@/components/contact-fab";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: {
    default: "EKOS TRANSFERS - Airport Transfers in Thessaloniki",
    template: "%s | EKOS TRANSFERS",
  },
  description:
    "Professional private driver service for airport transfers and city transportation in Thessaloniki, Greece. Safe, reliable, and comfortable rides at competitive prices.",
  keywords: [
    "Thessaloniki airport transfer",
    "SKG airport taxi",
    "Thessaloniki private driver",
    "airport pickup Thessaloniki",
    "Halkidiki transfer",
    "Thessaloniki taxi service",
    "Greece airport transfer",
  ],
  openGraph: {
    title: "EKOS TRANSFERS - Airport Transfers in Thessaloniki",
    description:
      "Professional private driver service for airport transfers in Thessaloniki, Greece.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a2340",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ContactFAB />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
