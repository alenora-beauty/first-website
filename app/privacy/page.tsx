import { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Alenora Beauty Studio",
  description: "Privacy policy and client data handling practices at Alenora Beauty Studio, Kozhikode.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="py-16 sm:py-24 bg-cream border-b border-hairline">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] text-terracotta font-semibold font-sans mb-3 block">
            Legal &amp; Transparency
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-espresso">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted font-sans">
            Last updated: November 2024 &bull; Alenora Beauty Studio, Kozhikode, Kerala
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm sm:text-base text-muted font-sans leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you reserve an appointment, submit an enquiry, or apply for employment with{" "}
              <strong>{siteConfig.name}</strong>, we collect personal details you voluntarily provide:
              your full name, phone number (and WhatsApp identity), email address, preferred appointment
              schedule, and requested cosmetology services.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              Your personal information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Coordinate, reschedule, or confirm your salon visits and bridal sessions.</li>
              <li>Provide personalized post-treatment hair and skincare guidance.</li>
              <li>Process employment applications submitted to our salon in East Hill.</li>
              <li>Notify you of pre-booked seasonal bridal packages when requested.</li>
            </ul>
            <p className="mt-2">
              We never sell, lease, or monetize your contact information with any third-party advertisers or data brokers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              3. Client Consultation &amp; Photography Rights
            </h2>
            <p>
              Before and after photographs or bridal transformation videos are taken and published
              only with the explicit prior verbal or written consent of the client. Clients are free
              to decline photography without any impact on their service or treatment quality.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-medium text-espresso mb-3">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions or wish to update or delete your appointment details from our studio
              records, please contact us directly at:
            </p>
            <p className="mt-2 font-medium text-espresso">
              Email: <a href={`mailto:${siteConfig.email}`} className="text-terracotta underline">{siteConfig.email}</a>
              <br />
              Phone / WhatsApp: <a href={siteConfig.phone.telUrl} className="text-terracotta underline">{siteConfig.phone.display}</a>
              <br />
              Address: {siteConfig.address.full}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

