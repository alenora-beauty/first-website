"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import Button from "@/components/ui/Button";
import {
  Instagram,
  ArrowUpRight,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import galleryData from "@/data/galleryPhotos.json";

interface GalleryPhoto {
  id: string;
  url: string;
  alt: string;
  category: "all" | "hair" | "bridal" | "skin" | "grooming" | "mehendi" | string;
  tag: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
}

const allPhotos: GalleryPhoto[] = galleryData as GalleryPhoto[];

const filterCategories = [
  { id: "all", label: "All Looks" },
  { id: "bridal", label: "Bridal & Saree" },
  { id: "hair", label: "Hair Craft" },
  { id: "skin", label: "Skin & Facials" },
  { id: "grooming", label: "Men's Grooming" },
  { id: "mehendi", label: "Mehendi Art" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeFilter);

  // Handle keyboard navigation in lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filtered.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
        );
      }
    },
    [lightboxIndex, filtered.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const activePhoto =
    lightboxIndex !== null && filtered[lightboxIndex]
      ? filtered[lightboxIndex]
      : null;

  return (
    <div className="pb-20 bg-ivory text-espresso">
      {/* Header Banner with Service Cover Background */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 lg:pb-32 bg-cream border-b border-hairline">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/service-cover/service-cover.png"
            alt="Alenora Studio Portfolio Cover"
            fill
            priority
            unoptimized
            className="object-cover object-right sm:object-center"
          />
          {/* Subtle soft gradient wash on left for crystal-clear text legibility while keeping the portrait 100% crisp & unblurred */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/70 sm:via-cream/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/80 via-transparent to-cream/20 pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-left">
            {/* Eyebrow / Tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold/40 shadow-soft mb-5 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-coffee font-semibold font-mono">
                The Living Atelier • Visual Portfolio
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-espresso leading-[1.08] tracking-tight">
              Fresh from the Studio
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-muted font-sans leading-relaxed">
              Real brides, bespoke haircuts, luminous skin therapies, and executive men’s
              barbering crafted by our master stylists in East Hill, Kozhikode.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={siteConfig.social.instagram}
                external
                variant="gold"
                size="md"
                className="group shadow-elevated"
              >
                <Instagram className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                <span>Follow @alenorabeautystudio</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Image Grid */}
      <section className="py-14 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat.id;
              const count =
                cat.id === "all"
                  ? allPhotos.length
                  : allPhotos.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveFilter(cat.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold flex items-center gap-1.5 ${
                    isActive
                      ? "bg-coffee text-ivory shadow-soft"
                      : "bg-cream text-coffee/80 hover:bg-cream/70 border border-hairline"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-ivory/20 text-ivory"
                        : "bg-espresso/5 text-muted"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-80 sm:h-96 rounded-salon overflow-hidden shadow-soft border border-hairline bg-cream cursor-pointer hover:shadow-elevated transition-all duration-500"
              >
                <Image
                  src={item.url}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={95}
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Tag Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-espresso/70 backdrop-blur-md text-gold text-[10px] font-semibold uppercase tracking-wider border border-gold/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-ivory border border-white/30">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 inset-x-4 text-ivory">
                  <p className="text-sm font-serif font-light text-ivory line-clamp-2">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-salon bg-cream border border-gold/40 shadow-soft text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans block">
              Inspired by Our Work?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
              Book Your Bespoke Makeover or Styling Session.
            </h3>
            <p className="text-sm text-muted font-sans max-w-xl mx-auto leading-relaxed">
              Every transformation begins with an unhurried consultation at our East Hill studio.
              Connect directly with our senior stylists.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Button
                href={buildWhatsAppLink(
                  "Hi Alenora! I was browsing your studio gallery and would like to consult with a stylist."
                )}
                external
                variant="gold"
                size="md"
                className="shadow-soft"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>Inquire on WhatsApp</span>
              </Button>
              <Button href="/#booking" variant="secondary" size="md">
                <span>Reserve Online</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-espresso/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close image preview"
              className="absolute -top-12 right-0 sm:right-2 text-ivory/80 hover:text-ivory bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (prev) => (prev! - 1 + filtered.length) % filtered.length
                )
              }
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory bg-white/10 hover:bg-white/25 p-2.5 rounded-full backdrop-blur-sm transition-all z-20 shadow-soft"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! + 1) % filtered.length)
              }
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-ivory/80 hover:text-ivory bg-white/10 hover:bg-white/25 p-2.5 rounded-full backdrop-blur-sm transition-all z-20 shadow-soft"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Preview Container */}
            <div className="relative w-full h-full max-h-[80vh] rounded-2xl overflow-hidden border border-gold/40 shadow-elevated bg-espresso">
              <Image
                src={activePhoto.url}
                alt={activePhoto.alt}
                fill
                quality={100}
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Pill */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full px-2 text-ivory">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-mono uppercase tracking-wider border border-gold/40">
                  {activePhoto.tag}
                </span>
                <span className="text-xs text-ivory/70 font-mono">
                  {lightboxIndex! + 1} / {filtered.length}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ivory/90 font-serif text-center sm:text-right max-w-xl line-clamp-2">
                {activePhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
