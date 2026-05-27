import { getTranslations } from "next-intl/server";
import { ButtonInternalLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default async function NotFound() {
  const t = await getTranslations("common");

  return (
    <Container className="flex flex-col items-start gap-6 py-32">
      <div className="display text-[clamp(4rem,12vw,12rem)] leading-none">
        404
      </div>
      <h1 className="text-2xl">{t("not_found_title")}</h1>
      <p className="max-w-md text-base text-muted">
        {t("not_found_desc")}
      </p>
      <ButtonInternalLink href="/" variant="primary" size="md">
        {t("back_home")}
      </ButtonInternalLink>
    </Container>
  );
}
