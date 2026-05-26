export type LocaleKey =
  | "pl"
  | "uk"
  | "en"
  | "ru"
  | "de"
  | "fr"
  | "es"
  | "it";

export const locales: LocaleKey[] = [
  "pl",
  "uk",
  "en",
  "ru",
  "de",
  "fr",
  "es",
  "it",
];

export function pick<T>(
  locale: string,
  dict: Partial<Record<LocaleKey, T>>,
): T {
  const value = (dict as Record<string, T | undefined>)[locale];
  if (value !== undefined) return value;
  return dict.en as T;
}
