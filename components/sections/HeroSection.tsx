"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const slides = siteImages.heroSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left-to-right" | "right-to-left">("left-to-right");

  const heroTags = [
    "Hair Colour",
    "Highlights",
    "Hair Spa",
    "Brightening Facials",
    "Bridal Makeover",
    "Saree Draping",
    "Mehendi Art",
    "Custom Tattoo",
    "Groom Package",
    "Kids Cuts",
  ];

  // Advance slide left-to-right
  const nextSlide = useCallback(() => {
    setDirection("left-to-right");
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection("right-to-left");
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Preload the next upcoming slide in advance so transitions remain instant without saturating initial load
  useEffect(() => {
    if (typeof window === "undefined") return;
    const nextIdx = (currentIndex + 1) % slides.length;
    const img = new window.Image();
    img.src = slides[nextIdx].url;
  }, [currentIndex, slides]);

  // Strict 2-second slide cycle: advances every 2000ms without mouse-hover freeze
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex, nextSlide]);

  // Snappy, ultra-smooth synchronized transition (fluid glide, faster slide speed)
  const slideTransition = {
    duration: 0.45,
    ease: [0.25, 1, 0.5, 1],
  };

  const slideVariants = {
    initial: (dir: string) => ({
      x: dir === "left-to-right" ? "-100%" : "100%",
    }),
    animate: {
      x: "0%",
      transition: slideTransition,
    },
    exit: (dir: string) => ({
      x: dir === "left-to-right" ? "100%" : "-100%",
      transition: slideTransition,
    }),
  };

  const activeSlide = slides[currentIndex];

  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden bg-black text-white select-none"
    >
      {/* Animated Background Carousel (Left-to-Right, perfectly fitted to hero canvas) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide.id}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0 w-full h-full overflow-hidden transform-gpu"
            style={{
              backgroundColor: activeSlide.bgColor || "#050505",
              willChange: "transform",
            }}
          >
            {/* Ambient soft glow backdrop only for contain mode (matching background color seamlessly) */}
            {activeSlide.fit === "contain" && (
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                  src={activeSlide.url}
                  alt=""
                  fill
                  quality={60}
                  className="object-cover blur-3xl opacity-35 scale-110"
                />
              </div>
            )}

            {/* Main Slide Image: full stretched edge-to-edge cover with high visual fidelity */}
            <Image
              src={activeSlide.url}
              alt={activeSlide.alt}
              fill
              priority
              quality={90}
              sizes="100vw"
              className={`relative z-10 w-full h-full ${activeSlide.fit === "contain"
                ? `object-contain ${activeSlide.position || "object-center"}`
                : `object-cover ${activeSlide.position || "object-center"}`
                }`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Clear natural lighting: subtle top & bottom edge vignetting only (zero brownish wash over center image) */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 via-black/15 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-16 flex-1 flex flex-col justify-center w-full">
        <div className="max-w-3xl space-y-6">
          {/* Eyebrow & Index */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}

          >

          </motion.div>

          {/* Large Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            Adore your dreams.
          </motion.h1>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl bg-black/35 backdrop-blur-md p-5 rounded-2xl border border-white/15 shadow-glass"
          >
            <p className="text-base sm:text-lg text-white font-sans leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
              Certified cosmetologists for skin, hair and bridal makeovers. Made
              personal, for women, men and kids in East Hill, Kozhikode.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <Button href="/#booking" variant="gold" size="lg" className="shadow-elevated">
              Book Now
            </Button>
            <Button
              href="/services"
              variant="dark"
              size="lg"
              className="group shadow-elevated bg-white/95 text-espresso hover:bg-white"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Carousel Navigation Bar (Segmented slide indicators & controls) */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/15">
          {/* Active slide badge */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-gold bg-black/55 backdrop-blur-md px-3 py-1 rounded-full border border-gold/40 font-semibold shadow-soft">
              {String(currentIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={activeSlide.id}
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -3 }}
                transition={{ duration: 0.25 }}
                className="text-xs text-white font-sans tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)] font-medium"
              >
                {activeSlide.category}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Segmented Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    if (idx === currentIndex) return;
                    setDirection(idx > currentIndex ? "left-to-right" : "right-to-left");
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  className="relative h-2 rounded-full transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  style={{
                    width: isActive ? "44px" : "14px",
                    backgroundColor: isActive ? "rgba(201, 162, 75, 0.45)" : "rgba(255, 255, 255, 0.35)",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute inset-0 bg-gold rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous banner"
              className="w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-gold hover:text-espresso hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next banner (animate left to right)"
              className="w-9 h-9 rounded-full bg-black/45 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-gold hover:text-espresso hover:border-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Marquee of Services Tags (Clear backdrop) */}
      <div className="relative z-20 border-t border-white/15 bg-black/45 backdrop-blur-md py-4">
        <Marquee speed="normal">
          {heroTags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 text-xs sm:text-sm font-sans tracking-[0.18em] uppercase text-white font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]"
            >
              <span>{tag}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 opacity-80" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
