import React from 'react';
import { type Feature } from '../../types';

export const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700 card-hover hover-lift hover-glow transition-all duration-300 relative">
      <div className="text-4xl text-blue-500 mb-4 hover-scale inline-block">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
    </div>
  );
};