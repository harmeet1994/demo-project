import GuestLayout from '@/Layouts/GuestLayout'
import React, { useEffect, useState } from 'react'
import { ArrowLeft, BookmarkIcon } from 'lucide-react';
import axios from 'axios';
import Loader from '@/Components/Loader';
import JobApplicationModal from '@/Components/JobApplicationModel';


function JobDetails({ id }) {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [job, setjob] = useState(null)
    const getDetails = async () => {
        setLoading(true)
        const res = await axios.get("/api/get-job-details?id=" + id);
        setjob(res.data)
        setLoading(false)
    }
    const getStatusClassName = (status) => {
        switch (status) {
            case 'Actively Searching':
                return 'bg-green-600 text-white';
            case 'Closed':
                return 'bg-red-600 text-white';
            case 'In Review':
                return 'bg-orange-500 text-white';
            default:
                return 'bg-gray-200 text-gray-700';
        }
    };
    useEffect(() => {
        getDetails()
    }, [])
    return (
        <GuestLayout>
            <JobApplicationModal jobId={id} isOpen={modal} onClose={() => { setModal(false) }} />
            <Loader show={loading} />
            <div style={{ background: "url('/assets/img/jobs/job-banner.png') no-repeat" }} className="pt-80 pb-10 jobDetails">
                <div className="max-w-5xl mx-auto  bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 border border-gray-200 rounded-md flex items-center justify-center p-2">
                                <svg className="w-10 h-10 text-indigo-900" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4C9.46 4 7.5 5.96 7.5 8.5c0 2.47 1.88 4.5 4.5 4.5 2.54 0 4.5-2.03 4.5-4.5C16.5 5.96 14.54 4 12 4zm0 7c-1.38 0-2.5-1.12-2.5-2.5S10.62 6 12 6s2.5 1.12 2.5 2.5S13.38 11 12 11z" />
                                    <path d="M12 13c-4.96 0-9 4.04-9 9h18c0-4.96-4.04-9-9-9zm0 2c3.31 0 6 2.69 6 6H6c0-3.31 2.69-6 6-6z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{job && job.company_name}</h3>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <button className="flex items-center text-gray-600">
                                <ArrowLeft size={16} className="mr-1" />
                                <span>Back</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center mb-1 hidden">
                        <div className="flex -space-x-2 mr-2">
                            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                        </div>
                        <span className="text-sm font-medium">20+ Applicants</span>
                    </div>

                    <h1 className="text-3xl font-bold mt-4 mb-1">{job && job.title}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                        <span>{job && job.location}</span>
                        <span className="mx-2">•</span>
                        <span>Posted {job && job.created_ago}</span>
                    </div>

                    <div className="my-4 flex flex-wrap gap-2">
                        <span className={`px-3 py-1 rounded-md text-sm ${getStatusClassName(job && job.status)}`}>
                            {job && job.status}
                        </span>
                        {
                            job && job.tags !== null && JSON.parse(job.tags).length > 0 && JSON.parse(job.tags).map((tag) => (
                                <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                                    {tag}
                                </span>
                            ))
                        }


                    </div>

                    <div className="flex gap-3 mb-8">
                        <button onClick={() => { setModal(true) }} className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">Apply Now</button>
                        {/* <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition">Save</button> */}
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-4">About The Job</h2>
                        <div dangerouslySetInnerHTML={{ __html: job && job.description }} />
                    </div>

                </div>
            </div>

        </GuestLayout>
    )
}

export default JobDetails