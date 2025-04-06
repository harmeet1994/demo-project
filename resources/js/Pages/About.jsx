import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

function About() {
    return (
        <GuestLayout>
            <div class=" mx-auto px-5 pt-3">
                <div class="w-full ">
                    <img src="../assets/img/about-us/about.png" class="w-full rounded-3xl" alt="" />
                </div>
            </div>

            <div class="mx-auto px-4 mt-10 container">

                <div class="mb-8">
                    <h1 class="text-4xl font-bold">
                        About JobSchool
                    </h1>
                    <p class="text-gray-800 text-xl mt-2">
                        We’re not just teaching “ we are transforming futures”
                        At JobSchool, we help students and job seekers turn potential into performance.
                        Built on a mission to make career growth accessible to all, we combine practical skills, real-world training, and personal mentorship to bridge the gap between ambition and opportunity.

                    </p>
                    <h4 className='font-bold text-lg'>Learn smart. Grow fast. Get hired.</h4>
                </div>


                <div class="mb-8">
                    <div data-aos="fade-up">
                        <div className="space-y-2"><h3 class="text-center text-xl mt-4 mb-0">Founder's Vision</h3>
                            <p className='text-5xl font-bold text-center'>Meet The Team Behind Your Success</p></div>
                        <div class="grid md:grid-cols-2 gap-4 mt-16 jutify-center">
                            <div class="px-4">
                                <div class="flex flex-col md:flex-row gap-4 bg-gray-100 border rounded-lg border-gray-300 p-5">
                                    <div class="md:w-1/3 mb-4 md:mb-0">
                                        <img src="../assets/img/about-us/rishabh.png" class="mx-auto" alt="" />
                                    </div>
                                    <div class="md:w-2/3">
                                        <h3 class=" md:text-left text-center font-bold text-xl">Rishabh Arora</h3>
                                        <h5 class=" md:text-left text-center text-lg">Founder</h5>
                                        <p class=" md:text-left text-center text-gray-600 text-lg italic">
                                            "Our vision is to empower lifelong learning and career success by equipping
                                            individuals with skills and mindset for continuous growth."
                                        </p>
                                        <div class="flex md:justify-start justify-center gap-2 items-center">
                                            <a href="https://www.linkedin.com/in/rishabh-arora-378682118" target="_blank">
                                                <AiFillLinkedin size={32} color='gray' />
                                            </a>
                                            <a href="mailto:rishabharora058@gmail.com">
                                                <FaEnvelope size={30} color='gray' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="px-4">
                                <div class="flex flex-col md:flex-row bg-gray-100 gap-4 border rounded-lg border-gray-300 p-5">
                                    <div class="md:w-1/3 mb-4 md:mb-0">
                                        <img src="../assets/img/about-us/bhavesh.png" class="mx-auto" alt="" />
                                    </div>
                                    <div class="md:w-2/3">
                                        <h3 class=" md:text-left text-center font-bold text-xl">Bhavesh Khurana</h3>
                                        <h5 class=" md:text-left text-center text-lg">Founder</h5>
                                        <p class=" md:text-left text-center text-gray-600 text-lg italic">
                                            "We founded JobSchool to bridge the gap between academics & professional world,
                                            empowering students with practical skills and confidence."
                                        </p>
                                        <div class="flex md:justify-start justify-center gap-2 items-center">
                                            <a href="https://www.linkedin.com/in/bhavesh-khurana-9891b2113" target="_blank">
                                                <AiFillLinkedin size={32} color='gray' />
                                            </a>
                                            <a href="mailto:admin@envisionists.in">
                                                <FaEnvelope size={30} color='gray' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mt-10">
                <section id="mission" class="bg-[#0c0c0c]">
                    <div class="container mx-auto px-4 py-10">
                        <div className='space-y-5'>
                            <h1 class="text-center text-white text-3xl font-bold">Our Mission</h1>
                            <div class="text-white text-center md:w-4/5 mx-auto">
                                To empower individuals with the tools, resources, and
                                guidance needed to excel in their careers. Whether you're a student preparing to enter the
                                workforce or a professional seeking a career pivot, JobSchool is your trusted partner.
                            </div>
                            <div class="mx-auto text-center mt-4">
                                <div class="grid md:grid-cols-3 gap-4 md:gap-0 mt-4">
                                    <div class="mb-4">
                                        <h1 class=" text-white text-5xl font-bold mb-0 text-center"><span>30</span>K+</h1>
                                        <h4 class="text-gray-400 text-center text-base md:text-lg">Candidates</h4>
                                    </div>
                                    <div class="mb-4">
                                        <h1 class=" text-white text-5xl font-bold mb-0 text-center"><span>200</span>+</h1>
                                        <h4 class="text-gray-400  text-center text-base md:text-lg">Companies</h4>
                                    </div>
                                    <div class="mb-4">
                                        <h1 class=" text-white text-5xl font-bold mb-0 text-center"><span>20</span>K+</h1>
                                        <h4 class="text-gray-400  text-center text-base md:text-lg">Job Placements</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-16">
                    <div class="container mx-auto px-4">
                        <div className='space-y-16'>
                            <h1 class="text-gray-800 font-bold text-center text-4xl">We Help The Learners Via</h1>
                            <div class="w-full">
                                <img src="../assets/img/about-us/about-us-strip.png" class="mx-auto" alt="" />
                            </div>
                            <div class="mx-auto mt-4">
                                <p class=" text-center text-lg">
                                    What sets us apart is our deep connection to acedemic execellence. Designed by "University
                                    of Oxford" alumini with insights from its professors and PhD students, JobSchool blends
                                    education and technology to connect individuals with opportunities while fostering
                                    community-driven growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </GuestLayout>
    )
}

export default About