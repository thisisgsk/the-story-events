import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './WhatWeManageSection.module.css';

const areas = [
  { icon: '🏰', title: 'Venue & Logistics', desc: 'Scouting, booking, and managing every aspect of your venue across multiple days and events.' },
  { icon: '🌸', title: 'Décor & Design', desc: 'Bespoke décor concepts crafted around your colour story, mood, and aesthetic vision.' },
  { icon: '✈️', title: 'Guest Experience', desc: 'Seamless travel, accommodation, welcome kits, and curated experiences for every guest.' },
  { icon: '🤝', title: 'Vendor Management', desc: 'Handpicked, vetted vendors — photographers, caterers, musicians, and more.' },
  { icon: '📋', title: 'Legal & Documentation', desc: 'Marriage registration, NOCs, permits, and all the paperwork sorted without stress.' },
  { icon: '💰', title: 'Budget Management', desc: 'Transparent tracking, smart negotiations, and zero surprise costs on your big day.' },
  { icon: '⏱️', title: 'On-Day Coordination', desc: 'A dedicated team on the ground ensuring every minute runs exactly as planned.' },
  { icon: '🎁', title: 'Post-Wedding Support', desc: 'Return logistics, vendor payments, memory books, and everything after the celebrations.' },
];

export default function WhatWeManageSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Full Service"
            title="Everything We Manage for You"
            subtitle="From the first site visit to the final farewell dinner — we are with you every step of the way."
            centered
          />
        </AnimatedSection>
        <div className={styles.grid}>
          {areas.map((area, i) => (
            <AnimatedSection key={area.title} delay={i * 60} className={styles.cardWrap}>
              <div className={styles.card}>
                <span className={styles.icon}>{area.icon}</span>
                <h3 className={styles.title}>{area.title}</h3>
                <p className={styles.desc}>{area.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
