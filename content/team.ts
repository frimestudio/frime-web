export type TeamMember = {
  slug: string;
  instagramHandle?: string;
  joined?: number;
  specialtyKeys: string[];
};

export const team: TeamMember[] = [
  {
    slug: "julia",
    instagramHandle: "PLACEHOLDER · @julia.handle z IG",
    joined: 2024,
    specialtyKeys: ["mullets", "cuts", "color"],
  },
  {
    slug: "sasza",
    instagramHandle: "PLACEHOLDER · @sasza.handle z IG",
    joined: 2024,
    specialtyKeys: ["fades", "beards", "editorial"],
  },
  {
    slug: "kara",
    instagramHandle: "PLACEHOLDER · @kara.handle z IG",
    joined: 2025,
    specialtyKeys: ["short cuts", "fringes", "color"],
  },
  {
    slug: "alex",
    instagramHandle: "PLACEHOLDER · @alex.handle z IG",
    joined: 2025,
    specialtyKeys: ["cuts", "color", "styling"],
  },
  {
    slug: "inga",
    instagramHandle: "PLACEHOLDER · @inga.handle z IG",
    joined: 2025,
    specialtyKeys: ["cuts", "color", "styling"],
  },
];

export const teamSlugs = team.map((m) => m.slug);
