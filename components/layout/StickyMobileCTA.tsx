import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";

export async function StickyMobileCTA() {
  const t = await getTranslations("nav");
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-frime md:hidden">
      <a
        href={site.booking.booksy}
        target="_blank"
        rel="noopener noreferrer"
        className="mono flex h-12 items-center justify-center text-sm font-medium uppercase tracking-wider text-frime-ink"
      >
        {t("cta")} →
      </a>
    </div>
  );
}
