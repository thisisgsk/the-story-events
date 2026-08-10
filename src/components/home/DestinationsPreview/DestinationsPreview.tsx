import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function DestinationsPreview() {
  const top = destinations.slice(0, 5);
  return (
    <section className="section bg-primary">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Plan" title="India's Most Breathtaking Wedding Destinations" light centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {top.map((dest, i) => (
            <AnimatedSection key={dest.slug} delay={i * 80}>
              <Link
                href={`/venues-guides/destinations/${dest.slug}`}
                className="group block no-underline rounded-lg overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={dest.thumbnailImage}
                    alt={dest.name}
                    fill
                    sizes="(max-width:640px) 50vw,(max-width:1024px) 33vw,20vw"
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-slow ease-in-out group-hover:scale-[1.08]"
                  />
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{ backgroundImage: 'linear-gradient(0deg, rgba(42,24,18,0.72) 0%, transparent 55%)' }}
                  />
                </div>
                <div className="relative z-[2] -mt-20 p-4">
                  <h3 className="font-display text-xl font-bold text-white leading-[1.15]">{dest.name}</h3>
                  <p className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-white/55 mt-0.5">{dest.state}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500} className="text-center">
          <Link
            href="/venues-guides/destinations"
            className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-white/60 no-underline transition-colors duration-150 ease-out hover:text-accent"
          >
            Explore All Destinations →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
