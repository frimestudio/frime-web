import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pl", "uk", "en", "ru", "de", "fr", "es", "it"],
  defaultLocale: "pl",
  localePrefix: "as-needed",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
