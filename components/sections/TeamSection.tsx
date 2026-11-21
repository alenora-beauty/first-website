"use client";

import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index="06"
          eyebrow="The Stylists & Artists"
          title="The people behind every look."
          description="A dedicated, close-knit team of certified cosmetologists passionate about tailoring every service to your hair, skin, and milestone celebrations."
        />

        {/* 4 Portrait Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              style={{ transform: "translateZ(0)", isolation: "isolate" }}
              className="group rounded-salon bg-cream border border-hairline overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col transform-gpu"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-80 overflow-hidden bg-coffee/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out transform-gpu"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-wider text-ivory/90 bg-espresso/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-ivory/20">
                  Placeholder
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-ivory">
                  <span className="text-[11px] font-sans text-gold uppercase tracking-wider font-semibold block">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Bio & Specialty info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-espresso group-hover:text-terracotta transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted leading-relaxed font-sans">
                    <strong className="text-espresso font-medium">Specialty: </strong>
                    {member.specialty}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

