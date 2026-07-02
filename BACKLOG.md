# Backlog FRIME

Co robimy teraz, co następne, co później. Aktualizować raz w tygodniu.

Notacja:
- `[ ]` do zrobienia
- `[x]` zrobione
- `[~]` w trakcie
- `[?]` decyzja czeka na ciebie / znajomego

Szczegóły uruchomienia są w [`docs/LAUNCH_CHECKLIST.md`](docs/LAUNCH_CHECKLIST.md).
Plan kontentu na rok jest w [`docs/CONTENT_PLAN_2026.md`](docs/CONTENT_PLAN_2026.md).

---

## TERAZ (do startu, czerwiec 2026)

### Pre-launch

- [x] Scaffold projektu (Next 16 + Tailwind v4 + next-intl + 3 języki)
- [x] Strony statyczne dla wszystkich sekcji z placeholderami
- [x] Schema.org HairSalon + Person + Event
- [x] Sitemap + robots z hreflang
- [x] Mobile responsive + sticky CTA
- [x] Build production przechodzi bez błędów
- [ ] **Domena frime.pl kupiona**, DNS → Vercel (frime.studio nie bierzemy, decyzja 2026-05-26)
- [ ] **Pierwszy commit + push na GitHub + Vercel project**
- [ ] **Treść od znajomego** (logo SVG, zdjęcia, bio, godziny, telefon)
- [ ] **Google Business Profile** uzupełniony i zsynchronizowany ze sajtem
- [ ] **Polityka prywatności + regulamin + cookies** (templaty RODO)
- [ ] **Plausible/Umami** dodany jako analityka
- [ ] **Google Search Console** weryfikacja + sitemap
- [ ] Pre-launch QA (Lighthouse, linki, OG, schema)
- [ ] **Launch** + post w IG/TT + powiadomienie znajomych

### Tłumaczenia

- [ ] `messages/it.json` — teraz to kopia `en.json` (zaślepka żeby build przeszedł). Przetłumaczyć na włoski.
- [ ] `messages/de.json`, `messages/es.json`, `messages/fr.json` — sprawdzić native speakerem, są maszynowe.
- [ ] `messages/ru.json` — sprawdzić native, dla diaspory w Warszawie ważne.

### Pierwsze poprawki strony

- [ ] Logo SVG zamiast tekstowego "FRIME" w headerze i footerze
- [x] Hero photo — prawdziwe zdjęcie zamiast placeholdera (DSCF2451, fotel + neon)
- [ ] Portrety 3 osób z zespołu — prawdziwe zdjęcia (NIE wstawiałem zdjęć z DR1/sesji, bo nie wiadomo kto na nich = mistrz vs gość. Trzeba podpisanych portretów Julii / Saszy / Kary)
- [x] Zdjęcia prac w sekcjach /on i /ona (4 per sekcja, mix Bausch + Michal)
- [~] Plakaty wydarzeń w archiwum /vibe — `frime-1-urodziny` ma fotorelację (10 zdjęć z DR1). `bvclub-kiosk-popup` — nadal placeholder, trzeba oryginał plakatu z IG.
- [ ] Zdjęcie wnętrza / fasady w /kontakt — brak. Aktualnie nawet dla /o-nas dałem kadr z baru (też z DR1), to przybliżenie. Potrzeba dziennego shotu wnętrza + fasady ul. Wilcza 26.
- [ ] 3 prawdziwe cytaty klientów na głównej (z imionami i datami)
- [ ] FAQ block w /on (4-6 pytań) + schema FAQPage
- [ ] FAQ block w /ona (4-6 pytań) + schema FAQPage

---

## NASTĘPNE (po starcie, lipiec-wrzesień 2026)

### Treść — strony serwisowe (+1 / tydzień)

- [ ] `/on/mullet` — long-tail "mullet warszawa"
- [ ] `/on/repigmentacja` — niska konkurencja, własna nisza
- [ ] `/on/fade` — "fade warszawa"
- [ ] `/ona/krotkie-fryzury` — "krótkie fryzury damskie warszawa"
- [ ] `/ona/grzywka` — "grzywka warszawa"
- [ ] `/ona/koloryzacja-konsultacja` — "konsultacja koloru warszawa"
- [ ] `/ona/bob` — "bob warszawa"
- [ ] `/ona/balayage` — "balayage warszawa śródmieście", "airtouch warszawa". Wysokomarżowe frazy damskie, klientka wpisuje konkretną usługę, nie "fryzjer" (wniosek z doc Google Ads & SEO, 07.2026)

Każda: 500 słów real content, 2-3 zdjęcia, FAQ, cena, CTA na Booksy. Pisane jak człowiek.

