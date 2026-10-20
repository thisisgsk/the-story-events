// URL builders for the Country → City → Venue routes. Kept free of data imports so
// client components can use them without pulling the whole dataset into their bundle.

export const SITE_URL = 'https://thestoryevents.com';

export const destinationsPath = () => '/destinations';
export const countryPath = (country: string) => `/destinations/${country}`;
export const cityPath = (country: string, city: string) => `/destinations/${country}/${city}`;
export const venuePath = (country: string, city: string, venue: string) =>
  `/destinations/${country}/${city}/${venue}`;
