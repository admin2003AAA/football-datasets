import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: '%s | IRAQ TV',
    default: 'IRAQ TV — قناة العراق للبث المباشر',
  },
  description:
    'شاهد المحتوى الحي المرخص من رياضة وأفلام وأخبار وترفيه. IRAQ TV يوصلك أفضل جودة بث على جميع أجهزتك.',
  keywords: ['IRAQ TV', 'بث مباشر', 'قنوات عراقية', 'streaming', 'live tv', 'iraq', 'licensed content'],
  openGraph: {
    type: 'website',
    title: 'IRAQ TV — قناة العراق للبث المباشر',
    description: 'شاهد المحتوى الحي المرخص من رياضة وأفلام وأخبار وترفيه.',
    siteName: 'IRAQ TV',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={inter.variable}>
      <body className="bg-neutral-950 text-neutral-100 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
