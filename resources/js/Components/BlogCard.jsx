import React from "react";

export default function BlogCard({ publishDate, title, image }) {
    return (
        <div
            className="w-full p-4"
            data-aos="fade-up"
            data-aos-delay="100"
        >
            {/* Calendar Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 inline-block"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 5.25-2.25h9.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
            </svg>

            <span className="text-gray-700 ml-2 text-sm">{publishDate}</span>

            {/* Blog Title */}
            <h5 className="mt-2 text-xl font-semibold min-h-16">{title}</h5>

            {/* Blog Image */}
            <div className="mt-3 relative">
                <img
                    src={`assets/img/blog-images/${image}`}
                    alt={title}
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}
