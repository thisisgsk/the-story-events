import Link from 'next/link';
import { planningGuides } from '@/data/planningGuides';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Planning Guides | Checklists, Timelines & Expert Advice',
  description:
    'Free wedding planning resources from The Story Events — destination wedding checklists, planning timelines, venue selection guides, and guest hospitality tips.',
};

const dataGuides = planningGuides.map((g) => ({
  title: g.title,
  slug: g.slug,
  category: 'Planning Guide',
  readTime: '10 min',
  desc: g.description,
}));

const staticGuides = [
  { title: 'How to Choose the Perfect Wedding Venue', slug: 'how-to-choose-a-venue', category: 'Decision Guide', readTime: '8 min', desc: 'The 7 most important questions to ask before committing to any wedding venue. From capacity to catering to cancellation policy.' },
  { title: 'Your Wedding Timeline: Planning Month by Month', slug: 'wedding-timeline-planning', category: 'Timeline', readTime: '10 min', desc: 'A month-by-month planning roadmap from the day you get engaged to the morning of your wedding. Never miss a deadline again.' },
  { title: 'The Guest Hospitality Guide for Destination Weddings', slug: 'guest-hospitality-guide', category: 'Guest Experience', readTime: '7 min', desc: 'How to ensure every guest feels welcomed, informed, and cared for — from invitation to farewell.' },
  { title: 'Destination Wedding Budget: How to Plan for Every Rupee', slug: 'destination-wedding-budget', category: 'Budget Guide', readTime: '9 min', desc: 'A transparent, honest guide to what destination weddings actually cost — and how to build a budget that works for your vision.' },
];

export default function PlanningGuidesPage() {
  const allGuides = [...dataGuides, ...staticGuides];
  return (
    <>
      <PageHero
        label="Planning Guides"
        title="Expert Advice for Planning Your Perfect Wedding"
        subtitle="From comprehensive checklists to decision guides — our free resources are here to help you plan with confidence."
        image="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1800&q=80"
        height="lg"
      />
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading label="Free Resources" title="The Story Events Planning Library" subtitle="Real advice from eight years of planning extraordinary destination weddings." centered />
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {allGuides.map((guide, i) => (
              <AnimatedSection key={guide.slug} delay={i * 80} className="h-full">
                <div className="bg-white border border-accent/40 rounded-xl p-7 h-full flex flex-col gap-3 transition-all duration-[250ms] ease-in-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-accent bg-cream px-2.5 py-[3px] rounded-full">{guide.category}</span>
                    <span className="font-label text-[0.6rem] tracking-[0.08em] uppercase text-primary">{guide.readTime} read</span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-primary leading-[1.3]">{guide.title}</h2>
                  <p className="text-sm text-primary leading-[1.7] flex-1">{guide.desc}</p>
                  <Link href={`/planning-guides/${guide.slug}`} className="font-label text-[0.65rem] tracking-[0.12em] uppercase text-accent transition-colors duration-150 ease-out mt-auto no-underline">Read Guide →</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-center">
        <div className="container">
          <AnimatedSection>
            <p className="font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Need More Help?</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white mb-4">Planning is More Enjoyable With a Partner</h2>
            <p className="text-lg text-white/60 max-w-[44ch] mx-auto mb-8 leading-[1.7]">Our guides can only take you so far. When you&apos;re ready for personalised, expert guidance — we&apos;re here.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
