import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';

const pillars = [
  { icon: '✦', label: 'Destinations Across India', value: '8 States' },
  { icon: '◈', label: 'Weddings Planned', value: '100+' },
  { icon: '❋', label: 'Years of Excellence', value: '7+' },
];

export default function WelcomeSection() {
  return (
    <section className="section bg-white text-center">
      <div className="container-narrow">
        <AnimatedSection>
          <div className="mb-8">
            <span className="inline-block font-label text-[0.68rem] tracking-[0.2em] uppercase text-accent mb-4">Welcome</span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-primary leading-[1.15]">
              Every Wedding is a Story.<br />
              <em className="italic text-primary font-normal">We Make Yours Extraordinary.</em>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="block w-12 h-px bg-accent" />
              <span className="text-primary text-xs opacity-70">✦</span>
              <span className="block w-12 h-px bg-accent" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <div className="text-left mb-10">
            <p className="text-lg leading-[1.85] text-primary mb-5">
              At The Story Events, we believe that a wedding is not simply a celebration — it is the most personal and meaningful chapter of your life, deserving of the most thoughtful, meticulous, and inspired planning. We are a team of passionate destination wedding specialists who have dedicated our careers to the art of creating once-in-a-lifetime experiences for couples across India and beyond.
            </p>
            <p className="text-lg leading-[1.85] text-primary mb-5">
              From the first conversation, we listen. We learn your story — how you met, what you dream of, the moments that matter to you both. Then we build, with calm precision and genuine warmth, a wedding that is authentically, unmistakably yours. Whether it is a palace floating on a Rajasthani lake, a barefoot ceremony on a Goan beach, or an intimate gathering under Himalayan stars — we bring the same unwavering excellence to every detail, every vendor, and every guest experience.
            </p>
            <p className="text-lg leading-[1.85] text-primary mb-5">
              Our promise is simple: on your wedding day, all you feel is joy. We will have handled everything else.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-accent/40 max-[480px]:grid-cols-1 max-[480px]:gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-2 p-6 bg-cream rounded-lg">
                <span className="text-[1.4rem] text-accent">{p.icon}</span>
                <strong className="font-display text-3xl font-bold text-primary">{p.value}</strong>
                <span className="font-label text-[0.65rem] tracking-[0.12em] uppercase text-primary">{p.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
