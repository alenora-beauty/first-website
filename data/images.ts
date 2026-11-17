/**
 * Alenora Beauty Studio — Real client photography.
 * All images in /public/studio-images/ are original photos provided by the client.
 */

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  credit?: string;
}

export interface HeroSlide {
  id: string;
  url: string;
  alt: string;
  category: string;
  position?: string;
  positionSm?: string;
  fit?: "contain" | "cover";
  bgColor?: string;
}

export const siteImages = {
  // Hero section — About page visual
  hero: {
    main: "/studio-images/studio-exterior-day.jpeg",
    alt: "Alenora Beauty Studio — East Hill, Kozhikode",
  },

  // Hero Carousel Slides — real Alenora studio photography
  heroSlides: [
    {
      id: "slide-1",
      url: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",
      alt: "Kerala bride in Kanjeevaram silk saree with gold jewellery — Alenora bridal makeover",
      category: "Bridal Makeover & Silk Saree Draping",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
    },
    {
      id: "slide-2",
      url: "/studio-images/groom-portrait-white-mundu.jpeg",
      alt: "Groom in traditional white mundu — Alenora men's grooming and wedding styling",
      category: "Men's Grooming & Groom Styling",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_20%] sm:object-[center_15%]",
    },
    {
      id: "slide-3",
      url: "/studio-images/kids-yellow-outdoor-vibrant.jpeg",
      alt: "Young girl in traditional Kerala outfit — Alenora kids styling",
      category: "Kids & Family Styling",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_20%] sm:object-center",
    },
    {
      id: "slide-4",
      url: "/studio-images/kerala-bride-red-kasavu-outdoor.jpeg",
      alt: "Traditional Kerala bride in red kasavu with gold jewellery — Alenora bridal artistry",
      category: "Traditional Kerala Bridal Look",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
    },
    {
      id: "slide-5",
      url: "/studio-images/bridal-pink-lehenga-portrait.jpeg",
      alt: "Bridal portrait — pink lehenga with maang tikka and statement jewellery, Alenora Beauty Studio",
      category: "Bridal Portrait & Jewellery Styling",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
    },
    {
      id: "slide-6",
      url: "/studio-images/bridal-makeup-artist-working.jpeg",
      alt: "Alenora cosmetologist applying bridal makeup — behind the scenes of a Kerala wedding makeover",
      category: "Expert Bridal Makeup Application",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_25%] sm:object-[center_20%]",
    },
    {
      id: "slide-7",
      url: "/studio-images/studio-exterior-night.jpeg",
      alt: "Alenora Beauty Studio exterior beautifully lit at night — East Hill, Kozhikode",
      category: "Studio Sanctuary & Ambience",
      fit: "cover" as HeroSlide["fit"],
      position: "object-center",
    },
  ],
  heroFloatingCard: {
    groom: "/studio-images/groom-portrait-white-mundu.jpeg",
    alt: "Groom makeover consultation at Alenora",
  },

  // Studio carousel cards — real Alenora photography
  studioCards: {
    hair: {
      url: "/studio-images/saree-green-floral-indoor.jpeg",
      alt: "Elegant saree styling and hair artistry at Alenora Beauty Studio",
      title: "Hair Craft",
      caption: "Precision cuts, bespoke colouring, and rejuvenating botanical hair spas.",
    },
    skin: {
      url: "/studio-images/bridal-makeup-artist-working.jpeg",
      alt: "Alenora certified cosmetologist applying bridal makeup and skin treatment",
      title: "Skin Aesthetics",
      caption: "Targeted brightening facials, deep clean-ups, and gentle detan therapies.",
    },
    bridal: {
      url: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",
      alt: "Alenora Kerala Muhurtham bridal makeover — Kanjeevaram silk saree and temple jewellery",
      title: "Bridal Couture",
      caption: "Custom bridal makeovers crafted to hold their glow all through your celebration.",
    },
    saree: {
      url: "/studio-images/kerala-bride-red-kasavu-wall.jpeg",
      alt: "Traditional Kerala bride in red kasavu saree — Alenora saree draping artistry",
      title: "Saree Draping",
      caption: "Pin-perfect traditional Kerala, Kanjeevaram, and modern fusion drape styles.",
    },
    mehendi: {
      url: "/studio-images/bride-pink-lehenga-outdoor.jpeg",
      alt: "Bride styled with intricate mehendi and jewellery at Alenora Beauty Studio",
      title: "Mehendi & Tattoo",
      caption: "Intricate herbal henna storytelling and clean, hygienic artistic body art.",
    },
    grooming: {
      url: "/studio-images/groom-white-kurta-indoor.jpeg",
      alt: "Groom styling and grooming at Alenora Beauty Studio, Kozhikode",
      title: "Men's Grooming",
      caption: "Sharp beard sculpting, scalp fades, and complete groom prep packages.",
    },
  },

  // Service Category Cover Images
  services: {
    hair: "/studio-images/saree-green-floral-indoor.jpeg",
    skin: "/studio-images/bridal-makeup-artist-working.jpeg",
    bridal: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",
    mehendiTattoo: "/studio-images/bride-pink-lehenga-outdoor.jpeg",
    mensGrooming: "/studio-images/groom-portrait-white-mundu.jpeg",
    groomPackageCover: "/studio-images/groom-white-kurta-indoor.jpeg",
  },

  // Why Alenora Sticky Cards
  whyUs: [
    {
      url: "/studio-images/bridal-makeup-artist-working.jpeg",
      alt: "Alenora certified cosmetologist applying professional bridal makeup",
    },
    {
      url: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",
      alt: "Personalised one-on-one bridal consultation and makeover at Alenora",
    },
    {
      url: "/studio-images/kids-yellow-outdoor-vibrant.jpeg",
      alt: "Welcoming family studio — women, men, and kids styling in Kozhikode",
    },
    {
      url: "/studio-images/bridal-white-silver-lehenga.jpeg",
      alt: "Grand bridal and occasion makeover artistry — Alenora Beauty Studio",
    },
  ],

  // Before / After Transformations
  // NOTE: Real "before" photos not yet provided by client. After images use real studio photography.
  transformations: [
    {
      id: "hair-highlights",
      title: "Bespoke Balayage & Highlight Blend",
      service: "Custom Highlight Blend & Gloss",
      time: "150 mins",
      technician: "Senior Cosmetologist",
      before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      after: "/studio-images/saree-green-floral-indoor.jpeg",
      description: "Transformed flat, brassy ends into dimensional multidirectional caramel highlights with a silky glass gloss finish.",
    },
    {
      id: "groom-makeover",
      title: "Complete Groom Wedding Day Transformation",
      service: "Signature Groom Package",
      time: "180 mins",
      technician: "Master Groomer",
      before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      after: "/studio-images/groom-portrait-white-mundu.jpeg",
      description: "Clean taper fade, structured beard architecture, detan skin rejuvenation, and camera-ready dewy skin prep.",
    },
    {
      id: "bridal-look",
      title: "Traditional Kerala Muhurtham Makeover",
      service: "Bridal Glamour & Saree Draping",
      time: "210 mins",
      technician: "Bridal Specialist",
      before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      after: "/studio-images/kerala-bride-red-kasavu-outdoor.jpeg",
      description: "Sweat-resistant HD base, subtle golden temple eye look, signature jasmine hair braid, and crease-proof Kanjeevaram pleats.",
    },
  ],

  // Team — awaiting real team member photos from client
  team: [
    {
      name: "Placeholder Stylist A",
      role: "Lead Cosmetologist & Skin Specialist",
      specialty: "Advanced Facials & Clinical Skin Prep",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Placeholder Stylist B",
      role: "Senior Hair & Colour Artist",
      specialty: "Balayage, Corrective Color & Hair Spa",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Placeholder Stylist C",
      role: "Bridal & Draping Specialist",
      specialty: "Muhurtham Makeup, Saree Art & Mehendi",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Placeholder Stylist D",
      role: "Men's Grooming Master",
      specialty: "Beard Architecture & Fade Transitions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // Your Visit 4 Steps
  visitSteps: [
    {
      step: "01",
      title: "Book",
      duration: "2 mins",
      desc: "Reserve seamlessly via WhatsApp or our instant online request form with preferred stylist choices.",
      image: "https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=600&q=80",
    },
    {
      step: "02",
      title: "Consult",
      duration: "10 mins",
      desc: "In-depth scalp, skin texture, and aesthetic review over soothing tea to design your tailored service.",
      image: "/studio-images/bridal-makeup-artist-working.jpeg",
    },
    {
      step: "03",
      title: "Create",
      duration: "45–180 mins",
      desc: "Impeccable execution using sanitized medical-grade tools, premium formulations, and undivided attention.",
      image: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",
    },
    {
      step: "04",
      title: "Care",
      duration: "5 mins",
      desc: "Custom home-care regimen, product recommendations, and routine styling tips to keep that salon look lasting.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    },
  ],

  // 14 Gallery items — real Alenora studio photography (dual-row marquee)
  gallery: [
    { url: "/studio-images/studio-exterior-night.jpeg",         alt: "Alenora Beauty Studio exterior — golden night ambience, East Hill Kozhikode" },
    { url: "/studio-images/bridal-pink-lehenga-portrait.jpeg",  alt: "Bridal makeover — pink lehenga with maang tikka" },
    { url: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",  alt: "Kerala Muhurtham bride — Kanjeevaram silk saree" },
    { url: "/studio-images/bridal-duo-pink-lehenga.jpeg",       alt: "Duo bridal shoot — pink lehengas at heritage venue" },
    { url: "/studio-images/kerala-bride-red-kasavu-outdoor.jpeg",alt: "Traditional Kerala bride — red kasavu with gold jewellery" },
    { url: "/studio-images/couple-blue-suit-pink-lehenga.jpeg", alt: "Couple wedding shoot — groom in blue suit, bride in pink lehenga" },
    { url: "/studio-images/bridal-trio-white-gown.jpeg",        alt: "Trio bridal shoot — white gowns with floral backdrop" },
    { url: "/studio-images/bridal-duo-white-gown-garden.jpeg",  alt: "Duo bridal shoot — white gowns in garden setting" },
    { url: "/studio-images/bridal-white-lehenga-maangtikka.jpeg",alt: "Bride — white embroidered lehenga with maang tikka" },
    { url: "/studio-images/bridal-duo-pink-heritage.jpeg",      alt: "Duo bridal — pink & dusty rose lehenga at heritage building" },
    { url: "/studio-images/groom-portrait-white-mundu.jpeg",    alt: "Groom portrait — traditional white mundu, wedding day styling" },
    { url: "/studio-images/kids-traditional-yellow.jpeg",       alt: "Kids styling — traditional yellow outfit with jewellery" },
    { url: "/studio-images/party-lehenga-engagement.jpeg",      alt: "Party and occasion makeover — engagement ceremony look" },
    { url: "/studio-images/studio-exterior-day.jpeg",           alt: "Alenora Beauty Studio exterior — daytime signage, East Hill" },
  ],

  // Careers / studio ambience
  careers: {
    hero: "/studio-images/studio-exterior-day.jpeg",
    team: "/studio-images/bridal-makeup-artist-working.jpeg",
  },
};

