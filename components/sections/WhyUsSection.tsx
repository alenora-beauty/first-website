"use client";

import React from "react";
import Image from "next/image";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import TagChip from "@/components/ui/TagChip";
import { ArrowRight } from "lucide-react";

interface WhyReason {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const whyReasons: WhyReason[] = [
  {
    id: "certified",
    number: "01 / 04",
    title: "Certified Cosmetologists",
    description:
      "Every treatment is delivered by formally certified professionals educated in scalp biology, skin physiology, and hygienic modern aesthetic protocols.",
    tags: ["Qualified Staff", "Skin Science", "Medical Hygiene"],
    image: siteImages.whyUs[0].url,
  },
  {
    id: "consultation",
    number: "02 / 04",
    title: "A Personal Consultation First",
    description:
      "We never rush into cutting or applying chemicals. We sit down, listen to your vision, inspect your hair porosity and skin sensitivities, and recommend only what works.",
    tags: ["Unhurried", "Custom Formulations", "Zero Pressure"],
    image: siteImages.whyUs[1].url,
  },
  {
    id: "family",
    number: "03 / 04",
    title: "One Studio for the Whole Family",
    description:
      "A warm, welcoming, inclusive environment designed for women, men, and children under one roof in East Hill, Kozhikode. Thoughtful zones maintain comfort and privacy.",
    tags: ["Unisex Salon", "Kids Friendly", "Warm Ambience"],
    image: siteImages.whyUs[2].url,
  },
  {
    id: "bridal",
    number: "04 / 04",
    title: "Bridal & Occasion Specialists",
    description:
      "From traditional Kerala floral braids to contemporary Christian and Muslim wedding styling, our artists preserve your natural elegance for photo-perfect moments.",
    tags: ["Long-Wear HD", "Saree Artistry", "Herbal Henna"],
    image: siteImages.whyUs[3].url,
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans font-semibold text-terracotta">
              <span>Why Alenora</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] text-espresso">
              Four reasons clients return.
            </h2>

            <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
              We set out to create a salon experience rooted in precision,
              warmth, and genuine care—free of hurried upsells and synthetic compromises.
            </p>

            <div className="pt-2">
              <Button href="/about" variant="primary" size="md" className="group">
                <span>Learn our story</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column: Stacking Sticky Cards */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {whyReasons.map((reason, index) => (
              <div
                key={reason.id}
                className="sticky rounded-salon bg-cream border border-hairline p-6 sm:p-8 shadow-elevated transition-transform duration-300"
                style={{
                  top: `calc(100px + ${index * 24}px)`,
                }}
              >
                <div className="flex items-center justify-between border-b border-hairline pb-4 mb-6">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-terracotta tracking-wider">
                    {reason.number}
                  </span>
                  <div className="flex gap-2">
                    {reason.tags.map((tag, tIdx) => (
                      <TagChip key={tIdx} label={tag} variant="ivory" />
                    ))}
                  </div>
                </div>

                <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden mb-6 shadow-soft">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso mb-3">
                  {reason.title}
                </h3>

                <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

