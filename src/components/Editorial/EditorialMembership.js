"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function EditorialMembership() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const editorialRoles = [
    {
      role: 'Reviewer',
      organization: 'Reputed Journals in Mechanical Engineering',
      description: 'Contributes as a peer reviewer for high-impact journals such as Materials Science Forum, Materials Design, Transactions of Indian Institute of Metals, and Archives of Metallurgy and Materials Science.',
      duration: 'Ongoing',
      icon: '📝',
    },
    {
      role: 'Board of Studies (BOS) Member',
      organization: 'Various Academic Institutions',
      description: 'Participates in curriculum development and academic policy-making to align educational programs with industry and societal needs.',
      duration: 'Multiple Terms',
      icon: '📚',
    },
    {
      role: 'Judge for Student Symposiums',
      organization: 'Multiple Colleges',
      description: 'Evaluates student presentations and research projects, fostering academic excellence and innovation.',
      duration: 'Ongoing',
      icon: '🏆',
    },
  ];

  const awards = [
    {
      name: 'Certificate of Excellence Award',
      organization: 'Global Economic Progress & Research Association (GEPRRA), New Delhi',
      year: '2013',
      description: 'Recognized for outstanding individual achievement in education.',
      icon: '🎖️',
    },
    {
      name: 'Mahatma Gandhi Gold Medal Award',
      organization: 'Global Economic Progress & Research Association (GEPRRA), New Delhi',
      year: '2014',
      description: 'Honored for excellence in education and academic contributions.',
      icon: '🥇',
    },
    {
      name: 'Outstanding Faculty Award',
      organization: 'Venus International Foundation',
      year: '2015',
      description: 'Acknowledged for significant contributions to academic and research excellence.',
      icon: '🌟',
    },
    {
      name: 'Best Academic Researcher Award',
      organization: 'ASDF Global Awards',
      year: '2015',
      description: 'Recognized for exemplary research in mechanical engineering.',
      icon: '🔬',
    },
    {
      name: 'Best Professor Award',
      organization: 'ASDF',
      year: '2016',
      description: 'Awarded for outstanding teaching and mentorship in engineering education.',
      icon: '👨‍🏫',
    },
    {
      name: 'Research Excellence Award',
      organization: 'Institute for Exploring Advances in Science & Engineering (IEAE)',
      year: '2017',
      description: 'Honored for impactful research contributions in engineering.',
      icon: '📊',
    },
    {
      name: 'Best Supervisor Award',
      organization: 'International Society for Scientific Research and Development (ISSRD)',
      year: '2017',
      description: 'Recognized for exceptional guidance in student research projects.',
      icon: '🤝',
    },
    {
      name: 'Innovative Scientific Research & Dedicated Professor Award',
      organization: 'Malaysia Professional Academic Icon',
      year: '2018',
      description: 'Awarded for innovative research and dedication to mechanical engineering education.',
      icon: '💡',
    },
  ];

  const stats = [
    { label: 'Years of Editorial Experience', value: '10+' },
    { label: 'Awards Received', value: '8' },
    { label: 'Journals Reviewed', value: 'Multiple' },
    { label: 'Symposiums Judged', value: 'Numerous' },
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
              Dr. <span className="font-semibold">JaiGanesh <span className="text-blue-700">Venu</span></span> <span className="text-xl font-medium">ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Renowned Academic Leader in Editorial and Professional Memberships
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
        {/* Editorial Roles */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Editorial & <span className="font-semibold text-blue-700">Membership Roles</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A distinguished contributor to academic and professional communities through editorial and leadership roles
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {editorialRoles.map((role, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        {role.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {role.role}
                          </h3>
                          <p className="text-lg text-slate-600 font-medium mb-1">
                            {role.organization}
                          </p>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-block bg-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            {role.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {role.description}
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

        {/* Awards Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Professional <span className="font-semibold text-blue-700">Awards</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Recognized for excellence in education, research, and academic leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">
                    {award.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{award.name}</h3>
                    <p className="text-sm text-slate-600 mb-1">{award.organization}</p>
                    <p className="text-sm text-slate-500 mb-2">{award.year}</p>
                    <p className="text-sm text-slate-600">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Awards <span className="font-semibold text-blue-700">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>

              <div className="space-y-12">
                {awards.map((award, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline dot */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"
                    ></div>

                    {/* Content */}
                    <div
                      className={`w-5/12 bg-white rounded-xl p-6 shadow-md border border-gray-100 ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                      data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                      data-aos-delay={idx * 100}
                    >
                      <div className="text-sm text-slate-500 font-medium mb-2">{award.year}</div>
                      <div className="text-lg font-semibold text-slate-800 mb-1">{award.name}</div>
                      <div className="text-sm text-slate-600">{award.organization}</div>
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
            © 2025 Dr. JaiGanesh Venu. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Excellence in Academic Leadership and Research
          </p>
        </div>
      </div>
    </div>
  );
}