import React, { useState } from 'react';
import { Dialog, DialogBackdrop } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import usePostJobWizard from '@/hooks/usePostJobWizard';
import axios from 'axios';
import { Snackbar } from '@mui/joy';
import { Input, message, Select } from 'antd';

const { Option } = Select;

const StepDetails = ({ onNext }) => {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    company_logo: '',
    location: '',
    category: '',
    salary_range: '',
    tags: [],
    expires_at: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleTagChange = (value) => {
    setFormData({ ...formData, tags: value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Title</label>
        <Input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g. Senior Software Engineer"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <Input
          type="text"
          required
          value={formData.company_name}
          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Your company name"
        />
      </div>
      {/*
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
        <input
          type="text"
          value={formData.company_logo}
          onChange={(e) => setFormData({ ...formData, company_logo: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="https://example.com/logo.png"
        />
      </div> */}

      <div>
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <Input
          type="text"
          required
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="e.g. New York, NY"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <Select
            required
            value={formData.category}
            onChange={(value) => setFormData({ ...formData, category: value })}
            className="w-full"
            placeholder="Select a category"
          >
            <Option value="Full Time">Full Time</Option>
            <Option value="Part Time">Part Time</Option>
            <Option value="Contract">Contract</Option>
            <Option value="Internship">Internship</Option>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Salary Range</label>
          <Input
            type="text"
            value={formData.salary_range}
            onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="e.g. $80,000 - $100,000"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Enter tags and press enter"
          onChange={handleTagChange}
          value={formData.tags}
          tokenSeparators={[',']}
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
        <Input
          type="date"
          value={formData.expires_at}
          onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min={new Date().toISOString().split('T')[0]}
        />
      </div> */}

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="bg-[#FF9500] text-white px-4 py-2 rounded-md hover:bg-[#FF9500] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

const StepDescription = ({ onNext, onBack, formData }) => {
  const [description, setDescription] = useState(formData?.description || '');
  const [requirements, setRequirements] = useState(formData?.requirements || '');
  const [responsibilities, setResponsibilities] = useState(formData?.responsibilities || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({
      ...formData,
      description,
      requirements,
      responsibilities
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Job Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Describe the role and its purpose..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Requirements</label>
        <textarea
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List the required skills, qualifications, and experience..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
        <textarea
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="List the key responsibilities and duties..."
        />
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-[#FF9500] text-white px-4 py-2 rounded-md hover:bg-[#FF9500] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

const StepSuccess = ({ onBack, formData = {}, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/jobs', {
        ...formData,
        status: 'draft'
      });

      if (response.data.success) {
        message.success('Job posted successfully');
        onClose();
      } else {
        setError(response.data.message || 'Failed to save job');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred while saving the job');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-2 text-lg font-medium text-gray-900">Review Your Job Posting</h3>
        <p className="mt-1 text-sm text-gray-500">
          Please review the details before submitting for review.
        </p>
      </div>

      <div className="mt-4 space-y-4">
        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-medium text-gray-900">{formData?.title || 'No title provided'}</h4>
          <p className="text-sm text-gray-600">
            {formData?.company_name || 'No company'} • {formData?.location || 'No location'}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {formData?.category || 'No category'} • {formData?.salary_range || 'No salary'}
          </p>
          {formData?.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {formData.tags.map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-gray-200 rounded-md text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h4 className="font-medium text-gray-900">Description</h4>
          <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap h-64 overflow-y-auto">
            {formData?.description || 'No description provided'}
          </p>
        </div>

        {formData?.requirements && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-900">Requirements</h4>
            <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap">
              {formData.requirements}
            </p>
          </div>
        )}

        {formData?.responsibilities && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-900">Responsibilities</h4>
            <p className="text-sm text-gray-600 mt-2 whitespace-pre-wrap">
              {formData.responsibilities}
            </p>
          </div>
        )}

        {formData?.expires_at && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium text-gray-900">Expiry Date</h4>
            <p className="text-sm text-gray-600 mt-2">
              {new Date(formData.expires_at).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Submit for Review'}
        </button>
      </div>

      <Snackbar
        autoHideDuration={4000}
        open={!!error}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        variant='solid'
        color={'danger'}
        onClose={() => setError(null)}
      >
        {error}
      </Snackbar>
    </div>
  );
};




const TITLES = [
  'Job Details',
  'Job Description',
  'Review & Post',
];

const PostJobModal = ({ open, onClose }) => {
  const { step, next, back, reset, formData } = usePostJobWizard();

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="relative bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 mx-auto z-10">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h3 className="text-lg font-semibold">{TITLES[step]}</h3>
            <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {step === 0 && <StepDetails onNext={next} />}
          {step === 1 && <StepDescription onNext={next} onBack={back} formData={formData} />}
          {step === 2 && <StepSuccess onBack={back} formData={formData} onClose={handleClose} />}
        </div>
      </div>
    </Dialog>
  );
};

export default PostJobModal;
