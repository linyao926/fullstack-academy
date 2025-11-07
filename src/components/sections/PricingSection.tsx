import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../../data/constants';
import { PricingCard } from '../cards/PricingCard';
import { useModal } from '../../context/ModalContext';

export function PricingSection() {
  const { openEnroll } = useModal();

  return (
    <section id="pricing" className="py-20 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Learning Path</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Invest in your future with flexible pricing and comprehensive support.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, idx) => (
            <PricingCard 
              key={idx}  
              {...plan} 
              onEnrollClick={() => openEnroll(plan.id as 'starter' | 'professional' | 'premium')}
            />
          ))}
        </div>
        <p className="text-center text-slate-400 mt-8">
          Questions about pricing? <Link to="/contact" className="text-blue-400 hover:underline">Contact us</Link>
        </p>
      </div>
    </section>
  );
}