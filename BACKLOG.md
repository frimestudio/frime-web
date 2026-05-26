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

### Pierwsze poprawki strony

- [ ] Logo SVG zamiast tekstowego "FRIME" w headerze i footerze
- [ ] Hero photo — prawdziwe zdjęcie zamiast placeholdera
- [ ] Portrety 3 osób z zespołu — prawdziwe zdjęcia
- [ ] Zdjęcia prac w sekcjach /on i /ona (min 4 per sekcja)
- [ ] Plakaty wydarzeń w archiwum /vibe — prawdziwe pliki
- [ ] Zdjęcie wnętrza / fasady w /kontakt
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

- [ ] **Wpis na lokalne katalogi**: panoramafirm.pl, baza-firm.com.pl, najlepszewwarszawie.pl, mapy.cz. Każdy z tym samym adresem co GBP.
- [ ] Wpis o studio do **3-5 polskich blogów lifestyle/beauty** (poprosić o link)
- [ ] Współpraca z lokalnym IG-twórcą beauty (1 wymiana zamiast 1 płatna)
- [ ] Backlinki przez współpracę z BVCLUB KIOSK i innymi partnerami pop-upów

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

## CO NIE ROBIMY (i dlaczego)

- ❌ **Tinder-style swipe na fryzury** — gimmick, nie pomaga konwersji.
- ❌ **AI consultant chatbot** — w 2026 wszyscy mają, banalne, nie buduje brandu studia.
- ❌ **Dark mode** — brutalist editorial żyje światłem. Dark wersja rozmydla brand.
- ❌ **Pop-upy z dyskontem przy wyjściu** — psuje vibe premium studia.
- ❌ **Cookie consent banner** — jeśli zostaniemy na Plausible bez cookies, niepotrzebny.
- ❌ **Booking system własny w MVP** — Booksy działa, znajomy go zna, klienci go znają. Migracja kiedy będzie konkretny problem do rozwiązania.
