import React from 'react';

interface CurriculumStatProps {
  value: string;
  label: string;
}

export const CurriculumStat: React.FC<CurriculumStatProps> = ({ value, label }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-6 text-center border border-slate-200 dark:border-slate-700">
      <div className="text-4xl font-bold text-blue-400 mb-2">{value}</div>
      <div className="text-slate-700 dark:text-slate-300">{label}</div>
    </div>
  );
};