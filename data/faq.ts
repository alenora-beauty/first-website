export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "booking" | "bridal" | "services" | "all";
  tag?: string;
  badge?: string;
}

export const studioFaqs: FAQItem[] = [
  {
    id: "faq-booking",
    question: "How do I book an appointment?",
    answer:
      "You can book directly by tapping our WhatsApp button, calling us at +91 77363 47582, or submitting the appointment request form below. For weekend slots and bridal consultations, we recommend reserving 2 to 3 days in advance.",
    category: "booking",
    tag: "Appointments",
  },
  {
    id: "faq-bridal",
    question: "Do you offer bridal packages and trials?",
    answer:
      "Yes! We offer comprehensive packages for both brides and grooms covering engagement, wedding ceremony, reception, and haldi events. Pre-wedding trials for hair styling, skin prep, and saree drape testing are available upon request.",
    category: "bridal",
    tag: "Bridal Studio",
  },
  {
    id: "faq-men-kids",
    question: "Do you serve men and children?",
    answer:
      "Absolutely. Alenora is a full-service unisex studio in East Hill, Kozhikode. We welcome women, men, and children of all ages, with experienced specialists dedicated to contemporary men's grooming and gentle, patient haircuts for kids.",
    category: "services",
    tag: "Family & Unisex",
  },
  {
    id: "faq-saree-mehendi",
    question: "Do you do saree draping and mehendi?",
    answer:
      "Yes. Our draping specialists are skilled in traditional Kerala drapes, Kanjeevaram pleats, Gujarati styles, and modern pre-pleating techniques (with pleats, without pleats, and box folding). For mehendi, we use 100% natural organic henna free from chemical dyes, catering to both bridal and festive occasions.",
    category: "bridal",
    tag: "Saree & Henna",
  },
  {
    id: "faq-products",
    question: "Which products and brands do you use?",
    answer:
      "We use certified global professional salon brands known for safety, hair health, and dermatological efficacy—including L'Oreal Professional, Matrix, Schwarzkopf, Aroma Magic, VLCC, Vedic Line, and Cheryl's Cosmeceuticals.",
    category: "services",
    tag: "Products & Safety",
  },
  {
    id: "faq-cancellation",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "We kindly ask for at least 4 to 6 hours notice if you need to reschedule or cancel your standard appointment. For bridal parties and private studio block bookings, a 48-hour advance notice is appreciated.",
    category: "booking",
    tag: "Studio Policies",
  },
];
