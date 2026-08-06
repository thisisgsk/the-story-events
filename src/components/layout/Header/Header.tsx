'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'motion/react';
import { useStickyHeader } from '@/hooks/useStickyHeader';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Destination Specialists', href: '/destination-specialists' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Venues', href: '/venues' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const hamburgerLineTransforms = [
  { open: 'translate-y-[6.5px] rotate-45', closed: '' },
  { open: 'opacity-0', closed: '' },
  { open: '-translate-y-[6.5px] -rotate-45', closed: '' },
];

export default function Header() {
  const { isScrolled } = useStickyHeader(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[200] transition-[background,box-shadow,padding] duration-[250ms] ease-in-out ${
          isScrolled
            ? 'bg-[rgba(254,247,242,0.96)] backdrop-blur-md shadow-[0_1px_0_var(--color-accent),0_1px_3px_rgba(42,24,18,0.08)] py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline shrink-0 -translate-y-0.5" onClick={handleHomeClick}>
            <div className={isScrolled ? 'hidden' : 'flex'}>
              <Image src="/logo-white.png" alt="The Story Events" width={160} height={48} style={{ objectFit: 'contain' }} priority />
            </div>
            <div className={isScrolled ? 'flex' : 'hidden'}>
              <Image src="/logo-maroon.png" alt="The Story Events" width={160} height={48} style={{ objectFit: 'contain' }} priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`font-label text-[0.7rem] font-medium tracking-[0.12em] uppercase px-3 py-2 rounded-sm transition-colors duration-150 ease-out whitespace-nowrap flex items-center gap-1 ${
                    isScrolled
                      ? 'text-primary hover:text-accent hover:bg-cream'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={item.href === '/' ? handleHomeClick : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center font-label text-[0.68rem] font-medium tracking-[0.12em] uppercase px-6 py-3 rounded-sm transition-all duration-[250ms] ease-in-out min-h-[40px] ${
                isScrolled
                  ? 'bg-accent text-white border border-accent hover:bg-primary hover:border-primary hover:-translate-y-px'
                  : 'bg-white/15 text-white border border-white/50 hover:bg-white/25 hover:border-white/80'
              }`}
            >
              Enquire Now
            </Link>
            <button
              className="flex lg:hidden flex-col justify-center gap-[5px] w-11 h-11 p-2 cursor-pointer rounded-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {hamburgerLineTransforms.map((line, i) => (
                <span
                  key={i}
                  className={`w-full h-[1.5px] rounded-full transition-all duration-[250ms] ease-in-out origin-center ${
                    isScrolled ? 'bg-primary' : 'bg-white'
                  } ${mobileOpen ? line.open : line.closed}`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-primary z-[199] flex flex-col items-center justify-center px-8 py-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col items-center gap-2 w-full max-w-[320px]" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <div key={item.href} className="text-center w-full">
                  <Link
                    href={item.href}
                    className="font-display font-medium text-white/85 tracking-[0.02em] py-3 transition-colors duration-150 ease-out text-center w-full block hover:text-accent"
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)' }}
                    onClick={(e) => {
                      if (item.href === '/') {
                        handleHomeClick(e);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <div className="w-10 h-px bg-white/15 my-4" />
              <Link
                href="/contact"
                className="mt-8 px-10 py-4 bg-accent text-white font-label text-xs tracking-[0.14em] uppercase rounded-sm transition-all duration-150 ease-out min-h-[48px] inline-flex items-center hover:bg-primary hover:-translate-y-px"
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
