"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

type Slide = { src: string; alt: string };

type HeroCarouselProps = {
  slides: Slide[];
  ratio?: "4/5" | "3/4" | "1/1" | "16/9";
  intervalMs?: number;
  className?: string;
  priority?: boolean;
};

const ratioMap: Record<NonNullable<HeroCarouselProps["ratio"]>, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-video",
};

export function HeroCarousel({
  slides,
  ratio = "4/5",
  intervalMs = 5000,
  className,
  priority = false,
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, slides.length, isPaused]);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-line",
        ratioMap[ratio],
        className,
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            priority={priority && i === 0}
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-1.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === index
                ? "w-6 bg-[var(--color-frime-ink)]"
                : "w-1.5 bg-white/60 hover:bg-white",
            )}
          />
        ))}
      </div>

      <div className="mono pointer-events-none absolute top-3 right-3 bg-black/40 text-[10px] tracking-widest text-white px-2 py-1 z-10">
        {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