### Treść — blog (1 post / tydzień, plan w CONTENT_PLAN_2026.md)

- [ ] "Mullet w Warszawie 2026. Gid przez warianty"
- [ ] "Czego się spodziewać na pierwszej wizycie"
- [ ] "Pop-up w salonie. Jak zrobiliśmy BVCLUB KIOSK"
- [ ] "Repigmentacja brody. Co to i kiedy ma sens"
- [ ] "Krótkie cięcia damskie na lato 2026"
- [ ] "Fade vs taper. Czym się różnią"
- [ ] "Z psem do fryzjera. Jak to wygląda u nas"
- [ ] "Pielęgnacja brody w warszawskim klimacie"
- [ ] "Grzywka. Kiedy się decydować, kiedy nie"

### Funkcje

- [ ] Działający formularz akademii (Resend integration)
- [ ] Embed mapy na /kontakt (OpenStreetMap, bez cookies)
- [ ] Lightbox / galeria zdjęć w portfolio członków zespołu
- [ ] Sticky "share to IG story" na blogu i wydarzeniach
- [ ] Dynamiczne OG-obrazki (next/og) dla każdej strony

### Marketing / SEO

- [ ] **Wpis na lokalne katalogi**: panoramafirm.pl (pf.pl), pkt.pl, zumi.pl, cylex.pl, misterwhat.pl, biznesfinder.pl, targeo.pl, aleo.com, baza-firm.com.pl, najlepszewwarszawie.pl, mapy.cz. Każdy z identycznym NAP jak GBP (darmowe pakiety). Uwaga: w 48h zadzwoni handlowiec z pakietem premium za 1500 zł/rok — odmawiać, darmowy wpis wystarczy.
- [ ] Wpis o studio do **3-5 polskich blogów lifestyle/beauty** (poprosić o link)
- [ ] Współpraca z lokalnym IG-twórcą beauty (1 wymiana zamiast 1 płatna)
- [ ] Backlinki przez współpracę z BVCLUB KIOSK i innymi partnerami pop-upów

### Offsite dla Saszy (z doc "Google Ads & SEO", 07.2026 — rzeczy poza kodem strony)

- [ ] **GBP co tydzień**: krótki wpis ze zdjęciem metamorfozy (Google Posts). Największa darmowa dźwignia lokalna.
- [ ] **Opinie Google**: QR do profilu GBP przy kasie i na lustrach + automatyczny SMS w Booksy ~2h po wizycie z linkiem do opinii. Cel: 15-20 nowych opinii miesięcznie.
- [ ] **NAP audit**: Booksy, Instagram, GBP i strona — adres Wilcza 26 i telefon zapisane identycznie co do znaku.
- [ ] **Google Ads start** (1000-1500 PLN/mies na klik): kampania search na frazy usługowe (balayage/koloryzacja/strzyżenie męskie centrum) lądująca na podstrony usług + kampania w Mapach na "fryzjer blisko mnie". Wykluczyć frazy "tani", "promocja" — pozycjonujemy premium.
- [ ] **Artykuł sponsorowany** na warszawskim portalu lokalnym z linkiem do frime.pl.
- [ ] **KPI**: co tydzień kliknięcia "Zadzwoń"/"Wyznacz trasę" w GBP; co miesiąc rezerwacje Booksy ze źródła Google + przyrost opinii.

---

## PÓŹNIEJ (Q4 2026 i dalej)

### Treść — strony lokalne (dzielnice)

- [ ] `/lokalizacje/srodmiescie-poludniowe`
- [ ] `/lokalizacje/mokotow`
- [ ] `/lokalizacje/powisle`
- [ ] `/lokalizacje/wola`
- [ ] `/lokalizacje/ochota`

Każda jako prawdziwy gid (jak dojechać, ile czasu, parking, znane miejsca, typowy klient z tej dzielnicy). Nie szablon.

### FRIME shop (kosmetyki własnej linii, plan 2027)

Strona `/kosmetyki` już istnieje jako info hub o markach, których używamy (OWAY, London Grooming). Pod własną linię FRIME przygotowane jest miejsce, ale samego shopu jeszcze nie ma. Po decyzji o starcie produkcji:

- [ ] Rozszerzyć `content/cosmetics.ts` o pole `products: Product[]` dla każdej marki
- [ ] Strony pod brand: `/kosmetyki/[brand]` i pod produkt: `/kosmetyki/[brand]/[slug]`
- [ ] Schema.org `Product` + `Offer` + `Brand` na każdej karcie produktu
- [ ] Koszyk, sesja, persistence (Supabase albo localStorage MVP)
- [ ] Checkout: Stripe albo Przelewy24/PayU (PL standard)
- [ ] Email-confirmation przez Resend
- [ ] Faktura: integracja z fakturownia.pl albo wfirma.pl
- [ ] Wysyłka: InPost paczkomaty (PL standard, API jest)
- [ ] Polityka zwrotów i regulamin sklepu osobno od strony
- [ ] Cookies: jeśli dojdzie koszyk z sesją, klasyczny baner zgody wraca

