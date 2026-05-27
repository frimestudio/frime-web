"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState, useTransition } from "react";

const labels: Record<string, string> = {
  pl: "PL",
  uk: "UA",
  en: "EN",
  ru: "RU",
  de: "DE",
  fr: "FR",
  es: "ES",
  it: "IT",
};

const PRIMARY: readonly string[] = ["pl", "en", "ru"];

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const secondary = routing.locales.filter((l) => !PRIMARY.includes(l));
  const visiblePrimary = PRIMARY.includes(locale)
    ? PRIMARY
    : [...PRIMARY, locale];

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        wrapRef.current &&
        !wrapRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const switchTo = (l: string) => {
    setOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: l as (typeof routing.locales)[number] });
    });
  };

  return (
    <div
      ref={wrapRef}
      className={cn("mono relative flex items-center gap-1 text-xs", className)}
    >
      {visiblePrimary.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={isPending || active}
            onClick={() => switchTo(l)}
            className={cn(
              "px-1.5 py-1 transition-colors",
              active
                ? "underline underline-offset-4"
                : "text-muted hover:text-fg",
            )}
            aria-label={`Switch to ${labels[l]}`}
          >
            {labels[l]}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="More languages"
        className="px-1.5 py-1 text-muted transition-colors hover:text-fg"
      >
        +
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[100px] border border-line bg-bg py-1 shadow-lg">
          {secondary.map((l) => {
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                disabled={isPending || active}
                onClick={() => switchTo(l)}
                className={cn(
                  "block w-full px-3 py-1.5 text-left transition-colors",
                  active
                    ? "bg-frime text-bg"
                    : "hover:bg-fg hover:text-bg",
                )}
              >
                {labels[l]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
