import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ValuesSection } from '@/components/home/ValuesSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogSection } from '@/components/home/BlogSection';
import { CtaSection } from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ValuesSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
