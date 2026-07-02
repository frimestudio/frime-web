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
  // Okładka eventu: plakat, a gdy go nie ma — pierwsze zdjęcie z galerii.
  const upcomingCover = upcoming
    ? (upcoming.poster ?? upcoming.photos?.[0])
    : undefined;

  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          name: t("title"),
          description: t("intro"),
          path: "/vibe",
        })}
      />
      <section className="border-b border-line">
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
        <Kicker className="text-frime-ink opacity-80">
          {t("next_title")}
        </Kicker>
        {upcoming ? (
          <div className="mt-6 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Heading
                as="h2"
                size="lg"
                className="text-bg"
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
              {upcomingCover ? (
                <LocalPhoto
                  src={upcomingCover.src}
                  alt={upcomingCover.alt}
                  ratio={
                    upcoming.poster ? (upcoming.poster.ratio ?? "2/3") : "4/5"
                  }
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              ) : (
                <ImagePlaceholder
                  ratio="4/5"
                  label="Poster nadchodzącego eventu"
                  note="Афиша 4:5, минимум 1200×1500"
                />
              )}
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
          {past.map((e) => {
            const cover = e.poster ?? e.photos?.[0];
            return (
              <Link
                key={e.slug}
                href={`/vibe/${e.slug}`}
                className="group block border border-line"
              >
                {cover ? (
                  <LocalPhoto
                    src={cover.src}
                    alt={cover.alt}
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
                <div className="border-t border-line p-6">
                  <div className="mono text-[10px] opacity-60">{e.date}</div>
                  <div className="display mt-2 text-3xl group-hover:text-frime">
                    {e.title}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed">
                    {e.summary[loc]}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
