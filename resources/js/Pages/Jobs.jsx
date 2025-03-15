import GuestLayout from '@/Layouts/GuestLayout'
import React, { useEffect, useState } from 'react'
import banner from '../../../public/assets/img/jobs/bannertop.png';
import { Search, MapPin, ChevronDown, Briefcase, Bookmark, Filter, ChevronLeft, ChevronRight, BookmarkCheck } from 'lucide-react';
import axios from 'axios';
import Loader from '@/Components/Loader';
import { Snackbar } from '@mui/joy';
import { usePage } from '@inertiajs/react';


function Jobs() {
    const [activeTab, setActiveTab] = useState('All Posts');

    const tabs = ['All Posts', 'Recent Post', 'Active', 'Saved', 'Applied'];

    const [total, setTotal] = useState(0)

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

    const getActionButtonClassName = (actionType) => {
        switch (actionType) {
            case 'Apply Now':
                return 'bg-black text-white hover:bg-gray-800';
            case 'Applied':
                return 'bg-blue-500 text-white';
            case 'Closed':
                return 'bg-gray-400 text-white cursor-not-allowed';
            default:
                return 'bg-black text-white hover:bg-gray-800';
        }
    };
    const [jobPostings, setJobPostings] = useState([]);
    const getJobs = async () => {
        setLoading(true)
        const res = await axios.get(`/api/get-job-postings`);
        setJobPostings(res.data.data);
        setTotal(res.data.total)
        setLoading(false)
    }

    useEffect(() => {
        getJobs()
    }, [])
    const user = usePage().props.auth.user;
    const saveJob = (id) => {
        if (!user) {
            setOpen(true);
            return;
        }
        setLoading(true)
        axios.post("/api/bookmark-job", { job_id: id }).then((res) => {
            getJobs()
        });
    }
    const applyJob = (id) => {
        if (!user) {
            setOpen(true);
            return;
        }

        window.location.href = "/job-details/" + id;
        // setLoading(true)
        // axios.post("/api/bookmark-job", { job_id: id }).then((res) => {
        //     getJobs()
        // });
    }
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = React.useState(false);
    return (
        <GuestLayout>
            <Loader show={loading} />
            <Snackbar
                autoHideDuration={4000}
                open={open}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                variant='solid'
                color={'danger'}
                onClose={(event, reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    setOpen(false);
                }}
            >
                Please login first.
            </Snackbar>
            <section>
                <div className='bg-black rounded-b-3xl relative'>
                    <img src={banner} alt="" className='w-full object-fill' />
                    <div className='top-1/3 absolute left-10'>
                        <p className='text-white text-3xl'>Find Your</p>
                        <p className='text-7xl text-white font-bold'>Dream Job</p>
                    </div>
                    <div className="flex flex-col absolute bottom-12 w-11/12 left-12 md:flex-row items-center gap-2 border border-gray-400 bg-opacity-70 rounded-full p-2  shadow-md">
                        <div className="flex items-center flex-1 bg-transparent pl-4 py-2">
                            <Search className="text-gray-500 mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Job Title Or Keyword"
                                className="bg-transparent w-full focus:outline-none text-white"
                            />
                        </div>

                        <div className="h-10 w-px bg-gray-400 hidden md:block"></div>

                        <div className="flex items-center flex-1 bg-transparent px-4 py-2">
                            <Briefcase className="text-gray-500 mr-2" size={20} />
                            <select className="bg-transparent w-full focus:outline-none text-white appearance-none cursor-pointer">
                                <option value="">Sector</option>
                                <option value="technology">Technology</option>
                                <option value="healthcare">Healthcare</option>
                                <option value="finance">Finance</option>
                                <option value="education">Education</option>
                            </select>
                            <ChevronDown className="text-gray-500" size={16} />
                        </div>
                        <div className="h-10 w-px bg-gray-400 hidden md:block"></div>

                        <div className="flex items-center flex-1 bg-transparent px-4 py-2">
                            <MapPin className="text-gray-500 mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Location"
                                className="bg-transparent w-full focus:outline-none text-white"
                            />
                        </div>

                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                            Search Job
                        </button>
                    </div>

                </div>
            </section>
            <section className='py-12'>
                <div className="container mx-auto px-4 py-6 bg-gray-50">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h1 className="text-2xl font-bold">{total}</h1>
                            <p className="text-gray-600">Jobs Found</p>
                        </div>

                        <div className="flex space-x-2">
                            <div className="flex">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        className={`px-4 py-2 text-sm font-medium rounded-md ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-gray-800 border'}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            <button className="p-2 bg-white border rounded-md">
                                <Filter size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {jobPostings.map(job => (
                                <div className="hover:bg-gradient-to-r p-[4px]  rounded-lg hover:from-[#6EE7B7] hover:via-[#3B82F6] hover:to-[#9333EA] transition-all duration-300 ease-in-out">
                                    <div key={job.id} className="bg-white rounded border p-4 relative ">
                                        <div className="flex justify-between items-start">
                                            <div className="flex items-start space-x-3">
                                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                    <span className="text-xl">👓</span>
                                                </div>

                                                <div>
                                                    <h3 className="font-bold text-lg">{job.title}</h3>
                                                    <p className="text-gray-600">{job.company_name}, {job.location}</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-700" onClick={() => { saveJob(job.id) }}>
                                                {job.job_interaction > 0 ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                                            </button>
                                        </div>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className={`px-3 py-1 rounded-md text-sm ${getStatusClassName(job.status)}`}>
                                                {job.status}
                                            </span>
                                            {
                                                job.tags !== null && JSON.parse(job.tags).length > 0 && JSON.parse(job.tags).map((tag) => (
                                                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">
                                                        {tag}
                                                    </span>
                                                ))
                                            }


                                        </div>

                                        <div className="mt-4 flex justify-between items-center">
                                            <div>
                                                {/* <div className="flex -space-x-2 hidden  ">
                                                    {[1, 2, 3].map(i => (
                                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-600 mt-1">{job.applicants}</p>
                                                <p className="text-sm text-gray-500">Posted {job.posted}</p> */}
                                            </div>

                                            {<button onClick={() => applyJob(job.id)} className={`px-4 py-3 uppercase text-sm rounded-md font-bold ${getActionButtonClassName(job.actionType)}`}>
                                                Apply Now
                                            </button>}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center hidden">
                        <div className="flex items-center space-x-2">
                            <button className="p-2 rounded-full border">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white">
                                1
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                2
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                3
                            </button>
                            <span className="px-2">...</span>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
                                7
                            </button>
                            <button className="p-2 rounded-full border">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    )
}

export default Jobs