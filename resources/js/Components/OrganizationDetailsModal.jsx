import { useState } from 'react';
import Modal from './Modal';
import TextInput from './TextInput';
import axios from 'axios';
import submitImage from '../../../public/assets/img/submit.webp';

export default function OrganizationDetailsModal({ show, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    company: '',
    email: '',
    mobile: '',
    location: '',
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
      const response = await axios.post('/api/organizations', formData);
      if (response.data.status === 'success') {
        onSubmit(response.data);
        setSuccess(true)
        // onClose();
      }
    } catch (err) {
      console.log(err)
      setError(err.response?.data?.message || 'An error occurred while saving the organization details');
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
    <Modal show={show} onClose={onClose} maxWidth="xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium"> {!success && "Your Organisation Details"}</h2>
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

        {!success && <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Company
            </label>
            <TextInput
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="!w-full !border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Organisation Email
            </label>
            <TextInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" !w-full !border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Mobile no
            </label>
            <TextInput
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="!w-full !border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job Location
            </label>
            <TextInput
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="!w-full !border-gray-300 "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Training Session
            </label>
            <select
              name="trainingSession"
              value={formData.trainingSession}
              onChange={handleChange}
              className="border-b border-gray-300 outline-none p-3.5 w-full"
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
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              disabled={isSubmitting}
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>}
        {success && <div className='flex flex-col items-center justify-center'>

          <img src={submitImage} alt="" className='w-72' />
          <h4 className='font-bold text-2xl'>Congratulations</h4>
          <p className='text-center'>Thanks for enrolling in our corporate training course, We will Connect with you soon for further discussion</p>

        </div>}
      </div>
    </Modal>
  );
}
