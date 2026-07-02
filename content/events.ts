export type FrimeEvent = {
  slug: string;
  title: string;
  partner?: string;
  date: string;
  year: number;
  status: "upcoming" | "past";
  summary: { pl: string; uk: string; en: string };
  /** Plakat/zdjęcie w /public. Główna pokazuje event tylko gdy jest plakat. */
  poster?: { src: string; alt: string };
};

export const events: FrimeEvent[] = [
  {
    slug: "bvclub-kiosk-popup",
    title: "FRIME × BVCLUB × KIOSK",
    partner: "BVCLUB × KIOSK",
    date: "2026-06-06",
    year: 2026,
    status: "past",
    poster: {
      src: "/images/vibe/bvclub-kiosk-popup/poster.png",
      alt: "FRIME × BVCLUB × KIOSK Pop-up 06/06 — plakat z manekinami",
    },
    summary: {
      pl: "Pop-Up store w studio. Vintage, skóry, DJ-set, FREE DRINKS (0% ALCO). 13:00–20:00, Warszawa, Wilcza 26.",
      uk: "Поп-ап стор в студії. Вінтаж, шкіра, DJ-сет, FREE DRINKS (0% ALCO). 13:00–20:00, Варшава, Wilcza 26.",
      en: "Pop-up store inside the studio. Vintage, leather, DJ set, FREE DRINKS (0% ALCO). 13:00–20:00, Warsaw, Wilcza 26.",
    },
  },
  {
    slug: "frime-1-urodziny",
    title: "FRIME 1 URODZINY",
    date: "2026-07-18",
    year: 2026,
    status: "upcoming",
    summary: {
      pl: "Pierwsza rocznica studia. Plakat ilustrowany, drinki, znajomi, muzyka. Świętujemy razem.",
      uk: "Перша річниця студії. Ілюстрована афіша, дрінки, друзі, музика. Святкуємо разом.",
      en: "Studio's first birthday. Illustrated poster, drinks, friends, music. Celebrating together.",
    },
  },
  {
    slug: "popup-popiloni-maki-yoco",
    title: "POP-UP × POPILONI × MAKI × YOCO",
    partner: "Popiloni Ceramics × Maki Candles × Yoco Coffee",
    date: "2025-07-13",
    year: 2025,
    status: "past",
    summary: {
      pl: "Pop-up store w studio. Ceramika z Gdańska od Popiloni, świece Maki, kawa Yoco i muzyka od alexnoisbit. 12:00–16:00, Wilcza 26.",
      uk: "Поп-ап стор у студії. Кераміка з Гданська від Popiloni, свічки Maki, кава Yoco і музика від alexnoisbit. 12:00–16:00, Wilcza 26.",
      en: "Pop-up store inside the studio. Ceramics from Gdańsk by Popiloni, Maki candles, Yoco coffee and music by alexnoisbit. 12:00–16:00, Wilcza 26.",
    },
  },
];

// Dziś w formacie YYYY-MM-DD, do porównywania ze stringami daty wydarzeń.
function today(): string {
  return new Date().toISOString().slice(0, 10);
}

// Zwraca najbliższe wydarzenie z przyszłości. Filtruje również po dacie,
// żeby event z przeszłym slug-iem nie pokazywał się jako "następny",
// nawet jeśli zapomnieliśmy przełączyć status na "past".
export function getUpcomingEvent() {
  const now = today();
  return events
    .filter((e) => e.status === "upcoming" && e.date >= now)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
}

// Archiwum: wszystko ze statusem "past" plus wydarzenia "upcoming",
// których data już minęła (na wypadek niezsynchronizowanego statusu).
export function getPastEvents() {
  const now = today();
  return events
    .filter((e) => e.status === "past" || e.date < now)
    .sort((a, b) => b.date.localeCompare(a.date));
}

// Wydarzenie do bloku na głównej: najbliższe przyszłe jeśli ma plakat,
// w przeciwnym razie ostatnie przeszłe z plakatem (żółty placeholder
// na głównej wyglądał źle, więc bez plakatu nie promujemy).
export function getFeaturedEvent():
  | { event: FrimeEvent; kind: "upcoming" | "last" }
  | undefined {
  const upcoming = getUpcomingEvent();
  if (upcoming?.poster) return { event: upcoming, kind: "upcoming" };
  const lastWithPoster = getPastEvents().find((e) => e.poster);
  if (lastWithPoster) return { event: lastWithPoster, kind: "last" };
  if (upcoming) return { event: upcoming, kind: "upcoming" };
  return undefined;
}
