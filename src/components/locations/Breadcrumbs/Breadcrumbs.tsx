import Link from 'next/link';
import { SITE_URL } from '@/lib/destinationPaths';

export interface Crumb {
  label: string;
  /** Omit on the last (current) crumb. */
  href?: string;
}

/** Light-on-dark breadcrumb trail for the destination covers, with BreadcrumbList structured data. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-label text-[0.66rem] font-medium tracking-[0.16em] uppercase">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {isLast || !item.href ? (
                  <span aria-current="page" className="text-accent">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="text-white/75 transition-colors duration-150 hover:text-accent">
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <span aria-hidden="true" className="text-white/40">
                    ›
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
