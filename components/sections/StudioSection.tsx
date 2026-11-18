"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

const studioCards = [
  {
    number: "01",
    data: siteImages.studioCards.hair,
    categoryKey: "hair",
  },
  {
    number: "02",
    data: siteImages.studioCards.skin,
    categoryKey: "skin",
  },
  {
    number: "03",
    data: siteImages.studioCards.bridal,
    categoryKey: "bridal",
  },
  {
    number: "04",
    data: siteImages.studioCards.saree,
    categoryKey: "bridal",
  },
  {
    number: "05",
    data: siteImages.studioCards.mehendi,
    categoryKey: "mehendi",
  },
  {
    number: "06",
    data: siteImages.studioCards.grooming,
    categoryKey: "mens-grooming",
  },
];

const statementWords =
  "Certified cosmetologists who treat every look, from a first haircut to a wedding day, as something personal."
    .split(" ");

function WordReveal({ word, range, progress }: { word: string; range: [number, number]; progress: any }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ["#7A6355", "#2A1A12"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em] transition-colors">
      {word}
    </motion.span>
  );
}

export default function StudioSection() {
  const statementRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <section id="studio" className="py-24 sm:py-32 bg-ivory text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Index */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans font-semibold text-terracotta mb-6">
          <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta">
            02
          </span>
          <span>The Alenora Philosophy</span>
        </div>

        {/* Word-by-word Reveal Statement Paragraph */}
        <div ref={statementRef} className="max-w-5xl">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] tracking-tight">
            {statementWords.map((word, i) => {
              const start = i / statementWords.length;
              const end = start + 1 / statementWords.length;
              return (
                <WordReveal
                  key={i}
                  word={word}
                  range={[start, end]}
                  progress={scrollYProgress}
                />
              );
            })}
          </p>
        </div>

        {/* Short paragraph about consultation & quality + WhatsApp button (NO rating line) */}
        <div className="mt-10 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-5xl">
          <p className="text-base sm:text-lg text-muted font-sans max-w-xl leading-relaxed">
            Every session begins with an attentive one-on-one consultation. We analyze your scalp,
            skin undertones and style preferences to formulate bespoke treatments with zero rush and
            complete transparency.
          </p>
          <div className="shrink-0 flex items-center gap-4">
            <Button
              href={siteConfig.whatsapp.url}
              external
              variant="primary"
              size="md"
              className="group"
            >
              <MessageCircle className="w-4 h-4 mr-2 text-gold group-hover:scale-110 transition-transform" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Looping Horizontal Carousel of Tall Portrait Cards */}
      <div className="mt-16 sm:mt-20 overflow-hidden">
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max px-4">
          {[...studioCards, ...studioCards].map((card, idx) => (
            <div
              key={idx}
              className="relative w-64 sm:w-72 md:w-80 h-[380px] sm:h-[440px] rounded-salon overflow-hidden shrink-0 group shadow-soft border border-hairline bg-cream"
            >
              <Image
                src={card.data.url}
                alt={card.data.alt}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 text-ivory">
                <h3 className="font-serif text-2xl font-normal tracking-tight text-ivory group-hover:text-gold transition-colors">
                  {card.data.title}
                </h3>
                <p className="mt-2 text-xs text-ivory/80 line-clamp-2 leading-relaxed font-sans">
                  {card.data.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

