import { stats } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const awards = [
  'Vogue Weddings', "Harper's Bazaar Bride", 'WeddingWire Best 2024',
  'WedMeGood Top Planner', 'Condé Nast Traveler',
];

const certs = ['WIPA Member', 'ISO 9001 Certified', 'IATA Affiliated'];

export default function TrustMarkers() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Recognition" title="Trusted by India's Most Discerning Couples" light centered />
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-2 gap-8 mb-12 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center p-6 border border-white/[0.08] rounded-lg">
                <strong className="block font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-white leading-none mb-2">{s.value}</strong>
                <span className="block font-label text-[0.62rem] tracking-[0.14em] uppercase text-white/45">{s.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Press */}
        <AnimatedSection delay={200}>
          <p className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mb-4 text-center">As Featured In</p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {awards.map((a) => (
              <div key={a} className="font-label text-[0.65rem] tracking-[0.1em] uppercase border border-accent/40 text-accent px-5 py-2 rounded-full">{a}</div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection delay={300}>
          <p className="font-label text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mb-4 text-center">Certifications</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {certs.map((c) => (
              <div key={c} className="font-label text-[0.65rem] tracking-[0.1em] uppercase text-white/55 flex items-center gap-2">
                <span className="text-accent text-[0.9rem] font-bold">✓</span> {c}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