Cel: 4-6 pozycji własnej linii (szampon, kondycjoner, pomada, olejek do brody, krem do stylizacji). Produkcja w Polsce, jakość na poziomie OWAY.

### Funkcje produktowe

- [ ] **Własna rezerwacja na Supabase** (zamiast Booksy) — kontrola danych, brak prowizji, własna baza klientów
  - [ ] Schema bazy (klienci, mastera, sloty, zarezerwowania, usługi)
  - [ ] UI bookingu (kalendarz, wybór mastera, wybór usługi)
  - [ ] Email confirmations (Resend)
  - [ ] SMS reminders (Twilio/Vonage)
  - [ ] Admin panel dla zespołu
- [ ] **Sklep online** dla produktów do pielęgnacji (jeśli zdecyduje znajomy)
- [ ] **Gift cards / vouchery** — strona zakupu + generowanie kodów
- [ ] **CRM klienta** — historia wizyt, ulubiony master, preferencje
- [ ] **Loyalty program** — co 5 wizyta gratis konsultacja, etc.

### Treść — formaty rozszerzone

- [ ] **Akademia FRIME** — pełny moduł (po decyzji znajomego o programie)
  - [ ] Lista kursów z cenami i terminami
  - [ ] Indywidualne strony kursów ze Schema Course
  - [ ] Formularz aplikacji
  - [ ] Galeria absolwentów
- [ ] **Wywiady z zespołem** jako osobna seria (3-4 długie teksty, po jednym na osobę)
- [ ] **Newsletter** — comiesięczny mail z nowościami, ofertami, blogiem (przez Resend lub Buttondown)
- [ ] **Podcast / video series** — rozmowy o branży barbierskiej w Polsce (ambitne, opcjonalne)

### Techniczne

- [ ] CMS dla bloga (Sanity lub Payload) — żeby znajomy mógł sam pisać bez Markdowna
- [ ] **Multi-tenant**: jeśli FRIME otworzy drugą lokalizację (np Mokotów), już dziś rozważyć strukturę typu `/wilcza` i `/[druga-lokalizacja]`
- [ ] Audyt dostępności WCAG AA przez kogoś z doświadczeniem
- [ ] PWA z installable manifest (low priority dla strony usługowej, ale fajne dla returning klientów)

---

## DECYZJE CZEKAJĄCE

- [?] **Akademia: kiedy startujemy?** Decyduje znajomy. Wpływa na priorytet bloga i strony /akademia.
- [?] **Sklep online z produktami:** czy w ogóle? Dodaje sporo pracy i kosztów.
- [?] **Druga lokalizacja:** plany na 2027? Wpływa na architekturę URL.
- [?] **Newsletter:** czy ma sens przy 949 followersach IG? Może później, gdy będzie ich 5k+.
- [?] **Język rosyjski:** dodajemy czy nie? Diaspora w Warszawie duża. Decyzja na bazie analizy ruchu po 3 miesiącach.

---

## ASSETY DO DOROBIENIA (lista konkretna od Claude'a, 2026-05-26)

Po obrobieniu paczki `~/Downloads/FRIME` (3 foldery: DR1, Bausch x3+all, Michal x3+all) część slotów na stronie nadal jest pustych. To są **konkretne kadry do dosnięcia / wybrania z archiwum znajomego**, nie ogólnik.

### Wysoki priorytet (bloki na żywych stronach z placeholderem)

- [ ] **Portrety zespołu** — 3 sztuki, 3:4, jednolite tło. Konkretnie:
  - Julia · 1200×1600, twarz + ramiona, miękkie światło dzienne
  - Sasza · ten sam zestaw parametrów, ta sama lokalizacja
  - Kara · jw.
  - **Dlaczego nie wziąłem z DR1:** na DR1 są mistrzowie + goście razem, nie wiem kto jest kim. Lepiej zero niż błąd.
