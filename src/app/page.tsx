import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import WelcomeSection from '@/components/home/WelcomeSection/WelcomeSection';
import ServicesPreview from '@/components/home/ServicesPreview/ServicesPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview/PortfolioPreview';
import DestinationsPreview from '@/components/home/DestinationsPreview/DestinationsPreview';
import StatsBar from '@/components/home/StatsBar/StatsBar';
import TestimonialsSection from '@/components/home/TestimonialsSection/TestimonialsSection';
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
      <WelcomeSection />
      <ServicesPreview />
      <PortfolioPreview />
      <DestinationsPreview />
      <StatsBar />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}
