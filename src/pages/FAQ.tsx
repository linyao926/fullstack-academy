import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { useModal } from '../context/ModalContext';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openEnroll } = useModal();

  const faqs = [
    {
      question: 'What is included in the course?',
      answer: 'Our course includes 300+ video lessons, 75+ coding exercises, 15+ real-world projects, 1-on-1 mentorship sessions, access to our Discord community, career support, and a certificate of completion.'
    },
    {
      question: 'Do I need prior programming experience?',
      answer: 'No prior experience is required! Our curriculum starts from the fundamentals and gradually progresses to advanced topics. We designed the course for complete beginners as well as those looking to upskill.'
    },
    {
      question: 'How long does it take to complete the course?',
      answer: 'The course is designed to be completed in 6 months with 10-15 hours of study per week. However, you can go at your own pace - some students finish faster, while others take more time.'
    },
    {
      question: 'What kind of support do I get?',
      answer: 'You get weekly 1-on-1 mentorship sessions with experienced developers, access to our active Discord community with 10,000+ students, code reviews, career guidance, and email support.'
    },
    {
      question: 'Is there a job guarantee?',
      answer: 'While we cannot guarantee employment (no ethical bootcamp can), we have a 95% job placement rate. Our Premium plan includes job search assistance, interview preparation, and direct company introductions.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Yes! We offer a 100% money-back guarantee within the first 7 days if you\'re not satisfied with the course. No questions asked.'
    },
    {
      question: 'What technologies will I learn?',
      answer: 'You\'ll learn HTML5, CSS3, JavaScript ES6+, React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, Git, Docker, AWS deployment, and more. Our curriculum is regularly updated with the latest technologies.'
    },
    {
      question: 'Is the certificate recognized by employers?',
      answer: 'Our certificate demonstrates your completion of a comprehensive full-stack development program. Many of our graduates have successfully used it to land jobs at top tech companies.'
    },
    {
      question: 'Can I access the course materials after completion?',
      answer: 'Yes! Professional and Premium plan members get lifetime access to all course materials, including future updates and new content added to the curriculum.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Currently, we accept one-time payments for each plan. However, we offer three different plans (Starter, Professional, Premium) to fit different budgets. Contact us for special circumstances.'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white animate-fadeInUp">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Find answers to common questions about our bootcamp, curriculum, and enrollment process.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  <span className="text-lg font-bold text-slate-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-700 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our team is here to help! Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-all hover-scale inline-block"
            >
              Contact Support
            </Link>
            <button 
              onClick={() => openEnroll()}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all hover-scale"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};