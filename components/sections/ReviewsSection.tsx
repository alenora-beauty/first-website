"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { clientReviews, ReviewItem } from "@/data/reviews";
import { ChevronLeft, ChevronRight, Check, Star, Sparkles, Quote } from "lucide-react";

interface ReviewsSectionProps {
  index?: string;
}

export default function ReviewsSection({ index = "07" }: ReviewsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const total = clientReviews.length;

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setIsExpanded(false);
  }, [total]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setIsExpanded(false);
  }, [total]);

  // Gentle auto-rotation every 9 seconds when not hovered
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(nextTestimonial, 9000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial, total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevTestimonial();
      if (e.key === "ArrowRight") nextTestimonial();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevTestimonial, nextTestimonial]);

  if (!siteConfig.showReviews || total === 0) {
    return null;
  }

  const current: ReviewItem = clientReviews[activeIndex];

  // Helper to compute circular offset in range [-3, 3] for 7 reviews
  const getOffset = (idx: number) => {
    let diff = (idx - activeIndex) % total;
    if (diff > Math.floor(total / 2)) diff -= total;
    if (diff < -Math.floor(total / 2)) diff += total;
    return diff;
  };

  /**
   * Wide, open curvature matching the user's annotated markings
   * Apex is at (600, 45).
   * Avatar -1 / +1 are high and wide at (340, 60) and (860, 60).
   * Avatar -2 / +2 are at (180, 180) and (1020, 180).
   * Avatar -3 / +3 are at (70, 370) and (1130, 370).
   */
  const ARC_COORDINATES: Record<
    number,
    { x: number; y: number; size: number; opacity: number; zIndex: number }
  > = {
    0: { x: 600, y: 45, size: 96, opacity: 1, zIndex: 40 },
    1: { x: 860, y: 60, size: 66, opacity: 0.95, zIndex: 25 },
    "-1": { x: 340, y: 60, size: 66, opacity: 0.95, zIndex: 25 },
    2: { x: 1020, y: 180, size: 60, opacity: 0.88, zIndex: 22 },
    "-2": { x: 180, y: 180, size: 60, opacity: 0.88, zIndex: 22 },
    3: { x: 1130, y: 370, size: 54, opacity: 0.78, zIndex: 20 },
    "-3": { x: 70, y: 370, size: 54, opacity: 0.78, zIndex: 20 },
  };

  return (
    <section
      id="reviews"
      aria-label="Client Testimonials"
      className="relative py-24 sm:py-32 bg-[#faf8f5] text-espresso overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background: Standard Elegant Beauty Salon Interior ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/testimonials-bg.webp"
          alt="Alenora luxury beauty studio ambiance"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 filter contrast-105 scale-100"
        />
        {/* Balanced warm ivory / cream gradient overlay keeping the salon interior clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/60 via-[#faf8f5]/40 to-[#faf8f5]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(254,215,170,0.2)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* ============================================================== */}
        {/* PROMINENT SECTION HEADER (Inviting, Trust-Building) */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          {/* Eyebrow badge with Google 5.0 Rating */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta text-xs font-mono uppercase tracking-[0.2em] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-terracotta" />
            <span>Verified Google Reviews</span>
            <span>&bull;</span>
            <span className="text-terracotta font-bold">5.0 ★ Rating</span>
          </div>

          {/* Large, Engaging Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-espresso tracking-tight leading-tight">
            Loved by Kozhikode. <br className="hidden sm:block" />
            <span className="italic text-terracotta font-normal">Trusted for Life&apos;s Biggest Moments.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-muted font-sans leading-relaxed max-w-2xl mx-auto">
            From wedding mornings and saree draping to transformative hair therapy and relaxing family visits—read unfiltered stories from patrons who sat in our chairs.
          </p>
        </div>

        {/* ============================================================== */}
        {/* ARCH STAGE (Encompasses merged curved line, arrows, and avatars) */}
        {/* ============================================================== */}
        <div className="relative w-full max-w-[1200px] min-h-[560px] flex items-center justify-center">
          {/* Responsive scaled container for avatars and arc lines */}
          <div className="absolute inset-0 origin-top scale-[0.62] xs:scale-[0.72] sm:scale-[0.86] lg:scale-100 transition-transform">
            {/* SVG: Dotted line and solid orange lines following the annotated curve */}
            <svg
              className="absolute inset-0 w-[1200px] h-[520px] pointer-events-none"
              viewBox="0 0 1200 520"
              fill="none"
            >
              {/* Left Dotted Arc: Passes from Avatar -3 (70, 370) through Avatar -2 (180, 180), Avatar -1 (340, 60), to Left Arrow Button (462, 48) */}
              <path
                d="M 70 370 C 90 200, 220 50, 462 48"
                stroke="#d1cbbf"
                strokeWidth="1.75"
                strokeDasharray="5 7"
              />

              {/* Left Solid Orange Line: Seamlessly links Left Arrow Button (498, 48) to Active Apex Avatar rim (552, 45) */}
              <line
                x1="498"
                y1="48"
                x2="552"
                y2="45"
                stroke="#ea580c"
                strokeWidth="2"
              />

              {/* Right Solid Orange Line: Seamlessly links Active Apex Avatar rim (648, 45) to Right Arrow Button (702, 48) */}
              <line
                x1="648"
                y1="45"
                x2="702"
                y2="48"
                stroke="#ea580c"
                strokeWidth="2"
              />

              {/* Right Dotted Arc: Continues from Right Arrow Button (738, 48) through Avatar +1 (860, 60), Avatar +2 (1020, 180), down to Avatar +3 (1130, 370) */}
              <path
                d="M 738 48 C 980 50, 1110 200, 1130 370"
                stroke="#d1cbbf"
                strokeWidth="1.75"
                strokeDasharray="5 7"
              />
            </svg>

            {/* Left Circular Arrow Button (<) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevTestimonial();
              }}
              aria-label="Previous testimonial"
              className="absolute z-[80] pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#dfdbd3] shadow-md flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] group transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50"
              style={{ left: 480, top: 48, marginLeft: -20, marginTop: -20 }}
            >
              <ChevronLeft className="w-5 h-5 -ml-0.5 text-espresso group-hover:text-white transition-colors" />
            </button>

            {/* Right Circular Arrow Button (>) */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextTestimonial();
              }}
              aria-label="Next testimonial"
              className="absolute z-[80] pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#dfdbd3] shadow-md flex items-center justify-center hover:bg-[#ea580c] hover:border-[#ea580c] group transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ea580c]/50"
              style={{ left: 720, top: 48, marginLeft: -20, marginTop: -20 }}
            >
              <ChevronRight className="w-5 h-5 -mr-0.5 text-espresso group-hover:text-white transition-colors" />
            </button>

            {/* Avatars arranged along the sweeping dome arch */}
            <div className="absolute inset-0 pointer-events-none">
              {clientReviews.map((rev, idx) => {
                const offset = getOffset(idx);
                const coord = ARC_COORDINATES[offset] || {
                  x: 600,
                  y: 45,
                  size: 46,
                  opacity: 0.3,
                  zIndex: 10,
                };
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={rev.id}
                    layout
                    initial={false}
                    animate={{
                      x: coord.x,
                      y: coord.y,
                      scale: isActive ? 1.05 : 0.94,
                      opacity: coord.opacity,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 28,
                    }}
                    style={{
                      zIndex: coord.zIndex,
                      width: coord.size,
                      height: coord.size,
                      marginLeft: -coord.size / 2,
                      marginTop: -coord.size / 2,
                    }}
                    className="absolute top-0 left-0 cursor-pointer group pointer-events-auto"
                    onClick={() => {
                      setActiveIndex(idx);
                      setIsExpanded(false);
                    }}
                  >
                    <div
                      className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-300 ${
                        isActive
                          ? "ring-4 ring-white shadow-2xl border-2 border-[#ea580c]"
                          : "ring-2 ring-white/95 shadow-md border border-[#dfdbd3] hover:ring-[#ea580c]/60 hover:scale-110"
                      }`}
                    >
                      {rev.avatarUrl ? (
                        <Image
                          src={rev.avatarUrl}
                          alt={rev.clientName}
                          fill
                          unoptimized
                          sizes="96px"
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center font-serif font-bold text-white tracking-wide"
                          style={{ backgroundColor: rev.color || "#3b2318" }}
                        >
                          <span
                            className={
                              isActive ? "text-3xl" : "text-xl sm:text-2xl"
                            }
                          >
                            {rev.initial}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ============================================================ */}
          {/* ELEVATED LUXURY SPOTLIGHT CARD (Light Themed) */}
          {/* ============================================================ */}
          <div className="relative z-30 w-full max-w-[620px] mx-auto mt-24 sm:mt-28 px-4 pointer-events-auto">
            <div className="rounded-3xl bg-white/92 backdrop-blur-xl border border-[#e6e1d8] shadow-[0_20px_50px_rgba(42,26,18,0.08)] p-7 sm:p-9 text-center relative overflow-hidden">
              {/* Subtle top terracotta accent line */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c] to-transparent" />

              {/* Watermark Quote Icon */}
              <Quote className="absolute top-4 right-5 w-16 h-16 text-coffee/5 pointer-events-none" />

              {/* Top Meta Bar: Service Badge + 5 Gold Stars + Counter */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ea580c] text-white text-xs font-semibold tracking-wide shadow-xs">
                    {current.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-muted">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Testimonial Quote Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="pt-6"
                >
                  {/* Real Customer Quote in Editorial Serif Typeface */}
                  <blockquote className="font-serif text-lg sm:text-xl md:text-[23px] text-espresso font-normal leading-relaxed italic">
                    &ldquo;
                    {isExpanded || current.quote.length < 190
                      ? current.quote
                      : `${current.quote.slice(0, 190)}...`}
                    &rdquo;
                  </blockquote>

                  {/* Read more toggle for complete story */}
                  {current.quote.length >= 190 && (
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-3 inline-block text-[#ea580c] hover:text-[#c2410c] text-xs sm:text-sm font-sans font-medium tracking-wide underline underline-offset-4 cursor-pointer focus:outline-none transition-colors"
                    >
                      {isExpanded ? "Read less" : "Read full review"}
                    </button>
                  )}

                  {/* Patron Details & Verification */}
                  <div className="mt-7 pt-5 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-center sm:text-left">
                      <h4 className="font-serif text-lg sm:text-xl font-medium text-espresso">
                        {current.clientName}
                      </h4>
                      <p className="text-xs text-muted font-sans mt-0.5">
                        {current.role} &bull; {current.date}
                      </p>
                    </div>

                    {/* Google Verified Review Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/90 border border-hairline text-xs text-espresso/70 tracking-wide shadow-2xs">
                      <Check className="w-3.5 h-3.5 text-[#ea580c] stroke-[2.5]" />
                      <span>Verified Google Review</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
