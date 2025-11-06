import React from 'react';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => {
  return (
    <a href={href} target='_blank' className="text-2xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
      {icon}
    </a>
  );
};