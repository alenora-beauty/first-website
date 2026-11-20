export interface ReviewItem {
  id: string;
  clientName: string;
  initial: string;
  color?: string;
  role: string; // "Customer"
  serviceReceived: string;
  rating: number; // 1-5
  date: string;
  quote: string;
  avatarUrl?: string;
  badge: string;
}

/**
 * Authentic verified Google Reviews for Alenora Beauty Studio.
 * Zero placeholder/dummy data.
 */
export const clientReviews: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Jithin A R",
    initial: "J",
    color: "#3b2318",
    role: "Customer",
    serviceReceived: "Haircut & Styling",
    rating: 5,
    date: "a month ago",
    badge: "Haircut & Styling",
    quote:
      "Had a wonderful experience at this alenora salon today! Rahan did an amazing job with my haircut—his skill and styling are top-notch. Beyond his talent, his friendly nature, great company, and warm hospitality made the whole experience even better. Excellent service in a welcoming atmosphere. Highly recommended, 5 stars",
  },
  {
    id: "rev-2",
    clientName: "Shahina Shehza",
    initial: "S",
    color: "#166534",
    role: "Customer",
    serviceReceived: "Cleanup & Detan",
    rating: 5,
    date: "3 months ago",
    badge: "Cleanup & Detan",
    quote:
      "My first visit to alenora and it was an amazing experience❤️ i did cleanup and detan and my husband and son did a haircut. The service was excellent and the results were beyond our expectations. Special thanks to Ms. Athulya and Mr Rihan for their amazing work, professionalism and friendly service. They really made us feel comfortable and gave great attention to every detail.highly recommended for anyone looking for quality services in Calicut.",
  },
  {
    id: "rev-3",
    clientName: "Anagha Chandran",
    initial: "A",
    color: "#0f766e",
    role: "Customer",
    serviceReceived: "Salon Service",
    rating: 5,
    date: "9 months ago",
    badge: "Salon Service",
    quote:
      "Good customer service providing 👌 Highly recommend The staff were friendly, the service was neat and professional, and the place was clean. Very satisfied and would definitely recommend it.",
  },
  {
    id: "rev-4",
    clientName: "Jyothima C",
    initial: "J",
    color: "#9a3412",
    role: "Customer",
    serviceReceived: "Shampoo, Conditioning & Pedicure",
    rating: 5,
    date: "a year ago",
    badge: "Shampoo & Pedicure",
    quote:
      "Very good experience! The ambience was pleasant and welcoming. The staff provided excellent service and made sure I was comfortable throughout. Highly recommended",
  },
  {
    id: "rev-5",
    clientName: "Aswin",
    initial: "A",
    color: "#854d0e",
    role: "Customer",
    serviceReceived: "Gents Grooming — Haircut & Beard Styling",
    rating: 5,
    date: "8 months ago",
    badge: "Gents Grooming",
    quote:
      "Great place for gents grooming - haircut and beard styling. Ask for Rehan. Rehan is friendly, kind, talented, and helpful. Great experience, recommended for all.",
  },
  {
    id: "rev-6",
    clientName: "Sweety Surendran",
    initial: "S",
    color: "#c25e2e",
    role: "Customer",
    serviceReceived: "Anti Tan Treatment & Skin Care",
    rating: 5,
    date: "a year ago",
    badge: "Anti Tan Treatment",
    quote:
      "I have done anti tan treatment. It was highly professional and it was very satisfactory.. I highly recommend this salon for the skin care services and may be more",
  },
  {
    id: "rev-7",
    clientName: "Verified Customer",
    initial: "V",
    color: "#831843",
    avatarUrl: "/testimonials/butterfly-client.jpg",
    role: "Customer",
    serviceReceived: "Butterfly Haircut & Conditioning",
    rating: 5,
    date: "Recent Visit",
    badge: "Butterfly Haircut",
    quote:
      "I am very satisfied with the service, very friendly staffs, and the result was very perfect.I love it so much",
  },
];
