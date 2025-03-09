import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import Dropdown from '@/Components/Dropdown';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <Dropdown>
                            <Dropdown.Trigger>
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
                            </Dropdown.Trigger>

                            <Dropdown.Content align="left" contentClasses="mt-2 bg-white">
                                <Dropdown.Link
                                    className="font-bold py-3"
                                    href={route('ai-basic')}
                                >
                                    AI Basic
                                </Dropdown.Link>
                                <Dropdown.Link
                                    className="font-bold py-3"
                                    href={route('ai-inter')}
                                >
                                    AI Intermediate
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                        {/* </a> */}
                        <NavLink href="/blogs" className="hover:text-blue-600">
                            Blogs
                        </NavLink>
                        <NavLink href="/job-postings" className="hover:text-blue-600">
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
                <div className="hidden md:flex items-center space-x-4">
                    <SecondaryButton>Login</SecondaryButton>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
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
