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
    title: "FRIME × BVCLUB KIOSK",
    partner: "BVCLUB KIOSK",
    date: "2025-06-06",
    year: 2025,
    status: "past",
    summary: {
      pl: "Pop-up store w studio. Vintage, skóry, DJ-set, drinki. Plakat z manekinami zrobiony specjalnie pod imprezę.",
      uk: "Поп-ап стор в студії. Вінтаж, шкіра, DJ-сет, дрінки. Афіша з манекенами зроблена спеціально під подію.",
      en: "Pop-up store inside the studio. Vintage stuff, leather goods, DJ set, drinks. Poster with mannequins made for the event.",
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
  {
    slug: "next-event",
    title: "Następne wydarzenie wkrótce",
    date: "2026-09-01",
    year: 2026,
    status: "upcoming",
    summary: {
      pl: "Pracujemy nad kolejnym pop-upem. Szczegóły dopinamy z partnerem, ogłoszenie na Instagramie pod koniec lata.",
      uk: "Працюємо над наступним поп-апом. Деталі узгоджуємо з партнером, оголошення в Instagram наприкінці літа.",
      en: "We're working on the next pop-up. Details being locked with the partner, announcement on Instagram by end of summer.",
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
