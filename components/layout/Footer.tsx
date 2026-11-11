"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-ivory relative overflow-hidden">
      {/* 13. Pre-Footer Final CTA Band */}
      <section className="border-b border-ivory/10 py-20 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-3 block">
            Begin Your Transformation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-tight">
            Ready to adore your look?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory/70 max-w-xl mx-auto leading-relaxed">
            Reserve your seat at our East Hill, Kozhikode studio. Experience bespoke
            care tailored for women, men and kids by certified cosmetologists.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/#booking" variant="gold" size="lg">
              Book Appointment
            </Button>
            <Button
              href={siteConfig.whatsapp.url}
              external
              variant="dark"
              size="lg"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block focus:outline-none group">
              <div className="relative pb-0.5">
                <span className="font-serif text-3xl tracking-[0.22em] font-medium text-gold block uppercase group-hover:text-gold-light transition-colors">
                  ALENORA
                </span>
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-gold/50 group-hover:bg-gold transition-colors" />
              </div>
              <span className="text-xs tracking-[0.28em] uppercase text-ivory/80 font-sans block mt-1.5 font-medium">
                {siteConfig.tagline}
              </span>
            </Link>
            <p className="mt-4 text-sm text-ivory/70 leading-relaxed max-w-sm">
              {siteConfig.positioning}
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alenora Instagram"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alenora Facebook"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:text-gold hover:border-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alenora WhatsApp"
                className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/80 hover:text-[#25D366] hover:border-[#25D366] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Explore Links */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-ivory/70 hover:text-ivory transition-colors"
                >
                  About Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-ivory/70 hover:text-ivory transition-colors"
                >
                  Service Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-ivory/70 hover:text-ivory transition-colors"
                >
                  Portfolio Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#transformations"
                  className="text-ivory/70 hover:text-ivory transition-colors"
                >
                  Transformations
                </Link>
              </li>
              <li>
                <Link
                  href="/#why-us"
                  className="text-ivory/70 hover:text-ivory transition-colors"
                >
                  Why Alenora
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gold/90 hover:text-gold font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Join Our Team</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Visit */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
              Visit Studio
            </h3>
            <div className="space-y-3 text-sm text-ivory/70">
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start space-x-2.5 hover:text-ivory transition-colors"
              >
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.junction},{" "}
                  {siteConfig.address.area}, {siteConfig.address.city},{" "}
                  {siteConfig.address.state} {siteConfig.address.pincode}
                </span>
              </a>
              <div className="flex items-center space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Opening Hours: {siteConfig.openingHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="space-y-2.5 text-sm text-ivory/70">
              <p>
                <a
                  href={siteConfig.phone.telUrl}
                  className="hover:text-gold transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  <span>{siteConfig.phone.display}</span>
                </a>
              </p>
              <p>
                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center space-x-2"
                >
                  <span className="w-4 h-4 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-[10px]">
                    WA
                  </span>
                  <span>WhatsApp: {siteConfig.whatsapp.display}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-gold transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Huge ALENORA Wordmark Watermark */}
        <div className="pt-16 pb-6 select-none overflow-hidden">
          <div className="font-serif text-[13vw] leading-none text-center text-ivory/[0.04] font-bold tracking-[0.1em] uppercase pointer-events-none whitespace-nowrap">
            ALENORA
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="border-t border-ivory/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy"
              className="hover:text-ivory transition-colors focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-ivory transition-colors focus:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
