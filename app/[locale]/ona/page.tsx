import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
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
    pl: "Strzyżenia damskie, grzywki, konsultacje koloru i trwałej gratis w studio FRIME na Wilczej 26 w Warszawie. Ceny od 80 zł, rezerwacja przez Booksy.",
    uk: "Жіночі стрижки, чілки, безкоштовні консультації по кольору і хімії в студії FRIME на Wilczej 26 у Варшаві. Ціни від 80 zł, бронювання через Booksy.",
    en: "Women's cuts, fringes, free color and perm consultations at FRIME studio on Wilcza 26, Warsaw. Prices from 80 PLN, booking via Booksy.",
  };
  return {
    title: t("ona_title"),
    description: descByLocale[locale] ?? t("ona_intro"),
    alternates: {
      canonical: "/ona",
      languages: { pl: "/ona", uk: "/uk/ona", en: "/en/ona" },
    },
  };
}

export default async function OnaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const onaServices = services.filter((s) => s.category === "ona");
  const consults = services.filter((s) => s.category === "konsultacja");
  const loc = locale as "pl" | "uk" | "en";

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>ONA · {site.address.city}</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("ona_title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed">
            {t("ona_intro")}
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {onaServices.map((s) => (
                <li key={s.slug}>
                  <a
                    href={site.booking.booksy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-12 items-baseline gap-4 py-5 transition-colors hover:bg-frime hover:text-frime-ink"
                    aria-label={`${s.name[loc]} — ${t("book")}`}
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
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-frime bg-frime p-6 text-frime-ink">
              <Heading as="h2" size="md" className="text-frime-ink">
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
            <div className="grid grid-cols-2 gap-2">
              <LocalPhoto
                src="/images/ona/portfolio/pixie-2.jpg"
                alt="Krótka kobieca fryzura pixie — editorial FRIME"
                ratio="4/5"
                sizes="(min-width: 768px) 20vw, 50vw"
              />
              <LocalPhoto
                src="/images/ona/portfolio/mullet-2.jpg"
                alt="Damski mullet z grzywką — sesja FRIME"
                ratio="4/5"
                sizes="(min-width: 768px) 20vw, 50vw"
              />
              <LocalPhoto
                src="/images/ona/portfolio/grzywka-1.jpg"
                alt="Długie włosy z grzywką — fryzura damska FRIME"
                ratio="4/5"
                sizes="(min-width: 768px) 20vw, 50vw"
              />
              <LocalPhoto
                src="/images/ona/portfolio/pixie-3.jpg"
                alt="Profil krótka stryżenie pixie — FRIME"
                ratio="4/5"
                sizes="(min-width: 768px) 20vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <Heading as="h2" size="md">
          {t("deep_links_title_ona")}
        </Heading>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          <li>
            <Link
              href="/ona/krotkie-fryzury"
              className="block h-full border border-line p-6 hover:bg-frime hover:text-frime-ink"
            >
              <span className="mono text-[10px] opacity-60">
                STRZYŻENIE
              </span>
              <span className="mt-3 block display text-3xl">
                {locale === "pl"
                  ? "Krótkie fryzury"
                  : locale === "uk"
                  ? "Короткі стрижки"
                  : "Short cuts"}
              </span>
              <span className="mt-3 block text-sm">
                {locale === "pl"
                  ? "Pixie, bob, buzz, asymetria, bowl. Pełny poradnik."
                  : locale === "uk"
                  ? "Pixie, bob, buzz, асиметрія, bowl. Повний гід."
                  : "Pixie, bob, buzz, asymmetry, bowl. Full guide."}
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/on/mullet"
              className="block h-full border border-line p-6 hover:bg-frime hover:text-frime-ink"
            >
              <span className="mono text-[10px] opacity-60">
                STRZYŻENIE
              </span>
              <span className="mt-3 block display text-3xl">
                {locale === "pl"
                  ? "Wolf cut i shag"
                  : locale === "uk"
                  ? "Wolf cut і shag"
                  : "Wolf cut and shag"}
              </span>
              <span className="mt-3 block text-sm">
                {locale === "pl"
                  ? "Damska wersja mulleta z 4 wariantami. Od 150 zł."
                  : locale === "uk"
                  ? "Жіноча версія мaллета з 4 варіантами. Від 150 zł."
                  : "Women's version of the mullet with 4 variants. From 150 PLN."}
              </span>
            </Link>
          </li>
        </ul>
      </Section>

      <Section tone="invert">
        <FAQ
          title={t("faq_title_ona")}
          items={t.raw("faq_ona") as FAQItem[]}
        />
      </Section>
    </>
  );
}
