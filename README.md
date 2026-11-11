# Alenora Beauty Studio — Website Codebase

A production-quality, responsive multi-page web application for **Alenora Beauty Studio** ("Adore Your Dreams"), a unisex beauty studio located at BK Arcade, Edakkad Junction, East Hill, Kozhikode, Kerala 673005, India.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lenis Smooth Scroll**, and **Lucide React**.

---

## 📁 File Structure

```text
Al-Enora/
├── app/
│   ├── api/
│   │   └── booking/
│   │       └── route.ts          # API endpoint handling appointment form submissions
│   ├── about/page.tsx            # /about: Story, philosophy & cosmetology standards
│   ├── services/page.tsx         # /services: Complete categorized menu & package offers
│   ├── gallery/page.tsx          # /gallery: Filterable visual journal & Instagram link
│   ├── contact/page.tsx          # /contact: Address, map, hours & direct WhatsApp
│   ├── careers/page.tsx          # /careers: "Female all-rounder" hiring & WhatsApp application
│   ├── privacy/page.tsx          # /privacy: Privacy policy
│   ├── terms/page.tsx            # /terms: Terms of service & appointment policies
│   ├── globals.css               # Design tokens, ivory/coffee theme, scrollbar & utilities
│   ├── layout.tsx                # Root layout with fonts, JSON-LD, Navbar, Footer, WhatsApp
│   ├── not-found.tsx             # Custom branded 404 page
│   ├── page.tsx                  # Home page (all 13 sections in order)
│   ├── robots.ts                 # SEO robots.txt generator
│   └── sitemap.ts                # SEO XML sitemap generator
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky blur nav with mobile full-screen coffee menu
│   │   └── Footer.tsx            # Final CTA, visit links, contact & watermark ALENORA
│   ├── providers/
│   │   └── SmoothScrollProvider.tsx # Lenis smooth scroll provider (respects reduced motion)
│   ├── sections/
│   │   ├── HeroSection.tsx       # 01. Hero with gradient, tags marquee & floating card
│   │   ├── StudioSection.tsx     # 02. Word-by-word reveal statement & carousel
│   │   ├── ServiceMenuSection.tsx# 03. 5-category accordion & featured Groom package
│   │   ├── WhyUsSection.tsx      # 04. Stacking sticky cards (4 reasons)
│   │   ├── TransformationsSection.tsx # 05. Before/after slider & case study switcher
│   │   ├── TeamSection.tsx       # 06. 4 portrait cards & careers hiring banner
│   │   ├── VisitSection.tsx      # 07. 4-step appointment journey with duration badges
│   │   ├── ReviewsSection.tsx    # 08. Conditional reviews (governed by showReviews flag)
│   │   ├── GallerySection.tsx    # 09. Dual-row reverse autoscroll marquee
│   │   ├── OffersSection.tsx     # 10. Seasonal packages band with WhatsApp booking
│   │   ├── FaqSection.tsx        # 11. Interactive questions & answers accordion
│   │   └── BookingSection.tsx    # 12. Location, embed map & reservation request form
│   ├── seo/
│   │   └── JsonLd.tsx            # Schema.org BeautySalon LocalBusiness structured data
│   └── ui/
│       ├── Accordion.tsx         # Accessible animated accordion
│       ├── BeforeAfterSlider.tsx # Interactive draggable touch/mouse before-after slider
│       ├── Button.tsx            # Pill buttons (primary, secondary, gold, dark)
│       ├── Marquee.tsx           # Auto-scrolling horizontal marquee
│       ├── SectionHeader.tsx     # Section index numbers & eyebrow headers
│       ├── TagChip.tsx           # Small pill badge for service tags
│       └── WhatsAppButton.tsx    # Floating WhatsApp button with prefilled text
├── data/
│   ├── site.ts                   # ALL business facts (address, phone, hours, showReviews)
│   ├── services.ts               # Categorized service menu items & Groom package details
│   ├── images.ts                 # Centralized Unsplash placeholders ready for studio photos
│   ├── offers.ts                 # Seasonal packages & WhatsApp enquiry messages
│   ├── team.ts                   # Clearly marked placeholder team bios
│   ├── faq.ts                    # Questions and studio policy answers
│   └── reviews.ts                # Empty client reviews array ready for verified reviews
├── tailwind.config.ts            # Custom palette (Ivory, Cream, Coffee, Espresso, Terracotta, Gold)
├── tsconfig.json                 # TypeScript strict configuration
└── next.config.mjs               # Image domain configurations
```

---

## 🛠️ Where to Change Content, Prices, Colours and Images

### 1. Business Info, Address & Contact Details
👉 Edit **`/data/site.ts`**
- **Business Name & Tagline**: `siteConfig.name` ("Alenora Beauty Studio") and `siteConfig.tagline` ("Adore Your Dreams").
- **Address**: `siteConfig.address` (BK Arcade, Edakkad Junction, East Hill, Kozhikode).
- **Phone & WhatsApp**: `siteConfig.phone.display` and `siteConfig.whatsapp.number`.
- **Opening Hours**: Change `openingHours: "[HOURS]"` to the studio's exact hours once finalized (e.g. `"9:30 AM – 8:00 PM (Daily)"`).
- **Show Reviews Toggle**: `showReviews: false`. When set to `true`, the reviews section activates on the homepage once real reviews are added to `/data/reviews.ts`.

### 2. Services & Prices
👉 Edit **`/data/services.ts`**
- All 5 categories: `Hair`, `Skin`, `Bridal and makeup`, `Mehendi and tattoo`, `Men's grooming`.
- Prices currently have `priceNote: "TO CONFIRM"` for easy verification with the studio owner.
- To change the featured Groom package price or services, update `featuredPackage` inside the `mens-grooming` category.

### 3. Offers & Packages
👉 Edit **`/data/offers.ts`**
- Update package titles, offer prices, bullet points, and WhatsApp enquiry strings.

### 4. Colours & Theme
👉 Edit **`tailwind.config.ts`** and **`app/globals.css`**
- **Ivory (Background)**: `#FAF5EA`
- **Cream (Alt sections / cards)**: `#F1E8D6`
- **Coffee Brown (Primary buttons & headers)**: `#4B2E22`
- **Espresso (Dark sections & footer)**: `#2A1A12`
- **Terracotta (Accent & eyebrows)**: `#A5573A`
- **Soft Gold (Hover, accents & badges)**: `#C9A24B`

### 5. Replacing Placeholder Images With Studio Photos
👉 Edit **`/data/images.ts`**
All photography is centralized in this file. To replace any image:
1. Copy the studio's photos into the `/public/images/` directory or host them on a CDN / Cloudinary.
2. Update the corresponding URL in `/data/images.ts`.

#### How to Export Photos & Reels from the Studio's Instagram:
1. **Download Studio Posts**: Use Meta Accounts Center -> "Download Your Information", or export high-resolution master camera files (from phone or DSLR) before Instagram compression.
2. **Recommended Dimensions**:
   - Hero: `1920x1080px` (or `1920x1280px` landscape).
   - Gallery & Portrait Cards: `800x1000px` (4:5 portrait ratio).
   - Before/After Slider: Identical crop aspect ratio for both before and after images (e.g. `900x1200px`).
3. **Live Instagram Feed Integration**: When ready, the Gallery section can be connected to the Instagram Basic Display API by generating a long-lived user token in Meta Developers and fetching the media list.

---

## 🚀 Running the Project

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Production Build
```bash
npm run build
npm start
```

