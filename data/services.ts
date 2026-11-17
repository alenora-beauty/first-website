import { siteImages } from "./images";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  priceFrom: number; // In INR (0 if price on consultation)
  priceNote?: string; // e.g. "onwards", "per streak", "On Consultation"
  duration?: string;
  featured?: boolean;
  group?: string; // Subgroup for structured categorization
}

export interface FeaturedPackage {
  title: string;
  tagline: string;
  offerPrice: number;
  originalPrice?: number;
  priceStatus: string;
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
    title: "Hair Design, Colour & Treatments",
    tags: ["Root Touch-Up", "Global Colour", "Balayage", "Smoothening", "Botox", "Hair Spa"],
    description:
      "Full hair styling, colouring, and clinical treatments from our brochure: precision root touch-ups (Normal, L'Oreal, Matrix, Schwarzkopf), global colour, hand-painted balayage, keratin, hair botox, and rejuvenating hair spas.",
    image: siteImages.services.hair,
    items: [
      // Hair Styling & Setting (From Brochure Page 1)
      {
        id: "hair-blowdry",
        name: "Hair Blowdry",
        description: "Professional wash, blow-dry styling, and lasting shape.",
        priceFrom: 800,
        duration: "30–45 mins",
        group: "Hair Styling and Setting",
      },
      {
        id: "hair-straightening",
        name: "Hair Straightening",
        description: "Thermal precision straightening leaving hair sleek, smooth, and manageable.",
        priceFrom: 1000,
        duration: "45–60 mins",
        group: "Hair Styling and Setting",
      },
      {
        id: "hair-crimping",
        name: "Hair Crimping",
        description: "Textured crimp styling providing volume and structure for special occasions.",
        priceFrom: 1000,
        duration: "45–60 mins",
        group: "Hair Styling and Setting",
      },
      {
        id: "hair-curling",
        name: "Hair Curling",
        description: "Long-lasting bouncy curls and Hollywood waves customized to your preference.",
        priceFrom: 1200,
        duration: "45–60 mins",
        group: "Hair Styling and Setting",
      },

      // Full Head Root Touch Up (From Brochure Page 2 + Chat Overrides)
      {
        id: "root-touchup-normal",
        name: "Full Head Root Touch Up (Normal)",
        description: "Complete grey coverage and root refresh with standard salon formulation.",
        priceFrom: 800,
        duration: "45–60 mins",
        group: "Hair Colouring - Root Touch Up",
      },
      {
        id: "root-touchup-loreal",
        name: "Full Head Root Touch Up (L'Oreal)",
        description: "L'Oreal professional ammonia-safe colour delivering rich depth and shine.",
        priceFrom: 1000,
        duration: "45–60 mins",
        group: "Hair Colouring - Root Touch Up",
      },
      {
        id: "root-touchup-matrix",
        name: "Full Head Root Touch Up (Matrix)",
        description: "Matrix enriched colour technology ensuring 100% grey coverage and lasting tone.",
        priceFrom: 1000,
        duration: "45–60 mins",
        group: "Hair Colouring - Root Touch Up",
      },
      {
        id: "root-touchup-schwarzkopf",
        name: "Full Head Root Touch Up (Schwarzkopf)",
        description: "Premium Schwarzkopf high-definition pigment formulation for intense, durable colour.",
        priceFrom: 1500,
        duration: "45–60 mins",
        group: "Hair Colouring - Root Touch Up",
      },

      // Highlights & Global (From Brochure Page 2 + Chat Overrides)
      {
        id: "hair-highlights-streaks",
        name: "Highlights (Per Streaks)",
        description: "Precision foil highlights per streak to add dimension and face-framing accent.",
        priceFrom: 350,
        priceNote: "per streak",
        duration: "20–30 mins",
        group: "Highlights & Global",
      },
      {
        id: "hair-global-colour",
        name: "Global Colouring",
        description: "Full-head seamless global colour formulated to complement your skin tone.",
        priceFrom: 3000,
        priceNote: "onwards",
        duration: "90–120 mins",
        featured: true,
        group: "Highlights & Global",
      },
      {
        id: "hair-ombre",
        name: "Ombre",
        description: "Seamless gradual gradient transition from deeper roots to sun-kissed ends.",
        priceFrom: 3500,
        duration: "120–150 mins",
        group: "Highlights & Global",
      },
      {
        id: "hair-balayage",
        name: "Balayage",
        description: "Freehand dimensional balayage blend for natural sunlit depth and movement.",
        priceFrom: 4000,
        duration: "150–180 mins",
        featured: true,
        group: "Highlights & Global",
      },

      // Hair Treatments (From Brochure Page 2)
      {
        id: "treatment-smoothening",
        name: "Smoothening",
        description: "Deep cuticle-relaxing treatment leaving rebellious hair silky, manageable, and soft.",
        priceFrom: 5599,
        duration: "180–240 mins",
        group: "Hair Treatments",
      },
      {
        id: "treatment-permanent-blowdry",
        name: "Permanent Blowdry",
        description: "Semi-permanent texture treatment delivering lasting salon blowdry bounce and smoothness.",
        priceFrom: 6599,
        duration: "180–240 mins",
        group: "Hair Treatments",
      },
      {
        id: "treatment-keratin",
        name: "Keratin Treatment",
        description: "Intensive keratin protein therapy eliminating frizz and sealing against humidity.",
        priceFrom: 7599,
        duration: "180–240 mins",
        featured: true,
        group: "Hair Treatments",
      },
      {
        id: "treatment-botox",
        name: "Botox Treatment",
        description: "Deep fiber reconstruction and anti-aging repair restoring elasticity, density, and gloss.",
        priceFrom: 8599,
        duration: "180–240 mins",
        featured: true,
        group: "Hair Treatments",
      },

      // Hair Spa (From Brochure Page 2)
      {
        id: "spa-matrix",
        name: "Matrix Hair Spa",
        description: "Scalp cleansing, deep moisturizing cream bath, steam, and pressure-point head massage.",
        priceFrom: 1500,
        priceNote: "onwards",
        duration: "60 mins",
        group: "Hair Spa",
      },
      {
        id: "spa-loreal",
        name: "L'Oreal Hair Spa",
        description: "Classic French sensory hair spa with steam infusion and intense nourishment.",
        priceFrom: 1500,
        priceNote: "onwards",
        duration: "60 mins",
        group: "Hair Spa",
      },
      {
        id: "spa-schwarzkopf",
        name: "Schwarzkopf Hair Spa",
        description: "Peptide repair ritual designed for sensitized, dry, or chemically treated hair.",
        priceFrom: 2000,
        priceNote: "onwards",
        duration: "60 mins",
        group: "Hair Spa",
      },
      {
        id: "spa-treated",
        name: "Treated Hair Spa",
        description: "Specialized restorative care for highlighted, bleached, or heat-stressed hair fibers.",
        priceFrom: 2800,
        duration: "75 mins",
        group: "Hair Spa",
      },

      // Oil Massage (From Brochure Page 2)
      {
        id: "oil-coconut",
        name: "Coconut Oil Massage",
        description: "Traditional pure warm coconut oil scalp massage with soothing steam relaxation.",
        priceFrom: 650,
        duration: "35 mins",
        group: "Oil Massage",
      },
      {
        id: "oil-navratna",
        name: "Navratna Oil Massage",
        description: "Therapeutic herbal cooling head massage relieving stress, tension, and heat.",
        priceFrom: 750,
        duration: "35 mins",
        group: "Oil Massage",
      },
      {
        id: "oil-almond",
        name: "Almond Oil Massage",
        description: "Pure sweet almond oil rich in Vitamin E to deeply nourish hair follicles.",
        priceFrom: 850,
        duration: "40 mins",
        group: "Oil Massage",
      },
    ],
  },
  {
    id: "skin",
    number: "02",
    title: "Facials & Bleach Treatments",
    tags: ["Aroma Magic", "VLCC", "Vedic Line", "Cheryl's", "Bleach"],
    description:
      "All facial rituals and skin treatments strictly from the Alenora brochure: Normal Facial, Aroma Magic, VLCC, Vedic Line, Cheryl's Cosmeceuticals, and full neck and leg bleach.",
    image: siteImages.services.skin,
    items: [
      // Bleach (From Brochure Page 3)
      {
        id: "bleach-neck-oxy",
        name: "Full Neck Oxy Bleach",
        description: "Gentle oxygen bleach lightening fine hair and blending neck tone with face tone.",
        priceFrom: 400,
        duration: "20 mins",
        group: "Bleach",
      },
      {
        id: "bleach-neck-gold",
        name: "Full Neck Gold Bleach",
        description: "Golden shimmer bleach formulation giving the neck a radiant, soft finish.",
        priceFrom: 500,
        duration: "25 mins",
        group: "Bleach",
      },
      {
        id: "bleach-legs-oxy",
        name: "Legs Oxy Bleach",
        description: "Full-leg oxygen bleach evening skin tone smoothly for special occasions.",
        priceFrom: 1000,
        duration: "40 mins",
        group: "Bleach",
      },
      {
        id: "bleach-legs-gold",
        name: "Legs Gold Bleach",
        description: "Luxury gold bleach for full legs imparting soft golden glow and even tone.",
        priceFrom: 1500,
        duration: "45 mins",
        group: "Bleach",
      },

      // Facials - Normal (From Brochure Page 3)
      {
        id: "facial-normal",
        name: "Normal Facial",
        description: "Essential cleansing facial with gentle steam, exfoliation, massage, and pack.",
        priceFrom: 1000,
        duration: "45 mins",
        group: "Facials (Classic)",
      },

      // Aroma Magic (From Brochure Page 3 + Chat Overrides)
      {
        id: "aroma-bridal-glow",
        name: "Aroma Magic Bridal Glow",
        description: "Signature aromatherapy bridal facial formulated for immediate radiance and event readiness.",
        priceFrom: 3000,
        duration: "60 mins",
        featured: true,
        group: "Aroma Magic",
      },
      {
        id: "aroma-vitamin-c",
        name: "Aroma Magic Vitamin C",
        description: "Antioxidant Vitamin C treatment reversing dullness and boosting skin luminosity.",
        priceFrom: 3000,
        duration: "60 mins",
        featured: true,
        group: "Aroma Magic",
      },
      {
        id: "aroma-skin-glow",
        name: "Aroma Magic Skin Glow",
        description: "Deep hydration essential oil therapy restoring natural moisture and healthy dewy glow.",
        priceFrom: 3000,
        duration: "60 mins",
        group: "Aroma Magic",
      },
      {
        id: "aroma-jewel",
        name: "Aroma Magic Jewel Facial",
        description: "Luxury mineral jewel infusion smoothing skin surface and enhancing natural clarity.",
        priceFrom: 2500,
        duration: "60 mins",
        group: "Aroma Magic",
      },

      // VLCC (From Brochure Page 3)
      {
        id: "vlcc-anti-tan",
        name: "VLCC Anti Tan",
        description: "Targeted detan therapy designed to clear sun tanning and lighten dark spots.",
        priceFrom: 1500,
        duration: "60 mins",
        group: "VLCC",
      },
      {
        id: "vlcc-silver",
        name: "VLCC Silver",
        description: "Purifying colloidal silver extracts cooling skin and detoxifying pores.",
        priceFrom: 1500,
        duration: "60 mins",
        group: "VLCC",
      },
      {
        id: "vlcc-diamond",
        name: "VLCC Diamond",
        description: "Micro-diamond particles polishing skin texture for a camera-ready shine.",
        priceFrom: 1500,
        duration: "60 mins",
        group: "VLCC",
      },
      {
        id: "vlcc-anti-acne",
        name: "VLCC Anti Acne",
        description: "Antibacterial care for oily or acne-prone skin, calming breakouts and redness.",
        priceFrom: 2000,
        duration: "60 mins",
        group: "VLCC",
      },
      {
        id: "vlcc-hyper-pigmentation",
        name: "VLCC Hyper Pigmentation",
        description: "Specialized formulation targeting stubborn hyperpigmentation and uneven skin tone.",
        priceFrom: 2000,
        duration: "60 mins",
        group: "VLCC",
      },

      // Vedic Line (From Brochure Page 3)
      {
        id: "vedic-pappaya",
        name: "Vedic Line Pappaya Facial",
        description: "Natural fruit papain enzyme exfoliation dissolving dead cells and revealing clean skin.",
        priceFrom: 1500,
        duration: "60 mins",
        group: "Vedic Line",
      },
      {
        id: "vedic-pearl",
        name: "Vedic Line Pearl",
        description: "Crushed pearl extracts hydrating and refining skin texture with soft sheen.",
        priceFrom: 2000,
        duration: "60 mins",
        group: "Vedic Line",
      },
      {
        id: "vedic-silver",
        name: "Vedic Line Silver",
        description: "Herbal silver complex calming sun-exposed skin and locking in moisture.",
        priceFrom: 2300,
        duration: "60 mins",
        group: "Vedic Line",
      },
      {
        id: "vedic-green-tea",
        name: "Vedic Line Green Tea",
        description: "Antioxidant-rich matcha green tea protecting skin against environmental damage.",
        priceFrom: 2500,
        duration: "60 mins",
        group: "Vedic Line",
      },
      {
        id: "vedic-gold",
        name: "Vedic Line Gold",
        description: "24-Karat gold leaf botanicals stimulating collagen and providing regal radiance.",
        priceFrom: 2500,
        duration: "60 mins",
        featured: true,
        group: "Vedic Line",
      },

      // Cheryl's (From Brochure Page 3)
      {
        id: "cheryls-tan-clean",
        name: "Cheryl's Tan Clean",
        description: "Clinical-grade detan treatment rapidly clearing epidermal tan and dullness.",
        priceFrom: 2500,
        duration: "60 mins",
        featured: true,
        group: "Cheryl's",
      },
      {
        id: "cheryls-vitalift",
        name: "Cheryl's Vitalift",
        description: "Firming anti-aging facial tightening contours and restoring elasticity.",
        priceFrom: 2600,
        duration: "75 mins",
        group: "Cheryl's",
      },
      {
        id: "cheryls-glovite",
        name: "Cheryl's Glovite",
        description: "Instant red-carpet radiance treatment accelerating cell renewal.",
        priceFrom: 2800,
        duration: "75 mins",
        group: "Cheryl's",
      },
      {
        id: "cheryls-oxyblast",
        name: "Cheryl's Oxyblast",
        description: "Pressurized pure oxygen infusion revitalizing deep skin layers for maximum glow.",
        priceFrom: 3000,
        duration: "75 mins",
        featured: true,
        group: "Cheryl's",
      },
    ],
  },
  {
    id: "bridal",
    number: "03",
    title: "Bridal Special Package, Make-Up & Saree Draping",
    tags: ["Bridal Special Package", "HD Makeup", "Saree Draping", "Box Folding"],
    description:
      "All bridal and makeover services directly from the Alenora brochure: the comprehensive Bridal Special Package (₹9,300), HD bridal make-up styles, and professional saree draping and box folding.",
    image: siteImages.services.bridal,
    featuredPackage: {
      title: "Bridal Special Package",
      tagline: "Official All-in-One Pre-Wedding Package",
      offerPrice: 9300,
      priceStatus: "Official Rate Card Price",
      includedServices: [
        "Facial with De-Tan Pack",
        "Under Eye Treatment",
        "Lip Care",
        "Pedicure and Manicure",
        "Hair Spa",
      ],
      description:
        "The complete 5-in-1 bridal package straight from our official brochure. Everything required for head-to-toe wedding radiance.",
      image: siteImages.services.bridal,
    },
    items: [
      // Bridal Special Package (From Brochure Page 1)
      {
        id: "bridal-special-package",
        name: "Bridal Special Package",
        description:
          "Facial with De-Tan Pack, Under Eye Treatment, Lip Care, Pedicure and Manicure, and Hair Spa.",
        priceFrom: 9300,
        duration: "210–240 mins",
        featured: true,
        group: "Bridal Special Package",
      },

      // Make - Up (From Brochure Page 1 - No prices printed, Price on Consultation)
      {
        id: "makeup-hindu-hd",
        name: "Hindu HD Bridal Makeup",
        description: "Traditional temple gold eye look, sweat-resistant HD base, and long-wear muhurtham finish.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "180 mins",
        featured: true,
        group: "Make - Up",
      },
      {
        id: "makeup-christian-hd",
        name: "Christian HD Bridal Makeup",
        description: "Luminous glass skin, soft romantic contour, veil anchoring, and waterproof dewy glow.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "180 mins",
        featured: true,
        group: "Make - Up",
      },
      {
        id: "makeup-muslim-hd",
        name: "Muslim HD Bridal Makeup",
        description: "Regal nikah makeover with statement winged liner, jewel-toned eyes, and velvet HD finish.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "180 mins",
        featured: true,
        group: "Make - Up",
      },
      {
        id: "makeup-engagement",
        name: "Engagement Makeup",
        description: "Sophisticated modern glam calibrated for evening stage lighting and photography.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "90–120 mins",
        group: "Make - Up",
      },
      {
        id: "makeup-party",
        name: "Party Makeup",
        description: "Flawless party finish for bridesmaids, sisters, reception guests, and family members.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "60–75 mins",
        group: "Make - Up",
      },
      {
        id: "makeup-haldi",
        name: "Haldi Makeup",
        description: "Fresh, dewy, waterproof daytime look tailored for festive haldi and mehendi rituals.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "60–75 mins",
        group: "Make - Up",
      },
      {
        id: "makeup-normal",
        name: "Normal Makeup",
        description: "Clean, natural subtle daytime makeover for formal occasions.",
        priceFrom: 0,
        priceNote: "Price on Consultation",
        duration: "45–60 mins",
        group: "Make - Up",
      },

      // Saree Draping & Box Folding (From Brochure Page 1 + Chat Overrides)
      {
        id: "saree-without-pleat",
        name: "Saree Draping (Without Pleats)",
        description: "Graceful open-pallu drape for modern silks, chiffons, georgettes, and party sarees.",
        priceFrom: 1000,
        duration: "30 mins",
        group: "Saree Draping & Setting",
      },
      {
        id: "saree-with-pleats",
        name: "Saree Draping (With Pleats)",
        description: "Precision surgical box-pleating anchored securely for Kanjeevaram and Kasavu silks.",
        priceFrom: 1500,
        duration: "45 mins",
        featured: true,
        group: "Saree Draping & Setting",
      },
      {
        id: "saree-box-folding",
        name: "Saree Box Folding",
        description: "Professional pre-event box folding and steam pressing to keep sarees crisp and ready to drape.",
        priceFrom: 1000,
        duration: "30 mins",
        group: "Saree Draping & Setting",
      },
    ],
  },
];
