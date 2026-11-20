"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Award,
  Quote,
  Heart,
  ShieldCheck,
  ArrowRight,
  Compass,
  GraduationCap,
  Sparkle,
  Scissors,
  Crown,
  ChevronDown,
  MapPin,
} from "lucide-react";

export default function AboutClient() {
  const credentials = [
    { title: "Diploma in Cosmetology", type: "Core Specialization" },
    { title: "Advance Diploma in Beauty Artistry", type: "Advanced Artistry" },
    { title: "Chemical Peel Specialist", type: "Clinical Skincare" },
    { title: "Diploma in Hydra Facial", type: "Aesthetic Treatment" },
  ];

  const missionPillars = [
    {
      title: "Deliver professional and personalized beauty services.",
      desc: "Tailoring every cut, color, facial, and drape to your individual anatomy, skin health, and lifestyle.",
    },
    {
      title: "Maintain high standards of quality and hygiene.",
      desc: "Using sanitized medical-grade tools, disposable single-use kits, and certified international formulations.",
    },
    {
      title: "Make every client feel confident and beautiful.",
      desc: "Creating an uplifting, affirming environment that celebrates your natural uniqueness and dignity.",
    },
    {
      title: "Create a positive and luxurious beauty experience.",
      desc: "An unhurried sanctuary where every detail—from soothing beverages to undivided attention—is crafted for relaxation.",
    },
  ];

  const studioHighlights = [
    { number: "100%", label: "Personalized Consultations", sub: "Unhurried, tailored care" },
    { number: "VLCC", label: "Certified Leadership", sub: "Cosmetology excellence" },
    { number: "Full", label: "Family Studio", sub: "Women, men & children" },
  ];

  return (
    <div className="pb-20 bg-cream text-espresso overflow-hidden">
      {/* ──────────────────────────────────────────────────────────
          1. GRAND CINEMATIC HERO SECTION: About Us
      ────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex items-center justify-center text-center pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 bg-cream text-espresso overflow-hidden border-b border-hairline">
        {/* Bespoke Luxury Beauty Atelier Backdrop */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/images/about-hero-bg.webp"
            alt="Alenora luxury beauty studio atelier ambience"
            fill
            sizes="100vw"
            unoptimized
            className="object-cover object-center scale-100 brightness-[1.06] contrast-[1.03]"
            priority
          />
          {/* Luminous warm overlay allowing the atelier architecture to shine through vibrantly */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#140c08]/55 via-[#140c08]/20 to-[#140c08]/75 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#140c08]/40 via-transparent to-[#140c08]/40 pointer-events-none" />
        </div>

        {/* Floating Alenora Gold Flame Brandmark Watermark */}
        <motion.div
          aria-hidden="true"
          animate={{
            y: [0, -12, 0],
            rotate: [0, 1.5, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[460px] lg:w-[580px] h-80 sm:h-[460px] lg:h-[580px] opacity-[0.05] pointer-events-none select-none"
        >
          <Image
            src="/images/alenora-mark-gold.webp"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* Radial Atmospheric Golden Glows */}
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-gold/20 blur-[130px] pointer-events-none"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.10, 0.18, 0.10],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-terracotta/20 blur-[140px] pointer-events-none"
        />

        {/* Floating Golden Studio Light Motes */}
        <motion.div
          aria-hidden="true"
          animate={{
            y: [-18, 18, -18],
            x: [-8, 8, -8],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 left-[15%] w-2 h-2 rounded-full bg-gold shadow-[0_0_12px_#c9a24b] pointer-events-none hidden sm:block"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            y: [18, -20, 18],
            x: [8, -8, 8],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-[18%] w-2.5 h-2.5 rounded-full bg-gold/90 shadow-[0_0_14px_#c9a24b] pointer-events-none hidden sm:block"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            y: [-14, 14, -14],
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute bottom-28 left-[28%] w-1.5 h-1.5 rounded-full bg-[#f3e1b9] shadow-[0_0_8px_#f3e1b9] pointer-events-none hidden sm:block"
        />

        {/* Foreground Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-cream/90 border border-coffee/20 backdrop-blur-md shadow-soft mb-6"
          >
            <Crown className="w-4 h-4 text-terracotta shrink-0" />
            <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] text-espresso font-bold">
              Alenora Beauty Studio • East Hill, Kozhikode
            </span>
          </motion.div>

          {/* Large Commanding Attractive Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-espresso tracking-tight uppercase leading-[0.95] drop-shadow-sm"
          >
            About <span className="italic font-serif text-espresso">Us</span>
          </motion.h1>

          {/* Subtitle / Core Vision Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-8 font-serif text-xl sm:text-2xl md:text-3xl text-espresso font-medium max-w-3xl mx-auto leading-relaxed italic drop-shadow-sm"
          >
            &ldquo;Where Beauty Meets Confidence, and Dreams Become Reality.&rdquo;
          </motion.p>

          {/* Tagline Pill & Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <span className="px-5 py-2.5 rounded-full bg-cream/90 border border-coffee/20 text-espresso text-xs sm:text-sm font-sans font-semibold tracking-wide shadow-soft backdrop-blur-md">
              Aspire Your Dream. Embrace Your Beauty.
            </span>
            <a
              href="#welcome-story"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-espresso text-ivory hover:bg-coffee border border-espresso text-xs sm:text-sm font-sans font-medium transition-all duration-300 shadow-soft"
            >
              <span>Explore Our Story</span>
              <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          2. WELCOME TO ALENORA STORY SECTION
      ────────────────────────────────────────────────────────── */}
      <section id="welcome-story" className="relative py-20 sm:py-28 lg:py-32 bg-cream border-b border-hairline overflow-hidden">
        {/* Subtle background ambiance */}
        <div
          aria-hidden="true"
          className="absolute -right-32 top-1/3 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Story Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-hairline shadow-soft">
                <Sparkles className="w-3.5 h-3.5 text-terracotta" />
                <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans">
                  Our Philosophy &amp; Purpose
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso font-normal leading-tight">
                Welcome to <span className="italic font-serif text-terracotta">Alenora</span> Beauty Studio
              </h2>

              <p className="font-serif text-xl sm:text-2xl text-coffee font-medium leading-snug">
                Where Beauty Meets Confidence, and Dreams Become Reality.
              </p>

              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                At Alenora Beauty Studio, we believe that beauty is more than just appearance –
                it is about confidence, self-expression and feeling your best.
              </p>

              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                Founded with a passion for beauty and a vision for excellence, Alenora is dedicated
                to providing exceptional beauty experiences through professional expertise,
                personalized care and premium services.
              </p>

              <p className="text-base sm:text-lg text-muted font-sans leading-relaxed">
                Our goal is to create a welcoming and luxurious space where every client feels special,
                valued and confident. From hair and skincare to beauty and wellness services, we focus
                on quality, creativity and customer satisfaction.
              </p>

              {/* Callout Quote Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-ivory border border-hairline border-l-4 border-l-terracotta shadow-soft space-y-2">
                <p className="font-serif text-xl sm:text-2xl text-espresso font-normal italic leading-snug">
                  "We don't just enhance beauty; we inspire confidence and celebrate individuality."
                </p>
                <span className="block text-xs uppercase tracking-widest text-terracotta font-semibold font-sans pt-1">
                  Alenora Beauty Studio – Aspire Your Dream. Embrace Your Beauty.
                </span>
              </div>

              {/* Studio Highlights Bar */}
              <div className="pt-4 border-t border-hairline grid grid-cols-3 gap-4">
                {studioHighlights.map((s, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="font-serif text-2xl sm:text-3xl font-medium text-terracotta block">
                      {s.number}
                    </span>
                    <span className="text-xs font-semibold text-espresso block font-sans">
                      {s.label}
                    </span>
                    <span className="text-[11px] text-muted block font-sans">
                      {s.sub}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Visual Montage Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
                {/* Main Visual Image Card */}
                <div className="relative aspect-[4/5] rounded-salon overflow-hidden shadow-elevated border-2 border-hairline bg-ivory group">
                  <Image
                    src="/studio-images/bridal-party-celebration-lehenga.jpeg"
                    alt="Celebration and bridal beauty artistry at Alenora Beauty Studio"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/15 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-ivory space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory/20 backdrop-blur-md border border-ivory/30 text-gold text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span>East Hill, Kozhikode</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-tight">
                      Where Confidence Meets Timeless Elegance
                    </h3>
                  </div>
                </div>

                {/* Overlapping Secondary Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-ivory border border-hairline shadow-soft flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-gold/15 text-terracotta flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-espresso">
                        Certified VLCC Cosmetology
                      </h4>
                      <p className="text-xs text-muted font-sans">
                        High standards of hygiene &amp; excellence
                      </p>
                    </div>
                  </div>
                  <Button href="/#booking" variant="secondary" size="sm">
                    Book
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          3. OUR VISION & OUR MISSION
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-ivory border-b border-hairline overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso">
              Our Vision &amp; Mission
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted font-sans leading-relaxed">
              Guiding every consultation, treatment, and touchpoint at Alenora Beauty Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Vision Card (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 rounded-salon bg-cream border border-hairline p-8 sm:p-10 shadow-soft flex flex-col justify-between relative overflow-hidden group hover:border-coffee/30 transition-all duration-300"
            >
              <div
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/20 transition-all duration-500"
              />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-ivory border border-hairline flex items-center justify-center text-terracotta shadow-soft">
                  <Compass className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans">
                    The Destination
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-normal mt-1">
                    Our Vision
                  </h3>
                </div>

                <p className="font-serif text-xl sm:text-2xl text-espresso/90 font-light leading-relaxed italic pt-2">
                  "To become a trusted beauty destination known for excellence, innovation and unforgettable customer experiences."
                </p>
              </div>

              <div className="pt-8 border-t border-hairline mt-8 relative z-10">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                  Excellence • Innovation • Unforgettable Care
                </span>
              </div>
            </motion.div>

            {/* Mission Card (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-7 rounded-salon bg-cream border border-hairline p-8 sm:p-10 shadow-soft flex flex-col justify-between relative overflow-hidden group hover:border-coffee/30 transition-all duration-300"
            >
              <div
                aria-hidden="true"
                className="absolute -bottom-12 -right-12 w-56 h-56 bg-terracotta/10 rounded-full blur-3xl pointer-events-none group-hover:bg-terracotta/20 transition-all duration-500"
              />

              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-ivory border border-hairline flex items-center justify-center text-terracotta shadow-soft">
                  <ShieldCheck className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans">
                    Our Daily Commitment
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-espresso font-normal mt-1">
                    Our Mission
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {missionPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-ivory/80 border border-hairline/80 space-y-2 hover:bg-ivory transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0" />
                        <span className="font-mono text-xs text-terracotta font-semibold">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-espresso leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-muted font-sans leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-hairline mt-6 relative z-10">
                <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                  Quality &amp; Hygiene • Confidence • Luxury Experience
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          4. MESSAGE FROM FOUNDER BANNER (Dark Luxury)
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 bg-[#160f0c] text-ivory overflow-hidden border-y border-gold/20">
        {/* Ambient Brand Watermark */}
        <motion.div
          aria-hidden="true"
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-16 top-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.05] pointer-events-none"
        >
          <Image
            src="/images/alenora-mark-gold.webp"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold border border-gold/30 mb-6 shadow-[0_0_20px_rgba(201,162,75,0.25)]">
            <Quote className="w-6 h-6" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold font-sans mb-4 block">
            A Message From Our Founder
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-light leading-relaxed">
            "Alenora is not just a beauty studio; it is a dream built with passion,
            dedication and determination. My vision is to empower women to feel confident,
            beautiful and proud of who they are."
          </blockquote>

          <div className="mt-8 pt-6 border-t border-gold/20 inline-block">
            <span className="font-serif text-xl sm:text-2xl text-gold font-medium block">
              Anna Sonia
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#d8ccc4] block mt-0.5">
              Founder &amp; CEO — Alenora Beauty Studio
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          5. MEET OUR FOUNDER & CEO (Flagship Feature Section)
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-cream overflow-hidden">
        {/* Subtle Decorative Ambient Lighting */}
        <div
          aria-hidden="true"
          className="absolute top-1/3 left-0 w-80 h-80 bg-gold/15 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory border border-hairline shadow-soft mb-4">
              <Award className="w-4 h-4 text-terracotta" />
              <span className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans">
                Meet Our Founder &amp; CEO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso leading-tight">
              A Visionary Woman Entrepreneur Behind Alenora Beauty Studio
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait Column (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 flex flex-col items-center"
            >
              <div className="relative w-full max-w-md aspect-[4/5] rounded-salon overflow-hidden shadow-elevated border-2 border-hairline bg-ivory group">
                <Image
                  src="/studio-images/anna-sonia-founder.webp"
                  alt="Anna Sonia — Founder & CEO of Alenora Beauty Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-gold font-mono text-xs uppercase tracking-widest block mb-1">
                    Founder &amp; CEO
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                    ANNA SONIA
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/80 backdrop-blur-md border border-gold/30 text-xs font-sans text-gold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certified from VLCC Institute</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-xs font-mono text-muted tracking-wide">
                  Certified Cosmetologist • Aesthetic Specialist
                </span>
              </div>
            </motion.div>

            {/* Founder Details & Journey Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans block mb-1">
                  Professional Credentials &amp; Certifications
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-espresso">
                  ANNA SONIA
                </h3>
                <div className="mt-2 inline-block px-3.5 py-1 rounded-full bg-gold/15 text-espresso border border-gold/40 text-xs font-mono font-semibold tracking-wider uppercase">
                  Certified from VLCC INSTITUTE
                </div>
              </div>

              {/* Credentials Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {credentials.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-ivory border border-hairline flex items-center gap-3 shadow-soft hover:border-coffee/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-cream border border-hairline flex items-center justify-center text-terracotta shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans text-xs sm:text-sm font-bold text-espresso leading-tight">
                        {cred.title}
                      </h4>
                      <span className="text-[11px] text-muted font-sans block mt-0.5">
                        {cred.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Narrative Story */}
              <div className="space-y-4 pt-4 border-t border-hairline text-base text-muted font-sans leading-relaxed">
                <p className="font-serif text-xl sm:text-2xl text-espresso font-normal italic leading-snug">
                  "Behind every successful dream is a woman with passion, courage and determination."
                </p>

                <p>
                  Our founder is a passionate woman entrepreneur who transformed her love for beauty
                  into a vision of creating something extraordinary. With a strong belief in empowering
                  women and enhancing their confidence, she established Alenora Beauty Studio as a destination
                  where beauty meets excellence.
                </p>

                <p>
                  Her entrepreneurial journey reflects creativity, dedication, leadership and the courage
                  to turn dreams into reality.
                </p>

                <p>
                  For her, Alenora is more than a business – it is a dream, a passion and a commitment
                  to making every woman feel beautiful, confident and special.
                </p>
              </div>

              {/* Founder's Philosophy Banner */}
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-coffee to-espresso text-ivory shadow-elevated border border-gold/30 space-y-2 mt-6">
                <div className="flex items-center gap-2 text-gold text-xs font-mono uppercase tracking-widest font-semibold">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span>Her Philosophy</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-ivory font-light italic leading-snug">
                  "Aspire Your Dream, Believe in Yourself and Create Your Own Identity."
                </p>
                <span className="text-xs font-sans text-ivory/70 block pt-1">
                  — Anna Sonia, Founder &amp; CEO
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────
          6. VISIT & CONSULTATION CTA
      ────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-ivory border-t border-hairline overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans block">
            Start Your Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-espresso">
            Experience the Alenora difference firsthand.
          </h2>
          <p className="text-base sm:text-lg text-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you are preparing for your wedding day, seeking restorative skincare, or looking
            for precision hair design, we welcome you to our studio in East Hill, Kozhikode.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              href={buildWhatsAppLink("Hi Anna & Alenora team, I would like to schedule a personal consultation.")}
              external
              variant="primary"
              size="lg"
            >
              <span>Consult on WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
