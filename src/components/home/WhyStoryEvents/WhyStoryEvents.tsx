import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './WhyStoryEvents.module.css';
import Image from 'next/image';

const reasons = [
  {
    title: "Uncompromising Attention to Detail",
    description: "From the macro logistics of international guest arrivals to the micro details of table settings, we oversee every element with calm precision."
  },
  {
    title: "A Global Network of Partners",
    description: "We work exclusively with trusted, premium vendors across the globe, ensuring the quality of your celebration matches our exacting standards."
  },
  {
    title: "Transparent, Seamless Planning",
    description: "We remove the stress of destination planning through transparent communication, structured timelines, and an approach built on trust."
  },
];

export default function WhyStoryEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <AnimatedSection animation="slideRight" className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/home-custom/img6.jpg" 
                alt="Why The Story Events" 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </AnimatedSection>
          
          <div className={styles.contentCol}>
            <AnimatedSection animation="fadeUp">
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">Why Story Events</h2>
              
              <div className={styles.reasonsList}>
                {reasons.map((reason, index) => (
                  <AnimatedSection 
                    key={index} 
                    animation="fadeUp" 
                    delay={index * 150}
                    className={styles.reasonCard}
                  >
                    <h3 className={styles.reasonTitle}>{reason.title}</h3>
                    <p className={styles.reasonDesc}>{reason.description}</p>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
