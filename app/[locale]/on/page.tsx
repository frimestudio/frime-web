import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { services } from "@/content/services";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const descByLocale: Record<string, string> = {
    pl: "Strzyżenia męskie, brody, repigmentacja w studio FRIME na Wilczej 26 w Warszawie. Ceny od 80 zł, rezerwacja przez Booksy.",
    uk: "Чоловічі стрижки, бороди, репігментація в студії FRIME на Wilczej 26 у Варшаві. Ціни від 80 zł, бронювання через Booksy.",
    en: "Men's cuts, beards, repigmentation at FRIME studio on Wilcza 26, Warsaw. Prices from 80 PLN, booking via Booksy.",
  };
  return {
    title: t("on_title"),
    description: descByLocale[locale] ?? t("on_intro"),
    alternates: {
      canonical: "/on",
      languages: { pl: "/on", uk: "/uk/on", en: "/en/on" },
    },
  };
}

export default async function OnPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const onServices = services.filter((s) => s.category === "on");
  const consults = services.filter((s) => s.category === "konsultacja");
  const loc = locale as "pl" | "uk" | "en";

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <Container className="py-12 md:py-20">
          <Kicker>ON · {site.address.city}</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("on_title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed">
            {t("on_intro")}
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {onServices.map((s) => (
                <li
                  key={s.slug}
                  className="grid grid-cols-12 items-baseline gap-4 py-5"
                >
                  <div className="col-span-7 md:col-span-8">
                    <div className="display text-2xl md:text-3xl">
                      {s.name[loc]}
                    </div>
                    <div className="mono mt-1 text-[10px] opacity-60">
                      {t("duration")}: {s.durationMin}
                      {s.durationMax ? `–${s.durationMax}` : ""} min
                    </div>
                  </div>
                  <div className="mono col-span-5 text-right text-sm md:col-span-4">
                    {t("price_from")} {s.priceFrom}
                    {s.priceTo ? `–${s.priceTo}` : ""} zł
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <Heading as="h2" size="md">
                {t("consultation_free")}
              </Heading>
              <ul className="mt-4 space-y-2">
                {consults.map((s) => (
                  <li key={s.slug} className="mono text-sm">
                    · {s.name[loc]} · {s.durationMin} min
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <ButtonLink
                href={site.booking.booksy}
                external
                size="lg"
                variant="primary"
              >
                {t("book")}
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio="4/5"
              label="ON · before/after или editorial"
              note="2-3 фото мужских работ. Желательно текстуры волос разных типов. 4:5, минимум 1200×1500."
            />
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          {t("deep_links_title_on")}
        </Heading>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          <li>
            <Link
              href="/on/mullet"
              className="block h-full border border-[var(--color-line)] p-6 hover:bg-[var(--color-frime)] hover:text-[var(--color-frime-ink)]"
            >
              <span className="mono text-[10px] opacity-60">
                STRZYŻENIE
              </span>
              <span className="mt-3 block display text-3xl">Mullet</span>
              <span className="mt-3 block text-sm">
                {locale === "pl"
                  ? "Klasyczny, z fade'em, kręcony, modern shag. Pełen poradnik."
                  : locale === "uk"
                  ? "Класичний, з фейдом, кучерявий, modern shag. Повний гід."
                  : "Classic, fade, curly, modern shag. Full guide."}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/on/repigmentacja"
              className="block h-full border border-[var(--color-line)] p-6 hover:bg-[var(--color-frime)] hover:text-[var(--color-frime-ink)]"
            >
              <span className="mono text-[10px] opacity-60">ZABIEG</span>
              <span className="mt-3 block display text-3xl">
                {locale === "pl"
                  ? "Repigmentacja"
                  : locale === "uk"
                  ? "Репігментація"
                  : "Repigmentation"}
              </span>
              <span className="mt-3 block text-sm">
                {locale === "pl"
                  ? "Brody, linii włosów, kamuflaż blizn. Od 80 zł."
                  : locale === "uk"
                  ? "Бороди, лінії волосся, камуфляж шрамів. Від 80 zł."
                  : "Beard, hairline, scar coverage. From 80 PLN."}
              </span>
            </Link>
          </li>
        </ul>
      </Section>

      <Section tone="invert">
        <FAQ
          title={t("faq_title_on")}
          items={t.raw("faq_on") as FAQItem[]}
        />
      </Section>
    </>
  );
}
