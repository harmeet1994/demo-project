import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { Clock, Calendar, BookOpen, Euro, Users, Code, IndianRupee } from 'lucide-react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion, { accordionClasses } from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import ClientMarquee from '@/Components/ClientMarquee';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import OrderDetailsModal from '@/Components/OrderDetailsModal';

function AiCourseLandingPageBasic() {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const user = usePage().props.auth.user;
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <GuestLayout>
      {showOrderModal && <OrderDetailsModal
        onClose={() => setShowOrderModal(false)}
        isOpen={showOrderModal}
        courseTitle="AI/ML Basic Course"
        courseDescription="A comprehensive program designed for students from both Technical and Non-Technical backgrounds to help them land AI &amp; Machine Learning jobs and internships"
        courseDuration="3 Months"
        courseSessions="2 Per Week"
        coursePrice="₹ 12,500"
        courseClasses="24"
      />}
      {/* Hero Section */}
      <section className="relative bg-black text-white md:block flex flex-col-reverse">
        <div className="md:absolute inset-0 z-20 bg-black bg-opacity-50 bg-blend-overlay p-5 md:p-0">
          <div className="flex h-full px-4 md:px-10 md:items-center">
            <div className="w-full md:w-1/2 md:text-left mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                AI/ML Job Readiness Program For Tech And Non-Tech Students
              </h1>
              <p className="text-gray-300 mb-6">
                A comprehensive program designed for students from both Technical and Non-Technical backgrounds to help them land AI &amp; Machine Learning jobs and internships
              </p>
              <div className="flex flex-wrap items-center md:justify-start gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_20020)">
                      <path d="M16.5 8.31002V9.00002C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7818 12.6775 15.7294 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.031C4.88376 15.4705 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.1161 1.51626 8.50226C1.62267 6.88844 2.24791 5.35227 3.29871 4.12283C4.34951 2.89338 5.76959 2.03656 7.34714 1.68013C8.92469 1.3237 10.5752 1.48677 12.0525 2.14502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_20020">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-sm">Transform Your Career</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_20020)">
                      <path d="M16.5 8.31002V9.00002C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7818 12.6775 15.7294 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.031C4.88376 15.4705 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.1161 1.51626 8.50226C1.62267 6.88844 2.24791 5.35227 3.29871 4.12283C4.34951 2.89338 5.76959 2.03656 7.34714 1.68013C8.92469 1.3237 10.5752 1.48677 12.0525 2.14502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_20020">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-sm">Zero Background Needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_77_20020)">
                      <path d="M16.5 8.31002V9.00002C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7818 12.6775 15.7294 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.031C4.88376 15.4705 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.1161 1.51626 8.50226C1.62267 6.88844 2.24791 5.35227 3.29871 4.12283C4.34951 2.89338 5.76959 2.03656 7.34714 1.68013C8.92469 1.3237 10.5752 1.48677 12.0525 2.14502" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_20020">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span className="text-sm">Job-Focused Learning</span>
                </div>
              </div>
              <div className="flex flex-row space-x-4 justify-center md:justify-start">
                <PrimaryButton onClick={() => { if (user) { setShowOrderModal(true) } else { window.location.href = '/login' } }} className="px-10 md:w-fit w-1/2">Apply Now</PrimaryButton>
                <SecondaryButton className="text-yellow-600 px-10 md:w-fit w-1/2 bg-yellow-50">
                  Share&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                    />
                  </svg>
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-end justify-end">
          <div className="w-full md:w-1/2">
            <img
              src="/assets/img/ai/ai_banner.png"
              alt="AI/ML Professional"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto rounded-lg p-6">
          <div className="border-l-4 border-yellow-500 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Course Overview</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-x">
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <Clock className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Duration:</p>
              <p className="font-bold">3 Months</p>
            </div>
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <Calendar className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Sessions:</p>
              <p className="font-bold">2 Per Week</p>
            </div>
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <BookOpen className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Total Classes:</p>
              <p className="font-bold">24</p>
            </div>
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <IndianRupee className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Course Fee:</p>
              <p className="font-medium">₹12,500</p>
            </div>
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <Users className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Class Type:</p>
              <p className="font-bold">Small Group Sessions</p>
            </div>
            <div className="flex flex-col items-center p-3  hover:bg-gray-50">
              <Code className="w-5 h-5 text-gray-500 mb-1" />
              <p className="text-sm text-gray-500">Projects:</p>
              <p className="font-bold text-center">12+ Hands-On Projects</p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-full">
        {/* Why This Course */}
        <section className='sticky top-0'>
          <div className="grid md:grid-cols-2  h-screen">
            <div className="bg-[#453425] p-8 flex flex-col text-white justify-center px-8 md:px-16">
              <div className="inline-block w-fit bg-orange-500 text-white px-3 py-1 rounded-md mb-4 capitalize">
                Basic
              </div>
              <h3 className="text-3xl relative md:text-3xl font-bold mb-6">This course is for you, even if <br />you are <svg className='absolute top-5 left-28' width="189" height="60" viewBox="0 0 189 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6 28.72L17.6 30.2C17.44 29 17.1067 28 16.6 27.2C16.12 26.3733 15.5067 25.7467 14.76 25.32C14.0133 24.8933 13.1867 24.68 12.28 24.68C11.2667 24.68 10.3333 24.92 9.48 25.4C8.62667 25.8533 7.86667 26.4933 7.2 27.32C6.53333 28.12 5.96 29.04 5.48 30.08C5.02667 31.12 4.66667 32.2267 4.4 33.4C4.16 34.5733 4.04 35.7333 4.04 36.88C4.04 38.16 4.18667 39.2533 4.48 40.16C4.77333 41.0667 5.2 41.7733 5.76 42.28C6.32 42.76 7 43 7.8 43C8.89333 43 9.90667 42.64 10.84 41.92C11.8 41.2 12.7067 40.2133 13.56 38.96C14.44 37.7067 15.32 36.24 16.2 34.56L16.68 35.72C15.8 37.5067 14.8933 39.0533 13.96 40.36C13.0533 41.6667 12.08 42.68 11.04 43.4C10 44.0933 8.82667 44.44 7.52 44.44C6.29333 44.44 5.24 44.1467 4.36 43.56C3.48 42.9467 2.8 42.0667 2.32 40.92C1.86667 39.7733 1.64 38.4 1.64 36.8C1.64 35.4667 1.8 34.1467 2.12 32.84C2.46667 31.5333 2.94667 30.3067 3.56 29.16C4.2 27.9867 4.96 26.96 5.84 26.08C6.72 25.2 7.69333 24.5067 8.76 24C9.85333 23.4667 11.0267 23.2 12.28 23.2C13.3733 23.2 14.3467 23.4267 15.2 23.88C16.08 24.3067 16.8133 24.9333 17.4 25.76C17.9867 26.5867 18.3867 27.5733 18.6 28.72ZM19.96 23.56L17.36 38.32C17.28 38.72 17.2133 39.1067 17.16 39.48C17.1067 39.8533 17.0533 40.2133 17 40.56C16.9733 40.9067 16.96 41.2 16.96 41.44C16.96 41.8933 17.08 42.24 17.32 42.48C17.56 42.6933 17.8933 42.8 18.32 42.8C18.9867 42.8 19.5733 42.6933 20.08 42.48C20.5867 42.24 20.9333 42.0933 21.12 42.04L20.84 43.36C20.6533 43.4933 20.4 43.64 20.08 43.8C19.76 43.9333 19.4133 44.04 19.04 44.12C18.6667 44.2267 18.28 44.28 17.88 44.28C17.2933 44.28 16.7733 44.1867 16.32 44C15.8667 43.7867 15.5067 43.4667 15.24 43.04C14.9733 42.6133 14.84 42.08 14.84 41.44C14.84 40.96 14.8933 40.3467 15 39.6C15.1067 38.8533 15.24 38.1333 15.4 37.44L15.24 37.64L17.08 27.24L17.28 26.88L18.64 23.56H19.96ZM42.5047 43C43.5714 43 44.558 42.7867 45.4647 42.36C46.3714 41.9333 47.1714 41.3467 47.8647 40.6C48.5847 39.8533 49.1847 38.9733 49.6647 37.96C50.1714 36.9467 50.5447 35.8533 50.7847 34.68C51.0514 33.5067 51.1847 32.2933 51.1847 31.04C51.1847 29.8133 51.038 28.72 50.7447 27.76C50.478 26.8 50.038 26.0533 49.4247 25.52C48.838 24.96 48.0514 24.68 47.0647 24.68C45.9447 24.68 44.8914 25.0267 43.9047 25.72C42.918 26.4133 41.958 27.3867 41.0247 28.64C40.118 29.8667 39.198 31.32 38.2647 33L37.7847 31.84C38.718 30.0267 39.6647 28.48 40.6247 27.2C41.5847 25.92 42.6114 24.9333 43.7047 24.24C44.798 23.5467 46.0114 23.2 47.3447 23.2C48.7314 23.2 49.878 23.5467 50.7847 24.24C51.718 24.9067 52.4114 25.84 52.8647 27.04C53.3447 28.2133 53.5847 29.5867 53.5847 31.16C53.5847 32.5467 53.4114 33.8933 53.0647 35.2C52.718 36.5067 52.2247 37.72 51.5847 38.84C50.9447 39.96 50.1714 40.9467 49.2647 41.8C48.358 42.6267 47.3314 43.28 46.1847 43.76C45.038 44.2133 43.798 44.44 42.4647 44.44C41.318 44.44 40.2647 44.2933 39.3047 44C38.3714 43.7067 37.5314 43.3467 36.7847 42.92C36.0647 42.4667 35.478 42 35.0247 41.52L39.2247 17.48C39.3047 17.1067 39.2514 16.8267 39.0647 16.64C38.878 16.4267 38.5847 16.2667 38.1847 16.16C37.7847 16.0267 37.2647 15.8933 36.6247 15.76L36.1447 15.68L36.3447 14.52H41.9847L37.1847 41.84C36.998 41.7067 36.838 41.56 36.7047 41.4C36.5714 41.2133 36.4647 41.0267 36.3847 40.84C36.3047 40.6267 36.2647 40.4267 36.2647 40.24C36.2647 40.0267 36.2914 39.8 36.3447 39.56C36.638 40.2 37.0914 40.7867 37.7047 41.32C38.318 41.8533 39.038 42.2667 39.8647 42.56C40.6914 42.8533 41.5714 43 42.5047 43ZM64.8753 44.48C63.3553 44.48 61.982 44.1467 60.7553 43.48C59.5553 42.7867 58.5953 41.7733 57.8753 40.44C57.182 39.1067 56.8353 37.48 56.8353 35.56C56.8353 34.04 57.0753 32.5467 57.5553 31.08C58.0353 29.5867 58.7286 28.2533 59.6353 27.08C60.5686 25.9067 61.6753 24.9733 62.9553 24.28C64.262 23.56 65.7153 23.2 67.3153 23.2C68.5686 23.2 69.622 23.4133 70.4753 23.84C71.3553 24.24 72.0086 24.8 72.4353 25.52C72.8886 26.24 73.1153 27.0667 73.1153 28C73.1153 29.2 72.7953 30.2533 72.1553 31.16C71.5153 32.0667 70.5686 32.84 69.3153 33.48C68.062 34.0933 66.502 34.5733 64.6353 34.92C62.7686 35.24 60.6086 35.44 58.1553 35.52L58.4353 34.28C60.702 34.1733 62.622 33.9733 64.1953 33.68C65.7953 33.36 67.0886 32.9467 68.0753 32.44C69.062 31.9333 69.782 31.32 70.2353 30.6C70.7153 29.8533 70.9553 28.9867 70.9553 28C70.9553 27.3067 70.8086 26.72 70.5153 26.24C70.2486 25.7333 69.8353 25.3467 69.2753 25.08C68.742 24.7867 68.062 24.64 67.2353 24.64C66.1153 24.64 65.062 24.9333 64.0753 25.52C63.0886 26.08 62.222 26.8667 61.4753 27.88C60.7553 28.8667 60.1953 30.04 59.7953 31.4C59.3953 32.7333 59.1953 34.1733 59.1953 35.72C59.1953 37.32 59.4353 38.6667 59.9153 39.76C60.3953 40.8267 61.062 41.64 61.9153 42.2C62.7686 42.7333 63.782 43 64.9553 43C65.9953 43 66.902 42.8267 67.6753 42.48C68.4486 42.1333 69.142 41.64 69.7553 41C70.3686 40.36 70.902 39.6133 71.3553 38.76L72.5553 39.64C72.0486 40.6 71.422 41.44 70.6753 42.16C69.9553 42.88 69.102 43.4533 68.1153 43.88C67.1553 44.28 66.0753 44.48 64.8753 44.48ZM88.8616 44.44L91.9816 26.76L92.1816 26.88L93.3816 23.48H94.8216L91.1016 44.56C90.7816 46.4 90.1949 47.9467 89.3416 49.2C88.4882 50.48 87.3816 51.44 86.0216 52.08C84.6882 52.7467 83.1016 53.08 81.2616 53.08C80.0349 53.08 78.8882 52.9333 77.8216 52.64C76.7816 52.3467 75.8882 51.9467 75.1416 51.44C74.4216 50.96 73.8749 50.4667 73.5016 49.96L74.0616 47H76.5816L75.9016 50.84C75.7416 50.84 75.5949 50.7733 75.4616 50.64C75.3549 50.5333 75.2616 50.3733 75.1816 50.16C75.1016 49.9733 75.0482 49.7333 75.0216 49.44C74.9949 49.1733 75.0082 48.8533 75.0616 48.48C75.3016 49.0933 75.7149 49.64 76.3016 50.12C76.8882 50.6 77.6082 50.9733 78.4616 51.24C79.3416 51.5067 80.2882 51.64 81.3016 51.64C82.7416 51.64 83.9682 51.3733 84.9816 50.84C85.9949 50.3333 86.8216 49.5467 87.4616 48.48C88.1016 47.4133 88.5682 46.0667 88.8616 44.44ZM93.5416 28.68L92.5016 30.16C92.3416 28.9867 91.9949 28 91.4616 27.2C90.9282 26.3733 90.2616 25.7467 89.4616 25.32C88.6882 24.8933 87.7949 24.68 86.7816 24.68C85.7149 24.68 84.7282 24.8933 83.8216 25.32C82.9149 25.7467 82.1016 26.3333 81.3816 27.08C80.6882 27.8267 80.1016 28.7067 79.6216 29.72C79.1416 30.7067 78.7682 31.7867 78.5016 32.96C78.2616 34.1067 78.1416 35.3067 78.1416 36.56C78.1416 37.76 78.2749 38.84 78.5416 39.8C78.8349 40.7333 79.2882 41.48 79.9016 42.04C80.5149 42.5733 81.2882 42.84 82.2216 42.84C83.3682 42.84 84.4349 42.4933 85.4216 41.8C86.4349 41.08 87.4082 40.1067 88.3416 38.88C89.2749 37.6267 90.1816 36.1733 91.0616 34.52L91.5816 35.68C90.6749 37.44 89.7282 38.9733 88.7416 40.28C87.7816 41.56 86.7549 42.56 85.6616 43.28C84.5682 43.9733 83.3416 44.32 81.9816 44.32C80.5949 44.32 79.4349 43.9867 78.5016 43.32C77.5682 42.6533 76.8749 41.7333 76.4216 40.56C75.9682 39.36 75.7416 37.9867 75.7416 36.44C75.7416 35.0533 75.9016 33.72 76.2216 32.44C76.5682 31.1333 77.0616 29.92 77.7016 28.8C78.3416 27.68 79.1149 26.7067 80.0216 25.88C80.9549 25.0533 81.9816 24.4 83.1016 23.92C84.2482 23.44 85.4882 23.2 86.8216 23.2C87.7016 23.2 88.5149 23.3333 89.2616 23.6C90.0082 23.84 90.6616 24.2 91.2216 24.68C91.8082 25.16 92.3016 25.7467 92.7016 26.44C93.1016 27.1067 93.3816 27.8533 93.5416 28.68ZM99.4509 41.44C99.4509 41.0667 99.4776 40.6267 99.5309 40.12C99.6109 39.6133 99.7043 39.04 99.8109 38.4C99.9443 37.76 100.078 37.0667 100.211 36.32L101.891 26.64C101.971 26.24 101.918 25.9467 101.731 25.76C101.544 25.5467 101.251 25.3733 100.851 25.24C100.451 25.1067 99.9309 24.9867 99.2909 24.88L98.7709 24.8L99.0109 23.6H104.691L102.291 37.04C102.211 37.5733 102.118 38.12 102.011 38.68C101.931 39.24 101.851 39.76 101.771 40.24C101.718 40.6933 101.691 41.08 101.691 41.4C101.691 41.88 101.811 42.24 102.051 42.48C102.318 42.6933 102.664 42.8 103.091 42.8C103.518 42.8 103.918 42.7467 104.291 42.64C104.664 42.5333 104.984 42.4133 105.251 42.28C105.544 42.1467 105.744 42.0667 105.851 42.04L105.611 43.36C105.424 43.4933 105.171 43.64 104.851 43.8C104.531 43.9333 104.184 44.04 103.811 44.12C103.438 44.2267 103.038 44.28 102.611 44.28C101.998 44.28 101.451 44.1867 100.971 44C100.518 43.8133 100.144 43.5067 99.8509 43.08C99.5843 42.6533 99.4509 42.1067 99.4509 41.44ZM102.451 16.24C102.451 15.6533 102.624 15.2 102.971 14.88C103.318 14.56 103.758 14.4 104.291 14.4C104.798 14.4 105.224 14.56 105.571 14.88C105.944 15.2 106.131 15.6533 106.131 16.24C106.131 16.8267 105.944 17.28 105.571 17.6C105.224 17.92 104.798 18.08 104.291 18.08C103.758 18.08 103.318 17.92 102.971 17.6C102.624 17.28 102.451 16.8267 102.451 16.24ZM109.945 44L113.025 26.6C113.105 26.2267 113.051 25.9467 112.865 25.76C112.678 25.5467 112.385 25.3733 111.985 25.24C111.585 25.1067 111.065 24.9867 110.425 24.88L109.905 24.8L110.145 23.6H115.665L114.625 29.6L114.665 29.96L112.185 44H109.945ZM125.745 37C125.638 37.5867 125.531 38.16 125.425 38.72C125.318 39.28 125.225 39.7867 125.145 40.24C125.091 40.6933 125.065 41.08 125.065 41.4C125.065 41.88 125.185 42.24 125.425 42.48C125.665 42.6933 126.011 42.8 126.465 42.8C126.891 42.8 127.278 42.7467 127.625 42.64C127.998 42.5333 128.331 42.4133 128.625 42.28C128.918 42.1467 129.118 42.0667 129.225 42.04L128.985 43.36C128.798 43.4933 128.545 43.64 128.225 43.8C127.905 43.9333 127.545 44.04 127.145 44.12C126.771 44.2267 126.385 44.28 125.985 44.28C125.371 44.28 124.825 44.1867 124.345 44C123.891 43.8133 123.518 43.5067 123.225 43.08C122.958 42.6533 122.825 42.1067 122.825 41.44C122.825 41.0667 122.851 40.6267 122.905 40.12C122.985 39.6133 123.078 39.04 123.185 38.4C123.291 37.76 123.425 37.04 123.585 36.24L124.585 31.2C124.718 30.48 124.825 29.84 124.905 29.28C125.011 28.6933 125.065 28.0933 125.065 27.48C125.065 26.68 124.838 26.04 124.385 25.56C123.958 25.08 123.265 24.84 122.305 24.84C121.318 24.84 120.345 25.16 119.385 25.8C118.425 26.4133 117.478 27.2933 116.545 28.44C115.611 29.5867 114.651 30.96 113.665 32.56L113.145 31.56C114.131 29.88 115.131 28.4133 116.145 27.16C117.158 25.9067 118.225 24.9333 119.345 24.24C120.465 23.5467 121.651 23.2 122.905 23.2C124.291 23.2 125.371 23.5867 126.145 24.36C126.918 25.1333 127.305 26.16 127.305 27.44C127.305 28 127.251 28.6 127.145 29.24C127.065 29.88 126.958 30.5467 126.825 31.24L125.745 37ZM133.343 44L136.423 26.6C136.503 26.2267 136.45 25.9467 136.263 25.76C136.076 25.5467 135.783 25.3733 135.383 25.24C134.983 25.1067 134.463 24.9867 133.823 24.88L133.303 24.8L133.543 23.6H139.063L138.023 29.6L138.063 29.96L135.583 44H133.343ZM149.143 37C149.036 37.5867 148.93 38.16 148.823 38.72C148.716 39.28 148.623 39.7867 148.543 40.24C148.49 40.6933 148.463 41.08 148.463 41.4C148.463 41.88 148.583 42.24 148.823 42.48C149.063 42.6933 149.41 42.8 149.863 42.8C150.29 42.8 150.676 42.7467 151.023 42.64C151.396 42.5333 151.73 42.4133 152.023 42.28C152.316 42.1467 152.516 42.0667 152.623 42.04L152.383 43.36C152.196 43.4933 151.943 43.64 151.623 43.8C151.303 43.9333 150.943 44.04 150.543 44.12C150.17 44.2267 149.783 44.28 149.383 44.28C148.77 44.28 148.223 44.1867 147.743 44C147.29 43.8133 146.916 43.5067 146.623 43.08C146.356 42.6533 146.223 42.1067 146.223 41.44C146.223 41.0667 146.25 40.6267 146.303 40.12C146.383 39.6133 146.476 39.04 146.583 38.4C146.69 37.76 146.823 37.04 146.983 36.24L147.983 31.2C148.116 30.48 148.223 29.84 148.303 29.28C148.41 28.6933 148.463 28.0933 148.463 27.48C148.463 26.68 148.236 26.04 147.783 25.56C147.356 25.08 146.663 24.84 145.703 24.84C144.716 24.84 143.743 25.16 142.783 25.8C141.823 26.4133 140.876 27.2933 139.943 28.44C139.01 29.5867 138.05 30.96 137.063 32.56L136.543 31.56C137.53 29.88 138.53 28.4133 139.543 27.16C140.556 25.9067 141.623 24.9333 142.743 24.24C143.863 23.5467 145.05 23.2 146.303 23.2C147.69 23.2 148.77 23.5867 149.543 24.36C150.316 25.1333 150.703 26.16 150.703 27.44C150.703 28 150.65 28.6 150.543 29.24C150.463 29.88 150.356 30.5467 150.223 31.24L149.143 37ZM163.782 44.48C162.262 44.48 160.888 44.1467 159.662 43.48C158.462 42.7867 157.502 41.7733 156.782 40.44C156.088 39.1067 155.742 37.48 155.742 35.56C155.742 34.04 155.982 32.5467 156.462 31.08C156.942 29.5867 157.635 28.2533 158.542 27.08C159.475 25.9067 160.582 24.9733 161.862 24.28C163.168 23.56 164.622 23.2 166.222 23.2C167.475 23.2 168.528 23.4133 169.382 23.84C170.262 24.24 170.915 24.8 171.342 25.52C171.795 26.24 172.022 27.0667 172.022 28C172.022 29.2 171.702 30.2533 171.062 31.16C170.422 32.0667 169.475 32.84 168.222 33.48C166.968 34.0933 165.408 34.5733 163.542 34.92C161.675 35.24 159.515 35.44 157.062 35.52L157.342 34.28C159.608 34.1733 161.528 33.9733 163.102 33.68C164.702 33.36 165.995 32.9467 166.982 32.44C167.968 31.9333 168.688 31.32 169.142 30.6C169.622 29.8533 169.862 28.9867 169.862 28C169.862 27.3067 169.715 26.72 169.422 26.24C169.155 25.7333 168.742 25.3467 168.182 25.08C167.648 24.7867 166.968 24.64 166.142 24.64C165.022 24.64 163.968 24.9333 162.982 25.52C161.995 26.08 161.128 26.8667 160.382 27.88C159.662 28.8667 159.102 30.04 158.702 31.4C158.302 32.7333 158.102 34.1733 158.102 35.72C158.102 37.32 158.342 38.6667 158.822 39.76C159.302 40.8267 159.968 41.64 160.822 42.2C161.675 42.7333 162.688 43 163.862 43C164.902 43 165.808 42.8267 166.582 42.48C167.355 42.1333 168.048 41.64 168.662 41C169.275 40.36 169.808 39.6133 170.262 38.76L171.462 39.64C170.955 40.6 170.328 41.44 169.582 42.16C168.862 42.88 168.008 43.4533 167.022 43.88C166.062 44.28 164.982 44.48 163.782 44.48ZM175.724 44L178.804 26.6C178.884 26.2267 178.831 25.9467 178.644 25.76C178.457 25.5467 178.164 25.3733 177.764 25.24C177.364 25.1067 176.844 24.9867 176.204 24.88L175.684 24.8L175.924 23.6H181.444L180.284 30.24L180.444 29.92L177.964 44H175.724ZM188.044 23.44L187.644 25.84C187.511 25.8133 187.297 25.76 187.004 25.68C186.711 25.6 186.351 25.56 185.924 25.56C185.311 25.56 184.724 25.7333 184.164 26.08C183.604 26.4267 183.071 26.9333 182.564 27.6C182.057 28.2667 181.551 29.08 181.044 30.04C180.537 30.9733 180.017 32.04 179.484 33.24L178.964 32.4C179.497 31.2267 180.031 30.0933 180.564 29C181.097 27.9067 181.671 26.9333 182.284 26.08C182.924 25.2 183.604 24.5067 184.324 24C185.044 23.4933 185.831 23.24 186.684 23.24C187.057 23.24 187.351 23.2667 187.564 23.32C187.804 23.3467 187.964 23.3867 188.044 23.44Z" fill="#FFAD3A" />
                <path d="M-0.000539993 52.303L182.685 46.0723C182.685 46.0723 145.752 48.9129 80.4595 51.4344C36.272 53.1409 -0.000539993 52.303 -0.000539993 52.303Z" fill="#FFAD3A" />
                <path d="M183.339 46.2256L79.0005 56.0002C79.0005 56.0002 119.131 55.0404 129.5 54C159.606 50.9792 183.339 46.2256 183.339 46.2256Z" fill="#FFAD3A" />
              </svg>
              </h3>
              <ul className="space-y-4 !list-disc">
                <li className="flex items-start">
                  <span>Students & Professionals from Non-Tech Backgrounds</span>
                </li>
                <li className="flex items-start">
                  <span>
                    Business, Marketing, and Finance Graduates Curious About AI
                  </span>
                </li>
                <li className="flex items-start">

                  <span>
                    Career Changers Looking to Enter AI/ML
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="/assets/img/ai/ai-basic-1.jpeg"
                alt="Student coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why This Course Works */}
        <section className='sticky top-0'>
          <div className="flex flex-col-reverse md:flex-row  h-screen">
            <div className="relative h-64 md:h-auto overflow-hidden w-full md:w-1/2">
              <img
                src="/assets/img/ai/ai-basic-2.jpeg"
                alt="Student with laptop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-h-screenp-8 bg-[#453425] px-8 md:px-16 text-white flex flex-col justify-center w-full md:w-1/2 z-0">
              {/* Tag */}
              <span className="bg-orange-500 text-white px-10 py-2 w-fit rounded-md  font-semibold">
                Basis
              </span>


              <h1 className="text-5xl font-bold mt-4 tracking-wide">
                Jobs You Can Land After This Course
              </h1>

              <div className="mt-6 space-y-6 w-full max-w-2xl">
                {/* Entry-Level AI/ML Roles */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Entry-Level AI/ML Roles</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md">
                      Data Analyst
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md  ">
                      ML Associate
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI Research Assistant
                    </span>
                  </div>
                </div>

                {/* Industry-Specific AI Jobs */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Industry-Specific AI Jobs</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      Digital Marketing Analyst
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI In Finance
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      Healthcare AI
                    </span>
                  </div>
                </div>

                {/* No-Code AI Roles */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">No-Code AI Roles</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI Automation Specialist
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI Chatbot Developer
                    </span>
                  </div>
                </div>

                {/* Tech-Enhanced Careers */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Tech-Enhanced Careers</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI Trainer
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      Prompt Engineer
                    </span>
                    <span className="bg-[#C57B37] text-white px-4 py-2 rounded-md ">
                      AI Compliance Officer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='sticky top-0'>
          <div className="grid md:grid-cols-2 h-screen">
            <div className="bg-[#453425] flex items-center text-white p-8 md:p-12 lg:p-16">
              <div className="max-w-6xl mx-auto">
                {/* Badge */}
                <div className="mb-8">
                  <span className="bg-orange-500 text-white px-10 py-2 w-fit rounded-md  font-semibold">
                    Basis
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16">
                  Why This Course?
                </h1>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4 gap-y-8">
                  {/* Benefit 1 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Beginner-Friendly</h2>
                    <p className="text-gray-300 text-lg">
                      No Prior Coding Experience Required
                    </p>
                  </div>

                  {/* Benefit 2 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Hands-On Learning</h2>
                    <p className="text-gray-300 text-lg">
                      12+ Practical Projects
                    </p>
                  </div>

                  {/* Benefit 3 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Job-Focused</h2>
                    <p className="text-gray-300 text-lg">
                      Resume & Interview Preparation
                    </p>
                  </div>

                  {/* Benefit 4 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Guaranteed Placement Assistance</h2>
                    <p className="text-gray-300 text-lg">
                      Direct Job Opportunities In Top Companies
                    </p>
                  </div>

                  {/* Benefit 5 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">No-Code AI</h2>
                    <p className="text-gray-300 text-lg">
                      Learn AI Without Deep Programming Knowledge
                    </p>
                  </div>

                  {/* Benefit 6 */}
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">GitHub & Portfolio Building</h2>
                    <p className="text-gray-300 text-lg">
                      Create A Professional GitHub Account To Showcase Your Projects And Boost Your Employability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src="/assets/img/ai/ai-basic-3.jpeg"
                alt="Student coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Curriculum Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                Your Guide To Upskilling:
                <br /> Our Curriculum
              </h2>
              <div className="md:flex flex-col sm:flex-row gap-4 hidden">
                <PrimaryButton className="rounded-md flex items-center transition">
                  <span>Download Brochure</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </PrimaryButton>
                <SecondaryButton className="rounded-md flex items-center transition">
                  <span>Download Curriculum</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </SecondaryButton>
              </div>
            </div>
            <div className="max-w-6xl mx-auto p-4 font-sans">
              <Tabs aria-label="Basic tabs" defaultValue={0} className='bg-orange-500'>
                <TabList sx={{
                  backgroundColor: "#FFF1D8",
                }} >
                  <Tab sx={{
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: 500,
                    fontSize: '16px',
                    py: 1.5,
                    '&.Mui-selected': {
                      color: '#fff',
                      fontWeight: 600,
                      backgroundColor: '#FFC38E',
                      '--Tab-indicatorColor': '#F5A742', // Orange indicator
                      '--Tab-indicatorThickness': '3px', // Thicker indicator line
                    }
                  }}>Month 1</Tab>
                  <Tab sx={{
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: 500,
                    fontSize: '16px',
                    py: 1.5,
                    '&.Mui-selected': {
                      color: '#fff',
                      fontWeight: 600,
                      backgroundColor: '#FFC38E',
                      '--Tab-indicatorColor': '#F5A742', // Orange indicator
                      '--Tab-indicatorThickness': '3px', // Thicker indicator line
                    }
                  }}>Month 2</Tab>
                  <Tab sx={{
                    cursor: 'pointer',
                    color: '#000',
                    fontWeight: 500,
                    fontSize: '16px',
                    py: 1.5,
                    '&.Mui-selected': {
                      color: '#fff',
                      fontWeight: 600,
                      backgroundColor: '#FFC38E',
                      '--Tab-indicatorColor': '#F5A742', // Orange indicator
                      '--Tab-indicatorThickness': '3px', // Thicker indicator line
                    }
                  }}>Month 3</Tab>
                </TabList>
                <TabPanel value={0}>
                  <div className="flex flex-col md:flex-row gap-8 mt-5">
                    <div className="md:w-1/4">
                      <h1 className="text-2xl md:text-3xl font-bold mb-6">
                        Foundations of AI & Programming
                      </h1>
                      <svg className='hidden md:block' width="257" height="257" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M208.992 143.817L197.633 139.089L212.847 102.492C214.338 98.9453 220.711 93.4455 222.922 94.3193C225.132 95.1931 225.697 103.674 224.258 107.221L208.992 143.817Z" fill="white" />
                        <path d="M208.992 144.177C208.941 144.177 208.889 144.177 208.838 144.177L197.479 139.449C197.376 139.397 197.324 139.346 197.273 139.243C197.222 139.14 197.222 139.037 197.273 138.986L212.487 102.389C213.927 98.9968 220.454 92.983 223.024 94.0624C225.594 95.1418 225.954 104.034 224.515 107.426L209.301 144.023C209.301 144.126 209.146 144.177 208.992 144.177ZM198.095 138.883L208.787 143.355L223.898 107.067C225.389 103.571 224.618 95.4502 222.767 94.6792C220.917 93.9082 214.646 99.0996 213.156 102.646L198.095 138.883Z" fill="#231F20" />
                        <path d="M199.265 138.5L198.52 140.306L206.834 143.74L207.579 141.935L199.265 138.5Z" fill="white" />
                        <path d="M206.885 145.463C206.833 145.463 206.782 145.463 206.731 145.463L198.404 141.916C198.198 141.865 198.147 141.659 198.198 141.453L198.969 139.654C199.021 139.552 199.072 139.5 199.175 139.449C199.278 139.397 199.38 139.397 199.432 139.449L207.81 142.944C208.016 142.995 208.067 143.201 208.016 143.407L207.245 145.206C207.193 145.308 207.142 145.36 207.039 145.411C206.988 145.463 206.936 145.463 206.885 145.463ZM199.021 141.453L206.731 144.64L207.193 143.509L199.483 140.323L199.021 141.453Z" fill="#231F20" />
                        <path d="M210.898 107.272L200.869 131.381L212.259 136.119L222.288 112.011L210.898 107.272Z" fill="#D1D3D4" />
                        <path d="M212.23 136.467C212.179 136.467 212.128 136.467 212.076 136.415L200.717 131.686C200.614 131.635 200.563 131.584 200.511 131.481C200.46 131.378 200.46 131.275 200.511 131.224L210.534 107.117C210.586 107.014 210.637 106.963 210.74 106.912C210.843 106.86 210.945 106.86 210.997 106.912L222.356 111.64C222.562 111.743 222.613 111.949 222.562 112.103L212.539 136.21C212.487 136.415 212.385 136.467 212.23 136.467ZM201.334 131.172L212.025 135.644L221.791 112.206L211.1 107.734L201.334 131.172Z" fill="#231F20" />
                        <path d="M192.955 137.752H198.198L200.459 132.304L194.24 134.668L192.955 137.752Z" fill="white" />
                        <path d="M192.955 138.111C192.853 138.111 192.698 138.06 192.647 137.957C192.595 137.854 192.544 137.752 192.596 137.649L193.881 134.565C193.932 134.462 193.983 134.411 194.086 134.359L200.306 131.995C200.46 131.943 200.614 131.995 200.717 132.098C200.82 132.2 200.82 132.355 200.768 132.509L198.507 137.957C198.455 138.111 198.301 138.163 198.198 138.163L192.955 138.111ZM194.497 134.976L193.469 137.392H197.941L199.792 132.971L194.497 134.976Z" fill="#231F20" />
                        <path d="M213.259 146.233L209.609 142.481L211.871 137.032L214.544 143.149L213.259 146.233Z" fill="white" />
                        <path d="M213.259 146.593C213.156 146.593 213.053 146.541 213.002 146.49L209.301 142.738C209.198 142.635 209.147 142.481 209.249 142.327L211.511 136.878C211.562 136.724 211.717 136.673 211.819 136.673C211.974 136.673 212.076 136.775 212.128 136.878L214.852 142.995C214.903 143.098 214.903 143.2 214.852 143.252L213.567 146.336C213.516 146.439 213.413 146.541 213.31 146.541L213.259 146.593ZM210.02 142.378L213.156 145.565L214.184 143.149L211.871 137.958L210.02 142.378Z" fill="#231F20" />
                        <path d="M96.9923 62.2969L165.766 64.3529L215.726 111.692L206.629 133.589L87.8945 84.1933L96.9923 62.2969Z" fill="white" />
                        <path d="M206.628 133.949C206.576 133.949 206.525 133.949 206.474 133.897L87.791 84.5017C87.6882 84.4503 87.6368 84.3989 87.5854 84.2961C87.534 84.1933 87.534 84.0905 87.5854 84.0391L96.6832 62.1941C96.7346 62.0399 96.8888 61.9885 97.043 61.9885L165.816 64.0445C165.919 64.0445 165.97 64.0959 166.073 64.1473L215.983 111.487C216.085 111.59 216.137 111.744 216.085 111.898L206.988 133.794C206.936 133.897 206.885 133.949 206.782 134C206.731 133.949 206.679 133.949 206.628 133.949ZM88.4078 83.9877L206.422 133.126L215.263 111.795L165.611 64.7127L97.1972 62.6567L88.4078 83.9877Z" fill="#231F20" />
                        <path d="M153.019 56.54L180.312 67.8994C185.041 69.8526 187.251 75.301 185.298 80.0298L171.78 112.463C169.827 117.192 164.378 119.402 159.649 117.449L132.356 106.09C127.627 104.136 125.417 98.688 127.37 93.9592L140.888 61.5258C142.893 56.8484 148.341 54.5868 153.019 56.54Z" fill="#D1D3D4" />
                        <path d="M161.243 117.398C159.495 117.398 157.748 117.038 156.103 116.37L135.697 107.837C128.912 105.01 125.674 97.1974 128.501 90.4126L139.141 64.8154C141.968 58.0306 149.729 54.7924 156.514 57.6194C156.514 57.6194 156.514 57.6194 156.566 57.6194L177.023 66.1004C183.808 68.9274 187.046 76.7402 184.219 83.525L173.579 109.122C171.472 114.108 166.64 117.346 161.243 117.398ZM151.477 57.3624C146.388 57.3624 141.814 60.4464 139.861 65.1238L129.221 90.721C126.548 97.146 129.581 104.548 136.006 107.22L156.463 115.701C162.888 118.374 170.289 115.342 172.962 108.917L183.602 83.3194C186.275 76.8944 183.242 69.4928 176.766 66.82L156.309 58.339C154.767 57.6708 153.122 57.3624 151.477 57.3624Z" fill="#231F20" />
                        <path d="M89.8477 94.2676L78.4883 89.5388L93.7027 52.942C95.1933 49.3954 101.567 43.8956 103.777 44.8208C105.987 45.746 106.553 54.1756 105.113 57.7222L89.8477 94.2676Z" fill="white" />
                        <path d="M89.8476 94.6274C89.7962 94.6274 89.7448 94.6274 89.6934 94.576L78.334 89.8472C78.2312 89.7958 78.1798 89.7444 78.1284 89.6416C78.077 89.5388 78.077 89.436 78.1284 89.3846L93.3428 52.7878C94.0624 51.0916 95.9642 48.7786 98.1744 46.9282C99.3566 45.9516 102.235 43.7928 103.828 44.461C105.422 45.1292 105.936 48.7272 106.09 50.2178C106.347 53.1476 106.039 56.0774 105.37 57.825L90.156 94.4218C90.1046 94.5246 90.0018 94.6274 89.8476 94.6274ZM78.9508 89.3332L89.642 93.805L104.754 57.5166C105.422 55.9232 105.679 53.0448 105.473 50.2692C105.268 47.4936 104.497 45.489 103.674 45.1292C102.852 44.7694 100.899 45.6946 98.7398 47.4936C96.581 49.2926 94.7306 51.5028 94.0624 53.0962L78.9508 89.3332Z" fill="#231F20" />
                        <path d="M80.1272 90.2152L79.377 92.0186L87.7295 95.4933L88.4797 93.6899L80.1272 90.2152Z" fill="white" />
                        <path d="M87.7409 95.8609C87.6895 95.8609 87.6381 95.8609 87.5867 95.8095L79.2085 92.3143C79.0029 92.2629 78.9515 92.0059 79.0029 91.8517L79.7739 90.0527C79.8253 89.9499 79.8767 89.8985 79.9795 89.8471C80.0823 89.7957 80.1851 89.7957 80.2365 89.8471L88.6147 93.3423C88.7175 93.3937 88.7689 93.4451 88.8203 93.5479C88.8717 93.6507 88.8717 93.7535 88.8203 93.8049L88.0493 95.6039C87.9979 95.7067 87.9465 95.7581 87.8437 95.8095C87.8437 95.8609 87.7923 95.8609 87.7409 95.8609ZM79.8767 91.8517L87.5867 95.0385L88.0493 93.9077L80.3393 90.7209L79.8767 91.8517Z" fill="#231F20" />
                        <path d="M91.7305 57.6874L81.7012 81.7959L93.091 86.5342L103.12 62.4257L91.7305 57.6874Z" fill="#D1D3D4" />
                        <path d="M93.0859 86.9178C93.0345 86.9178 92.9831 86.9178 92.9317 86.8664L81.5723 82.1376C81.4695 82.0862 81.4181 82.0348 81.3667 81.932C81.3153 81.8292 81.3153 81.7264 81.3667 81.675L91.3897 57.5684C91.4411 57.4656 91.4925 57.4142 91.5953 57.3628C91.6981 57.3114 91.8009 57.3114 91.8523 57.3628L103.212 62.0916C103.417 62.143 103.469 62.4 103.417 62.5542L93.3943 86.6608C93.3429 86.815 93.2401 86.9178 93.0859 86.9178ZM82.1891 81.6236L92.8803 86.0954L102.646 62.657L91.9551 58.1852L82.1891 81.6236Z" fill="#231F20" />
                        <path d="M73.8105 88.2029L79.0533 88.1515L81.3149 82.7031L75.0955 85.1189L73.8105 88.2029Z" fill="white" />
                        <path d="M73.8108 88.5104C73.708 88.5104 73.5538 88.459 73.5024 88.3562C73.451 88.2534 73.3996 88.1506 73.451 87.9964L74.736 84.9124C74.7874 84.8096 74.8388 84.7582 74.9416 84.7068L81.2124 82.3424C81.3666 82.291 81.5208 82.3424 81.6236 82.4452C81.7264 82.548 81.7778 82.7022 81.675 82.8564L79.4134 88.3048C79.362 88.459 79.2078 88.5104 79.105 88.5104H73.8108ZM75.3528 85.375L74.3248 87.7908H78.7966L80.647 83.3704L75.3528 85.375Z" fill="#231F20" />
                        <path d="M94.1129 96.632L90.4121 92.8798L92.7251 87.4314L95.3979 93.548L94.1129 96.632Z" fill="white" />
                        <path d="M94.1141 96.9915C94.0113 96.9915 93.9085 96.9401 93.8571 96.8887L90.1563 93.1365C90.0535 93.0337 90.0021 92.8795 90.1049 92.7253L92.3665 87.2769C92.4179 87.1227 92.5721 87.0713 92.6749 87.0713C92.8291 87.0713 92.9319 87.1741 92.9833 87.2769L95.6561 93.3935C95.7075 93.4963 95.7075 93.5991 95.6561 93.7019L94.3711 96.7859C94.3197 96.8887 94.2169 96.9915 94.1141 96.9915ZM90.8759 92.7767L94.0113 95.9635L95.0393 93.5477L92.7263 88.3563L90.8759 92.7767Z" fill="#231F20" />
                        <path d="M134.925 67.8994L104.547 66.5116C104.342 66.5116 104.188 66.3574 104.188 66.1518C104.188 65.9462 104.342 65.792 104.547 65.792L134.925 67.1798C135.13 67.1798 135.285 67.334 135.285 67.5396C135.336 67.7452 135.182 67.8994 134.925 67.8994Z" fill="#D1D3D4" />
                        <path d="M211.666 112.669C211.563 112.669 211.46 112.618 211.409 112.566L185.606 88.614C185.452 88.4598 185.452 88.2542 185.606 88.1C185.76 87.9458 185.966 87.9458 186.12 88.1L211.923 112.104C212.077 112.258 212.077 112.464 211.923 112.618C211.871 112.618 211.768 112.669 211.666 112.669Z" fill="#D1D3D4" />
                        <path d="M134.257 179.746L127.523 185.348C127.523 185.348 141.761 210.637 143.817 206.885C144.794 205.086 142.532 192.493 142.532 192.493" fill="white" />
                        <path d="M143.201 207.604C139.706 207.604 128.501 187.764 127.216 185.502C127.113 185.348 127.164 185.142 127.318 185.04L134 179.437C134.155 179.334 134.412 179.386 134.514 179.54C134.617 179.694 134.566 179.848 134.463 180.002L127.987 185.399C132.715 193.829 140.939 206.833 143.201 206.833C143.252 206.833 143.407 206.833 143.458 206.628C144.126 205.394 143.047 197.478 142.122 192.493C142.07 192.287 142.173 192.081 142.379 192.03C142.584 191.979 142.79 192.081 142.841 192.287V192.338C143.098 193.623 145.154 205.086 144.126 206.936C143.972 207.347 143.612 207.604 143.201 207.604Z" fill="#231F20" />
                        <path d="M180.672 83.2166C180.672 83.2166 220.455 115.907 203.904 118.323C190.078 120.327 177.536 112.977 177.536 112.977L181.443 104.291C181.443 104.291 194.19 110.202 193.727 107.58C193.265 104.959 175.994 94.6274 175.994 94.6274L180.672 83.2166Z" fill="#FFC87A" />
                        <path d="M145.206 70.0577C145.206 70.0577 105.165 65.6373 104.086 71.7539C103.006 77.8705 120.277 91.3887 120.739 90.5149C121.202 89.6411 130.351 84.2955 130.351 84.2955L122.333 77.9219L141.505 82.2395L145.206 70.0577Z" fill="#FFC87A" />
                        <path d="M179.49 61.2687C180.621 59.1099 179.85 56.3857 178.514 54.3297C175.121 49.0869 169.056 46.2085 162.837 46.9281C160.061 47.2879 157.183 48.5215 155.743 50.9373C157.285 50.6289 158.827 50.5775 160.369 50.7831C156.926 52.2737 154.304 55.1521 153.122 58.6987C152.968 59.0585 152.968 59.4697 153.071 59.8295C153.328 60.4463 154.253 60.4463 154.87 60.2921C155.486 60.1379 156.257 59.8295 156.874 60.1379C154.921 60.9089 153.328 62.4509 152.505 64.4041C152.094 65.2265 151.94 66.2031 152.145 67.1283C152.351 67.7965 152.711 68.3618 153.225 68.8244C154.407 69.9552 156 70.5207 157.594 71.0347C160.421 71.9599 163.351 72.7309 166.28 72.3711C169.827 71.9085 172.705 69.8011 175.275 67.4881C176.458 66.4087 177.588 66.4087 178.873 65.5863C179.644 65.0723 180.107 64.3013 180.21 63.3761C180.056 62.6565 179.799 61.9369 179.49 61.2687Z" fill="white" />
                        <path d="M164.789 72.7824C162.271 72.7824 159.855 72.0628 157.542 71.3432C155.897 70.7778 154.252 70.2124 153.07 69.0816C152.505 68.5676 152.094 67.9508 151.888 67.2312C151.682 66.2032 151.785 65.1752 152.248 64.25C152.916 62.708 153.995 61.423 155.435 60.5492L155.332 60.6006L155.075 60.652C154.304 60.8576 153.224 60.8576 152.813 60.0352C152.659 59.5726 152.659 59.11 152.865 58.6474C153.944 55.4606 156.154 52.7364 159.084 51.0916C158.005 51.0402 156.925 51.143 155.897 51.3486C155.743 51.4 155.64 51.2972 155.537 51.1944C155.486 51.0916 155.486 50.9374 155.537 50.7832C156.874 48.573 159.547 47.031 162.888 46.5684C169.21 45.7974 175.429 48.7786 178.924 54.1242C179.695 55.3578 181.34 58.4932 179.952 61.2688C180.261 61.937 180.466 62.6566 180.621 63.3762C180.518 64.4042 179.952 65.278 179.13 65.8434C178.616 66.1518 178.102 66.4088 177.537 66.6144C176.817 66.8714 176.149 67.2312 175.583 67.6938C173.322 69.7498 170.186 72.1656 166.383 72.6282C165.817 72.731 165.303 72.7824 164.789 72.7824ZM156.308 59.624C156.565 59.624 156.874 59.6754 157.079 59.8296C157.234 59.9324 157.336 60.138 157.234 60.2922C157.182 60.3436 157.131 60.4464 157.028 60.4464C155.178 61.2174 153.636 62.6566 152.865 64.507C152.453 65.278 152.351 66.1518 152.556 67.0256C152.762 67.591 153.07 68.1564 153.533 68.5162C154.612 69.5956 156.154 70.1096 157.748 70.6236C160.472 71.4974 163.35 72.3198 166.229 71.96C169.827 71.4974 172.705 69.2872 175.018 67.1798C175.635 66.6144 176.406 66.2032 177.177 65.9462C177.691 65.7406 178.153 65.535 178.616 65.278C179.284 64.8668 179.695 64.1472 179.798 63.3762C179.644 62.708 179.387 62.0912 179.13 61.4744C179.079 61.3716 179.079 61.2174 179.13 61.1146C180.466 58.6474 178.924 55.6662 178.205 54.5354C174.864 49.4468 168.953 46.6198 162.888 47.288C160.112 47.6478 157.85 48.7786 156.514 50.4748C157.799 50.3206 159.084 50.2692 160.369 50.4234C160.523 50.4234 160.677 50.5776 160.677 50.7318C160.677 50.886 160.626 51.0402 160.472 51.0916C157.131 52.5308 154.561 55.3064 153.43 58.7502C153.327 59.0072 153.276 59.3156 153.379 59.624C153.584 60.0352 154.252 60.0352 154.766 59.881L155.023 59.8296C155.486 59.7268 155.897 59.624 156.308 59.624Z" fill="#231F20" />
                        <path d="M155.742 124.182C155.742 124.182 168.746 152.966 166.536 158.62C164.326 164.274 142.481 192.493 142.481 192.493L130.865 182.675C130.865 182.675 151.27 155.742 150.448 153.892C149.626 152.041 139.5 132.561 139.5 132.561L84.5532 192.441L79.002 178.049L123.566 114.108L155.742 124.182Z" fill="#231F20" />
                        <path d="M142.481 192.852C142.378 192.852 142.327 192.801 142.224 192.75L130.607 182.932C130.453 182.829 130.402 182.572 130.556 182.418C138.266 172.292 150.345 155.587 150.088 153.943C149.317 152.298 140.939 136.004 139.397 133.074L84.8613 192.647C84.7585 192.75 84.6557 192.801 84.5529 192.75C84.4501 192.75 84.3473 192.647 84.2959 192.544L78.7447 178.152C78.6933 178.049 78.6933 177.895 78.7961 177.844L123.36 113.902C123.463 113.799 123.617 113.696 123.771 113.748L155.948 123.822C156.05 123.874 156.102 123.925 156.153 124.028C156.667 125.21 169.209 153.017 166.947 158.723C164.737 164.377 143.714 191.567 142.84 192.698C142.686 192.75 142.635 192.801 142.481 192.852ZM131.378 182.572L142.429 191.927C144.794 188.895 164.172 163.657 166.228 158.414C168.284 153.172 156.513 126.649 155.485 124.439L123.72 114.519L79.4129 178.049L84.6557 191.67L139.242 132.2C139.345 132.098 139.448 132.098 139.551 132.098C139.654 132.098 139.757 132.2 139.808 132.303C140.219 133.074 149.934 151.835 150.756 153.686C151.578 155.536 136.416 175.942 131.378 182.572Z" fill="#231F20" />
                        <path d="M155.743 124.182L123.566 114.108L153.738 74.6841C153.738 74.6841 168.747 81.9315 170.597 84.8613C172.448 87.7911 155.743 124.182 155.743 124.182Z" fill="white" />
                        <path d="M155.743 124.542C155.692 124.542 155.692 124.542 155.64 124.542L123.464 114.468C123.361 114.416 123.258 114.365 123.207 114.262C123.155 114.159 123.207 114.005 123.258 113.954L153.43 74.5301C153.533 74.3759 153.738 74.3245 153.893 74.4273C154.509 74.7357 169.056 81.7775 170.906 84.7073C172.756 87.6371 157.799 120.636 156.103 124.388C156 124.439 155.897 124.542 155.743 124.542ZM124.183 113.902L155.589 123.72C162.014 109.688 171.574 87.0203 170.341 85.0157C168.696 82.4457 155.897 76.0721 153.893 75.0955L124.183 113.902Z" fill="#231F20" />
                        <path d="M161.859 74.3244C161.293 74.273 158.312 80.955 158.055 81.5204C155.177 86.866 152.504 92.4686 149.471 97.66C143.509 107.991 130.505 114.211 120.43 119.556C119.094 120.276 117.603 120.996 116.113 120.739C115.033 120.43 114.108 119.865 113.337 119.094C109.893 116.01 107.118 112.258 105.216 108.043C104.907 107.477 104.753 106.912 104.805 106.295C104.959 105.267 105.73 104.445 106.758 104.188C112.103 103.263 119.968 102.646 124.285 99.8702C131.481 95.2956 139.757 81.8288 145.256 70.0068C151.887 71.6516 157.695 73.3478 161.859 74.3244Z" fill="#FFC87A" />
                        <path d="M180.671 83.2165C180.825 83.3193 174.195 99.2019 173.886 99.9729C171.419 105.781 162.732 116.421 157.541 119.762C160.882 113.8 161.859 104.393 162.116 97.6599C162.218 94.3703 164.943 88.6649 166.176 85.6323C166.279 85.3239 167.358 75.9177 167.204 75.8149C167.153 75.8149 176.508 79.8755 180.671 83.2165Z" fill="#FFC87A" />
                        <path d="M169.262 76.6369L167.412 83.0105C167.412 83.0105 165.716 85.6833 161.758 83.4217C157.8 81.1601 158.006 78.0761 158.006 78.0761L161.912 66.3569C161.912 66.3569 165.099 65.2775 166.127 58.1843C166.127 58.1843 172.089 62.0907 178.669 63.0673C178.669 63.0673 176.561 70.8287 175.122 73.9641C173.683 77.0995 169.262 76.6369 169.262 76.6369Z" fill="white" />
                        <path d="M164.687 84.6557C163.608 84.6043 162.528 84.2959 161.603 83.7305C157.491 81.4175 157.645 78.1793 157.645 78.0765C157.645 78.0251 157.645 78.0251 157.645 77.9737L161.552 66.2545C161.603 66.1517 161.654 66.0489 161.757 66.0489C161.757 66.0489 164.738 64.9181 165.715 58.1847C165.715 58.0819 165.818 57.9791 165.921 57.9277C166.023 57.8763 166.178 57.8763 166.28 57.9277C166.332 57.9791 172.294 61.7827 178.668 62.7593C178.771 62.7593 178.873 62.8107 178.925 62.9135C178.976 63.0163 178.976 63.1191 178.976 63.2219C178.873 63.5303 176.869 71.0347 175.378 74.1701C174.042 77.0485 170.547 77.0999 169.467 77.0485L167.668 83.1137C167.668 83.1651 167.668 83.1651 167.617 83.2165C167 84.1417 165.869 84.7071 164.687 84.6557ZM158.365 78.1279C158.365 78.4877 158.416 81.1091 161.963 83.0623C165.355 84.9641 166.846 83.1137 167.103 82.8053L168.953 76.5345C169.005 76.3803 169.159 76.2775 169.364 76.2775C169.416 76.2775 173.528 76.6887 174.813 73.8103C176.046 71.1375 177.794 64.9695 178.257 63.3247C172.911 62.3995 167.977 59.6239 166.435 58.7501C165.458 64.6611 162.939 66.2545 162.271 66.5629L158.365 78.1279Z" fill="#231F20" />
                        <path d="M164.019 66.6144C164.019 65.9976 163.865 65.3808 163.505 64.8668C163.145 64.4042 162.734 63.993 162.22 63.6846C161.963 63.479 161.706 63.3248 161.397 63.2734C161.192 63.2734 160.935 63.2734 160.729 63.3248C160.215 63.4276 159.753 63.6846 159.393 64.0958C159.187 64.4556 159.033 64.8668 158.982 65.278C158.879 65.7406 158.879 66.2032 158.93 66.6658C159.187 68.5676 160.935 69.9554 162.837 69.6984H162.888" fill="white" />
                        <path d="M162.424 70.1093C160.471 70.1093 158.826 68.6701 158.569 66.7169C158.518 66.2029 158.518 65.7403 158.62 65.2263C158.672 64.7637 158.826 64.2497 159.083 63.8385C159.494 63.3759 160.008 63.0161 160.625 62.9133C160.882 62.8619 161.139 62.8105 161.447 62.8619C161.807 62.9647 162.167 63.1189 162.475 63.3245C162.989 63.6843 163.452 64.0955 163.812 64.5581C164.223 65.1235 164.429 65.8431 164.377 66.5113C164.377 66.7169 164.223 66.8711 164.017 66.8711C163.812 66.8711 163.658 66.7169 163.658 66.5113C163.658 65.9459 163.503 65.4319 163.195 64.9693C162.887 64.5581 162.475 64.1983 162.013 63.8899C161.807 63.7357 161.55 63.5815 161.293 63.5301C161.139 63.5301 160.933 63.5301 160.779 63.5815C160.317 63.6329 159.957 63.8899 159.648 64.1983C159.443 64.5067 159.34 64.8665 159.34 65.2263C159.289 65.6375 159.237 66.1001 159.289 66.5113C159.494 68.2075 161.088 69.4411 162.784 69.2355H162.835C163.041 69.1841 163.195 69.3383 163.246 69.5439C163.298 69.7495 163.144 69.9037 162.938 69.9551C162.835 70.1093 162.63 70.1093 162.424 70.1093Z" fill="#231F20" />
                        <path d="M171.984 66.0486C171.984 66.0486 173.423 69.955 172.755 70.4176C172.087 70.8802 170.699 70.1092 170.699 70.1092" fill="white" />
                        <path d="M172.139 70.9321C171.574 70.8807 170.957 70.7265 170.443 70.4695C170.237 70.3667 170.186 70.1611 170.237 70.0069C170.34 69.8013 170.546 69.7499 170.7 69.8013C170.7 69.8013 170.751 69.8013 170.751 69.8527C171.162 70.0583 172.088 70.4181 172.447 70.1611C172.653 69.9041 172.242 68.0537 171.574 66.2033C171.522 65.9977 171.625 65.7921 171.779 65.7407C171.985 65.6893 172.19 65.7921 172.242 65.9463C172.961 67.8481 173.578 70.2125 172.859 70.7265C172.704 70.8807 172.396 70.9321 172.139 70.9321Z" fill="#231F20" />
                        <path d="M169.261 76.6375C169.261 76.6375 165.972 75.6095 164.738 74.2217C164.738 74.2217 164.79 78.3851 168.079 80.4411L169.261 76.6375Z" fill="#231F20" />
                        <path d="M168.08 80.8007C168.028 80.8007 167.926 80.8007 167.874 80.7493C164.482 78.5905 164.379 74.4271 164.379 74.2215C164.379 74.0673 164.482 73.9131 164.585 73.8617C164.739 73.8103 164.893 73.8617 164.996 73.9645C166.127 75.2495 169.313 76.2775 169.365 76.2775C169.57 76.3289 169.673 76.5345 169.622 76.7401L168.44 80.5437C168.388 80.6465 168.337 80.7493 168.234 80.7493C168.183 80.8007 168.131 80.8007 168.08 80.8007ZM165.201 75.0953C165.458 76.9457 166.435 78.6419 167.874 79.8241L168.799 76.8429C167.566 76.4317 166.332 75.8663 165.201 75.0953Z" fill="#231F20" />
                        <path d="M167.926 63.4279C167.926 63.4279 169.622 62.1943 170.444 64.4045L167.926 63.4279Z" fill="white" />
                        <path d="M170.442 64.7641C170.288 64.7641 170.134 64.6613 170.134 64.5071C170.031 64.0445 169.723 63.6847 169.312 63.4791C168.9 63.4277 168.541 63.4791 168.181 63.6847C168.027 63.7875 167.77 63.7361 167.667 63.5819C167.564 63.4277 167.615 63.2221 167.77 63.1193C168.284 62.7595 168.9 62.6567 169.517 62.7595C170.185 63.0165 170.648 63.5819 170.802 64.2501C170.854 64.4557 170.751 64.6613 170.597 64.7127C170.494 64.7641 170.494 64.7641 170.442 64.7641Z" fill="#231F20" />
                        <path d="M173.578 66.1518C173.578 66.1518 175.12 64.3014 176.097 66.5116L173.578 66.1518Z" fill="white" />
                        <path d="M176.097 66.8714C175.942 66.8714 175.84 66.7686 175.788 66.6658C175.634 66.306 175.377 65.8434 175.017 65.792C174.657 65.7406 174.092 66.2032 173.938 66.4088C173.835 66.563 173.578 66.563 173.424 66.4602C173.27 66.306 173.27 66.1004 173.372 65.9462C173.475 65.8434 174.195 64.9696 175.12 65.0724C175.685 65.1752 176.148 65.5864 176.456 66.3574C176.508 66.563 176.456 66.7686 176.251 66.82C176.199 66.82 176.148 66.8714 176.097 66.8714Z" fill="#231F20" />
                        <path d="M174.092 71.9603C174.092 71.9603 166.896 76.1751 166.896 68.6707L174.092 71.9603Z" fill="white" />
                        <path d="M170.187 73.5017C169.57 73.5017 168.953 73.3475 168.388 73.0391C167.154 72.3195 166.537 70.8803 166.537 68.6701C166.537 68.4645 166.691 68.3103 166.897 68.3103C167.103 68.3103 167.257 68.4645 167.257 68.6701C167.257 70.6233 167.771 71.8569 168.747 72.4223C170.649 73.5017 173.887 71.6513 173.939 71.6513C174.093 71.5485 174.35 71.6513 174.401 71.8055C174.453 71.9597 174.453 72.1653 174.299 72.2681C173.014 72.9877 171.626 73.3989 170.187 73.5017Z" fill="#231F20" />
                        <path d="M162.373 84.9646L158.981 85.9412L160.112 88.1514C160.112 88.1514 151.476 99.2024 146.079 99.665C142.944 99.8706 139.86 99.151 137.136 97.5576L131.379 100.23C131.379 100.23 136.622 104.702 136.93 105.062C137.239 105.422 145.925 107.94 151.836 101.413C155.331 97.609 158.467 93.4456 161.242 89.0766L163.247 88.2028L162.373 84.9646Z" fill="#231F20" />
                        <path d="M147.93 97.0429C147.776 97.0429 147.622 96.8887 147.57 96.7345L145.977 86.0433C145.925 85.8891 146.08 85.6835 146.234 85.6321L151.631 83.8845L147.879 80.4407C147.776 80.3379 147.724 80.2351 147.776 80.0809C147.827 79.9781 147.879 79.8753 148.033 79.8239L156.154 77.0483C156.36 76.9969 156.565 77.0997 156.617 77.2539C156.668 77.4595 156.565 77.6651 156.411 77.7165L148.907 80.3379L152.659 83.7817C152.762 83.8845 152.813 83.9873 152.762 84.1415C152.71 84.2443 152.659 84.3471 152.505 84.3985L146.851 86.2489L148.393 96.6317C148.444 96.8373 148.29 96.9915 148.084 97.0429H147.93Z" fill="#231F20" />
                        <path d="M128.346 108.608H128.295C128.243 108.608 120.842 107.118 116.833 106.193C116.627 106.141 116.524 105.936 116.576 105.781C116.627 105.627 116.833 105.473 116.987 105.524C120.996 106.45 128.346 107.889 128.449 107.94C128.655 107.992 128.757 108.197 128.706 108.351C128.655 108.506 128.5 108.608 128.346 108.608Z" fill="#231F20" />
                        <path d="M165.508 97.8655C165.303 97.8655 165.148 97.7113 165.148 97.5057C165.148 97.4029 165.2 97.3001 165.251 97.2487L173.372 89.8471L169.774 86.6603C169.672 86.6089 169.62 86.4547 169.672 86.3519C169.672 86.2491 169.723 86.1463 169.826 86.0949L174.914 83.1651L171.625 80.4923C171.471 80.3895 171.471 80.1325 171.573 79.9783C171.676 79.8241 171.933 79.8241 172.087 79.9269L175.788 82.9595C175.891 83.0109 175.942 83.1651 175.942 83.2679C175.942 83.3707 175.84 83.4735 175.737 83.5763L170.648 86.5061L174.195 89.6415C174.246 89.6929 174.298 89.7957 174.298 89.8985C174.298 90.0013 174.246 90.1041 174.195 90.1555L165.817 97.8141C165.714 97.8141 165.611 97.8655 165.508 97.8655Z" fill="#231F20" />
                        <path d="M146.235 117.963C146.029 117.963 145.875 117.809 145.875 117.603C145.875 117.552 145.875 117.5 145.926 117.449C145.978 117.295 153.893 103.057 157.748 95.3467C157.851 95.1925 158.057 95.0897 158.211 95.1925C158.365 95.2953 158.468 95.5009 158.365 95.6551C154.51 103.365 146.595 117.603 146.543 117.757C146.492 117.911 146.338 117.963 146.235 117.963Z" fill="#D1D3D4" />
                        <path d="M79.0533 178.05L72.6797 185.965C72.6797 185.965 77.1515 206.885 79.9785 204.521C82.8055 202.156 84.6045 192.442 84.6045 192.442L79.0533 178.05Z" fill="white" />
                        <path d="M79.4653 205.035C79.3625 205.035 79.2083 205.035 79.1055 204.983C76.1757 203.955 72.6805 187.867 72.2693 186.017C72.2179 185.914 72.2693 185.811 72.3207 185.708L78.6943 177.793C78.7971 177.69 78.8999 177.638 79.0027 177.69C79.1569 177.69 79.2597 177.793 79.3111 177.895L84.8623 192.287C84.8623 192.339 84.8623 192.442 84.8623 192.493C84.8109 192.904 82.9605 202.362 80.0821 204.778C79.9279 204.932 79.7223 205.035 79.4653 205.035ZM73.0403 186.017C74.4795 192.801 77.4607 203.647 79.3625 204.264C79.4653 204.315 79.6195 204.264 79.7223 204.212C82.2409 202.105 84.0399 193.47 84.2455 192.442L78.9513 178.718L73.0403 186.017Z" fill="#231F20" />
                        <path d="M149.266 68.4648C149.266 68.4648 143.817 86.9688 138.78 91.8518C133.743 96.7348 122.949 102.749 124.285 99.8702C125.622 96.9918 131.893 94.7302 136.313 86.609C140.733 78.4878 143.612 67.1798 143.612 67.1798C143.612 67.1798 143.201 65.1752 146.182 65.8434C149.163 66.5116 149.266 68.4648 149.266 68.4648Z" fill="#231F20" />
                        <path d="M166.846 110.613C170.392 107.169 173.425 103.211 175.892 98.9451C179.028 93.4453 181.443 85.7867 182.317 82.8569C182.523 82.1373 182.214 81.4177 181.546 81.0579L180.569 80.5439C179.798 80.1841 178.873 80.4925 178.513 81.2635C178.462 81.3663 178.462 81.4177 178.411 81.5205C177.023 86.5063 172.757 100.795 166.846 110.613Z" fill="#231F20" />
                        <path d="M127.576 85.0669C128.09 85.6323 132.819 88.6649 132.819 88.6649C132.819 88.6649 134.926 85.7351 136.982 85.2725L135.646 87.6369L142.276 87.7397C142.276 87.7397 142.276 94.0105 136.468 95.2441C130.66 96.4777 120.791 90.4639 120.791 90.4639" fill="white" />
                        <path d="M134.721 95.8092C128.861 95.8092 120.946 91.029 120.586 90.8234C120.432 90.7206 120.38 90.4636 120.483 90.3094C120.586 90.1552 120.792 90.1038 120.946 90.2066C121.049 90.258 130.815 96.169 136.417 94.9354C141.197 93.9074 141.814 89.4356 141.917 88.0992L135.646 87.9964C135.543 87.9964 135.389 87.945 135.338 87.7908C135.286 87.688 135.286 87.5338 135.338 87.431L136.16 85.9404C134.567 86.8142 133.076 88.8188 133.076 88.8188C132.973 88.973 132.768 89.0244 132.562 88.9216C132.048 88.6132 127.731 85.8376 127.217 85.2722C127.062 85.118 127.114 84.9124 127.217 84.7582C127.371 84.604 127.576 84.6554 127.731 84.7582C128.039 85.118 130.815 86.917 132.614 88.0992C133.179 87.3282 134.978 85.2722 136.777 84.861C136.983 84.8096 137.137 84.9638 137.188 85.118C137.188 85.2208 137.188 85.2722 137.137 85.375L136.109 87.174L142.123 87.2768C142.328 87.2768 142.482 87.431 142.482 87.6366C142.482 87.688 142.431 94.2158 136.366 95.5008C135.955 95.7578 135.338 95.8092 134.721 95.8092Z" fill="#231F20" />
                        <path d="M181.238 105.421L176.921 102.8L175.893 98.9451L173.888 101.207C173.888 101.207 171.061 98.8423 169.211 99.7161C167.72 100.384 167.103 104.136 168.491 105.987C169.879 107.837 178.206 112.258 178.206 112.258" fill="white" />
                        <path d="M178.205 112.617C178.154 112.617 178.102 112.617 178.051 112.566C177.691 112.36 169.621 108.094 168.182 106.192C167.206 104.907 167.206 102.954 167.514 101.72C167.771 100.589 168.336 99.7156 169.056 99.4072C170.752 98.6362 173.065 100.178 173.888 100.744L175.687 98.739C175.841 98.5848 176.046 98.5848 176.201 98.6876C176.252 98.739 176.303 98.7904 176.303 98.8418L177.28 102.543L181.443 105.113C181.598 105.215 181.7 105.421 181.598 105.627C181.495 105.781 181.289 105.884 181.135 105.781C181.135 105.781 181.135 105.781 181.084 105.781L176.766 103.159C176.663 103.108 176.612 103.057 176.612 102.954L175.789 99.7156L174.247 101.463C174.145 101.617 173.888 101.617 173.733 101.515C172.962 100.898 170.752 99.4586 169.416 100.075C168.953 100.281 168.542 101.001 168.285 101.926C167.977 103.108 168.028 104.804 168.799 105.832C170.135 107.58 178.308 111.949 178.411 112C178.616 112.103 178.668 112.309 178.565 112.514C178.462 112.566 178.308 112.617 178.205 112.617Z" fill="#231F20" />
                        <path d="M31.9713 167.718C31.9199 167.718 31.8171 167.718 31.7657 167.666C31.6115 167.564 31.5601 167.307 31.6629 167.152L76.4323 96.3233C76.5351 96.1691 76.7921 96.1177 76.9463 96.2205C77.1005 96.3233 77.1519 96.5803 77.0491 96.7345L32.2797 167.512C32.1769 167.615 32.0741 167.718 31.9713 167.718Z" fill="#D1D3D4" />
                        <path d="M60.9086 163.452C60.703 163.452 60.5488 163.298 60.5488 163.092C60.5488 163.041 60.5488 162.989 60.6002 162.938L84.8096 99.87C84.861 99.6644 85.118 99.5616 85.2722 99.6644C85.4778 99.7158 85.5806 99.9728 85.4778 100.127L61.2684 163.195C61.217 163.349 61.0628 163.452 60.9086 163.452Z" fill="#D1D3D4" />
                        <path d="M157.079 212.333C157.027 212.333 156.924 212.333 156.873 212.281C156.719 212.179 156.667 211.922 156.77 211.767L196.143 146.849C196.245 146.644 196.451 146.592 196.657 146.695C196.862 146.798 196.914 147.003 196.811 147.209C196.811 147.209 196.811 147.26 196.759 147.26L157.387 212.179C157.336 212.281 157.233 212.333 157.079 212.333Z" fill="#D1D3D4" />
                        <path d="M186.531 209.917H186.428C186.223 209.866 186.12 209.66 186.171 209.455C188.022 203.287 204.521 149.471 204.778 148.854C204.881 148.648 205.086 148.597 205.292 148.7C205.446 148.803 205.549 149.008 205.446 149.162C205.087 150.088 193.11 189.1 186.839 209.66C186.839 209.814 186.685 209.917 186.531 209.917Z" fill="#D1D3D4" />
                        <path d="M177.433 206.576C177.382 206.576 177.33 206.576 177.279 206.524C177.073 206.473 177.022 206.216 177.073 206.062L190.951 171.521C191.003 171.315 191.26 171.264 191.414 171.315C191.568 171.367 191.671 171.624 191.619 171.778L177.741 206.319C177.69 206.473 177.587 206.576 177.433 206.576Z" fill="#D1D3D4" />
                        <path d="M52.4282 151.63C52.2226 151.63 52.0684 151.475 52.0684 151.27C52.0684 151.218 52.0684 151.116 52.1198 151.064L69.3388 120.224C69.4416 120.019 69.6472 119.967 69.8528 120.07C70.0584 120.173 70.1098 120.378 70.007 120.584L52.788 151.424C52.6852 151.578 52.5824 151.63 52.4282 151.63Z" fill="#D1D3D4" />
                        <path d="M49.1908 174.862C49.1394 174.862 49.088 174.862 49.0366 174.811C48.831 174.708 48.7796 174.502 48.831 174.348L53.3542 163.554C53.457 163.349 53.6626 163.297 53.8682 163.349C54.0224 163.451 54.1252 163.657 54.0738 163.811L49.5506 174.605C49.4478 174.759 49.345 174.862 49.1908 174.862Z" fill="#D1D3D4" />
                        <path d="M164.944 212.693C164.738 212.693 164.584 212.539 164.584 212.334C164.584 212.282 164.584 212.231 164.635 212.179L172.037 198.764C172.14 198.61 172.345 198.507 172.551 198.61C172.757 198.713 172.808 198.918 172.705 199.124L165.304 212.539C165.201 212.642 165.098 212.693 164.944 212.693Z" fill="#D1D3D4" />
                      </svg>

                    </div>
                    <div className="md:w-3/4">
                      <div className="bg-white rounded-lg border p-6 shadow-sm">
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 1</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            AI & Its Applications
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 2</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Python for AI
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 3</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Data Handling
                          </h3>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-500 mb-1">Week 4</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Statistics for ML
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={1}>
                  <div className="flex flex-col md:flex-row gap-8 mt-5">
                    <div className="md:w-1/4">
                      <h1 className="text-3xl md:text-4xl mb-6">
                        AI/ML Concepts & Practical Implementation
                      </h1>
                      <svg className='hidden md:block' width="257" height="257" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M208.992 143.817L197.633 139.089L212.847 102.492C214.338 98.9453 220.711 93.4455 222.922 94.3193C225.132 95.1931 225.697 103.674 224.258 107.221L208.992 143.817Z" fill="white" />
                        <path d="M208.992 144.177C208.941 144.177 208.889 144.177 208.838 144.177L197.479 139.449C197.376 139.397 197.324 139.346 197.273 139.243C197.222 139.14 197.222 139.037 197.273 138.986L212.487 102.389C213.927 98.9968 220.454 92.983 223.024 94.0624C225.594 95.1418 225.954 104.034 224.515 107.426L209.301 144.023C209.301 144.126 209.146 144.177 208.992 144.177ZM198.095 138.883L208.787 143.355L223.898 107.067C225.389 103.571 224.618 95.4502 222.767 94.6792C220.917 93.9082 214.646 99.0996 213.156 102.646L198.095 138.883Z" fill="#231F20" />
                        <path d="M199.265 138.5L198.52 140.306L206.834 143.74L207.579 141.935L199.265 138.5Z" fill="white" />
                        <path d="M206.885 145.463C206.833 145.463 206.782 145.463 206.731 145.463L198.404 141.916C198.198 141.865 198.147 141.659 198.198 141.453L198.969 139.654C199.021 139.552 199.072 139.5 199.175 139.449C199.278 139.397 199.38 139.397 199.432 139.449L207.81 142.944C208.016 142.995 208.067 143.201 208.016 143.407L207.245 145.206C207.193 145.308 207.142 145.36 207.039 145.411C206.988 145.463 206.936 145.463 206.885 145.463ZM199.021 141.453L206.731 144.64L207.193 143.509L199.483 140.323L199.021 141.453Z" fill="#231F20" />
                        <path d="M210.898 107.272L200.869 131.381L212.259 136.119L222.288 112.011L210.898 107.272Z" fill="#D1D3D4" />
                        <path d="M212.23 136.467C212.179 136.467 212.128 136.467 212.076 136.415L200.717 131.686C200.614 131.635 200.563 131.584 200.511 131.481C200.46 131.378 200.46 131.275 200.511 131.224L210.534 107.117C210.586 107.014 210.637 106.963 210.74 106.912C210.843 106.86 210.945 106.86 210.997 106.912L222.356 111.64C222.562 111.743 222.613 111.949 222.562 112.103L212.539 136.21C212.487 136.415 212.385 136.467 212.23 136.467ZM201.334 131.172L212.025 135.644L221.791 112.206L211.1 107.734L201.334 131.172Z" fill="#231F20" />
                        <path d="M192.955 137.752H198.198L200.459 132.304L194.24 134.668L192.955 137.752Z" fill="white" />
                        <path d="M192.955 138.111C192.853 138.111 192.698 138.06 192.647 137.957C192.595 137.854 192.544 137.752 192.596 137.649L193.881 134.565C193.932 134.462 193.983 134.411 194.086 134.359L200.306 131.995C200.46 131.943 200.614 131.995 200.717 132.098C200.82 132.2 200.82 132.355 200.768 132.509L198.507 137.957C198.455 138.111 198.301 138.163 198.198 138.163L192.955 138.111ZM194.497 134.976L193.469 137.392H197.941L199.792 132.971L194.497 134.976Z" fill="#231F20" />
                        <path d="M213.259 146.233L209.609 142.481L211.871 137.032L214.544 143.149L213.259 146.233Z" fill="white" />
                        <path d="M213.259 146.593C213.156 146.593 213.053 146.541 213.002 146.49L209.301 142.738C209.198 142.635 209.147 142.481 209.249 142.327L211.511 136.878C211.562 136.724 211.717 136.673 211.819 136.673C211.974 136.673 212.076 136.775 212.128 136.878L214.852 142.995C214.903 143.098 214.903 143.2 214.852 143.252L213.567 146.336C213.516 146.439 213.413 146.541 213.31 146.541L213.259 146.593ZM210.02 142.378L213.156 145.565L214.184 143.149L211.871 137.958L210.02 142.378Z" fill="#231F20" />
                        <path d="M96.9923 62.2969L165.766 64.3529L215.726 111.692L206.629 133.589L87.8945 84.1933L96.9923 62.2969Z" fill="white" />
                        <path d="M206.628 133.949C206.576 133.949 206.525 133.949 206.474 133.897L87.791 84.5017C87.6882 84.4503 87.6368 84.3989 87.5854 84.2961C87.534 84.1933 87.534 84.0905 87.5854 84.0391L96.6832 62.1941C96.7346 62.0399 96.8888 61.9885 97.043 61.9885L165.816 64.0445C165.919 64.0445 165.97 64.0959 166.073 64.1473L215.983 111.487C216.085 111.59 216.137 111.744 216.085 111.898L206.988 133.794C206.936 133.897 206.885 133.949 206.782 134C206.731 133.949 206.679 133.949 206.628 133.949ZM88.4078 83.9877L206.422 133.126L215.263 111.795L165.611 64.7127L97.1972 62.6567L88.4078 83.9877Z" fill="#231F20" />
                        <path d="M153.019 56.54L180.312 67.8994C185.041 69.8526 187.251 75.301 185.298 80.0298L171.78 112.463C169.827 117.192 164.378 119.402 159.649 117.449L132.356 106.09C127.627 104.136 125.417 98.688 127.37 93.9592L140.888 61.5258C142.893 56.8484 148.341 54.5868 153.019 56.54Z" fill="#D1D3D4" />
                        <path d="M161.243 117.398C159.495 117.398 157.748 117.038 156.103 116.37L135.697 107.837C128.912 105.01 125.674 97.1974 128.501 90.4126L139.141 64.8154C141.968 58.0306 149.729 54.7924 156.514 57.6194C156.514 57.6194 156.514 57.6194 156.566 57.6194L177.023 66.1004C183.808 68.9274 187.046 76.7402 184.219 83.525L173.579 109.122C171.472 114.108 166.64 117.346 161.243 117.398ZM151.477 57.3624C146.388 57.3624 141.814 60.4464 139.861 65.1238L129.221 90.721C126.548 97.146 129.581 104.548 136.006 107.22L156.463 115.701C162.888 118.374 170.289 115.342 172.962 108.917L183.602 83.3194C186.275 76.8944 183.242 69.4928 176.766 66.82L156.309 58.339C154.767 57.6708 153.122 57.3624 151.477 57.3624Z" fill="#231F20" />
                        <path d="M89.8477 94.2676L78.4883 89.5388L93.7027 52.942C95.1933 49.3954 101.567 43.8956 103.777 44.8208C105.987 45.746 106.553 54.1756 105.113 57.7222L89.8477 94.2676Z" fill="white" />
                        <path d="M89.8476 94.6274C89.7962 94.6274 89.7448 94.6274 89.6934 94.576L78.334 89.8472C78.2312 89.7958 78.1798 89.7444 78.1284 89.6416C78.077 89.5388 78.077 89.436 78.1284 89.3846L93.3428 52.7878C94.0624 51.0916 95.9642 48.7786 98.1744 46.9282C99.3566 45.9516 102.235 43.7928 103.828 44.461C105.422 45.1292 105.936 48.7272 106.09 50.2178C106.347 53.1476 106.039 56.0774 105.37 57.825L90.156 94.4218C90.1046 94.5246 90.0018 94.6274 89.8476 94.6274ZM78.9508 89.3332L89.642 93.805L104.754 57.5166C105.422 55.9232 105.679 53.0448 105.473 50.2692C105.268 47.4936 104.497 45.489 103.674 45.1292C102.852 44.7694 100.899 45.6946 98.7398 47.4936C96.581 49.2926 94.7306 51.5028 94.0624 53.0962L78.9508 89.3332Z" fill="#231F20" />
                        <path d="M80.1272 90.2152L79.377 92.0186L87.7295 95.4933L88.4797 93.6899L80.1272 90.2152Z" fill="white" />
                        <path d="M87.7409 95.8609C87.6895 95.8609 87.6381 95.8609 87.5867 95.8095L79.2085 92.3143C79.0029 92.2629 78.9515 92.0059 79.0029 91.8517L79.7739 90.0527C79.8253 89.9499 79.8767 89.8985 79.9795 89.8471C80.0823 89.7957 80.1851 89.7957 80.2365 89.8471L88.6147 93.3423C88.7175 93.3937 88.7689 93.4451 88.8203 93.5479C88.8717 93.6507 88.8717 93.7535 88.8203 93.8049L88.0493 95.6039C87.9979 95.7067 87.9465 95.7581 87.8437 95.8095C87.8437 95.8609 87.7923 95.8609 87.7409 95.8609ZM79.8767 91.8517L87.5867 95.0385L88.0493 93.9077L80.3393 90.7209L79.8767 91.8517Z" fill="#231F20" />
                        <path d="M91.7305 57.6874L81.7012 81.7959L93.091 86.5342L103.12 62.4257L91.7305 57.6874Z" fill="#D1D3D4" />
                        <path d="M93.0859 86.9178C93.0345 86.9178 92.9831 86.9178 92.9317 86.8664L81.5723 82.1376C81.4695 82.0862 81.4181 82.0348 81.3667 81.932C81.3153 81.8292 81.3153 81.7264 81.3667 81.675L91.3897 57.5684C91.4411 57.4656 91.4925 57.4142 91.5953 57.3628C91.6981 57.3114 91.8009 57.3114 91.8523 57.3628L103.212 62.0916C103.417 62.143 103.469 62.4 103.417 62.5542L93.3943 86.6608C93.3429 86.815 93.2401 86.9178 93.0859 86.9178ZM82.1891 81.6236L92.8803 86.0954L102.646 62.657L91.9551 58.1852L82.1891 81.6236Z" fill="#231F20" />
                        <path d="M73.8105 88.2029L79.0533 88.1515L81.3149 82.7031L75.0955 85.1189L73.8105 88.2029Z" fill="white" />
                        <path d="M73.8108 88.5104C73.708 88.5104 73.5538 88.459 73.5024 88.3562C73.451 88.2534 73.3996 88.1506 73.451 87.9964L74.736 84.9124C74.7874 84.8096 74.8388 84.7582 74.9416 84.7068L81.2124 82.3424C81.3666 82.291 81.5208 82.3424 81.6236 82.4452C81.7264 82.548 81.7778 82.7022 81.675 82.8564L79.4134 88.3048C79.362 88.459 79.2078 88.5104 79.105 88.5104H73.8108ZM75.3528 85.375L74.3248 87.7908H78.7966L80.647 83.3704L75.3528 85.375Z" fill="#231F20" />
                        <path d="M94.1129 96.632L90.4121 92.8798L92.7251 87.4314L95.3979 93.548L94.1129 96.632Z" fill="white" />
                        <path d="M94.1141 96.9915C94.0113 96.9915 93.9085 96.9401 93.8571 96.8887L90.1563 93.1365C90.0535 93.0337 90.0021 92.8795 90.1049 92.7253L92.3665 87.2769C92.4179 87.1227 92.5721 87.0713 92.6749 87.0713C92.8291 87.0713 92.9319 87.1741 92.9833 87.2769L95.6561 93.3935C95.7075 93.4963 95.7075 93.5991 95.6561 93.7019L94.3711 96.7859C94.3197 96.8887 94.2169 96.9915 94.1141 96.9915ZM90.8759 92.7767L94.0113 95.9635L95.0393 93.5477L92.7263 88.3563L90.8759 92.7767Z" fill="#231F20" />
                        <path d="M134.925 67.8994L104.547 66.5116C104.342 66.5116 104.188 66.3574 104.188 66.1518C104.188 65.9462 104.342 65.792 104.547 65.792L134.925 67.1798C135.13 67.1798 135.285 67.334 135.285 67.5396C135.336 67.7452 135.182 67.8994 134.925 67.8994Z" fill="#D1D3D4" />
                        <path d="M211.666 112.669C211.563 112.669 211.46 112.618 211.409 112.566L185.606 88.614C185.452 88.4598 185.452 88.2542 185.606 88.1C185.76 87.9458 185.966 87.9458 186.12 88.1L211.923 112.104C212.077 112.258 212.077 112.464 211.923 112.618C211.871 112.618 211.768 112.669 211.666 112.669Z" fill="#D1D3D4" />
                        <path d="M134.257 179.746L127.523 185.348C127.523 185.348 141.761 210.637 143.817 206.885C144.794 205.086 142.532 192.493 142.532 192.493" fill="white" />
                        <path d="M143.201 207.604C139.706 207.604 128.501 187.764 127.216 185.502C127.113 185.348 127.164 185.142 127.318 185.04L134 179.437C134.155 179.334 134.412 179.386 134.514 179.54C134.617 179.694 134.566 179.848 134.463 180.002L127.987 185.399C132.715 193.829 140.939 206.833 143.201 206.833C143.252 206.833 143.407 206.833 143.458 206.628C144.126 205.394 143.047 197.478 142.122 192.493C142.07 192.287 142.173 192.081 142.379 192.03C142.584 191.979 142.79 192.081 142.841 192.287V192.338C143.098 193.623 145.154 205.086 144.126 206.936C143.972 207.347 143.612 207.604 143.201 207.604Z" fill="#231F20" />
                        <path d="M180.672 83.2166C180.672 83.2166 220.455 115.907 203.904 118.323C190.078 120.327 177.536 112.977 177.536 112.977L181.443 104.291C181.443 104.291 194.19 110.202 193.727 107.58C193.265 104.959 175.994 94.6274 175.994 94.6274L180.672 83.2166Z" fill="#FFC87A" />
                        <path d="M145.206 70.0577C145.206 70.0577 105.165 65.6373 104.086 71.7539C103.006 77.8705 120.277 91.3887 120.739 90.5149C121.202 89.6411 130.351 84.2955 130.351 84.2955L122.333 77.9219L141.505 82.2395L145.206 70.0577Z" fill="#FFC87A" />
                        <path d="M179.49 61.2687C180.621 59.1099 179.85 56.3857 178.514 54.3297C175.121 49.0869 169.056 46.2085 162.837 46.9281C160.061 47.2879 157.183 48.5215 155.743 50.9373C157.285 50.6289 158.827 50.5775 160.369 50.7831C156.926 52.2737 154.304 55.1521 153.122 58.6987C152.968 59.0585 152.968 59.4697 153.071 59.8295C153.328 60.4463 154.253 60.4463 154.87 60.2921C155.486 60.1379 156.257 59.8295 156.874 60.1379C154.921 60.9089 153.328 62.4509 152.505 64.4041C152.094 65.2265 151.94 66.2031 152.145 67.1283C152.351 67.7965 152.711 68.3618 153.225 68.8244C154.407 69.9552 156 70.5207 157.594 71.0347C160.421 71.9599 163.351 72.7309 166.28 72.3711C169.827 71.9085 172.705 69.8011 175.275 67.4881C176.458 66.4087 177.588 66.4087 178.873 65.5863C179.644 65.0723 180.107 64.3013 180.21 63.3761C180.056 62.6565 179.799 61.9369 179.49 61.2687Z" fill="white" />
                        <path d="M164.789 72.7824C162.271 72.7824 159.855 72.0628 157.542 71.3432C155.897 70.7778 154.252 70.2124 153.07 69.0816C152.505 68.5676 152.094 67.9508 151.888 67.2312C151.682 66.2032 151.785 65.1752 152.248 64.25C152.916 62.708 153.995 61.423 155.435 60.5492L155.332 60.6006L155.075 60.652C154.304 60.8576 153.224 60.8576 152.813 60.0352C152.659 59.5726 152.659 59.11 152.865 58.6474C153.944 55.4606 156.154 52.7364 159.084 51.0916C158.005 51.0402 156.925 51.143 155.897 51.3486C155.743 51.4 155.64 51.2972 155.537 51.1944C155.486 51.0916 155.486 50.9374 155.537 50.7832C156.874 48.573 159.547 47.031 162.888 46.5684C169.21 45.7974 175.429 48.7786 178.924 54.1242C179.695 55.3578 181.34 58.4932 179.952 61.2688C180.261 61.937 180.466 62.6566 180.621 63.3762C180.518 64.4042 179.952 65.278 179.13 65.8434C178.616 66.1518 178.102 66.4088 177.537 66.6144C176.817 66.8714 176.149 67.2312 175.583 67.6938C173.322 69.7498 170.186 72.1656 166.383 72.6282C165.817 72.731 165.303 72.7824 164.789 72.7824ZM156.308 59.624C156.565 59.624 156.874 59.6754 157.079 59.8296C157.234 59.9324 157.336 60.138 157.234 60.2922C157.182 60.3436 157.131 60.4464 157.028 60.4464C155.178 61.2174 153.636 62.6566 152.865 64.507C152.453 65.278 152.351 66.1518 152.556 67.0256C152.762 67.591 153.07 68.1564 153.533 68.5162C154.612 69.5956 156.154 70.1096 157.748 70.6236C160.472 71.4974 163.35 72.3198 166.229 71.96C169.827 71.4974 172.705 69.2872 175.018 67.1798C175.635 66.6144 176.406 66.2032 177.177 65.9462C177.691 65.7406 178.153 65.535 178.616 65.278C179.284 64.8668 179.695 64.1472 179.798 63.3762C179.644 62.708 179.387 62.0912 179.13 61.4744C179.079 61.3716 179.079 61.2174 179.13 61.1146C180.466 58.6474 178.924 55.6662 178.205 54.5354C174.864 49.4468 168.953 46.6198 162.888 47.288C160.112 47.6478 157.85 48.7786 156.514 50.4748C157.799 50.3206 159.084 50.2692 160.369 50.4234C160.523 50.4234 160.677 50.5776 160.677 50.7318C160.677 50.886 160.626 51.0402 160.472 51.0916C157.131 52.5308 154.561 55.3064 153.43 58.7502C153.327 59.0072 153.276 59.3156 153.379 59.624C153.584 60.0352 154.252 60.0352 154.766 59.881L155.023 59.8296C155.486 59.7268 155.897 59.624 156.308 59.624Z" fill="#231F20" />
                        <path d="M155.742 124.182C155.742 124.182 168.746 152.966 166.536 158.62C164.326 164.274 142.481 192.493 142.481 192.493L130.865 182.675C130.865 182.675 151.27 155.742 150.448 153.892C149.626 152.041 139.5 132.561 139.5 132.561L84.5532 192.441L79.002 178.049L123.566 114.108L155.742 124.182Z" fill="#231F20" />
                        <path d="M142.481 192.852C142.378 192.852 142.327 192.801 142.224 192.75L130.607 182.932C130.453 182.829 130.402 182.572 130.556 182.418C138.266 172.292 150.345 155.587 150.088 153.943C149.317 152.298 140.939 136.004 139.397 133.074L84.8613 192.647C84.7585 192.75 84.6557 192.801 84.5529 192.75C84.4501 192.75 84.3473 192.647 84.2959 192.544L78.7447 178.152C78.6933 178.049 78.6933 177.895 78.7961 177.844L123.36 113.902C123.463 113.799 123.617 113.696 123.771 113.748L155.948 123.822C156.05 123.874 156.102 123.925 156.153 124.028C156.667 125.21 169.209 153.017 166.947 158.723C164.737 164.377 143.714 191.567 142.84 192.698C142.686 192.75 142.635 192.801 142.481 192.852ZM131.378 182.572L142.429 191.927C144.794 188.895 164.172 163.657 166.228 158.414C168.284 153.172 156.513 126.649 155.485 124.439L123.72 114.519L79.4129 178.049L84.6557 191.67L139.242 132.2C139.345 132.098 139.448 132.098 139.551 132.098C139.654 132.098 139.757 132.2 139.808 132.303C140.219 133.074 149.934 151.835 150.756 153.686C151.578 155.536 136.416 175.942 131.378 182.572Z" fill="#231F20" />
                        <path d="M155.743 124.182L123.566 114.108L153.738 74.6841C153.738 74.6841 168.747 81.9315 170.597 84.8613C172.448 87.7911 155.743 124.182 155.743 124.182Z" fill="white" />
                        <path d="M155.743 124.542C155.692 124.542 155.692 124.542 155.64 124.542L123.464 114.468C123.361 114.416 123.258 114.365 123.207 114.262C123.155 114.159 123.207 114.005 123.258 113.954L153.43 74.5301C153.533 74.3759 153.738 74.3245 153.893 74.4273C154.509 74.7357 169.056 81.7775 170.906 84.7073C172.756 87.6371 157.799 120.636 156.103 124.388C156 124.439 155.897 124.542 155.743 124.542ZM124.183 113.902L155.589 123.72C162.014 109.688 171.574 87.0203 170.341 85.0157C168.696 82.4457 155.897 76.0721 153.893 75.0955L124.183 113.902Z" fill="#231F20" />
                        <path d="M161.859 74.3244C161.293 74.273 158.312 80.955 158.055 81.5204C155.177 86.866 152.504 92.4686 149.471 97.66C143.509 107.991 130.505 114.211 120.43 119.556C119.094 120.276 117.603 120.996 116.113 120.739C115.033 120.43 114.108 119.865 113.337 119.094C109.893 116.01 107.118 112.258 105.216 108.043C104.907 107.477 104.753 106.912 104.805 106.295C104.959 105.267 105.73 104.445 106.758 104.188C112.103 103.263 119.968 102.646 124.285 99.8702C131.481 95.2956 139.757 81.8288 145.256 70.0068C151.887 71.6516 157.695 73.3478 161.859 74.3244Z" fill="#FFC87A" />
                        <path d="M180.671 83.2165C180.825 83.3193 174.195 99.2019 173.886 99.9729C171.419 105.781 162.732 116.421 157.541 119.762C160.882 113.8 161.859 104.393 162.116 97.6599C162.218 94.3703 164.943 88.6649 166.176 85.6323C166.279 85.3239 167.358 75.9177 167.204 75.8149C167.153 75.8149 176.508 79.8755 180.671 83.2165Z" fill="#FFC87A" />
                        <path d="M169.262 76.6369L167.412 83.0105C167.412 83.0105 165.716 85.6833 161.758 83.4217C157.8 81.1601 158.006 78.0761 158.006 78.0761L161.912 66.3569C161.912 66.3569 165.099 65.2775 166.127 58.1843C166.127 58.1843 172.089 62.0907 178.669 63.0673C178.669 63.0673 176.561 70.8287 175.122 73.9641C173.683 77.0995 169.262 76.6369 169.262 76.6369Z" fill="white" />
                        <path d="M164.687 84.6557C163.608 84.6043 162.528 84.2959 161.603 83.7305C157.491 81.4175 157.645 78.1793 157.645 78.0765C157.645 78.0251 157.645 78.0251 157.645 77.9737L161.552 66.2545C161.603 66.1517 161.654 66.0489 161.757 66.0489C161.757 66.0489 164.738 64.9181 165.715 58.1847C165.715 58.0819 165.818 57.9791 165.921 57.9277C166.023 57.8763 166.178 57.8763 166.28 57.9277C166.332 57.9791 172.294 61.7827 178.668 62.7593C178.771 62.7593 178.873 62.8107 178.925 62.9135C178.976 63.0163 178.976 63.1191 178.976 63.2219C178.873 63.5303 176.869 71.0347 175.378 74.1701C174.042 77.0485 170.547 77.0999 169.467 77.0485L167.668 83.1137C167.668 83.1651 167.668 83.1651 167.617 83.2165C167 84.1417 165.869 84.7071 164.687 84.6557ZM158.365 78.1279C158.365 78.4877 158.416 81.1091 161.963 83.0623C165.355 84.9641 166.846 83.1137 167.103 82.8053L168.953 76.5345C169.005 76.3803 169.159 76.2775 169.364 76.2775C169.416 76.2775 173.528 76.6887 174.813 73.8103C176.046 71.1375 177.794 64.9695 178.257 63.3247C172.911 62.3995 167.977 59.6239 166.435 58.7501C165.458 64.6611 162.939 66.2545 162.271 66.5629L158.365 78.1279Z" fill="#231F20" />
                        <path d="M164.019 66.6144C164.019 65.9976 163.865 65.3808 163.505 64.8668C163.145 64.4042 162.734 63.993 162.22 63.6846C161.963 63.479 161.706 63.3248 161.397 63.2734C161.192 63.2734 160.935 63.2734 160.729 63.3248C160.215 63.4276 159.753 63.6846 159.393 64.0958C159.187 64.4556 159.033 64.8668 158.982 65.278C158.879 65.7406 158.879 66.2032 158.93 66.6658C159.187 68.5676 160.935 69.9554 162.837 69.6984H162.888" fill="white" />
                        <path d="M162.424 70.1093C160.471 70.1093 158.826 68.6701 158.569 66.7169C158.518 66.2029 158.518 65.7403 158.62 65.2263C158.672 64.7637 158.826 64.2497 159.083 63.8385C159.494 63.3759 160.008 63.0161 160.625 62.9133C160.882 62.8619 161.139 62.8105 161.447 62.8619C161.807 62.9647 162.167 63.1189 162.475 63.3245C162.989 63.6843 163.452 64.0955 163.812 64.5581C164.223 65.1235 164.429 65.8431 164.377 66.5113C164.377 66.7169 164.223 66.8711 164.017 66.8711C163.812 66.8711 163.658 66.7169 163.658 66.5113C163.658 65.9459 163.503 65.4319 163.195 64.9693C162.887 64.5581 162.475 64.1983 162.013 63.8899C161.807 63.7357 161.55 63.5815 161.293 63.5301C161.139 63.5301 160.933 63.5301 160.779 63.5815C160.317 63.6329 159.957 63.8899 159.648 64.1983C159.443 64.5067 159.34 64.8665 159.34 65.2263C159.289 65.6375 159.237 66.1001 159.289 66.5113C159.494 68.2075 161.088 69.4411 162.784 69.2355H162.835C163.041 69.1841 163.195 69.3383 163.246 69.5439C163.298 69.7495 163.144 69.9037 162.938 69.9551C162.835 70.1093 162.63 70.1093 162.424 70.1093Z" fill="#231F20" />
                        <path d="M171.984 66.0486C171.984 66.0486 173.423 69.955 172.755 70.4176C172.087 70.8802 170.699 70.1092 170.699 70.1092" fill="white" />
                        <path d="M172.139 70.9321C171.574 70.8807 170.957 70.7265 170.443 70.4695C170.237 70.3667 170.186 70.1611 170.237 70.0069C170.34 69.8013 170.546 69.7499 170.7 69.8013C170.7 69.8013 170.751 69.8013 170.751 69.8527C171.162 70.0583 172.088 70.4181 172.447 70.1611C172.653 69.9041 172.242 68.0537 171.574 66.2033C171.522 65.9977 171.625 65.7921 171.779 65.7407C171.985 65.6893 172.19 65.7921 172.242 65.9463C172.961 67.8481 173.578 70.2125 172.859 70.7265C172.704 70.8807 172.396 70.9321 172.139 70.9321Z" fill="#231F20" />
                        <path d="M169.261 76.6375C169.261 76.6375 165.972 75.6095 164.738 74.2217C164.738 74.2217 164.79 78.3851 168.079 80.4411L169.261 76.6375Z" fill="#231F20" />
                        <path d="M168.08 80.8007C168.028 80.8007 167.926 80.8007 167.874 80.7493C164.482 78.5905 164.379 74.4271 164.379 74.2215C164.379 74.0673 164.482 73.9131 164.585 73.8617C164.739 73.8103 164.893 73.8617 164.996 73.9645C166.127 75.2495 169.313 76.2775 169.365 76.2775C169.57 76.3289 169.673 76.5345 169.622 76.7401L168.44 80.5437C168.388 80.6465 168.337 80.7493 168.234 80.7493C168.183 80.8007 168.131 80.8007 168.08 80.8007ZM165.201 75.0953C165.458 76.9457 166.435 78.6419 167.874 79.8241L168.799 76.8429C167.566 76.4317 166.332 75.8663 165.201 75.0953Z" fill="#231F20" />
                        <path d="M167.926 63.4279C167.926 63.4279 169.622 62.1943 170.444 64.4045L167.926 63.4279Z" fill="white" />
                        <path d="M170.442 64.7641C170.288 64.7641 170.134 64.6613 170.134 64.5071C170.031 64.0445 169.723 63.6847 169.312 63.4791C168.9 63.4277 168.541 63.4791 168.181 63.6847C168.027 63.7875 167.77 63.7361 167.667 63.5819C167.564 63.4277 167.615 63.2221 167.77 63.1193C168.284 62.7595 168.9 62.6567 169.517 62.7595C170.185 63.0165 170.648 63.5819 170.802 64.2501C170.854 64.4557 170.751 64.6613 170.597 64.7127C170.494 64.7641 170.494 64.7641 170.442 64.7641Z" fill="#231F20" />
                        <path d="M173.578 66.1518C173.578 66.1518 175.12 64.3014 176.097 66.5116L173.578 66.1518Z" fill="white" />
                        <path d="M176.097 66.8714C175.942 66.8714 175.84 66.7686 175.788 66.6658C175.634 66.306 175.377 65.8434 175.017 65.792C174.657 65.7406 174.092 66.2032 173.938 66.4088C173.835 66.563 173.578 66.563 173.424 66.4602C173.27 66.306 173.27 66.1004 173.372 65.9462C173.475 65.8434 174.195 64.9696 175.12 65.0724C175.685 65.1752 176.148 65.5864 176.456 66.3574C176.508 66.563 176.456 66.7686 176.251 66.82C176.199 66.82 176.148 66.8714 176.097 66.8714Z" fill="#231F20" />
                        <path d="M174.092 71.9603C174.092 71.9603 166.896 76.1751 166.896 68.6707L174.092 71.9603Z" fill="white" />
                        <path d="M170.187 73.5017C169.57 73.5017 168.953 73.3475 168.388 73.0391C167.154 72.3195 166.537 70.8803 166.537 68.6701C166.537 68.4645 166.691 68.3103 166.897 68.3103C167.103 68.3103 167.257 68.4645 167.257 68.6701C167.257 70.6233 167.771 71.8569 168.747 72.4223C170.649 73.5017 173.887 71.6513 173.939 71.6513C174.093 71.5485 174.35 71.6513 174.401 71.8055C174.453 71.9597 174.453 72.1653 174.299 72.2681C173.014 72.9877 171.626 73.3989 170.187 73.5017Z" fill="#231F20" />
                        <path d="M162.373 84.9646L158.981 85.9412L160.112 88.1514C160.112 88.1514 151.476 99.2024 146.079 99.665C142.944 99.8706 139.86 99.151 137.136 97.5576L131.379 100.23C131.379 100.23 136.622 104.702 136.93 105.062C137.239 105.422 145.925 107.94 151.836 101.413C155.331 97.609 158.467 93.4456 161.242 89.0766L163.247 88.2028L162.373 84.9646Z" fill="#231F20" />
                        <path d="M147.93 97.0429C147.776 97.0429 147.622 96.8887 147.57 96.7345L145.977 86.0433C145.925 85.8891 146.08 85.6835 146.234 85.6321L151.631 83.8845L147.879 80.4407C147.776 80.3379 147.724 80.2351 147.776 80.0809C147.827 79.9781 147.879 79.8753 148.033 79.8239L156.154 77.0483C156.36 76.9969 156.565 77.0997 156.617 77.2539C156.668 77.4595 156.565 77.6651 156.411 77.7165L148.907 80.3379L152.659 83.7817C152.762 83.8845 152.813 83.9873 152.762 84.1415C152.71 84.2443 152.659 84.3471 152.505 84.3985L146.851 86.2489L148.393 96.6317C148.444 96.8373 148.29 96.9915 148.084 97.0429H147.93Z" fill="#231F20" />
                        <path d="M128.346 108.608H128.295C128.243 108.608 120.842 107.118 116.833 106.193C116.627 106.141 116.524 105.936 116.576 105.781C116.627 105.627 116.833 105.473 116.987 105.524C120.996 106.45 128.346 107.889 128.449 107.94C128.655 107.992 128.757 108.197 128.706 108.351C128.655 108.506 128.5 108.608 128.346 108.608Z" fill="#231F20" />
                        <path d="M165.508 97.8655C165.303 97.8655 165.148 97.7113 165.148 97.5057C165.148 97.4029 165.2 97.3001 165.251 97.2487L173.372 89.8471L169.774 86.6603C169.672 86.6089 169.62 86.4547 169.672 86.3519C169.672 86.2491 169.723 86.1463 169.826 86.0949L174.914 83.1651L171.625 80.4923C171.471 80.3895 171.471 80.1325 171.573 79.9783C171.676 79.8241 171.933 79.8241 172.087 79.9269L175.788 82.9595C175.891 83.0109 175.942 83.1651 175.942 83.2679C175.942 83.3707 175.84 83.4735 175.737 83.5763L170.648 86.5061L174.195 89.6415C174.246 89.6929 174.298 89.7957 174.298 89.8985C174.298 90.0013 174.246 90.1041 174.195 90.1555L165.817 97.8141C165.714 97.8141 165.611 97.8655 165.508 97.8655Z" fill="#231F20" />
                        <path d="M146.235 117.963C146.029 117.963 145.875 117.809 145.875 117.603C145.875 117.552 145.875 117.5 145.926 117.449C145.978 117.295 153.893 103.057 157.748 95.3467C157.851 95.1925 158.057 95.0897 158.211 95.1925C158.365 95.2953 158.468 95.5009 158.365 95.6551C154.51 103.365 146.595 117.603 146.543 117.757C146.492 117.911 146.338 117.963 146.235 117.963Z" fill="#D1D3D4" />
                        <path d="M79.0533 178.05L72.6797 185.965C72.6797 185.965 77.1515 206.885 79.9785 204.521C82.8055 202.156 84.6045 192.442 84.6045 192.442L79.0533 178.05Z" fill="white" />
                        <path d="M79.4653 205.035C79.3625 205.035 79.2083 205.035 79.1055 204.983C76.1757 203.955 72.6805 187.867 72.2693 186.017C72.2179 185.914 72.2693 185.811 72.3207 185.708L78.6943 177.793C78.7971 177.69 78.8999 177.638 79.0027 177.69C79.1569 177.69 79.2597 177.793 79.3111 177.895L84.8623 192.287C84.8623 192.339 84.8623 192.442 84.8623 192.493C84.8109 192.904 82.9605 202.362 80.0821 204.778C79.9279 204.932 79.7223 205.035 79.4653 205.035ZM73.0403 186.017C74.4795 192.801 77.4607 203.647 79.3625 204.264C79.4653 204.315 79.6195 204.264 79.7223 204.212C82.2409 202.105 84.0399 193.47 84.2455 192.442L78.9513 178.718L73.0403 186.017Z" fill="#231F20" />
                        <path d="M149.266 68.4648C149.266 68.4648 143.817 86.9688 138.78 91.8518C133.743 96.7348 122.949 102.749 124.285 99.8702C125.622 96.9918 131.893 94.7302 136.313 86.609C140.733 78.4878 143.612 67.1798 143.612 67.1798C143.612 67.1798 143.201 65.1752 146.182 65.8434C149.163 66.5116 149.266 68.4648 149.266 68.4648Z" fill="#231F20" />
                        <path d="M166.846 110.613C170.392 107.169 173.425 103.211 175.892 98.9451C179.028 93.4453 181.443 85.7867 182.317 82.8569C182.523 82.1373 182.214 81.4177 181.546 81.0579L180.569 80.5439C179.798 80.1841 178.873 80.4925 178.513 81.2635C178.462 81.3663 178.462 81.4177 178.411 81.5205C177.023 86.5063 172.757 100.795 166.846 110.613Z" fill="#231F20" />
                        <path d="M127.576 85.0669C128.09 85.6323 132.819 88.6649 132.819 88.6649C132.819 88.6649 134.926 85.7351 136.982 85.2725L135.646 87.6369L142.276 87.7397C142.276 87.7397 142.276 94.0105 136.468 95.2441C130.66 96.4777 120.791 90.4639 120.791 90.4639" fill="white" />
                        <path d="M134.721 95.8092C128.861 95.8092 120.946 91.029 120.586 90.8234C120.432 90.7206 120.38 90.4636 120.483 90.3094C120.586 90.1552 120.792 90.1038 120.946 90.2066C121.049 90.258 130.815 96.169 136.417 94.9354C141.197 93.9074 141.814 89.4356 141.917 88.0992L135.646 87.9964C135.543 87.9964 135.389 87.945 135.338 87.7908C135.286 87.688 135.286 87.5338 135.338 87.431L136.16 85.9404C134.567 86.8142 133.076 88.8188 133.076 88.8188C132.973 88.973 132.768 89.0244 132.562 88.9216C132.048 88.6132 127.731 85.8376 127.217 85.2722C127.062 85.118 127.114 84.9124 127.217 84.7582C127.371 84.604 127.576 84.6554 127.731 84.7582C128.039 85.118 130.815 86.917 132.614 88.0992C133.179 87.3282 134.978 85.2722 136.777 84.861C136.983 84.8096 137.137 84.9638 137.188 85.118C137.188 85.2208 137.188 85.2722 137.137 85.375L136.109 87.174L142.123 87.2768C142.328 87.2768 142.482 87.431 142.482 87.6366C142.482 87.688 142.431 94.2158 136.366 95.5008C135.955 95.7578 135.338 95.8092 134.721 95.8092Z" fill="#231F20" />
                        <path d="M181.238 105.421L176.921 102.8L175.893 98.9451L173.888 101.207C173.888 101.207 171.061 98.8423 169.211 99.7161C167.72 100.384 167.103 104.136 168.491 105.987C169.879 107.837 178.206 112.258 178.206 112.258" fill="white" />
                        <path d="M178.205 112.617C178.154 112.617 178.102 112.617 178.051 112.566C177.691 112.36 169.621 108.094 168.182 106.192C167.206 104.907 167.206 102.954 167.514 101.72C167.771 100.589 168.336 99.7156 169.056 99.4072C170.752 98.6362 173.065 100.178 173.888 100.744L175.687 98.739C175.841 98.5848 176.046 98.5848 176.201 98.6876C176.252 98.739 176.303 98.7904 176.303 98.8418L177.28 102.543L181.443 105.113C181.598 105.215 181.7 105.421 181.598 105.627C181.495 105.781 181.289 105.884 181.135 105.781C181.135 105.781 181.135 105.781 181.084 105.781L176.766 103.159C176.663 103.108 176.612 103.057 176.612 102.954L175.789 99.7156L174.247 101.463C174.145 101.617 173.888 101.617 173.733 101.515C172.962 100.898 170.752 99.4586 169.416 100.075C168.953 100.281 168.542 101.001 168.285 101.926C167.977 103.108 168.028 104.804 168.799 105.832C170.135 107.58 178.308 111.949 178.411 112C178.616 112.103 178.668 112.309 178.565 112.514C178.462 112.566 178.308 112.617 178.205 112.617Z" fill="#231F20" />
                        <path d="M31.9713 167.718C31.9199 167.718 31.8171 167.718 31.7657 167.666C31.6115 167.564 31.5601 167.307 31.6629 167.152L76.4323 96.3233C76.5351 96.1691 76.7921 96.1177 76.9463 96.2205C77.1005 96.3233 77.1519 96.5803 77.0491 96.7345L32.2797 167.512C32.1769 167.615 32.0741 167.718 31.9713 167.718Z" fill="#D1D3D4" />
                        <path d="M60.9086 163.452C60.703 163.452 60.5488 163.298 60.5488 163.092C60.5488 163.041 60.5488 162.989 60.6002 162.938L84.8096 99.87C84.861 99.6644 85.118 99.5616 85.2722 99.6644C85.4778 99.7158 85.5806 99.9728 85.4778 100.127L61.2684 163.195C61.217 163.349 61.0628 163.452 60.9086 163.452Z" fill="#D1D3D4" />
                        <path d="M157.079 212.333C157.027 212.333 156.924 212.333 156.873 212.281C156.719 212.179 156.667 211.922 156.77 211.767L196.143 146.849C196.245 146.644 196.451 146.592 196.657 146.695C196.862 146.798 196.914 147.003 196.811 147.209C196.811 147.209 196.811 147.26 196.759 147.26L157.387 212.179C157.336 212.281 157.233 212.333 157.079 212.333Z" fill="#D1D3D4" />
                        <path d="M186.531 209.917H186.428C186.223 209.866 186.12 209.66 186.171 209.455C188.022 203.287 204.521 149.471 204.778 148.854C204.881 148.648 205.086 148.597 205.292 148.7C205.446 148.803 205.549 149.008 205.446 149.162C205.087 150.088 193.11 189.1 186.839 209.66C186.839 209.814 186.685 209.917 186.531 209.917Z" fill="#D1D3D4" />
                        <path d="M177.433 206.576C177.382 206.576 177.33 206.576 177.279 206.524C177.073 206.473 177.022 206.216 177.073 206.062L190.951 171.521C191.003 171.315 191.26 171.264 191.414 171.315C191.568 171.367 191.671 171.624 191.619 171.778L177.741 206.319C177.69 206.473 177.587 206.576 177.433 206.576Z" fill="#D1D3D4" />
                        <path d="M52.4282 151.63C52.2226 151.63 52.0684 151.475 52.0684 151.27C52.0684 151.218 52.0684 151.116 52.1198 151.064L69.3388 120.224C69.4416 120.019 69.6472 119.967 69.8528 120.07C70.0584 120.173 70.1098 120.378 70.007 120.584L52.788 151.424C52.6852 151.578 52.5824 151.63 52.4282 151.63Z" fill="#D1D3D4" />
                        <path d="M49.1908 174.862C49.1394 174.862 49.088 174.862 49.0366 174.811C48.831 174.708 48.7796 174.502 48.831 174.348L53.3542 163.554C53.457 163.349 53.6626 163.297 53.8682 163.349C54.0224 163.451 54.1252 163.657 54.0738 163.811L49.5506 174.605C49.4478 174.759 49.345 174.862 49.1908 174.862Z" fill="#D1D3D4" />
                        <path d="M164.944 212.693C164.738 212.693 164.584 212.539 164.584 212.334C164.584 212.282 164.584 212.231 164.635 212.179L172.037 198.764C172.14 198.61 172.345 198.507 172.551 198.61C172.757 198.713 172.808 198.918 172.705 199.124L165.304 212.539C165.201 212.642 165.098 212.693 164.944 212.693Z" fill="#D1D3D4" />
                      </svg>

                    </div>
                    <div className="md:w-3/4">
                      <div className="bg-white rounded-lg border p-6 shadow-sm">
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 5</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Data Preprocessing & Visualization
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 6</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Introduction to Machine Learning
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 7</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Advanced ML Models
                          </h3>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-500 mb-1">Week 8</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            No-Code AI & AI Tools
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={2}>
                  <div className="flex flex-col md:flex-row gap-8 mt-5">
                    <div className="md:w-1/4">
                      <h1 className="text-3xl md:text-4xl mb-6">
                        AI for Business & Career Readiness
                      </h1>
                      <svg className='hidden md:block' width="257" height="257" viewBox="0 0 257 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M208.992 143.817L197.633 139.089L212.847 102.492C214.338 98.9453 220.711 93.4455 222.922 94.3193C225.132 95.1931 225.697 103.674 224.258 107.221L208.992 143.817Z" fill="white" />
                        <path d="M208.992 144.177C208.941 144.177 208.889 144.177 208.838 144.177L197.479 139.449C197.376 139.397 197.324 139.346 197.273 139.243C197.222 139.14 197.222 139.037 197.273 138.986L212.487 102.389C213.927 98.9968 220.454 92.983 223.024 94.0624C225.594 95.1418 225.954 104.034 224.515 107.426L209.301 144.023C209.301 144.126 209.146 144.177 208.992 144.177ZM198.095 138.883L208.787 143.355L223.898 107.067C225.389 103.571 224.618 95.4502 222.767 94.6792C220.917 93.9082 214.646 99.0996 213.156 102.646L198.095 138.883Z" fill="#231F20" />
                        <path d="M199.265 138.5L198.52 140.306L206.834 143.74L207.579 141.935L199.265 138.5Z" fill="white" />
                        <path d="M206.885 145.463C206.833 145.463 206.782 145.463 206.731 145.463L198.404 141.916C198.198 141.865 198.147 141.659 198.198 141.453L198.969 139.654C199.021 139.552 199.072 139.5 199.175 139.449C199.278 139.397 199.38 139.397 199.432 139.449L207.81 142.944C208.016 142.995 208.067 143.201 208.016 143.407L207.245 145.206C207.193 145.308 207.142 145.36 207.039 145.411C206.988 145.463 206.936 145.463 206.885 145.463ZM199.021 141.453L206.731 144.64L207.193 143.509L199.483 140.323L199.021 141.453Z" fill="#231F20" />
                        <path d="M210.898 107.272L200.869 131.381L212.259 136.119L222.288 112.011L210.898 107.272Z" fill="#D1D3D4" />
                        <path d="M212.23 136.467C212.179 136.467 212.128 136.467 212.076 136.415L200.717 131.686C200.614 131.635 200.563 131.584 200.511 131.481C200.46 131.378 200.46 131.275 200.511 131.224L210.534 107.117C210.586 107.014 210.637 106.963 210.74 106.912C210.843 106.86 210.945 106.86 210.997 106.912L222.356 111.64C222.562 111.743 222.613 111.949 222.562 112.103L212.539 136.21C212.487 136.415 212.385 136.467 212.23 136.467ZM201.334 131.172L212.025 135.644L221.791 112.206L211.1 107.734L201.334 131.172Z" fill="#231F20" />
                        <path d="M192.955 137.752H198.198L200.459 132.304L194.24 134.668L192.955 137.752Z" fill="white" />
                        <path d="M192.955 138.111C192.853 138.111 192.698 138.06 192.647 137.957C192.595 137.854 192.544 137.752 192.596 137.649L193.881 134.565C193.932 134.462 193.983 134.411 194.086 134.359L200.306 131.995C200.46 131.943 200.614 131.995 200.717 132.098C200.82 132.2 200.82 132.355 200.768 132.509L198.507 137.957C198.455 138.111 198.301 138.163 198.198 138.163L192.955 138.111ZM194.497 134.976L193.469 137.392H197.941L199.792 132.971L194.497 134.976Z" fill="#231F20" />
                        <path d="M213.259 146.233L209.609 142.481L211.871 137.032L214.544 143.149L213.259 146.233Z" fill="white" />
                        <path d="M213.259 146.593C213.156 146.593 213.053 146.541 213.002 146.49L209.301 142.738C209.198 142.635 209.147 142.481 209.249 142.327L211.511 136.878C211.562 136.724 211.717 136.673 211.819 136.673C211.974 136.673 212.076 136.775 212.128 136.878L214.852 142.995C214.903 143.098 214.903 143.2 214.852 143.252L213.567 146.336C213.516 146.439 213.413 146.541 213.31 146.541L213.259 146.593ZM210.02 142.378L213.156 145.565L214.184 143.149L211.871 137.958L210.02 142.378Z" fill="#231F20" />
                        <path d="M96.9923 62.2969L165.766 64.3529L215.726 111.692L206.629 133.589L87.8945 84.1933L96.9923 62.2969Z" fill="white" />
                        <path d="M206.628 133.949C206.576 133.949 206.525 133.949 206.474 133.897L87.791 84.5017C87.6882 84.4503 87.6368 84.3989 87.5854 84.2961C87.534 84.1933 87.534 84.0905 87.5854 84.0391L96.6832 62.1941C96.7346 62.0399 96.8888 61.9885 97.043 61.9885L165.816 64.0445C165.919 64.0445 165.97 64.0959 166.073 64.1473L215.983 111.487C216.085 111.59 216.137 111.744 216.085 111.898L206.988 133.794C206.936 133.897 206.885 133.949 206.782 134C206.731 133.949 206.679 133.949 206.628 133.949ZM88.4078 83.9877L206.422 133.126L215.263 111.795L165.611 64.7127L97.1972 62.6567L88.4078 83.9877Z" fill="#231F20" />
                        <path d="M153.019 56.54L180.312 67.8994C185.041 69.8526 187.251 75.301 185.298 80.0298L171.78 112.463C169.827 117.192 164.378 119.402 159.649 117.449L132.356 106.09C127.627 104.136 125.417 98.688 127.37 93.9592L140.888 61.5258C142.893 56.8484 148.341 54.5868 153.019 56.54Z" fill="#D1D3D4" />
                        <path d="M161.243 117.398C159.495 117.398 157.748 117.038 156.103 116.37L135.697 107.837C128.912 105.01 125.674 97.1974 128.501 90.4126L139.141 64.8154C141.968 58.0306 149.729 54.7924 156.514 57.6194C156.514 57.6194 156.514 57.6194 156.566 57.6194L177.023 66.1004C183.808 68.9274 187.046 76.7402 184.219 83.525L173.579 109.122C171.472 114.108 166.64 117.346 161.243 117.398ZM151.477 57.3624C146.388 57.3624 141.814 60.4464 139.861 65.1238L129.221 90.721C126.548 97.146 129.581 104.548 136.006 107.22L156.463 115.701C162.888 118.374 170.289 115.342 172.962 108.917L183.602 83.3194C186.275 76.8944 183.242 69.4928 176.766 66.82L156.309 58.339C154.767 57.6708 153.122 57.3624 151.477 57.3624Z" fill="#231F20" />
                        <path d="M89.8477 94.2676L78.4883 89.5388L93.7027 52.942C95.1933 49.3954 101.567 43.8956 103.777 44.8208C105.987 45.746 106.553 54.1756 105.113 57.7222L89.8477 94.2676Z" fill="white" />
                        <path d="M89.8476 94.6274C89.7962 94.6274 89.7448 94.6274 89.6934 94.576L78.334 89.8472C78.2312 89.7958 78.1798 89.7444 78.1284 89.6416C78.077 89.5388 78.077 89.436 78.1284 89.3846L93.3428 52.7878C94.0624 51.0916 95.9642 48.7786 98.1744 46.9282C99.3566 45.9516 102.235 43.7928 103.828 44.461C105.422 45.1292 105.936 48.7272 106.09 50.2178C106.347 53.1476 106.039 56.0774 105.37 57.825L90.156 94.4218C90.1046 94.5246 90.0018 94.6274 89.8476 94.6274ZM78.9508 89.3332L89.642 93.805L104.754 57.5166C105.422 55.9232 105.679 53.0448 105.473 50.2692C105.268 47.4936 104.497 45.489 103.674 45.1292C102.852 44.7694 100.899 45.6946 98.7398 47.4936C96.581 49.2926 94.7306 51.5028 94.0624 53.0962L78.9508 89.3332Z" fill="#231F20" />
                        <path d="M80.1272 90.2152L79.377 92.0186L87.7295 95.4933L88.4797 93.6899L80.1272 90.2152Z" fill="white" />
                        <path d="M87.7409 95.8609C87.6895 95.8609 87.6381 95.8609 87.5867 95.8095L79.2085 92.3143C79.0029 92.2629 78.9515 92.0059 79.0029 91.8517L79.7739 90.0527C79.8253 89.9499 79.8767 89.8985 79.9795 89.8471C80.0823 89.7957 80.1851 89.7957 80.2365 89.8471L88.6147 93.3423C88.7175 93.3937 88.7689 93.4451 88.8203 93.5479C88.8717 93.6507 88.8717 93.7535 88.8203 93.8049L88.0493 95.6039C87.9979 95.7067 87.9465 95.7581 87.8437 95.8095C87.8437 95.8609 87.7923 95.8609 87.7409 95.8609ZM79.8767 91.8517L87.5867 95.0385L88.0493 93.9077L80.3393 90.7209L79.8767 91.8517Z" fill="#231F20" />
                        <path d="M91.7305 57.6874L81.7012 81.7959L93.091 86.5342L103.12 62.4257L91.7305 57.6874Z" fill="#D1D3D4" />
                        <path d="M93.0859 86.9178C93.0345 86.9178 92.9831 86.9178 92.9317 86.8664L81.5723 82.1376C81.4695 82.0862 81.4181 82.0348 81.3667 81.932C81.3153 81.8292 81.3153 81.7264 81.3667 81.675L91.3897 57.5684C91.4411 57.4656 91.4925 57.4142 91.5953 57.3628C91.6981 57.3114 91.8009 57.3114 91.8523 57.3628L103.212 62.0916C103.417 62.143 103.469 62.4 103.417 62.5542L93.3943 86.6608C93.3429 86.815 93.2401 86.9178 93.0859 86.9178ZM82.1891 81.6236L92.8803 86.0954L102.646 62.657L91.9551 58.1852L82.1891 81.6236Z" fill="#231F20" />
                        <path d="M73.8105 88.2029L79.0533 88.1515L81.3149 82.7031L75.0955 85.1189L73.8105 88.2029Z" fill="white" />
                        <path d="M73.8108 88.5104C73.708 88.5104 73.5538 88.459 73.5024 88.3562C73.451 88.2534 73.3996 88.1506 73.451 87.9964L74.736 84.9124C74.7874 84.8096 74.8388 84.7582 74.9416 84.7068L81.2124 82.3424C81.3666 82.291 81.5208 82.3424 81.6236 82.4452C81.7264 82.548 81.7778 82.7022 81.675 82.8564L79.4134 88.3048C79.362 88.459 79.2078 88.5104 79.105 88.5104H73.8108ZM75.3528 85.375L74.3248 87.7908H78.7966L80.647 83.3704L75.3528 85.375Z" fill="#231F20" />
                        <path d="M94.1129 96.632L90.4121 92.8798L92.7251 87.4314L95.3979 93.548L94.1129 96.632Z" fill="white" />
                        <path d="M94.1141 96.9915C94.0113 96.9915 93.9085 96.9401 93.8571 96.8887L90.1563 93.1365C90.0535 93.0337 90.0021 92.8795 90.1049 92.7253L92.3665 87.2769C92.4179 87.1227 92.5721 87.0713 92.6749 87.0713C92.8291 87.0713 92.9319 87.1741 92.9833 87.2769L95.6561 93.3935C95.7075 93.4963 95.7075 93.5991 95.6561 93.7019L94.3711 96.7859C94.3197 96.8887 94.2169 96.9915 94.1141 96.9915ZM90.8759 92.7767L94.0113 95.9635L95.0393 93.5477L92.7263 88.3563L90.8759 92.7767Z" fill="#231F20" />
                        <path d="M134.925 67.8994L104.547 66.5116C104.342 66.5116 104.188 66.3574 104.188 66.1518C104.188 65.9462 104.342 65.792 104.547 65.792L134.925 67.1798C135.13 67.1798 135.285 67.334 135.285 67.5396C135.336 67.7452 135.182 67.8994 134.925 67.8994Z" fill="#D1D3D4" />
                        <path d="M211.666 112.669C211.563 112.669 211.46 112.618 211.409 112.566L185.606 88.614C185.452 88.4598 185.452 88.2542 185.606 88.1C185.76 87.9458 185.966 87.9458 186.12 88.1L211.923 112.104C212.077 112.258 212.077 112.464 211.923 112.618C211.871 112.618 211.768 112.669 211.666 112.669Z" fill="#D1D3D4" />
                        <path d="M134.257 179.746L127.523 185.348C127.523 185.348 141.761 210.637 143.817 206.885C144.794 205.086 142.532 192.493 142.532 192.493" fill="white" />
                        <path d="M143.201 207.604C139.706 207.604 128.501 187.764 127.216 185.502C127.113 185.348 127.164 185.142 127.318 185.04L134 179.437C134.155 179.334 134.412 179.386 134.514 179.54C134.617 179.694 134.566 179.848 134.463 180.002L127.987 185.399C132.715 193.829 140.939 206.833 143.201 206.833C143.252 206.833 143.407 206.833 143.458 206.628C144.126 205.394 143.047 197.478 142.122 192.493C142.07 192.287 142.173 192.081 142.379 192.03C142.584 191.979 142.79 192.081 142.841 192.287V192.338C143.098 193.623 145.154 205.086 144.126 206.936C143.972 207.347 143.612 207.604 143.201 207.604Z" fill="#231F20" />
                        <path d="M180.672 83.2166C180.672 83.2166 220.455 115.907 203.904 118.323C190.078 120.327 177.536 112.977 177.536 112.977L181.443 104.291C181.443 104.291 194.19 110.202 193.727 107.58C193.265 104.959 175.994 94.6274 175.994 94.6274L180.672 83.2166Z" fill="#FFC87A" />
                        <path d="M145.206 70.0577C145.206 70.0577 105.165 65.6373 104.086 71.7539C103.006 77.8705 120.277 91.3887 120.739 90.5149C121.202 89.6411 130.351 84.2955 130.351 84.2955L122.333 77.9219L141.505 82.2395L145.206 70.0577Z" fill="#FFC87A" />
                        <path d="M179.49 61.2687C180.621 59.1099 179.85 56.3857 178.514 54.3297C175.121 49.0869 169.056 46.2085 162.837 46.9281C160.061 47.2879 157.183 48.5215 155.743 50.9373C157.285 50.6289 158.827 50.5775 160.369 50.7831C156.926 52.2737 154.304 55.1521 153.122 58.6987C152.968 59.0585 152.968 59.4697 153.071 59.8295C153.328 60.4463 154.253 60.4463 154.87 60.2921C155.486 60.1379 156.257 59.8295 156.874 60.1379C154.921 60.9089 153.328 62.4509 152.505 64.4041C152.094 65.2265 151.94 66.2031 152.145 67.1283C152.351 67.7965 152.711 68.3618 153.225 68.8244C154.407 69.9552 156 70.5207 157.594 71.0347C160.421 71.9599 163.351 72.7309 166.28 72.3711C169.827 71.9085 172.705 69.8011 175.275 67.4881C176.458 66.4087 177.588 66.4087 178.873 65.5863C179.644 65.0723 180.107 64.3013 180.21 63.3761C180.056 62.6565 179.799 61.9369 179.49 61.2687Z" fill="white" />
                        <path d="M164.789 72.7824C162.271 72.7824 159.855 72.0628 157.542 71.3432C155.897 70.7778 154.252 70.2124 153.07 69.0816C152.505 68.5676 152.094 67.9508 151.888 67.2312C151.682 66.2032 151.785 65.1752 152.248 64.25C152.916 62.708 153.995 61.423 155.435 60.5492L155.332 60.6006L155.075 60.652C154.304 60.8576 153.224 60.8576 152.813 60.0352C152.659 59.5726 152.659 59.11 152.865 58.6474C153.944 55.4606 156.154 52.7364 159.084 51.0916C158.005 51.0402 156.925 51.143 155.897 51.3486C155.743 51.4 155.64 51.2972 155.537 51.1944C155.486 51.0916 155.486 50.9374 155.537 50.7832C156.874 48.573 159.547 47.031 162.888 46.5684C169.21 45.7974 175.429 48.7786 178.924 54.1242C179.695 55.3578 181.34 58.4932 179.952 61.2688C180.261 61.937 180.466 62.6566 180.621 63.3762C180.518 64.4042 179.952 65.278 179.13 65.8434C178.616 66.1518 178.102 66.4088 177.537 66.6144C176.817 66.8714 176.149 67.2312 175.583 67.6938C173.322 69.7498 170.186 72.1656 166.383 72.6282C165.817 72.731 165.303 72.7824 164.789 72.7824ZM156.308 59.624C156.565 59.624 156.874 59.6754 157.079 59.8296C157.234 59.9324 157.336 60.138 157.234 60.2922C157.182 60.3436 157.131 60.4464 157.028 60.4464C155.178 61.2174 153.636 62.6566 152.865 64.507C152.453 65.278 152.351 66.1518 152.556 67.0256C152.762 67.591 153.07 68.1564 153.533 68.5162C154.612 69.5956 156.154 70.1096 157.748 70.6236C160.472 71.4974 163.35 72.3198 166.229 71.96C169.827 71.4974 172.705 69.2872 175.018 67.1798C175.635 66.6144 176.406 66.2032 177.177 65.9462C177.691 65.7406 178.153 65.535 178.616 65.278C179.284 64.8668 179.695 64.1472 179.798 63.3762C179.644 62.708 179.387 62.0912 179.13 61.4744C179.079 61.3716 179.079 61.2174 179.13 61.1146C180.466 58.6474 178.924 55.6662 178.205 54.5354C174.864 49.4468 168.953 46.6198 162.888 47.288C160.112 47.6478 157.85 48.7786 156.514 50.4748C157.799 50.3206 159.084 50.2692 160.369 50.4234C160.523 50.4234 160.677 50.5776 160.677 50.7318C160.677 50.886 160.626 51.0402 160.472 51.0916C157.131 52.5308 154.561 55.3064 153.43 58.7502C153.327 59.0072 153.276 59.3156 153.379 59.624C153.584 60.0352 154.252 60.0352 154.766 59.881L155.023 59.8296C155.486 59.7268 155.897 59.624 156.308 59.624Z" fill="#231F20" />
                        <path d="M155.742 124.182C155.742 124.182 168.746 152.966 166.536 158.62C164.326 164.274 142.481 192.493 142.481 192.493L130.865 182.675C130.865 182.675 151.27 155.742 150.448 153.892C149.626 152.041 139.5 132.561 139.5 132.561L84.5532 192.441L79.002 178.049L123.566 114.108L155.742 124.182Z" fill="#231F20" />
                        <path d="M142.481 192.852C142.378 192.852 142.327 192.801 142.224 192.75L130.607 182.932C130.453 182.829 130.402 182.572 130.556 182.418C138.266 172.292 150.345 155.587 150.088 153.943C149.317 152.298 140.939 136.004 139.397 133.074L84.8613 192.647C84.7585 192.75 84.6557 192.801 84.5529 192.75C84.4501 192.75 84.3473 192.647 84.2959 192.544L78.7447 178.152C78.6933 178.049 78.6933 177.895 78.7961 177.844L123.36 113.902C123.463 113.799 123.617 113.696 123.771 113.748L155.948 123.822C156.05 123.874 156.102 123.925 156.153 124.028C156.667 125.21 169.209 153.017 166.947 158.723C164.737 164.377 143.714 191.567 142.84 192.698C142.686 192.75 142.635 192.801 142.481 192.852ZM131.378 182.572L142.429 191.927C144.794 188.895 164.172 163.657 166.228 158.414C168.284 153.172 156.513 126.649 155.485 124.439L123.72 114.519L79.4129 178.049L84.6557 191.67L139.242 132.2C139.345 132.098 139.448 132.098 139.551 132.098C139.654 132.098 139.757 132.2 139.808 132.303C140.219 133.074 149.934 151.835 150.756 153.686C151.578 155.536 136.416 175.942 131.378 182.572Z" fill="#231F20" />
                        <path d="M155.743 124.182L123.566 114.108L153.738 74.6841C153.738 74.6841 168.747 81.9315 170.597 84.8613C172.448 87.7911 155.743 124.182 155.743 124.182Z" fill="white" />
                        <path d="M155.743 124.542C155.692 124.542 155.692 124.542 155.64 124.542L123.464 114.468C123.361 114.416 123.258 114.365 123.207 114.262C123.155 114.159 123.207 114.005 123.258 113.954L153.43 74.5301C153.533 74.3759 153.738 74.3245 153.893 74.4273C154.509 74.7357 169.056 81.7775 170.906 84.7073C172.756 87.6371 157.799 120.636 156.103 124.388C156 124.439 155.897 124.542 155.743 124.542ZM124.183 113.902L155.589 123.72C162.014 109.688 171.574 87.0203 170.341 85.0157C168.696 82.4457 155.897 76.0721 153.893 75.0955L124.183 113.902Z" fill="#231F20" />
                        <path d="M161.859 74.3244C161.293 74.273 158.312 80.955 158.055 81.5204C155.177 86.866 152.504 92.4686 149.471 97.66C143.509 107.991 130.505 114.211 120.43 119.556C119.094 120.276 117.603 120.996 116.113 120.739C115.033 120.43 114.108 119.865 113.337 119.094C109.893 116.01 107.118 112.258 105.216 108.043C104.907 107.477 104.753 106.912 104.805 106.295C104.959 105.267 105.73 104.445 106.758 104.188C112.103 103.263 119.968 102.646 124.285 99.8702C131.481 95.2956 139.757 81.8288 145.256 70.0068C151.887 71.6516 157.695 73.3478 161.859 74.3244Z" fill="#FFC87A" />
                        <path d="M180.671 83.2165C180.825 83.3193 174.195 99.2019 173.886 99.9729C171.419 105.781 162.732 116.421 157.541 119.762C160.882 113.8 161.859 104.393 162.116 97.6599C162.218 94.3703 164.943 88.6649 166.176 85.6323C166.279 85.3239 167.358 75.9177 167.204 75.8149C167.153 75.8149 176.508 79.8755 180.671 83.2165Z" fill="#FFC87A" />
                        <path d="M169.262 76.6369L167.412 83.0105C167.412 83.0105 165.716 85.6833 161.758 83.4217C157.8 81.1601 158.006 78.0761 158.006 78.0761L161.912 66.3569C161.912 66.3569 165.099 65.2775 166.127 58.1843C166.127 58.1843 172.089 62.0907 178.669 63.0673C178.669 63.0673 176.561 70.8287 175.122 73.9641C173.683 77.0995 169.262 76.6369 169.262 76.6369Z" fill="white" />
                        <path d="M164.687 84.6557C163.608 84.6043 162.528 84.2959 161.603 83.7305C157.491 81.4175 157.645 78.1793 157.645 78.0765C157.645 78.0251 157.645 78.0251 157.645 77.9737L161.552 66.2545C161.603 66.1517 161.654 66.0489 161.757 66.0489C161.757 66.0489 164.738 64.9181 165.715 58.1847C165.715 58.0819 165.818 57.9791 165.921 57.9277C166.023 57.8763 166.178 57.8763 166.28 57.9277C166.332 57.9791 172.294 61.7827 178.668 62.7593C178.771 62.7593 178.873 62.8107 178.925 62.9135C178.976 63.0163 178.976 63.1191 178.976 63.2219C178.873 63.5303 176.869 71.0347 175.378 74.1701C174.042 77.0485 170.547 77.0999 169.467 77.0485L167.668 83.1137C167.668 83.1651 167.668 83.1651 167.617 83.2165C167 84.1417 165.869 84.7071 164.687 84.6557ZM158.365 78.1279C158.365 78.4877 158.416 81.1091 161.963 83.0623C165.355 84.9641 166.846 83.1137 167.103 82.8053L168.953 76.5345C169.005 76.3803 169.159 76.2775 169.364 76.2775C169.416 76.2775 173.528 76.6887 174.813 73.8103C176.046 71.1375 177.794 64.9695 178.257 63.3247C172.911 62.3995 167.977 59.6239 166.435 58.7501C165.458 64.6611 162.939 66.2545 162.271 66.5629L158.365 78.1279Z" fill="#231F20" />
                        <path d="M164.019 66.6144C164.019 65.9976 163.865 65.3808 163.505 64.8668C163.145 64.4042 162.734 63.993 162.22 63.6846C161.963 63.479 161.706 63.3248 161.397 63.2734C161.192 63.2734 160.935 63.2734 160.729 63.3248C160.215 63.4276 159.753 63.6846 159.393 64.0958C159.187 64.4556 159.033 64.8668 158.982 65.278C158.879 65.7406 158.879 66.2032 158.93 66.6658C159.187 68.5676 160.935 69.9554 162.837 69.6984H162.888" fill="white" />
                        <path d="M162.424 70.1093C160.471 70.1093 158.826 68.6701 158.569 66.7169C158.518 66.2029 158.518 65.7403 158.62 65.2263C158.672 64.7637 158.826 64.2497 159.083 63.8385C159.494 63.3759 160.008 63.0161 160.625 62.9133C160.882 62.8619 161.139 62.8105 161.447 62.8619C161.807 62.9647 162.167 63.1189 162.475 63.3245C162.989 63.6843 163.452 64.0955 163.812 64.5581C164.223 65.1235 164.429 65.8431 164.377 66.5113C164.377 66.7169 164.223 66.8711 164.017 66.8711C163.812 66.8711 163.658 66.7169 163.658 66.5113C163.658 65.9459 163.503 65.4319 163.195 64.9693C162.887 64.5581 162.475 64.1983 162.013 63.8899C161.807 63.7357 161.55 63.5815 161.293 63.5301C161.139 63.5301 160.933 63.5301 160.779 63.5815C160.317 63.6329 159.957 63.8899 159.648 64.1983C159.443 64.5067 159.34 64.8665 159.34 65.2263C159.289 65.6375 159.237 66.1001 159.289 66.5113C159.494 68.2075 161.088 69.4411 162.784 69.2355H162.835C163.041 69.1841 163.195 69.3383 163.246 69.5439C163.298 69.7495 163.144 69.9037 162.938 69.9551C162.835 70.1093 162.63 70.1093 162.424 70.1093Z" fill="#231F20" />
                        <path d="M171.984 66.0486C171.984 66.0486 173.423 69.955 172.755 70.4176C172.087 70.8802 170.699 70.1092 170.699 70.1092" fill="white" />
                        <path d="M172.139 70.9321C171.574 70.8807 170.957 70.7265 170.443 70.4695C170.237 70.3667 170.186 70.1611 170.237 70.0069C170.34 69.8013 170.546 69.7499 170.7 69.8013C170.7 69.8013 170.751 69.8013 170.751 69.8527C171.162 70.0583 172.088 70.4181 172.447 70.1611C172.653 69.9041 172.242 68.0537 171.574 66.2033C171.522 65.9977 171.625 65.7921 171.779 65.7407C171.985 65.6893 172.19 65.7921 172.242 65.9463C172.961 67.8481 173.578 70.2125 172.859 70.7265C172.704 70.8807 172.396 70.9321 172.139 70.9321Z" fill="#231F20" />
                        <path d="M169.261 76.6375C169.261 76.6375 165.972 75.6095 164.738 74.2217C164.738 74.2217 164.79 78.3851 168.079 80.4411L169.261 76.6375Z" fill="#231F20" />
                        <path d="M168.08 80.8007C168.028 80.8007 167.926 80.8007 167.874 80.7493C164.482 78.5905 164.379 74.4271 164.379 74.2215C164.379 74.0673 164.482 73.9131 164.585 73.8617C164.739 73.8103 164.893 73.8617 164.996 73.9645C166.127 75.2495 169.313 76.2775 169.365 76.2775C169.57 76.3289 169.673 76.5345 169.622 76.7401L168.44 80.5437C168.388 80.6465 168.337 80.7493 168.234 80.7493C168.183 80.8007 168.131 80.8007 168.08 80.8007ZM165.201 75.0953C165.458 76.9457 166.435 78.6419 167.874 79.8241L168.799 76.8429C167.566 76.4317 166.332 75.8663 165.201 75.0953Z" fill="#231F20" />
                        <path d="M167.926 63.4279C167.926 63.4279 169.622 62.1943 170.444 64.4045L167.926 63.4279Z" fill="white" />
                        <path d="M170.442 64.7641C170.288 64.7641 170.134 64.6613 170.134 64.5071C170.031 64.0445 169.723 63.6847 169.312 63.4791C168.9 63.4277 168.541 63.4791 168.181 63.6847C168.027 63.7875 167.77 63.7361 167.667 63.5819C167.564 63.4277 167.615 63.2221 167.77 63.1193C168.284 62.7595 168.9 62.6567 169.517 62.7595C170.185 63.0165 170.648 63.5819 170.802 64.2501C170.854 64.4557 170.751 64.6613 170.597 64.7127C170.494 64.7641 170.494 64.7641 170.442 64.7641Z" fill="#231F20" />
                        <path d="M173.578 66.1518C173.578 66.1518 175.12 64.3014 176.097 66.5116L173.578 66.1518Z" fill="white" />
                        <path d="M176.097 66.8714C175.942 66.8714 175.84 66.7686 175.788 66.6658C175.634 66.306 175.377 65.8434 175.017 65.792C174.657 65.7406 174.092 66.2032 173.938 66.4088C173.835 66.563 173.578 66.563 173.424 66.4602C173.27 66.306 173.27 66.1004 173.372 65.9462C173.475 65.8434 174.195 64.9696 175.12 65.0724C175.685 65.1752 176.148 65.5864 176.456 66.3574C176.508 66.563 176.456 66.7686 176.251 66.82C176.199 66.82 176.148 66.8714 176.097 66.8714Z" fill="#231F20" />
                        <path d="M174.092 71.9603C174.092 71.9603 166.896 76.1751 166.896 68.6707L174.092 71.9603Z" fill="white" />
                        <path d="M170.187 73.5017C169.57 73.5017 168.953 73.3475 168.388 73.0391C167.154 72.3195 166.537 70.8803 166.537 68.6701C166.537 68.4645 166.691 68.3103 166.897 68.3103C167.103 68.3103 167.257 68.4645 167.257 68.6701C167.257 70.6233 167.771 71.8569 168.747 72.4223C170.649 73.5017 173.887 71.6513 173.939 71.6513C174.093 71.5485 174.35 71.6513 174.401 71.8055C174.453 71.9597 174.453 72.1653 174.299 72.2681C173.014 72.9877 171.626 73.3989 170.187 73.5017Z" fill="#231F20" />
                        <path d="M162.373 84.9646L158.981 85.9412L160.112 88.1514C160.112 88.1514 151.476 99.2024 146.079 99.665C142.944 99.8706 139.86 99.151 137.136 97.5576L131.379 100.23C131.379 100.23 136.622 104.702 136.93 105.062C137.239 105.422 145.925 107.94 151.836 101.413C155.331 97.609 158.467 93.4456 161.242 89.0766L163.247 88.2028L162.373 84.9646Z" fill="#231F20" />
                        <path d="M147.93 97.0429C147.776 97.0429 147.622 96.8887 147.57 96.7345L145.977 86.0433C145.925 85.8891 146.08 85.6835 146.234 85.6321L151.631 83.8845L147.879 80.4407C147.776 80.3379 147.724 80.2351 147.776 80.0809C147.827 79.9781 147.879 79.8753 148.033 79.8239L156.154 77.0483C156.36 76.9969 156.565 77.0997 156.617 77.2539C156.668 77.4595 156.565 77.6651 156.411 77.7165L148.907 80.3379L152.659 83.7817C152.762 83.8845 152.813 83.9873 152.762 84.1415C152.71 84.2443 152.659 84.3471 152.505 84.3985L146.851 86.2489L148.393 96.6317C148.444 96.8373 148.29 96.9915 148.084 97.0429H147.93Z" fill="#231F20" />
                        <path d="M128.346 108.608H128.295C128.243 108.608 120.842 107.118 116.833 106.193C116.627 106.141 116.524 105.936 116.576 105.781C116.627 105.627 116.833 105.473 116.987 105.524C120.996 106.45 128.346 107.889 128.449 107.94C128.655 107.992 128.757 108.197 128.706 108.351C128.655 108.506 128.5 108.608 128.346 108.608Z" fill="#231F20" />
                        <path d="M165.508 97.8655C165.303 97.8655 165.148 97.7113 165.148 97.5057C165.148 97.4029 165.2 97.3001 165.251 97.2487L173.372 89.8471L169.774 86.6603C169.672 86.6089 169.62 86.4547 169.672 86.3519C169.672 86.2491 169.723 86.1463 169.826 86.0949L174.914 83.1651L171.625 80.4923C171.471 80.3895 171.471 80.1325 171.573 79.9783C171.676 79.8241 171.933 79.8241 172.087 79.9269L175.788 82.9595C175.891 83.0109 175.942 83.1651 175.942 83.2679C175.942 83.3707 175.84 83.4735 175.737 83.5763L170.648 86.5061L174.195 89.6415C174.246 89.6929 174.298 89.7957 174.298 89.8985C174.298 90.0013 174.246 90.1041 174.195 90.1555L165.817 97.8141C165.714 97.8141 165.611 97.8655 165.508 97.8655Z" fill="#231F20" />
                        <path d="M146.235 117.963C146.029 117.963 145.875 117.809 145.875 117.603C145.875 117.552 145.875 117.5 145.926 117.449C145.978 117.295 153.893 103.057 157.748 95.3467C157.851 95.1925 158.057 95.0897 158.211 95.1925C158.365 95.2953 158.468 95.5009 158.365 95.6551C154.51 103.365 146.595 117.603 146.543 117.757C146.492 117.911 146.338 117.963 146.235 117.963Z" fill="#D1D3D4" />
                        <path d="M79.0533 178.05L72.6797 185.965C72.6797 185.965 77.1515 206.885 79.9785 204.521C82.8055 202.156 84.6045 192.442 84.6045 192.442L79.0533 178.05Z" fill="white" />
                        <path d="M79.4653 205.035C79.3625 205.035 79.2083 205.035 79.1055 204.983C76.1757 203.955 72.6805 187.867 72.2693 186.017C72.2179 185.914 72.2693 185.811 72.3207 185.708L78.6943 177.793C78.7971 177.69 78.8999 177.638 79.0027 177.69C79.1569 177.69 79.2597 177.793 79.3111 177.895L84.8623 192.287C84.8623 192.339 84.8623 192.442 84.8623 192.493C84.8109 192.904 82.9605 202.362 80.0821 204.778C79.9279 204.932 79.7223 205.035 79.4653 205.035ZM73.0403 186.017C74.4795 192.801 77.4607 203.647 79.3625 204.264C79.4653 204.315 79.6195 204.264 79.7223 204.212C82.2409 202.105 84.0399 193.47 84.2455 192.442L78.9513 178.718L73.0403 186.017Z" fill="#231F20" />
                        <path d="M149.266 68.4648C149.266 68.4648 143.817 86.9688 138.78 91.8518C133.743 96.7348 122.949 102.749 124.285 99.8702C125.622 96.9918 131.893 94.7302 136.313 86.609C140.733 78.4878 143.612 67.1798 143.612 67.1798C143.612 67.1798 143.201 65.1752 146.182 65.8434C149.163 66.5116 149.266 68.4648 149.266 68.4648Z" fill="#231F20" />
                        <path d="M166.846 110.613C170.392 107.169 173.425 103.211 175.892 98.9451C179.028 93.4453 181.443 85.7867 182.317 82.8569C182.523 82.1373 182.214 81.4177 181.546 81.0579L180.569 80.5439C179.798 80.1841 178.873 80.4925 178.513 81.2635C178.462 81.3663 178.462 81.4177 178.411 81.5205C177.023 86.5063 172.757 100.795 166.846 110.613Z" fill="#231F20" />
                        <path d="M127.576 85.0669C128.09 85.6323 132.819 88.6649 132.819 88.6649C132.819 88.6649 134.926 85.7351 136.982 85.2725L135.646 87.6369L142.276 87.7397C142.276 87.7397 142.276 94.0105 136.468 95.2441C130.66 96.4777 120.791 90.4639 120.791 90.4639" fill="white" />
                        <path d="M134.721 95.8092C128.861 95.8092 120.946 91.029 120.586 90.8234C120.432 90.7206 120.38 90.4636 120.483 90.3094C120.586 90.1552 120.792 90.1038 120.946 90.2066C121.049 90.258 130.815 96.169 136.417 94.9354C141.197 93.9074 141.814 89.4356 141.917 88.0992L135.646 87.9964C135.543 87.9964 135.389 87.945 135.338 87.7908C135.286 87.688 135.286 87.5338 135.338 87.431L136.16 85.9404C134.567 86.8142 133.076 88.8188 133.076 88.8188C132.973 88.973 132.768 89.0244 132.562 88.9216C132.048 88.6132 127.731 85.8376 127.217 85.2722C127.062 85.118 127.114 84.9124 127.217 84.7582C127.371 84.604 127.576 84.6554 127.731 84.7582C128.039 85.118 130.815 86.917 132.614 88.0992C133.179 87.3282 134.978 85.2722 136.777 84.861C136.983 84.8096 137.137 84.9638 137.188 85.118C137.188 85.2208 137.188 85.2722 137.137 85.375L136.109 87.174L142.123 87.2768C142.328 87.2768 142.482 87.431 142.482 87.6366C142.482 87.688 142.431 94.2158 136.366 95.5008C135.955 95.7578 135.338 95.8092 134.721 95.8092Z" fill="#231F20" />
                        <path d="M181.238 105.421L176.921 102.8L175.893 98.9451L173.888 101.207C173.888 101.207 171.061 98.8423 169.211 99.7161C167.72 100.384 167.103 104.136 168.491 105.987C169.879 107.837 178.206 112.258 178.206 112.258" fill="white" />
                        <path d="M178.205 112.617C178.154 112.617 178.102 112.617 178.051 112.566C177.691 112.36 169.621 108.094 168.182 106.192C167.206 104.907 167.206 102.954 167.514 101.72C167.771 100.589 168.336 99.7156 169.056 99.4072C170.752 98.6362 173.065 100.178 173.888 100.744L175.687 98.739C175.841 98.5848 176.046 98.5848 176.201 98.6876C176.252 98.739 176.303 98.7904 176.303 98.8418L177.28 102.543L181.443 105.113C181.598 105.215 181.7 105.421 181.598 105.627C181.495 105.781 181.289 105.884 181.135 105.781C181.135 105.781 181.135 105.781 181.084 105.781L176.766 103.159C176.663 103.108 176.612 103.057 176.612 102.954L175.789 99.7156L174.247 101.463C174.145 101.617 173.888 101.617 173.733 101.515C172.962 100.898 170.752 99.4586 169.416 100.075C168.953 100.281 168.542 101.001 168.285 101.926C167.977 103.108 168.028 104.804 168.799 105.832C170.135 107.58 178.308 111.949 178.411 112C178.616 112.103 178.668 112.309 178.565 112.514C178.462 112.566 178.308 112.617 178.205 112.617Z" fill="#231F20" />
                        <path d="M31.9713 167.718C31.9199 167.718 31.8171 167.718 31.7657 167.666C31.6115 167.564 31.5601 167.307 31.6629 167.152L76.4323 96.3233C76.5351 96.1691 76.7921 96.1177 76.9463 96.2205C77.1005 96.3233 77.1519 96.5803 77.0491 96.7345L32.2797 167.512C32.1769 167.615 32.0741 167.718 31.9713 167.718Z" fill="#D1D3D4" />
                        <path d="M60.9086 163.452C60.703 163.452 60.5488 163.298 60.5488 163.092C60.5488 163.041 60.5488 162.989 60.6002 162.938L84.8096 99.87C84.861 99.6644 85.118 99.5616 85.2722 99.6644C85.4778 99.7158 85.5806 99.9728 85.4778 100.127L61.2684 163.195C61.217 163.349 61.0628 163.452 60.9086 163.452Z" fill="#D1D3D4" />
                        <path d="M157.079 212.333C157.027 212.333 156.924 212.333 156.873 212.281C156.719 212.179 156.667 211.922 156.77 211.767L196.143 146.849C196.245 146.644 196.451 146.592 196.657 146.695C196.862 146.798 196.914 147.003 196.811 147.209C196.811 147.209 196.811 147.26 196.759 147.26L157.387 212.179C157.336 212.281 157.233 212.333 157.079 212.333Z" fill="#D1D3D4" />
                        <path d="M186.531 209.917H186.428C186.223 209.866 186.12 209.66 186.171 209.455C188.022 203.287 204.521 149.471 204.778 148.854C204.881 148.648 205.086 148.597 205.292 148.7C205.446 148.803 205.549 149.008 205.446 149.162C205.087 150.088 193.11 189.1 186.839 209.66C186.839 209.814 186.685 209.917 186.531 209.917Z" fill="#D1D3D4" />
                        <path d="M177.433 206.576C177.382 206.576 177.33 206.576 177.279 206.524C177.073 206.473 177.022 206.216 177.073 206.062L190.951 171.521C191.003 171.315 191.26 171.264 191.414 171.315C191.568 171.367 191.671 171.624 191.619 171.778L177.741 206.319C177.69 206.473 177.587 206.576 177.433 206.576Z" fill="#D1D3D4" />
                        <path d="M52.4282 151.63C52.2226 151.63 52.0684 151.475 52.0684 151.27C52.0684 151.218 52.0684 151.116 52.1198 151.064L69.3388 120.224C69.4416 120.019 69.6472 119.967 69.8528 120.07C70.0584 120.173 70.1098 120.378 70.007 120.584L52.788 151.424C52.6852 151.578 52.5824 151.63 52.4282 151.63Z" fill="#D1D3D4" />
                        <path d="M49.1908 174.862C49.1394 174.862 49.088 174.862 49.0366 174.811C48.831 174.708 48.7796 174.502 48.831 174.348L53.3542 163.554C53.457 163.349 53.6626 163.297 53.8682 163.349C54.0224 163.451 54.1252 163.657 54.0738 163.811L49.5506 174.605C49.4478 174.759 49.345 174.862 49.1908 174.862Z" fill="#D1D3D4" />
                        <path d="M164.944 212.693C164.738 212.693 164.584 212.539 164.584 212.334C164.584 212.282 164.584 212.231 164.635 212.179L172.037 198.764C172.14 198.61 172.345 198.507 172.551 198.61C172.757 198.713 172.808 198.918 172.705 199.124L165.304 212.539C165.201 212.642 165.098 212.693 164.944 212.693Z" fill="#D1D3D4" />
                      </svg>

                    </div>
                    <div className="md:w-3/4">
                      <div className="bg-white rounded-lg border p-6 shadow-sm">
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 9</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            NLP & Computer Vision Basics
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 10</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            AI Model Deployment
                          </h3>
                        </div>
                        <div className="mb-6 pb-4 border-b">
                          <p className="text-gray-500 mb-1">Week 11</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Resume, LinkedIn & Mock Interviews
                          </h3>
                        </div>
                        <div className="mb-2">
                          <p className="text-gray-500 mb-1">Week 12</p>
                          <h3 className="text-xl text-orange-500 font-semibold">
                            Resume, LinkedIn & Mock Interviews
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>


            </div>
            <div className="flex md:hidden flex-row sm:flex-row gap-4">
              <PrimaryButton className="rounded-md flex text-xs items-center transition">
                <span>Download Brochure</span>

              </PrimaryButton>
              <SecondaryButton className="rounded-md flex text-xs items-center transition">
                <span>Download Curriculum</span>

              </SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:w-2/3">
          <h2 className=" ">Learn From The Best</h2>
          <h3 className="text-4xl font-bold mb-8">Meet Your Instructors</h3>

          <div className="grid md:grid-cols-2 h-[90vh] md:h-80 gap-6 w-full">
            <div className="bg-white flex items-end rounded-lg shadow overflow-hidden !bg-cover" style={{ background: "url('/assets/img/ai/chetan.png')" }}>

              <div className="p-2 px-4 rounded-tr-lg bg-white w-full md:w-fit">
                <h4 className="font-bold mb-1">Chetan Sagare</h4>
                <p className="text-sm text-gray-500 mb-2">IIT Delhi, SDE 2 at Microsoft, <br /> Hyderabad</p>

              </div>
            </div>

            <div className="bg-white flex items-end rounded-lg shadow overflow-hidden !bg-contain !bg-no-repeat" style={{ background: "url('/assets/img/ai/shivansh.jpeg')" }}>

              <div className="p-2 px-4 rounded-tr-lg bg-white w-full md:w-fit">
                <h4 className="font-bold mb-1">Shivansh Shukla</h4>
                <p className="text-sm text-gray-500 mb-2">IIT Patna,  SDE 2 at Amazon, <br /> Seattle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Check Out Our Featured Videos For Further Info
          </h2>
          <div className='slider-container w-full'>
            <Slider {...settings}>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="rounded-lg shadow overflow-hidden relative">
                <img src="/assets/img/ai/video1.jpeg" alt="" className="w-full" />
                <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-red-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Slider>
          </div>

        </div>
      </section>
      <section className='py-12 bg-gray-50'>
        <div className="container mx-auto px-4 w-10/12">
          <h2 className="text-4xl font-bold mb-8">
            Frequently Asked Questions (FAQs)
          </h2>
          <AccordionGroup className="space-y-4" sx={{
            // Target each Accordion inside the group
            [`& .${accordionClasses.root}`]: {
              border: 'none',
              boxShadow: 'none',
              // Remove bottom border for all but the last Accordion
              '&:not(:last-of-type)': {
                borderBottom: 'none',
              },
            },
          }}>
            <Accordion >
              <AccordionSummary>What is the duration of the course?</AccordionSummary>
              <AccordionDetails >
                <div className='bg-[#FFE4BD] ml-8 rounded p-3 my-2'>
                  <p>The course is a 3-month program with two live interactive classes per week.</p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary>Do I need prior programming experience?</AccordionSummary>
              <AccordionDetails >
                <div className='bg-[#FFE4BD] ml-8 rounded p-3 my-2'>
                  <p>The course is a 3-month program with two live interactive classes per week.</p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary>What will I receive upon course completion?</AccordionSummary>
              <AccordionDetails >
                <div className='bg-[#FFE4BD] ml-8 rounded p-3 my-2'>
                  <p>The course is a 3-month program with two live interactive classes per week.</p>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion >
              <AccordionSummary>Are the classes live or recorded?</AccordionSummary>
              <AccordionDetails >
                <div className='bg-[#FFE4BD] ml-8 rounded p-3 my-2'>
                  <p>The course is a 3-month program with two live interactive classes per week.</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </AccordionGroup>
        </div>
      </section>
      <section id="clients" className="py-8 md:py-16">
        <div className="container mx-auto mb-4 md:mb-8 px-4">
          <p>Network</p>
          <h3 className="font-bold font-roboto text-3xl md:text-5xl">200+ Companies that hire our candidates</h3>
        </div>
        <ClientMarquee />
      </section>
    </GuestLayout>
  );
}

export default AiCourseLandingPageBasic;
