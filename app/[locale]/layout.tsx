import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Oswald } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import { localBusinessSchema, websiteSchema, organizationSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { CookieBanner } from "@/components/ui/CookieBanner";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  // Wyłączamy auto-generowany "Anton Fallback" bo on łapie też cyrylicę
  // i blokuje cascade do Oswald. Dla cyrylicy chcemy realne glify Oswalda.
  adjustFontFallback: false,
});

// Display fallback dla cyrylicy (Anton nie ma glifów cyrylickich).
// Oswald jest stylistycznie najbliższe z dostępnych w next/font/google z pełnym subsetem cyrillic.
const oswald = Oswald({
  variable: "--font-display-cyrillic",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: "700",
  adjustFontFallback: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} · Studio fryzjerskie Warszawa`,
    template: `%s · ${site.name}`,
  },
  description:
    "Stylowe, młodzieżowe studio fryzjerskie unisex w Warszawie, Wilcza 26. Dog-friendly, 5,0 z 305 opinii na Booksy. Strzyżenia męskie i damskie, mullet, wolf cut, broda, repigmentacja. Pop-upy i kolaboracje.",
  keywords: [
    "studio fryzjerskie warszawa",
    "fryzjer wilcza",
    "fryzjer śródmieście",
    "barber warszawa",
    "salon unisex warszawa",
    "dog friendly fryzjer warszawa",
    "mullet warszawa",
    "wolf cut warszawa",
    "stylowe studio fryzjerskie",
    "młodzieżowy fryzjer warszawa",
    "FRIME",
    "FRIME Wilcza 26",
  ],
  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      uk: "/uk",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "pl_PL",
    alternateLocale: ["uk_UA", "en_US"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${oswald.variable} h-full`}
    >
      <body className={`flex min-h-full flex-col bg-bg text-fg antialiased ${["ru", "uk"].includes(locale) ? "is-cyrillic" : ""}`}>
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer locale={locale as "pl" | "uk" | "en" | "ru" | "de" | "fr" | "es" | "it"} />
          <StickyMobileCTA />
          <CookieBanner />
          <JsonLd data={localBusinessSchema()} />
          <JsonLd data={organizationSchema()} />
          <JsonLd data={websiteSchema()} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
