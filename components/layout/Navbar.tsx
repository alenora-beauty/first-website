"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const isHome = pathname === "/";
  const navBackground = scrolled
    ? "bg-ivory/95 backdrop-blur-md shadow-soft border-b border-hairline py-3.5 text-espresso"
    : isHome
    ? "bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent py-4 sm:py-5 text-ivory"
    : "bg-ivory/95 backdrop-blur-md border-b border-hairline py-4 text-espresso";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBackground}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Wordmark with coffee brown glass protection on hero */}
          <Link
            href="/"
            className={`group inline-flex items-center gap-2.5 sm:gap-3 focus:outline-none transition-all duration-300 rounded-full h-[46px] ${
              scrolled || !isHome
                ? "px-2"
                : "bg-espresso/90 backdrop-blur-md px-4 border border-gold/35 shadow-soft"
            }`}
          >
            <div className="relative w-6 h-7 sm:w-7 sm:h-8 shrink-0">
              <Image
                src={
                  scrolled || !isHome
                    ? "/images/alenora-mark-coffee.webp"
                    : "/images/alenora-mark-gold.webp"
                }
                alt="Alenora Logo"
                fill
                sizes="32px"
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`font-serif text-lg sm:text-xl tracking-[0.22em] font-medium uppercase transition-colors ${
                scrolled || !isHome
                  ? "text-coffee group-hover:text-terracotta"
                  : "text-gold-light group-hover:text-gold"
              }`}
            >
              ALENORA
            </span>
          </Link>

          {/* Desktop Nav Links (Coffee brown glass capsule on hero) */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center transition-all duration-300 h-[46px] ${
              scrolled || !isHome
                ? "space-x-8"
                : "space-x-1 bg-espresso/90 backdrop-blur-md px-5 rounded-full border border-gold/35 shadow-soft"
            }`}
          >
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs sm:text-sm tracking-widest font-sans uppercase font-medium transition-all relative px-3 py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-full ${
                    scrolled || !isHome
                      ? isActive
                        ? "text-coffee font-semibold"
                        : "text-coffee/80 hover:text-terracotta"
                      : isActive
                      ? "text-gold bg-white/10 font-semibold shadow-inner"
                      : "text-ivory/90 hover:text-gold hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (scrolled || !isHome) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-coffee"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book Now Pill Button in Coffee Brown Theme & Matching Size */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#booking"
              className={`inline-flex items-center justify-center px-6 h-[46px] rounded-full font-sans uppercase tracking-widest text-xs sm:text-sm font-semibold transition-all duration-300 shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-gold active:scale-[0.98] ${
                scrolled || !isHome
                  ? "bg-coffee text-ivory hover:bg-terracotta border border-coffee"
                  : "bg-espresso/90 backdrop-blur-md border border-gold/35 text-gold-light hover:text-gold hover:border-gold hover:bg-espresso"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger Button with coffee brown glass pill protection */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className={`md:hidden flex items-center justify-center w-[46px] h-[46px] rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-300 ${
              scrolled || !isHome
                ? "text-coffee hover:bg-coffee/10"
                : "bg-espresso/90 backdrop-blur-md border border-gold/35 text-gold-light shadow-soft hover:bg-espresso hover:text-gold"
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu (Coffee brown background) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-coffee text-ivory flex flex-col justify-between p-6 sm:p-10 md:hidden"
          >
            {/* Top Bar with Logo and Close */}
            <div className="flex items-center justify-between border-b border-ivory/15 pb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-7 h-8 shrink-0">
                  <Image
                    src="/images/alenora-mark-gold.webp"
                    alt="Alenora Logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <span className="font-serif text-2xl tracking-[0.22em] uppercase text-gold font-medium">
                  ALENORA
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-full text-ivory hover:bg-ivory/10 transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col space-y-6 my-auto py-8">
              {siteConfig.navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-3xl sm:text-4xl text-ivory hover:text-gold flex items-center justify-between transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-gold transition-all" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gold/90 text-sm uppercase tracking-widest font-sans flex items-center gap-2 pt-2"
                >
                  <span>Careers &amp; Opportunities</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </nav>

            {/* Bottom Actions and Contact Info */}
            <div className="border-t border-ivory/15 pt-6 space-y-4">
              <Button
                href="/#booking"
                variant="gold"
                size="lg"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Appointment
              </Button>
              <div className="flex items-center justify-between text-xs text-ivory/70 pt-2">
                <span>{siteConfig.address.junction}, Kozhikode</span>
                <a
                  href={siteConfig.phone.telUrl}
                  className="text-gold font-medium hover:underline"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
