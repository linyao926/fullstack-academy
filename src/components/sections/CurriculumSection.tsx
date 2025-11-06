import React, { useState, useEffect } from 'react';
import { MODULES } from '../../data/constants';
import { ModuleItem } from '../cards/ModuleItem';
import { CurriculumStat } from '../ui/CurriculumStat';

export const CurriculumSection: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(null);

  useEffect(() => {
    if (openModule !== null) {
      
    }
  }, [openModule]);

  return (
    <section id="curriculum" className="py-20 px-6 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Complete Fullstack Curriculum</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Structured learning path from fundamentals to advanced fullstack development in 6 months.
          </p>
        </div>
        <div className="space-y-4">
          {MODULES.map((module, idx) => (
            <ModuleItem
              key={module.id}
              module={module}
              index={idx}
              isOpen={openModule === idx}
              onToggle={() => setOpenModule(openModule === idx ? null : idx)}
            />
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <CurriculumStat value="300+" label="Video Lessons" />
          <CurriculumStat value="75+" label="Coding Exercises" />
          <CurriculumStat value="15+" label="Real Projects" />
        </div>
      </div>
    </section>
  );
};