import { siteConfig } from "@/data/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    alternateName: "Alenora Salon Kozhikode",
    description: siteConfig.positioning,
    url: "https://alenorabeautystudio.com",
    telephone: siteConfig.phone.raw,
    email: siteConfig.email,
    image: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.junction}, ${siteConfig.address.area}`,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.2785,
      longitude: 75.7725,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:30",
        closes: "20:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: siteConfig.currency.code,
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salon & Bridal Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hair Styling & Highlights",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridal Makeover & Saree Draping",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Organic Mehendi & Tattoo Art",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Men's Grooming & Beard Setting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skin Brightening Facials & Detan",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

