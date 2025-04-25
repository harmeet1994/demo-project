import React from 'react';
import { Head, Link } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { AlertCircle } from 'lucide-react';

const PaymentFailed = () => {
  return (
    <GuestLayout>
      <Head title="Payment Failed" />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-red-500 px-6 py-8 text-white text-center">
            <AlertCircle className="h-16 w-16 text-white mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Payment Failed</h1>
          </div>

          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Oops! Something went wrong</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your payment for the Language Course could not be processed. This could be due to:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Insufficient funds in your account
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Card authentication failed
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Connection issue during the payment process
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Payment declined by your bank
                </li>
              </ul>
            </div>

            <div className="space-x-4">
              <Link
                href="/language-webinar"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out"
              >
                Try Again
              </Link>

              <Link
                href="/"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-150 ease-in-out"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default PaymentFailed;
