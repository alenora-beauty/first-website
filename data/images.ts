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
      url: "/sliders/slider01.JPG.jpeg",
      alt: "Kerala bride in traditional Kanjeevaram silk saree with gold jewellery — Alenora bridal makeover",
      category: "Bridal Makeover & Silk Saree Draping",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
    },
    {
      id: "slide-2",
      url: "/sliders/slider02.jpg.jpeg",
      alt: "Celebration makeover — joyful brides in intricately embroidered pastel lehengas, Alenora Beauty Studio",
      category: "Bridal Party & Heritage Makeover",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[68%_20%] sm:object-[center_15%]",
    },
    {
      id: "slide-3",
      url: "/sliders/slider03.JPG.jpeg",
      alt: "Elegant saree draping and signature hair styling — Alenora Beauty Studio",
      category: "Saree Styling & Makeup Artistry",
      fit: "contain" as HeroSlide["fit"],
      position: "object-center md:object-[68%_center]",
      bgColor: "#1c1410",
    },
    {
      id: "slide-4",
      url: "/sliders/slider04.JPG.jpeg",
      alt: "Traditional Kerala bride in red kasavu saree with gold temple jewellery — outdoor bridal portrait",
      category: "Traditional Kerala Bridal Look",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_20%] sm:object-[center_15%]",
    },
    {
      id: "slide-5",
      url: "/sliders/slider05.jpg.jpeg",
      alt: "Serene poolside bridal silhouette in white kasavu saree — Alenora bridal styling",
      category: "Outdoor Bridal Silhouette",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_35%] sm:object-[center_30%]",
    },
    {
      id: "slide-6",
      url: "/sliders/slider07.jpg.jpeg",
      alt: "Regal bride in silver-embroidered white lehenga with floral hair garland — Alenora bridal artistry",
      category: "Contemporary Bridal Lehenga Styling",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
    },
    {
      id: "slide-7",
      url: "/sliders/slider08.jpg.jpeg",
      alt: "Bridal portrait in handcrafted lilac lehenga with embroidered veil — Alenora Beauty Studio",
      category: "Handcrafted Bridal Couture Makeover",
      fit: "cover" as HeroSlide["fit"],
      position: "object-[center_15%] sm:object-[center_10%]",
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
      alt: "Alenora Kerala wedding ceremony bridal makeover — Kanjeevaram silk saree and temple jewellery",
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
    hair: "/services/hairdesign-colour-and-treatments.png",
    skin: "/services/facials-and-bleach-treatment.png",
    bridal: "/services/bridal-special-package-makeup-hair-styling-and-saree-draping.png",
    mehendiTattoo: "/studio-images/bride-pink-lehenga-outdoor.jpeg",
    mensGrooming: "/studio-images/groom-portrait-white-mundu.jpeg",
    groomPackageCover: "/studio-images/groom-white-kurta-indoor.jpeg",
  },

  // Why Alenora Sticky Cards
  whyUs: [
    {
      url: "/philosophy/certified-cosmetologists.png",
      alt: "Certified cosmetologists at Alenora Beauty Studio, Kozhikode",
    },
    {
      url: "/philosophy/a-personal-consultation-first.png",
      alt: "Personal consultation and client vision discussion at Alenora",
    },
    {
      url: "/philosophy/One-Studio-for-the-Whole-Family.png",
      alt: "One studio for the whole family — women, men, and kids styling in Kozhikode",
    },
    {
      url: "/philosophy/Bridal-and-occation-specialists.png",
      alt: "Bridal and occasion specialists at Alenora Beauty Studio",
    },
  ],

  // Before / After Real Studio Hair Transformations
  transformations: [
    {
      id: "layered-blowout",
      tabLabel: "Layered Cut & Blowout",
      title: "Precision Layered Cut & Feathered Blowout",
      service: "Advanced Layering & Botanical Blowdry",
      time: "75–90 mins",
      technician: "Master Hair Designer",
      before: "/before-after/case-1-before.webp",
      after: "/before-after/case-1-after.webp",
      description: "Revitalized dense, unshaped long hair into dynamic face-framing cascade layers with deep bounce, fluid motion, and glass-like silk reflection.",
    },
    {
      id: "french-midi-bob",
      tabLabel: "French Midi-Bob",
      title: "French Midi-Bob & Soft Curtain Layers",
      service: "Bespoke Contour Cut & Styling",
      time: "60–75 mins",
      technician: "Senior Stylist",
      before: "/before-after/case-2-before.webp",
      after: "/before-after/case-2-after.webp",
      description: "Complete restyle from heavy, weathered ends to a lightweight, voluminous shoulder-length midi contour with soft side bangs and natural lift.",
    },
    {
      id: "chocolate-balayage",
      tabLabel: "Chocolate Balayage",
      title: "Rich Chocolate Mocha Balayage & Gloss Waves",
      service: "Global Balayage & Glaze Therapy",
      time: "180–210 mins",
      technician: "Colour Specialist",
      before: "/before-after/case-3-before.webp",
      after: "/before-after/case-3-after.webp",
      description: "Replaced dull, uneven brassy undertones with multidimensional deep espresso and warm milk chocolate ribbons, styled into high-shine Hollywood waves.",
    },
    {
      id: "botox-smooth-therapy",
      tabLabel: "Hair Botox Therapy",
      title: "Intense Hair Botox & Hydration Wave Finish",
      service: "Luxury Hair Botox & Deep Infusion",
      time: "150–180 mins",
      technician: "Texture & Treatment Expert",
      before: "/before-after/case-4-before.webp",
      after: "/before-after/case-4-after.webp",
      description: "Tamed porous, moisture-deprived humidity frizz through restorative keratin-protein sealing, creating ultra-glossy, soft-to-the-touch cascading waves.",
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
      specialty: "Bridal Ceremony Makeup, Saree Art & Mehendi",
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
  // All photos verified 100% clean (zero logos, watermarks, or studio names)
  gallery: [
    { url: "/studio-images/bridal-pink-lehenga-portrait.jpeg",         alt: "Bridal makeover — pink lehenga with maang tikka and handcrafted jewellery" },
    { url: "/studio-images/kerala-bride-kanjeevaram-silk.jpeg",         alt: "Kerala wedding ceremony bride in Kanjeevaram silk saree with temple ornaments" },
    { url: "/studio-images/kerala-bride-red-kasavu-outdoor.jpeg",       alt: "Traditional Kerala bride in red kasavu saree with gold jewellery" },
    { url: "/studio-images/bridal-party-celebration-lehenga.jpeg",      alt: "Joyful celebration bridal makeover — pastel lehengas with floral styling" },
    { url: "/studio-images/groom-white-kurta-indoor.jpeg",              alt: "Clean men's groom styling — traditional ivory silk kurta and mundu" },
    { url: "/studio-images/bridal-white-embroidered-lehenga.jpeg",      alt: "Regal bride in silver-embroidered white lehenga with floral hair garland" },
    { url: "/studio-images/bride-pink-lehenga-outdoor.jpeg",            alt: "Intricate bridal makeover — magenta lehenga with bridal mehendi and jewellery" },
    { url: "/studio-images/bridal-makeup-artist-working.jpeg",          alt: "Certified bridal makeup artist applying traditional Kerala wedding ceremony look" },
    { url: "/studio-images/bridal-lilac-handcrafted-lehenga.jpeg",      alt: "Bridal couture portrait in handcrafted lilac lehenga with embroidered veil" },
    { url: "/studio-images/kerala-bride-poolside-water.jpeg",           alt: "Kerala bride in traditional kasavu saree with scenic hillside backdrop" },
    { url: "/studio-images/kids-traditional-yellow.jpeg",              alt: "Kids traditional styling — bright yellow kasavu outfit with golden jewellery" },
    { url: "/studio-images/kerala-bride-poolside-silhouette.jpeg",      alt: "Serene poolside bridal portrait in white kasavu saree with temple jewellery" },
    { url: "/studio-images/party-lehenga-engagement.jpeg",             alt: "Party and celebration makeover — engagement ceremony look" },
    { url: "/studio-images/kerala-bride-mountain-scenic.jpeg",          alt: "Traditional Kerala bridal portrait — kasavu saree by scenic waters" },
  ],

  // Careers / studio ambience
  careers: {
    hero: "/studio-images/studio-exterior-day.jpeg",
    team: "/studio-images/bridal-makeup-artist-working.jpeg",
  },
};

