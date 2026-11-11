"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig, buildWhatsAppLink } from "@/data/site";
import { siteImages } from "@/data/images";
import Button from "@/components/ui/Button";
import {
  Sparkles,
  CheckCircle2,
  MessageCircle,
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function CareersPage() {
  const [candidate, setCandidate] = useState({
    name: "",
    phone: "",
    experience: "",
    skills: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidate.name || !candidate.phone) {
      setError("Please provide your name and contact phone number.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    // Simulate instant recording and redirect to WhatsApp option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppApplyLink = () => {
    const text = [
      "Hi Alenora Studio, I'm interested in the Female All-Rounder position:",
      candidate.name ? `Name: ${candidate.name}` : "",
      candidate.phone ? `Phone: ${candidate.phone}` : "",
      candidate.experience ? `Experience: ${candidate.experience}` : "",
      candidate.skills ? `Skills: ${candidate.skills}` : "Hair, Makeup & Skincare",
      candidate.notes ? `Note: ${candidate.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return buildWhatsAppLink(text);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Careers at Alenora
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-espresso leading-tight">
            Grow Your Artistry With Us
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted font-sans leading-relaxed">
            We are looking for passionate, certified beauty professionals to join our warm,
            respectful studio family in East Hill, Kozhikode.
          </p>
        </div>
      </section>

      {/* Main Job Opening Section */}
      <section className="py-20 sm:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Job Description & What We Look For */}
            <div className="lg:col-span-7 space-y-8">
              <div className="rounded-salon bg-cream border border-hairline p-8 sm:p-10 shadow-soft space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-terracotta/10 text-terracotta text-xs font-semibold uppercase tracking-wider">
                    Immediate Opening
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted font-sans">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    East Hill, Kozhikode
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted font-sans">
                    <Clock className="w-3.5 h-3.5 text-terracotta" />
                    Full-Time
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-normal">
                  Female All-Rounder (Hair, Makeup &amp; Skincare)
                </h2>

                <p className="text-base text-muted font-sans leading-relaxed">
                  Alenora Beauty Studio is expanding its core team. We are inviting an experienced,
                  enthusiastic female stylist and cosmetologist who enjoys versatile salon work across
                  precision haircuts, bridal makeovers, and revitalizing facials.
                </p>

                {/* What We Look For */}
                <div className="pt-4 border-t border-hairline space-y-4">
                  <h3 className="font-serif text-xl font-medium text-espresso">
                    What We Look For:
                  </h3>
                  <ul className="space-y-3 text-sm text-espresso/90 font-sans">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                      <span>
                        <strong>Hair Styling &amp; Color:</strong> Proficiency in haircuts, blow-drying, hair spa, root touch-ups and global hair colouring.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                      <span>
                        <strong>Bridal &amp; Party Makeup:</strong> Knowledge of clean skin base matching, eye makeup, saree draping, and hair updo styling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                      <span>
                        <strong>Skincare:</strong> Hands-on experience with clean-ups, detan packs, and brightening facial protocols.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                      <span>
                        <strong>Professionalism:</strong> Warm, courteous communication with clients; strict adherence to salon hygiene and sanitized tools.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What We Offer */}
                <div className="pt-4 border-t border-hairline space-y-4">
                  <h3 className="font-serif text-xl font-medium text-espresso">
                    What We Offer:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-muted">
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-ivory border border-hairline">
                      <Heart className="w-4 h-4 text-terracotta shrink-0" />
                      <span>Supportive, respectful team culture</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-ivory border border-hairline">
                      <Sparkles className="w-4 h-4 text-gold shrink-0" />
                      <span>Competitive compensation package</span>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Action Button */}
                <div className="pt-4">
                  <Button
                    href={getWhatsAppApplyLink()}
                    external
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto text-center group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-gold group-hover:scale-110 transition-transform" />
                    <span>Apply Instantly on WhatsApp</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: Quick Application Form */}
            <div className="lg:col-span-5 rounded-salon bg-cream border border-hairline p-8 sm:p-10 shadow-elevated">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-espresso">
                    Application Received
                  </h3>
                  <p className="text-muted font-sans text-sm leading-relaxed max-w-sm mx-auto">
                    Thank you, {candidate.name}! We will review your details and reach out to
                    schedule an informal chat at our East Hill studio.
                  </p>
                  <div className="pt-4">
                    <Button
                      href={getWhatsAppApplyLink()}
                      external
                      variant="primary"
                      size="md"
                    >
                      Connect on WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-espresso">
                      Quick Application Form
                    </h3>
                    <p className="text-xs text-muted font-sans mt-1">
                      Leave your basic info and we&apos;ll get in touch with you.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-800 text-xs">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      required
                      value={candidate.name}
                      onChange={(e) =>
                        setCandidate({ ...candidate, name: e.target.value })
                      }
                      placeholder="e.g. Fatima / Divya"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      required
                      value={candidate.phone}
                      onChange={(e) =>
                        setCandidate({ ...candidate, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-exp"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                    >
                      Years of Salon Experience
                    </label>
                    <select
                      id="applicant-exp"
                      value={candidate.experience}
                      onChange={(e) =>
                        setCandidate({ ...candidate, experience: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                    >
                      <option value="">Select experience level</option>
                      <option value="Fresher / Cosmetology Graduate">Fresher / Cosmetology Graduate</option>
                      <option value="1 - 2 Years">1 &ndash; 2 Years</option>
                      <option value="3 - 5 Years">3 &ndash; 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-skills"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                    >
                      Primary Skills
                    </label>
                    <input
                      id="applicant-skills"
                      type="text"
                      value={candidate.skills}
                      onChange={(e) =>
                        setCandidate({ ...candidate, skills: e.target.value })
                      }
                      placeholder="e.g. Haircuts, Bridal Makeup, Saree, Facials"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-notes"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1"
                    >
                      Short Introduction / Notes
                    </label>
                    <textarea
                      id="applicant-notes"
                      rows={3}
                      value={candidate.notes}
                      onChange={(e) =>
                        setCandidate({ ...candidate, notes: e.target.value })
                      }
                      placeholder="Tell us where you are based in Calicut and your earliest joining date..."
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full text-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

