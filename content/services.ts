export type Service = {
  slug: string;
  category: "on" | "ona" | "konsultacja";
  name: { pl: string; uk: string; en: string };
  priceFrom: number;
  priceTo?: number;
  durationMin: number;
  durationMax?: number;
  currency: "PLN";
};

export const services: Service[] = [
  {
    slug: "strzyzenie-meskie",
    category: "on",
    name: {
      pl: "Strzyżenie męskie",
      uk: "Чоловіча стрижка",
      en: "Men's haircut",
    },
    priceFrom: 150,
    priceTo: 200,
    durationMin: 60,
    currency: "PLN",
  },
  {
    slug: "strzyzenie-broda",
    category: "on",
    name: {
      pl: "Strzyżenie + broda",
      uk: "Стрижка + борода",
      en: "Haircut + beard",
    },
    priceFrom: 200,
    durationMin: 90,
    currency: "PLN",
  },
  {
    slug: "broda",
    category: "on",
    name: { pl: "Broda", uk: "Борода", en: "Beard trim" },
    priceFrom: 100,
    durationMin: 30,
    currency: "PLN",
  },
  {
    slug: "repigmentacja",
    category: "on",
    name: {
      pl: "Repigmentacja brody / głowy",
      uk: "Репігментація бороди / голови",
      en: "Beard / head repigmentation",
    },
    priceFrom: 80,
    durationMin: 30,
    currency: "PLN",
  },
  {
    slug: "strzyzenie-damskie",
    category: "ona",
    name: {
      pl: "Strzyżenie damskie",
      uk: "Жіноча стрижка",
      en: "Women's haircut",
    },
    priceFrom: 150,
    priceTo: 250,
    durationMin: 60,
    durationMax: 75,
    currency: "PLN",
  },
  {
    slug: "grzywka",
    category: "ona",
    name: { pl: "Grzywka", uk: "Чілка", en: "Fringe trim" },
    priceFrom: 80,
    durationMin: 30,
    currency: "PLN",
  },
  {
    slug: "konsultacja-koloru",
    category: "konsultacja",
    name: {
      pl: "Konsultacja koloru",
      uk: "Консультація по кольору",
      en: "Color consultation",
    },
    priceFrom: 0,
    durationMin: 15,
    currency: "PLN",
  },
  {
    slug: "konsultacja-trwala",
    category: "konsultacja",
    name: {
      pl: "Konsultacja trwałej",
      uk: "Консультація хімії",
      en: "Perm consultation",
    },
    priceFrom: 0,
    durationMin: 15,
    currency: "PLN",
  },
];
