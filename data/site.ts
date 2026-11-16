export interface SiteConfig {
  name: string;
  brandMark: string;
  tagline: string;
  positioning: string;
  logos: {
    completeDarkBg: string;
    completeSvg: string;
    goldTransparent: string;
    coffeeTransparent: string;
    ivoryTransparent: string;
  };
  address: {
    line1: string;
    area: string;
    junction: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
    mapsUrl: string;
    embedUrl: string;
  };
  phone: {
    display: string;
    raw: string;
    telUrl: string;
  };
  whatsapp: {
    number: string;
    display: string;
    url: string;
    defaultMessage: string;
  };
  email: string;
  social: {
    instagram: string;
    facebook: string;
  };
  openingHours: string;
  currency: {
    symbol: string;
    code: string;
    locale: string;
  };
  showReviews: boolean;
  navLinks: Array<{ label: string; href: string }>;
}

export const siteConfig: SiteConfig = {
  name: "ALENORA Beauty Studio",
  brandMark: "ALENORA",
  tagline: "Adore Your Dreams",
  positioning:
    "Certified cosmetologists offering skin, hair, bridal makeover, saree draping, mehendi and tattoo. Warm, elegant, welcoming to women, men and kids.",
  logos: {
    completeDarkBg: "/images/alenora-logo-complete.webp",
    completeSvg: "/images/alenora-logo-espresso.svg",
    goldTransparent: "/images/alenora-logo-gold.svg",
    coffeeTransparent: "/images/alenora-logo-coffee.webp",
    ivoryTransparent: "/images/alenora-logo-ivory.webp",
  },
  address: {
    line1: "BK Arcade",
    junction: "Edakkad Junction",
    area: "East Hill",
    city: "Kozhikode",
    state: "Kerala",
    pincode: "673005",
    country: "India",
    full: "BK Arcade, Edakkad Junction, East Hill, Kozhikode, Kerala 673005, India",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=BK+Arcade+Edakkad+Junction+East+Hill+Kozhikode+Kerala+673005+India",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7844171015187!2d75.7725!3d11.2785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba659123456789%3A0xabcdef!2sEast+Hill%2C+Kozhikode%2C+Kerala+673005!5e0!3m2!1sen!2sin!4v1700000000000",
  },
  phone: {
    display: "+91 77363 47582",
    raw: "+917736347582",
    telUrl: "tel:+917736347582",
  },
  whatsapp: {
    number: "917736347582",
    display: "+91 77363 47582",
    url: "https://wa.me/917736347582",
    defaultMessage: "Hi ALENORA, I'd like to book an appointment.",
  },
  email: "alenora2024@gmail.com",
  social: {
    instagram: "https://www.instagram.com/alenorabeautystudio",
    facebook: "https://facebook.com/alenorabeautystudio",
  },
  openingHours: "Mon – Sun: 9:30 AM – 8:00 PM",
  currency: {
    symbol: "₹",
    code: "INR",
    locale: "en-IN",
  },
  // IMPORTANT: The studio has no online reviews yet.
  // Set showReviews to false to prevent reviews section and ratings from rendering.
  showReviews: false,
  navLinks: [
    { label: "About", href: "/about" },
    { label: "Bridal Studio", href: "/bridal-studio" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

export function formatPrice(amount: number): string {
  return `${siteConfig.currency.symbol}${amount.toLocaleString(siteConfig.currency.locale)}`;
}

export function buildWhatsAppLink(message?: string): string {
  const text = message ? encodeURIComponent(message) : encodeURIComponent(siteConfig.whatsapp.defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${text}`;
}
