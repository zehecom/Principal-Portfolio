'use client'

import React, { useEffect } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Award, BookOpen, Users, TrendingUp, GraduationCap, Briefcase, Star, ChevronRight } from 'lucide-react'

export default function Homepage() {


  const achievements = [
    { icon: Users, value: '5000+', label: 'Students Mentored' },
    { icon: BookOpen, value: '25+', label: 'Years Experience' },
    { icon: GraduationCap, value: '4', label: 'Academic Degrees' },
    { icon: Award, value: 'A+', label: 'Institution Rating' }
  ];

  const qualifications = [
    {
      degree: 'Ph.D',
      field: 'Mechanical Engineering',
      institution: 'Anna University Chennai',
      year: '2009',
      icon: '🎓'
    },
    {
      degree: 'MBA',
      field: 'Marketing Management',
      institution: 'IGNOU India',
      year: '2006',
      icon: '📊'
    },
    {
      degree: 'M.E',
      field: 'Industrial Engineering',
      institution: 'NIT Trichy',
      year: '2003',
      icon: '⚙️'
    },
    {
      degree: 'B.E',
      field: 'Production Engineering',
      institution: 'University of Madras',
      year: '1999',
      icon: '🔧'
    }
  ];

  const expertise = [
    'Computational Fluid Dynamics',
    'Heat Transfer & Thermo-Fluids',
    'Academic Administration',
    'Educational Leadership',
    'Research & Development',
    'Strategic Marketing'
  ];

  return (
    <div className='min-h-screen bg-gray-50 overflow-hidden'>
      {/* Hero Section */}
    <div className='bg-white shadow-sm'>
  <div className='flex flex-col lg:grid lg:grid-cols-2 min-h-[calc(100vh-100px)]'>

    {/* Left Side - Image */}
    <div className='relative w-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-10'>
      <div className='relative w-fit flex justify-center' data-aos="fade-right">
        {/* Main Image */}
        <div className=''>
          <img
            src='/images/Photo.jpeg'
            alt='Dr. JaiGanesh Venu'
            className=' w-[300px] md:w-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-white'
          />
        </div>

        {/* Floating Elements */}
        <div className='absolute -top-4 right-4 sm:-top-6 sm:-right-6 bg-slate-800 text-white p-3 sm:p-4 rounded-xl shadow-lg z-20' data-aos="fade-down" data-aos-delay="300">
          <div className='text-center'>
            <div className='text-xl sm:text-2xl font-bold'>25+</div>
            <div className='text-xs'>Years</div>
          </div>
        </div>

        <div className='absolute -bottom-4 -left-6 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-slate-200 z-20' data-aos="fade-up" data-aos-delay="500">
          <div className='flex items-center space-x-2'>
            <Award className='w-5 h-5 text-blue-700' />
            <div>
              <div className='text-sm font-semibold text-slate-800'>Excellence</div>
              <div className='text-xs text-slate-600'>Award Winner</div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className='absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 bg-slate-200 rounded-full opacity-30'></div>
        <div className='absolute -bottom-6 -right-6 w-20 h-20 sm:w-32 sm:h-32 border-4 border-slate-300 rounded-full opacity-40'></div>
      </div>
    </div>

    {/* Right Side - Content */}
    <div className='bg-white px-4 py-10 sm:p-10 flex flex-col justify-center'>
      <div className='space-y-8'>

        {/* Header */}
        <div data-aos="fade-left">
          <div className='flex items-center mb-4'>
            <div className='w-8 h-1 sm:w-12 bg-slate-700 mr-4'></div>
            <span className='text-slate-700 font-medium text-base sm:text-lg'>ACADEMIC PORTFOLIO</span>
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-light text-slate-800 mb-2'>
            Dr. <span className="font-semibold">JaiGanesh <span className='text-blue-700'>Venu</span></span>
          </h1>
          <p className='text-lg sm:text-xl text-slate-600 font-medium mb-2'>
            Principal & Educational Leader
          </p>
          <p className='text-md sm:text-lg text-slate-500'>
            <span className='font-medium'>M.E., MBA., Ph.D</span>
          </p>
        </div>

        {/* Description */}
        <div className='space-y-4 sm:space-y-6' data-aos="fade-left" data-aos-delay="200">
          <p className='text-slate-700 text-base sm:text-lg leading-relaxed'>
            Dedicated, resourceful and goal-driven professional educator with a solid commitment to the social
            and academic growth and development of every student with 25 years of experience in Teaching and Research.
          </p>
        </div>

        {/* Stats */}
        <div data-aos="fade-up" data-aos-delay="400">
          <div className='grid grid-cols-2 gap-4 sm:gap-6'>
            {achievements.slice(0, 4).map((achievement, idx) => (
              <div key={idx} className={`p-4 sm:p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg ${
                idx === 0 ? 'bg-slate-800 text-white' :
                idx === 1 ? 'bg-white border-2 border-slate-200' :
                'bg-blue-50 border border-slate-200'
              }`}>
                <achievement.icon className={`w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 ${idx === 0 ? 'text-white' : 'text-slate-700'}`} />
                <div className={`text-xl sm:text-2xl font-bold ${idx === 0 ? 'text-white' : 'text-slate-800'}`}>
                  {achievement.value}
                </div>
                <div className={`text-xs sm:text-sm ${idx === 0 ? 'text-slate-200' : 'text-slate-600'}`}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className='flex space-x-3 sm:space-x-4 py-6 sm:py-7'>
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href='#' className='p-2 sm:p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                <Icon className='w-4 h-4 sm:w-5 sm:h-5' />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='w-full sm:w-auto px-6 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2'>
              <span>View Qualifications</span>
              <ChevronRight className='w-4 h-4' />
            </button>
            <button className='w-full sm:w-auto px-6 py-3 border-2 border-slate-800 text-slate-800 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Academic Qualifications Preview */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12' data-aos="fade-up">
            <h2 className='text-4xl font-light text-slate-800 mb-4'>
              Academic <span className="font-semibold text-blue-700">Qualifications</span>
            </h2>
            <div className='w-24 h-1 bg-slate-700 mx-auto mb-6'></div>
            <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
              A comprehensive academic journey spanning multiple disciplines and prestigious institutions
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto'>
            {qualifications.map((qual, idx) => (
              <div key={idx} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-6'
                data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-2xl mx-auto mb-4'>
                    {qual.icon}
                  </div>
                  <div className='text-2xl font-bold text-slate-800 mb-2'>{qual.degree}</div>
                  <div className='text-slate-600 font-medium mb-1'>{qual.field}</div>
                  <div className='text-sm text-slate-500 mb-2'>{qual.institution}</div>
                  <div className='text-xs font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full'>
                    {qual.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise Areas */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12' data-aos="fade-up">
            <h2 className='text-4xl font-light text-slate-800 mb-4'>
              Areas of <span className="font-semibold text-blue-700">Expertise</span>
            </h2>
            <div className='w-24 h-1 bg-slate-700 mx-auto mb-6'></div>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            {expertise.map((area, idx) => (
              <div key={idx} className='bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100'
                data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className='text-slate-700 font-medium text-lg'>
                  {area}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Section */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12' data-aos="fade-up">
            <h2 className='text-4xl font-light text-slate-800 mb-4'>
              Leadership and <span className="font-semibold text-blue-700">Excellence</span>
            </h2>
            <div className='w-24 h-1 bg-slate-700 mx-auto'></div>
          </div>

          <div className='grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto'>
            <div className='lg:col-span-1' data-aos="fade-right">
              <img
                src='https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
                alt='Academic Excellence'
                className='w-full h-64 object-cover rounded-2xl shadow-lg'
              />
            </div>

            <div className='lg:col-span-2 space-y-6' data-aos="fade-left">
              <div className='bg-gray-50 border-l-4 border-blue-700 p-6 rounded-r-xl'>
                <h3 className='text-xl font-semibold text-slate-800 mb-3'>Educational Background</h3>
                <p className='text-slate-700 leading-relaxed'>
                  Doctoral Degree (PhD) from <strong className='text-blue-700'>Anna University Chennai</strong> in Mechanical Engineering,
                  with specialization in Computational Fluid Dynamics and Heat Transfer.
                </p>
              </div>

              <div className='bg-gray-50 border-l-4 border-slate-700 p-6 rounded-r-xl'>
                <h3 className='text-xl font-semibold text-slate-800 mb-3'>Professional Achievement</h3>
                <p className='text-slate-700 leading-relaxed'>
                  25 years of experience in Administration, Academics and Research in NBA, NAAC, and ABET Accredited
                  Engineering Colleges. Served as <strong className='text-slate-800'>Professor and Principal</strong> for 14+ years.
                </p>
              </div>

              <div className='bg-gray-50 border-l-4 border-blue-700 p-6 rounded-r-xl'>
                <h3 className='text-xl font-semibold text-slate-800 mb-3'>Impact & Results</h3>
                <p className='text-slate-700 leading-relaxed'>
                  Enhanced college results from <strong className='text-blue-700'>57% to 82%</strong> and improved ranking from
                  <strong className='text-blue-700'> 157th to 20th place</strong> out of 584 colleges in Anna University examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-slate-800 text-white py-12'>
        <div className='container mx-auto px-6'>
          <div className='text-center' data-aos="fade-up">
            <div className='mb-6'>
              <div className='w-24 h-24 mx-auto rounded-full bg-slate-700 flex items-center justify-center shadow-lg mb-4'>
                <div className='text-2xl font-bold text-white'>DR</div>
              </div>
              <h3 className='text-2xl font-light mb-2'>
                Dr. <span className="font-semibold">JaiGanesh <span className='text-blue-400'>Venu</span></span>
              </h3>
              <p className='text-slate-300'>Principal & Educational Leader</p>
            </div>

            <div className='flex justify-center space-x-6 mb-8'>
              <a href='#' className='p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href='#' className='p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href='#' className='p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors'>
                <Instagram className='w-5 h-5' />
              </a>
              <a href='#' className='p-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
            </div>

            <div className='border-t border-slate-700 pt-8'>
              <p className='text-slate-400 mb-2'>
                &copy; 2025 Dr. JaiGanesh Venu. All rights reserved.
              </p>
              <p className='text-sm text-slate-500'>
                Excellence in Engineering Education and Research
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AOS CSS */}
      <style jsx>{`
        @import url('https://unpkg.com/aos@2.3.1/dist/aos.css');
      `}</style>
    </div>
  )
}