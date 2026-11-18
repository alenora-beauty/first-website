export interface StudioOffer {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  originalPrice?: number; // In INR
  offerPrice?: number; // In INR
  priceNote?: string;
  highlights: string[];
  whatsAppMessage: string;
  expiresText?: string;
  bgGradient?: string;
}

export const studioOffers: StudioOffer[] = [
  {
    id: "bridal-special-package",
    badge: "Official Brochure Package",
    title: "Bridal Special Package",
    tagline: "Comprehensive 5-in-1 head-to-toe pre-wedding ritual",
    offerPrice: 9300,
    priceNote: "Official Brochure Rate",
    highlights: [
      "Facial with De-Tan Pack",
      "Under Eye Treatment",
      "Specialized Lip Care",
      "Pedicure and Manicure",
      "Restorative Hair Spa",
    ],
    whatsAppMessage:
      "Hi Alenora, I'd like to book the Bridal Special Package (₹9,300) from your brochure. Please share available dates.",
    expiresText: "Advance booking recommended for wedding season",
  },
  {
    id: "saree-draping-service",
    badge: "Official Rate Card",
    title: "Master Saree Draping",
    tagline: "Pin-perfect pleats and elegant occasion drape styles",
    offerPrice: 800,
    priceNote: "Starting from ₹800",
    highlights: [
      "Saree Draping (Without Pleats): ₹800",
      "Saree Draping (With Pleats): ₹1,250",
      "Secure anchoring for Kanjeevaram & Kasavu silks",
      "Comfort guaranteed for all-day ceremony wear",
    ],
    whatsAppMessage:
      "Hi Alenora, I'd like to book saree draping services. Please share available time slots.",
    expiresText: "Available in-studio at East Hill, Kozhikode",
  },
];
