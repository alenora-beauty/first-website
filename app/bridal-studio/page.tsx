import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Sparkles,
  Heart,
  Crown,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  Flower2,
  ArrowRight,
  Gem,
  Award,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bridal Studio & Makeover Kozhikode | Kerala Muhurtham, Saree Draping & Mehendi | Alenora",
  description:
    "Dedicated luxury bridal studio at Alenora Beauty Studio, East Hill, Kozhikode. Specializing in 18-hour sweat-proof bridal makeovers, master silk saree draping, organic herbal mehendi, and complete bridal dressing assistance.",
};

const bridalPillars = [
  {
    number: "01",
    title: "Sacred Muhurtham Makeover",
    tagline: "18-Hour Humidity & Cry-Proof Artistry",
    description:
      "Engineered specifically for Kerala's tropical humidity, sacred temple rituals, and high-intensity wedding photography. We sculpt an ethereal matte-dewy skin base that never oxidizes or cracks, finished with smudge-proof temple-gold eye contouring and waterproof lip contour.",
    highlights: [
      "Custom shade-matching using Dior, MAC & Charlotte Tilbury",
      "Camera-ready HD base with zero flashback under stage lighting",
      "Smudge-proof kajal, winged liner, and weightless silk lashes",
      "Long-lasting sweat & tear resistant formulation",
    ],
    image: "/studio-images/bridal-white-silver-lehenga.jpeg",
    alt: "Alenora bridal makeover — full bridal look with jewellery and saree styling",
  },
  {
    number: "02",
    title: "Master Saree Draping & Silhouette Art",
    tagline: "Pin-Perfect Pleating for Kanjeevaram & Kasavu",
    description:
      "A bride's saree should move with majesty and remain impeccably pleated from morning pradakshinam to evening reception. Our master draping artists hand-pleat, steam-press, and securely anchor Kanjeevaram, Set Mundu, tissue silks, and Banarasi drapes with surgical precision.",
    highlights: [
      "Custom box-pleat width tailored to your height and silhouette",
      "Zero-damage hidden safety pinning that protects delicate gold zari",
      "Oddiyanam (waistband) anchoring that prevents sagging",
      "Engineered comfort for sitting, walking, and greeting guests effortlessly",
    ],
    image: "/studio-images/kerala-bride-red-kasavu-wall.jpeg",
    alt: "Traditional Kerala bride in red kasavu saree — Alenora master saree draping",
  },
  {
    number: "03",
    title: "Couture Hair & Floral Architecture",
    tagline: "Traditional Jasmine Braids to Romantic Hollywood Waves",
    description:
      "Hair is the crown of the bridal ensemble. Whether you envision a traditional jasmine-encased South Indian plait adorned with gold jada billalu, or modern soft romantic waves with baby's breath for your reception, our artists sculpt hairstyles that stay locked in place.",
    highlights: [
      "Signature Kerala poola jada & fresh Madurai jasmine setting",
      "Structural root volumizing and heat-protected texture prep",
      "Crown, tiara, and Christian lace veil anchoring",
      "Zero frizz guarantee even during outdoor ceremonies",
    ],
    image: "/studio-images/kerala-bride-floral-hair.jpeg",
    alt: "Kerala bride with traditional floral jasmine hair braid and gold jewellery — Alenora",
  },
  {
    number: "04",
    title: "Artisan Organic Bridal Mehendi",
    tagline: "100% Chemical-Free Henna with Deep Mahogany Stain",
    description:
      "We hand-craft our own organic mehendi cones using triple-filtered Rajasthani Sojat henna, therapeutic eucalyptus, and clove oils. Free from toxic PPD and chemicals, our henna produces rich, dark mahogany stains that tell your personal love story.",
    highlights: [
      "Custom storytelling motifs: couple portraits, initials & mandapam art",
      "Intricate Marwari, Arabic fusion, and delicate jaali work",
      "Both hands (elbow length) and feet coverage",
      "Complimentary after-care seal balm for maximum color intensity",
    ],
    image: "/studio-images/bride-pink-lehenga-outdoor.jpeg",
    alt: "Bride with intricate organic mehendi and floral jewellery — Alenora bridal artistry",
  },
  {
    number: "05",
    title: "Complete Bridal Dressing & Jewellery Setting",
    tagline: "In-Suite Assistance for Every Piece of Heirloom Gold",
    description:
      "Getting into a bridal ensemble is an art form. Our lead stylists personally dress you in our private sanctuary—positioning every necklace tier, aligning maang tikka pendants to your hairline, securing heavy earrings with weight-distributing tape, and draping dupattas.",
    highlights: [
      "Oddiyanam & heavy waist jewelry balancing with zero slip",
      "Maang tikka & forehead jewelry centered with precision",
      "Earring support & invisible earlobe relief tape",
      "Final 360-degree mirrors and photoshoot-ready touch-up",
    ],
    image: "/studio-images/bridal-trio-white-gown.jpeg",
    alt: "Bridal party fully dressed — Alenora complete dressing and jewellery setting",
  },
  {
    number: "06",
    title: "Pre-Bridal Radiance Countdown",
    tagline: "Clinical Skin & Hair Prep 30 Days Before the Wedding",
    description:
      "Flawless wedding makeup begins with healthy, luminous skin. Our cosmetologist-designed 4-week countdown combines gentle botanical brightening peels, hydra-infusion facials, restorative hair spa therapy, and full-body detan polishing so your skin glows from within.",
    highlights: [
      "Clinical skin texture mapping & customized facial calendar",
      "Intensive hydration infusion for plump, glass-skin prep",
      "Restorative botanical hair spa for glossy, manageable locks",
      "Full body detan, gentle exfoliation & relaxation massage",
    ],
    image: "/studio-images/bridal-makeup-artist-working.jpeg",
    alt: "Alenora cosmetologist applying pre-bridal skin care and makeup — 30-day radiance countdown",
  },
];

