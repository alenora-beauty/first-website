"use client";

import React, { useState } from "react";
import { studioFaqs } from "@/data/faq";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqSectionProps {
  index?: string;
}

export default function FaqSection({ index = "10" }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string>(studioFaqs[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-cream text-espresso">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={index}
          eyebrow="Help & Information"
          title="Questions, answered."
          description="Everything you need to know about our studio protocols, appointments, and specialized services in East Hill, Kozhikode."
          align="center"
          className="mb-16"
        />

        <div className="space-y-4">
          {studioFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-ivory border-coffee/30 shadow-elevated"
                    : "bg-ivory/60 border-hairline hover:bg-ivory hover:border-coffee/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold group"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-terracotta shrink-0" />
                    <span className="font-serif text-lg sm:text-xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-coffee text-ivory"
                        : "bg-cream text-coffee group-hover:bg-coffee/10"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7 text-sm sm:text-base text-muted font-sans leading-relaxed border-t border-hairline/60">
                        {faq.answer}
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

