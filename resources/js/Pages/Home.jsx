import PrimaryButton from '@/Components/PrimaryButton'
import GuestLayout from '@/Layouts/GuestLayout'
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChooseCard from '@/Components/ChooseCard';
import ClientMarquee from '@/Components/ClientMarquee';
import Testimonials from '@/Components/Testimonials';
import axios from 'axios';
import BlogCard from '@/Components/BlogCard';

function Home() {
  const scrollToHash = () => {

    const hash = window.location.hash.substring(1); // Remove '#'
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 500);

    }
  };

  // Call this function on page load or after navigation
  useEffect(() => {
    scrollToHash();
  }, []);
  AOS.init();
  const chooseCardsData = [
    {
      src: "../assets/img/whychooseus/placement.png",
      title: "Exclusive Placement Opportunities",
      sub_heading: "Direct access to top employers for a seamless hiring process.",
    },
    {
      src: "../assets/img/whychooseus/industry-driven.png",
      title: "Industry-Driven Capstone Projects",
      sub_heading: "Practical challenges sharpening critical thinking and problem-solving skills.",
    },

    {
      src: "../assets/img/whychooseus/softskill.png",
      title: "Soft Skills Development",
      sub_heading: "Confidence-building workshops on communication, leadership, and interview readiness.",
    },
    {
      src: "../assets/img/whychooseus/expert-lead.png",
      title: "Expert-Led Masterclasses",
      sub_heading: "Insights from industry leaders connecting academics to real-world applications.",
    },

    {
      src: "../assets/img/whychooseus/education-employment.png",
      title: "Education to Employment",
      sub_heading: "Industry-aligned training to meet employer expectations.",
    },

    {
      src: "../assets/img/whychooseus/technology.png",
      title: "Technology Tools Training",
      sub_heading: "Hands-on experience with Excel, Power BI, and Tableau for data-driven roles.",
    },
  ];


  const images = [
    { "src": '/assets/img/3.jpeg', "x": 100, "y": 0, "rotate": -20, xx: 100, yy: 0, rrotate: -10 },
    { "src": '/assets/img/1.jpeg', "x": 0, "y": 150, "rotate": -20, xx: 0, yy: 150, rrotate: -10 },
    { "src": '/assets/img/2.jpeg', "x": 180, "y": 150, "rotate": 20, xx: 180, yy: 150, rrotate: 15 },
  ]


  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const data = await axios.get("/api/get-blogs");
    setBlogs(data.data.data);
  }

  useEffect(() => {
    getBlogs();
  }, [])
  return (
    <GuestLayout>
      <section id="hero" className="py-10 md:py-20 flex items-end justify-start px-4 md:px-5 h-[50vh] md:h-[70vh] lg:h-[90vh] relative">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/assets/img/banner-image.png')" }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40 md:opacity-0 z-10"></div>

        {/* Content */}
        <div className="text-left ml-0 sm:ml-5 pl-0 sm:pl-4 w-full md:w-auto z-20 relative">
          <p className="text-white md:text-black font-bold font-roboto mb-2 text-sm md:text-base">
            Over 20,000+ students placed in more than 200 top companies
          </p>
          <h1 className="text-white md:text-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold">
            SHAPING <br className="hidden sm:block" /> PROFESSIONALS OF<br className="hidden sm:block" /> TOMORROW, TODAY
          </h1>
          <PrimaryButton className='mt-4'>Get Started</PrimaryButton>
        </div>
      </section>

      <section id="about" className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-gray-900 font-bold font-roboto text-2xl md:text-4xl">Your Growth, Our Mission</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-6 min-h-[300px] md:min-h-[500px] py-5 md:py-10">
            <div className="relative flex justify-center">
              <img src="../assets/img/arrow.png" className="absolute -top-12 left-0 hidden md:block" alt="" />
              <motion.div
                className="relative flex md:justify-center items-center w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                whileHover="hover"
              >
                {images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src.src}
                    alt={`Image ${index + 1}`}
                    className="absolute w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-cover rounded-md"
                    initial={{
                      x: window.innerWidth < 768 ? src.x * 0.6 : src.x,
                      y: window.innerWidth < 768 ? src.y * 0.6 : src.y,
                      rotate: src.rotate
                    }}
                    variants={{
                      hover: {
                        x: window.innerWidth < 768 ? src.xx * 0.6 : src.xx,
                        y: window.innerWidth < 768 ? src.yy * 0.6 : src.yy,
                        rotate: src.rrotate,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <div className='col-span-2 px-2 sm:px-6 mt-20 md:mt-0 md:px-10 lg:px-20 space-y-5 md:space-y-10'>
              <div>
                <p className="text-gray-700 uppercase tracking-wider text-lg md:text-xl">A BRIEF</p>
                <h3 className="text-gray-900 font-bold font-roboto text-2xl md:text-4xl">About Us</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-10 mt-3 md:mt-6">
                <div>
                  <h2 className="text-[#182850] font-bold text-3xl md:text-5xl">30K+</h2>
                  <p className="text-gray-600 text-xl md:text-3xl">Candidates</p>
                </div>
                <div>
                  <h2 className="text-[#182850] font-bold text-3xl md:text-5xl">200+</h2>
                  <p className="text-gray-600 text-xl md:text-3xl">Companies</p>
                </div>
                <div>
                  <h2 className="text-[#182850] font-bold text-3xl md:text-5xl">20K+</h2>
                  <p className="text-gray-600 text-xl md:text-3xl">Job Placements</p>
                </div>
                <div>
                  <h2 className="text-[#182850] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">7LPA - 12LPA</h2>
                  <p className="text-gray-600 text-xl md:text-3xl">Avg Salary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-8 md:py-16">
        <div>
          <div className="container mx-auto mb-4 md:mb-8 px-4">
            <p className="text-gray-700">Courses</p>
            <h3 className="text-gray-900 font-bold font-roboto text-3xl md:text-5xl">Transform with us</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="d_card d_card_1 cursor-pointer" onClick={() => window.location.href = '/courses'}>
                <div className="content-card">
                  <h2 className="heading mb-0 text-white text-lg md:text-xl lg:text-2xl">
                    Personalized Training
                    <p className="text-white text-sm md:text-lg font-normal">For Individuals</p>
                  </h2>
                  <p className="data-content">
                    <a href="/courses" className="text-white inline-flex items-center mt-3 md:mt-5">
                      Know More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20" width="20"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <div className="d_card d_card_2 cursor-pointer" onClick={() => window.location.href = '/career-campus'}>
                <div className="content-card">
                  <h2 className="heading mb-0 text-white text-lg md:text-xl lg:text-2xl">Campus to Career
                    <p className="text-white text-sm md:text-lg font-normal">For Colleges/Institutes</p>
                  </h2>
                  <p className="data-content">
                    <a href="/career-campus" className="text-white inline-flex items-center mt-3 md:mt-5">
                      Know More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20"
                        width="20" strokeWidth="1.5" stroke="currentColor" className="ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <div className="d_card d_card_3 cursor-pointer" onClick={() => window.location.href = '/corporate'}>
                <div className="content-card">
                  <h2 className="heading mb-0 text-white text-lg md:text-xl lg:text-2xl">Professional Skill Bootcamp
                    <p className="text-white text-sm md:text-lg font-normal">For Companies/Corporates</p>
                  </h2>
                  <p className="data-content">
                    <a href="/corporate" className="text-white inline-flex items-center mt-3 md:mt-5">
                      Know More
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="20"
                        width="20" strokeWidth="1.5" stroke="currentColor" className="ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whyChooseUs" className="py-8 md:py-16 whychooseus bg-gradient-to-b from-[#182A54] to-[#0E1932] text-white">
        <div className="container mx-auto mb-4 md:mb-8 px-4">
          <p>Our Services</p>
          <h3 className="font-bold font-roboto text-3xl md:text-5xl">Why Choose Us?</h3>
        </div>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-4 md:mt-8 py-6 md:py-12 px-4">
          {
            chooseCardsData.map((choose, index) => (
              <ChooseCard key={index} src={choose.src} title={choose.title} sub_heading={choose.sub_heading} />
            ))
          }
        </div>
      </section>

      <section id="clients" className="py-8 md:py-16">
        <div className="container mx-auto mb-4 md:mb-8 px-4">
          <p>Network</p>
          <h3 className="font-bold font-roboto text-3xl md:text-5xl">200+ Companies that hire our candidates</h3>
        </div>
        <ClientMarquee />
      </section>

      <section id="testimonials" className="py-8 md:py-16">
        <div className="container mx-auto mb-4 md:mb-8 px-4">
          <p>Testimonials</p>
          <h3 className="font-bold font-roboto text-3xl md:text-5xl">Real Insights</h3>
        </div>
        <Testimonials />
      </section>

      <section id="blogs" className="py-8 md:py-16">
        <div className="container mx-auto mb-4 md:mb-8 px-4">
          <p>Blogs</p>
          <h3 className="font-bold font-roboto text-3xl md:text-5xl">Check our Blogs</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {
            blogs.map((blog, index) => (
              <BlogCard key={index} title={blog.Blog_title} publishDate={blog.publish_date} image={`${blog.Blog_image}`} />
            ))
          }
        </div>
      </section>
    </GuestLayout>
  )
}

export default Home
