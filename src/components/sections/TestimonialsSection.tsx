import React from 'react';
import { TESTIMONIALS } from '../../data/constants';
import { TestimonialCard } from '../cards/TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Join 10,000+ students who have successfully launched their careers in tech.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};