import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheckCircle, FaCreditCard, FaLock } from 'react-icons/fa';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: 'starter' | 'professional' | 'premium';
}

export const EnrollModal: React.FC<EnrollModalProps> = ({ isOpen, onClose, selectedPlan = 'professional' }) => {
  const [step, setStep] = useState<'plan' | 'info' | 'payment'>('plan');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('plan');
      setFormData({ name: '', email: '', phone: '' });
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const plans = {
    starter: { 
      name: 'Starter', 
      price: '$299', 
      duration: '3 months',
      features: [
        'Access to 100+ video lessons',
        '5 fullstack projects',
        'Community support',
        'Certificate of completion'
      ]
    },
    professional: { 
      name: 'Professional', 
      price: '$599', 
      duration: '6 months',
      features: [
        'Access to 300+ video lessons',
        '15 fullstack projects',
        '1-on-1 mentorship',
        'Certificate of completion',
        'Career guidance',
        'Job placement assistance'
      ]
    },
    premium: { 
      name: 'Premium', 
      price: '$999', 
      duration: '12 months',
      features: [
        'Access to 500+ video lessons',
        '25 fullstack projects',
        'Dedicated mentor',
        'Certificate of completion',
        'Career guidance',
        'Job placement guarantee',
        'Interview preparation',
        'Portfolio review'
      ]
    },
  };

  const currentPlan = plans[selectedPlan];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'plan') setStep('info');
    else if (step === 'info') setStep('payment');
    else {
      // Handle final enrollment
      console.log('Enroll:', { ...formData, plan: selectedPlan });
      alert('Enrollment successful! 🎉');
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full p-4 sm:p-6 md:p-8 relative animate-scaleIn my-8 overflow-y-auto h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors z-10 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl sm:text-2xl" />
        </button>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 sm:gap-4 min-w-max px-4">
            {['Plan', 'Info', 'Payment'].map((label, idx) => (
              <React.Fragment key={label}>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold transition-all text-xs sm:text-base ${
                    step === label.toLowerCase() 
                      ? 'bg-blue-600 text-white' 
                      : idx < ['plan', 'info', 'payment'].indexOf(step)
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400'
                  }`}>
                    {idx < ['plan', 'info', 'payment'].indexOf(step) ? <FaCheckCircle className="text-sm" /> : idx + 1}
                  </div>
                  <span className={`text-xs sm:text-sm font-medium hidden sm:inline ${
                    step === label.toLowerCase() ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'
                  }`}>
                    {label}
                  </span>
                </div>
                {idx < 2 && <div className="w-8 sm:w-12 h-0.5 bg-slate-200 dark:bg-slate-600"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Step 1: Plan Selection */}
        {step === 'plan' && (
          <div className="animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              Confirm Your Plan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center mb-6 sm:mb-8">
              You've selected the {currentPlan.name} plan
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 sm:p-6 border-2 border-blue-500 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{currentPlan.name}</h3>
                <div className="text-left sm:text-right">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{currentPlan.price}</div>
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{currentPlan.duration}</div>
                </div>
              </div>
              <ul className="space-y-2">
                {currentPlan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-sm" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => setStep('info')} 
              className="w-full px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Continue to Your Information
            </button>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 'info' && (
          <div className="animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              Your Information
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center mb-6 sm:mb-8">
              Tell us a bit about yourself
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('plan')}
                  className="w-full sm:flex-1 px-6 py-2 sm:py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all font-medium text-sm sm:text-base"
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="w-full sm:flex-1 px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 'payment' && (
          <div className="animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 text-center">
              Payment Details
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center mb-6 sm:mb-8">
              Secure payment powered by Stripe
            </p>

            <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 sm:p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Plan</span>
                <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{currentPlan.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300">Total</span>
                <span className="text-xl sm:text-2xl font-bold gradient-text">{currentPlan.price}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Card Number
                </label>
                <div className="relative">
                  <FaCreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm sm:text-base" />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    maxLength={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <FaLock className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="w-full sm:flex-1 px-6 py-2 sm:py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all font-medium text-sm sm:text-base"
                >
                  Back
                </button>
                <button 
                  type="submit" 
                  className="w-full sm:flex-1 px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Complete Enrollment
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Trust Badges */}
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-600">
          <p className="text-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
            Secure payment • Money-back guarantee • Start learning immediately
          </p>
        </div>
      </div>
    </div>
  );
};