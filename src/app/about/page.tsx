import type { Metadata } from 'next';
import AboutCoverHero from '@/components/about/AboutCoverHero/AboutCoverHero';
import AboutIntro from '@/components/about/AboutIntro/AboutIntro';
import BrandTimeline from '@/components/about/BrandTimeline/BrandTimeline';
import AboutHighlights from '@/components/about/AboutHighlights/AboutHighlights';
import FounderNote from '@/components/about/FounderNote/FounderNote';
import PlanningPhilosophy from '@/components/about/PlanningPhilosophy/PlanningPhilosophy';
import PartnerLogos from '@/components/about/PartnerLogos/PartnerLogos';
import CtaBanner from '@/components/home/CtaBanner/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us | Meet the Team Behind The Story Events',
  description:
    'Learn about The Story Events — our journey, our founder Nisha Kapoor, our team, and the philosophy that has guided 100+ extraordinary weddings across India.',
};

export default function AboutPage() {
  return (
    <>
      <AboutCoverHero />
      <AboutIntro />
      <BrandTimeline />
      <AboutHighlights />
      <FounderNote />
      <PlanningPhilosophy />
      <PartnerLogos />
      <CtaBanner />
    </>
  );
}
