import React from 'react';
import { StatItem } from '../ui/StatItem';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ">
        <div className="animate-fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
            Become a <span className="gradient-text">Fullstack</span> Developer
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 animate-fadeInUp text-justify w-[85%]" style={{ animationDelay: '0.2s' }}>
            Learn frontend and backend development from scratch. Build real-world projects, get 1-on-1 mentorship, and launch your tech career.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button className="btn-primary btn-ripple btn-shine group" >
              <span className="relative z-10 flex items-center gap-2 text-white">
                Start Free Trial
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
            <button className="btn-secondary btn-hover-lift">
              Watch Demo
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <StatItem value="10,000+" label="Students" />
            <StatItem value="4.9/5" label="Rating" />
            <StatItem value="95%" label="Job Placement" />
          </div>
        </div>
        <div className="relative animate-fadeInRight animate-float">
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-8 shadow-2xl card-float">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
              alt="Developer working" 
              className="rounded-lg w-full h-auto"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );  
};