import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ButtonLink } from "@/components/ui/Button";

export async function Header() {
  const t = await getTranslations("nav");

  const links = [
    { href: "/on" as const, label: t("on") },
    { href: "/ona" as const, label: t("ona") },
    { href: "/vibe" as const, label: t("vibe") },
    { href: "/kosmetyki" as const, label: t("kosmetyki") },
    { href: "/team" as const, label: t("team") },
    { href: "/kontakt" as const, label: t("kontakt") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-3 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/images/brand/frime-wordmark-black.png"
            alt="FRIME"
            width={120}
            height={32}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="mono hidden items-center gap-6 text-xs md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-frime"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher className="hidden md:flex" />
          <a
            href={site.booking.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @frime.studio"
            className="hidden h-10 w-10 items-center justify-center border border-line transition-colors hover:bg-fg hover:text-bg md:inline-flex"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <span className="hidden md:inline-block">
            <ButtonLink
              href={site.booking.booksy}
              external
              variant="primary"
              size="md"
            >
              {t("cta")}
            </ButtonLink>
          </span>
        </div>
      </div>

      <nav className="mono flex items-center gap-4 overflow-x-auto border-t border-line px-6 py-2 text-[11px] md:hidden">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="shrink-0"
          >
            {l.label}
          </Link>
        ))}
        <LocaleSwitcher className="ml-auto shrink-0" />
      </nav>
    </header>
  );
}
