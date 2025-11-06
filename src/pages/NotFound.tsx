import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8 animate-scaleIn">
          <h1 className="text-9xl font-bold gradient-text">404</h1>
        </div>

        {/* Message */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <FaHome />
            Go Back Home
          </Link>
          <Link
            to="/blog"
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <FaSearch />
            Browse Blog
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
              About Us
            </Link>
            <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:underline">
              FAQ
            </Link>
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              Contact
            </Link>
            <a href="/#pricing" className="text-blue-600 dark:text-blue-400 hover:underline">
              Pricing
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};