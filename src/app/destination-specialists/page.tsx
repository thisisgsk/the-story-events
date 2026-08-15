import type { Metadata } from 'next';
import Hero from '@/components/destination-specialists/Hero/Hero';
import IntroSection from '@/components/destination-specialists/IntroSection/IntroSection';
import DestinationCards from '@/components/destination-specialists/DestinationCards/DestinationCards';
import PlanningTimeline from '@/components/destination-specialists/PlanningTimeline/PlanningTimeline';
import FAQSection from '@/components/destination-specialists/FAQSection/FAQSection';
import FinalCTA from '@/components/destination-specialists/FinalCTA/FinalCTA';

export const metadata: Metadata = {
  title: 'Destination Specialists',
  description:
    'Meet our destination wedding specialists — dedicated experts in Udaipur, Jaipur, Goa, Hyderabad, Kerala, and Thailand, ready to plan your wedding from the ground up.',
};

export default function DestinationSpecialistsPage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <DestinationCards />
      <PlanningTimeline />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
