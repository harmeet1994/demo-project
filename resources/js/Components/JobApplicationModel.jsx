import React, { useState } from 'react';
import TextInput from './TextInput';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepIndicator from '@mui/joy/StepIndicator';
import { CheckIcon, Linkedin } from 'lucide-react';
import { usePage } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { UploadFile } from '@mui/icons-material';
import submitImage from '../../../public/assets/img/submit.webp';
import Loader from './Loader';

const JobApplicationModal = ({ isOpen, onClose, jobId, job }) => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([])
    const { Dragger } = Upload;
    const props = {
        multiple: false,
        maxCount: 1,
        name: 'file',
        beforeUpload: file => {
            if (files.length > 1) {
                message.error('You can only upload one file!');
                return false;
            }
            return false;
        },
        onChange(info) {
            setFiles(info.fileList);
            console.log('File changed', info.fileList);
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    const user = usePage().props.auth.user;
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { name: 'Contact', status: 'current' },
        { name: 'Upload Resume', status: 'upcoming' },
        { name: 'Review Profile', status: 'upcoming' },
        { name: 'Application Submitted', status: 'upcoming' }
    ];

    const handleNext = () => {
        let error = false;
        if (activeStep === 0) {
            if (email === '' || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
                error = true;
                message.error("Please enter a vaild email address");
            }
            if (phone === '' || !(/^\d{10}$/.test(phone))) {
                error = true;
                message.error("Please enter a valid phone number");
            }
            if (error) return;
        }

        if (activeStep === 1) {
            if (linkedIn === "" || !(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(linkedIn))) {
                error = true;
                message.error("Please enter a vaild LinkedIn URL");
            }
            if (files.length === 0) {
                error = true;
                message.error("Please upload your resume");
            }
            if (error) return;
        }
        if (!error && activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const [resumeUrl, setResumeUrl] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [resumeFile, setResumeFile] = useState(null);

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a FormData object to include file upload along with other form fields
        const formData = new FormData();
        formData.append('job_id', jobId);
        if (files.length > 0) {
            formData.append('resume', files[0].originFileObj);
        }

        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('linkedIn', linkedIn);
        setLoading(true)
        axios.post("/api/save-job", formData).then(res => {
            // alert("Application submitted successfully.");
            // onClose()
            if (activeStep < steps.length - 1) {
                setActiveStep(activeStep + 1);
            }
        }).finally(() => {
            setLoading(false)
        }
        ).catch(err => {
            console.log(err)
            message.error("Something went wrong. Please try again later.");
        }
        )

    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={onClose}
            ></div>
            <div className="bg-white rounded-xl shadow-lg p-8 w-8/12 mx-auto z-10">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Apply To {job.company_name}</h1>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Stepper */}
                <div className="mb-8">

                    <div className="flex items-center justify-between">
                        <Stepper sx={{ width: '100%' }} activeStep={activeStep}>
                            {steps.map((step, index) => (
                                <Step
                                    sx={{
                                        '--StepIndicator-size': '2.5rem',
                                    }}
                                    key={step.name}
                                    orientation="vertical"
                                    indicator={
                                        <StepIndicator
                                            variant={index < activeStep ? "solid" : index === activeStep ? "solid" : "outlined"}
                                            color={index <= activeStep ? "primary" : "neutral"}
                                        >
                                            {index < activeStep ? <CheckIcon fontSize="small" /> : index + 1}
                                        </StepIndicator>
                                    }
                                >
                                    {step.name}
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>


                <div>
                    {
                        activeStep === 0 && <div className='mb-8'  >
                            <div className="mb-8">
                                <h2 className="text-xl font-medium mb-6">Contact Info</h2>

                                <div className="flex items-center mb-6">

                                    <div>
                                        <h3 className="font-medium">{user.name}</h3>
                                        <p className="text-gray-500">{user.email}</p>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Email Address</label>
                                    <TextInput
                                        type="email"
                                        className=" w-full !border-gray-300"
                                        placeholder="i.e. davon@mail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2">Mobile no</label>
                                    <div className="relative">
                                        <select className="absolute left-0 top-0 h-full px-4   border-gray-300 focus:outline-none bg-transparent">
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                        </select>
                                        <TextInput
                                            type="tel"
                                            className=" w-full !border-gray-300 pl-24"
                                            placeholder="Phone number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end space-x-4">
                                <button
                                    onClick={handleBack}
                                    className="px-6 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-gray-200"
                                >
                                    Back
                                </button>
                                <PrimaryButton
                                    onClick={handleNext}
                                >
                                    Next
                                </PrimaryButton>
                            </div>
                        </div>
                    }

                    {activeStep === 1 && <div className='mb-8'  >
                        <div className="mb-8">
                            <h2 className="text-xl font-medium mb-6">Upload Resume</h2>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Resume</label>
                                <Dragger {...props}>
                                    <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                    </p>
                                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                    <p className="ant-upload-hint">
                                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                        banned files.
                                    </p>
                                </Dragger>
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Enter your LinkedIn Profile URL</label>
                                <TextInput
                                    className=" w-full !border-gray-300"
                                    placeholder="i.e. https://www.linkedin.com/in/olivia-untitled/"
                                    value={linkedIn}
                                    onChange={(e) => setLinkedIn(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleBack}
                                className="px-6 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-gray-200"
                            >
                                Back
                            </button>
                            <PrimaryButton
                                onClick={handleNext}
                            >
                                Next
                            </PrimaryButton>
                        </div>
                    </div>}

                    {activeStep === 2 && <div className='mb-8'  >
                        <div className="mb-8">
                            <Loader show={loading} />
                            <h2 className="text-xl font-medium mb-4">Review Profile</h2>
                            <h2 className="text-xl font-medium mb-2">Contact Info</h2>


                            <div className='space-y-3'>
                                <div>
                                    <h3 className="font-medium">{user.name}</h3>
                                    <p className="text-gray-500">{user.email}</p>
                                </div>
                                <div>  <h3 className="font-medium">Phone Number</h3>
                                    <p className="text-gray-500">{phone}</p></div>

                                <div>
                                    <h3 className="font-medium">Email Address</h3>
                                    <p className="text-gray-500">{email}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Resume</h3>
                                    <p className="py-4 bg-gray-100 px-4 rounded font-bold text-black inline-flex items-center w-full"> <UploadFile /> {files.length > 0 ? files[0].name : "No file uploaded"}</p>
                                </div>
                                <div>
                                    <h3 className="font-medium">LinkedIn Profile</h3>
                                    <p className="text-gray-500">{linkedIn}</p>
                                </div>
                            </div>

                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleBack}
                                className="px-6 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-gray-200"
                            >
                                Back
                            </button>
                            <PrimaryButton
                                onClick={handleSubmit}
                            >
                                Submit Application
                            </PrimaryButton>
                        </div>
                    </div>}

                    {activeStep === 3 && <div className='mb-8 text-center'  >
                        <div className="mb-8 flex flex-col items-center">
                            <h2 className="text-xl font-medium mb-6">Application Submitted</h2>
                            <img src={submitImage} alt="" className='h-60' />
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium hover:bg-gray-200"
                            >
                                Close
                            </button>
                        </div>
                    </div>}
                </div>



            </div>
        </div>
    );
};

export default JobApplicationModal;
