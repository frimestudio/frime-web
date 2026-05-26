import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string }>;
};

type Variant = { name: string; desc: string };
type Related = { label: string; href: string };

const path = "/on/mullet";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "services_content.mullet",
  });
  const titleByLocale: Record<string, string> = {
    pl: "Mullet męski i damski w Warszawie · FRIME Wilcza 26",
    uk: "Mullet чоловічий і жіночий у Варшаві · FRIME Wilcza 26",
    en: "Mullet for him and her in Warsaw · FRIME Wilcza 26",
  };
  const descByLocale: Record<string, string> = {
    pl: "Mullet, wolf cut, shag i wszystkie ich warianty w studio FRIME na Wilczej 26 w Warszawie. Strzyżenia od 150 zł, konsultacja gratis, rezerwacja przez Booksy.",
    uk: "Mullet, wolf cut, shag і всі їх варіанти у студії FRIME на Wilczej 26 у Варшаві. Стрижки від 150 zł, консультація безкоштовна, бронювання через Booksy.",
    en: "Mullets, wolf cuts, shags and every variant at FRIME studio on Wilcza 26, Warsaw. Cuts from 150 PLN, free consultation, booking on Booksy.",
  };
  return {
    title: titleByLocale[locale] ?? t("title"),
    description: descByLocale[locale] ?? t("lede"),
    alternates: {
      canonical: path,
      languages: {
        pl: path,
        uk: `/uk${path}`,
        en: `/en${path}`,
      },
    },
    openGraph: {
      title: titleByLocale[locale],
      description: descByLocale[locale],
      type: "article",
    },
  };
}

export default async function MulletPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services_content.mullet");
  const loc = locale as "pl" | "uk" | "en";
  const prefix = loc === "pl" ? "" : `/${loc}`;
  const fullUrl = `${site.url}${prefix}${path}`;

  const menVariants = t.raw("men_variants") as Variant[];
  const womenVariants = t.raw("women_variants") as Variant[];
  const faqItems = t.raw("faq") as FAQItem[];
  const related = t.raw("related") as Related[];

  const breadcrumbItems = [
    { name: "FRIME", url: `${site.url}${prefix}/` },
    {
      name: loc === "pl" ? "ON" : loc === "uk" ? "ВІН" : "HIM",
      url: `${site.url}${prefix}/on`,
    },
    { name: t("title"), url: fullUrl },
  ];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: t("title"),
          description: t("lede"),
          category: "Mullet haircut",
          priceMin: 150,
          priceMax: 250,
          url: fullUrl,
        })}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="border-b border-[var(--color-line)]">
        <Container className="grid gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <Kicker>{t("kicker")}</Kicker>
            <Heading as="h1" size="xl" className="mt-6">
              {t("title")}
            </Heading>
            <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
              {t("lede")}
            </p>
            <div className="mono mt-8 flex flex-wrap gap-x-8 gap-y-2 text-xs">
              <span>
                <span className="opacity-60">{t("price_label")}: </span>
                {t("price_value")}
              </span>
              <span>
                <span className="opacity-60">{t("duration_label")}: </span>
                {t("duration_value")}
              </span>
            </div>
            <div className="mt-8">
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
          <div className="md:col-span-5">
            <LocalPhoto
              src="/images/ona/portfolio/mullet-2.jpg"
              alt="Mullet blond z grzywką — editorial FRIME"
              ratio="4/5"
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="max-w-prose">
          <Heading as="h2" size="md">
            {t("intro_title")}
          </Heading>
          <p className="mt-4 text-base leading-relaxed md:text-lg">
            {t("intro_body")}
          </p>
        </div>
      </Section>

      <Section tone="invert">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio="3/4"
              label="Mullet męski · 4 warianty"
              note="Карусель/коллаж 4 мужских мaллетов: classic, fade, modern shag, kręcony. 3:4."
            />
          </div>
          <div className="md:col-span-7">
            <Heading as="h2" size="lg">
              {t("men_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed">
              {t("men_body")}
            </p>
            <dl className="mt-8 divide-y divide-white/20 border-y border-white/20">
              {menVariants.map((v, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-5">
                  <dt className="col-span-12 display text-2xl md:col-span-4 md:text-3xl">
                    {v.name}
                  </dt>
                  <dd className="col-span-12 text-sm leading-relaxed md:col-span-8 md:text-base">
                    {v.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7 md:order-2">
            <LocalPhoto
              src="/images/ona/portfolio/mullet-1.jpg"
              alt="Wolf cut blond — damski mullet w FRIME"
              ratio="3/4"
              sizes="(min-width: 768px) 55vw, 100vw"
            />
          </div>
          <div className="md:col-span-5 md:order-1">
            <Heading as="h2" size="lg">
              {t("women_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed">
              {t("women_body")}
            </p>
          </div>
        </div>
        <dl className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-2">
          {womenVariants.map((v, i) => (
            <div key={i} className="bg-[var(--color-bg)] p-6">
              <dt className="display text-2xl md:text-3xl">{v.name}</dt>
              <dd className="mt-3 text-sm leading-relaxed md:text-base">
                {v.desc}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="frime">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Heading as="h2" size="md">
              {t("visit_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed md:text-lg">
              {t("visit_body")}
            </p>
          </div>
          <div className="md:col-span-6">
            <Heading as="h2" size="md">
              {t("care_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed md:text-lg">
              {t("care_body")}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <FAQ title={t("faq_title")} items={faqItems} />
      </Section>

      <Section tone="invert">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <Heading as="h2" size="lg">
              {t("cta_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed md:text-lg">
              {t("cta_text")}
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
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
      </Section>

      <Section>
        <div className="flex items-end justify-between">
          <Heading as="h3" size="md">
            {t("related_title")}
          </Heading>
        </div>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((r, i) => (
            <li key={i}>
              <Link
                href={r.href as "/on" | "/ona" | "/team"}
                className="block border border-[var(--color-line)] p-5 hover:bg-[var(--color-frime)] hover:text-[var(--color-frime-ink)]"
              >
                <span className="mono text-[10px] opacity-60">→</span>
                <span className="mt-2 block text-base font-medium">
                  {r.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
