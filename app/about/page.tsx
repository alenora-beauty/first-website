import { Metadata } from "next";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Alenora Beauty Studio — East Hill, Kozhikode",
  description:
    "Welcome to Alenora Beauty Studio: Where Beauty Meets Confidence, and Dreams Become Reality. Meet our Founder & CEO Anna Sonia, certified from VLCC Institute, and explore our vision, mission, and philosophy.",
};

export default function AboutPage() {
  return <AboutClient />;
}
