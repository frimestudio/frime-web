import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

const dayLabel: Record<string, { pl: string; uk: string; en: string }> = {
  mon: { pl: "Poniedziałek", uk: "Понеділок", en: "Monday" },
  tue: { pl: "Wtorek", uk: "Вівторок", en: "Tuesday" },
  wed: { pl: "Środa", uk: "Середа", en: "Wednesday" },
  thu: { pl: "Czwartek", uk: "Четвер", en: "Thursday" },
  fri: { pl: "Piątek", uk: "П'ятниця", en: "Friday" },
  sat: { pl: "Sobota", uk: "Субота", en: "Saturday" },
  sun: { pl: "Niedziela", uk: "Неділя", en: "Sunday" },
};

const closedWord = { pl: "nieczynne", uk: "вихідний", en: "closed" };

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "kontakt" });
  return {
    title: t("title"),
    description: t("how_to_get"),
    alternates: {
      canonical: "/kontakt",
      languages: { pl: "/kontakt", uk: "/uk/kontakt", en: "/en/kontakt" },
    },
  };
}

export default async function KontaktPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("kontakt");
  const loc = locale as "pl" | "uk" | "en";

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <Container className="py-12 md:py-20">
          <Kicker>KONTAKT · WILCZA 26</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="aspect-video w-full overflow-hidden border border-[var(--color-line)]">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${site.address.street}, ${site.address.postal} ${site.address.city}`,
                )}&output=embed&z=16`}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa Google Maps · ${site.fullName} · ${site.address.street}`}
                allowFullScreen
              />
            </div>
            <p className="mono mt-3 text-[10px] opacity-50">
              Mapa: Google Maps. Otwórz w nowej karcie:{" "}
              <a
                href={`https://www.google.com/maps/place/${encodeURIComponent(
                  `${site.address.street}, ${site.address.postal} ${site.address.city}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Wilcza 26 →
              </a>
            </p>
            <div className="mt-8">
              <h2 className="mono text-xs opacity-60">
                {t("how_to_get_title")}
              </h2>
              <p className="mt-3 max-w-prose text-base leading-relaxed">
                {t("how_to_get")}
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="space-y-8">
              <div>
                <h2 className="mono text-xs opacity-60">
                  {t("address_title")}
                </h2>
                <address className="mt-2 text-lg leading-relaxed not-italic">
                  {site.address.street}
                  <br />
                  {site.address.postal} {site.address.city}
                  <br />
                  {site.address.district}
                </address>
              </div>

              <div>
                <h2 className="mono text-xs opacity-60">
                  {t("hours_title")}
                </h2>
                <ul className="mt-2 space-y-1">
                  {site.hours.schedule.map((d) => (
                    <li
                      key={d.day}
                      className={d.closed ? "opacity-40" : ""}
                    >
                      <span className="mono inline-block w-32 text-sm">
                        {dayLabel[d.day][loc]}
                      </span>
                      <span className="mono text-sm">
                        {d.closed ? closedWord[loc] : `${d.open}–${d.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mono mt-3 text-[10px] opacity-50">
                  {site.hours.note}
                </p>
              </div>

              <div>
                <h2 className="mono text-xs opacity-60">{t("phone_title")}</h2>
                <p className="mt-2 text-lg">{site.contact.phone}</p>
              </div>

              <div>
                <h2 className="mono text-xs opacity-60">{t("social_title")}</h2>
                <ul className="mt-2 space-y-1 text-lg">
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
                </ul>
              </div>

              <ButtonLink
                href={site.booking.booksy}
                external
                size="lg"
                variant="primary"
              >
                Booksy →
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
