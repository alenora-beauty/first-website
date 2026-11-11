"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import { Instagram, ArrowUpRight, Sparkles } from "lucide-react";

interface GalleryPhoto {
  url: string;
  alt: string;
  category: "all" | "hair" | "bridal" | "skin" | "grooming" | "mehendi";
  tag: string;
}

const categorizedPhotos: GalleryPhoto[] = [
  {
    url: siteImages.gallery[0].url,
    alt: "Alenora beauty studio ambiance in East Hill",
    category: "all",
    tag: "Studio Ambience",
  },
  {
    url: siteImages.gallery[1].url,
    alt: "Custom blonde highlights and gloss treatment",
    category: "hair",
    tag: "Highlights & Balayage",
  },
  {
    url: siteImages.gallery[2].url,
    alt: "Kerala muhurtham bridal makeup with temple ornaments",
    category: "bridal",
    tag: "Bridal Couture",
  },
  {
    url: siteImages.gallery[3].url,
    alt: "Dermal hydration facial treatment",
    category: "skin",
    tag: "Brightening Facial",
  },
  {
    url: siteImages.gallery[4].url,
    alt: "Gentlemen's skin fade and hot towel beard shaping",
    category: "grooming",
    tag: "Men's Barbering",
  },
  {
    url: siteImages.gallery[5].url,
    alt: "All-natural organic henna bridal mehendi",
    category: "mehendi",
    tag: "Organic Mehendi",
  },
  {
    url: siteImages.gallery[6].url,
    alt: "Precision silk saree pleating and pin-work",
    category: "bridal",
    tag: "Saree Draping",
  },
  {
    url: siteImages.gallery[7].url,
    alt: "Reception party glam makeup",
    category: "bridal",
    tag: "Reception Makeup",
  },
  {
    url: siteImages.gallery[8].url,
    alt: "Rich brunette global hair colour with glass shine",
    category: "hair",
    tag: "Global Colour",
  },
  {
    url: siteImages.gallery[9].url,
    alt: "Botanical detan skin treatment",
    category: "skin",
    tag: "Detan Therapy",
  },
  {
    url: siteImages.gallery[10].url,
    alt: "Beard sculpting and razor edge finish",
    category: "grooming",
    tag: "Beard Sculpt",
  },
  {
    url: siteImages.gallery[11].url,
    alt: "Certified cosmetologist skin analysis",
    category: "skin",
    tag: "Skin Analysis",
  },
  {
    url: siteImages.gallery[12].url,
    alt: "Friendly kids haircut in relaxed environment",
    category: "hair",
    tag: "Kids Styling",
  },
  {
    url: siteImages.gallery[13].url,
    alt: "Wedding bridal party makeup squad",
    category: "bridal",
    tag: "Bridal Squad",
  },
];

const filterCategories = [
  { id: "all", label: "All Looks" },
  { id: "hair", label: "Hair Craft" },
  { id: "bridal", label: "Bridal & Saree" },
  { id: "skin", label: "Skin & Facials" },
  { id: "grooming", label: "Men's Grooming" },
  { id: "mehendi", label: "Mehendi Art" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? categorizedPhotos
      : categorizedPhotos.filter(
          (p) => p.category === activeFilter || p.category === "all"
        );

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Visual Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-espresso leading-tight">
            Fresh from the Studio
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted font-sans leading-relaxed">
            A showcase of hairstyles, luminous bridal makeovers, crisp beard trims, and
            soothing skin therapies created by our certified team in Kozhikode.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={siteConfig.social.instagram}
              external
              variant="secondary"
              size="md"
              className="group"
            >
              <Instagram className="w-4 h-4 mr-2 text-terracotta group-hover:scale-110 transition-transform" />
              <span>Follow @alenorabeautystudio on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Image Grid */}
      <section className="py-16 sm:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    isActive
                      ? "bg-coffee text-ivory shadow-soft"
                      : "bg-cream text-coffee/80 hover:bg-cream/70 border border-hairline"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Photo Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-80 sm:h-96 rounded-salon overflow-hidden shadow-soft border border-hairline bg-cream"
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-espresso/70 backdrop-blur-md text-gold text-[10px] font-semibold uppercase tracking-wider border border-gold/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 text-ivory">
                  <p className="text-sm font-serif font-light text-ivory line-clamp-2">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Note regarding placeholder replacement */}
          <div className="mt-16 text-center text-xs text-muted max-w-xl mx-auto p-4 rounded-xl bg-cream border border-hairline">
            <strong>Studio Photo Replacement:</strong> All gallery images are currently
            curated high-resolution placeholders from Unsplash. Studio owners can replace
            all URLs directly in <code className="text-terracotta">/data/images.ts</code> or
            connect an Instagram Basic Display API feed.
          </div>
        </div>
      </section>
    </div>
  );
}

