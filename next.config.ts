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
  // The separate Destinations and Venues sections were merged into /locations.
  // Old paths keep working, carrying their browsing intent across.
  async redirects() {
    return [
      { source: '/destinations', destination: '/locations', permanent: true },
      { source: '/venues', destination: '/locations?view=venues', permanent: true },
      { source: '/venues-guides', destination: '/locations', permanent: true },
      { source: '/venues-guides/destinations', destination: '/locations', permanent: true },
      {
        source: '/venues-guides/destinations/:slug',
        destination: '/locations?view=venues&destination=:slug',
        permanent: true,
      },
      { source: '/venues-guides/venues', destination: '/locations?view=venues', permanent: true },
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
