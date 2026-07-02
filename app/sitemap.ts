import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import { teamSlugs } from "@/content/team";
import { events } from "@/content/events";

const staticPaths = [
  "",
  "/on",
  "/on/mullet",
  "/on/repigmentacja",
  "/ona",
  "/ona/krotkie-fryzury",
  "/ona/balayage",
  "/team",
  "/vibe",
  "/akademia",
  "/blog",
  "/kosmetyki",
  "/kontakt",
  "/o-nas",
  "/lokalizacje/srodmiescie-poludniowe",
  "/polityka-prywatnosci",
  "/regulamin",
  "/cookies",
];

function urlFor(locale: string, path: string) {
  const base = site.url.replace(/\/$/, "");
  const prefix =
    locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${base}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of staticPaths) {
      const priority =
        path === ""
          ? 1
          : path.startsWith("/on/") ||
            path.startsWith("/ona/") ||
            path.startsWith("/lokalizacje/")
          ? 0.85
          : path === "/polityka-prywatnosci" ||
            path === "/regulamin" ||
            path === "/cookies"
          ? 0.3
          : 0.7;
      entries.push({
        url: urlFor(locale, path),
        lastModified: new Date(),
        changeFrequency: path.startsWith("/blog") ? "daily" : "weekly",
        priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, urlFor(l, path)]),
          ),
        },
      });
    }
    for (const slug of teamSlugs) {
      entries.push({
        url: urlFor(locale, `/team/${slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const e of events) {
      entries.push({
        url: urlFor(locale, `/vibe/${e.slug}`),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