const bridalPackages = [
  {
    name: "The Muhurtham Classic",
    subtitle: "For the Traditional Kerala Bride",
    price: "₹12,000",
    priceNote: "Starting from • In-studio private suite",
    popular: false,
    features: [
      "18-hour sweat-proof HD Muhurtham Makeover",
      "Signature long-wear waterproof eye & lip artistry",
      "Traditional jasmine braid or sculpted bridal hair",
      "Master silk saree draping with crease-proof box pleats",
      "Complete bridal dressing & heirloom jewelry setting",
      "Complimentary touch-up kit (blotting sheets & matching lip pot)",
    ],
  },
  {
    name: "Royal Alenora Grand Bridal",
    subtitle: "Muhurtham + Reception (2 Looks)",
    price: "₹22,000",
    priceNote: "Starting from • Complete day reservation",
    popular: true,
    features: [
      "Look 1: Traditional sacred Muhurtham makeover & saree draping",
      "Look 2: Evening Reception Glam (dewy glass skin & Hollywood waves)",
      "Two master saree / lehenga drapes with styling change",
      "Full jewelry change & hair architecture restyle",
      "Private VIP Bridal Suite access throughout the day",
      "Pre-wedding makeup trial & shade-matching consultation",
      "Emergency touch-up kit & bridal concierge support",
    ],
  },
  {
    name: "The Bride & Groom Harmony Suite",
    subtitle: "Complete Couple Wedding Ceremony Package",
    price: "₹28,000",
    priceNote: "Starting from • Bride & Groom paired styling",
    popular: false,
    features: [
      "Everything in the Royal Alenora 2-Look Grand Bridal Package",
      "Groom Signature Makeover: camera-ready detan & matte finish",
      "Groom precision beard sculpt & executive hair design",
      "Groom scalp detox therapy & relaxing shoulder reflexology",
      "Paired color-harmony consultation for photography",
      "Coordinated schedule so the couple is ready together on time",
    ],
  },
];

