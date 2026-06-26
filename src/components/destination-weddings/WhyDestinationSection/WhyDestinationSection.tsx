import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './WhyDestinationSection.module.css';

const challenges = [
  'Coordinating travel, accommodation, and transport for out-of-town guests',
  'Navigating local vendor networks and legal marriage documentation requirements',
  'Managing multi-day itineraries across pre-wedding and post-wedding events',
  'Handling on-site logistics and contingency planning in unfamiliar locations',
];

export default function WhyDestinationSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <AnimatedSection animation="slideLeft" className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80"
                alt="Destination wedding planning requires expert coordination"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideRight" className={styles.textCol}>
            <SectionHeading
              label="The Case for Expert Planning"
              title="Why Your Destination Wedding Needs a Specialist"
              subtitle="Destination weddings are breathtakingly beautiful — and extraordinarily complex. They require a level of planning expertise that goes far beyond what a local wedding demands."
            />
            <p className={styles.para}>
              When your wedding takes place away from home — in a palace in Udaipur, on a beach in Goa, or in the hills of Manali — every element multiplies in complexity. Guest logistics, vendor vetting across cities, marriage documentation, local permits, and multi-day event coordination all need to be managed simultaneously, with precision and calm.
            </p>
            <p className={styles.para}>
              Most couples only realise this depth of complexity once they begin planning. By that point, the stress has already begun. That is why we step in early — before the overwhelm, before the missteps, before the regrets.
            </p>
            <div className={styles.challengeList}>
              <p className={styles.challengeTitle}>The challenges we solve for you:</p>
              {challenges.map((c, i) => (
                <div key={i} className={styles.challengeItem}>
                  <span className={styles.checkmark}>✓</span>
                  <p>{c}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
