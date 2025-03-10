import React, { useState, useEffect } from 'react';

import { CalendarIcon } from 'lucide-react';
import GuestLayout from '@/Layouts/GuestLayout';
import axios from 'axios';
import Loader from '@/Components/Loader';
import { Pagination } from '@mui/material';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [blogTypes, setBlogTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('All');
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(1)
    const [page, setPage] = useState(1)
    useEffect(() => {
        // Fetch blog data - replace with your actual API call
        fetchBlogData();
        fetchBlogTypes();
    }, [page]);

    const fetchBlogData = async () => {
        setLoading(true)
        axios.get("/api/get-blogs-list?page=" + page).then((res) => {
            setBlogs(res.data.data.data);
            setTotal(res.data.data.last_page)
        }).finally(() => {
            setLoading(false)
        });
    };

    const fetchBlogTypes = async () => {
        const types = ['Recruitment Tips', 'Industry Insights', 'Career Advice', 'HR Technology'];
        setBlogTypes(types);
    };

    const handleBlogTypeChange = (type) => {
        setSelectedType(type);
    };

    const filteredBlogs = selectedType === 'All'
        ? blogs
        : blogs.filter(blog => blog.BlogType === selectedType);

    return (
        <GuestLayout>
            <Loader show={loading} />
            <div className="w-full">
                {/* Hero Banner */}
                <div className="w-full pt-20 pb-0 px-5">
                    <div className="w-full p-0">
                        <img src="/assets/img/blogs.png" className="w-full" alt="Blogs Banner" />
                    </div>
                </div>

                {/* Title Section */}
                <div className="max-w-7xl mx-auto mt-4 px-4">
                    <div>
                        <h1 className="font-bold text-3xl ">
                            Blogs
                        </h1>
                    </div>
                </div>

                {/* Blog Type Filters */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap mt-4" id="btnss">
                        <div className="relative m-0 mr-[5px] w-[140px] h-10">
                            <input
                                type="radio"
                                name="blogType"
                                id="All"
                                checked={selectedType === 'All'}
                                onChange={() => handleBlogTypeChange('All')}
                                className="absolute inset-0 opacity-[0.011] z-100 cursor-pointer"
                            />
                            <label
                                htmlFor="All"
                                className={`absolute inset-0 z-90 flex justify-center items-center text-sm border border-gray-800 rounded cursor-pointer ${selectedType === 'All' ? 'bg-gray-800 text-white' : ''
                                    }`}
                            >
                                All
                            </label>
                        </div>

                        {blogTypes.map((type) => (
                            <div key={type} className="relative m-0 mr-[5px] w-[140px] h-10">
                                <input
                                    type="radio"
                                    name="blogType"
                                    id={type.replace(/ /g, "_")}
                                    checked={selectedType === type}
                                    onChange={() => handleBlogTypeChange(type)}
                                    className="absolute inset-0 opacity-[0.011] z-100 cursor-pointer"
                                />
                                <label
                                    htmlFor={type.replace(/ /g, "_")}
                                    className={`absolute inset-0 z-90 flex justify-center items-center text-sm border border-gray-800 rounded cursor-pointer ${selectedType === type ? 'bg-gray-800 text-white' : ''
                                        }`}
                                >
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Blog Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                        {filteredBlogs.map((blog) => (
                            <div key={blog.ID} className="mb-4">
                                <a href={`/blog-detail?i=${blog.ID}`} className="block">
                                    <div className="rounded border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                                        <div className="pb-0 px-0 p-2">
                                            <p className="mb-0 text-gray-500 text-xs px-3 flex items-center">
                                                <CalendarIcon className="w-3.5 h-3.5 mr-1" />
                                                {blog.publish_date}
                                            </p>
                                            <h6 className="font-bold px-3  flex items-center h-10 md:h-10 text-sm">
                                                {blog.Blog_title}
                                            </h6>
                                            <div className="w-full mt-2 p-0">
                                                <img
                                                    src={`/assets/img/blog-images/${blog.Blog_image}`}
                                                    className="w-full h-[230px] object-cover rounded-b"
                                                    alt={blog.Blog_title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className='my-5 flex justify-center'>
                        <Pagination color='primary' count={total} onChange={(evt, pageNumber) => setPage(pageNumber)} variant="outlined" shape="rounded" />
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
};

export default Blogs;