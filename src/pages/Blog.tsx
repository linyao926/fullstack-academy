import React from 'react';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';

export const Blog: React.FC = () => {
  const posts = [
    {
      title: 'Getting Started with React Hooks',
      excerpt: 'Learn how to use React Hooks to build modern, functional components with state and side effects.',
      author: 'Sarah Mitchell',
      date: 'Nov 1, 2024',
      readTime: '5 min read',
      category: 'React'
    },
    {
      title: 'Mastering TypeScript for Fullstack Development',
      excerpt: 'Discover how TypeScript can improve your development workflow and catch bugs before runtime.',
      author: 'Alex Chen',
      date: 'Oct 28, 2024',
      readTime: '8 min read',
      category: 'TypeScript'
    },
    {
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating scalable and secure RESTful APIs using Node.js and Express.',
      author: 'Michael Brown',
      date: 'Oct 25, 2024',
      readTime: '10 min read',
      category: 'Backend'
    },
    {
      title: 'Database Design Best Practices',
      excerpt: 'Learn essential database design principles for building efficient and scalable applications.',
      author: 'Emily Rodriguez',
      date: 'Oct 20, 2024',
      readTime: '7 min read',
      category: 'Database'
    },
    {
      title: 'Deploying Full-Stack Applications to AWS',
      excerpt: 'Step-by-step guide to deploying your full-stack application on Amazon Web Services.',
      author: 'David Kim',
      date: 'Oct 15, 2024',
      readTime: '12 min read',
      category: 'DevOps'
    },
    {
      title: 'Career Tips for Junior Developers',
      excerpt: 'Essential career advice and strategies for junior developers entering the tech industry.',
      author: 'Sarah Mitchell',
      date: 'Oct 10, 2024',
      readTime: '6 min read',
      category: 'Career'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white animate-fadeInUp">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Learn from industry experts, get coding tips, and stay updated with the latest in web development.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover-lift transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">{post.category[0]}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <FaUser className="text-xs" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest articles and coding tips delivered to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-slate-100 transition-all hover-scale">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};