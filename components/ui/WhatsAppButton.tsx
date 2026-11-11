"use client";

import React, { useState } from "react";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Optional dismissible friendly prompt on initial load */}
      {showTooltip && (
        <div className="relative mb-3 mr-1 bg-ivory text-espresso px-4 py-2.5 rounded-2xl shadow-elevated border border-coffee/15 text-xs font-sans max-w-[220px] animate-bounce duration-1000">
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label="Dismiss message"
            className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-espresso text-ivory rounded-full flex items-center justify-center hover:bg-terracotta transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-coffee">Chat with Alenora</p>
          <p className="text-[11px] text-muted mt-0.5 leading-snug">
            Book instantly or ask about bridal & grooming packages.
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Alenora Beauty Studio on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-elevated hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <span className="sr-only">Open WhatsApp chat</span>
        <MessageCircle className="w-7 h-7 fill-white" />

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
      </a>
    </div>
  );
}

