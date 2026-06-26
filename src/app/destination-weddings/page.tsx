import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero/PageHero';
import WhyDestinationSection from '@/components/destination-weddings/WhyDestinationSection/WhyDestinationSection';
import WhatWeManageSection from '@/components/destination-weddings/WhatWeManageSection/WhatWeManageSection';
import WeddingTypesSection from '@/components/destination-weddings/WeddingTypesSection/WeddingTypesSection';
import DestinationsShowcase from '@/components/destination-weddings/DestinationsShowcase/DestinationsShowcase';
import OurProcessTimeline from '@/components/destination-weddings/OurProcessTimeline/OurProcessTimeline';
import EnquiryCTABanner from '@/components/destination-weddings/EnquiryCTABanner/EnquiryCTABanner';

export const metadata: Metadata = {
  title: 'Destination Wedding Planning in India | Palaces, Beaches & Mountains',
  description:
    'Expert destination wedding planning across Udaipur, Goa, Jaipur, Kerala, Hyderabad, and Manali. The Story Events manages every detail so you live every moment.',
};

export default function DestinationWeddingsPage() {
  return (
    <>
      <PageHero
        label="Destination Weddings"
        title="Your Love Story Deserves an Extraordinary Setting"
        subtitle="We plan destination weddings across India's most breathtaking locations — with the calm, precision, and warmth that a once-in-a-lifetime celebration deserves."
        image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&q=80"
        height="lg"
      />
      <WhyDestinationSection />
      <WhatWeManageSection />
      <WeddingTypesSection />
      <DestinationsShowcase />
      <OurProcessTimeline />
      <EnquiryCTABanner />
    </>
  );
}
