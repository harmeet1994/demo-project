import { useState } from 'react';
import Modal from './Modal';
import TextInput from './TextInput';
import axios from 'axios';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

export default function UserDetailsModal({ show, onClose, onSubmit }) {
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
      console.error(err);
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
          <h2 className="text-2xl font-bold">Review And Fill Details</h2>
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
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="border-b border-gray-300 pb-4">
              <TextInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="!w-full !border-none !text-lg"
                required
              />
            </div>

            <div className="border-b border-gray-300 pb-4 relative">
              <div className="flex items-center">
                <span className="text-xl pr-2">
                  ▼
                </span>
                <TextInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="!w-full !border-none !text-lg"
                  required
                />
              </div>
            </div>

            <div className="border-b border-gray-300 pb-4">
              <label className="block text-gray-700 mb-1">College Name</label>
              <TextInput
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                className="!w-full !border-none !text-lg"
                placeholder="Enter your college name"
                required
              />
            </div>

            <div className="border-b border-gray-300 pb-4">
              <label className="block text-gray-700 mb-1">Degree</label>
              <TextInput
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className="!w-full !border-none !text-lg"
                placeholder="Enter your Degree Course"
                required
              />
            </div>

            <div className="border-b border-gray-300 pb-4">
              <label className="block text-gray-700 mb-1">Training Session</label>
              <div className="relative">
                <select
                  name="trainingSession"
                  value={formData.trainingSession}
                  onChange={handleChange}
                  className="w-full border-none text-lg bg-transparent appearance-none outline-none"
                  required
                >
                  <option value="">Select Training Session</option>
                  <option value="morning">Morning Session</option>
                  <option value="afternoon">Afternoon Session</option>
                  <option value="evening">Evening Session</option>
                  <option value="weekend">Weekend Session</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="black" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <SecondaryButton
                type="button"
                onClick={onClose}
                className="w-[48%] py-3 text-xl bg-gray-100 hover:bg-gray-200"
                disabled={isSubmitting}
              >
                Back
              </SecondaryButton>
              <PrimaryButton
                type="submit"
                className="w-[48%] py-3 !bg-orange-500 hover:!bg-orange-600 !text-white !text-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </PrimaryButton>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill="#22C55E" />
              </svg>
            </div>
            <h4 className="font-bold text-2xl mb-2">Thank you for submitting!</h4>
            <p className="text-center text-gray-600 mb-6">
              Your details have been received. We will contact you shortly.
            </p>
            <PrimaryButton
              onClick={onClose}
              className="px-8 py-2 !bg-orange-500"
            >
              Close
            </PrimaryButton>
          </div>
        )}
      </div>
    </Modal>
  );
}
