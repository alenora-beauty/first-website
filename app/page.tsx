import HeroSection from "@/components/sections/HeroSection";
import StudioSection from "@/components/sections/StudioSection";
import ServiceMenuSection from "@/components/sections/ServiceMenuSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TransformationsSection from "@/components/sections/TransformationsSection";
import TeamSection from "@/components/sections/TeamSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";
import BookingSection from "@/components/sections/BookingSection";

export default function HomePage() {
  return (
    <>
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. The Studio */}
      <StudioSection />

      {/* 03. Service Menu */}
      <ServiceMenuSection showPrices={false} />

      {/* 04. Why Alenora */}
      <WhyUsSection />

      {/* 05. Transformations */}
      <TransformationsSection />

      {/* 06. Team */}
      <TeamSection />

      {/* Reviews (Rendered ONLY if showReviews is true in site.ts) */}
      <ReviewsSection />

      {/* 07. Gallery */}
      <GallerySection />

      {/* 08. FAQ */}
      <FaqSection index="08" />

      {/* 09. Booking */}
      <BookingSection index="09" />
    </>
  );
}

