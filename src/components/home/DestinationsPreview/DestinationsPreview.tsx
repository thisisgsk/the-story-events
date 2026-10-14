import Image from 'next/image';
import Link from 'next/link';
import { getDestinationBySlug } from '@/data/locations';
import AnimatedSection from '@/components/ui/AnimatedSection/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const thumb = (slug: string) => getDestinationBySlug(slug)!.thumbnailImage;
const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=900&q=80`;

// India, UAE and Thailand open /destinations filtered by country. Sri Lanka and
// Vietnam have no destination data yet, so they open the unfiltered page.
const tiles = [
  { name: 'India', href: '/destinations?country=India', image: thumb('udaipur') },
  { name: 'UAE', href: '/destinations?country=United%20Arab%20Emirates', image: thumb('dubai') },
  { name: 'Sri Lanka', href: '/destinations', image: unsplash('photo-1581420455310-e069c4d4529e') },
  { name: 'Thailand', href: '/destinations?country=Thailand', image: thumb('phuket') },
  { name: 'Vietnam', href: '/destinations', image: unsplash('photo-1634951412593-b2cdca1ae519') },
];

export default function DestinationsPreview() {
  return (
    <section className="section bg-primary">
      <div className="container">
        <AnimatedSection>
          <SectionHeading label="Where We Plan" title="India and beyond" light centered />
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-3 mb-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {tiles.map((tile, i) => (
            <AnimatedSection key={tile.name} delay={i * 80}>
              <Link
                href={tile.href}
                className="group block no-underline rounded-lg overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={tile.image}
                    alt={tile.name}
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
                  <h3 className="font-display text-xl font-semibold text-white leading-[1.15]">{tile.name}</h3>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500} className="text-center">
          <Link
            href="/destinations"
            className="font-label text-[0.72rem] tracking-[0.14em] uppercase text-white/60 no-underline transition-colors duration-150 ease-out hover:text-accent"
          >
            Explore All Destinations →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
