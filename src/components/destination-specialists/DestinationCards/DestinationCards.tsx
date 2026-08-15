import Image from 'next/image';
import Link from 'next/link';
import { featuredDestinationCards } from '@/data/destinationSpecialists';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function DestinationCards() {
  return (
    <section id="destinations" className="section bg-cream scroll-mt-24">
      <div className="container">
        <AnimatedSection>
          <SectionHeading
            label="Where We Specialise"
            title="Destinations We Know Intimately"
            subtitle="Every destination below has been walked, vetted, and planned in — by a specialist dedicated to that place."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDestinationCards.map((dest, i) => (
            <AnimatedSection key={dest.slug} delay={i * 90} animation="scaleIn" className="h-full">
              <div className="group relative flex flex-col justify-end overflow-hidden rounded-xl h-[420px] shadow-md transition-all duration-[350ms] ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.09]"
                />
                <div
                  className="absolute inset-0 z-[1]"
                  style={{ backgroundImage: 'linear-gradient(0deg, rgba(42,24,18,0.82) 0%, rgba(42,24,18,0.15) 60%, transparent 100%)' }}
                />
                <div className="relative z-[2] p-6 flex flex-col gap-3">
                  <span className="inline-block self-start font-label text-[0.6rem] font-medium tracking-[0.14em] uppercase text-primary bg-accent px-3 py-1.5 rounded-full">
                    {dest.badge}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.5rem,2.5vw,1.9rem)] font-semibold text-white leading-[1.1]">{dest.name}</h3>
                    <p className="text-sm text-white/72 mt-1.5 leading-[1.6]">{dest.subtitle}</p>
                  </div>
                  <Link
                    href={dest.href}
                    className="mt-2 inline-flex items-center gap-2 font-label text-[0.68rem] font-medium tracking-[0.14em] uppercase text-accent transition-all duration-150 ease-out group-hover:gap-3 group-hover:text-white"
                  >
                    Enquire Now <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
