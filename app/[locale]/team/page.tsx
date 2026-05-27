import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/seo";
import { team } from "@/content/team";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: "/team",
      languages: { pl: "/team", uk: "/uk/team", en: "/en/team" },
    },
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team");

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: t("title"),
          description: t("intro"),
          path: "/team",
        })}
      />
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>TEAM</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed">
            {t("intro")}
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m) => {
            const name = t(`members.${m.slug}.name` as never);
            const role = t(`members.${m.slug}.role` as never);
            return (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                className="group block"
              >
                <ImagePlaceholder
                  ratio="3/4"
                  label={`Portrait · ${name}`}
                  note={`Студийный портрет ${name}. 3:4. Мягкий свет, нейтральный фон. Минимум 1200×1600.`}
                />
                <div className="mt-4">
                  <div className="display text-4xl group-hover:text-frime">
                    {name}
                  </div>
                  <div className="mono mt-2 text-[10px] opacity-70">{role}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
