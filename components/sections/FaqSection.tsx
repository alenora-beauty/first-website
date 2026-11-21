"use client";

import React, { useState } from "react";
import Image from "next/image";
import { studioFaqs, FAQItem } from "@/data/faq";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  MessageCircle,
  Scissors,
  HeartHandshake,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";

interface FaqSectionProps {
  index?: string;
}

const categories = [
  { id: "all", label: "All Questions" },
  { id: "booking", label: "Appointments & Policies" },
  { id: "bridal", label: "Bridal & Saree Draping" },
  { id: "services", label: "Hair, Skin & Family" },
];

export default function FaqSection({ index = "08" }: FaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // Independent open state allows viewing multiple questions across wide columns
  const [openIds, setOpenIds] = useState<string[]>([studioFaqs[0].id, studioFaqs[1].id]);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs =
    activeCategory === "all"
      ? studioFaqs
      : studioFaqs.filter((faq) => faq.category === activeCategory);

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#140d09] text-ivory overflow-hidden border-y border-gold/15 w-full"
    >
      {/* ── Background: Studio Ambiance & Atmospheric Lighting ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/studio-images/bridal-makeup-artist-working.webp"
          alt="Alenora studio ambience"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.04] filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140d09] via-[#160e0a]/95 to-[#120b08]" />
      </div>

      {/* Floating Alenora Gold Flame Brandmark Watermark */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-16 -right-16 w-80 sm:w-96 md:w-[460px] h-80 sm:h-96 md:h-[460px] opacity-[0.045] pointer-events-none select-none"
      >
        <Image
          src="/images/alenora-mark-gold.webp"
          alt=""
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Radial Atmospheric Studio Glows */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-terracotta/20 blur-[140px] pointer-events-none"
      />

      {/* Subtle Hairline Vector Watermark */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 sm:left-12 opacity-[0.05] text-gold pointer-events-none hidden md:block"
      >
        <Scissors className="w-28 h-28 -rotate-45" />
      </div>

      {/* ── Main Full-Width Content Container (Stretched Edge-to-Edge) ── */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Full-Width Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 sm:pb-14 border-b border-gold/15 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-4 shadow-soft backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>{index} • Help &amp; Studio Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-ivory tracking-tight leading-tight">
              Questions, <span className="italic font-serif text-gold">answered.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#c5b5aa] font-sans leading-relaxed">
              Everything you need to know about our salon protocols, appointments, certified formulations, and bespoke bridal rituals in East Hill, Kozhikode.
            </p>
          </div>

          {/* Quick Help WhatsApp Badge */}
          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Cosmetologists Available • Quick Replies</span>
            </div>
            <a
              href={buildWhatsAppLink(
                "Hi Alenora, I was browsing your FAQ and had a question about your services. Could you assist me?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gold/15 hover:bg-gold/25 border border-gold/35 text-gold hover:text-[#f3e1b9] text-xs sm:text-sm font-sans font-medium transition-all duration-300 shadow-soft backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Category Filter Pills (Full-Width Navigation) */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-gold via-[#dec077] to-gold text-espresso shadow-[0_4px_16px_rgba(201,162,75,0.35)] font-semibold scale-[1.02]"
                    : "bg-[#1f1510]/80 hover:bg-[#281b14] text-[#c5b5aa] hover:text-ivory border border-gold/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Expansive 2-Column Full-Width FAQ Grid (Stretches Margin-to-Margin) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-6 w-full">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);
            const itemNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: (idx % 2) * 0.08 }}
                className={`group rounded-2xl transition-all duration-300 overflow-hidden relative border ${
                  isOpen
                    ? "bg-gradient-to-br from-[#261811] via-[#1f130d] to-[#180e08] border-gold/50 shadow-[0_12px_40px_-10px_rgba(201,162,75,0.22)] ring-1 ring-gold/20"
                    : "bg-[#1c120c]/85 hover:bg-[#23160f] border-gold/15 hover:border-gold/35 shadow-soft"
                }`}
              >
                {/* Active Gold Edge Accent Bar */}
                {isOpen && (
                  <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-gold via-[#e5c158] to-terracotta" />
                )}

                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-start justify-between p-6 sm:p-7 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex items-start gap-4 pr-2 flex-1">
                    {/* Number Badge */}
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border transition-all duration-300 shrink-0 mt-0.5 ${
                        isOpen
                          ? "border-gold/60 bg-gold/20 text-gold shadow-[0_0_12px_rgba(201,162,75,0.35)] font-semibold"
                          : "border-gold/20 bg-gold/5 text-gold/70 group-hover:border-gold/40 group-hover:text-gold"
                      }`}
                    >
                      {itemNumber}
                    </span>

                    <div className="space-y-1.5 flex-1">
                      {/* Category Tag */}
                      {faq.tag && (
                        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-gold/80 block">
                          {faq.tag}
                        </span>
                      )}

                      {/* Question Heading */}
                      <h3
                        className={`font-serif text-lg sm:text-xl font-normal transition-colors duration-300 leading-snug ${
                          isOpen ? "text-gold" : "text-ivory/90 group-hover:text-ivory"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                      isOpen
                        ? "rotate-180 bg-gradient-to-r from-gold to-[#c59b27] text-espresso shadow-[0_0_18px_rgba(201,162,75,0.45)]"
                        : "bg-[#2c1e16] text-gold/80 border border-gold/20 group-hover:bg-gold/15 group-hover:border-gold/40 group-hover:text-gold"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Expandable Answer Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-2 text-sm sm:text-base text-[#d8ccc4] font-sans leading-relaxed border-t border-gold/15 pl-14 sm:pl-16">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-gold/70 shrink-0 mt-1 hidden sm:block" />
                          <p className="flex-1 leading-relaxed text-[#d5c7bf]">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Full-Width Studio Concierge Banner (Stretching Edge-to-Edge) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 w-full rounded-2xl bg-gradient-to-r from-[#22160f] via-[#2a1b12] to-[#1e130c] border border-gold/30 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-elevated"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/35 flex items-center justify-center text-gold shrink-0 shadow-[0_0_20px_rgba(201,162,75,0.25)]">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-ivory">
                Have a specific service, package, or date inquiry?
              </h4>
              <p className="text-xs sm:text-sm text-[#c5b5aa] font-sans mt-1.5 max-w-2xl leading-relaxed">
                Whether you need custom bridal trials, group makeover arrangements, or personalized skin consultations, our cosmetologists in East Hill, Kozhikode are ready to assist.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <a
              href={siteConfig.phone.telUrl}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-ivory/10 hover:bg-ivory/20 border border-gold/25 text-ivory text-xs sm:text-sm font-sans font-medium transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>Call Studio</span>
            </a>

            <a
              href={buildWhatsAppLink(
                "Hi Alenora, I would like to consult with a cosmetologist regarding an upcoming appointment."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold via-[#e5c158] to-[#c59b27] text-espresso font-sans font-semibold text-xs sm:text-sm shadow-[0_4px_20px_rgba(201,162,75,0.3)] hover:shadow-[0_6px_25px_rgba(201,162,75,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-espresso text-espresso" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