- [ ] **Hero / cover dla `/team/[slug]`** — 4:5 portret każdego mistrza przy pracy (z klientem albo z narzędziami). 1200×1500.
- [ ] **Fasada studia + wnętrze (dzienne światło)** — pod `/kontakt`, `/o-nas`, hero w `/lokalizacje`. Konkretne kadry:
  - Wejście Wilcza 26 z fasadą i logo · 16:9, 2400×1350
  - Wnętrze szerokie (z lustrami i fotelami) · 4:5, 1600×2000
  - Detal narzędzi (nożyczki, maszynki, produkty na stanowisku) · 1:1, 1200×1200
  - **Dlaczego nie wziąłem z DR1:** kadry z DR są wieczorne, niebieskie, atmosferyczne — fajne pod `/vibe`, nie pod „normalne studio".
- [ ] **Plakat `BVCLUB KIOSK pop-up`** — oryginał z IG, jest gdzieś u znajomego. 4:5 (kolaż z manekinami, ten z ich relacji).
- [ ] **Galeria pod `vibe/bvclub-kiosk-popup`** — 6 kadrów 1:1 z popupu (vintage, skóry, DJ, drinki, ludzie).

### Średni priorytet (uzupełnienie portfolio)

- [ ] **Konkretnie męski mullet** — Bausch model 2 ma jego damską wersję. Pod `/on/mullet` „męski mullet 4 warianty" nadal placeholder, bo z sesji nie mamy wyraźnego classic / fade / modern shag / kręconego mulleta na męskim modelu. Dosnąć z klienta studia (4 kadry, 3:4).
- [ ] **`/on/repigmentacja`** — 3 placeholdery (hero, before/after, narzędzia/proces). Potrzebny zestaw before/after pigmentacji brody albo linii włosów. Trudny temat — modele muszą zgodzić.
- [ ] **`/ona/krotkie-fryzury` „Bob 4 warianty"** — w archiwum mamy pixie + wolf cut + grzywkę, ale nie ma boba (classic / z grzywką / asymetryczny / choppy). Dosnąć osobną mini-sesję, najlepiej z klientką po cięciu.
- [ ] **`/ona/grzywka`** (jeszcze nie ma routingu, ale w backlogu) — Michal model 2 idealnie podchodzi, kadry już są (`grzywka-1..4`). Plan: użyć gotowych, dorobić tylko stronę.

### Niski priorytet (sezonowe / przyszłe)

- [ ] **Hero blog post `Z psem do fryzjera`** — mamy `details/jack-russell.jpg` (Jack Russell z DR1, niebieski neon). Idealne jak będziemy pisać tekst o pets allowed.
- [ ] **`/kosmetyki`** — fotki produktów OWAY / London Grooming na półce studia. 1:1, 1200×1200, naturalne światło.
- [ ] **Headshoty 4×6 z lokalnych dzielnic** dla `/lokalizacje/[dzielnica]` (Powiśle, Mokotów itp.) — opcjonalnie, ładne tło ulicy + neon FRIME.

### Co już jest zrobione (referencja na przyszłość)

Mapa wgranych assetów leży w `public/images/`:
- `hero/hero-chair.jpg` — DSCF2451, hero główny
- `vibe/frime-1-urodziny/` — 10 kadrów z 1 urodzin
- `on/portfolio/curly-tank-1..4`, `curls-mid-1..3` — męskie editorial
- `ona/portfolio/pixie-1..5`, `mullet-1..4`, `grzywka-1..4` — damskie editorial
- `details/jack-russell.jpg` — pets allowed

Razem 36 plików, ~11 MB. Wszystko zresize'owane do ~1500-1800 px po dłuższym boku, JPEG quality 78. Next/Image dorobi WebP/AVIF runtime.

### Kadry świadomie odrzucone (i dlaczego)

- Wszystkie kadry „bubble wrap" z sesji Michal (model 1 i 3) — zbyt eksperymentalne, nie pasują pod sloty marketingowe/usługowe.
- Sesja Michal model 1 (mężczyzna z buzz cutem i tatuażami na klatce) — bardzo specyficzny styl, nie reprezentatywny dla „średniego klienta", mógłby zawęzić target.
- DSCF2455 (drugie ujęcie fotela z DR1) — duplikat hero, niepotrzebny.

---

## CO NIE ROBIMY (i dlaczego)

- ❌ **Tinder-style swipe na fryzury** — gimmick, nie pomaga konwersji.
- ❌ **AI consultant chatbot** — w 2026 wszyscy mają, banalne, nie buduje brandu studia.
- ❌ **Dark mode** — brutalist editorial żyje światłem. Dark wersja rozmydla brand.
- ❌ **Pop-upy z dyskontem przy wyjściu** — psuje vibe premium studia.
- ❌ **Cookie consent banner** — jeśli zostaniemy na Plausible bez cookies, niepotrzebny.
- ❌ **Booking system własny w MVP** — Booksy działa, znajomy go zna, klienci go znają. Migracja kiedy będzie konkretny problem do rozwiązania.
