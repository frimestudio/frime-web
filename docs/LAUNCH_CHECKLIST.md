# Checklist startu

Wersja: 25 maja 2026. Co tu jest, musi być zrobione zanim sajt pójdzie na frime.pl.

Legenda: `[ ]` do zrobienia, `[x]` gotowe, `[~]` w trakcie.

## 1. Domeny

- [ ] Kupić **frime.pl** (główna i jedyna domena). U Nazwa.pl, OVH lub Cloudflare Registrar.
- [ ] DNS frime.pl → Vercel (A record + CNAME, instrukcja w panelu Vercel po dodaniu domeny).
- [ ] Sprawdzić HTTPS aktywne (Vercel daje certyfikat auto).

**Decyzja 2026-05-26:** `frime.studio` nie bierzemy. Tylko `frime.pl`. Powód: polski TLD = bonus do lokalnego SEO w Warszawie, jeden cel kanoniczny dla wyszukiwarek, jeden rachunek za odnowienie. IG-handle `@frime.studio` zostaje bez zmian — to oddzielna sprawa.

**Kto:** ty.

## 2. Repozytorium + Vercel

- [ ] `git init` w `/Users/richpeach/Documents/thefrime`
- [ ] Pierwszy commit (`git add .` + `git commit -m "initial: FRIME website scaffold"`)
- [ ] Stworzyć repo na GitHubie: `frime-studio/web` lub na osobistym koncie
- [ ] `git push -u origin main`
- [ ] Połączyć repo z Vercel: dashboard → New Project → Import
- [ ] Preview deploy działa na `*.vercel.app`
- [ ] Po DNS — podpiąć frime.pl jako production domain

**Kto:** ty (commit + push) + ja (mogę pomóc z konfigiem)

## 3. Google Business Profile

- [ ] Zweryfikować że profil GBP istnieje i jest claimed przez właściciela (nie przez Booksy)
- [ ] Uzupełnić wszystkie pola: nazwa, kategoria (Hair Salon), adres, telefon, godziny, opis, ssrona www → frime.pl
- [ ] Dodać min 10 zdjęć: fasada, wnętrze, każdy z zespołu, kilka prac
- [ ] Włączyć posty GBP (publikować raz na 2 tygodnie)
- [ ] Skopiować adres i godziny z GBP do `content/site.ts` żeby były 1:1 zgodne (consistency = local SEO)

**Kto:** twój znajomy + ty pomagasz.

## 4. Aktywa od znajomego

- [ ] Logo FRIME w **SVG** (mam tylko screen z IG)
- [ ] Logo w wariancie odwróconym (białe na niebieskim) i mononchromatycznym
- [ ] Min 20 zdjęć prac (10 ON, 10 ONA) w wysokiej rozdzielczości
- [ ] Portrety Julii, Saszy, Kary — formaty 3:4 i 1:1, min 1200×1600
- [ ] Zdjęcia wnętrza (3-5 sztuk, w tym fasada od ulicy)
- [ ] Plakaty z dotychczasowych pop-upów (BVCLUB KIOSK, 1 Urodziny)
- [ ] Biografie zespołu: skąd są, ile lat stążą, czym się różnią. 50-80 słów na osobę, ludzkim językiem.
- [ ] IG handle każdego: @julia.handle, @sasza.handle, @kara.handle
- [ ] Telefon i email do publikacji
- [ ] Godziny otwarcia potwierdzone

**Kto:** znajomy.

Po dostarczeniu — wsadzam do `content/`, zamieniam placeholdery na zdjęcia, usuwam żółte boxy.

## 5. Treść marketing-owa

- [ ] Hero photo (1 zdjęcie 4:5, główne)
- [ ] Tekst "o nas" — 150 słów, ludzkim językiem, historia studia
- [ ] 5 opinii klientów z imionami i datami (z Booksy lub Google) z zgodą na publikację
- [ ] FAQ dla /on: 4-6 pytań (np "Czy strzyżecie tylko mężczyzn", "Czy robicie repigmentację", "Czy z psem")
- [ ] FAQ dla /ona: 4-6 pytań
- [ ] Krótka instrukcja jak dojechać (3-4 zdania, lokalnym językiem)

**Kto:** ty + znajomy razem (kawa, 2 godziny).

## 6. Prawne

