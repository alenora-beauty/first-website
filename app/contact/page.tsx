import { Metadata } from "next";
import Image from "next/image";
import BookingSection from "@/components/sections/BookingSection";
import FaqSection from "@/components/sections/FaqSection";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { MapPin, Phone, Mail, Clock, MessageCircle, Sparkles, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Studio Location | BK Arcade, East Hill, Kozhikode",
  description:
    "Find Alenora Beauty Studio at BK Arcade, Edakkad Junction, East Hill, Kozhikode. Phone: +91 77363 47582. WhatsApp booking available.",
};

export default function ContactPage() {
  return (
    <div className="pb-20">
      {/* Contact Hero Banner with Luxury Welcome Atelier Backdrop */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-36 bg-cream border-b border-hairline">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-hero-cover.webp"
            alt="Alenora Beauty Studio Welcome Atelier & Reception"
            fill
            priority
            unoptimized
            className="object-cover object-[center_35%] sm:object-right brightness-[1.06] contrast-[1.03]"
          />
          {/* Gentle, translucent gradient wash on the left for crisp typography while keeping the reception image bright, radiant, and visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/75 sm:via-cream/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/90 backdrop-blur-md border border-coffee/15 text-xs uppercase tracking-[0.22em] text-terracotta font-semibold font-sans mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Visit &bull; Call &bull; Connect</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-espresso leading-tight tracking-tight drop-shadow-sm">
              We&apos;re Here in East Hill, Calicut.
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-espresso/90 font-sans leading-relaxed max-w-xl">
              Conveniently situated at BK Arcade, Edakkad Junction. Whether booking a bespoke bridal trial,
              planning a salon ritual, or seeking personalized treatment advice, our door is always open.
            </p>

            {/* Quick Location & Timing Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-sans text-muted">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-salon-sm bg-ivory/90 backdrop-blur-sm border border-hairline text-espresso font-medium shadow-soft">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                BK Arcade, Edakkad Junction, East Hill
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-salon-sm bg-ivory/90 backdrop-blur-sm border border-hairline text-espresso font-medium shadow-soft">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Mon – Sun: 9:30 AM – 8:00 PM
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.phone.telUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-salon-sm bg-espresso text-ivory text-sm font-medium tracking-wide shadow-soft hover:bg-coffee transition-all"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call {siteConfig.phone.display}</span>
              </a>

              <a
                href={buildWhatsAppLink(
                  "Hi ALENORA, I would like to inquire about booking an appointment or visiting your studio in East Hill."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-salon-sm bg-ivory/95 hover:bg-ivory text-espresso text-sm font-medium tracking-wide border border-hairline shadow-soft transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-salon-sm bg-cream/80 hover:bg-cream text-espresso text-xs sm:text-sm font-medium border border-hairline transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-terracotta" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking & Location Section */}
      <BookingSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
