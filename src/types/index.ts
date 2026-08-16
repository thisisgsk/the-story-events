// ─── Wedding / Portfolio Types ────────────────────────────────────────────────
export interface Wedding {
  slug: string;
  coupleName: string;
  coupleNames: [string, string];
  location: string;
  city: string;
  type: WeddingType;
  date: string;
  heroImage: string;
  thumbnailImage: string;
  coupleStory: string;
  venueDescription: string;
  whyChosen: string;
  whatWeHandled: string[];
  planningNotes: string;
  decorStory: DecorStory;
  gallery: GalleryImage[];
  testimonial: Testimonial;
}

export type WeddingType = 'Palace' | 'Beach' | 'Mountain' | 'Intimate' | 'Grand';

export interface DecorStory {
  concept: string;
  colorPalette: string[];
  atmosphere: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Testimonial {
  quote: string;
  coupleName: string;
  date: string;
}

// ─── Service Types ─────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  icon: string;
}

// ─── Destination & Venue Types ────────────────────────────────────────────────
// Live in @/types/locations — they back the merged /locations page.

// ─── Planning Guide Types ──────────────────────────────────────────────────────
export interface PlanningGuide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  content: PlanningGuideSection[];
}

export interface PlanningGuideSection {
  heading: string;
  body: string;
  items?: string[];
}

// ─── Team Types ────────────────────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  superpower: string;
}

// ─── Stats Types ───────────────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

// ─── Nav Types ────────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Checklist Types ──────────────────────────────────────────────────────────
export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  id: string;
  text: string;
  timeframe: string;
}