const bridalFaqs = [
  {
    q: "How far in advance should I reserve my wedding date?",
    a: "We accept bridal bookings up to 6–9 months in advance. Because we only host one bride per slot to ensure 100% undivided attention in our private bridal suite, prime auspicious wedding muhurtham dates fill up quickly. We recommend reserving as soon as your wedding date is finalized.",
  },
  {
    q: "Do you offer bridal makeup trial sessions?",
    a: "Yes! We strongly recommend a bridal trial 2–4 weeks before your ceremony. During the trial, our senior cosmetologist tests foundation shades under 5500K daylight-calibrated lighting, evaluates your skin undertones, tests your chosen hairstyle, and checks saree pleat proportions.",
  },
  {
    q: "Will the makeup hold up in Kerala's humidity and sweat?",
    a: "Absolutely. All Alenora bridal bases are formulated with medical-grade setting sealers, oil-free primers, and sweat-resistant luxury products (Dior, MAC, Charlotte Tilbury). Our makeup is engineered to withstand long ceremonial homams, outdoor photo sessions, and emotional moments for up to 18 hours without cracking or melting.",
  },
  {
    q: "Do you travel to wedding venues or hotels across Kozhikode?",
    a: "Yes, our bridal master team can travel to your home, resort, or wedding venue in Kozhikode and surrounding districts upon request. Travel and on-location setup fees apply. Alternatively, brides love our tranquil private bridal suite at East Hill for an unhurried, luxury experience.",
  },
  {
    q: "Can you accommodate the groom and bridal party / bridesmaids?",
    a: "Yes! While the bride is our primary focus, our studio has dedicated styling stations for the groom and family. We offer occasion makeup, saree draping, and hair styling for bridesmaids, mothers, and sisters so the entire wedding party looks seamlessly coordinated.",
  },
];

