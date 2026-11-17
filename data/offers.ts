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
    title: "Master Saree Draping & Box Folding",
    tagline: "Pin-perfect pleats and pre-event steam box folding",
    offerPrice: 1000,
    priceNote: "Starting from ₹1,000",
    highlights: [
      "Saree Draping (Without Pleats): ₹1,000",
      "Saree Draping (With Pleats): ₹1,500",
      "Saree Box Folding & Steam Press: ₹1,000",
      "Secure anchoring for Kanjeevaram & Kasavu silks",
      "Comfort guaranteed for all-day ceremony wear",
    ],
    whatsAppMessage:
      "Hi Alenora, I'd like to book saree draping / box folding services. Please share available time slots.",
    expiresText: "Available in-studio at East Hill, Kozhikode",
  },
];
