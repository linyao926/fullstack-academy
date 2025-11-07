import { useModal } from '../../context/ModalContext';

export function CTASection() {
  const { openEnroll } = useModal();

  return (
    <section className="py-20 px-6 relative overflow-hidden  bg-white dark:bg-slate-900">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="gradient-blue-purple-animate rounded-3xl p-12 shadow-2xl hover-lift">
          <h2 className="text-4xl font-bold mb-4 text-white text-shadow animate-scaleIn">
            Start Your Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Join thousands of students learning and growing their tech careers every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => openEnroll()}
              className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-medium transition-all duration-300 hover-scale shadow-lg hover:shadow-2xl"
            >
              Start Free Trial
            </button>
          </div>
          <p className="mt-6 text-sm text-white/75 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            No credit card required • 7-day free trial • 100% money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};