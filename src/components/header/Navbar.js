'use client'

import React, { useState } from 'react'
import { Menu, X, Mail, Phone, Download, ChevronRight, ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    'HOME', 'ACADEMICS', 'RESEARCH', 'LEADERSHIP SKILLS', 'EXPERIENCES',
    'ACHIEVEMENTS', 'AWARDS', 'ARTICLES', 'ACTIVITIES', 'CONSULTANCY',
    'CV', 'APPRAISALS', 'FEEDBACK', 'GALLERY', 'CONTACT'
  ]
  const menuItems2 = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'ACADEMICS', path: '/academic-qualification' },
    { name: 'RESEARCH', path: '/research' },
    { name: 'PATENTS', path: '/patents' },
    { name: 'CONFERENCE', path: '/conference-workshops' },
    { name: 'ADMINISTRATIVE ROLES', path: '/administrative-roles' },
    { name: 'PROJECT & GRANTS', path: '/projects' },
    { name: 'AWARDS & ACHIEVEMENTS', path: '/awards' },
    { name: 'TEACHING & SUPERVISION', path: '/teaching' },
    { name: 'EDITORIAL & MEMBERSHIP', path: '/editorial' },
    // { name: 'EXPERIENCES', path: '/#' },
    // { name: 'ARTICLES', path: '/#' },
    // { name: 'CONSULTANCY', path: '/#' },
    { name: 'GALLERY', path: '/#' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleMoreHover = () => {
    setIsMoreOpen(true)
  }

  const handleMoreLeave = () => {
    setIsMoreOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className='bg-white shadow-xl sticky top-0 z-50'>
        {/* Top Contact Bar - Hidden on mobile */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 hidden md:block'>
          <div className='max-w-7xl mx-auto px-4 flex justify-between items-center text-sm'>
            <div className='flex items-center space-x-6'>
              <div className='flex items-center space-x-2'>
                <Mail className='w-4 h-4' />
                <span>principal@tagore.edu.in</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='w-4 h-4' />
                <span>+91 9876543210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className='bg-white py-4 px-4 md:px-6'>
          <div className='max-w-7xl mx-auto flex items-center justify-between'>
            {/* Logo Section */}
            <div className='flex items-center space-x-3'>
              <div className='w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg'>
                <span className='text-white font-bold text-xl'>T</span>
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-lg md:text-xl font-bold text-gray-900'>Dr. JaiGanesh Venu</h1>
                <p className='text-xs md:text-sm text-gray-600'>Tagore Institute of Engineering & Technology</p>
              </div>
              <div className='block sm:hidden'>
                <h1 className='text-lg font-bold text-gray-900'>Dr. JaiGanesh</h1>
                <p className='text-xs text-gray-600'>TIET</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1'>
              {menuItems2.slice(0, 5).map((item, index) => (
                <a
                  key={index}
                  href={`${item.path}`}
                  className={` px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.name}
                </a>
              ))}

              {/* More Dropdown */}
              <div
                className='relative'
                onMouseEnter={handleMoreHover}
                onMouseLeave={handleMoreLeave}
              >
                <button className='flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200'>
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''
                    }`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${isMoreOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                  }`}>
                  <div className='max-h-80 overflow-y-auto'>
                    {menuItems2.slice(5).map((item, index) => (
                      <a
                        key={index}
                        href={`${item.path}`}
                        className='block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex items-center space-x-2 ml-4'>
                <a href='/documents/DR V JaiGanesh portfilio content pdf.pdf' download={true}>
                  <button type='button' className='px-4 py-2 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2'>
                    <Download className='w-4 h-4' />
                    <span>Download CV</span>
                  </button>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className='flex items-center space-x-3 lg:hidden'>
              <button className='px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg text-sm flex items-center space-x-1'>
                <Download className='w-4 h-4' />
                <span className='hidden sm:inline'>CV</span>
              </button>
              <button
                onClick={toggleSidebar}
                className='p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200'
              >
                <Menu className='w-6 h-6' />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden'
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Sidebar Header */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>T</span>
              </div>
              <div>
                <h2 className='font-bold text-lg'>Dr. JaiGanesh</h2>
                <p className='text-sm text-blue-100'>TIET</p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className='p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors'
            >
              <X className='w-6 h-6' />
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className='p-6 border-b border-gray-200'>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3 text-gray-700'>
              <Mail className='w-5 h-5 text-blue-600' />
              <span className='text-sm'>principal@tagore.edu.in</span>
            </div>
            <div className='flex items-center space-x-3 text-gray-700'>
              <Phone className='w-5 h-5 text-blue-600' />
              <span className='text-sm'>+91 9876543210</span>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className='p-6 flex-1 overflow-y-auto max-h-[calc(100vh-200px)]'>
          <div className='space-y-2'>
            {menuItems2.map((item, index) => (
              <a
                key={index}
                href={`${item.path}`}
                onClick={toggleSidebar}
                className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${item === 'HOME'
                  ? 'text-blue-600 bg-blue-50 font-medium'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
              >
                <span className='text-sm font-medium'>{item.name}</span>
                <ChevronRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
              </a>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className='p-6 bg-gray-50 border-t border-gray-200'>
          <button className='w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2'>
            <Download className='w-5 h-5' />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </>
  )
}