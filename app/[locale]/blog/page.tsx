import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: "/blog",
      languages: { pl: "/blog", uk: "/uk/blog", en: "/en/blog" },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <Container className="py-12 md:py-20">
          <Kicker>BLOG</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
            {t("intro")}
          </p>
        </Container>
      </section>

      <Section>
        <p className="mono text-sm opacity-60">{t("empty")}</p>
      </Section>
    </>
  );
}
