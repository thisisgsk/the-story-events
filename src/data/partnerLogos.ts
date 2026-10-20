// ─────────────────────────────────────────────────────────────────────────────
// "Venues & Brands We Work Alongside" logo strip — shared by the About page and
// the Destinations pages (see components/ui/PartnerLogos).
//
// PLACEHOLDERS: these are neutral dummy wordmarks, not real companies or trademarks.
// To swap in real logos: drop the files into /public/images/logos/ and update `name`
// and `src` below (SVG or PNG both work). Keep logos roughly 3:1 and under ~160px wide.
// ─────────────────────────────────────────────────────────────────────────────

export interface PartnerLogo {
  /** Brand / venue name — used as the image's alt text. */
  name: string;
  /** Path under /public. */
  src: string;
}

export const partnerLogos: PartnerLogo[] = [
  { name: 'Brand 1', src: '/images/logos/placeholder-logo-1.svg' },
  { name: 'Venue 2', src: '/images/logos/placeholder-logo-2.svg' },
  { name: 'Brand 3', src: '/images/logos/placeholder-logo-3.svg' },
  { name: 'Venue 4', src: '/images/logos/placeholder-logo-4.svg' },
  { name: 'Brand 5', src: '/images/logos/placeholder-logo-5.svg' },
  { name: 'Venue 6', src: '/images/logos/placeholder-logo-6.svg' },
  { name: 'Brand 7', src: '/images/logos/placeholder-logo-7.svg' },
  { name: 'Venue 8', src: '/images/logos/placeholder-logo-8.svg' },
];
