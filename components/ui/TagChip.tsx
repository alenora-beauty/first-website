import React from "react";

interface TagChipProps {
  label: string;
  variant?: "ivory" | "cream" | "coffee" | "gold" | "outline";
  className?: string;
}

export default function TagChip({
  label,
  variant = "cream",
  className = "",
}: TagChipProps) {
  const variantStyles = {
    ivory: "bg-ivory text-coffee border border-coffee/15",
    cream: "bg-cream text-coffee border border-coffee/15",
    coffee: "bg-coffee/10 text-coffee border border-coffee/20",
    gold: "bg-gold/15 text-espresso border border-gold/30",
    outline: "bg-transparent text-muted border border-hairline",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}

