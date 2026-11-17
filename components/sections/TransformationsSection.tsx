"use client";

import React, { useState } from "react";
import { siteImages } from "@/data/images";
import { buildWhatsAppLink } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Button from "@/components/ui/Button";
import { Clock, UserCheck, CheckCircle, ArrowRight } from "lucide-react";

export default function TransformationsSection() {
  const transformations = siteImages.transformations;
  const [activeCaseId, setActiveCaseId] = useState<string>(transformations[0].id);

  const activeCase =
    transformations.find((item) => item.id === activeCaseId) || transformations[0];

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-cream text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Side-by-Side Results"
          title="Real results, side by side."
          description="Drag the slider to inspect before and after client transformations. Photos shown are placeholders marked to be replaced with real studio cases."
        />

        {/* Clickable Case Study Selector Tabs */}
        <div className="mt-12 flex flex-wrap gap-3 pb-2 border-b border-hairline">
          {transformations.map((item) => {
            const isActive = item.id === activeCaseId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveCaseId(item.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "bg-coffee text-ivory shadow-soft"
                    : "bg-ivory text-coffee/80 hover:bg-ivory/80 border border-hairline"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Presentation */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Draggable Slider Component */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              key={activeCase.id}
              beforeImage={activeCase.before}
              afterImage={activeCase.after}
              beforeAlt={`${activeCase.title} - Before`}
              afterAlt={`${activeCase.title} - After`}
              className="shadow-elevated border border-hairline"
            />
            <div className="mt-2 text-right">
              <span className="text-[11px] font-mono text-terracotta/60 bg-terracotta/5 px-2.5 py-0.5 rounded-full">
                Before &amp; After — Alenora Beauty Studio
              </span>
            </div>
          </div>

          {/* Case Detail Panel */}
          <div className="lg:col-span-5 rounded-salon bg-ivory border border-hairline p-6 sm:p-8 shadow-soft space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-terracotta font-semibold font-sans">
                Case Details
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-espresso mt-1">
                {activeCase.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
              {activeCase.description}
            </p>

            <div className="space-y-3 pt-2 border-t border-hairline text-sm">
              <div className="flex items-center justify-between py-1">
                <span className="text-muted flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-terracotta" />
                  Service
                </span>
                <span className="font-medium text-espresso font-sans">
                  {activeCase.service}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-muted flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta" />
                  Session Duration
                </span>
                <span className="font-medium text-espresso font-sans">
                  {activeCase.time}
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <span className="text-muted flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-terracotta" />
                  Stylist Level
                </span>
                <span className="font-medium text-espresso font-sans">
                  {activeCase.technician}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-hairline">
              <Button
                href={buildWhatsAppLink(
                  `Hi Alenora, I love the "${activeCase.title}" transformation. Can I schedule a consultation for this look?`
                )}
                external
                variant="primary"
                size="md"
                className="w-full text-center group"
              >
                <span>Book this look</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

