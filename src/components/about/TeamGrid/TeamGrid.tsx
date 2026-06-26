import Image from 'next/image';
import { teamMembers } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import styles from './TeamGrid.module.css';

export default function TeamGrid() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="The Team" title="The People Behind Your Perfect Day" centered />
        </AnimatedSection>
        <div className={styles.grid}>
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 100} className={styles.cardWrap}>
              <div className={styles.card}>
                <div className={styles.photoWrapper}>
                  <Image src={member.image} alt={member.name} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                  <p className={styles.bio}>{member.bio}</p>
                  <p className={styles.superpower}>
                    <span className={styles.superpowerLabel}>Superpower:</span> {member.superpower}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
