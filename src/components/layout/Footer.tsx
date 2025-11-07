import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FooterColumn } from '../ui/FooterColumn';
import { SocialIcon } from '../ui/SocialIcon';

export function Footer() {
  return (
    <footer id="contact" className="bg-white dark:bg-black px-6 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">FullStack Academy</h3>
            <p className="w-1/2 text-slate-600 dark:text-slate-400 text-sm text-justify">
              The leading platform for learning fullstack development. Build real applications and launch your tech career.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FooterColumn 
              title="Course"
              links={[
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Success Stories', href: '/#reviews' },
                { label: 'Curriculum', href: '/#curriculum' }
              ]}
            />
            <FooterColumn 
              title="Support"
              links={[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' }
              ]}
            />
            <div>
              <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Connect</h4>
              <div className="flex gap-4 flex-wrap">
                <SocialIcon icon={<FaXTwitter />} href="https://x.com/" />
                <SocialIcon icon={<FaGithub />} href="https://github.com/" />
                <SocialIcon icon={<FaYoutube />} href="https://www.youtube.com/" />
                <SocialIcon icon={<FaLinkedin />} href="https://www.linkedin.com/" />
                <SocialIcon icon={<FaEnvelope />} href="https://mail.google.com/" />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div>© 2025 Cam H. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/refund" className="hover:text-slate-900 dark:hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};