import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonInternalLink, ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
import { Placeholder } from "@/components/ui/Placeholder";
import { Marquee } from "@/components/ui/Marquee";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { site } from "@/content/site";
import { team } from "@/content/team";
import { getUpcomingEvent } from "@/content/events";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("home");
  const tTeam = await getTranslations("team");
  const upcoming = getUpcomingEvent();
  const faqItems = t.raw("faq") as FAQItem[];

  const popularLinks: {
    kicker: string;
    label: string;
    href:
      | "/on/mullet"
      | "/on/repigmentacja"
      | "/ona/krotkie-fryzury"
      | "/lokalizacje/srodmiescie-poludniowe";
  }[] = [
    {
      kicker: "ON · ONA",
      label:
        locale === "pl"
          ? "Mullet, wolf cut, shag"
          : locale === "uk"
          ? "Mullet, wolf cut, shag"
          : "Mullet, wolf cut, shag",
      href: "/on/mullet",
    },
    {
      kicker: "ONA",
      label:
        locale === "pl"
          ? "Krótkie fryzury damskie"
          : locale === "uk"
          ? "Короткі жіночі стрижки"
          : "Short women's cuts",
      href: "/ona/krotkie-fryzury",
    },
    {
      kicker: "ON",
      label:
        locale === "pl"
          ? "Repigmentacja brody i głowy"
          : locale === "uk"
          ? "Репігментація бороди і голови"
          : "Beard and head repigmentation",
      href: "/on/repigmentacja",
    },
    {
      kicker: "LOKALIZACJA",
      label:
        locale === "pl"
          ? "Śródmieście Południowe"
          : locale === "uk"
          ? "Śródmieście Południowe"
          : "Śródmieście Południowe district",
      href: "/lokalizacje/srodmiescie-poludniowe",
    },
  ];

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid gap-10 py-10 md:grid-cols-12 md:gap-8 md:py-16">
          <div className="md:col-span-7">
            <Kicker>{t("hero_kicker")}</Kicker>
            <h1 className="display display-hero mt-6 text-[clamp(3rem,11vw,11rem)]">
              <span className="block">{t("hero_slogan_1")}</span>
              <span className="block">{t("hero_slogan_2")}</span>
              <span className="block text-frime">
                {t("hero_slogan_3")}
              </span>
              <span className="block">{t("hero_slogan_4")}</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink
                href={site.booking.booksy}
                external
                size="lg"
                variant="primary"
              >
                {t("hero_cta")}
              </ButtonLink>
              <span className="mono text-xs text-muted">
                {t("hero_proof")}
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <HeroCarousel
              ratio="4/5"
              priority
              slides={[
                { src: "/images/hero/studio-01.jpg", alt: "Wnętrze studia FRIME — fotel i lustro" },
                { src: "/images/hero/studio-02.jpg", alt: "Detale studia FRIME na Wilczej 26 w Warszawie" },
                { src: "/images/hero/studio-03.jpg", alt: "Stanowiska fryzjerskie w FRIME — Wilcza 26" },
                { src: "/images/hero/studio-04.jpg", alt: "Atmosfera studia FRIME — Śródmieście Warszawa" },
                { src: "/images/hero/magazines-newonce.jpg", alt: "Magazyn newonce w studio FRIME — do poczytania na miejscu" },
                { src: "/images/hero/magazines-aktivist.jpg", alt: "Aktivist magazine w studio FRIME — bierz i czytaj" },
                { src: "/images/hero/outside-01.jpg", alt: "FRIME od zewnątrz — Wilcza 26 Warszawa" },
                { src: "/images/hero/outside-02.jpg", alt: "Witryna FRIME na Wilczej 26" },
              ]}
            />
          </div>
        </Container>
      </section>

      <Marquee
        items={[
          "FRIME",
          "STUDIO FRYZJERSKIE",
          "WARSZAWA",
          "WILCZA 26",
          "★ 5,0",
        ]}
      />

      <Section>
        <div className="mb-12 flex items-end justify-between">
          <Heading as="h2" size="lg">
            {t.rich("pillars_title", {
              accent: (chunks) => (
                <span className="text-[var(--color-frime)]">{chunks}</span>
              ),
            })}
          </Heading>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {(
            [
              {
                key: "on",
                href: "/on" as const,
                title: t("pillar_on_title"),
                desc: t("pillar_on_desc"),
                img: "/images/on/portfolio/curly-tank-3.jpg",
                alt: "Mężczyzna z teksturowanymi lokami w studio FRIME",
              },
              {
                key: "ona",
                href: "/ona" as const,
                title: t("pillar_ona_title"),
                desc: t("pillar_ona_desc"),
                img: "/images/ona/portfolio/pixie-2.jpg",
                alt: "Krótka kobieca fryzura pixie w studio FRIME",
              },
              {
                key: "vibe",
                href: "/vibe" as const,
                title: t("pillar_vibe_title"),
                desc: t("pillar_vibe_desc"),
                img: "/images/vibe/frime-1-urodziny/cake.jpg",
                alt: "Niebieski tort FRIME na pierwszych urodzinach studia",
              },
            ] as const
          ).map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="group block border border-line bg-bg"
            >
              <LocalPhoto
                src={p.img}
                alt={p.alt}
                ratio="4/5"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="border-t border-line p-6">
                <div className="display text-5xl group-hover:text-frime">
                  {p.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>{t("magazines_kicker")}</Kicker>
            <Heading as="h2" size="lg" className="mt-4">
              {t("magazines_title")}
            </Heading>
            <p className="mt-6 max-w-prose text-base leading-relaxed md:text-lg">
              {t("magazines_intro")}
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="https://newonce.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-line bg-bg"
              >
                <LocalPhoto
                  src="/images/hero/magazines-newonce.jpg"
                  alt="newonce magazine w studio FRIME"
                  ratio="4/5"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <div className="border-t border-line p-5">
                  <div className="display text-2xl group-hover:text-frime">
                    newonce
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    {t("magazines_newonce_desc")}
                  </p>
                  <span className="mono mt-3 inline-block text-[10px] opacity-60">
                    newonce.net →
                  </span>
                </div>
              </a>
              <a
                href="https://aktivist.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-line bg-bg"
              >
                <LocalPhoto
                  src="/images/hero/magazines-aktivist.jpg"
                  alt="Aktivist magazine w studio FRIME"
                  ratio="4/5"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <div className="border-t border-line p-5">
                  <div className="display text-2xl group-hover:text-frime">
                    Aktivist
                  </div>
                  <p className="mt-2 text-sm leading-relaxed">
                    {t("magazines_aktivist_desc")}
                  </p>
                  <span className="mono mt-3 inline-block text-[10px] opacity-60">
                    aktivist.pl →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="invert">
        <div className="mb-12 flex items-end justify-between">
          <Heading as="h2" size="lg">
            {t("team_title")}
          </Heading>
          <ButtonInternalLink
            href="/team"
            variant="ghost"
            size="md"
            className="border-bg text-bg"
          >
            {t("team_cta")}
          </ButtonInternalLink>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m) => {
            const name = tTeam(`members.${m.slug}.name` as never);
            const role = tTeam(`members.${m.slug}.role` as never);
            return (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="block"
              >
                <ImagePlaceholder
                  ratio="3/4"
                  label={`Portrait · ${name}`}
                  note={`Студийный портрет ${name}, 3:4, мягкий свет`}
                />
                <div className="mt-3">
                  <div className="display text-3xl">{name}</div>
                  <div className="mono mt-1 text-[10px] opacity-70">{role}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>{t("events_title")}</Kicker>
            <Heading as="h2" size="lg" className="mt-4">
              {upcoming?.title ?? "PLACEHOLDER · Najbliższe wydarzenie"}
            </Heading>
            <p className="mt-4 text-base leading-relaxed">
              {upcoming?.summary[locale as "pl" | "uk" | "en"] ??
                "PLACEHOLDER · krótki opis wydarzenia"}
            </p>
            <div className="mt-8 flex gap-4">
              <ButtonInternalLink href="/vibe" variant="ink" size="md">
                {t("events_cta")}
              </ButtonInternalLink>
            </div>
          </div>
          <div className="md:col-span-7">
            {upcoming?.slug === "bvclub-kiosk-popup" ? (
              <LocalPhoto
                src="/images/vibe/bvclub-kiosk-popup/poster.png"
                alt="FRIME × BVCLUB × KIOSK Pop-up 06/06 — plakat"
                ratio="2/3"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <ImagePlaceholder
                ratio="4/5"
                label="Poster / event photo"
                note="Афиша в стиле FRIME или фото с прошлого попапа"
              />
            )}
          </div>
        </div>
      </Section>

      <Section tone="frime">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker className="text-frime-ink opacity-80">
              {t("reviews_title")}
            </Kicker>
            <div className="display mt-6 text-[clamp(5rem,14vw,14rem)] leading-none">
              {site.rating.value.toFixed(1).replace(".", ",")}
            </div>
            <div className="mono mt-4 text-sm opacity-90">
              {t("reviews_proof")}
            </div>
          </div>
          <div className="grid gap-4 md:col-span-7">
            {[1, 2, 3].map((i) => (
              <Placeholder
                key={i}
                label={`Cytat z opinii klienta #${i}`}
                note="2-3 zdania prawdziwej opinii (z Booksy lub Google). Dodać imię i datę."
                className="text-[var(--color-placeholder-fg)]"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <Kicker>{t("popular_title")}</Kicker>
            <Heading as="h2" size="md" className="mt-3">
              {t("popular_intro")}
            </Heading>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {popularLinks.map((p, i) => (
            <li key={i}>
              <Link
                href={p.href}
                className="block h-full border border-line p-6 hover:bg-frime hover:text-frime-ink"
              >
                <span className="mono text-[10px] opacity-60">{p.kicker}</span>
                <span className="mt-3 block display text-2xl md:text-3xl">
                  {p.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <FAQ title={t("faq_title")} items={faqItems} />
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker>{t("location_title")}</Kicker>
            <Heading as="h2" size="lg" className="mt-4">
              Wilcza 26
            </Heading>
            <address className="mono mt-6 not-italic text-sm leading-relaxed">
              {site.address.street}
              <br />
              {site.address.postal} {site.address.city}
              <br />
              {site.address.district}
            </address>
            <div className="mt-8">
              <ButtonInternalLink href="/kontakt" variant="ink" size="md">
                {t("location_cta")}
              </ButtonInternalLink>
            </div>
          </div>
          <div className="md:col-span-7">
            <ImagePlaceholder
              ratio="16/9"
              label="Embed mapy lub zdjęcie fasady"
              note="OpenStreetMap iframe lub statyczna mapa Google + duże zdjęcie wejścia 16:9"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
