import React, { useState } from 'react';

const JobApplicationModal = ({ isOpen, onClose, jobId }) => {


    const [resumeUrl, setResumeUrl] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [resumeFile, setResumeFile] = useState(null);

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to include file upload along with other form fields
        const formData = new FormData();
        formData.append('job_id', jobId);
        if (resumeFile) {
            formData.append('resume', resumeFile);
        }
        formData.append('cover_letter', coverLetter);

        axios.post("/api/save-job", formData).then(res => {
            alert("Application submitted successfully.");
            onClose()
        });

    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Modal Backdrop */}
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-lg z-50 w-full max-w-md p-6">
                <h2 className="text-xl font-bold mb-4">Apply for Job</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-700">
                            Resume URL
                        </label>
                        <input
                            type="file"
                            id="resumeFile"
                            onChange={handleFileChange}
                            className="mt-1 block w-full"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobApplicationModal;
