import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { type PricingPlan } from '../../types';

export const PricingCard: React.FC<PricingPlan> = ({ 
  name, 
  subtitle, 
  price, 
  duration, 
  popular, 
  features 
}) => {
  return (
    <div 
      className={`rounded-2xl p-8 hover-lift transition-all duration-300 ${
        popular 
          ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500 relative animate-glow' 
          : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-sm font-medium text-white animate-pulse-slow">
          Most Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">{name}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{subtitle}</p>
        <div className="text-5xl font-bold mb-2 gradient-text">{price}</div>
        <p className="text-slate-600 dark:text-slate-400">{duration}</p>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, idx) => (
          <li 
            key={idx} 
            className="flex items-start gap-3 animate-fadeInLeft"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
            <span className="text-slate-700 dark:text-slate-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-lg font-medium transition-all duration-300 hover-scale ${
        popular
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
          : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
      }`}>
        Choose Plan
      </button>
      
      {/* Decorative elements */}
      {popular && (
        <>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 gradient-animate"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        </>
      )}
    </div>
  );
};