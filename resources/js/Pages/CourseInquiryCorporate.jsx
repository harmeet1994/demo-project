import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import axios from 'axios';

const CourseInquiryCorporate = () => {
  const [activeTab, setActiveTab] = useState('corporate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_type: 'corporate',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      ...formData,
      course_type: tab,
    });
  };

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
      await axios.post('/api/course-inquiry', formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course_type: activeTab,
      });
    } catch (error) {
      console.error('Error submitting form:', error);

      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        setErrors({ general: 'An error occurred. Please try again.' });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GuestLayout>
      <Head title="Course Inquiry" />

      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Interested in Our Courses?</h1>
            <p className="text-white/80">Fill out the form below and we'll get back to you soon!</p>
          </div>

          {submitted ? (
            <div className="py-16 px-6 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">Your inquiry has been submitted successfully. We'll contact you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <div className="p-6">
              {/* Course Type Tabs - Instagram Style */}
              <div className="mb-8">
                <div className="flex border-b border-gray-200">
                  {/* <button
                    className={`flex-1 py-3 font-medium text-sm ${activeTab === 'tech' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => handleTabChange('tech')}
                  >
                    Tech Course
                  </button>
                  <button
                    className={`flex-1 py-3 font-medium text-sm ${activeTab === 'non-tech' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => handleTabChange('non-tech')}
                  >
                    Non-Tech Course
                  </button> */}
                  <button
                    className={`flex-1 py-3 font-medium text-sm ${activeTab === 'corporate' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => handleTabChange('corporate')}
                  >
                    Corporate Course
                  </button>
                </div>

                <div className="mt-4">
                  {activeTab === 'tech' && (
                    <p className="text-gray-600 text-sm">Interested in our technical courses? Fill out the form below to get more information about programming, data science, AI, and more.</p>
                  )}
                  {activeTab === 'non-tech' && (
                    <p className="text-gray-600 text-sm">Explore our non-technical courses including digital marketing, project management, leadership, and more.</p>
                  )}
                  {activeTab === 'corporate' && (
                    <p className="text-gray-600 text-sm">Our corporate training programs are customized for your organization's needs. Let us know how we can help.</p>
                  )}
                </div>
              </div>

              {/* Form */}
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
                  <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center px-4 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                      <span className="text-gray-600">+91</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-r-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-red-600 text-sm">{errors.phone}</p>}
                </div>

                <div className="pt-4">
                  <PrimaryButton
                    type="submit"
                    className="w-full py-3 px-4 flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Inquiry'}
                  </PrimaryButton>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </GuestLayout>
  );
};

export default CourseInquiryCorporate;
