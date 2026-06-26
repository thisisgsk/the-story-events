import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './FounderNote.module.css';

export default function FounderNote() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <AnimatedSection animation="slideLeft" className={styles.imageCol}>
            <div className={styles.imgWrapper}>
              <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80" alt="Nisha Kapoor, Founder of The Story Events" fill sizes="(max-width:768px) 100vw, 40vw" style={{ objectFit: 'cover' }} />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideRight" className={styles.textCol}>
            <span className={styles.label}>A Note from Our Founder</span>
            <h2 className={styles.heading}>Why I Started The Story Events</h2>
            <div className={styles.ornament}><span className={styles.line} /><span className={styles.rose}>✦</span><span className={styles.line} /></div>
            <p className={styles.para}>
              I planned my first wedding at twenty-four. I was terrified, exhilarated, and completely certain that this was the most important work I would ever do. That couple — Meera and Arjun — danced until midnight in a courtyard in Jodhpur. I still remember the exact moment the lanterns were lit. I knew then that I had found my calling.
            </p>
            <p className={styles.para}>
              Every couple that comes to us carries a dream — usually a beautifully complicated one. A beach ceremony with 300 guests. A palace breakfast for forty. A Himalayan elopement with six people and a drone. I believe that the size of the dream doesn't matter. What matters is that it is real, it is theirs, and it deserves to be executed with the same care that they brought in dreaming it up.
            </p>
            <p className={styles.para}>
              The Story Events was built on one promise: that on your wedding day, you feel nothing but joy. We will have already taken care of everything else. That promise has not changed in eight years. It never will.
            </p>
            <div className={styles.signature}>
              <span className={styles.signatureName}>Nisha Kapoor</span>
              <span className={styles.signatureRole}>Founder & Creative Director, The Story Events</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
