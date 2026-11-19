"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before transformation",
  afterAlt = "After transformation",
  className = "",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Before and after transformation comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative select-none overflow-hidden rounded-salon cursor-ew-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${className}`}
      style={{ touchAction: "none" }}
    >
      {/* After image (Base layer) */}
      <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-md text-ivory text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full font-semibold pointer-events-none border border-ivory/20 shadow-sm">
          AFTER
        </div>
      </div>

      {/* Before image (Clipped layer) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px]">
          <div
            className="absolute inset-0"
            style={{
              width: containerWidth ? `${containerWidth}px` : "100%",
            }}
          >
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute top-4 left-4 bg-espresso/80 backdrop-blur-md text-ivory text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full font-semibold pointer-events-none border border-ivory/20 shadow-sm">
            BEFORE
          </div>
        </div>
      </div>

      {/* Draggable Divider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-ivory shadow-lg z-20 pointer-events-none"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory text-coffee border-2 border-coffee shadow-elevated flex items-center justify-center font-bold text-xs pointer-events-auto cursor-ew-resize">
          <svg
            className="w-5 h-5 text-coffee"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18-6-6 6-6" />
            <path d="m15 6 6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

