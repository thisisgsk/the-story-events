import { stats } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './StatsBar.module.css';

export default function StatsBar() {
  return (
    <section className={styles.section} aria-label="Agency statistics">
      <div className="container">
        <AnimatedSection>
          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.item}>
                <strong className={styles.value}>{stat.value}</strong>
                <span className={styles.label}>{stat.label}</span>
                {i < stats.length - 1 && <span className={styles.divider} aria-hidden="true" />}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
