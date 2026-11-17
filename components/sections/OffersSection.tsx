"use client";

import React from "react";
import { studioOffers } from "@/data/offers";
import { formatPrice, buildWhatsAppLink } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { Sparkles, Check, ArrowRight, MessageCircle } from "lucide-react";

export default function OffersSection() {
  return (
    <section id="offers" className="py-24 sm:py-32 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="10"
          eyebrow="Special Packages"
          title="Curated seasonal offerings."
          description="Designed to offer exceptional value across comprehensive wedding prep and grooming with verified studio rate card pricing."
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto gap-8">
          {studioOffers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-salon bg-cream border border-coffee/20 p-8 sm:p-10 shadow-elevated flex flex-col justify-between relative overflow-hidden group hover:border-coffee transition-all duration-300"
            >
              {/* Gold gradient top border accent */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-terracotta via-gold to-coffee" />

              <div>
                {/* Header Tag / Badge */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coffee text-ivory text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span>{offer.badge}</span>
                  </span>

                  {offer.expiresText && (
                    <span className="text-xs text-muted font-sans font-medium">
                      {offer.expiresText}
                    </span>
                  )}
                </div>

                {/* Offer Title & Tagline */}
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso mt-2">
                  {offer.title}
                </h3>
                <p className="text-sm text-muted font-sans mt-2 leading-relaxed">
                  {offer.tagline}
                </p>

                {/* Pricing Display */}
                <div className="mt-6 pt-4 border-t border-hairline flex items-baseline gap-3">
                  {offer.offerPrice && (
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-3xl sm:text-4xl font-normal text-coffee">
                        {formatPrice(offer.offerPrice)}
                      </span>
                      {offer.originalPrice && (
                        <span className="text-sm text-muted line-through font-serif">
                          {formatPrice(offer.originalPrice)}
                        </span>
                      )}
                    </div>
                  )}
                  {offer.priceNote && (
                    <span className="text-xs font-mono text-terracotta font-medium">
                      [{offer.priceNote}]
                    </span>
                  )}
                </div>

                {/* Inclusions List */}
                <div className="mt-6 space-y-2.5">
                  <span className="text-xs font-sans font-semibold uppercase tracking-wider text-espresso">
                    Package Inclusions:
                  </span>
                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-espresso/90">
                    {offer.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-hairline">
                <Button
                  href={buildWhatsAppLink(offer.whatsAppMessage)}
                  external
                  variant="primary"
                  size="md"
                  className="w-full text-center group"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-gold group-hover:scale-110 transition-transform" />
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

