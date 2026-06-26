import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import styles from './WelcomeSection.module.css';

const pillars = [
  { icon: '✦', label: 'Destinations Across India', value: '8 States' },
  { icon: '◈', label: 'Weddings Planned', value: '100+' },
  { icon: '❋', label: 'Years of Excellence', value: '7+' },
];

export default function WelcomeSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container-narrow">
        <AnimatedSection>
          <div className={styles.header}>
            <span className={styles.label}>Welcome</span>
            <h2 className={styles.title}>
              Every Wedding is a Story.<br />
              <em className={styles.titleItalic}>We Make Yours Extraordinary.</em>
            </h2>
            <div className={styles.ornament}>
              <span className={styles.line} /><span className={styles.rose}>✦</span><span className={styles.line} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className={styles.body}>
            <p className={styles.text}>
              At The Story Events, we believe that a wedding is not simply a celebration — it is the most personal and meaningful chapter of your life, deserving of the most thoughtful, meticulous, and inspired planning. We are a team of passionate destination wedding specialists who have dedicated our careers to the art of creating once-in-a-lifetime experiences for couples across India and beyond.
            </p>
            <p className={styles.text}>
              From the first conversation, we listen. We learn your story — how you met, what you dream of, the moments that matter to you both. Then we build, with calm precision and genuine warmth, a wedding that is authentically, unmistakably yours. Whether it is a palace floating on a Rajasthani lake, a barefoot ceremony on a Goan beach, or an intimate gathering under Himalayan stars — we bring the same unwavering excellence to every detail, every vendor, and every guest experience.
            </p>
            <p className={styles.text}>
              Our promise is simple: on your wedding day, all you feel is joy. We will have handled everything else.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <div key={p.label} className={styles.pillar}>
                <span className={styles.pillarIcon}>{p.icon}</span>
                <strong className={styles.pillarValue}>{p.value}</strong>
                <span className={styles.pillarLabel}>{p.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
