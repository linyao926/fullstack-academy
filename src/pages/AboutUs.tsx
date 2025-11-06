import React from 'react';
import { FaRocket, FaUsers, FaHeart, FaAward } from 'react-icons/fa';

export const AboutUs: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white animate-fadeInUp">
            About <span className="gradient-text">FullStack Academy</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            We're on a mission to make quality tech education accessible to everyone, 
            helping aspiring developers launch successful careers in technology.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white text-center">Our Story</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Founded in 2020, FullStack Academy was born from a simple belief: everyone deserves 
              access to high-quality tech education, regardless of their background or location.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Our founders, experienced software engineers who transitioned from non-tech backgrounds, 
              understood the challenges of breaking into the tech industry. They created FullStack Academy 
              to provide the structured learning, mentorship, and community support they wished they had.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Today, we've helped over 10,000 students launch their tech careers, with a 95% job placement 
              rate and graduates working at top companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaRocket />, title: 'Innovation', description: 'Constantly evolving our curriculum with the latest technologies' },
              { icon: <FaUsers />, title: 'Community', description: 'Building a supportive network of learners and mentors' },
              { icon: <FaHeart />, title: 'Passion', description: 'Passionate about transforming lives through education' },
              { icon: <FaAward />, title: 'Excellence', description: 'Committed to delivering exceptional learning experiences' }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover-lift">
                <div className="text-5xl text-blue-500 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-slate-900 dark:text-white text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Chen', role: 'Co-Founder & CEO', avatar: 'AC' },
              { name: 'Sarah Johnson', role: 'Co-Founder & CTO', avatar: 'SJ' },
              { name: 'Michael Brown', role: 'Head of Education', avatar: 'MB' }
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-slate-600 dark:text-slate-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};