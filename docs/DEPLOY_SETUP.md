# Deploy setup — FRIME

Pierwszy raz na produkcji. Cel: kod z `/Users/richpeach/Documents/thefrime` na **frime.pl** przez Vercel.

Wersja: 26 maja 2026 (rev. 2 — trigger redeploy po zmianie Framework Preset). Zasada: kto jest właścicielem domeny i sklepu, ten jest właścicielem repo i Vercel. Sasha = właściciel. Rich = collaborator z prawami push.

## 0. Decyzje (zafiksowane)

- **Domena:** `frime.pl` (jedyna). `frime.studio` nie bierzemy. `@frime.studio` to handle IG, zostaje.
- **GitHub repo:** `frime-web`, prywatne, na koncie Sashy.
- **Vercel:** projekt na koncie Sashy.
- **Rich (`aeoria` na GitHub):** collaborator z rolą Write. Push z lokalnej maszyny.
- **Tokeny:** żadne cudze hasła ani tokeny GitHub/Vercel nie są przekazywane. Wszystko przez standardowy collaborator-flow.

---

## 1. Sasha — co zrobić w przeglądarce (15 minut)

### 1.1 Stworzyć repo na GitHub

1. Wejść na <https://github.com/new>
2. **Repository name:** `frime-web`
3. **Description:** `Strona studia FRIME, Warszawa Wilcza 26`
4. **Private** (nie Public — kod biznesowy)
5. **NIE zaznaczać** żadnej z opcji "Initialize this repository with":
   - bez README
   - bez .gitignore
   - bez license
   (jeśli zaznaczysz, pierwszy push będzie konfliktował — Rich nie wpchnie kodu bez `git pull --rebase`).
6. Kliknąć **Create repository**
7. Skopiować URL z górnej części strony — będzie wyglądał tak: `https://github.com/TWOJ-USERNAME/frime-web.git`. **Przesłać ten URL Richowi.**

### 1.2 Dodać Richa jako collaborator

