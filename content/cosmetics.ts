export type CosmeticsBrand = {
  slug: string;
  name: string;
  country: string;
  category: string;
  url?: string;
  description: { pl: string; uk: string; en: string };
  /** Zdjęcie sekcji marki w /public. Brak = ImagePlaceholder. */
  photo?: { src: string; alt: string };
};

export const cosmeticsBrands: CosmeticsBrand[] = [
  {
    slug: "oway",
    name: "OWAY",
    country: "Włochy",
    category: "Pielęgnacja włosów, koloryzacja",
    url: "https://oway.com/",
    photo: {
      src: "/images/kosmetyki/kosmetyki.jpg",
      alt: "Półka w studio FRIME — niebieskie butelki OWAY next day cream i czarne produkty London Grooming",
    },
    description: {
      pl: "Włoska linia profesjonalnej kosmetyki organicznej. Produkty pakowane w szkło i aluminium zamiast plastiku, składniki biodynamiczne, niewielki ślad węglowy w produkcji. Używamy OWAY do mycia, kolorów i pielęgnacji włosów. Sprawdza się zwłaszcza przy wrażliwej skórze głowy i farbowanych długich włosach.",
      uk: "Італійська лінія професійної органічної косметики. Продукти у скляній і алюмінієвій упаковці замість пластику, біодинамічні компоненти, невеликий вуглецевий слід. Користуємося OWAY для миття, фарбування і догляду за волоссям. Особливо добре працює на чутливій шкірі голови та фарбованому довгому волоссі.",
      en: "Italian professional organic hair care line. Products packaged in glass and aluminum instead of plastic, biodynamic ingredients, low carbon footprint in production. We use OWAY for washes, colors and treatments. Works especially well with sensitive scalps and colored long hair.",
    },
  },
  {
    slug: "london-grooming",
    name: "London Grooming",
    country: "Wielka Brytania",
    category: "Pielęgnacja męska, stylizacja",
    url: "https://www.londongrooming.com/",
    photo: {
      src: "/images/hero/studio-01.jpg",
      alt: "Produkty London Grooming na stalowych półkach przy lodówce w studio FRIME",
    },
    description: {
      pl: "Brytyjska linia męskiej pielęgnacji. Pomady, kremy do stylizacji, olejki i balsamy do brody. Klasyczna estetyka, mocne formuły, długi czas trzymania. Robimy nimi finisz większości męskich strzyżeń, szczególnie z fade'em i mocną grzywką.",
      uk: "Британська лінія чоловічого догляду. Помади, креми для укладки, олії і бальзами для бороди. Класична естетика, потужні формули, тривале тримання. Робимо ними фініш більшості чоловічих стрижок, особливо з фейдом і виразною чілкою.",
      en: "British men's grooming line. Pomades, styling creams, beard oils and balms. Classic aesthetic, strong formulas, long hold. We use them to finish most men's cuts, especially fades and strong fringes.",
    },
  },
];
