"use client";

import React from "react";
import Image from "next/image";
import { siteImages } from "@/data/images";
import SectionHeader from "@/components/ui/SectionHeader";
import { Clock } from "lucide-react";

export default function VisitSection() {
  const steps = siteImages.visitSteps;

  return (
    <section id="visit" className="py-24 sm:py-32 bg-cream text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="07"
          eyebrow="The Experience"
          title="From first hello to the final mirror."
          description="We value your time and comfort. Here is what your appointment journey looks like from the moment you get in touch."
        />

        {/* 4 Steps: Horizontal layout on desktop, vertical stack on mobile */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((stepItem) => (
            <div
              key={stepItem.step}
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
              className="rounded-salon bg-ivory border border-hairline p-6 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group transform-gpu"
            >
              <div>
                {/* Image & duration badge */}
                <div
                  className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-coffee/5 shadow-soft transform-gpu"
                  style={{ transform: "translateZ(0)", isolation: "isolate" }}
                >
                  <Image
                    src={stepItem.image}
                    alt={stepItem.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 font-mono text-xs text-ivory bg-espresso/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-ivory/20 font-semibold">
                    Step {stepItem.step}
                  </div>

                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold text-espresso text-[11px] font-semibold tracking-wider shadow-soft">
                    <Clock className="w-3 h-3" />
                    <span>{stepItem.duration}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                  {stepItem.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted font-sans leading-relaxed">
                  {stepItem.desc}
                </p>
              </div>

              {/* Progress Indicator Line */}
              <div className="mt-6 pt-4 border-t border-hairline flex items-center justify-between text-[11px] text-muted">
                <span>Phase {stepItem.step}</span>
                <span className="font-medium text-terracotta font-sans">
                  {stepItem.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

