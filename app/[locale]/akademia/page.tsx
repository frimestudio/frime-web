import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { WaitlistForm } from "./WaitlistForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "akademia" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: "/akademia",
      languages: { pl: "/akademia", uk: "/uk/akademia", en: "/en/akademia" },
    },
  };
}

export default async function AkademiaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("akademia");

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <Container className="py-12 md:py-20">
          <Kicker>{t("kicker")}</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed">
            {t("intro")}
          </p>
        </Container>
      </section>

      <Section tone="frime">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <WaitlistForm
              labelText={t("form_label")}
              buttonText={t("form_button")}
              successText={t("form_success")}
              errorText={t("form_error")}
            />
          </div>
          <div className="md:col-span-5">
            <h2 className="display text-3xl md:text-4xl">
              {t("what_we_plan_title")}
            </h2>
            <ul className="mt-6 space-y-3">
              {(t.raw("what_we_plan_list") as string[]).map((item, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed">
                  <span className="mono shrink-0 opacity-70">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ImagePlaceholder
                ratio="4/5"
                label="AKADEMIA · фото с обучения"
                note="Фото в студии: ножницы, манекены, мастер демонстрирует. 4:5."
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
