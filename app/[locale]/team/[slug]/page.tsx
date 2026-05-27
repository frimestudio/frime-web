import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink, ButtonInternalLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Placeholder } from "@/components/ui/Placeholder";
import { Container } from "@/components/ui/Container";
import { team, teamSlugs } from "@/content/team";
import { site } from "@/content/site";
import { personSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { pick } from "@/lib/i18n-pick";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return teamSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  if (!teamSlugs.includes(slug)) return {};
  const name = t(`members.${slug}.name` as never);
  return { title: `${name} · TEAM` };
}

export default async function TeamMemberPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const t = await getTranslations("team");
  const name = t(`members.${slug}.name` as never);
  const role = t(`members.${slug}.role` as never);
  const bio = t(`members.${slug}.bio` as never);

  return (
    <>
      <JsonLd data={personSchema(member, name, role)} />
      <section className="border-b border-line">
        <Container className="grid gap-10 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-7">
            <Kicker>TEAM · {site.name}</Kicker>
            <Heading as="h1" size="xl" className="mt-6">
              {name}
            </Heading>
            <div className="mono mt-4 text-xs opacity-70">{role}</div>
            <p className="mt-8 max-w-2xl text-base leading-relaxed">{bio}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink
                href={`${site.booking.booksy}?staff=${slug}`}
                external
                size="lg"
                variant="primary"
              >
                {t("book_with")} {name}
              </ButtonLink>
              {member.instagramHandle ? (
                <Placeholder
                  label={`Instagram: ${member.instagramHandle}`}
                  note="Заменить на реальный @handle и подключить как ссылку"
                  className="text-xs"
                />
              ) : null}
            </div>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio="3/4"
              label={`Portrait · ${name}`}
              note={`Главный портрет ${name}, 3:4, минимум 1200×1600`}
            />
          </div>
        </Container>
      </section>

      <Section>
        <Heading as="h2" size="md">
          {pick(locale, { pl: "Wybrane prace", uk: "Вибрані роботи", en: "Selected work", ru: "Избранные работы", de: "Ausgewählte Arbeiten", fr: "Sélection de travaux", es: "Trabajos seleccionados", it: "Lavori selezionati" })}
        </Heading>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ImagePlaceholder
              key={i}
              ratio="4/5"
              label={`Work #${i}`}
              note={`Работа ${name} #${i}. 4:5. Можно brать с её/его IG.`}
            />
          ))}
        </div>
      </Section>

      <Section tone="invert">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <Heading as="h3" size="md">
            {pick(locale, { pl: "Wracaj do reszty zespołu", uk: "Поверніться до команди", en: "Back to the team", ru: "Назад к команде", de: "Zurück zum Team", fr: "Retour à l'équipe", es: "Volver al equipo", it: "Torna al team" })}
          </Heading>
          <ButtonInternalLink
            href="/team"
            variant="ghost"
            size="md"
            className="border-bg text-bg"
          >
            TEAM →
          </ButtonInternalLink>
        </div>
      </Section>
    </>
  );
}
