import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Dropdown from '@/Components/Dropdown';
import { usePage } from "@inertiajs/react";
import DropdownBig from "./DropdownBig";
import CourseHeaderCard from "./CourseHeaderCard";
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const user = usePage().props.auth.user;
    return (
        <header className="fixed top-0 w-full bg-white/90 shadow px-5 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo & Navigation */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <ApplicationLogo />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 sm:ms-10">
                        <NavLink href="/" className="hover:text-blue-600">
                            Home
                        </NavLink>
                        <NavLink href="/about-us" className="hover:text-blue-600">
                            About Us
                        </NavLink>
                        {/* <a href="/#programs" className="inline-flex items-center  px-1 pt-1 font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none"> */}
                        <DropdownBig>
                            <DropdownBig.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center  px-1 pt-1 font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none"
                                    >
                                        Courses

                                        <svg
                                            className="-me-0.5 ms-2 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </DropdownBig.Trigger>

                            <DropdownBig.Content align="left" contentClasses="mt-2 bg-white">
                                <div className="mx-auto bg-white rounded-lg  p-6">
                                    {/* Header Section */}
                                    <div className="mb-6">
                                        <h3 className="text-amber-500 font-medium mb-1">Our Courses</h3>
                                        <h1 className="text-3xl font-bold text-gray-800">Your Guide To Upskilling</h1>
                                    </div>

                                    {/* Navigation Tabs */}
                                    {/* <div className="flex flex-wrap border-b mb-8">
                                        <div className="flex items-center py-4 px-6 bg-amber-50 border-t border-l border-r">
                                            <div className="bg-amber-100 rounded-full p-2 mr-3">
                                                <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                                </svg>
                                            </div>
                                            <span className="font-medium">Personalized Training</span>
                                        </div>

                                        <div className="flex items-center py-4 px-6">
                                            <div className="bg-blue-100 rounded-full p-2 mr-3">
                                                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10.394 2.08a1 1 0 00-0.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                                                </svg>
                                            </div>
                                            <span className="font-medium">Campus To Career</span>
                                        </div>

                                        <div className="flex items-center py-4 px-6">
                                            <div className="bg-indigo-100 rounded-full p-2 mr-3">
                                                <svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className="font-medium">Professional Skill Bootcamp</span>
                                        </div>
                                    </div> */}

                                    {/* Course Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                                        <DropdownBig.Link href="/operations">
                                            <CourseHeaderCard title={"Sales & Operational Roles"} tagLabel={"Best Seller"} bannerText={"Limited Time Offer"} img={"/assets/img/header/1.png"} /></DropdownBig.Link>
                                        <DropdownBig.Link href="/language">  <CourseHeaderCard title={"Language"} tagLabel={"Popular"} img={"/assets/img/header/2.png"} /></DropdownBig.Link>
                                        <DropdownBig.Link href="/ai-course">  <CourseHeaderCard title={"AI/ML Tech Courses"} tagLabel={"Basic + Intermediate"} img={"/assets/img/header/3.png"} bannerText={"Limited Time Offer"} /></DropdownBig.Link>


                                    </div>
                                </div>

                            </DropdownBig.Content>
                        </DropdownBig>
                        {/* </a> */}
                        <NavLink href="/blogs" className="hover:text-blue-600">
                            Blogs
                        </NavLink>
                        <NavLink href="/jobs" className="hover:text-blue-600">
                            Jobs
                        </NavLink>
                        <NavLink href="/contact-us" className="hover:text-blue-600">
                            Contact
                        </NavLink>
                    </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-2xl text-gray-700 focus:outline-none"
                    >
                        {menuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        }
                    </button>
                </div>

                {/* Desktop Buttons */}
                {
                    user === null && <div className="hidden md:flex items-center space-x-4">
                        <SecondaryButton onClick={() => { window.location.href = '/login' }}>Login</SecondaryButton>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>}

                {
                    user !== null && <div className="hidden md:flex  gap-2">

                        <div className="bg-[#FF9500] h-12 w-12 flex items-center justify-center rounded-full text-xl font-bold">
                            {user.name[0]}
                        </div>
                        <div>
                            <p className="font-semibold">{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>}
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full transition-all duration-300 ${menuOpen ? "block" : "hidden"
                    }`}
            >
                <nav className="flex flex-col items-start py-4 space-y-4 p-4">
                    <NavLink href="/" className="hover:text-blue-600">
                        Home
                    </NavLink>
                    <NavLink href="/about-us" className="hover:text-blue-600">
                        About Us
                    </NavLink>
                    <NavLink href="#programs" className="hover:text-blue-600">
                        Courses
                    </NavLink>
                    <NavLink href="/blogs" className="hover:text-blue-600">
                        Blogs
                    </NavLink>
                    <NavLink href="/job-postings" className="hover:text-blue-600">
                        Jobs
                    </NavLink>
                    <NavLink href="/contact-us" className="hover:text-blue-600">
                        Contact
                    </NavLink>
                    <NavLink href="/contact-us" className="hover:text-blue-600">
                        Login
                    </NavLink>

                </nav>
            </div>
        </header >
    );
}
