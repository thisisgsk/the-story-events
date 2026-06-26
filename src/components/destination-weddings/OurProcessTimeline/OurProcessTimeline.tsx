import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './OurProcessTimeline.module.css';

const steps = [
  { num: '01', title: 'Initial Consultation & Vision Mapping', desc: 'We begin with a warm, in-depth conversation — in person, on a video call, or over chai. We learn about your relationship, your vision, your must-haves, and the feeling you want your wedding to create.' },
  { num: '02', title: 'Destination & Venue Shortlisting', desc: 'Based on your vision and budget, we curate a shortlist of destinations and venues. We share detailed proposals, coordinate site visits, and guide you through the selection with complete transparency.' },
  { num: '03', title: 'Design & Vendor Briefing', desc: 'Our design team develops a complete aesthetic for your wedding — mood boards, colour palettes, floral concepts, and event layouts. Every vendor is then briefed on your vision and expectations.' },
  { num: '04', title: 'Logistics & Guest Coordination', desc: 'We manage every element of guest logistics — travel, accommodation, transfers, welcome experiences, and dietary needs — so that every person who matters to you arrives happy and looked after.' },
  { num: '05', title: 'Final Confirmations & Rehearsal', desc: 'Two weeks before the wedding, we conduct final checks with every vendor, walk you through the full timeline, and ensure every detail is locked in. No surprises. No gaps. Just confidence.' },
  { num: '06', title: 'The Big Day — We\'re With You Every Step', desc: 'Our on-site team arrives before you wake up. We coordinate every vendor, manage every moment, handle every hiccup behind the scenes — so that all you ever see is magic.' },
];

export default function OurProcessTimeline() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="Your Planning Journey"
            subtitle="From the first hello to your last dance — here is how we plan together."
            centered
          />
        </AnimatedSection>
        <div className={styles.timeline}>
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 100} animation={i % 2 === 0 ? 'slideLeft' : 'slideRight'} className={`${styles.step} ${i % 2 !== 0 ? styles.stepRight : ''}`}>
              <div className={styles.connector}>
                <div className={styles.numCircle}>{step.num}</div>
                {i < steps.length - 1 && <div className={styles.line} />}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.desc}>{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
