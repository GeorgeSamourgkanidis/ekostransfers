import type { Metadata } from "next";
import { en } from "@/lib/i18n";
import ServicesContent from "./_content";

export const metadata: Metadata = {
  title: en.meta.servicesTitle,
  description: en.meta.servicesDescription,
  openGraph: {
    title: `${en.meta.servicesTitle} | EKOS TRANSFERS`,
    description: en.meta.servicesDescription,
  },
};

const SITE_URL = "https://ekostransfers.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Airport Pickup",
      description:
        "Meet & greet at Thessaloniki Airport arrivals with a name sign. Real-time flight tracking, luggage assistance, and comfortable transfer to your destination.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Thessaloniki, Greece",
      serviceType: "Airport Transfer",
    },
    {
      "@type": "Service",
      position: 2,
      name: "Airport Drop-off",
      description:
        "Timely pickup from your hotel or any address in Thessaloniki to the airport. Luggage assistance and fixed pricing.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Thessaloniki, Greece",
      serviceType: "Airport Transfer",
    },
    {
      "@type": "Service",
      position: 3,
      name: "City Tours & Sightseeing",
      description:
        "Private tours of Thessaloniki covering the White Tower, Ano Poli, Roman and Byzantine monuments, and local food markets at your own pace.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Thessaloniki, Greece",
      serviceType: "Tour",
    },
    {
      "@type": "Service",
      position: 4,
      name: "Halkidiki Transfers",
      description:
        "Direct private transfers from Thessaloniki Airport or city center to any destination in Halkidiki. Fixed competitive pricing.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Halkidiki, Greece",
      serviceType: "Transfer",
    },
    {
      "@type": "Service",
      position: 5,
      name: "Long Distance Transfers",
      description:
        "Private transfers to Kavala, Katerini, Edessa, Meteora, and other destinations across northern Greece.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Northern Greece",
      serviceType: "Transfer",
    },
    {
      "@type": "Service",
      position: 6,
      name: "Hotel & Event Transfers",
      description:
        "Reliable transfers between hotels, conference venues, and event locations in the Thessaloniki area.",
      provider: { "@type": "LocalBusiness", name: "EKOS TRANSFERS" },
      areaServed: "Thessaloniki, Greece",
      serviceType: "Transfer",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${SITE_URL}/services`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a transfer from Thessaloniki Airport to the city center cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A transfer from Thessaloniki Airport (SKG) to the city center starts from approximately €18, with a fixed price based on distance — no hidden fees or meter surprises.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get from Thessaloniki Airport to Halkidiki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to book a private transfer. We offer direct airport-to-resort transfers to Kassandra, Sithonia, and all Halkidiki destinations with fixed competitive pricing and door-to-door service.",
      },
    },
    {
      "@type": "Question",
      name: "Do you pick up passengers from Thessaloniki Airport with a name sign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our driver will meet you at the arrivals gate holding a name sign. We also track your flight in real-time so we are always on time, even if your flight is delayed.",
      },
    },
    {
      "@type": "Question",
      name: "Are your transfer prices fixed or metered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our prices are fixed and quoted upfront. You know your fare before you book — no meter, no traffic surcharges, no hidden costs.",
      },
    },
    {
      "@type": "Question",
      name: "How far is Thessaloniki Airport from the city center?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Thessaloniki Airport (SKG) is approximately 17 km from the city center, with a driving time of about 20–25 minutes depending on traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book an airport transfer at night or early morning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our service operates 24/7, including late-night flights and early morning departures. We adjust to your flight schedule.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a transfer in Thessaloniki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book via WhatsApp, Viber, phone call, or email. We respond within minutes and confirm your trip with a fixed price — no app or deposit needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer city tours in Thessaloniki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer private city tours of Thessaloniki covering the White Tower, Ano Poli, Roman and Byzantine monuments, local food markets, and more — all at your own pace with a local driver.",
      },
    },
  ],
};

const faqSchemaEl = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "el",
  mainEntity: [
    {
      "@type": "Question",
      name: "Πόσο κοστίζει μια μεταφορά από το Αεροδρόμιο Θεσσαλονίκης προς το κέντρο της πόλης;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Η μεταφορά από το Αεροδρόμιο Θεσσαλονίκης (SKG) προς το κέντρο της πόλης ξεκινά από περίπου €18, με σταθερή τιμή βάσει απόστασης — χωρίς κρυφές χρεώσεις ή εκπλήξεις.",
      },
    },
    {
      "@type": "Question",
      name: "Πώς μπορώ να πάω από το Αεροδρόμιο Θεσσαλονίκης στη Χαλκιδική;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ο ευκολότερος τρόπος είναι να κλείσετε μια ιδιωτική μεταφορά. Προσφέρουμε απευθείας μεταφορές από το αεροδρόμιο προς Κασσάνδρα, Σιθωνία και όλους τους προορισμούς της Χαλκιδικής με σταθερές ανταγωνιστικές τιμές.",
      },
    },
    {
      "@type": "Question",
      name: "Παραλαμβάνετε επιβάτες από το Αεροδρόμιο Θεσσαλονίκης με πινακίδα;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι, ο οδηγός μας σας περιμένει στην αίθουσα αφίξεων κρατώντας πινακίδα με το όνομά σας. Παρακολουθούμε την πτήση σας σε πραγματικό χρόνο, ώστε να είμαστε πάντα στην ώρα μας, ακόμα κι αν η πτήση σας καθυστερήσει.",
      },
    },
    {
      "@type": "Question",
      name: "Οι τιμές μεταφοράς είναι σταθερές ή μετρητές;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Όλες οι τιμές μας είναι σταθερές και σας δίνονται εκ των προτέρων. Γνωρίζετε το κόστος πριν κλείσετε — χωρίς μετρητή, χωρίς επιβαρύνσεις λόγω κίνησης, χωρίς κρυφά κόστη.",
      },
    },
    {
      "@type": "Question",
      name: "Πόσο απέχει το Αεροδρόμιο Θεσσαλονίκης από το κέντρο της πόλης;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Το Αεροδρόμιο Θεσσαλονίκης (SKG) απέχει περίπου 17 χλμ από το κέντρο της πόλης, με διάρκεια διαδρομής περίπου 20-25 λεπτά ανάλογα με την κίνηση.",
      },
    },
    {
      "@type": "Question",
      name: "Μπορώ να κλείσω μεταφορά από το αεροδρόμιο τη νύχτα ή νωρίς το πρωί;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Φυσικά. Η υπηρεσία μας λειτουργεί 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα, συμπεριλαμβανομένων νυχτερινών πτήσεων και πρώιμων πρωινών αναχωρήσεων. Προσαρμοζόμαστε στο πρόγραμμα της πτήσης σας.",
      },
    },
    {
      "@type": "Question",
      name: "Πώς μπορώ να κλείσω μια μεταφορά στη Θεσσαλονίκη;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Μπορείτε να κάνετε κράτηση μέσω WhatsApp, Viber, τηλεφώνου ή email. Απαντάμε μέσα σε λίγα λεπτά και επιβεβαιώνουμε το ταξίδι σας με σταθερή τιμή — χωρίς εφαρμογή ή προκαταβολή.",
      },
    },
    {
      "@type": "Question",
      name: "Προσφέρετε περιηγήσεις πόλης στη Θεσσαλονίκη;",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ναι, προσφέρουμε ιδιωτικές περιηγήσεις στη Θεσσαλονίκη που περιλαμβάνουν τον Λευκό Πύργο, την Άνω Πόλη, Ρωμαϊκά και Βυζαντινά μνημεία, τοπικές αγορές τροφίμων και πολλά άλλα — με τον δικό σας ρυθμό και με ντόπιο οδηγό.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEl) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </>
  );
}
