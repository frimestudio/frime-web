import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Kicker } from "@/components/ui/Heading";
import { ButtonLink } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { LocalPhoto } from "@/components/ui/LocalPhoto";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { site } from "@/content/site";
import { cosmeticsBrands } from "@/content/cosmetics";

type Props = { params: Promise<{ locale: string }> };

const path = "/kosmetyki";

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cosmetics" });
  const titleByLocale: Record<string, string> = {
    pl: "Kosmetyki · OWAY i London Grooming · FRIME Warszawa Wilcza",
    uk: "Косметика · OWAY і London Grooming · FRIME Варшава Wilcza",
    en: "Cosmetics · OWAY and London Grooming · FRIME Warsaw Wilcza",
  };
  const descByLocale: Record<string, string> = {
    pl: "Pracujemy na włoskim OWAY i brytyjskim London Grooming. Profesjonalna pielęgnacja włosów i brody w studio FRIME na Wilczej 26 w Warszawie. Własna linia FRIME w przygotowaniu.",
    uk: "Працюємо на італійському OWAY і британському London Grooming. Професійний догляд за волоссям і бородою у студії FRIME на Wilczej 26 у Варшаві. Власна лінія FRIME у підготовці.",
    en: "We work with Italian OWAY and British London Grooming. Professional hair and beard care at FRIME studio on Wilcza 26, Warsaw. Own FRIME line in the works.",
  };
  return {
    title: titleByLocale[locale] ?? t("title"),
    description: descByLocale[locale] ?? t("lede"),
    alternates: {
      canonical: path,
      languages: { pl: path, uk: `/uk${path}`, en: `/en${path}` },
    },
  };
}

export default async function CosmeticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cosmetics");
  const loc = locale as "pl" | "uk" | "en";
  const prefix = loc === "pl" ? "" : `/${loc}`;

  const breadcrumbItems = [
    { name: "FRIME", url: `${site.url}${prefix}/` },
    { name: t("title"), url: `${site.url}${prefix}${path}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <section className="border-b border-line">
        <Container className="py-12 md:py-20">
          <Kicker>{t("kicker")}</Kicker>
          <Heading as="h1" size="xl" className="mt-6">
            {t("title")}
          </Heading>
          <p className="mt-8 max-w-3xl text-base leading-relaxed md:text-lg">
            {t("lede")}
          </p>
        </Container>
      </section>

      {cosmeticsBrands.map((brand, i) => {
        const isInverted = i % 2 === 1;
        return (
          <Section
            key={brand.slug}
            tone={isInverted ? "invert" : "default"}
            id={brand.slug}
          >
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "Brand",
                name: brand.name,
                url: brand.url,
                description: brand.description[loc],
              }}
            />
            <div className="grid gap-10 md:grid-cols-12">
              <div className={isInverted ? "md:col-span-5 md:order-2" : "md:col-span-5"}>
                {brand.photo ? (
                  <LocalPhoto
                    src={brand.photo.src}
                    alt={brand.photo.alt}
                    ratio="4/5"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                ) : (
                  <ImagePlaceholder
                    ratio="4/5"
                    label={`${brand.name} · produkty na półce`}
                    note={`Фото бутылочек ${brand.name} в студии или клиента, который держит продукт. 4:5.`}
                  />
                )}
              </div>
              <div className={isInverted ? "md:col-span-7 md:order-1" : "md:col-span-7"}>
                <Heading as="h2" size="lg">
                  {brand.name}
                </Heading>
                <div className="mono mt-4 flex flex-wrap gap-x-8 gap-y-2 text-xs">
                  <span>
                    <span className="opacity-60">
                      {t("brand_country_label")}:{" "}
                    </span>
                    {brand.country}
                  </span>
                  <span>
                    <span className="opacity-60">
                      {t("brand_category_label")}:{" "}
                    </span>
                    {brand.category}
                  </span>
                </div>
                <p className="mt-6 max-w-prose text-base leading-relaxed md:text-lg">
                  {brand.description[loc]}
                </p>
                {brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="mono mt-6 inline-block text-xs underline underline-offset-4"
                  >
                    {t("brand_link_label")} →
                  </a>
                ) : null}
              </div>
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Heading as="h2" size="md">
              {t("buy_title")}
            </Heading>
            <p className="mt-4 max-w-prose text-base leading-relaxed md:text-lg">
              {t("buy_body")}
            </p>
            <div className="mt-6">
              <ButtonLink
                href={site.booking.booksy}
                external
                size="md"
                variant="primary"
              >
                {t("consult_cta")} →
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="frime">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Kicker className="text-frime-ink opacity-80">
              {t("shop_soon_title")}
            </Kicker>
            <Heading as="h2" size="lg" className="mt-4">
              FRIME line · 2027
            </Heading>
            <p className="mt-6 max-w-prose text-base leading-relaxed md:text-lg">
              {t("shop_soon_body")}
            </p>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder
              ratio="3/4"
              label="FRIME line · mockup"
              note="Будущий mockup упаковки FRIME (когда сделаем дизайн). Пока заглушка."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
