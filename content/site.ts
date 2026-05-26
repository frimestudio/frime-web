export const site = {
  name: "FRIME",
  fullName: "FRIME | Wilcza 26",
  tagline: "Studio fryzjerskie · Warszawa Wilcza 26",
  url: "https://frime.pl",
  address: {
    street: "Wilcza 26",
    postal: "00-544",
    city: "Warszawa",
    district: "Śródmieście",
    country: "PL",
    countryName: "Polska",
    lat: 52.2237,
    lng: 21.0186,
  },
  contact: {
    phone: "PLACEHOLDER · numer z Google Business Profile",
    email: "PLACEHOLDER · hello@frime.pl",
  },
  legal: {
    nip: "9512432552",
    legalName: "FRIME",
  },
  positioning: {
    keywords: [
      "stylowe",
      "młodzieżowe",
      "unisex",
      "dog-friendly",
      "studio fryzjerskie",
      "Wilcza 26",
      "Śródmieście",
      "Warszawa",
    ],
    audience:
      "Młodzi dorośli, freelancerzy, kreatywni, mieszkańcy Śródmieścia, klienci unisex, właściciele psów",
    vibe: "Stylowe, młodzieżowe studio fryzjerskie unisex z dog-friendly polityką. Pop-upy, kolaboracje, editorial estetyka.",
    spokenLanguages: ["Polish", "English", "Ukrainian", "Russian"],
  },
  booking: {
    booksy: "https://frimestudio.booksy.com",
    instagram: "https://www.instagram.com/frime.studio/",
    tiktok: "https://www.tiktok.com/@frime.studio",
    whatsapp: "PLACEHOLDER · link wa.me/...",
  },
  hours: {
    note: "Otwarte cały tydzień",
    schedule: [
      { day: "mon", open: "10:00", close: "20:00", closed: false },
      { day: "tue", open: "10:00", close: "20:00", closed: false },
      { day: "wed", open: "10:00", close: "20:00", closed: false },
      { day: "thu", open: "10:00", close: "20:00", closed: false },
      { day: "fri", open: "10:00", close: "20:00", closed: false },
      { day: "sat", open: "11:00", close: "18:00", closed: false },
      { day: "sun", open: "11:00", close: "18:00", closed: false },
    ],
  },
  rating: {
    value: 5.0,
    count: 305,
    source: "Booksy",
  },
};

export type SiteConfig = typeof site;
