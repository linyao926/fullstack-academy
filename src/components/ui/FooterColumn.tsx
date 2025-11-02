import React from 'react';
import { type FooterLink } from '../../types';

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h4 className="font-bold mb-4 text-slate-900 dark:text-white">{title}</h4>
      <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href} className="hover:text-slate-900 dark:hover:text-white transition">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};