import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { Placeholder } from "@/components/ui/Placeholder";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/JsonLd";
import { collectionPageSchema } from "@/lib/seo";
import { getUpcomingEvent, getPastEvents } from "@/content/events";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "vibe" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: {
      canonical: "/vibe",
      languages: { pl: "/vibe", uk: "/uk/vibe", en: "/en/vibe" },
    },
  };
}

export default async function VibePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("vibe");
  const upcoming = getUpcomingEvent();
  const past = getPastEvents();
  const loc = locale as "pl" | "uk" | "en";

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: t("title"),
          description: t("intro"),
          path: "/vibe",
        })}
      />
      <section className="border-b border-[var(--color-line)]">
        <Container className="py-12 md:py-20">
          <Kicker>VIBE</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
          <p className="mt-8 max-w-2xl text-base leading-relaxed">
            {t("intro")}
          </p>
        </Container>
      </section>

      <Section tone="frime">
        <Kicker className="text-[var(--color-frime-ink)] opacity-80">
          {t("next_title")}
        </Kicker>
        {upcoming ? (
          <div className="mt-6 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Heading
                as="h2"
                size="lg"
                className="text-[var(--color-frime-ink)]"
              >
                {upcoming.title}
              </Heading>
              <div className="mono mt-4 text-sm opacity-90">
                {upcoming.date}
                {upcoming.partner ? ` · ${upcoming.partner}` : ""}
              </div>
              <p className="mt-6 text-base leading-relaxed">
                {upcoming.summary[loc]}
              </p>
            </div>
            <div className="md:col-span-5">
              <ImagePlaceholder
                ratio="4/5"
                label="Poster nadchodzącego eventu"
                note="Афиша в стиле FRIME (collage / heavy type / brutal layout). 4:5, минимум 1200×1500."
              />
            </div>
          </div>
        ) : (
          <Placeholder
            label={t("next_placeholder")}
            note="Когда есть подтверждённое событие — добавить запись в content/events.ts со статусом upcoming"
            className="mt-6 text-[var(--color-placeholder-fg)]"
          />
        )}
      </Section>

      <Section>
        <Heading as="h2" size="lg">
          {t("archive_title")}
        </Heading>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {past.map((e) => (
            <Link
              key={e.slug}
              href={`/vibe/${e.slug}`}
              className="group block border border-[var(--color-line)]"
            >
              {e.slug === "frime-1-urodziny" ? (
                <LocalPhoto
                  src="/images/vibe/frime-1-urodziny/cake.jpg"
                  alt="Niebieski tort FRIME na pierwszych urodzinach studia"
                  ratio="4/5"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              ) : (
                <ImagePlaceholder
                  ratio="4/5"
                  label={`Poster · ${e.title}`}
                  note={`Афиша или фото с ${e.title}, ${e.date}`}
                />
              )}
              <div className="border-t border-[var(--color-line)] p-6">
                <div className="mono text-[10px] opacity-60">{e.date}</div>
                <div className="display mt-2 text-3xl group-hover:text-[var(--color-frime)]">
                  {e.title}
                </div>
                <p className="mt-3 text-sm leading-relaxed">{e.summary[loc]}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