1. W tym samym repo: zakładka **Settings** (na górze, prawa strona)
2. Lewy panel: **Collaborators**
3. Kliknąć **Add people**
4. Wpisać `aeoria` → wybrać z listy
5. Rola: **Write** (nie Admin — Write wystarczy do pushy i merge'y; mniej ryzyka)
6. **Add aeoria to this repository**

Rich dostanie maila z zaproszeniem i potwierdzi.

### 1.3 Założenie Vercel + integracja GitHub

Pomijamy jeśli Vercel-konto już połączone z GitHubem.

1. Wejść na <https://vercel.com/dashboard>
2. Jeśli pierwszy raz: **Add New → Project → Continue with GitHub** → autoryzować
3. Vercel poprosi o **Install Vercel for GitHub**:
   - **Only select repositories** (nie All)
   - zaznaczyć tylko `frime-web`
   - **Install**

To daje Vercelowi dostęp tylko do tego jednego repo, nie do całego konta.

### 1.4 Import projektu do Vercel — robimy DOPIERO po pushy Richa

(Patrz sekcja 3 — Sasha zrobi to po informacji od Richa, że kod jest w repo.)

---

## 2. Rich — co zrobi z lokalnej maszyny

(Część automatyczna, Rich potwierdza w czacie z Claude.)

```bash
# 1. Sprawdzić, że git init już wykonany i pierwszy commit istnieje
cd /Users/richpeach/Documents/thefrime
git log --oneline       # powinno pokazać "initial: FRIME website scaffold"

# 2. Podpiąć remote do repo Sashy (URL od niego)
git remote add origin https://github.com/SASHA-USERNAME/frime-web.git

# 3. Push (gh-token Richa załatwi auth automatycznie)
git push -u origin main
```

Po tym kod jest na GitHubie. Rich pisze Sashy: **gotowe, możesz importować w Vercel**.

---

## 3. Sasha — import do Vercel (5 minut)

1. <https://vercel.com/dashboard> → **Add New** → **Project**
2. Lista repo → znaleźć `frime-web` → **Import**
3. Vercel sam wykryje **Next.js**. Domyślne ustawienia są OK:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `next build` (auto)
   - Output Directory: `.next` (auto)
4. **Environment Variables** — na razie nie dodajemy nic. (Jak dojdzie Resend dla formularza akademii lub Supabase — wrócimy.)
5. Kliknąć **Deploy**

Po 1-2 minutach Vercel da link typu `frime-web-xxxxx.vercel.app`. To preview production. Już można przekazać Richowi i obejrzeć.

---

## 4. Domena `frime.pl`

### 4.1 Gdzie kupić

Rekomendacja: **OVH.pl** lub **Nazwa.pl**.

- **OVH.pl**: czysty panel, dobra cena (~25-40 zł pierwszy rok, ~50-70 zł odnowienie), API jeśli kiedyś będzie potrzebne. <https://www.ovh.pl/domeny/>
- **Nazwa.pl**: najpopularniejszy w PL, ten sam zakres cen, panel bardziej "korpo". <https://www.nazwa.pl>
- **Cloudflare Registrar**: dobra opcja przy at-cost cenie, ALE **nie obsługuje TLD `.pl`** — pomijamy.

Wszystko jedno który — DNS i tak ustawimy na Vercel.

### 4.2 Co zarejestrować

- `frime.pl` — 2 lata z góry (gratis SEO sygnał: starsza data wygaśnięcia = większa wiarygodność)
- WHOIS privacy: włączyć (gratis u OVH, płatne u Nazwa — i tak włączamy)

### 4.3 Podpięcie do Vercel

Po deploy Vercela:

1. Vercel → Project `frime-web` → **Settings → Domains**
2. **Add** → wpisać `frime.pl` → Add
3. Vercel pokaże dwa DNS rekordy do skonfigurowania u rejestratora:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```
   (Wartości mogą się różnić — zawsze brać z panelu Vercela, nie z tego pliku.)
4. Otworzyć panel DNS u rejestratora (OVH/Nazwa), znaleźć `frime.pl`, sekcja DNS / strefa DNS:
   - Usunąć domyślne rekordy A i CNAME wskazujące na parkowaną stronę rejestratora
   - Dodać te dwa od Vercela
5. Vercel co minutę sprawdza DNS. Jak zobaczy poprawne rekordy:
   - automatycznie wystawi certyfikat HTTPS (Let's Encrypt, ~5-30 min)
   - przepnie `frime.pl` jako Production domain
6. Test: `https://frime.pl` powinien pokazać stronę.

### 4.4 Co z `www.frime.pl`

Vercel automatycznie zrobi redirect `www.frime.pl` → `frime.pl` (lub odwrotnie, do ustawienia w panelu). Dla SEO bez różnicy, byle był jeden canonical. **Domyślnie zostawiamy `frime.pl` jako kanoniczny** (bez `www`), bo jest krótsze.

---

## 5. Po pierwszym sukcesie

- [ ] Rich potwierdza że `frime.pl` działa i ma HTTPS
- [ ] Sasha dodaje `frime.pl` w bio na Instagramie zamiast Booksy
- [ ] Rich aktualizuje `BACKLOG.md` (markuje "domena kupiona" + "Vercel podpięty")
- [ ] Przechodzimy do reszty checklisty z `docs/LAUNCH_CHECKLIST.md`

---

## Awaria — co jeśli

**"Sasha pushed coś sam, push Richa odrzucony"** — Rich robi `git pull --rebase origin main`, rozwiązuje konflikt jeśli jest, pushuje ponownie.

**"Vercel nie widzi commitów"** — Sasha wchodzi w Vercel → Project → Settings → Git → sprawdza, że repo jest podpięte i branch to `main`. Jeśli był push przed importem, Vercel pokaże ostatni commit dopiero po pierwszym pushy po imporcie. Można wymusić `Redeploy`.

**"DNS się nie propaguje"** — `dig frime.pl` z terminala Richa. Jeśli pokazuje stary IP — czekać do 24h (zwykle 15-60 min). Jeśli po 24h nic — sprawdzić w panelu rejestratora, że rekordy są zapisane (czasami `Save` jest oddzielne).

**"HTTPS nie działa"** — Vercel pokaże w panelu Domain status: "Pending Configuration", "Pending Verification" albo "Valid Configuration". Jeśli zostaje na "Pending" >2h — usunąć domenę z Vercela i dodać ponownie.

---

## Co NIE robimy w tej fazie

- ❌ Nie tworzymy Vercel API tokenów ani GitHub PAT. Standardowy collaborator-flow wystarczy.
- ❌ Nie dajemy Vercelowi dostępu do całego konta GitHub. Tylko jedno repo `frime-web`.
- ❌ Nie kupujemy `frime.studio` ani innych domen "na zapas". Jedna domena, jeden canonical.
- ❌ Nie konfigurujemy Cloudflare przed Vercelem jako proxy. Vercel ma swój CDN i SSL. Cloudflare zostawiamy ewentualnie na potem (DDoS protection, edge functions).
