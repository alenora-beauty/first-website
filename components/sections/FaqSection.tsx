"use client";

import React, { useState } from "react";
import Image from "next/image";
import { studioFaqs } from "@/data/faq";
import { buildWhatsAppLink } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, MessageCircle, Scissors, HeartHandshake } from "lucide-react";

interface FaqSectionProps {
  index?: string;
}

export default function FaqSection({ index = "08" }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string>(studioFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 lg:py-36 bg-[#140d09] text-ivory overflow-hidden border-y border-gold/15"
    >
      {/* ── Background: Studio Ambiance & Brand Aesthetics ── */}
      {/* Subtle Studio Interior Backdrop with Luxury Dark Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/studio-images/bridal-makeup-artist-working.jpeg"
          alt="Alenora studio ambience"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.05] filter blur-[2px] scale-105"
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
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold/20 blur-[130px] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-32 w-[480px] h-[480px] rounded-full bg-terracotta/20 blur-[140px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#f3e5ab]/[0.03] blur-[150px] pointer-events-none"
      />

      {/* Subtle Hairline Beauty Studio Vector Watermarks */}
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-6 sm:left-12 opacity-[0.06] text-gold pointer-events-none hidden md:block"
      >
        <Scissors className="w-24 h-24 -rotate-45" />
      </div>

      {/* Floating Golden Studio Light Motes */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-[18%] w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_#c9a24b] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          y: [20, -25, 20],
          x: [10, -10, 10],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 right-[15%] w-2 h-2 rounded-full bg-gold/80 shadow-[0_0_10px_#c9a24b] pointer-events-none"
      />
      <motion.div
        aria-hidden="true"
        animate={{
          y: [-15, 15, -15],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute bottom-36 left-[30%] w-1 h-1 rounded-full bg-[#f3e1b9] shadow-[0_0_6px_#f3e1b9] pointer-events-none"
      />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={index}
          eyebrow="Help & Information"
          title="Questions, answered."
          description="Everything you need to know about our studio protocols, appointments, and specialized services in East Hill, Kozhikode."
          align="center"
          theme="dark"
          className="mb-14 sm:mb-18"
        />

        {/* ── Accordion List ── */}
        <div className="space-y-4">
          {studioFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const itemNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`group rounded-2xl transition-all duration-300 overflow-hidden relative ${
                  isOpen
                    ? "bg-gradient-to-br from-[#291c15] via-[#211610] to-[#1a110c] border border-gold/60 shadow-[0_12px_40px_-8px_rgba(201,162,75,0.22)] ring-1 ring-gold/25"
                    : "bg-[#1f1510]/75 hover:bg-[#281b14]/90 border border-gold/15 hover:border-gold/40 shadow-soft backdrop-blur-md"
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
                  className="w-full flex items-center justify-between p-5 sm:p-7 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4.5 pr-2">
                    {/* Number Badge */}
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-full border transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "border-gold/60 bg-gold/20 text-gold shadow-[0_0_12px_rgba(201,162,75,0.35)] font-semibold"
                          : "border-gold/20 bg-gold/5 text-gold/70 group-hover:border-gold/40 group-hover:text-gold"
                      }`}
                    >
                      {itemNumber}
                    </span>

                    {/* Question Heading */}
                    <span
                      className={`font-serif text-lg sm:text-xl font-medium transition-colors duration-300 leading-snug ${
                        isOpen
                          ? "text-gold"
                          : "text-ivory/90 group-hover:text-ivory"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Indicator Button */}
                  <div
                    className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
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
                      <div className="px-5 sm:px-7 pb-6 pt-2 text-sm sm:text-base text-[#d8ccc4] font-sans leading-relaxed border-t border-gold/15 pl-12 sm:pl-16">
                        <div className="flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-gold/70 shrink-0 mt-1 hidden sm:block" />
                          <p className="flex-1">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* ── Studio Consultation Help Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-[#241710] via-[#2c1d14] to-[#20140d] border border-gold/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold shrink-0 mx-auto sm:mx-0 shadow-[0_0_15px_rgba(201,162,75,0.25)]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-ivory">
                Have a specific service or bridal query?
              </h4>
              <p className="text-xs sm:text-sm text-[#c5b5aa] font-sans mt-0.5">
                Our lead cosmetologists are ready to answer your questions on WhatsApp.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppLink(
              "Hi Alenora, I was reading through the FAQ and had a question about your services. Could you assist me?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-gold via-[#e5c158] to-[#c59b27] text-espresso font-sans font-semibold text-sm shadow-[0_4px_20px_rgba(201,162,75,0.3)] hover:shadow-[0_6px_25px_rgba(201,162,75,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-espresso text-espresso" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
