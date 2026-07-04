import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './WhatMakesUsDifferent.module.css';

const points = [
  {
    title: "We Are Selectively Boutique",
    desc: "We limit the number of weddings we take each year. You are never competing for our attention, because when we take on your wedding, we take on your vision completely."
  },
  {
    title: "Absolute Transparency",
    desc: "From vendor pricing to logistical challenges, we communicate everything. There are no hidden margins or last-minute surprises."
  },
  {
    title: "Design Meets Execution",
    desc: "We don't just design beautiful Pinterest-worthy boards. We have the technical and logistical expertise to actually build them, securely and beautifully, in any terrain."
  }
];

export default function WhatMakesUsDifferent() {
  return (
    <section className={styles.section}>
      <div className="container">
        <AnimatedSection className={styles.header}>
          <span className="section-label">Our Difference</span>
          <h2 className="section-title">What Makes Story Events Different</h2>
        </AnimatedSection>
        
        <div className={styles.grid}>
          {points.map((point, index) => (
            <AnimatedSection 
              key={index} 
              animation="fadeUp" 
              delay={index * 150} 
              className={styles.card}
            >
              <h3 className={styles.title}>{point.title}</h3>
              <p className={styles.desc}>{point.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
