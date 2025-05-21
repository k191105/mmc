import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/animations.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-family-sans', // Use the CSS variable name defined in variables.css
});

export const metadata: Metadata = {
  title: {
    default: 'The Modern Marketing Collective',
    template: '%s | MMC',
  },
  description: 'Data-driven growth consultancy for personalization, segmentation, and real-time orchestration.',
  keywords: ['marketing', 'data-driven', 'personalization', 'segmentation', 'growth consultancy'],
  authors: [{ name: 'The Modern Marketing Collective' }],
  // Add more metadata as needed, e.g., openGraph, twitter
  openGraph: {
    title: 'The Modern Marketing Collective',
    description: 'Elevating brands with data-driven marketing strategies.',
    type: 'website',
    locale: 'en_US',
    // images: [ { url: '/og-image.png'} ] // Add a suitable OG image later
  }
};

export const viewport: Viewport = {
  themeColor: '#0A0A0A', // Corresponds to --color-black
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
