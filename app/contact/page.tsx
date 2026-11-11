import { Metadata } from "next";
import BookingSection from "@/components/sections/BookingSection";
import FaqSection from "@/components/sections/FaqSection";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Studio Location | BK Arcade, East Hill, Kozhikode",
  description:
    "Find Alenora Beauty Studio at BK Arcade, Edakkad Junction, East Hill, Kozhikode. Phone: +91 77363 47582. WhatsApp booking available.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Contact Hero Banner */}
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Visit &bull; Call &bull; Connect
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-espresso leading-tight">
            We&apos;re Here in East Hill, Calicut
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted font-sans leading-relaxed">
            Conveniently situated at BK Arcade, Edakkad Junction. Whether booking a bridal trial,
            a weekend haircut, or asking for treatment advice, we&apos;re always delighted to help.
          </p>
        </div>
      </section>

      {/* Booking & Location Section */}
      <BookingSection />

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}

