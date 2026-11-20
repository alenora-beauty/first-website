import { Metadata } from "next";
import Image from "next/image";
import ServiceMenuSection from "@/components/sections/ServiceMenuSection";
import BookingSection from "@/components/sections/BookingSection";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { Sparkles, ShieldCheck, ArrowDown, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Price Menu | Hair, Skin, Bridal, Grooming Kozhikode",
  description:
    "Explore full services and price guide for Alenora Beauty Studio: precision haircutting, custom highlights, skin facials, bridal makeover, saree draping, and men's groom packages.",
};

export default function ServicesPage() {
  return (
    <div className="pb-20">
      {/* Services Hero Banner with Luxury Atelier Cover - seamlessly starting from the top with zero navbar gap */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-36 bg-cream border-b border-hairline">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero-cover.jpg"
            alt="Alenora Beauty Studio Services & Atelier Interior"
            fill
            priority
            unoptimized
            className="object-cover object-[center_30%] sm:object-right brightness-[1.08] contrast-[1.04]"
          />
          {/* Gentle, translucent gradient wash on the left for crisp typography while keeping the atelier image bright, radiant, and fully visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 sm:via-cream/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-coffee/15 text-xs uppercase tracking-[0.22em] text-terracotta font-semibold font-sans mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>{siteConfig.tagline} • Women, Men &amp; Kids</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso leading-tight tracking-tight drop-shadow-sm">
              Bespoke Services &amp; Transparent Pricing.
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-espresso/90 font-sans leading-relaxed max-w-xl">
              Every ritual at Alenora is tailored to your unique features, hair health, and lifestyle.
              From precision hair design and advanced clinical facials to bespoke bridal artistry and mindful grooming.
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-sans text-muted">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-salon-sm bg-ivory/90 backdrop-blur-sm border border-hairline text-espresso font-medium shadow-soft">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                Verified Rate Card
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-salon-sm bg-ivory/90 backdrop-blur-sm border border-hairline text-espresso font-medium shadow-soft">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Certified Cosmetologists
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-salon-sm bg-ivory/90 backdrop-blur-sm border border-hairline text-espresso font-medium shadow-soft">
                East Hill, Kozhikode
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-salon-sm bg-espresso text-ivory text-sm font-medium tracking-wide shadow-soft hover:bg-coffee transition-all"
              >
                <span>View Full Menu</span>
                <ArrowDown className="w-4 h-4 text-gold" />
              </a>

              <a
                href={buildWhatsAppLink(
                  "Hi ALENORA, I'd like to consult regarding your salon & beauty services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-salon-sm bg-ivory/90 hover:bg-ivory text-espresso text-sm font-medium tracking-wide border border-hairline shadow-soft transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Menu Accordion */}
      <ServiceMenuSection showPrices={true} />

      {/* Booking Form */}
      <BookingSection />
    </div>
  );
}
