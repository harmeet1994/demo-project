import Header from '@/Components/Header';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react'
import React, { useState, useEffect } from 'react'
import { Puff, ThreeCircles } from 'react-loader-spinner';

export default function GuestLayout({ children }) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleFinish = () => setLoading(false)

    router.on('start', handleStart)
    router.on('finish', handleFinish)

    return () => {

      router.on('start', handleStart)
      router.on('finish', handleFinish)
    }
  }, [])

  return (
    <div className='bg-white'>
      <Head>
        <title>Job School</title>
        <meta name="description" content="Your page description" />
      </Head>
      {loading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <ThreeCircles visible={true} color='#E88700' />

        </div>
      )}
      <Header />
      <main className='min-h-screen mt-20 bg-white'>
        {children}
      </main>

      <footer id="footer" className="bg-gradient-to-l from-[#1F366C] to-[#1E3568] text-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 md:mb-20">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Learn from the best. Become Job Ready.</h2>
            <h2 className="italic text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Get Hired Fast.</h2>
          </div>

          <div className="flex flex-col lg:flex-row mt-8 md:mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full lg:w-8/12 md:gap-8 gap-3 mb-8 lg:mb-0">
              <div>
                <h4 className="md:text-lg font-semibold">Useful Links</h4>
                <ul className="mt-2 space-y-1 text-gray-300">
                  <li><a href="about-us" className="hover:text-blue-400">About us</a></li>
                  <li><a href="index.php#programs" className="hover:text-blue-400">Courses</a></li>
                  <li><a href="blogs" className="hover:text-blue-400">Blogs</a></li>
                  <li><a href="job-postings" className="hover:text-blue-400">Jobs</a></li>
                </ul>
              </div>

              <div>
                <h4 className="md:text-lg font-semibold">Contact Us</h4>
                <div className="mt-2 space-y-2">
                  <a href="tel:9122690408344" className="flex items-center hover:text-blue-400">
                    <img src="../assets/img/phone.png" className="h-5 mr-2" alt="" /> +91 22690408344
                  </a>
                  <a href="mailto:info@jobschool.io" className="flex items-center hover:text-blue-400">
                    <img src="../assets/img/mail.png" className="h-5 mr-2" alt="" /> info@jobschool.io
                  </a>
                  <a href="#" className="flex items-start hover:text-blue-400">
                    <img src="../assets/img/address.png" className="h-5 mr-2 mt-1" alt="" />
                    <span>Regus - Delhi</span>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold">Follow Us</h4>
                <div className="mt-2 space-y-2">
                  <a href="#" className="hover:text-blue-400">Twitter</a><br />
                  <a href="https://www.instagram.com/jobschool_envisionists?igsh=MTZ5M3N1dXMxbXJjdA==" className="hover:text-blue-400">Instagram</a><br />
                  <a href="https://www.linkedin.com/company/jobcchool/" className="hover:text-blue-400">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className='w-full lg:w-4/12 mt-6 lg:mt-0'>
              <h4 className="text-lg font-semibold">Subscribe To</h4>
              <p className="text-gray-400 mt-2">Daily News, Blogs, Insights And Many More</p>
              <form action="" method="POST" className="mt-4 flex flex-col items-end sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
                <input
                  type="email"
                  className="w-full sm:w-2/3 p-3 text-black rounded-lg focus:outline-none"
                  placeholder="Enter Your Email Here"
                  required
                />
                <div className="sm:mt-0">
                  <PrimaryButton>Join Us</PrimaryButton>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
              <a href="terms" className="hover:text-blue-400">Terms of Service</a>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <p>© <span id="year"></span> JobSchool. All Rights Reserved.</p>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <a href="privacy" className="hover:text-blue-400">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
