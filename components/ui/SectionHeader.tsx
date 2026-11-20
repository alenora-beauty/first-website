"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  index?: string; // e.g. "01", "02", "03"
  eyebrow?: string; // e.g. "BEAUTY STUDIO, KOZHIKODE"
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={`flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold mb-3 ${
            align === "center" ? "justify-center" : "justify-start"
          } ${isDark ? "text-gold" : "text-terracotta"}`}
        >
          <span>{eyebrow}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${
          isDark ? "text-ivory" : "text-espresso"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed font-sans ${
            isDark ? "text-ivory/80" : "text-muted"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

