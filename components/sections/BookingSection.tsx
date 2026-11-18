"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { servicesData } from "@/data/services";
import { teamMembers } from "@/data/team";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Loader2,
  Calendar,
} from "lucide-react";

interface BookingSectionProps {
  index?: string;
}

export default function BookingSection({ index = "11" }: BookingSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    stylist: "No preference",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Flatten all services for the dropdown
  const allServices = servicesData.flatMap((cat) =>
    cat.items.map((item) => ({
      category: cat.title,
      name: item.name,
      priceFrom: item.priceFrom,
    }))
  );

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+-\s()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.service) errs.service = "Please select a service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit appointment request.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(
        err.message || "Something went wrong. Please connect with us directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Build dynamic WhatsApp link from current form inputs
  const getDynamicWhatsAppLink = () => {
    const lines = [
      "Hi Alenora, I'd like to book an appointment:",
      formData.name ? `Name: ${formData.name}` : "",
      formData.phone ? `Phone: ${formData.phone}` : "",
      formData.service ? `Service: ${formData.service}` : "",
      formData.date ? `Preferred Date: ${formData.date}` : "",
      formData.time ? `Preferred Time: ${formData.time}` : "",
      formData.stylist !== "No preference" ? `Stylist: ${formData.stylist}` : "",
      formData.message ? `Notes: ${formData.message}` : "",
    ].filter(Boolean);

    const message = lines.length > 1 ? lines.join("\n") : siteConfig.whatsapp.defaultMessage;
    return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="booking" className="py-24 sm:py-32 bg-ivory text-espresso">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          index={index}
          eyebrow="Reserve Your Experience"
          title="Book your appointment."
          description="Send an instant reservation request or chat with our front desk on WhatsApp for prompt scheduling."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Contact & Embedded Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-salon bg-cream border border-hairline p-8 shadow-soft space-y-6">
              <h3 className="font-serif text-2xl font-medium text-espresso">
                Studio Address &amp; Contact
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={siteConfig.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-espresso/90 hover:text-terracotta transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <strong className="block font-medium text-espresso">Location:</strong>
                    <span>{siteConfig.address.full}</span>
                    <span className="block text-xs text-terracotta font-medium mt-0.5 underline">
                      Open in Google Maps &rarr;
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-espresso/90">
                  <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Opening Hours:</strong>
                    <span className="text-muted">{siteConfig.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-espresso/90">
                  <Phone className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Phone Calls:</strong>
                    <a
                      href={siteConfig.phone.telUrl}
                      className="text-terracotta font-medium hover:underline"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-espresso/90">
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">WhatsApp Direct:</strong>
                    <a
                      href={siteConfig.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-medium hover:underline"
                    >
                      {siteConfig.whatsapp.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-espresso/90">
                  <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium text-espresso">Email:</strong>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-terracotta font-medium hover:underline break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-salon overflow-hidden border border-hairline shadow-soft h-64 sm:h-72 relative bg-cream">
              <iframe
                title="Alenora Beauty Studio Kozhikode Location"
                src={siteConfig.address.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[105%]"
              />
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 rounded-salon bg-cream border border-hairline p-8 sm:p-10 shadow-elevated">
            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-medium text-espresso">
                  Appointment Request Sent
                </h3>
                <p className="text-muted font-sans max-w-md mx-auto text-sm leading-relaxed">
                  Thank you! Our studio team will review your requested time slot
                  and message or call you at <strong>{formData.phone}</strong> to confirm.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        date: "",
                        time: "",
                        service: "",
                        stylist: "No preference",
                        message: "",
                      });
                    }}
                    variant="secondary"
                    size="md"
                  >
                    Submit Another Request
                  </Button>
                  <Button
                    href={getDynamicWhatsAppLink()}
                    external
                    variant="primary"
                    size="md"
                  >
                    Follow up on WhatsApp
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-espresso">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-muted font-sans mt-1">
                    Fill in your preferred details. For instant confirmation, you can also book directly on WhatsApp.
                  </p>
                </div>

                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-800 border border-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Your Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anjali Nair"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm font-sans text-espresso placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.name ? "border-red-400 ring-1 ring-red-400" : "border-hairline"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Phone / WhatsApp <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm font-sans text-espresso placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.phone ? "border-red-400 ring-1 ring-red-400" : "border-hairline"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email (Optional) & Service (Required) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Email (Optional)
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm font-sans text-espresso placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Select Service <span className="text-terracotta">*</span>
                    </label>
                    <select
                      id="booking-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-ivory border text-sm font-sans text-espresso focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.service ? "border-red-400 ring-1 ring-red-400" : "border-hairline"
                      }`}
                    >
                      <option value="">-- Choose a service --</option>
                      <option value="Bridal Special Package (₹9,300)">
                        ★ Featured: Bridal Special Package (₹9,300)
                      </option>
                      <option value="Bridal Makeover & Saree Draping">
                        ★ Bridal Makeover &amp; Saree Draping
                      </option>
                      {allServices.map((srv, idx) => (
                        <option key={idx} value={srv.name}>
                          {srv.name} {srv.priceFrom > 0 ? `(₹${srv.priceFrom})` : "(Consultation)"}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.service}
                      </span>
                    )}
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        id="booking-date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm font-sans text-espresso focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-time"
                      className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                    >
                      Preferred Time
                    </label>
                    <select
                      id="booking-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm font-sans text-espresso focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                    >
                      <option value="">Any available slot</option>
                      <option value="Morning (9:30 AM – 12:00 PM)">Morning (9:30 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Evening (4:00 PM – 8:00 PM)">Evening (4:00 PM – 8:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Stylist */}
                <div>
                  <label
                    htmlFor="booking-stylist"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                  >
                    Preferred Stylist
                  </label>
                  <select
                    id="booking-stylist"
                    name="stylist"
                    value={formData.stylist}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm font-sans text-espresso focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                  >
                    <option value="No preference">No preference (First available specialist)</option>
                    {teamMembers.map((member) => (
                      <option key={member.id} value={member.name}>
                        {member.name} ({member.role})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-espresso mb-1.5"
                  >
                    Special Notes / Requests
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us if you have hair allergies, need bridal muhurtham timing, or want kids styling..."
                    className="w-full px-4 py-3 rounded-xl bg-ivory border border-hairline text-sm font-sans text-espresso placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold transition-colors resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="flex-1 text-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Request...</span>
                      </span>
                    ) : (
                      "Submit Appointment Request"
                    )}
                  </Button>

                  <Button
                    href={getDynamicWhatsAppLink()}
                    external
                    type="button"
                    variant="secondary"
                    size="lg"
                    className="group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2 text-[#25D366] group-hover:scale-110 transition-transform" />
                    <span>Book on WhatsApp</span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

