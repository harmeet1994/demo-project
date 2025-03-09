import React, { useState } from "react";
import ApplicationLogo from "./ApplicationLogo";
import NavLink from "./NavLink";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

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
                        <a href="/#programs" className="inline-flex items-center  px-1 pt-1 font-semibold leading-5 transition duration-150 ease-in-out focus:outline-none">
                            Courses
                        </a>
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
