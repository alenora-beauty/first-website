"use client";

import React from "react";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: "normal" | "slow" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className = "",
}: MarqueeProps) {
  const speedClass =
    speed === "slow"
      ? "animate-marquee-slow"
      : direction === "right"
      ? "animate-marquee-reverse"
      : "animate-marquee";

  return (
    <div
      className={`group relative overflow-hidden flex whitespace-nowrap select-none ${className}`}
    >
      <div
        className={`flex shrink-0 items-center gap-6 ${speedClass} will-change-transform transform-gpu ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ transform: "translate3d(0, 0, 0)", backfaceVisibility: "hidden" }}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center gap-6 ${speedClass} will-change-transform transform-gpu ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={{ transform: "translate3d(0, 0, 0)", backfaceVisibility: "hidden" }}
      >
        {children}
      </div>
    </div>
  );
}

