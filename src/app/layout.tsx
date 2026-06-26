import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB/WhatsAppFAB';

export const metadata: Metadata = {
  title: {
    default: 'The Story Events — Luxury Destination Wedding Planners in India',
    template: '%s | The Story Events',
  },
  description:
    'The Story Events plans extraordinary destination weddings across India\'s most breathtaking palaces, beaches, mountains, and heritage venues. From Udaipur to Goa, we turn your love story into a celebration unlike any other.',
  keywords: [
    'destination wedding planner India',
    'luxury wedding planner',
    'palace wedding Udaipur',
    'beach wedding Goa',
    'destination wedding Jaipur',
    'wedding planner Mumbai',
    'The Story Events',
    'heritage wedding India',
  ],
  authors: [{ name: 'The Story Events' }],
  creator: 'The Story Events',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thestoryevents.com',
    siteName: 'The Story Events',
    title: 'The Story Events — Luxury Destination Wedding Planners',
    description: 'Planning extraordinary weddings across India\'s most breathtaking destinations.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'The Story Events — Luxury Destination Wedding Planners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Story Events — Luxury Destination Wedding Planners',
    description: 'Planning extraordinary weddings across India\'s most breathtaking destinations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
