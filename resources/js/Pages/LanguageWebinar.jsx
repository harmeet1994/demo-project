import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { BookOpen, Calendar, Clock, Code, IndianRupee, Users } from 'lucide-react';
import PrimaryButton from '@/Components/PrimaryButton';
import axios from 'axios';

const LanguageWebinar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_type: 'language'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Initiate payment through our backend
      const response = await axios.post('/api/initiate-payment', formData);
      window.location.href = '/thankyou';
      setSubmitted(true);
      // // Extract payment data returned from our backend
      // const { payuBaseUrl, params } = response.data;

      // // Create a form to submit to PayU
      // const form = document.createElement('form');
      // form.setAttribute('method', 'post');
      // form.setAttribute('action', payuBaseUrl);
      // form.setAttribute('target', '_self');

      // // Add all payment parameters as hidden form fields
      // for (const key in params) {
      //   const hiddenField = document.createElement('input');
      //   hiddenField.setAttribute('type', 'hidden');
      //   hiddenField.setAttribute('name', key);
      //   hiddenField.setAttribute('value', params[key]);
      //   form.appendChild(hiddenField);
      // }

      // // Append form to body and submit
      // document.body.appendChild(form);
      // form.submit();

      // Form will redirect to PayU, so we don't need to set submitted state here
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'An error occurred. Please try again.' });
      }
      setIsSubmitting(false);
    }
  };

  return (
    <GuestLayout>
      <Head title="Language Webinar" />

      <div className=" mx-auto py-4 px-4 md:px-6 lg:px-8 max-w-7xl">
        <section className=" w-10/12 mx-auto bg-white py-5">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="md:w-1/2 w-full">
              <img src="/assets/img/language/language-banner-main.jpeg" alt="Language Webinar" />
            </div>
            {submitted ? (
              <div className="py-16 px-6 w-1/2 text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>

              </div>
            ) : (<div className="md:w-1/2 w-full px-6">
              <h2 className="text-2xl font-bold text-gray-800">Elevate English</h2>
              <p className="text-gray-700 mb-6"></p>
              <form onSubmit={handleSubmit} className="space-y-6">
                {errors.general && (
                  <div className="bg-red-50 p-4 rounded-md">
                    <p className="text-red-600">{errors.general}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-700 mb-1 font-medium">Mobile Number</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your mobile number"
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.phone && <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>}
                </div>

                <div>
                  <PrimaryButton type="submit" disabled={isSubmitting}>Submit & Pay Now</PrimaryButton>
                </div>
              </form>
            </div>)}
          </div>
        </section>
      </div>
    </GuestLayout>
  );
};

export default LanguageWebinar;
