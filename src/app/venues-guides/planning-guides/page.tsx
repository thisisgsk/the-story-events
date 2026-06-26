import Link from 'next/link';
import { planningGuides } from '@/data/destinations';
import PageHero from '@/components/ui/PageHero/PageHero';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import type { Metadata } from 'next';
import styles from './planning-guides.module.css';

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
          <div className={styles.grid}>
            {allGuides.map((guide, i) => (
              <AnimatedSection key={guide.slug} delay={i * 80} className={styles.cardWrap}>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.category}>{guide.category}</span>
                    <span className={styles.readTime}>{guide.readTime} read</span>
                  </div>
                  <h2 className={styles.guideTitle}>{guide.title}</h2>
                  <p className={styles.guideDesc}>{guide.desc}</p>
                  <Link href={`/venues-guides/planning-guides/${guide.slug}`} className={styles.readLink}>Read Guide →</Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.ctaLabel}>Need More Help?</p>
            <h2 className={styles.ctaTitle}>Planning is More Enjoyable With a Partner</h2>
            <p className={styles.ctaSub}>Our guides can only take you so far. When you're ready for personalised, expert guidance — we're here.</p>
            <Link href="/contact" className="btn btn-primary">Book a Free Consultation</Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
