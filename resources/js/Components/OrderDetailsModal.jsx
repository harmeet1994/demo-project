import React, { useState } from 'react';
import axios from 'axios';
import { usePage } from '@inertiajs/react';

const OrderDetailsModal = ({ isOpen, onClose, courseTitle, coursePrice, courseDuration, courseSessions, courseDescription, courseClasses }) => {
  const user = usePage().props.auth.user;

  const [currentStep, setCurrentStep] = useState('details'); // 'details' or 'summary'
  const [formData, setFormData] = useState({
    user_id: user ? user.id : '',
    first_name: user ? user.name : '',
    email: user ? user.email : '',
    mobile: user ? user.mobile : '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    course_type: courseTitle || 'Elevate English',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleNextStep = () => {
    // Validate all fields before proceeding to the next step
    const newErrors = {};

    if (!formData.first_name) {
      newErrors.first_name = 'Please enter your name';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Please enter your mobile number';
    }
    if (!formData.address) {
      newErrors.address = 'Please enter your address';
    }
    if (!formData.city) {
      newErrors.city = 'Please enter your city';
    }
    if (!formData.state) {
      newErrors.state = 'Please enter your state';
    }
    if (!formData.zip_code) {
      newErrors.zip_code = 'Please enter your zip code';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setCurrentStep('summary');
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setErrors({});

      // Submit form data to backend
      const response = await axios.post('/api/course-registration', formData);
      const { payuBaseUrl, params } = response.data;

      // Create and submit a form to PayU Money
      const form = document.createElement('form');
      form.setAttribute('method', 'post');
      form.setAttribute('action', payuBaseUrl);
      form.setAttribute('target', '_self');

      // Add payment parameters as hidden form fields
      for (const key in params) {
        const hiddenField = document.createElement('input');
        hiddenField.setAttribute('type', 'hidden');
        hiddenField.setAttribute('name', key);
        hiddenField.setAttribute('value', params[key]);
        form.appendChild(hiddenField);
      }

      // Add form to document and submit
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error('Registration error:', error);
      setIsSubmitting(false);

      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        alert('An error occurred while processing your registration. Please try again.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Order Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="relative">
            <div className="flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full ${currentStep === 'details' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
              <div className="flex-1 h-1 mx-2 bg-gray-300 relative">
                <div className={`absolute inset-0 bg-blue-500 ${currentStep === 'summary' ? 'w-full' : 'w-0'} transition-all duration-300`}></div>
              </div>
              <div className={`w-4 h-4 rounded-full ${currentStep === 'summary' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium">Details Review</span>
              <span className="text-sm font-medium">Summary</span>
            </div>
          </div>

          {currentStep === 'details' ? (
            <>
              <div className="mt-6 mb-4 flex">
                <div className="w-1/3">
                  <img src="/assets/img/language/language-banner.png" alt="Course" className="w-full rounded-lg" />
                </div>
                <div className="w-2/3 ml-6">
                  <h3 className="text-xl font-bold">{formData.course_type}</h3>
                  {/* <p className="text-green-600 mt-1">Join for free now</p> */}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-green-800">Please Review Your Details</h3>
                <p className="text-green-700">
                  You will receive the course link and all the information on this registered email address please review it and confirm the filled information
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First & Last Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="first_name"
                    readOnly
                    value={formData.first_name}
                    onChange={handleChange}
                    className={`w-full border ${errors.first_name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="Davon Lean"
                    required
                  />
                  {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    readOnly
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="davon@mail.com"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Mobile no <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <div className="w-16 border border-gray-300 rounded-l-lg px-2 py-2 bg-gray-100 flex items-center justify-between">
                      <span>+91</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="mobile"
                      readOnly
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`flex-grow border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} border-l-0 rounded-r-lg px-4 py-2`}
                      required
                    />
                  </div>
                  {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="Enter Your Address here"
                    required
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="Enter Your City Name"
                    required
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="Enter Your State Name"
                    required
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Zip Code <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    className={`w-full border ${errors.zip_code ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-2`}
                    placeholder="Enter City Zip Code"
                    required
                  />
                  {errors.zip_code && <p className="text-red-500 text-sm mt-1">{errors.zip_code}</p>}
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={handleNextStep}
                  className="w-full py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-6 mb-4 flex">
                <div className="w-1/3">
                  <img src="/assets/img/language/language-banner.png" alt="Course" className="w-full rounded-lg" />
                </div>
                <div className="w-2/3 ml-6">
                  <h3 className="text-xl font-bold">{formData.course_type}</h3>
                  <p className="text-green-600 mt-1"> {courseDescription}</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-500 text-sm">Duration</p>
                      <p className="font-medium">{courseDuration}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Sessions</p>
                      <p className="font-medium">{courseSessions}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Fees</p>
                      <p className="font-medium">{coursePrice}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">Classes</p>
                      <p className="font-medium">{courseClasses}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-b py-4 my-6">
                <h3 className="text-lg font-medium mb-4">Your Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Name</p>
                    <p className="font-medium">{formData.first_name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Mobile</p>
                    <p className="font-medium">+91 {formData.mobile}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="font-medium">
                      {[formData.city, formData.state].filter(Boolean).join(', ')} {formData.zip_code ? `- ${formData.zip_code}` : ''}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Course Fee</span>
                  <span>{coursePrice}</span>
                </div>
                <div className="flex justify-between font-medium text-lg">
                  <span>Total Amount</span>
                  <span>{coursePrice}</span>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button
                  onClick={() => setCurrentStep('details')}
                  className="w-1/2 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium"
                >
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-1/2 py-3 bg-orange-500 text-white rounded-lg font-medium disabled:bg-orange-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Proceed to Pay'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
