"use client"
import React, { useState, useEffect } from 'react';

export default function AcademicQualification() {
  const [activeCard, setActiveCard] = useState(null);

  const qualifications = [
    {
      degree: <span>Doctor of Philosophy (Ph.D.)</span>,
      field: 'Mechanical Engineering',
      institution: 'Anna University Chennai',
      duration: '2005 – 2009',
      description: 'Focused on advanced research in Mechanical Engineering with contributions to academic publications and innovations in R&D.',
      level: 'Doctoral',
      icon: '🎓'
    },
    {
      degree: 'Master of Business Administration (MBA)',
      field: 'Marketing Management',
      institution: 'Indira Gandhi National Open University (IGNOU) India',
      duration: '2002 – 2006',
      description: 'Developed strategic and managerial skills in marketing, complementing technical expertise with business acumen.',
      level: 'Master\'s',
      icon: '📊'
    },
    {
      degree: 'Master of Engineering (M.E.)',
      field: 'Industrial Engineering',
      institution: 'National Institute of Technology, Tiruchirappalli (NIT Trichy)',
      duration: '2001 – 2003',
      description: 'Specialized in systems optimization, production management, and industrial operations.',
      level: 'Master\'s',
      icon: '⚙️'
    },
    {
      degree: 'Bachelor of Engineering (B.E.)',
      field: 'Production Engineering',
      institution: 'University of Madras Chennai',
      duration: '1995 – 1999',
      description: 'Laid the foundation in mechanical and production engineering principles, setting the stage for a strong academic and professional career.',
      level: 'Bachelor\'s',
      icon: '🔧'
    },
  ];

  const expertise = [
    'Advanced Research & Development',
    'Strategic Marketing Management',
    'Industrial Operations & Systems',
    'Production Engineering'
  ];

  const stats = [
    { label: 'Years of Academic Excellence', value: '25+' },
    { label: 'Degrees Earned', value: '4' },
    { label: 'Institutions Attended', value: '4' },
    { label: 'Specialization Areas', value: '3' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center" data-aos="fade-up">
            {/* Professional Avatar */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg">
                <div className="text-4xl font-bold text-white">
                  DR
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
              Dr. <span className="font-semibold">JaiGanesh <span className='text-blue-700'>Venu</span>  </span> <span className='text-xl font-medium'>ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Mechanical Engineering Expert with Multi-disciplinary Academic Excellence
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                  <div className="text-3xl font-bold text-slate-700 mb-2">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Academic Qualifications */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Academic <span className="font-semibold text-blue-700">Qualifications</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive academic journey spanning multiple disciplines and prestigious institutions
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {qualifications.map((qual, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${activeCard === idx ? 'ring-2 ring-slate-400' : ''}`}
                // onMouseEnter={() => setActiveCard(idx)}
                // onMouseLeave={() => setActiveCard(null)}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        {qual.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {qual.degree}
                          </h3>
                          <p className="text-lg text-slate-600 font-medium mb-1">
                            {qual.field}
                          </p>
                          <p className="text-slate-500 mb-2">
                            {qual.institution}
                          </p>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-block bg-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            {qual.duration}
                          </span>
                          <div className="text-xs font-medium text-blue-600 mt-2 md:text-right">
                            {qual.level}
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {qual.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle accent line */}
                <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-slate-400 group-hover:via-slate-500 group-hover:to-slate-400 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Areas of <span className="font-semibold text-blue-700">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {expertise.map((area, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="text-slate-700 font-medium text-lg">
                  {area}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Academic <span className="font-semibold text-blue-700">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>

              <div className="space-y-12">
                {qualifications.map((qual, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline dot */}
                    <div data-aos="fade-up" data-aos-delay={idx * 100} className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 bg-white rounded-xl p-6 shadow-md border border-gray-100 ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                      data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={idx * 100}>
                      <div className="text-sm text-slate-500 font-medium mb-2">{qual.duration}</div>
                      <div className="text-lg font-semibold text-slate-800 mb-1">{qual.degree}</div>
                      <div className="text-slate-600">{qual.field}</div>
                      <div className="text-sm text-slate-500 mt-2">{qual.institution}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100" data-aos="fade-up">
          <p className="text-slate-600 mb-2">
            &copy; 2025 Dr. Engineering Professional. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Excellence in Engineering Education and Research
          </p>
        </div>
      </div>

      {/* AOS CSS */}
      <style jsx>{`
        @import url('https://unpkg.com/aos@2.3.1/dist/aos.css');
      `}</style>
    </div>
  );
}