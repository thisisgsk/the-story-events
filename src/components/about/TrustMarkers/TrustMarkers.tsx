import { stats } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './TrustMarkers.module.css';

const awards = [
  'Vogue Weddings', "Harper's Bazaar Bride", 'WeddingWire Best 2024',
  'WedMeGood Top Planner', 'Condé Nast Traveler',
];

const certs = ['WIPA Member', 'ISO 9001 Certified', 'IATA Affiliated'];

export default function TrustMarkers() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Recognition" title="Trusted by India's Most Discerning Couples" light centered />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={100}>
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Press */}
        <AnimatedSection delay={200}>
          <p className={styles.sectionLabel}>As Featured In</p>
          <div className={styles.awards}>
            {awards.map((a) => (
              <div key={a} className={styles.awardBadge}>{a}</div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={300}>
          <p className={styles.sectionLabel}>Certifications</p>
          <div className={styles.certs}>
            {certs.map((c) => (
              <div key={c} className={styles.cert}>
                <span className={styles.certCheck}>✓</span> {c}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
