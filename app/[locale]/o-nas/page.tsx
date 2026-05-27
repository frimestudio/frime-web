import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageSchema } from "@/lib/seo";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const lede = t("lede").slice(0, 160);
  return {
    title: t("title"),
    description: lede,
    alternates: {
      canonical: "/o-nas",
      languages: { pl: "/o-nas", uk: "/uk/o-nas", en: "/en/o-nas" },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <JsonLd data={aboutPageSchema(t("lede"))} />
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>O NAS · WILCZA 26</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="max-w-prose text-base leading-relaxed md:text-lg">
              {t("lede")}
            </p>
            <div className="mt-12">
              <Heading as="h2" size="md">
                {t("values_title")}
              </Heading>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {[
                  { t: t("value_1_title"), d: t("value_1_desc") },
                  { t: t("value_2_title"), d: t("value_2_desc") },
                  { t: t("value_3_title"), d: t("value_3_desc") },
                ].map((v, i) => (
                  <div
                    key={i}
                    className="border border-line p-5"
                  >
                    <div className="display text-2xl">{v.t}</div>
                    <p className="mt-3 text-sm leading-relaxed">{v.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <LocalPhoto
              src="/images/vibe/frime-1-urodziny/bar.jpg"
              alt="Wnętrze studia FRIME — bar i neonowe światło"
              ratio="3/4"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </div>
      </Section>

      <Section tone="frime">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Kicker className="text-frime-ink opacity-80">
              {t("proof_title")}
            </Kicker>
            <div className="display mt-6 text-[clamp(5rem,14vw,14rem)] leading-none">
              {site.rating.value.toFixed(1).replace(".", ",")}
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed">{t("proof_desc")}</p>
            <div className="mt-6">
              <a
                href={site.booking.booksy}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-sm underline underline-offset-4"
              >
                {site.booking.booksy} →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
