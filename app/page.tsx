import { HeroSection } from '@/components/home/hero-section';
import { FeaturedSkills } from '@/components/home/featured-skills';
import { HowItWorks } from '@/components/home/how-it-works';
import { Testimonials } from '@/components/home/testimonials';
import { Stats } from '@/components/home/stats';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedSkills />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
}