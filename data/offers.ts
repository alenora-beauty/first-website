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
    id: "groom-signature-package",
    badge: "Most Booked",
    title: "Signature Groom Makeover Package",
    tagline: "Head-to-toe ceremony grooming at Kozhikode's premium unisex salon",
    originalPrice: 4999, // TO CONFIRM
    offerPrice: 3499, // TO CONFIRM
    priceNote: "Offer price TO CONFIRM with studio",
    highlights: [
      "Precision haircut & wash",
      "Beard sculpting & razor edge",
      "Brightening facial & detan",
      "Botanical hair spa with pressure massage",
      "Reflexology pedicure",
    ],
    whatsAppMessage:
      "Hi Alenora, I'm interested in booking the Signature Groom Package (₹3,499 offer). Please share available dates.",
    expiresText: "Limited slots per wedding season weekend",
  },
  {
    id: "bridal-booking-enquiry",
    badge: "Wedding Season 2024–2025",
    title: "Bridal Muhurtham & Reception Packages",
    tagline: "Custom consultation, skin prep trial, and on-venue or in-studio bookings",
    priceNote: "Bespoke packages starting from ₹12,000 (TO CONFIRM)",
    highlights: [
      "HD waterproof long-wear bridal makeup",
      "Master saree pleating & pin-set",
      "Fresh floral or contemporary jasmine hair braiding",
      "Full hands & feet bridal mehendi",
      "Special discounts for bridesmaid & family packages",
    ],
    whatsAppMessage:
      "Hi Alenora, I'd like to enquire about bridal makeover availability and package pricing for my upcoming wedding.",
    expiresText: "Advance booking recommended 30–60 days prior",
  },
];

