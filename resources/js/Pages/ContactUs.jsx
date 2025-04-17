import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout'
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    program: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };
  return (
    <GuestLayout>
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden ">
          {/* Left Side - Image and Contact Info */}
          <div className="w-full md:w-1/2 relative rounded-lg text-white hidden md:block">
            <div className="relative">
              <img src="/assets/img/contact.png" alt="" className='rounded-xl' />
              <div className="space-y-6 absolute bottom-0 p-4 py-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Follow Us On</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-300">Twitter</a>
                    <a href="https://www.instagram.com/jobschool_envisionists?igsh=MTZ5M3N1dXMxbXJjdA==" className="hover:text-blue-300">Instagram</a>
                    <a href="https://www.linkedin.com/company/jobcchool/" className="hover:text-blue-300">LinkedIn</a>
                  </div>
                </div>
                <hr />
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <div className="flex gap-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                        <span>📞</span>
                      </div>
                      <span>+91 22690408344</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                        <span>✉️</span>
                      </div>
                      <span>info@jobschool.io</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                        <span>📍</span>
                      </div>
                      <span>Regus - Delhi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="w-10/12 mx-auto">
              <div className="mb-6">
                <p className="text-gray-500">Get Your All The Doubt Solved,</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us Now</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-800 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-gray-800 mb-1">Mobile No.</label>
                  <div className="flex">
                    <div className="flex items-center pr-3 border-b border-gray-300">
                      <span className="flex items-center">
                        <div className="w-6 mr-1">
                          {/* India flag colors */}
                          <div className="flex flex-col">
                            <div className="h-1 bg-orange-500"></div>
                            <div className="h-1 bg-white"></div>
                            <div className="h-1 bg-green-600"></div>
                          </div>
                        </div>
                        +91
                      </span>
                    </div>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter Your Mobile No."
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-800 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email Address"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-gray-800 mb-1">Program Selection</label>
                  <div className="relative">
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 pr-8 appearance-none focus:outline-none focus:border-blue-500 bg-transparent"
                      required
                    >
                      <option value="" disabled>Select Program Selection</option>
                      <option value="program1">Program 1</option>
                      <option value="program2">Program 2</option>
                      <option value="program3">Program 3</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-800 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows="3"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <PrimaryButton
                    type="submit"
                    className='px-16'
                  >
                    Submit
                  </PrimaryButton>
                </div>
              </form></div>
          </div>
        </div>
      </div>
    </GuestLayout>
  )
}

export default ContactUs
