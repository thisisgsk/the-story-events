import { brandTimeline } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './BrandTimeline.module.css';

export default function BrandTimeline() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Journey"
            title="The Story Events Story"
            subtitle="Eight years. One hundred weddings. One unwavering commitment to excellence."
            centered
          />
        </AnimatedSection>
        <div className={styles.timeline}>
          {brandTimeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 100} animation={i % 2 === 0 ? 'slideLeft' : 'slideRight'} className={`${styles.entry} ${i % 2 !== 0 ? styles.entryRight : ''}`}>
              <div className={styles.yearCol}>
                <span className={styles.year}>{item.year}</span>
              </div>
              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < brandTimeline.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.textCol}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
