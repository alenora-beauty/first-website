"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, MoveHorizontal } from "lucide-react";

export interface BridalGalleryImage {
  id: string;
  src: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  alt?: string;
  original?: string;
}

interface CurtainGallery3DProps {
  images: BridalGalleryImage[];
  layoutMode?: "masonry" | "grid" | "staggered";
  gap?: number;
  autoScrollSpeed?: number;
  scrollDamping?: number;
  curtainAngle?: number;
  perspective?: number;
  scale?: number;
  itemRoundness?: number;
  enableHoverScale?: boolean;
  hoverScale?: number;
  backgroundColor?: string;
  className?: string;
}

export default function CurtainGallery3D({
  images,
  layoutMode = "masonry",
  gap = 22,
  autoScrollSpeed = 0.55,
  scrollDamping = 0.94,
  curtainAngle = 1.05,
  perspective = 1350,
  scale = 1,
  itemRoundness = 18,
  enableHoverScale = true,
  hoverScale = 1.06,
  backgroundColor = "transparent",
  className = "",
}: CurtainGallery3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [columns, setColumns] = useState(4);
  const [selectedImage, setSelectedImage] = useState<BridalGalleryImage | null>(null);

  // Track responsive column count
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setColumns(2);
      } else if (w < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Animation & Drag state refs
  const scrollY = useRef(0);
  const targetScrollY = useRef(0);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const isInView = useRef(true);
  const isPointerDown = useRef(false);
  const hasMovedSignificantly = useRef(false);

  // Layout items calculation
  const itemsToLayout = useMemo(() => {
    if (!images || images.length === 0) return [];
    return images.map((img, i) => {
      const seed = ((i * 1337) % 7) / 7;
      let calculatedHeight: number;
      if (layoutMode === "grid") {
        calculatedHeight = 420;
      } else if (layoutMode === "staggered") {
        calculatedHeight = i % 2 === 0 ? 380 : 480;
      } else {
        // Masonry proportional height based on image aspect ratio or elegant staggered variations
        if (img.aspectRatio && img.aspectRatio > 0) {
          calculatedHeight = Math.round(340 / img.aspectRatio);
          // Clamp to attractive editorial height range
          calculatedHeight = Math.max(340, Math.min(540, calculatedHeight));
        } else {
          calculatedHeight = Math.round(360 + seed * 160);
        }
      }
      return {
        ...img,
        height: calculatedHeight,
      };
    });
  }, [images, layoutMode]);

  // Distribute items into columns (Masonry height balancing)
  const layout = useMemo(() => {
    const cols: typeof itemsToLayout[] = Array.from({ length: columns }, () => []);
    const heights = new Array(columns).fill(0);

    if (itemsToLayout.length > 0) {
      if (layoutMode === "masonry") {
        itemsToLayout.forEach((item) => {
          let minHeight = heights[0];
          let minIndex = 0;
          for (let i = 1; i < columns; i++) {
            if (heights[i] < minHeight) {
              minHeight = heights[i];
              minIndex = i;
            }
          }
          cols[minIndex].push(item);
          heights[minIndex] += item.height + gap;
        });
      } else {
        itemsToLayout.forEach((item, idx) => {
          const colIndex = idx % columns;
          cols[colIndex].push(item);
          heights[colIndex] += item.height + gap;
        });
      }
    }

    colRefs.current = new Array(columns).fill(null);
    return { cols, heights };
  }, [columns, gap, itemsToLayout, layoutMode]);

  // IntersectionObserver to pause loop when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isInView.current = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, []);

  // Continuous animation loop with inertia and modulo wrap
  useEffect(() => {
    let animationId: number;

    const animate = () => {
      if (isInView.current) {
        if (!isDragging.current) {
          targetScrollY.current += autoScrollSpeed;
        }

        const diff = targetScrollY.current - scrollY.current;
        if (Math.abs(diff) > 0.001) {
          scrollY.current += diff * (1 - scrollDamping);

          colRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const height = layout.heights[index];
            if (height > 0) {
              const y = ((scrollY.current % height) + height) % height;
              ref.style.transform = `translate3d(0, -${y.toFixed(2)}px, 0)`;
            }
          });
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [autoScrollSpeed, scrollDamping, layout.heights]);

  // Wheel listener
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    targetScrollY.current += e.deltaY * 0.85;
  }, []);

  // Mouse & Touch interaction
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isPointerDown.current = true;
    isDragging.current = true;
    hasMovedSignificantly.current = false;
    dragStartY.current = e.clientY;
    dragStartScroll.current = targetScrollY.current;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isPointerDown.current) return;
    const deltaY = dragStartY.current - e.clientY;
    if (Math.abs(deltaY) > 5) {
      hasMovedSignificantly.current = true;
    }
    targetScrollY.current = dragStartScroll.current + deltaY * 1.6;
  }, []);

  const handlePointerUp = useCallback(() => {
    isPointerDown.current = false;
    isDragging.current = false;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined") return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  // 3D Curtain Cylinder Transformation formula
  const getColumnTransform = useCallback(
    (colIndex: number, totalCols: number) => {
      const normalized = totalCols === 1 ? 0 : (colIndex / (totalCols - 1)) * 2 - 1; // -1 (left) to +1 (right)
      const absNorm = Math.abs(normalized);
      const rotY = normalized * 32 * curtainAngle; // Curves inwards
      const rotX = -7 * curtainAngle; // Dramatic upper tilt
      const z = -absNorm * 85 * curtainAngle; // Edges push deeper into 3D space
      return {
        transform: `translateZ(${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`,
        transformOrigin: "center top",
        zIndex: Math.round(100 - absNorm * 20),
      };
    },
    [curtainAngle]
  );

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-[640px] sm:h-[720px] lg:h-[800px] overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ backgroundColor }}
    >
      {/* Dynamic Hover & Transform Styles */}
      <style jsx>{`
        .curtain-card {
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.65s ease;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        .curtain-card:hover {
          transform: scale3d(${enableHoverScale ? hoverScale : 1}, ${enableHoverScale ? hoverScale : 1}, 1);
          z-index: 50;
        }
        .curtain-overlay-top {
          background: linear-gradient(to bottom, rgba(250, 247, 242, 0.95) 0%, rgba(250, 247, 242, 0.6) 40%, transparent 100%);
        }
        .curtain-overlay-bottom {
          background: linear-gradient(to top, rgba(250, 247, 242, 0.95) 0%, rgba(250, 247, 242, 0.6) 40%, transparent 100%);
        }
        .curtain-overlay-left {
          background: linear-gradient(to right, rgba(250, 247, 242, 0.8) 0%, transparent 100%);
        }
        .curtain-overlay-right {
          background: linear-gradient(to left, rgba(250, 247, 242, 0.8) 0%, transparent 100%);
        }
      `}</style>

      {/* 3D Perspective Viewport */}
      <div
        className="w-full h-full flex items-center justify-center pointer-events-none"
        style={{ perspective: `${perspective}px` }}
      >
        <div
          ref={galleryRef}
          className="relative w-full h-full pointer-events-auto"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(3.5deg) scale(${scale})`,
            willChange: "transform",
          }}
        >
          {/* Main 3D Cylinder Row */}
          <div
            className="absolute -top-[45%] inset-x-0 flex justify-center pointer-events-auto"
            style={{
              gap: `${gap}px`,
              padding: `0 ${gap}px`,
              transformStyle: "preserve-3d",
            }}
          >
            {layout.cols.map((colItems, colIndex) => {
              const colTransform = getColumnTransform(colIndex, columns);
              // Tripled stack ensures smooth, seamless infinite vertical loop
              const tripleItems = [...colItems, ...colItems, ...colItems];

              return (
                <div
                  key={`curtain-col-${colIndex}`}
                  className="flex-1 min-w-0"
                  style={{
                    transform: colTransform.transform,
                    transformOrigin: colTransform.transformOrigin,
                    transformStyle: "preserve-3d",
                    zIndex: colTransform.zIndex,
                    transition:
                      "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform-origin 0.8s ease",
                    willChange: "transform",
                  }}
                >
                  <div
                    ref={(el) => {
                      colRefs.current[colIndex] = el;
                    }}
                    className="flex flex-col"
                    style={{ gap: `${gap}px`, willChange: "transform" }}
                  >
                    {tripleItems.map((item, idx) => (
                      <div
                        key={`${item.id}-${idx}`}
                        onClick={(e) => {
                          if (!hasMovedSignificantly.current) {
                            e.stopPropagation();
                            setSelectedImage(item);
                          }
                        }}
                        className="curtain-card group relative overflow-hidden bg-cream border border-gold/30 shadow-elevated"
                        style={{
                          height: `${item.height}px`,
                          borderRadius: `${itemRoundness}px`,
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={item.src}
                          alt={item.alt || "Alenora Bridal Studio signature makeover"}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          quality={95}
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                          draggable={false}
                        />

                        {/* Subtle ambient lighting vignette & luxury border on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Quick View Pill Badge */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-espresso/80 backdrop-blur-md text-ivory text-[11px] font-sans font-medium border border-gold/40 shadow-soft">
                            <Maximize2 className="w-3 h-3 text-gold" />
                            <span>View</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Edge Vignette Overlays for smooth entry/exit */}
      <div className="curtain-overlay-top absolute top-0 inset-x-0 h-28 pointer-events-none z-10" />
      <div className="curtain-overlay-bottom absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10" />
      <div className="curtain-overlay-left absolute left-0 inset-y-0 w-12 sm:w-20 pointer-events-none z-10" />
      <div className="curtain-overlay-right absolute right-0 inset-y-0 w-12 sm:w-20 pointer-events-none z-10" />

      {/* Subtle Drag / Scroll Guidance Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-hairline shadow-soft text-espresso text-xs font-sans">
          <MoveHorizontal className="w-3.5 h-3.5 text-gold shrink-0 animate-pulse" />
          <span className="font-medium text-[11px] sm:text-xs">Drag or scroll to explore 3D gallery</span>
        </div>
      </div>

      {/* High-Resolution Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-espresso/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute -top-12 right-0 sm:right-2 text-ivory/80 hover:text-ivory bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Modal Image */}
            <div className="relative w-full h-full max-h-[82vh] rounded-2xl overflow-hidden border border-gold/40 shadow-elevated bg-espresso">
              <Image
                src={selectedImage.src}
                alt="Alenora Bride — Full Portrait"
                fill
                quality={100}
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption Pill */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-gold/30 text-ivory text-xs font-sans">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Alenora Bridal Studio • Couture Real Bride Portfolio</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
