import React from 'react';
import { FaStar } from 'react-icons/fa';
import { type Testimonial } from '../../types';

export const TestimonialCard: React.FC<Testimonial> = ({ name, role, avatar, review }) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-slate-200 dark:border-slate-700 card-hover hover-lift relative overflow-hidden group">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar 
            key={i} 
            className="text-yellow-400 hover-scale transition-transform" 
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed relative z-10">"{review}"</p>
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg group-hover:shadow-xl transition-shadow">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-slate-900 dark:text-white">{name}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{role}</div>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Corner decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
    </div>
  );
};