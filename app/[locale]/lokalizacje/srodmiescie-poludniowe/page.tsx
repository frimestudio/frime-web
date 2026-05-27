import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink, ButtonInternalLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string }>;
};

type LocationSection = { title: string; body: string };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "locations.srodmiescie_poludniowe",
  });
  return {
    title: t("title"),
    description: t("lede"),
    alternates: {
      canonical: "/lokalizacje/srodmiescie-poludniowe",
      languages: {
        pl: "/lokalizacje/srodmiescie-poludniowe",
        uk: "/uk/lokalizacje/srodmiescie-poludniowe",
        en: "/en/lokalizacje/srodmiescie-poludniowe",
      },
    },
  };
}

function breadcrumbSchema(locale: string, title: string) {
  const prefix = locale === "pl" ? "" : `/${locale}`;
  const url = (p: string) => `${site.url}${prefix}${p}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: site.name,
        item: url("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Lokalizacje",
        item: url("/kontakt"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url("/lokalizacje/srodmiescie-poludniowe"),
      },
    ],
  };
}

export default async function SrodmiescieLocationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("locations.srodmiescie_poludniowe");
  const sections = t.raw("sections") as LocationSection[];
  const loc = locale as "pl" | "uk" | "en";

  const navLabels = {
    team: { pl: "Poznaj zespół", uk: "Команда", en: "Meet the team", ru: "Знакомство с командой", de: "Team kennenlernen", fr: "Rencontrer l'équipe", es: "Conoce al equipo", it: "Conosci il team" },
    services: { pl: "Cennik usług", uk: "Прайс послуг", en: "Service prices", ru: "Прайс услуг", de: "Preisliste", fr: "Tarifs", es: "Tarifas", it: "Listino" },
    events: { pl: "Wydarzenia", uk: "Події", en: "Events", ru: "События", de: "Events", fr: "Événements", es: "Eventos", it: "Eventi" },
    contact: { pl: "Kontakt", uk: "Контакт", en: "Contact", ru: "Контакт", de: "Kontakt", fr: "Contact", es: "Contacto", it: "Contatti" },
    relatedTitle: { pl: "Co dalej", uk: "Що далі", en: "What's next", ru: "Что дальше", de: "Was kommt", fr: "Et après", es: "Qué sigue", it: "Cosa segue" },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, t("title"))} />

      <section className="border-b border-line">
        <Container className="grid gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <Kicker>{t("kicker")}</Kicker>
            <Heading as="h1" size="xl" className="mt-6">
              {t("title")}
            </Heading>
            <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
              {t("lede")}
            </p>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio="4/5"
              label="Wilcza 26 · fasada lub witryna"
              note="Реальное фото входа FRIME с улицы. 4:5. Желательно с табличкой адреса и узнаваемым видом улицы Wilcza."
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="space-y-12">
              {sections.map((s, i) => (
                <section key={i}>
                  <h2 className="display text-2xl md:text-3xl">{s.title}</h2>
                  <p className="mt-4 max-w-prose text-base leading-relaxed md:text-lg">
                    {s.body}
                  </p>
                </section>
              ))}
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="sticky top-32 space-y-6">
              <ImagePlaceholder
                ratio="3/4"
                label="Wnętrze studia"
                note="Фото интерьера, 3:4. Лучше всего общий план с тремя креслами и зеркалами."
              />
              <div className="border border-line p-6">
                <div className="mono text-[10px] opacity-60">
                  {t("cta_title")}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{t("cta_text")}</p>
                <div className="mt-6">
                  <ButtonLink
                    href={site.booking.booksy}
                    external
                    size="md"
                    variant="primary"
                  >
                    Booksy →
                  </ButtonLink>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="invert">
        <Heading as="h2" size="md">
          {navLabels.relatedTitle[loc]}
        </Heading>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <Link
            href="/team"
            className="block border border-bg p-5 hover:bg-frime hover:text-frime-ink"
          >
            <span className="mono text-[10px] opacity-60">TEAM</span>
            <span className="mt-2 block display text-2xl">
              {navLabels.team[loc]}
            </span>
          </Link>
          <Link
            href="/on"
            className="block border border-bg p-5 hover:bg-frime hover:text-frime-ink"
          >
            <span className="mono text-[10px] opacity-60">ON / ONA</span>
            <span className="mt-2 block display text-2xl">
              {navLabels.services[loc]}
            </span>
          </Link>
          <Link
            href="/vibe"
            className="block border border-bg p-5 hover:bg-frime hover:text-frime-ink"
          >
            <span className="mono text-[10px] opacity-60">VIBE</span>
            <span className="mt-2 block display text-2xl">
              {navLabels.events[loc]}
            </span>
          </Link>
          <Link
            href="/kontakt"
            className="block border border-bg p-5 hover:bg-frime hover:text-frime-ink"
          >
            <span className="mono text-[10px] opacity-60">KONTAKT</span>
            <span className="mt-2 block display text-2xl">
              {navLabels.contact[loc]}
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