export default function BridalStudioPage() {
  const bridalWhatsAppMessage =
    "Hi Alenora Bridal Studio! I would like to inquire about bridal makeover services and check date availability for my wedding.";

  return (
    <div className="pt-28 pb-20 bg-ivory text-espresso">
      {/* 1. Couture Editorial Bridal Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-ivory border-b border-hairline pt-6 sm:pt-12 pb-16 sm:pb-24">
        {/* Subtle Luxury Pattern / Glow Backdrop */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-terracotta/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Refined Editorial Typography (7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-gold/40 shadow-soft backdrop-blur-sm">
                <Crown className="w-3.5 h-3.5 text-gold shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-coffee font-semibold">
                  The Bridal Atelier • East Hill, Kozhikode
                </span>
              </div>

              {/* Commanding Luxury Headline */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-espresso leading-[1.08] tracking-tight">
                  Where the bride is <span className="italic font-normal text-terracotta">celebrated</span>, not rushed.
                </h1>
              </div>

              {/* Editorial Description */}
              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed max-w-2xl">
                At Alenora, the bride is our primary muse. We combine certified cosmetic science with Kerala’s finest
                wedding traditions—delivering 18-hour sweat-proof HD makeovers, crease-proof Kanjeevaram silk
                pleating, authentic Madurai jasmine braid couture, and complete dressing in our private luxury suite.
              </p>

              {/* Trust Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs font-sans">
                <div className="p-3 rounded-xl bg-white/70 border border-hairline shadow-soft flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium text-espresso">18-Hr Cry &amp; Sweat Proof</span>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-hairline shadow-soft flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium text-espresso">1-on-1 Private Suite</span>
                </div>
                <div className="p-3 rounded-xl bg-white/70 border border-hairline shadow-soft flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <Sparkles className="w-4 h-4 text-gold shrink-0" />
                  <span className="font-medium text-espresso">Groom Styling Paired</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
                <Button
                  href={buildWhatsAppLink(bridalWhatsAppMessage)}
                  external
                  variant="gold"
                  size="lg"
                  className="shadow-elevated px-7 py-3.5 text-sm sm:text-base font-semibold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span>Reserve Bridal Consultation</span>
                </Button>
                <Button
                  href="#packages"
                  variant="secondary"
                  size="lg"
                  className="shadow-soft px-7 py-3.5 text-sm sm:text-base font-medium"
                >
                  <span>Explore Packages ↓</span>
                </Button>
              </div>

              {/* Reassurance Footer Line */}
              <div className="pt-3 flex items-center gap-2 text-xs text-muted font-sans border-t border-hairline">
                <Gem className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>
                  Strictly 1 bride per time slot • Dior, MAC, Charlotte Tilbury &amp; Bobbi Brown formulations only.
                </span>
              </div>
            </div>

            {/* Right Column: Layered Editorial Bridal Visual Composition (5 cols on lg) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              {/* Outer Decorative Gold Frame Accent */}
              <div className="absolute -inset-2 rounded-salon-lg bg-gradient-to-br from-gold/25 via-gold/5 to-transparent blur-sm pointer-events-none" />

              {/* Main Bridal Portrait Card */}
              <div className="relative h-[480px] sm:h-[560px] lg:h-[600px] rounded-salon-lg overflow-hidden shadow-elevated border-2 border-gold/40 bg-espresso group">
                <Image
                  src="/studio-images/kerala-bride-kanjeevaram-silk.jpeg"
                  alt="Alenora Bridal Studio — Kerala Muhurtham bride in Kanjeevaram silk with temple jewellery"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent pointer-events-none" />

                {/* Floating Badge Top-Right */}
                <div className="absolute top-4 right-4 bg-espresso/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/40 shadow-soft">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-semibold flex items-center gap-1.5">
                    <Crown className="w-3 h-3 text-gold" />
                    Muhurtham Special
                  </span>
                </div>

                {/* Bottom Story Card on Image */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-black/55 backdrop-blur-md border border-white/20 text-ivory space-y-1 shadow-glass">
                  <div className="flex items-center justify-between text-xs text-gold font-mono uppercase tracking-wider font-semibold">
                    <span>Signature Bridal Glam</span>
                    <span>18-Hr Wear</span>
                  </div>
                  <p className="text-xs text-ivory/90 font-sans leading-relaxed">
                    Crease-proof Kanjeevaram pleating, temple gold eye look &amp; fresh Madurai jasmine hair setting.
                  </p>
                </div>
              </div>

              {/* Floating Decorative Inset Card (Bottom-Left overlap on lg) */}
              <div className="hidden sm:flex items-center gap-3.5 absolute -bottom-5 -left-6 bg-ivory p-3.5 rounded-2xl shadow-elevated border border-hairline max-w-[240px]">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0 border border-gold/30">
                  <Flower2 className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <strong className="block text-xs font-semibold text-espresso">Heirloom Finish</strong>
                  <span className="text-[11px] text-muted leading-tight block">Zero flashback under 4K lenses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy & Why Brides Choose Alenora */}
      <section className="py-20 sm:py-28 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Showcase Card */}
            <div className="lg:col-span-6 relative h-[480px] sm:h-[580px] rounded-salon overflow-hidden shadow-elevated border border-hairline bg-espresso">
              <Image
                src="/studio-images/kerala-bride-red-kasavu-outdoor.jpeg"
                alt="Alenora Bridal Makeover — traditional Kerala bride in red kasavu with gold jewellery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">
                  The Alenora Bridal Promise
                </span>
                <p className="font-serif text-2xl font-light leading-snug">
                  Never rushed. Never factory-line. Only undivided devotion for your once-in-a-lifetime ceremony.
                </p>
              </div>
            </div>

            {/* Text Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans block">
                Couture Bridal Sanctuary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-espresso font-normal leading-tight">
                Crafted for the bride who wants to look like herself—at her absolute most radiant.
              </h2>
              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                A wedding day in Kerala is filled with emotion, sacred rituals, heavy silk sarees, temple heat, and
                hundreds of camera flashes. Generic beauty parlors often mask brides under thick, chalky foundation
                that cracks after two hours.
              </p>
              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                At Alenora, our certified cosmetologists treat bridal styling as bespoke couture. We study your skin
                undertones, natural bone structure, and jewelry weights to curate a look that stays luminous, breathable,
                and impeccably draped from the morning muhurtham to the final evening farewell.
              </p>

              {/* Highlights List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                <div className="flex items-start gap-3">
                  <Gem className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Calibrated 5500K Lighting</strong>
                    <span className="text-muted text-xs">Zero color surprises; tested for 4K photography.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Certified Cosmetologists</strong>
                    <span className="text-muted text-xs">Hygiene, skin prep, and luxury formulations only.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Private Suite Tranquility</strong>
                    <span className="text-muted text-xs">No salon noise. A peaceful sanctuary for you and your family.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Strict Punctuality</strong>
                    <span className="text-muted text-xs">We respect your muhurtham time down to the exact minute.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 6 Pillars of the Alenora Bride */}
      <section className="py-24 sm:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="01"
            eyebrow="Specialized Bridal Disciplines"
            title="The Six Pillars of the Alenora Bride."
            description="Every nuance of your wedding appearance—from the precision of your saree pleats to the chemical-free stain of your mehendi—is crafted in-house by dedicated specialists."
            className="mb-16 sm:mb-20"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bridalPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-salon bg-cream border border-hairline overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col group"
              >
                {/* Image Window */}
                <div className="relative h-60 w-full overflow-hidden bg-espresso">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-xs text-gold bg-espresso/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                    {pillar.number}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-xs font-mono uppercase tracking-wider text-gold font-semibold">
                    {pillar.tagline}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-normal text-espresso group-hover:text-terracotta transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="pt-3 border-t border-hairline space-y-2">
                    {pillar.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-espresso/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complementing the Bride: Executive Groom & Couple Prep */}
      <section className="py-20 sm:py-28 bg-espresso text-ivory relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/40">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  Harmonious Couple Aesthetics
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-ivory leading-tight">
                Complementing the Bride: Executive Groom Grooming.
              </h2>
              <p className="text-base sm:text-lg text-ivory/80 font-sans leading-relaxed">
                While the bride is the heart and radiant focal point of our studio, we understand that wedding albums
                and video portraits celebrate the two of you together.
              </p>
              <p className="text-base sm:text-lg text-ivory/80 font-sans leading-relaxed">
                Alenora provides refined, discreet grooming packages for the groom—calibrated to complement the bride’s
                makeup tone with zero visible heavy makeup. Sharp beard architecture, dewy detan skin rejuvenation,
                and precision scalp styling ensure the groom looks distinguished and effortlessly camera-ready.
              </p>

              {/* Groom Offerings List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm font-sans">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="font-semibold text-gold">Camera-Ready Matte HD Base</h4>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    Invisible skin tone evening &amp; shine control formulated for harsh flash photography.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="font-semibold text-gold">Beard Architecture &amp; Shave</h4>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    Razor-sharp cheekbone line, sculpted jawline blend, and luxury botanical beard conditioning.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="font-semibold text-gold">Scalp Fade &amp; Texture Styling</h4>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    Scissor over comb tailoring, crisp neckline taper, and matte styling paste that holds all day.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <h4 className="font-semibold text-gold">Pre-Ceremony Scalp Detox</h4>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    Cooling tea tree scalp massage and shoulder acupressure to release wedding week tension.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative h-[420px] sm:h-[500px] rounded-salon overflow-hidden shadow-elevated border border-gold/30">
              <Image
                src="/studio-images/groom-portrait-white-mundu.jpeg"
                alt="Groom in traditional white mundu — Alenora wedding day grooming and styling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-xs uppercase tracking-widest text-gold block mb-1">
                  Paired Wedding Packages
                </span>
                <p className="font-serif text-xl text-ivory font-light">
                  Tailored styling so the couple looks perfectly harmonious together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bridal Packages & Transparent Pricing */}
      <section id="packages" className="py-24 sm:py-32 bg-cream border-y border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="02"
            eyebrow="Curated Bridal Collections"
            title="Bridal Makeover Packages."
            description="Transparent pricing, unhurried time allocations, and complete in-suite dressing assistance. Custom packages for on-location and multi-day destination weddings available upon consultation."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-salon p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  pkg.popular
                    ? "bg-espresso text-ivory shadow-elevated border-2 border-gold scale-[1.02] lg:-translate-y-2"
                    : "bg-ivory text-espresso shadow-soft border border-hairline"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-espresso font-sans text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-soft">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className={`font-serif text-2xl font-normal ${pkg.popular ? "text-ivory" : "text-espresso"}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs font-sans mt-1 ${pkg.popular ? "text-ivory/70" : "text-muted"}`}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-hairline">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-gold">
                        {pkg.price}
                      </span>
                    </div>
                    <span className={`text-[11px] font-sans ${pkg.popular ? "text-ivory/60" : "text-muted"}`}>
                      {pkg.priceNote}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className={`text-xs font-mono uppercase tracking-wider font-semibold block ${pkg.popular ? "text-gold" : "text-terracotta"}`}>
                      Package Inclusions:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-gold" : "text-terracotta"}`} />
                          <span className={pkg.popular ? "text-ivory/90" : "text-espresso/90"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-hairline">
                  <Button
                    href={buildWhatsAppLink(`Hi Alenora, I would like to reserve or discuss the ${pkg.name} package for my wedding date.`)}
                    external
                    variant={pkg.popular ? "gold" : "primary"}
                    size="md"
                    className="w-full text-center font-semibold"
                  >
                    <span>Check Date Availability</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The 4-Step Bridal Journey */}
      <section className="py-24 sm:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            index="03"
            eyebrow="Our Sacred Process"
            title="The Alenora Bridal Journey."
            description="From your initial consultation to the emotional moment you walk down the aisle, our experienced team ensures your wedding prep is calm, organized, and joyous."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-salon bg-cream border border-hairline space-y-4">
              <span className="font-mono text-3xl font-light text-terracotta">01</span>
              <h3 className="font-serif text-xl font-medium text-espresso">Trial &amp; Tone Mapping</h3>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                We sit down for tea, examine your bridal sarees, review jewelery weights, and test foundation shades under calibrated studio lighting.
              </p>
            </div>
            <div className="p-6 rounded-salon bg-cream border border-hairline space-y-4">
              <span className="font-mono text-3xl font-light text-terracotta">02</span>
              <h3 className="font-serif text-xl font-medium text-espresso">Pre-Wedding Skin Prep</h3>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                2–4 weeks prior, we begin targeted clinical brightening facials, hydra-infusion, and scalp therapy so your skin is radiant before makeup.
              </p>
            </div>
            <div className="p-6 rounded-salon bg-cream border border-hairline space-y-4">
              <span className="font-mono text-3xl font-light text-terracotta">03</span>
              <h3 className="font-serif text-xl font-medium text-espresso">The Big Day: VIP Suite</h3>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                Relax in our calm, temperature-controlled private bridal suite. With zero rushing, our artists craft your makeover and drape your saree with surgical care.
              </p>
            </div>
            <div className="p-6 rounded-salon bg-cream border border-hairline space-y-4">
              <span className="font-mono text-3xl font-light text-terracotta">04</span>
              <h3 className="font-serif text-xl font-medium text-espresso">Send-Off &amp; Emergency Kit</h3>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                We provide a personalized emergency bridal touch-up kit (blotting papers, matching lip pot, bobby pins, and veil anchors) before sending you off to your mandapam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions for Brides */}
      <section className="py-20 sm:py-28 bg-cream border-t border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-2 block">
              Clear &amp; Transparent
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
              Frequently Asked Bridal Questions
            </h2>
          </div>

          <div className="space-y-6">
            {bridalFaqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-ivory border border-hairline shadow-soft space-y-2">
                <h3 className="font-serif text-lg sm:text-xl font-medium text-espresso flex items-start gap-3">
                  <Star className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom Final Call to Action */}
      <section className="py-20 sm:py-28 bg-espresso text-ivory text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold font-sans block">
            Begin Your Wedding Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-ivory">
            Let Us Craft Your Sacred Wedding Day Radiance.
          </h2>
          <p className="text-base sm:text-lg text-ivory/80 font-sans leading-relaxed">
            Speak directly with our senior bridal cosmetologist at Alenora Beauty Studio, East Hill, Kozhikode.
            Dates are reserved on a first-confirmed basis to preserve our private 1-on-1 bridal sanctuary.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={buildWhatsAppLink(bridalWhatsAppMessage)}
              external
              variant="gold"
              size="lg"
              className="shadow-elevated px-8 py-4 font-semibold text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Direct WhatsApp Inquiry</span>
            </Button>
            <Button
              href="/#booking"
              variant="dark"
              size="lg"
              className="shadow-elevated bg-white/95 text-espresso hover:bg-white px-8 py-4 text-base"
            >
              <span>Online Reservation Form</span>
            </Button>
          </div>
          <p className="text-xs text-ivory/60 font-sans pt-2">
            Studio Location: BK Arcade, Edakkad Junction, East Hill, Kozhikode &bull; Call: {siteConfig.phone.display}
          </p>
        </div>
      </section>
    </div>
  );
}

