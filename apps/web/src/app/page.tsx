import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedChannels } from '@/components/sections/FeaturedChannels';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { PricingTeaser } from '@/components/sections/PricingTeaser';
import { DevicesSection } from '@/components/sections/DevicesSection';
import { CtaBanner } from '@/components/sections/CtaBanner';

export const metadata: Metadata = {
  title: 'IRAQ TV — قناة العراق للبث المباشر',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedChannels />
      <FeaturesGrid />
      <PricingTeaser />
      <DevicesSection />
      <CtaBanner />
    </>
  );
}
