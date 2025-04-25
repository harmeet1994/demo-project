import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <GuestLayout>
      <Head title="Payment Successful" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-500 px-6 py-8 text-white text-center">
            <CheckCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Payment Successful!</h1>
          </div>

          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Thank You for Enrolling!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your payment for the Language Course has been received. You will receive an email with course access details shortly.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What's Next?</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  You'll receive a welcome email with further instructions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Our team will reach out to schedule your first session
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  You'll get access to our learning portal and materials
                </li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default ThankYou;
