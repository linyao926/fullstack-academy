import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavigationProps {
  onSignIn?: () => void;
  onEnroll?: () => void;
}

// Define types for nav links
type HomeNavLink = {
  label: string;
  hash: string;
};

type RouteNavLink = {
  label: string;
  path: string;
};

export const Navigation: React.FC<NavigationProps> = ({ onSignIn, onEnroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const homeNavLinks: HomeNavLink[] = [
    { label: 'Features', hash: '#features' },
    { label: 'Curriculum', hash: '#curriculum'},
    { label: 'Pricing', hash: '#pricing'},
    { label: 'Reviews', hash: '#reviews'},
  ];
  
  const otherPagesNavLinks: RouteNavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const navLinks = isHomePage ? homeNavLinks : otherPagesNavLinks;

  return (
    <nav style={{ borderBottom: 'none'}} className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-800' 
        : 'bg-transparent'
    }`}>
      <div style={{ maxWidth: '83rem'}} className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold gradient-text animate-fadeInDown hover:scale-105 transition-transform " style={{ transition: 'none' }} > FullStack Academy </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 animate-fadeInDown" 
        style={{ animationDelay: '0.2s' }}>
          {isHomePage ? (
            navLinks.map((link) => 'hash' in link ? (
              <button
                key={link.hash}
                onClick={() => handleHashNavigation(link.hash)}
                className="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium relative group"
              >
                <span className="flex items-center gap-2">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ): null)
          ) : (
            otherPagesNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium relative group ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 rounded-full ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))
          )}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 animate-fadeInDown" style={{ animationDelay: '0.4s' }}>
          <ThemeToggle />
          
          <button 
            onClick={onSignIn}
            className="hidden md:block px-5 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover-scale font-medium"
          >
            Sign In
          </button>
          
          <button 
            onClick={onEnroll}
            className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium btn-primary btn-ripple btn-shine group h-[40px]"
          >
            <span className="h-full relative z-10 flex items-center text-white">
                Enroll Now
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-screen border-t border-slate-200 dark:border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-6 py-4 space-y-2">
          {isHomePage ? (
            navLinks.map((link) => 'hash' in link ? (
              <button
                key={link.hash}
                onClick={() => handleHashNavigation(link.hash)}
                className="w-full text-left px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
              >
                <span className="flex items-center gap-2">
                  {link.label}
                </span>
              </button>
            ): null)
          ) : (
            otherPagesNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`w-full block text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium ${
                  location.pathname === link.path
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span className="flex items-center gap-2">
                  {link.label}
                </span>
              </Link>
            ))
          )}
          
          <div className="md:hidden pt-4 space-y-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={onSignIn}
              className="w-full px-4 py-3 text-left text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
            >
              Sign In
            </button>
            <button 
              onClick={onEnroll}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium btn-primary btn-ripple btn-shine group h-[40px] w-full"
            >
              <span className="h-full w-full relative z-10 flex items-center text-white">
                  Enroll Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
