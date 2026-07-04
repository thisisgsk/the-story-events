import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import DestinationsPreview from '@/components/home/DestinationsPreview/DestinationsPreview';
import ServicesPreview from '@/components/home/ServicesPreview/ServicesPreview';
import WelcomeSection from '@/components/home/WelcomeSection/WelcomeSection';
import PortfolioPreview from '@/components/home/PortfolioPreview/PortfolioPreview';
import WhyStoryEvents from '@/components/home/WhyStoryEvents/WhyStoryEvents';
import CtaBanner from '@/components/home/CtaBanner/CtaBanner';

export const metadata: Metadata = {
  title: 'The Story Events — Luxury Destination Wedding Planners in India',
  description:
    'The Story Events plans extraordinary destination weddings across India\'s most breathtaking palaces, beaches, mountains, and heritage venues. From Udaipur to Goa — we turn your love story into a celebration unlike any other.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationsPreview />
      <ServicesPreview />
      <WelcomeSection />
      <PortfolioPreview />
      <WhyStoryEvents />
      <CtaBanner />
    </>
  );
}
