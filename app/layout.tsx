import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import JsonLd from "@/components/seo/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alenorabeautystudio.com"),
  title: {
    default: `${siteConfig.name} | Unisex Beauty Studio, Kozhikode`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.positioning} Located at ${siteConfig.address.full}. Call ${siteConfig.phone.display}.`,
  keywords: [
    "Alenora Beauty Studio",
    "Beauty Studio Kozhikode",
    "Unisex Salon Calicut",
    "Bridal Makeover Kozhikode",
    "Hair Studio East Hill",
    "Saree Draping Calicut",
    "Bridal Mehendi Kozhikode",
    "Groom Package Kozhikode",
    "Skin Clinic Calicut",
    "Hair Spa Kozhikode",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alenorabeautystudio.com",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.positioning,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Salon Atmosphere in Kozhikode`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.positioning,
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function stripBadge(node) {
                  if (!node || node.nodeType !== 1) return;
                  var id = (node.id || '').toLowerCase();
                  var tag = (node.tagName || '').toLowerCase();
                  var title = ((node.getAttribute && node.getAttribute('title')) || '').toLowerCase();
                  var src = ((node.getAttribute && node.getAttribute('src')) || '').toLowerCase();
                  if (
                    id === 'nl-badge-frame' ||
                    id === 'nl-hud-frame' ||
                    id === 'netlify-badge' ||
                    id.indexOf('nl-') === 0 ||
                    (tag === 'iframe' && (title.indexOf('netlify') !== -1 || src.indexOf('netlify') !== -1)) ||
                    tag === 'netlify-drawer'
                  ) {
                    try { node.remove(); } catch(e) { node.style.display = 'none'; }
                  }
                }
                if (typeof MutationObserver !== 'undefined') {
                  var obs = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var added = mutations[i].addedNodes;
                      for (var j = 0; j < added.length; j++) {
                        stripBadge(added[j]);
                      }
                    }
                  });
                  obs.observe(document.documentElement, { childList: true, subtree: true });
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-ivory text-espresso font-sans antialiased flex flex-col justify-between selection:bg-coffee selection:text-ivory">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
