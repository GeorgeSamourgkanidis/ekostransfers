export const CONTACT = {
  phone: "+30 697 651 9137",
  whatsapp: "+306976519137", // no spaces for wa.me link
  viber: "+306976519137", // no spaces for viber link
  email: "kiriakosele@hotmail.com",
  location: "Thessaloniki, Greece",
  airport: "Thessaloniki Airport (SKG)",
} as const;

export const BUSINESS = {
  name: "EKOS TRANSFERS",
  tagline: "Your Trusted Airport Transfer in Thessaloniki",
  description:
    "Professional private driver service. Safe, reliable, and comfortable rides at fixed prices.",
  yearsExperience: 10,
  happyCustomers: 5000,
} as const;

export const POPULAR_ROUTES = [
  {
    from: "Thessaloniki Airport (SKG)",
    to: "City Center",
    distance: 17,
    duration: 25,
  },
  {
    from: "Thessaloniki Airport (SKG)",
    to: "Halkidiki (Kassandra)",
    distance: 95,
    duration: 75,
  },
  {
    from: "Thessaloniki Airport (SKG)",
    to: "Halkidiki (Sithonia)",
    distance: 120,
    duration: 95,
  },
  {
    from: "Thessaloniki Airport (SKG)",
    to: "Perea / Agia Triada",
    distance: 22,
    duration: 20,
  },
  {
    from: "Thessaloniki Airport (SKG)",
    to: "Katerini",
    distance: 90,
    duration: 70,
  },
] as const;
