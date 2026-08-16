import type { Metadata } from 'next';
import { getDestinationBySlug } from '@/data/locations';
import type { BrowseView, NetworkFilter } from '@/types/locations';
import LocationsHero from '@/components/locations/LocationsHero/LocationsHero';
import LocationsExplorer from '@/components/locations/LocationsExplorer/LocationsExplorer';
import LocationsCTA from '@/components/locations/LocationsCTA/LocationsCTA';

export const metadata: Metadata = {
  title: 'Locations | Wedding Destinations & Venues | The Story Events',
  description:
    'Browse the destinations we operate in — Udaipur, Jaipur, Goa, Hyderabad, Kerala and Phuket — and every venue we can open for you, including properties available by request worldwide.',
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function LocationsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  // Legacy /venues and /venues-guides routes redirect in here carrying intent.
  const view: BrowseView = first(params.view) === 'venues' ? 'venues' : 'destinations';

  const destinationParam = first(params.destination);
  const destination = destinationParam && getDestinationBySlug(destinationParam) ? destinationParam : null;

  const networkParam = first(params.network);
  const network: NetworkFilter =
    networkParam === 'in-network' || networkParam === 'on-request' ? networkParam : 'all';

  return (
    <>
      <LocationsHero />
      <LocationsExplorer
        initialView={destination ? 'venues' : view}
        initialDestination={destination}
        initialNetwork={network}
      />
      <LocationsCTA />
    </>
  );
}
