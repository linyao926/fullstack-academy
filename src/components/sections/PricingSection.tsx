import React from 'react';
import { PRICING_PLANS } from '../../data/constants';
import { PricingCard } from '../cards/PricingCard';

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-slate-300">
            Invest in your future with flexible pricing and comprehensive support.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard key={idx} {...plan} />
          ))}
        </div>
        <p className="text-center text-slate-400 mt-8">
          Questions about pricing? <a href="#contact" className="text-blue-400 hover:underline">Contact us</a>
        </p>
      </div>
    </section>
  );
};