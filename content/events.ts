export type FrimeEvent = {
  slug: string;
  title: string;
  partner?: string;
  date: string;
  year: number;
  status: "upcoming" | "past";
  summary: { pl: string; uk: string; en: string };
  /** Plakat/zdjęcie w /public. Główna pokazuje event tylko gdy jest plakat. */
  poster?: { src: string; alt: string; ratio?: "2/3" | "4/5" };
  /** Galeria z wydarzenia. Główna bierze pierwsze 3, strona eventu wszystkie. */
  photos?: { src: string; alt: string }[];
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
      src: "/images/vibe/bvclub-kiosk-popup/poster.jpg",
      alt: "FRIME × BVCLUB × KIOSK Pop-up 06/06 — plakat z manekinami",
    },
    photos: [
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-01.jpg",
        alt: "Klientka z torbą K1OSK w studio FRIME — pop-up 06/06",
      },
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-02.jpg",
        alt: "Gość pop-upu z torbą K1OSK przed studiem FRIME",
      },
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-03.jpg",
        alt: "DJ-set na pop-upie FRIME × BVCLUB × K1OSK",
      },
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-04.jpg",
        alt: "Goście przy popielniczce na tle plakatów pop-upu FRIME",
      },
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-05.jpg",
        alt: "Stylizacja z kozakami croco między wieszakami vintage",
      },
      {
        src: "/images/vibe/bvclub-kiosk-popup/photo-06.jpg",
        alt: "Manekin na banerze POP-UP — instalacja FRIME × BVCLUB × K1OSK",
      },
    ],
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
    photos: [
      {
        src: "/images/vibe/frime-1-urodziny/crowd-blue.jpg",
        alt: "Goście pod studio FRIME w niebieskim świetle zmierzchu",
      },
      {
        src: "/images/vibe/frime-1-urodziny/toast.jpg",
        alt: "Wzniesiony kieliszek na urodzinach FRIME",
      },
      {
        src: "/images/vibe/frime-1-urodziny/guest-glasses.jpg",
        alt: "Uśmiechnięty gość w okularach na FRIME 1 urodziny",
      },
      {
        src: "/images/vibe/frime-1-urodziny/pouring.jpg",
        alt: "Nalewanie szampana — detal na FRIME 1 urodziny",
      },
      {
        src: "/images/vibe/frime-1-urodziny/window-frim.jpg",
        alt: "Odbicie napisu FRIME w witrynie studia",
      },
      {
        src: "/images/vibe/frime-1-urodziny/group-installation.jpg",
        alt: "Goście pod biało-niebieską instalacją w studio FRIME",
      },
      {
        src: "/images/vibe/frime-1-urodziny/dog-night.jpg",
        alt: "Pies wśród gości urodzin FRIME — studio jest dog-friendly",
      },
      {
        src: "/images/vibe/frime-1-urodziny/lounge-wine.jpg",
        alt: "Gość z lampką wina na fotelu w niebieskim świetle studia",
      },
      {
        src: "/images/vibe/frime-1-urodziny/wine-smile.jpg",
        alt: "Uśmiechnięty gość z kieliszkiem na FRIME 1 urodziny",
      },
    ],
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
    poster: {
      src: "/images/vibe/popup-popiloni-maki-yoco/poster.jpg",
      alt: "Plakat pop-upu 13/07 — ceramika, świece, zapachy. Warszawa, Wilcza 26",
      ratio: "4/5",
    },
    photos: [
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-01.jpg",
        alt: "Chart w niebieskiej obroży z gośćmi pop-upu w studio FRIME",
      },
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-02.jpg",
        alt: "Goście wąchają świece Maki przy ladzie pełnej kosmetyków",
      },
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-03.jpg",
        alt: "Gościni przed witryną FRIME przy niebieskim stoliku ze świecami",
      },
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-04.jpg",
        alt: "Ceramika Popiloni z bliska — drobiazgi oglądane w dłoniach",
      },
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-05.jpg",
        alt: "Ceramiczny jamnik w paski na niebieskim tle",
      },
      {
        src: "/images/vibe/popup-popiloni-maki-yoco/photo-06.jpg",
        alt: "Kubki Popiloni z twarzami na niebieskim tle",
      },
    ],
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
