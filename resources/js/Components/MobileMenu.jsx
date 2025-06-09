import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
  Search, 
  Home, 
  BookOpen, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Phone, 
  User,
  ChevronDown,
  ChevronRight,
  Settings,
  Bookmark,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const MobileMenu = () => {
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const mobileCourseLinks = [
    { name: 'Non-tech Courses', href: '/operations', badge: 'Limited Time Offer', badgeColor: 'bg-blue-500' },
    { name: 'Tech Courses', href: '/ai-course', badge: 'Intermediate', badgeColor: 'bg-orange-500' },
    { name: 'Professional Language Course', href: '/language' },
    { name: 'Campus to Career', href: '/career-campus' }, // Placeholder URL
    { name: 'Professional Skill Bootcamp', href: '/corporate' }, // Placeholder URL
  ];

  const user = usePage().props.auth.user;


  return (
    <div className="relative">
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 md:hidden right-4 z-50 p-2 bg-white rounded-lg shadow-md"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 right-0 bg-white transform transition-all duration-300 ease-in-out z-50 max-h-screen overflow-hidden ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        
        {/* Search Bar */}
        {/* <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search Courses & Jobs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-2 top-1 px-3 py-1.5 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600">
              Search
            </button>
          </div>
        </div> */}

        {/* User Profile Section */}
        {user && (
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-lg">
                {user.name ? user.name.charAt(0).toUpperCase() : <User size={20} />}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{user.name}</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="p-1"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* User Menu Dropdown */}
            {userMenuOpen && (
              <div className="space-y-2">
                {/* <Link href="/my-courses" className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-md">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">My Courses</span>
                </Link>
                <Link href="/settings" className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-md">
                  <Settings className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Settings</span>
                </Link>
                <Link href="/saved-jobs" className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-md">
                  <Bookmark className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Saved Job</span>
                </Link>
                <Link href="/support" className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-md">
                  <HelpCircle className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Support</span>
                </Link> */}
                <Link href="/logout" method="post" as="button" type="button" className="flex items-center space-x-3 w-full p-2 text-left hover:bg-gray-50 rounded-md text-red-600">
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Log out</span>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Navigation Menu */}
        <div className="flex-1 overflow-y-auto max-h-96">
          <nav className="p-4 space-y-2">
            {/* Home */}
            <Link href="/" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
              <Home className="h-5 w-5 text-gray-500" />
              <span>Home</span>
            </Link>

            {/* Login / Register */}
            {!user && (
              <Link href="/login" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
                <User className="h-5 w-5 text-gray-500" />
                <span>Login / Register</span>
              </Link>
            )}

            {/* About Us */}
            <Link href="/about-us" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
              <Users className="h-5 w-5 text-gray-500" />
              <span>About Us</span>
            </Link>

            {/* Courses */}
            <div>
              <button 
                onClick={() => toggleDropdown('courses')}
                className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-50 rounded-md"
              >
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  <span>Courses</span>
                </div>
                <ChevronRight className={`h-4 w-4 transition-transform ${
                  activeDropdown === 'courses' ? 'rotate-90' : ''
                }`} />
              </button>
              
              {activeDropdown === 'courses' && (
                <div className="ml-8 mt-2 space-y-1">
                  {mobileCourseLinks.map((courseLink, index) => {
                    const commonClasses = "flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-md text-sm";
                    return (
                      <div key={index} className="relative">
                        <Link
                          href={courseLink.href}
                          className={commonClasses}
                        >
                          <span>{courseLink.name}</span>
                          {courseLink.badge && (
                            <span className={`px-2 py-1 text-xs text-white rounded-full ${courseLink.badgeColor}`}>
                              {courseLink.badge}
                            </span>
                          )}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Blogs */}
            <Link href="/blogs" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
              <MessageSquare className="h-5 w-5 text-gray-500" />
              <span>Blogs</span>
            </Link>

            {/* Jobs */}
            <Link href="/jobs" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <span>Jobs</span>
            </Link>

            {/* Contact */}
            <Link href="/contact-us" className="flex items-center space-x-3 w-full p-3 text-left hover:bg-gray-50 rounded-md">
              <Phone className="h-5 w-5 text-gray-500" />
              <span>Contact</span>
            </Link>
          </nav>
        </div>

        {/* Login/Register Button */}
 { !user &&      <div className="p-4 border-t">
          <Link href="/login" className="block w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors text-center">
            Login/Register
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default MobileMenu;