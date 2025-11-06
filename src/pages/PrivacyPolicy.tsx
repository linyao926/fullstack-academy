import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Last updated: November 3, 2025</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Welcome to FullStack Academy. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li><strong>Identity Data:</strong> First name, last name, username</li>
              <li><strong>Contact Data:</strong> Email address, phone number, billing address</li>
              <li><strong>Financial Data:</strong> Payment card details</li>
              <li><strong>Transaction Data:</strong> Details about payments and courses purchased</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and services</li>
              <li><strong>Marketing Data:</strong> Your preferences in receiving marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li>To register you as a new student</li>
              <li>To process and deliver your course enrollment</li>
              <li>To manage payments, fees and charges</li>
              <li>To provide customer support</li>
              <li>To send you administrative information</li>
              <li>To personalize your learning experience</li>
              <li>To improve our website and services</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally 
              lost, used or accessed in an unauthorized way, altered or disclosed. We use SSL encryption for all 
              data transmission and store sensitive information in encrypted format.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">5. Data Retention</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected 
              it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">6. Your Legal Rights</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Under data protection laws, you have rights including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">7. Third-Party Links</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Our website may include links to third-party websites, plug-ins and applications. Clicking on those 
              links or enabling those connections may allow third parties to collect or share data about you. 
              We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">8. Cookies</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and hold certain 
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is 
              being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
              the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">10. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none space-y-2 text-slate-600 dark:text-slate-300 mt-4">
              <li>Email: privacy@fullstackacademy.com</li>
              <li>Phone: +84 28 1234 567</li>
              <li>Address: Ben Thanh, District 1, Ho Chi Minh City</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};