import { siteImages } from "./images";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  priceFrom: number; // In INR
  priceNote?: string; // e.g. "TO CONFIRM"
  duration: string; // e.g. "45 mins"
  featured?: boolean;
}

export interface FeaturedPackage {
  title: string;
  tagline: string;
  offerPrice: number; // 3499
  originalPrice: number; // 4999 (marked TO CONFIRM)
  priceStatus: "TO CONFIRM";
  includedServices: string[];
  description: string;
  image: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
  image: string;
  items: ServiceItem[];
  featuredPackage?: FeaturedPackage;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "hair",
    number: "01",
    title: "Hair Design & Treatments",
    tags: ["Precision Cuts", "Highlights", "Hair Spa", "Kids Cuts"],
    description:
      "From bespoke dimensional highlights to restorative hair spa therapies, our certified cosmetologists customize every formula to your hair's unique density, texture and lifestyle.",
    image: siteImages.services.hair,
    items: [
      {
        id: "hair-cut-women",
        name: "Women's Signature Cut & Style",
        description: "Personalized consultation, scalp detox wash, precision scissor work and blow-dry styling.",
        priceFrom: 850,
        priceNote: "TO CONFIRM",
        duration: "45–60 mins",
      },
      {
        id: "hair-custom-highlights",
        name: "Custom Highlight Blend & Balayage",
        description: "Freehand seamless balayage or micro-foils blended with tone-correcting gloss for multidimensional vibrancy.",
        priceFrom: 3500,
        priceNote: "TO CONFIRM",
        duration: "120–180 mins",
        featured: true,
      },
      {
        id: "hair-colour-global",
        name: "Global Colour & Root Touch-Up",
        description: "Ammonia-safe rich botanical formulations ensuring complete grey coverage with radiant shine.",
        priceFrom: 1800,
        priceNote: "TO CONFIRM",
        duration: "75–90 mins",
      },
      {
        id: "hair-spa-rejuvenation",
        name: "Intense Botanical Hair Spa",
        description: "Deep conditioning steam infusion, therapeutic pressure-point head massage, and cuticle seal serum.",
        priceFrom: 1200,
        priceNote: "TO CONFIRM",
        duration: "60 mins",
      },
      {
        id: "hair-treatments-keratin",
        name: "Smooth & Shine Keratin Treatment",
        description: "Frizz-eliminating protein restoration therapy for silky, humidity-resistant, manageable tresses.",
        priceFrom: 4000,
        priceNote: "TO CONFIRM",
        duration: "150–180 mins",
      },
      {
        id: "hair-kids-cut",
        name: "Gentle Kids Haircut",
        description: "Patience-first fun styling in a calm, cheerful atmosphere for boys and girls.",
        priceFrom: 350,
        priceNote: "TO CONFIRM",
        duration: "30 mins",
      },
    ],
  },
  {
    id: "skin",
    number: "02",
    title: "Skin Rejuvenation & Facials",
    tags: ["Brightening", "Detan", "Clean-up", "Clinical Glow"],
    description:
      "Dermatologically-informed skin therapies designed to tackle tropical humidity, pollution, and sun damage with immediate luminous results.",
    image: siteImages.services.skin,
    items: [
      {
        id: "skin-brightening-facial",
        name: "Luminous Brightening Facial",
        description: "Vitamin C-rich enzyme exfoliation, lymphatic drainage massage, and oxygen-infused brightening mask.",
        priceFrom: 1800,
        priceNote: "TO CONFIRM",
        duration: "60 mins",
        featured: true,
      },
      {
        id: "skin-detan-radiance",
        name: "Advanced Detan Radiance Therapy",
        description: "Targeted botanical peel formula reversing UV damage, hyperpigmentation, and dull skin tone.",
        priceFrom: 1100,
        priceNote: "TO CONFIRM",
        duration: "45 mins",
      },
      {
        id: "skin-deep-cleanup",
        name: "Clarifying Deep Clean-Up",
        description: "Pore-clearing steam, ultrasonic comedone extraction, calming tea tree toner, and pore-minimizing pack.",
        priceFrom: 800,
        priceNote: "TO CONFIRM",
        duration: "45 mins",
      },
      {
        id: "skin-advanced-hydra",
        name: "Hydra Rejuvenation Ritual",
        description: "Multi-step dermal infusion quenching dehydrated layers for an instant plump, glassy complexion.",
        priceFrom: 2800,
        priceNote: "TO CONFIRM",
        duration: "75 mins",
      },
    ],
  },
  {
    id: "bridal",
    number: "03",
    title: "Bridal, Makeover & Saree Draping",
    tags: ["Bridal Makeover", "Saree Draping", "Party Makeup", "Muhurtham"],
    description:
      "Kerala's finest bridal styling—combining enduring HD photography makeup, signature hair braiding with fresh flowers, and crease-proof master saree pleating.",
    image: siteImages.services.bridal,
    items: [
      {
        id: "bridal-signature-makeover",
        name: "Alenora Signature Bridal Makeover",
        description: "High-definition long-wear bridal glam, waterproof eye artistry, lip contouring, and luxury lashes.",
        priceFrom: 12000,
        priceNote: "TO CONFIRM",
        duration: "180 mins",
        featured: true,
      },
      {
        id: "bridal-saree-draping",
        name: "Master Saree Draping & Ironing",
        description: "Custom pleating for Kanjeevaram, Set Mundu, tissue silks, and contemporary lehenga-style drapes.",
        priceFrom: 900,
        priceNote: "TO CONFIRM",
        duration: "30–45 mins",
      },
      {
        id: "bridal-party-makeup",
        name: "Occasion & Party Glam",
        description: "Sophisticated luminous skin finish for bridesmaids, sisters, reception guests, and family members.",
        priceFrom: 3000,
        priceNote: "TO CONFIRM",
        duration: "60–75 mins",
      },
      {
        id: "bridal-hair-braid",
        name: "Couture Bridal Hair & Floral Art",
        description: "Traditional jasmine-encased braid, textured reception updo, or romantic soft cascading Hollywood waves.",
        priceFrom: 2500,
        priceNote: "TO CONFIRM",
        duration: "60–90 mins",
      },
    ],
  },
  {
    id: "mehendi",
    number: "04",
    title: "Mehendi & Custom Tattoo",
    tags: ["Bridal Mehendi", "Herbal Henna", "Fine-Line Tattoo"],
    description:
      "All-natural 100% triple-filtered chemical-free organic henna ensuring rich dark mahogany stains, alongside ultra-hygienic custom body tattoos.",
    image: siteImages.services.mehendiTattoo,
    items: [
      {
        id: "mehendi-bridal-full",
        name: "Intricate Bridal Mehendi (Both Hands & Feet)",
        description: "Bespoke bridal storytelling incorporating portraits, sacred wedding motifs, and traditional jali work.",
        priceFrom: 5500,
        priceNote: "TO CONFIRM",
        duration: "180–300 mins",
        featured: true,
      },
      {
        id: "mehendi-simple-arabic",
        name: "Arabic & Contemporary Minimal Henna",
        description: "Fluid floral vine designs, delicate finger jewelry patterns, and festive backhand motifs.",
        priceFrom: 600,
        priceNote: "TO CONFIRM",
        duration: "30–45 mins",
      },
      {
        id: "tattoo-custom-art",
        name: "Fine-Line & Custom Tattoo Art",
        description: "Sterilized single-use cartridges, hypoallergenic imported pigments, custom minimalist or script tattoos.",
        priceFrom: 1500,
        priceNote: "TO CONFIRM",
        duration: "60+ mins",
      },
    ],
  },
  {
    id: "mens-grooming",
    number: "05",
    title: "Men's Grooming & Packages",
    tags: ["Precision Fades", "Beard Sculpt", "Detan", "Groom Package"],
    description:
      "Tailored modern barbering and executive wellness treatments designed exclusively for discerning gentlemen.",
    image: siteImages.services.mensGrooming,
    featuredPackage: {
      title: "Signature Groom Makeover Package",
      tagline: "The complete head-to-toe ceremony prep for the modern groom",
      offerPrice: 3499, // TO CONFIRM in data
      originalPrice: 4999, // TO CONFIRM in data
      priceStatus: "TO CONFIRM",
      includedServices: [
        "Consultation & Precision Haircut",
        "Hot Towel Beard Shaping & Straight-Razor Edge",
        "Luminous Brightening Facial",
        "Intensive Neck & Face Detan",
        "Therapeutic Scalp Hair Spa & Massage",
        "Relaxing Reflexology Pedicure",
      ],
      description:
        "Engineered specifically for grooms stepping under wedding lights. Recharges exhausted skin, sculpts the beard line with millimeter precision, and leaves you looking effortlessly refreshed.",
      image: siteImages.services.groomPackageCover,
    },
    items: [
      {
        id: "men-haircut-fade",
        name: "Men's Executive Haircut & Wash",
        description: "Scissor crop, skin fade or classic taper, rounded off with an energizing shampoo and style.",
        priceFrom: 350,
        priceNote: "TO CONFIRM",
        duration: "35 mins",
      },
      {
        id: "men-beard-sculpt",
        name: "Beard Sculpting & Hot Towel Treatment",
        description: "Precision razor edging, length balance, eucalyptus hot towel compress, and softening beard oil.",
        priceFrom: 250,
        priceNote: "TO CONFIRM",
        duration: "25 mins",
      },
      {
        id: "men-groom-package",
        name: "Signature Groom Package",
        description: "Haircut, beard sculpt, brightening facial, detan, hair spa and pedicure (Featured Offer).",
        priceFrom: 3499,
        priceNote: "TO CONFIRM",
        duration: "180 mins",
        featured: true,
      },
      {
        id: "men-hair-spa",
        name: "Gentlemen's Anti-Stress Scalp Spa",
        description: "Deep oil therapy, steam treatment and neck tension release massage for rapid revitalization.",
        priceFrom: 950,
        priceNote: "TO CONFIRM",
        duration: "45 mins",
      },
    ],
  },
];

