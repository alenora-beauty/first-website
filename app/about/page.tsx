import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import TeamSection from "@/components/sections/TeamSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { CheckCircle2, MapPin, Sparkles, Heart, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Certified Cosmetology Studio in East Hill, Calicut",
  description:
    "Learn about Alenora Beauty Studio in Kozhikode, our certified cosmetologists, unhurried consultation approach, and salon services for the entire family.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
              Our Story &amp; Philosophy
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-espresso leading-tight">
              A studio where dreams are adored, not rushed.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted font-sans leading-relaxed">
              Founded at BK Arcade, Edakkad Junction in East Hill, Kozhikode, Alenora was
              born from a simple conviction: that hair and skin care should be rooted in certified
              cosmetic science, unhurried listening, and warm, personal elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Visual & Mission Narrative */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] rounded-salon overflow-hidden shadow-elevated border border-hairline">
              <Image
                src={siteImages.hero.main}
                alt="Alenora Studio interior and styling area"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <span className="text-gold font-mono text-xs uppercase tracking-widest block mb-1">
                  East Hill, Kozhikode
                </span>
                <p className="font-serif text-xl sm:text-2xl font-light">
                  A sanctuary designed for relaxation, dignity, and beauty.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans">
                The Alenora Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
                Science, consultation, and artistry in equal measure.
              </h2>
              <p className="text-base text-muted leading-relaxed font-sans">
                Many modern salons feel like factory lines—hurried haircuts, aggressive upselling,
                and generic formulas. At Alenora, we operate differently. Every client sits down for
                a dedicated consultation first.
              </p>
              <p className="text-base text-muted leading-relaxed font-sans">
                Whether formulating a customized caramel balayage that complements your natural skin
                undertones, selecting an enzyme peel for tropical sun damage, or draping a precious
                Kanjeevaram silk saree for your wedding muhurtham, our certified cosmetologists bring
                exacting standards to every millimeter.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-sans">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-hairline">
                  <ShieldCheck className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-espresso">Certified Specialists</h3>
                    <p className="text-xs text-muted mt-0.5">Formally trained in cosmetology and skin health.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-cream border border-hairline">
                  <Heart className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-espresso">Warm Unisex Welcome</h3>
                    <p className="text-xs text-muted mt-0.5">Dedicated zones for women, men, and children.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/#booking" variant="primary" size="md">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Alenora Details */}
      <WhyUsSection />

      {/* Team Details */}
      <TeamSection />
    </div>
  );
}

