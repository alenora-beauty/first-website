import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service | Alenora Beauty Studio",
  description: "Terms of service, appointment policies, and studio protocols at Alenora Beauty Studio, Kozhikode.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Studio Policies
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-espresso">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted font-sans">
            Last updated: November 2024 &bull; Alenora Beauty Studio, BK Arcade, Kozhikode
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-muted font-sans leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              1. Appointments &amp; Punctuality
            </h2>
            <p>
              To ensure every client receives an unhurried, meticulous consultation and service,
              we request arriving 5 to 10 minutes prior to your scheduled time. In case of unexpected
              delays, please notify us via WhatsApp or phone so we may adjust salon scheduling.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              2. Service Pricing &amp; Estimates
            </h2>
            <p>
              Prices listed on this website (such as haircut starting prices, bridal packages, and grooming offers)
              serve as indicative starting estimates. Actual costs are confirmed during your in-person consultation
              based on hair length, density, chemical product usage, and customized requirements.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              3. Patch Tests &amp; Chemical Treatments
            </h2>
            <p>
              Client safety is paramount. For high-lift hair bleaching, keratin treatments, global hair color,
              or clinical skin peels, our cosmetologists may recommend a 24-hour patch test to rule out unforeseen
              allergic sensitivities.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              4. Bridal Bookings &amp; Advance Reservations
            </h2>
            <p>
              Bridal makeup, saree draping, and wedding groom packages require an advance reservation and
              confirmation deposit to block dedicated specialists on your wedding date. Details and cancellation
              timelines are explicitly shared upon reservation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

