import { CONTACT } from "./pricing";

export function generateWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp.replace(/[^0-9]/g, "")}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function generateViberUrl(message?: string): string {
  const number = CONTACT.viber.replace(/[^0-9]/g, "");
  if (message) {
    return `viber://chat?number=%2B${number}&text=${encodeURIComponent(message)}`;
  }
  return `viber://chat?number=%2B${number}`;
}

export function generateBookingMessage(details: {
  from: string;
  to: string;
  distance: string;
  duration: string;
  fare: string;
}): string {
  return `Hello! I'd like to book a transfer:

From: ${details.from}
To: ${details.to}
Distance: ${details.distance}
Duration: ${details.duration}
Estimated fare: ${details.fare}

Please confirm availability. Thank you!`;
}

export function generateSimpleMessage(): string {
  return `Hello! I'd like to book an airport transfer in Thessaloniki. Could you please help me?`;
}
