import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("cookies_title"),
    description: t("cookies_intro"),
    alternates: {
      canonical: "/cookies",
      languages: { pl: "/cookies", uk: "/uk/cookies", en: "/en/cookies" },
    },
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>COOKIES</Kicker>
          <Heading as="h1" size="lg" className="mt-6">
            {t("cookies_title")}
          </Heading>
          <p className="mt-6 max-w-prose text-base text-muted">
            {t("cookies_intro")}
          </p>
        </Container>
      </section>
      <Section>
        <p className="max-w-prose text-base leading-relaxed">
          {t("cookies_body")}
        </p>
      </Section>
    </>
  );
}
