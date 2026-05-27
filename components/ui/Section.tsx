import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bare?: boolean;
  id?: string;
  tone?: "default" | "invert" | "frime";
};

export function Section({
  children,
  className,
  bare,
  id,
  tone = "default",
}: SectionProps) {
  const toneClasses =
    tone === "invert"
      ? "bg-fg text-bg"
      : tone === "frime"
      ? "bg-frime text-frime-ink"
      : "";

  return (
    <section
      id={id}
      className={cn(
        "border-t border-line py-16 md:py-24",
        toneClasses,
        className,
      )}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}
