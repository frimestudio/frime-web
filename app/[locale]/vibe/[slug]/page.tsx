import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { ButtonInternalLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { events } from "@/content/events";
import { eventSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { pick, type LocaleKey } from "@/lib/i18n-pick";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = events.find((e) => e.slug === slug);
  if (!event) return {};
  return { title: `${event.title} · VIBE` };
}

export default async function VibeEventPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const event = events.find((e) => e.slug === slug);
  if (!event) notFound();
  const loc = locale as "pl" | "uk" | "en";
  const tVibe = await getTranslations("vibe_content");
  const longBody = tVibe(`${slug}.body` as never) as string;

  return (
    <>
      <JsonLd data={eventSchema(slug)} />
      <section className="border-b border-line">
        <Container className="grid gap-10 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <Kicker>
              VIBE · {event.date}
              {event.partner ? ` · ${event.partner}` : ""}
            </Kicker>
            <Heading as="h1" size="xl" className="mt-6">
              {event.title}
            </Heading>
            <p className="mt-8 max-w-2xl text-base leading-relaxed">
              {event.summary[loc]}
            </p>
          </div>
          <div className="md:col-span-5">
            {/* Hero: plakat > tort urodzinowy (legacy) > placeholder */}
            {event.poster ? (
              <LocalPhoto
                src={event.poster.src}
                alt={event.poster.alt}
                ratio={event.poster.ratio ?? "2/3"}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            ) : slug === "frime-1-urodziny" ? (
              <LocalPhoto
                src="/images/vibe/frime-1-urodziny/cake.jpg"
                alt="Niebieski tort FRIME z napisem — pierwsze urodziny studia"
                ratio="4/5"
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            ) : (
              <ImagePlaceholder
                ratio="4/5"
                label={`Poster · ${event.title}`}
                note={`Главная афиша. 4:5. Лучше всего оригинал плаката из IG.`}
              />
            )}
          </div>
        </Container>
      </section>

      <Section>
        <Heading as="h2" size="md">
          {pick(loc, { pl: "Galeria", uk: "Галерея", en: "Gallery", ru: "Галерея", de: "Galerie", fr: "Galerie", es: "Galería", it: "Galleria" })}
        </Heading>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Galeria z content/events.ts; placeholdery dopóki brak zdjęć */}
          {event.photos?.length
            ? event.photos.map((p) => (
                <LocalPhoto
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  ratio="1/1"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
              ))
            : [1, 2, 3, 4, 5, 6].map((i) => (
                <ImagePlaceholder
                  key={i}
                  ratio="1/1"
                  label={`Photo #${i}`}
                  note={`Фото с ${event.title}. 1:1 для сетки.`}
                />
              ))}
        </div>
        <div className="mt-12 max-w-3xl">
          <p className="text-base leading-relaxed md:text-lg">{longBody}</p>
        </div>
      </Section>

      <Section tone="invert">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Heading as="h3" size="md">
            {pick(loc, { pl: "Wszystkie wydarzenia", uk: "Усі події", en: "All events", ru: "Все события", de: "Alle Events", fr: "Tous les événements", es: "Todos los eventos", it: "Tutti gli eventi" })}
          </Heading>
          <ButtonInternalLink
            href="/vibe"
            variant="ghost"
            size="md"
            className="border-bg text-bg"
          >
            VIBE →
          </ButtonInternalLink>
        </div>
      </Section>
    </>
  );
}
