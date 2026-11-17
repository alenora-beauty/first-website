"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import SectionHeader from "@/components/ui/SectionHeader";
import Marquee from "@/components/ui/Marquee";
import Button from "@/components/ui/Button";
import { Instagram, ArrowUpRight } from "lucide-react";

export default function GallerySection() {
  const galleryItems = siteImages.gallery;
  const row1 = galleryItems.slice(0, 7);
  const row2 = galleryItems.slice(7, 14);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeader
          index="09"
          eyebrow="Visual Journal"
          title="Fresh from the studio."
          description="A glimpse of our latest hair transformations, bridal drapes, skin rituals and clean groom sculpting."
        />

        <div className="shrink-0">
          <Button
            href={siteConfig.social.instagram}
            external
            variant="secondary"
            size="md"
            className="group"
          >
            <Instagram className="w-4 h-4 mr-2 text-terracotta group-hover:scale-110 transition-transform" />
            <span>Follow @alenorabeautystudio</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>

      {/* Two rows auto-scrolling in opposite directions, pausing on hover */}
      <div className="space-y-6">
        {/* Row 1: Scrolling Left */}
        <Marquee speed="normal" direction="left" pauseOnHover>
          {row1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              className="relative w-56 sm:w-64 md:w-72 h-80 sm:h-96 rounded-salon overflow-hidden shadow-soft border border-hairline shrink-0 group bg-ivory"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-ivory font-sans font-medium line-clamp-1">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Row 2: Scrolling Right */}
        <Marquee speed="normal" direction="right" pauseOnHover>
          {row2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              className="relative w-56 sm:w-64 md:w-72 h-80 sm:h-96 rounded-salon overflow-hidden shadow-soft border border-hairline shrink-0 group bg-ivory"
            >
              <Image
                src={item.url}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs text-ivory font-sans font-medium line-clamp-1">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}

