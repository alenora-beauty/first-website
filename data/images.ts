/**
 * Curated high-resolution Unsplash placeholder images for Alenora Beauty Studio.
 * All image URLs are centralized here so they can easily be replaced with the studio's own real photography.
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
  // Hero section
  hero: {
    main: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2400&q=95",
    alt: "Alenora Beauty Studio salon atmosphere with warm golden lighting",
  },
  // Hero Carousel Slides: Full stretched edge-to-edge photography with zero quality loss
  // Positioned with headroom offset so styling & faces remain beautifully framed
  heroSlides: [
    {
      id: "slide-1",
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1920&q=85",
      alt: "Professional ladies hair styling, precision haircut and blow-dry in modern salon",
      category: "Ladies Hairdressing & Styling",
      fit: "cover",
      position: "object-[center_15%]",
    },
    {
      id: "slide-2",
      url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1920&q=85",
      alt: "Precision men's hairdressing, scissor styling, fade and executive grooming in salon chair",
      category: "Men's Hairdressing & Styling",
      fit: "cover",
      position: "object-[center_15%]",
    },
    {
      id: "slide-3",
      url: "/images/hero-kids-haircut-v2.webp",
      alt: "Cheerful young child getting a gentle haircut and styling in salon chair",
      category: "Gentle Kids Haircuts & Styling",
      fit: "cover",
      position: "object-center",
    },
    {
      id: "slide-4",
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85",
      alt: "Traditional Kerala silk saree draping with authentic gold zari pleats, jewellery and styling",
      category: "Artistic Saree Draping",
      fit: "contain",
      position: "object-center lg:object-[68%_center]",
      bgColor: "#7A0313",
    },
    {
      id: "slide-5",
      url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1920&q=85",
      alt: "Dimensional sunlit caramel balayage, hair highlights and luxury hair care finish",
      category: "Highlights & Balayage",
      fit: "cover",
      position: "object-[center_15%]",
    },
    {
      id: "slide-6",
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1920&q=85",
      alt: "Stylist applying hair spa treatment and restorative conditioning",
      category: "Restorative Hair Spa",
      fit: "cover",
      position: "object-[center_15%]",
    },
    {
      id: "slide-7",
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=85",
      alt: "Alenora Beauty Studio spacious unisex styling stations and warm ambient lighting",
      category: "Studio Sanctuary & Ambience",
      fit: "cover",
      position: "object-center",
    },
  ],
  heroFloatingCard: {
    groom: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    alt: "Groom makeover consultation at Alenora",
  },

  // Studio carousel cards
  studioCards: {
    hair: {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      alt: "Hair styling and colouring at Alenora",
      title: "Hair Craft",
      caption: "Precision cuts, bespoke colouring, and rejuvenating botanical hair spas.",
    },
    skin: {
      url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      alt: "Skin treatments and facial aesthetics at Alenora",
      title: "Skin Aesthetics",
      caption: "Targeted brightening facials, deep clean-ups, and gentle detan therapies.",
    },
    bridal: {
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      alt: "Traditional and contemporary bridal makeovers in Kerala",
      title: "Bridal Couture",
      caption: "Custom bridal makeovers crafted to hold their glow all through your celebration.",
    },
    saree: {
      url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
      alt: "Impeccable saree draping styles",
      title: "Saree Draping",
      caption: "Pin-perfect traditional Kerala, Kanjeevaram, and modern fusion drape styles.",
    },
    mehendi: {
      url: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80",
      alt: "Organic bridal mehendi artistry and custom tattoos",
      title: "Mehendi & Tattoo",
      caption: "Intricate herbal henna storytelling and clean, hygienic artistic body art.",
    },
    grooming: {
      url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80",
      alt: "Men's grooming and beard sculpt",
      title: "Men's Grooming",
      caption: "Sharp beard sculpting, scalp fades, and complete groom prep packages.",
    },
  },

  // Service Category Cover Images
  services: {
    hair: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    skin: "https://images.unsplash.com/photo-1512290900672-1f4a47d2f347?auto=format&fit=crop&w=1200&q=80",
    bridal: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    mehendiTattoo: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    mensGrooming: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80",
    groomPackageCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },

  // Why Alenora Sticky Cards
  whyUs: [
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
      alt: "Certified cosmetologists examining hair health",
    },
    {
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
      alt: "One-on-one personal consultation at Alenora",
    },
    {
      url: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1000&q=80",
      alt: "Welcoming family salon for women, men and kids in Kozhikode",
    },
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      alt: "Bridal and grand occasion makeover artistry",
    },
  ],

  // Before / After Transformations (Placeholders clearly marked)
  transformations: [
    {
      id: "hair-highlights",
      title: "Bespoke Balayage & Highlight Blend",
      service: "Custom Highlight Blend & Gloss",
      time: "150 mins",
      technician: "Senior Cosmetologist",
      before: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      after: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
      description: "Transformed flat, brassy ends into dimensional multidirectional caramel highlights with a silky glass gloss finish.",
    },
    {
      id: "groom-makeover",
      title: "Complete Groom Wedding Day Transformation",
      service: "Signature Groom Package",
      time: "180 mins",
      technician: "Master Groomer",
      before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
      after: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
      description: "Clean taper fade, structured beard architecture, detan skin rejuvenation, and camera-ready dewy skin prep.",
    },
    {
      id: "bridal-look",
      title: "Traditional Kerala Muhurtham Makeover",
      service: "Bridal Glamour & Saree Draping",
      time: "210 mins",
      technician: "Bridal Specialist",
      before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      description: "Sweat-resistant HD base, subtle golden temple eye look, signature jasmine hair braid, and crease-proof Kanjeevaram pleats.",
    },
  ],

  // Team Placeholders
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
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    },
    {
      step: "03",
      title: "Create",
      duration: "45–180 mins",
      desc: "Impeccable execution using sanitized medical-grade tools, premium formulations, and undivided attention.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    },
    {
      step: "04",
      title: "Care",
      duration: "5 mins",
      desc: "Custom home-care regimen, product recommendations, and routine styling tips to keep that salon look lasting.",
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
    },
  ],

  // 14 Gallery Placeholders for the dual-row marquee
  gallery: [
    { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80", alt: "Alenora studio interior" },
    { url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80", alt: "Bespoke hair styling" },
    { url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80", alt: "Bridal muhurtham makeup" },
    { url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80", alt: "Skin glow facial" },
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80", alt: "Men's styling & beard care" },
    { url: "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=800&q=80", alt: "Intricate mehendi art" },
    { url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80", alt: "Fine saree pleating" },
    { url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80", alt: "Bridal jewellery and styling" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80", alt: "Highlights and toning" },
    { url: "https://images.unsplash.com/photo-1512290900672-1f4a47d2f347?auto=format&fit=crop&w=800&q=80", alt: "Deep detan cleansing" },
    { url: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80", alt: "Beard setting in East Hill" },
    { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80", alt: "Cosmetology consultation" },
    { url: "https://images.unsplash.com/photo-1704072650662-76df3af134a7?auto=format&fit=crop&w=800&q=80", alt: "Kids haircuts and friendly care" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Wedding party preparations" },
  ],

  // Careers / studio ambience
  careers: {
    hero: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    team: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  },
};

