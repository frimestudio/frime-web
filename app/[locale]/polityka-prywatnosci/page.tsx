import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";

type Props = {
  params: Promise<{ locale: string }>;
};

type LegalSection = { title: string; text: string };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });
  return {
    title: t("privacy_title"),
    description: t("privacy_intro"),
    alternates: {
      canonical: "/polityka-prywatnosci",
      languages: {
        pl: "/polityka-prywatnosci",
        uk: "/uk/polityka-prywatnosci",
        en: "/en/polityka-prywatnosci",
      },
    },
    robots: { index: true, follow: true, "max-snippet": -1 },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const sections = t.raw("privacy_sections") as LegalSection[];

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>RODO / GDPR</Kicker>
          <Heading as="h1" size="lg" className="mt-6">
            {t("privacy_title")}
          </Heading>
          <p className="mt-6 max-w-prose text-base text-muted">
            {t("privacy_intro")}
          </p>
        </Container>
      </section>
      <Section>
        <div className="max-w-prose space-y-8">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="display text-2xl md:text-3xl">{s.title}</h2>
              <p className="mt-3 text-base leading-relaxed">{s.text}</p>
            </section>
          ))}
          <p className="mono mt-12 text-xs opacity-60">{t("privacy_note")}</p>
        </div>
      </Section>
    </>
  );
}
