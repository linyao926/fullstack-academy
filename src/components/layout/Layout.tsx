// src/components/layout/Layout.tsx
import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { SignInModal } from '../modals/SignInModal';
import { EnrollModal } from '../modals/EnrollModal';
import { useModal } from '../../context/ModalContext';

export const Layout: React.FC = () => {
  const location = useLocation();
  const { 
    showSignIn, 
    showEnroll, 
    selectedPlan,
    openSignIn, 
    closeSignIn, 
    openEnroll, 
    closeEnroll 
  } = useModal();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/3 dark:bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation 
          onSignIn={openSignIn}
          onEnroll={() => openEnroll()}
        />
        
        {/* Main Content - Pages render here */}
        <main>
          <Outlet />
        </main>

        <Footer />
      </div>

      {/* Modals */}
      <SignInModal 
        isOpen={showSignIn} 
        onClose={closeSignIn} 
      />
      
      <EnrollModal 
        isOpen={showEnroll} 
        onClose={closeEnroll}
        selectedPlan={selectedPlan}
      />
    </div>
  );
};