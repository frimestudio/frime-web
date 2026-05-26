import { JsonLd } from "@/components/JsonLd";

export type FAQItem = {
  q: string;
  a: string;
};

type FAQProps = {
  title: string;
  items: FAQItem[];
};

export function FAQ({ title, items }: FAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <div>
      <JsonLd data={schema} />
      <h2 className="display text-3xl md:text-4xl">{title}</h2>
      <dl className="mt-6 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
        {items.map((it, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
              <dt className="text-base font-medium md:text-lg">{it.q}</dt>
              <span className="mono shrink-0 text-sm group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <dd className="mt-3 max-w-prose text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              {it.a}
            </dd>
          </details>
        ))}
      </dl>
    </div>
  );
}
