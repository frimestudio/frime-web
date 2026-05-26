export type FrimeEvent = {
  slug: string;
  title: string;
  partner?: string;
  date: string;
  year: number;
  status: "upcoming" | "past";
  summary: { pl: string; uk: string; en: string };
};

export const events: FrimeEvent[] = [
  {
    slug: "bvclub-kiosk-popup",
    title: "FRIME × BVCLUB × KIOSK",
    partner: "BVCLUB × KIOSK",
    date: "2026-06-06",
    year: 2026,
    status: "upcoming",
    summary: {
      pl: "Pop-Up store w studio. Vintage, skóry, DJ-set, FREE DRINKS (0% ALCO). 13:00–20:00, Warszawa, Wilcza 26.",
      uk: "Поп-ап стор в студії. Вінтаж, шкіра, DJ-сет, FREE DRINKS (0% ALCO). 13:00–20:00, Варшава, Wilcza 26.",
      en: "Pop-up store inside the studio. Vintage, leather, DJ set, FREE DRINKS (0% ALCO). 13:00–20:00, Warsaw, Wilcza 26.",
    },
  },
  {
    slug: "frime-1-urodziny",
    title: "FRIME 1 URODZINY",
    date: "2025-04-01",
    year: 2025,
    status: "past",
    summary: {
      pl: "Pierwsza rocznica studia. Plakat ilustrowany, drinki, znajomi, muzyka. Tak świętowaliśmy.",
      uk: "Перша річниця студії. Ілюстрована афіша, дрінки, друзі, музика. Так святкували.",
      en: "Studio's first birthday. Illustrated poster, drinks, friends, music. That's how we celebrated.",
    },
  },
];

export function getUpcomingEvent() {
  return events.find((e) => e.status === "upcoming");
}

export function getPastEvents() {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => b.date.localeCompare(a.date));
}
