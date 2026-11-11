"use client";

import React, { useState } from "react";
import Image from "next/image";
import { servicesData, ServiceCategory } from "@/data/services";
import { formatPrice, buildWhatsAppLink } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import TagChip from "@/components/ui/TagChip";
import Button from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Sparkles, CheckCircle2 } from "lucide-react";

export default function ServiceMenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("hair");

  const toggleCategory = (id: string) => {
    setActiveCategoryId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-cream text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            index="03"
            eyebrow="Curated Service Menu"
            title="One studio for every look."
            description="Clear, unhurried cosmetology services crafted with dermatologically safe formulations for hair, skin, bridal occasions and executive grooming."
          />
          <div className="shrink-0 text-xs text-muted max-w-xs font-sans">
            <span className="inline-block px-2 py-0.5 rounded bg-terracotta/10 text-terracotta font-semibold mr-1.5">
              Note
            </span>
            All service prices are indicative estimates (TO CONFIRM during personal consultation).
          </div>
        </div>

        {/* 5-Category Accordion */}
        <div className="space-y-4">
          {servicesData.map((category: ServiceCategory) => {
            const isOpen = activeCategoryId === category.id;

            return (
              <div
                key={category.id}
                className={`rounded-salon border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-ivory border-coffee/30 shadow-elevated"
                    : "bg-ivory/60 border-hairline hover:border-coffee/20 hover:bg-ivory"
                }`}
              >
                {/* Accordion Row Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`service-content-${category.id}`}
                  className="w-full flex flex-col md:flex-row md:items-center justify-between p-6 sm:p-8 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs sm:text-sm text-terracotta bg-terracotta/10 px-3 py-1 rounded-full font-semibold shrink-0">
                      {category.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal group-hover:text-terracotta transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                    {/* Tag chips */}
                    <div className="hidden sm:flex flex-wrap items-center gap-2">
                      {category.tags.slice(0, 3).map((tag, tIdx) => (
                        <TagChip key={tIdx} label={tag} variant="cream" />
                      ))}
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-coffee text-ivory"
                          : "bg-cream text-coffee group-hover:bg-coffee/10"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-content-${category.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-hairline p-6 sm:p-8 lg:p-10 bg-ivory">
                        {/* Category Overview: Image + Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-center">
                          <div className="lg:col-span-5 relative h-56 sm:h-64 rounded-2xl overflow-hidden shadow-soft">
                            <Image
                              src={category.image}
                              alt={category.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 text-ivory">
                              <span className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                                Specialty Focus
                              </span>
                              <p className="text-sm font-medium font-serif mt-0.5">
                                {category.title}
                              </p>
                            </div>
                          </div>

                          <div className="lg:col-span-7 space-y-4">
                            <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                              {category.description}
                            </p>
                            <div className="flex flex-wrap gap-2 pt-2">
                              {category.tags.map((tag, tIdx) => (
                                <TagChip key={tIdx} label={tag} variant="gold" />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Featured Groom Package Card (if in Men's Grooming Category) */}
                        {category.featuredPackage && (
                          <div className="mb-10 rounded-2xl bg-espresso text-ivory p-6 sm:p-8 border border-gold/30 shadow-elevated relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                              <div className="md:col-span-8 space-y-3">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider border border-gold/40">
                                  <Sparkles className="w-3.5 h-3.5" />
                                  <span>Featured Ceremony Special</span>
                                </div>
                                <h4 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
                                  {category.featuredPackage.title}
                                </h4>
                                <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                                  {category.featuredPackage.description}
                                </p>

                                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ivory/90">
                                  {category.featuredPackage.includedServices.map((srv, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-2">
                                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                                      <span>{srv}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="md:col-span-4 flex flex-col items-start md:items-end justify-center pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-ivory/15 md:pl-6 space-y-3">
                                <div>
                                  <span className="text-xs text-ivory/60 line-through mr-2">
                                    {formatPrice(category.featuredPackage.originalPrice)}
                                  </span>
                                  <span className="font-serif text-3xl sm:text-4xl text-gold font-normal">
                                    {formatPrice(category.featuredPackage.offerPrice)}
                                  </span>
                                </div>
                                <span className="text-[10px] text-ivory/60 tracking-wider uppercase font-mono">
                                  Price Status: {category.featuredPackage.priceStatus}
                                </span>
                                <Button
                                  href={buildWhatsAppLink(
                                    `Hi Alenora, I want to book the featured ${category.featuredPackage.title} (Offer ₹${category.featuredPackage.offerPrice}).`
                                  )}
                                  external
                                  variant="gold"
                                  size="md"
                                  className="w-full text-center"
                                >
                                  Book This Package
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* List of Priced Items (Styled like the Featured Package Card) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {category.items.map((item) => (
                            <div
                              key={item.id}
                              className="group rounded-2xl bg-espresso text-ivory p-6 sm:p-7 border border-gold/30 hover:border-gold/60 shadow-elevated hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-5"
                            >
                              {/* Ambient corner gold glow matching featured package */}
                              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 group-hover:bg-gold/15 rounded-full blur-3xl pointer-events-none transition-all duration-500" />

                              <div className="relative z-10 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                                  <h4 className="font-serif text-xl sm:text-2xl text-ivory font-normal group-hover:text-gold transition-colors leading-snug">
                                    {item.name}
                                  </h4>
                                  <div className="sm:text-right shrink-0">
                                    <span className="font-serif text-2xl sm:text-3xl text-gold font-normal tracking-tight">
                                      from {formatPrice(item.priceFrom)}
                                    </span>
                                    <span className="block text-[10px] text-ivory/60 tracking-wider uppercase font-mono mt-0.5">
                                      PRICE STATUS: {item.priceNote || "TO CONFIRM"}
                                    </span>
                                  </div>
                                </div>
                                <p className="text-sm text-ivory/80 leading-relaxed font-sans">
                                  {item.description}
                                </p>
                              </div>

                              <div className="relative z-10 pt-4 border-t border-ivory/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-2 text-xs text-ivory/80 font-medium">
                                  <Clock className="w-4 h-4 text-gold shrink-0" />
                                  <span>{item.duration}</span>
                                </div>
                                <Button
                                  href={buildWhatsAppLink(
                                    `Hi Alenora, I would like to book "${item.name}". Please let me know your available slots.`
                                  )}
                                  external
                                  variant="gold"
                                  size="sm"
                                  className="w-full sm:w-auto text-center font-semibold"
                                >
                                  Book This Service
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

