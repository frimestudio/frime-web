"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { startPostHog } from "@/lib/posthog";

const STORAGE_KEY = "frime-cookies-consent";

export function CookieBanner() {
  const t = useTranslations("cookies_banner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (consent === "accepted") {
      // Zgoda z wcześniejszej wizyty → startujemy analitykę od razu.
      startPostHog();
    } else if (!consent) {
      const timer = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    // Zgoda wyrażona → startujemy analitykę (init liczy bieżącą odsłonę).
    startPostHog();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("title")}
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-[640px] border border-line bg-bg p-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)] md:inset-x-auto md:left-1/2 md:bottom-6 md:-translate-x-1/2 md:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
        <div className="text-xs leading-relaxed md:text-[13px]">
          <span className="mono mr-2 text-[10px] uppercase tracking-wide opacity-60">
            {t("title")}
          </span>
          {t("body")}{" "}
          <Link
            href="/cookies"
            className="underline underline-offset-2 hover:text-frime"
          >
            {t("more")}
          </Link>
        </div>
        <button
          type="button"
          onClick={accept}
          className="mono inline-flex h-10 shrink-0 items-center justify-center bg-frime px-5 text-xs uppercase tracking-wide text-bg transition-colors hover:bg-fg"
        >
          {t("accept")}
        </button>
      </div>
    </div>
  );
}
