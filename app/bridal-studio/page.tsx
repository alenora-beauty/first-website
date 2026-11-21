import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import CurtainGallery3D from "@/components/bridal/CurtainGallery3D";
import bridalImages from "@/data/bridalImages.json";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bridal Studio & Makeover Kozhikode | Wedding Ceremony Looks, Saree Draping & Mehendi | Alenora",
  description:
    "Dedicated luxury bridal studio at Alenora Beauty Studio, East Hill, Kozhikode. Specializing in 18-hour sweat-proof bridal makeovers, master silk saree draping, organic herbal mehendi, and complete bridal dressing assistance.",
};

export default function BridalStudioPage() {
  const bridalWhatsAppMessage =
    "Hi Alenora Bridal Studio! I would like to inquire about bridal makeover services and check date availability for my wedding.";

  return (
    <div className="pb-20 bg-ivory text-espresso">
      {/* 1. Couture Editorial Bridal Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-ivory border-b border-hairline pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
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
                  href="#bridal-gallery"
                  variant="secondary"
                  size="lg"
                  className="shadow-soft px-7 py-3.5 text-sm sm:text-base font-medium"
                >
                  <span>Explore Bridal Gallery ↓</span>
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
              <div
                className="relative h-[480px] sm:h-[560px] lg:h-[600px] rounded-salon-lg overflow-hidden shadow-elevated border-2 border-gold/40 bg-espresso group transform-gpu"
                style={{ transform: "translateZ(0)", isolation: "isolate" }}
              >
                <Image
                  src="/studio-images/kerala-bride-kanjeevaram-silk.webp"
                  alt="Alenora Bridal Studio — Kerala wedding ceremony bride in Kanjeevaram silk with temple jewellery"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/15 to-transparent pointer-events-none" />

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
            <div
              className="lg:col-span-6 relative h-[480px] sm:h-[580px] rounded-salon overflow-hidden shadow-elevated border border-hairline bg-espresso transform-gpu"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <Image
                src="/studio-images/kerala-bride-red-kasavu-outdoor.webp"
                alt="Alenora Bridal Makeover — traditional Kerala bride in red kasavu with gold jewellery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transform-gpu"
                loading="lazy"
                decoding="async"
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
                and impeccably draped from the morning ceremony to the final evening farewell.
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
                    <span className="text-muted text-xs">We respect your ceremony schedule down to the exact minute.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Real Alenora Brides — 3D Curtain Gallery */}
      <section id="bridal-gallery" className="py-20 sm:py-28 bg-ivory overflow-hidden border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 text-center">
          <SectionHeader
            eyebrow="Real Alenora Brides • Couture Portfolio"
            title="Crafted for a Lifetime of Memories."
            description="Every pleat placed with intention, every shade matched to skin undertone, and every smile genuine. Browse through our cherished real bridal gallery."
            className="text-center max-w-3xl mx-auto"
          />
        </div>

        {/* 3D Curtain Gallery Component */}
        <div className="w-full">
          <CurtainGallery3D images={bridalImages} />
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
            <div
              className="lg:col-span-5 relative h-[420px] sm:h-[500px] rounded-salon overflow-hidden shadow-elevated border border-gold/30 transform-gpu"
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
            >
              <Image
                src="/studio-images/groom-portrait-white-mundu.webp"
                alt="Groom in traditional white mundu — Alenora wedding day grooming and styling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transform-gpu"
                loading="lazy"
                decoding="async"
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

      {/* 6. Bottom Final Call to Action */}
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

