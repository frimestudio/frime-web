let started = false;

/**
 * Startuje PostHog (region EU). Wołane DOPIERO po zgodzie na cookies —
 * do tego momentu biblioteka nie jest nawet pobierana (dynamiczny import),
 * więc przed zgodą nie leci żadne połączenie do PostHog (EU/RODO).
 *
 * `capture_pageview: "history_change"` liczy bieżącą odsłonę przy init oraz
 * kolejne przejścia SPA (next/link, next-intl). Idempotentne.
 */
export async function startPostHog(): Promise<void> {
  if (started) return;
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;
  started = true;
  try {
    const { default: posthog } = await import("posthog-js");
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com",
      ui_host: "https://eu.posthog.com",
      capture_pageview: "history_change",
      capture_pageleave: true,
      // Strona jest anonimowa — profile osób tylko dla zidentyfikowanych.
      person_profiles: "identified_only",
      // Nie używamy feature flags — bez zbędnego zapytania /flags.
      advanced_disable_flags: true,
    });
  } catch {
    started = false; // pozwól spróbować ponownie
  }
}
