import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export const RefundPolicy: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Refund Policy</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Last updated: November 3, 2025</p>

        {/* 100% Guarantee Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-12 text-center">
          <FaCheckCircle className="text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">100% Money-Back Guarantee</h2>
          <p className="text-xl opacity-90">
            Try our course risk-free for 7 days. If you're not satisfied, we'll refund your money—no questions asked.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">1. 7-Day Money-Back Guarantee</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We want you to be completely satisfied with your purchase. If for any reason you're not happy with 
              our course, you can request a full refund within 7 days of your enrollment date.
            </p>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-green-600 dark:text-green-400" />
                Eligible for Full Refund:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-green-800 dark:text-green-200">
                <li>Requests made within 7 days of enrollment</li>
                <li>Less than 25% of course content accessed</li>
                <li>No completion certificates issued</li>
                <li>Account in good standing (no violations)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">2. How to Request a Refund</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-600 dark:text-slate-300">
              <li><strong>Contact Support:</strong> Email us at refunds@fullstackacademy.com with your order number</li>
              <li><strong>Provide Details:</strong> Include your reason for the refund (optional but helpful)</li>
              <li><strong>Receive Confirmation:</strong> We'll confirm your refund request within 24 hours</li>
              <li><strong>Processing:</strong> Refunds are processed within 5-10 business days</li>
              <li><strong>Receive Refund:</strong> Money will be returned to your original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">3. Refund Timeline</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">0-24 hours:</span>
                  <span>Refund request acknowledged and approved</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">1-3 days:</span>
                  <span>Refund processed on our end</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[100px]">5-10 days:</span>
                  <span>Money appears in your account (depends on your bank)</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">4. Partial Refunds</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              In certain circumstances, we may offer partial refunds:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li>Requests made between 8-14 days (50% refund, at our discretion)</li>
              <li>Technical issues preventing course access (case-by-case basis)</li>
              <li>Duplicate purchases (full refund of duplicate charge)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">5. Non-Refundable Situations</h2>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <FaTimesCircle className="text-red-600 dark:text-red-400" />
                Not Eligible for Refund:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-red-800 dark:text-red-200">
                <li>Requests made after 7 days from enrollment</li>
                <li>More than 25% of course content has been accessed</li>
                <li>Completion certificate has been issued</li>
                <li>Account suspended or terminated for policy violations</li>
                <li>Already received a refund for a previous purchase</li>
                <li>Purchased during a promotional period (special terms may apply)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">6. Special Circumstances</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              We understand that exceptional circumstances may arise. If you have a situation not covered by 
              this policy, please contact us. We review each case individually and may make exceptions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li>Medical emergencies</li>
              <li>Family emergencies</li>
              <li>Job loss or financial hardship</li>
              <li>Deployment (military personnel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">7. Payment Method Considerations</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Refunds are issued to the original payment method:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
              <li><strong>Credit/Debit Card:</strong> 5-10 business days</li>
              <li><strong>PayPal:</strong> 3-5 business days</li>
              <li><strong>Bank Transfer:</strong> 7-14 business days</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
              Note: We cannot issue refunds to different accounts or payment methods than originally used.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">8. Course Access After Refund</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Once a refund is processed, your access to the course will be immediately revoked. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mt-4">
              <li>All video lessons and course materials</li>
              <li>Community Discord access</li>
              <li>Mentorship sessions</li>
              <li>Any certificates or completion records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">9. Re-enrollment After Refund</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              If you receive a refund and later decide to re-enroll, you will need to purchase the course 
              again at the current price. Previous enrollment progress will not be restored.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              We reserve the right to modify this refund policy at any time. Changes will be effective 
              immediately upon posting. Your continued use of our services after any changes constitutes 
              acceptance of the new policy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">11. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              For refund requests or questions about this policy:
            </p>
            <ul className="list-none space-y-2 text-slate-600 dark:text-slate-300">
              <li><strong>Email:</strong> refunds@fullstackacademy.com</li>
              <li><strong>Phone:</strong> +84 28 1234 567</li>
              <li><strong>Hours:</strong> Mon-Fri, 9:00 AM – 6:00 PM (GMT+7)</li>
            </ul>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            Still Have Questions?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Our support team is here to help clarify any concerns about our refund policy.
          </p>
          <Link to="/contact">
            <button className="btn-primary">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};