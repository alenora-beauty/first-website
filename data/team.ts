import { siteImages } from "./images";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  isPlaceholder: true;
}

/**
 * Team members are clearly marked as placeholders.
 * The studio team is small and intimate; update these placeholders when real team bios are available.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Lead Cosmetologist (Placeholder)",
    role: "Senior Skin & Aesthetic Specialist",
    specialty: "Clinical Facials, Dermal Glow & Skin Detox",
    image: siteImages.team[0].image,
    isPlaceholder: true,
  },
  {
    id: "team-2",
    name: "Master Hair Artist (Placeholder)",
    role: "Creative Director & Hair Stylist",
    specialty: "Custom Highlights, Balayage & Scalp Therapies",
    image: siteImages.team[1].image,
    isPlaceholder: true,
  },
  {
    id: "team-3",
    name: "Bridal & Draping Artist (Placeholder)",
    role: "Bridal Makeover & Henna Lead",
    specialty: "Muhurtham Makeup, Silk Saree Pleating & Mehendi",
    image: siteImages.team[2].image,
    isPlaceholder: true,
  },
  {
    id: "team-4",
    name: "Men's Grooming Master (Placeholder)",
    role: "Barbering & Grooming Specialist",
    specialty: "Fade Architecture, Beard Setting & Groom Packages",
    image: siteImages.team[3].image,
    isPlaceholder: true,
  },
];

