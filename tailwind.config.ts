import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF5EA",
        cream: "#F1E8D6",
        coffee: {
          DEFAULT: "#4B2E22",
          light: "#5E3A2B",
          dark: "#3B241A",
        },
        espresso: {
          DEFAULT: "#2A1A12",
          deep: "#1C110C",
        },
        terracotta: {
          DEFAULT: "#A5573A",
          hover: "#8E4930",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#DEC077",
          dark: "#A88330",
        },
        body: "#2A1A12",
        muted: "#7A6355",
        hairline: "rgba(75, 46, 34, 0.15)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        'salon': '24px',
        'salon-lg': '28px',
        'salon-sm': '18px',
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(42, 26, 18, 0.08)',
        'elevated': '0 20px 40px -15px rgba(42, 26, 18, 0.12)',
        'glass': '0 8px 32px 0 rgba(42, 26, 18, 0.2)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

