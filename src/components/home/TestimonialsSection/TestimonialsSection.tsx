import { weddings } from '@/data/weddings';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './TestimonialsSection.module.css';

export default function TestimonialsSection() {
  const testimonials = [weddings[0].testimonial, weddings[1].testimonial];
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="What Our Couples Say" title="Stories of Joy" centered />
        </AnimatedSection>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 150} className={styles.cardWrap}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>&ldquo;</div>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.name}>{t.coupleName}</p>
                <p className={styles.date}>{t.date}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
