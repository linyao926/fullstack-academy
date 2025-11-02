import React from 'react';
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterColumn } from '../ui/FooterColumn';
import { SocialIcon } from '../ui/SocialIcon';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-black px-6 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">FullStack Academy</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              The leading platform for learning fullstack development. Build real applications and launch your tech career.
            </p>
          </div>
          <FooterColumn 
            title="Course"
            links={[
              { label: 'Features', href: '#' },
              { label: 'Pricing', href: '#' },
              { label: 'Success Stories', href: '#' },
              { label: 'Curriculum', href: '#' }
            ]}
          />
          <FooterColumn 
            title="Support"
            links={[
              { label: 'About Us', href: '#' },
              { label: 'Blog', href: '#' },
              { label: 'FAQ', href: '#' },
              { label: 'Contact', href: '#' }
            ]}
          />
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Connect</h4>
            <div className="flex gap-4">
              <SocialIcon icon={<FaXTwitter />} href="https://x.com/" target="_blank" />
              <SocialIcon icon={<FaGithub />} href="https://github.com/" target="_blank"/>
              <SocialIcon icon={<FaYoutube />} href="https://www.youtube.com/" target="_blank"/>
              <SocialIcon icon={<FaLinkedin />} href="https://www.linkedin.com/" target="_blank"/>
              <SocialIcon icon={<FaEnvelope />} href="https://mail.google.com/" target="_blank"/>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div>© 2025 FullStack Academy</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};