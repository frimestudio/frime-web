"use client";

import { useEffect, useRef, useState } from "react";

const NOISE = "!<>-_/\\[]{}=+*^?#$%&01";

type Props = {
  prefix: string;
  name: string;
  surname: string;
  durationMs?: number;
  className?: string;
};

type Phase = "initial" | "scrambling" | "done";

function pickNoise() {
  return NOISE[Math.floor(Math.random() * NOISE.length)];
}

export function ScrambleText({
  prefix,
  name,
  surname,
  durationMs = 1400,
  className,
}: Props) {
  const fullText = `${prefix} ${name} ${surname}`;
  const [phase, setPhase] = useState<Phase>("initial");
  const [display, setDisplay] = useState<string>(fullText);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            runScramble();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText]);

  function runScramble() {
    setPhase("scrambling");
    const chars = fullText.split("");
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      let scrambled = "";
      for (let i = 0; i < chars.length; i++) {
        const target = chars[i];
        if (target === " ") {
          scrambled += " ";
          continue;
        }
        // each char locks in at its own moment based on position
        const charLock = progress * 1.5 - i / chars.length;
        if (charLock >= 1) {
          scrambled += target;
        } else {
          scrambled += pickNoise();
        }
      }

      setDisplay(scrambled);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(fullText);
        setPhase("done");
      }
    };

    // initial frame — all noise except spaces
    let opener = "";
    for (const c of chars) opener += c === " " ? " " : pickNoise();
    setDisplay(opener);
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }

  // SSR + initial paint + final state: JSX with blue highlights
  if (phase !== "scrambling") {
    return (
      <span ref={ref} className={className}>
        <span aria-hidden className="sr-only">
          {fullText}
        </span>
        <span aria-hidden>
          {prefix}{" "}
          <span style={{ color: "var(--color-frime)" }}>{name}</span>{" "}
          <span style={{ color: "var(--color-frime)" }}>{surname}</span>
        </span>
      </span>
    );
  }

  // during scramble — flat string, monospace tabular-nums to avoid jitter
  return (
    <span
      ref={ref}
      className={className}
      style={{ fontVariantNumeric: "tabular-nums" }}
      aria-label={fullText}
    >
      {display}
    </span>
  );
}
