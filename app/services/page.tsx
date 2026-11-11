import { Metadata } from "next";
import ServiceMenuSection from "@/components/sections/ServiceMenuSection";
import OffersSection from "@/components/sections/OffersSection";
import BookingSection from "@/components/sections/BookingSection";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Price Menu | Hair, Skin, Bridal, Grooming Kozhikode",
  description:
    "Explore full services and price guide for Alenora Beauty Studio: precision haircutting, custom highlights, skin facials, bridal makeover, saree draping, and men's groom packages.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Services Hero Banner */}
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Crafted for Women, Men &amp; Kids
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-espresso leading-tight">
            Comprehensive Beauty &amp; Grooming Menu
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted font-sans leading-relaxed">
            Every service at Alenora is personalized to your individual features, hair health, and
            daily routine. Explore our transparent pricing and featured seasonal packages below.
          </p>
        </div>
      </section>

      {/* Main Service Menu Accordion */}
      <ServiceMenuSection />

      {/* Seasonal Offers Band */}
      <OffersSection />

      {/* Booking Form */}
      <BookingSection />
    </div>
  );
}

