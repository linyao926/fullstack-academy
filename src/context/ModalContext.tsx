import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextType {
  showSignIn: boolean;
  showEnroll: boolean;
  selectedPlan: 'starter' | 'professional' | 'premium';
  openSignIn: () => void;
  closeSignIn: () => void;
  openEnroll: (plan?: 'starter' | 'professional' | 'premium') => void;
  closeEnroll: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showEnroll, setShowEnroll] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'premium'>('professional');

  const openSignIn = () => setShowSignIn(true);
  const closeSignIn = () => setShowSignIn(false);
  
  const openEnroll = (plan: 'starter' | 'professional' | 'premium' = 'professional') => {
    setSelectedPlan(plan);
    setShowEnroll(true);
  };
  const closeEnroll = () => setShowEnroll(false);

  return (
    <ModalContext.Provider 
      value={{ 
        showSignIn, 
        showEnroll, 
        selectedPlan,
        openSignIn, 
        closeSignIn, 
        openEnroll, 
        closeEnroll 
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};