import React, { useState, useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import axios from 'axios';
import { CalendarIcon, User2Icon } from 'lucide-react';
import Loader from '@/Components/Loader';

const BlogDetail = ({ id }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/get-blog?id=${id}`);
      setBlog(response.data.data);
    } catch (err) {
      console.error('Error fetching blog data:', err);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <GuestLayout>
        <Loader show={loading} />
      </GuestLayout>
    );
  }

  if (error || !blog) {
    return (
      <GuestLayout>
        <div className="max-w-5xl mx-auto py-12 px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">
              {error || 'Blog post not found'}
            </h1>
            <p className="mt-4">
              The blog post you're looking for couldn't be found or an error occurred.
            </p>
            <a href="/blogs" className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Return to Blogs
            </a>
          </div>
        </div>
      </GuestLayout>
    );
  }

  return (
    <GuestLayout>
      <div className="max-w-5xl mx-auto py-8 px-4">
        {/* Featured Image */}
        <div className="w-full mb-8">
          <img
            src={`/assets/img/blog-images/${blog.Blog_image}`}
            alt={blog.Blog_title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        {/* Blog Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {blog.Blog_title}
          </h1>

          <div className="flex items-center text-gray-600 mb-6">
            <div className="flex items-center mr-6">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">{blog.publish_date}</span>
            </div>

            {blog.guid && (
              <div className="flex items-center">
                <User2Icon className="w-4 h-4 mr-2" />
                <span className="text-sm">{blog.guid}</span>
              </div>
            )}
          </div>

          {blog.BlogType && (
            <div className="mb-6">
              <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                {blog.BlogType}
              </span>
            </div>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.Blog_desc }} />
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.Blog_title)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#1DA1F2] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
            >
              Twitter
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#4267B2] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
            >
              Facebook
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0077B5] text-white px-4 py-2 rounded-md hover:bg-opacity-90"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Return to Blogs */}
        <div className="mt-12">
          <a
            href="/blogs"
            className="inline-flex items-center text-black hover:underline"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to all blogs
          </a>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated With Industry Insights</h2>

        <p className="text-gray-600 mb-8 text-lg">
          Join Our Newsletter And Get The Latest Hiring Trends, Career Advice, And Industry
          News Delivered To Your Inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="flex-grow max-w-xl px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200">
            Join Us
          </button>
        </div>
      </div>
    </GuestLayout>
  );
};

export default BlogDetail;
