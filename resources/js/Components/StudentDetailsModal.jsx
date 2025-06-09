import { useState } from 'react';
import Modal from './Modal';
import TextInput from './TextInput';
import axios from 'axios';

export default function StudentDetailsModal({ show, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    college: '',
    degree: '',
    trainingSession: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/user-details', formData);
      if (response.data.status === 'success') {
        onSubmit(response.data);
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || 'An error occurred while saving your details');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Modal show={show} onClose={onClose} maxWidth="md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Review And Fill Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!w-full !border-gray-300"
                placeholder="davon@mail.com"
                required
              />
            </div>

            <div className="relative">
              <div className="flex items-center">
                <span className="absolute left-3 text-gray-500">+91</span>
                <TextInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="!w-full !border-gray-300 !pl-12"
                  placeholder="8756785XXXX"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                College Name
              </label>
              <TextInput
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="!w-full !border-gray-300"
                placeholder="Enter your college name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <TextInput
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="!w-full !border-gray-300"
                placeholder="Enter your Degree Course"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Training Session
              </label>
              <select
                name="trainingSession"
                value={formData.trainingSession}
                onChange={handleChange}
                className="border border-gray-300 rounded-md w-full p-2.5"
                required
              >
                <option value="">Select Training Session</option>
                <option value="session1">Session 1</option>
                <option value="session2">Session 2</option>
                <option value="session3">Session 3</option>
              </select>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                disabled={isSubmitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-bold text-2xl mb-2">Thank You!</h4>
            <p className="text-center text-gray-600 mb-4">
              Your details have been submitted successfully. We will contact you soon.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}
