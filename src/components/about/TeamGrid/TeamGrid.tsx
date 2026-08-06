import Image from 'next/image';
import { teamMembers } from '@/data/team';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function TeamGrid() {
  return (
    <section className="section bg-white">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="The Team" title="The People Behind Your Perfect Day" centered />
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 100} className="h-full group">
              <div className="bg-cream border border-accent/40 rounded-xl overflow-hidden h-full transition-all duration-[250ms] ease-in-out hover:-translate-y-1.5 hover:shadow-xl">
                <div className="relative aspect-square overflow-hidden rounded-full w-[140px] h-[140px] mx-auto mt-8 mb-4 shadow-[0_8px_24px_rgba(196,149,106,0.2)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="px-6 pb-6 text-center">
                  <h3 className="font-heading text-xl font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="font-label text-[0.62rem] tracking-[0.14em] uppercase text-accent mb-4">{member.role}</p>
                  <p className="text-sm text-primary leading-[1.75] mb-4">{member.bio}</p>
                  <p className="text-sm text-primary italic">
                    <span className="not-italic font-semibold text-primary mr-1">Superpower:</span> {member.superpower}
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
