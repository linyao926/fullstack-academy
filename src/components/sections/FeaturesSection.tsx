import React from 'react';
import { FEATURES } from '../../data/constants';
import { FeatureCard } from '../cards/FeatureCard';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-slate-300">
            Modern learning approach, quality content, and dedicated support from experienced developers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};