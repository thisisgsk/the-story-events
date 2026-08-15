import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

export default function DestinationsShowcase() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Work" title="Destinations We Plan" light centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-4 mb-10 md:grid-cols-4">
          {destinations.map((dest, i) => (
            <AnimatedSection
              key={dest.slug}
              delay={i * 80}
              className={i === 0 ? 'col-span-2 row-span-1 md:col-span-2 md:row-span-2' : ''}
            >
              <Link href={`/venues-guides/destinations/${dest.slug}`} className="group block no-underline rounded-lg overflow-hidden h-full">
                <div
                  className={`relative overflow-hidden ${
                    i === 0 ? 'aspect-square md:aspect-auto md:min-h-full md:h-[420px]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes={i === 0 ? '(max-width:768px) 100vw, 50vw' : '(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw'}
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-slow ease-in-out group-hover:scale-[1.06]"
                  />
                  <div
                    className="absolute inset-0 z-[1]"
                    style={{ backgroundImage: 'linear-gradient(0deg, rgba(42,24,18,0.68) 0%, transparent 55%)' }}
                  />
                </div>
                <div className="relative z-[2] -mt-[100px] p-5">
                  <h3 className="font-display text-[clamp(1.2rem,2.5vw,1.6rem)] font-semibold text-white mb-0.5">{dest.name}</h3>
                  <p className="font-label text-[0.6rem] tracking-[0.12em] uppercase text-white/55">{dest.state}</p>
                  {i === 0 && <p className="text-[0.85rem] text-white/60 mt-2 italic">{dest.tagline}</p>}
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={400} className="text-center">
          <Link
            href="/venues-guides/destinations"
            className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-white/55 no-underline transition-colors duration-150 ease-out hover:text-accent"
          >
            Explore All Destinations →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
