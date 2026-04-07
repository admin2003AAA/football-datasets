import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | NovaStream',
    default: 'NovaStream — Premium Legal Live Streaming',
  },
  description:
    'Watch licensed live sports, movies, news and more. NovaStream delivers premium streaming on all your devices.',
  keywords: ['streaming', 'live tv', 'sports', 'movies', 'licensed content'],
  openGraph: {
    type: 'website',
    title: 'NovaStream — Premium Legal Live Streaming',
    description: 'Watch licensed live sports, movies, news and more.',
    siteName: 'NovaStream',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 text-neutral-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
