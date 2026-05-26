"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useTransition } from "react";

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

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  return (
    <div className={cn("mono flex items-center gap-1 text-xs", className)}>
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            disabled={isPending || active}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: l });
              });
            }}
            className={cn(
              "px-1.5 py-1 transition-colors",
              active
                ? "underline underline-offset-4"
                : "text-[var(--color-muted)] hover:text-[var(--color-fg)]",
            )}
            aria-label={`Switch to ${labels[l]}`}
          >
            {labels[l]}
          </button>
        );
      })}
    </div>
  );
}
