import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { CurriculumSection } from '../components/sections/CurriculumSection';
import { PricingSection } from '../components/sections/PricingSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { CTASection } from '../components/sections/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};