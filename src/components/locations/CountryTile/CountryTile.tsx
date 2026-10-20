import Image from 'next/image';
import Link from 'next/link';
import { countryPath } from '@/lib/destinationPaths';
import type { Country } from '@/types/destinations';

interface CountryTileProps {
  country: Pick<Country, 'slug' | 'name' | 'tileImage'>;
  /** Optional small line under the name, e.g. "4 cities". */
  subtitle?: string;
}

/** The portrait country tile — shared by the home page and /destinations. */
export default function CountryTile({ country, subtitle }: CountryTileProps) {
  return (
    <Link
      href={countryPath(country.slug)}
      className="group block no-underline rounded-lg overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-[5px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <Image
          src={country.tileImage}
          alt={country.name}
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
        <h3 className="font-display text-xl font-semibold text-white leading-[1.15]">{country.name}</h3>
        {subtitle && (
          <p className="font-label text-[0.6rem] tracking-[0.14em] uppercase text-white/60 mt-1">{subtitle}</p>
        )}
      </div>
    </Link>
  );
}
