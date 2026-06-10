import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Wykluczamy też pliki generowane przez App Router metadata route:
  // icon, apple-icon, opengraph-image, sitemap.xml, robots.txt, manifest.
  // Bez tego next-intl próbuje je lokalizować i zwraca 404.
  matcher: [
    "/((?!api|_next|_vercel|icon|apple-icon|opengraph-image|twitter-image|manifest|.*\\..*).*)",
  ],
};
