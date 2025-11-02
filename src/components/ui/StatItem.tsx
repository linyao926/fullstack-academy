import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ value, label }) => {
  return (
    <div>
      <div className="text-3xl font-bold text-blue-400">{value}</div>
      <div className="text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
};