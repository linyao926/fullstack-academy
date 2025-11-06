import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { type ModuleContent } from '../../types';

interface ModuleItemProps {
  module: ModuleContent;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const ModuleItem: React.FC<ModuleItemProps> = ({ 
  module, 
  isOpen, 
  onToggle 
}) => {
  return (
    <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300 card-hover hover-lift">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 text-xl text-white">
            {module.icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{module.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{module.weeks} weeks</p>
          </div>
        </div>
        <span className={`text-2xl text-slate-600 dark:text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {/* Expandable content */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 border-t border-slate-200 dark:border-slate-700">
          <ul className="space-y-3 pt-4">
            {module.topics.map((topic, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 animate-fadeInLeft"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300" 
           style={{ width: isOpen ? '100%' : '0%' }}></div>
    </div>
  );
};