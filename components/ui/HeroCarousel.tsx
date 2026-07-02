"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Aktywny slajd wyliczamy z pozycji scrolla — działa i przy swipe
  // palcem, i przy przewijaniu trackpadem, i przy kliknięciu w kropkę.
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex((prev) => (prev === i ? prev : i));
  };

  const scrollToIndex = (i: number, smooth = true) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({
      left: i * el.clientWidth,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  // Autoplay — przewija do następnego slajdu. Pauza gdy użytkownik
  // najedzie myszą albo dotknie (żeby nie walczyć ze swipem).
  useEffect(() => {
    if (isPaused || slides.length < 2) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el) return;
      const current = Math.round(el.scrollLeft / el.clientWidth);
      const next = (current + 1) % slides.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, slides.length, isPaused]);

  return (
    <div
      className={cn("relative w-full bg-line", ratioMap[ratio], className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className={cn(
          "flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain",
          // ukrywamy pasek przewijania (Firefox + WebKit)
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
        )}
        style={{ touchAction: "pan-x" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="relative h-full w-full shrink-0 snap-center"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              priority={priority && i === 0}
              className="object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-10 flex items-center justify-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={cn(
              "pointer-events-auto h-1.5 rounded-full transition-all",
              i === index
                ? "w-6 bg-[var(--color-frime-ink)]"
                : "w-1.5 bg-white/60 hover:bg-white",
            )}
          />
        ))}
      </div>

      <div className="mono pointer-events-none absolute top-3 right-3 z-10 bg-black/40 px-2 py-1 text-[10px] tracking-widest text-white">
        {String(index + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