- [ ] Polityka prywatności RODO. Szablon z [uodo.gov.pl](https://uodo.gov.pl) lub Generator GDPR. Wypełnić: administrator (nazwa firmy, NIP, adres), cele zbierania danych, retencja, prawa, kontakt.
- [ ] Regulamin korzystania ze strony. Jeśli będzie własna rezerwacja w przyszłości — osobny regulamin rezerwacji.
- [ ] Polityka cookies. Jeśli zostaniemy na Plausible bez cookies śledzących — wystarczy krótki tekst, bez baneru zgody. Jeśli włączymy GA4 — pełny baner.
- [ ] Wszystkie 3 teksty dodać do `messages/pl.json` (i przetłumaczyć na UK/EN)

**Kto:** szablon ty, weryfikacja od znajomego prawnika (1 godzina pracy).

## 7. Analityka

- [ ] **Plausible** lub **Umami** account (oba mają free tier, oba bez cookies)
- [ ] Wkleić tracking script do `app/[locale]/layout.tsx`
- [ ] Cele: kliknięcia w "Umów wizytę" (Booksy), kliknięcia w Instagram, scroll-depth na blogu
- [ ] **Google Search Console** — dodać własność, zweryfikować przez DNS lub HTML tag
- [ ] Submit `sitemap.xml` w GSC (`https://frime.pl/sitemap.xml`)
- [ ] **Google Business Profile Insights** — zacząć śledzić od dnia 1

**Kto:** ja (instalacja) + ty (założenie kont).

## 8. Booking / formularze

- [ ] Booksy URL działa we wszystkich CTA (`site.booking.booksy` w `content/site.ts`)
- [ ] WhatsApp link jako fallback — uzupełnić `site.booking.whatsapp` z numerem (format: `https://wa.me/48XXXXXXXXX`)
- [ ] **Resend** account dla formularza waitlist akademii (opcjonalne, można zostawić na potem)
  - [ ] Env `RESEND_API_KEY` w Vercel
  - [ ] Server action w `app/[locale]/akademia/WaitlistForm.tsx` zamiast mocku
  - [ ] Powiadomienie do skrzynki znajomego po każdym zapisie

**Kto:** ja jak będą dane.

## 9. Treści lokalizacyjne UK + EN

Strona już ma trzy języki. Teraz redakcja:

- [ ] PL przeczytane przez znajomego (native check)
- [ ] UK przetłumaczone przez native speakera ukraińskiego (nie auto-translate, gotowe szybkie tłumaczenie w `messages/uk.json` to start)
- [ ] EN przeczytane przez kogoś kto pisze swobodnie po angielsku

**Kto:** ty znajdziesz translatora UK + przeczytasz EN.

## 10. Pre-launch QA

Dzień przed publikacją:

- [ ] Lighthouse na głównej (cel: Performance ≥ 90, SEO 100, A11y ≥ 90)
- [ ] Sprawdzić wszystkie linki (nawigacja, CTA, social, footer)
- [ ] Sprawdzić wszystkie 3 języki (PL, UK, EN) na głównej
- [ ] Mobile: iPhone, Android (chrome dev tools enough)
- [ ] Sprawdzić Open Graph w [opengraph.dev](https://opengraph.dev) (jak wygląda link wstawiony na fb/messenger/slack)
- [ ] Sprawdzić Schema.org w [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Sprawdzić że robots.txt allow all i sitemap działa
- [ ] Nie ma żadnych "PLACEHOLDER" napisów na publicznych stronach (greppnij `PLACEHOLDER` w kodzie)

## 11. Launch day

- [ ] Push na main → automatyczny deploy Vercel
- [ ] Sprawdzić frime.pl działa
- [ ] Submit sitemap w GSC
- [ ] Post na IG ze screenem strony + link
- [ ] Post na TikTok (reel ze scrollowaniem strony)
- [ ] Update bio na IG (link na frime.pl zamiast booksy)
- [ ] Update na GBP — dodać "nowa strona" jako post
- [ ] Powiedzieć kilku znajomym do feedbacku (świeże oczy zauważą bugi)

## 12. Po launchu — pierwsze 7 dni

- [ ] Codziennie sprawdzić Plausible czy ktoś chodzi
- [ ] Codziennie GSC czy nie ma błędów indeksacji
- [ ] Po 3 dniach sprawdzić czy Google zaczął indeksować (site:frime.pl)
- [ ] Po 7 dniach pierwszy raport: co działa, co nie, gdzie ludzie klikają
