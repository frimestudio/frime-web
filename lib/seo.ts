import { site } from "@/content/site";
import { services } from "@/content/services";
import { events } from "@/content/events";
import type { TeamMember } from "@/content/team";

const dayMap: Record<string, string> = {
  mon: "Monday",
  tue: "Tuesday",
  wed: "Wednesday",
  thu: "Thursday",
  fri: "Friday",
  sat: "Saturday",
  sun: "Sunday",
};

export function localBusinessSchema() {
  const openingHours = site.hours.schedule
    .filter((d) => !d.closed && d.open && d.close)
    .map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[d.day],
      opens: d.open,
      closes: d.close,
    }));

  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "BeautySalon", "LocalBusiness"],
    "@id": `${site.url}#business`,
    name: site.fullName,
    alternateName: ["FRIME", "FRIME Studio", "Studio FRIME"],
    description:
      "Stylowe, młodzieżowe studio fryzjerskie unisex w Warszawie na Wilczej 26. Strzyżenia męskie i damskie, mullety, wolf cuts, brody, repigmentacja. Dog-friendly, konsultacje koloru gratis, pop-upy i kolaboracje.",
    image: `${site.url}/og.png`,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    taxID: site.legal.nip,
    vatID: `PL${site.legal.nip}`,
    priceRange: "80–250 zł",
    paymentAccepted: ["Cash", "Credit Card", "BLIK"],
    currenciesAccepted: "PLN",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressRegion: site.address.district,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    openingHoursSpecification: openingHours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      site.booking.instagram,
      site.booking.tiktok,
      site.booking.booksy,
    ],
    availableLanguage: site.positioning.spokenLanguages,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Dog friendly",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair accessible parking nearby",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Unisex",
        value: true,
      },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Young adults, creatives, unisex clients, dog owners",
    },
    knowsAbout: [
      "mullet",
      "wolf cut",
      "shag",
      "fade",
      "broda",
      "repigmentacja",
      "koloryzacja",
      "trwała",
      "krótkie fryzury damskie",
      "męskie strzyżenia",
    ],
    keywords: site.positioning.keywords.join(", "),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name.pl,
      },
      price: s.priceFrom,
      priceCurrency: s.currency,
    })),
    slogan: "It doesn't matter who you are, everyone needs a haircut.",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.legal.legalName,
    legalName: site.legal.legalName,
    url: site.url,
    logo: `${site.url}/logo.png`,
    taxID: site.legal.nip,
    vatID: `PL${site.legal.nip}`,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postal,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    sameAs: [
      site.booking.instagram,
      site.booking.tiktok,
      site.booking.booksy,
    ],
  };
}

export function personSchema(member: TeamMember, name: string, role: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle: role,
    worksFor: {
      "@type": "HairSalon",
      "@id": `${site.url}#business`,
      name: site.fullName,
    },
    url: `${site.url}/team/${member.slug}`,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  category?: string;
  priceMin: number;
  priceMax?: number;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.category ?? "Haircut",
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "HairSalon",
      "@id": `${site.url}#business`,
      name: site.fullName,
    },
    areaServed: {
      "@type": "City",
      name: site.address.city,
    },
    offers: {
      "@type": "Offer",
      url: opts.url,
      priceCurrency: "PLN",
      price: opts.priceMin,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: opts.priceMin,
        maxPrice: opts.priceMax ?? opts.priceMin,
        priceCurrency: "PLN",
      },
    },
    image: opts.image,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: site.url,
    inLanguage: ["pl-PL", "uk-UA", "en"],
    publisher: {
      "@type": "HairSalon",
      "@id": `${site.url}#business`,
      name: site.fullName,
    },
  };
}

export function aboutPageSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `${site.name} · O nas`,
    description,
    url: `${site.url}/o-nas`,
    isPartOf: {
      "@type": "WebSite",
      url: site.url,
      name: site.fullName,
    },
    about: {
      "@type": "HairSalon",
      "@id": `${site.url}#business`,
    },
  };
}

export function collectionPageSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    isPartOf: {
      "@type": "WebSite",
      url: site.url,
      name: site.fullName,
    },
  };
}

export function eventSchema(slug: string) {
  const event = events.find((e) => e.slug === slug);
  if (!event) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventStatus:
      event.status === "upcoming"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: site.fullName,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postalCode: site.address.postal,
        addressLocality: site.address.city,
        addressCountry: site.address.country,
      },
    },
    description: event.summary.pl,
    organizer: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

