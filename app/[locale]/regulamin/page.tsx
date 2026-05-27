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
    title: t("terms_title"),
    description: t("terms_intro"),
    alternates: {
      canonical: "/regulamin",
      languages: { pl: "/regulamin", uk: "/uk/regulamin", en: "/en/regulamin" },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");
  const sections = t.raw("terms_sections") as LegalSection[];

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>REGULAMIN</Kicker>
          <Heading as="h1" size="lg" className="mt-6">
            {t("terms_title")}
          </Heading>
          <p className="mt-6 max-w-prose text-base text-muted">
            {t("terms_intro")}
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
        </div>
      </Section>
    </>
  );
}
