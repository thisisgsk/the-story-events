import type { NextConfig } from 'next';

// Legacy destination slugs (from the old query-string and /venues-guides URLs) → their new
// Country → City path. Anything not listed here has no equivalent any more and falls back to
// the relevant parent page. Keep in sync with src/data/destinations.ts if cities are renamed.
const legacyCityPaths: Record<string, string> = {
  udaipur: '/destinations/india/udaipur',
  jaipur: '/destinations/india/jaipur',
  goa: '/destinations/india/goa',
  kerala: '/destinations/india/kerala',
  hyderabad: '/destinations/india',
  rishikesh: '/destinations/india',
  dubai: '/destinations/uae/dubai',
  phuket: '/destinations/thailand/phuket',
};

// Old ?country= values → new country pages.
const legacyCountryPaths: Record<string, string> = {
  India: '/destinations/india',
  'United Arab Emirates': '/destinations/uae',
  UAE: '/destinations/uae',
  'Sri Lanka': '/destinations/sri-lanka',
  Thailand: '/destinations/thailand',
  Vietnam: '/destinations/vietnam',
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // /destinations is now Country → City → Venue (/destinations/<country>/<city>/<venue>).
  // The old browse-by-destination / browse-by-venue views, and every path that used to feed
  // into them, keep working by redirecting to the closest new page.
  // Note: Next passes the request's query string through on redirects, so rules that match a
  // query on /destinations must never redirect back to /destinations (that would loop) —
  // bare /destinations?view=venues etc. simply render the Destinations page and ignore the query.
  async redirects() {
    const queryRedirects = [
      // /destinations?destination=udaipur  →  /destinations/india/udaipur
      ...Object.entries(legacyCityPaths).map(([slug, destination]) => ({
        source: '/destinations',
        has: [{ type: 'query' as const, key: 'destination', value: slug }],
        destination,
        permanent: true,
      })),
      // /destinations?country=India  →  /destinations/india
      ...Object.entries(legacyCountryPaths).map(([name, destination]) => ({
        source: '/destinations',
        has: [{ type: 'query' as const, key: 'country', value: name }],
        destination,
        permanent: true,
      })),
    ];

    // /venues-guides/destinations/<slug>  →  the matching city (or country) page
    const guideRedirects = Object.entries(legacyCityPaths).map(([slug, destination]) => ({
      source: `/venues-guides/destinations/${slug}`,
      destination,
      permanent: true,
    }));

    return [
      ...queryRedirects,
      { source: '/locations', destination: '/destinations', permanent: true },
      { source: '/destination-specialists', destination: '/destinations', permanent: true },
      { source: '/venues', destination: '/destinations', permanent: true },
      { source: '/venues-guides', destination: '/destinations', permanent: true },
      { source: '/venues-guides/destinations', destination: '/destinations', permanent: true },
      ...guideRedirects,
      // Any other old destination guide slug (e.g. bali, santorini) → the Destinations page
      { source: '/venues-guides/destinations/:slug', destination: '/destinations', permanent: true },
      { source: '/venues-guides/venues', destination: '/destinations', permanent: true },
      { source: '/venues-guides/planning-guides', destination: '/planning-guides', permanent: true },
      {
        source: '/venues-guides/planning-guides/:slug',
        destination: '/planning-guides/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
