import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Destination Specialists, Locations, Venues and the old venues-guides pages were
  // all merged into /destinations. Old paths keep working, carrying their browsing
  // intent across (query strings are passed through automatically).
  async redirects() {
    return [
      { source: '/locations', destination: '/destinations', permanent: true },
      { source: '/destination-specialists', destination: '/destinations', permanent: true },
      { source: '/venues', destination: '/destinations?view=venues', permanent: true },
      { source: '/venues-guides', destination: '/destinations', permanent: true },
      { source: '/venues-guides/destinations', destination: '/destinations', permanent: true },
      {
        source: '/venues-guides/destinations/:slug',
        destination: '/destinations?view=venues&destination=:slug',
        permanent: true,
      },
      { source: '/venues-guides/venues', destination: '/destinations?view=venues', permanent: true },
      { source: '/venues-guides/planning-guides', destination: '/planning-guides', permanent: true },
      {
        source: '/venues-guides/planning-guides/:slug',
        destination: '/planning-guides/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
