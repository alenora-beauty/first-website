"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { clientReviews, ReviewItem } from "@/data/reviews";
import SectionHeader from "@/components/ui/SectionHeader";
import Marquee from "@/components/ui/Marquee";
import { Star, Quote } from "lucide-react";

export default function ReviewsSection() {
  // Respect the critical business rule:
  // Studio has no online reviews yet. If showReviews is false or reviews array is empty,
  // do not render the section at all.
  if (!siteConfig.showReviews || clientReviews.length === 0) {
    return null;
  }

  const featuredReview: ReviewItem = clientReviews[0];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-ivory text-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="08"
          eyebrow="Client Stories"
          title="Kind words from our patrons."
          description="Real verified experiences from women, men, and wedding couples who trusted Alenora."
        />

        {/* Featured Big Quote */}
        {featuredReview && (
          <div className="mt-16 rounded-salon bg-cream border border-hairline p-8 sm:p-12 shadow-elevated relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-24 h-24 text-coffee/5 pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              {/* Stars badge */}
              <div className="flex items-center gap-1 text-gold mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < featuredReview.rating ? "fill-gold" : "text-muted/30"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-espresso font-normal leading-relaxed italic">
                &ldquo;{featuredReview.quote}&rdquo;
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                {featuredReview.avatarUrl ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-coffee/20">
                    <Image
                      src={featuredReview.avatarUrl}
                      alt={featuredReview.clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-coffee text-ivory flex items-center justify-center font-serif text-xl font-bold">
                    {featuredReview.clientName.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-serif text-lg font-medium text-espresso">
                    {featuredReview.clientName}
                  </h4>
                  <p className="text-xs text-muted font-sans">
                    {featuredReview.serviceReceived} &bull; {featuredReview.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Slow Marquee of Short Quotes */}
        <div className="mt-12 overflow-hidden">
          <Marquee speed="slow" pauseOnHover>
            {clientReviews.map((rev) => (
              <div
                key={rev.id}
                className="w-80 rounded-2xl bg-cream/70 border border-hairline p-5 shadow-soft shrink-0 space-y-3"
              >
                <div className="flex items-center gap-1 text-gold">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
                <p className="text-xs text-espresso leading-relaxed italic line-clamp-3">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-hairline text-[11px] text-muted flex justify-between">
                  <span className="font-medium text-espresso">{rev.clientName}</span>
                  <span>{rev.serviceReceived}</span>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

