import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

const dayLabel: Record<string, { pl: string; uk: string; en: string }> = {
  mon: { pl: "Pon", uk: "Пн", en: "Mon" },
  tue: { pl: "Wt", uk: "Вт", en: "Tue" },
  wed: { pl: "Śr", uk: "Ср", en: "Wed" },
  thu: { pl: "Czw", uk: "Чт", en: "Thu" },
  fri: { pl: "Pt", uk: "Пт", en: "Fri" },
  sat: { pl: "Sob", uk: "Сб", en: "Sat" },
  sun: { pl: "Nd", uk: "Нд", en: "Sun" },
};

export async function Footer({ locale }: { locale: "pl" | "uk" | "en" }) {
  const t = await getTranslations("footer");

  return (
    <footer className="mt-auto border-t border-[var(--color-line)] bg-[var(--color-fg)] text-[var(--color-bg)]">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="display text-5xl">FRIME</div>
            <p className="mono mt-3 text-xs opacity-70">{site.tagline}</p>
          </div>

          <div>
            <h3 className="mono text-xs opacity-60">{t("hours_title")}</h3>
            <ul className="mono mt-3 space-y-1 text-sm">
              {site.hours.schedule.map((d) => (
                <li
                  key={d.day}
                  className={d.closed ? "opacity-40" : ""}
                >
                  <span className="inline-block w-10">
                    {dayLabel[d.day][locale]}
                  </span>
                  <span>
                    {d.closed
                      ? locale === "pl"
                        ? "nieczynne"
                        : locale === "uk"
                        ? "вихідний"
                        : "closed"
                      : `${d.open}–${d.close}`}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mono mt-3 text-[10px] opacity-50">
              {site.hours.note}
            </p>
          </div>

          <div>
            <h3 className="mono text-xs opacity-60">{t("social_title")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={site.booking.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-frime)]"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.booking.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-frime)]"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href={site.booking.booksy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-frime)]"
                >
                  Booksy
                </a>
              </li>
            </ul>
            <address className="mono mt-6 text-xs not-italic opacity-70">
              {site.address.street}
              <br />
              {site.address.postal} {site.address.city}
              <br />
              {site.contact.phone}
            </address>
          </div>

          <div>
            <h3 className="mono text-xs opacity-60">{t("legal_title")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/kosmetyki">Kosmetyki</Link>
              </li>
              <li>
                <Link href="/polityka-prywatnosci">{t("privacy")}</Link>
              </li>
              <li>
                <Link href="/regulamin">{t("terms")}</Link>
              </li>
              <li>
                <Link href="/cookies">{t("cookies")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mono mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-[10px] opacity-60 md:flex-row md:items-center">
          <span>
            © {new Date().getFullYear()} {site.legal.legalName} ·{" "}
            {site.address.street} · NIP {site.legal.nip} · {t("rights")}.
          </span>
          <span>{t("made_in")}</span>
        </div>
      </Container>
    </footer>
  );
}
