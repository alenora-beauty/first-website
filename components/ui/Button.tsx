"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 active:scale-[0.98] select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider uppercase",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide shadow-soft",
  };

  const variantStyles = {
    primary:
      "bg-coffee text-ivory hover:bg-terracotta hover:shadow-elevated active:bg-coffee-dark border border-coffee",
    secondary:
      "bg-transparent text-coffee border border-coffee/30 hover:border-coffee hover:bg-coffee/5 active:bg-coffee/10",
    gold:
      "bg-gold text-espresso hover:bg-gold-light hover:shadow-elevated border border-gold font-semibold",
    ghost:
      "bg-transparent text-coffee hover:bg-coffee/5 border border-transparent",
    dark:
      "bg-ivory text-espresso hover:bg-cream hover:text-coffee border border-ivory/80 shadow-soft",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={external || href.startsWith("http") ? "_blank" : undefined}
          rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

