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
    { href: "/akademia" as const, label: t("akademia") },
    { href: "/team" as const, label: t("team") },
    { href: "/kontakt" as const, label: t("kontakt") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-6 py-3 md:px-10">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${site.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-frime)] text-[10px] font-bold tracking-wider text-[var(--color-frime-ink)]">
            FRIME
          </span>
        </Link>

        <nav className="mono hidden items-center gap-6 text-xs md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-[var(--color-frime)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher className="hidden md:flex" />
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

      <nav className="mono flex items-center gap-4 overflow-x-auto border-t border-[var(--color-line)] px-6 py-2 text-[11px] md:hidden">
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
