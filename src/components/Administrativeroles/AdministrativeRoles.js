"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AdministrativeRoles() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  const administrativeRoles = [
    {
      position: 'Principal',
      institution: 'Tagore Institute of Engineering and Technology',
      location: 'Tamil Nadu, India',
      duration: 'February 2025 - Present',
      responsibilities: [
        'Leading overall academic and administrative operations of the institution.',
        'Driving institutional growth through strategic planning, quality assurance, and accreditation processes (NAAC, NBA, IET, ABET).',
        'Mentoring faculty and students while fostering a research-driven academic environment.',
      ],
      icon: '🏛️',
    },
    {
      position: 'Professor',
      institution: 'Bharath Institute of Science and Technology',
      location: 'Chennai, India',
      duration: 'November 2021 - November 2024',
      responsibilities: [
        'Engaged in teaching core subjects in Mechanical Engineering.',
        'Contributed to curriculum development, research supervision, and publication in indexed journals.',
        'Coordinated departmental activities, faculty mentoring, and research collaborations.',
      ],
      icon: '📚',
    },
    {
      position: 'Professor & Dean - Mechanical',
      institution: 'Mangalam College of Engineering',
      location: 'Ettumanoor, Kerala, India',
      duration: 'January 2019 - June 2019',
      responsibilities: [
        'Headed the Mechanical Engineering department with focus on R&D initiatives.',
        'Promoted academic excellence and innovation in teaching methodologies.',
      ],
      icon: '🔬',
    },
    {
      position: 'Professor & Dean - Mechanical',
      institution: 'Genba Sopanrao Moze College of Engineering',
      location: 'Pune, Maharashtra, India',
      duration: 'June 2018 - January 2019',
      responsibilities: [
        'Oversaw academic operations and faculty development in the Mechanical department.',
        'Strengthened industry-academia collaboration and guided project-based learning.',
      ],
      icon: '🤝',
    },
    {
      position: 'Professor',
      institution: 'S.A. Engineering College (Autonomous)',
      location: 'Chennai, India',
      duration: 'November 2011 - April 2018',
      responsibilities: [
        'Led research and consultancy initiatives in the department.',
        'Played a key role in applying for R&D funding, publishing scholarly papers, and enhancing student research engagement.',
      ],
      icon: '🔍',
    },
  ];

  const additionalResponsibilities = [
    'Monitoring and reviewing student attendance and examination results.',
    'Accessible to students to discuss and resolve issues, counsel if necessary, and maintain an effective learning atmosphere.',
    'Acted as a judge for student symposiums and paper presentations in different colleges.',
    'Providing input on policy and procedure issues for the college.',
    'Providing input on budget needs for the campuses.',
    'Managing and administering college of education programs.',
    'Representing the college in various educational programs outside the campus.',
    'Coordinating faculty assignments and external programs.',
    'Coordinating and assisting the principal in performance appraisal and offering constructive feedback.',
    'Implementing college policies and procedures.',
    'Ensuring appropriate publicity for the college and courses offered.',
    'Maintaining office hours for student tutoring, academic, and career advisement.',
    'Conducting evaluations of student performance and assigning grades.',
    'Upgrading professional skills and subject expertise through continual study, research, and publishing.',
    'Keeping up professional responsibilities through active participation in professional bodies.',
    'Developing a personal professional development plan.',
  ];

  const stats = [
    { label: 'Years of Administrative Experience', value: '20+' },
    { label: 'Institutions Led', value: '5' },
    { label: 'Accreditation Processes', value: '4+' },
    { label: 'Faculty Mentored', value: '100+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center" data-aos="fade-up">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg">
                <div className="text-4xl font-bold text-white">DR</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
              Dr. <span className="font-semibold">JaiGanesh <span className="text-blue-700">Venu</span></span>{' '}
              <span className="text-xl font-medium">ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Visionary Leader in Academic Administration and Engineering Education
            </p>
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
        {/* Administrative Roles */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Administrative <span className="font-semibold text-blue-700">Roles</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A distinguished career in academic leadership and institutional management
            </p>
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            {administrativeRoles.map((role, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        {role.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {role.position}
                          </h3>
                          <p className="text-lg text-slate-600 font-medium mb-1">{role.institution}</p>
                          <p className="text-slate-500 mb-2">{role.location}</p>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-block bg-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            {role.duration}
                          </span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-slate-600 leading-relaxed">
                        {role.responsibilities.map((responsibility, resIdx) => (
                          <li key={resIdx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-slate-400 group-hover:via-slate-500 group-hover:to-slate-400 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Responsibilities */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Additional <span className="font-semibold text-blue-700">Responsibilities</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive contributions to institutional growth and student success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {additionalResponsibilities.map((responsibility, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-slate-600 leading-relaxed">{responsibility}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Administrative <span className="font-semibold text-blue-700">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>
              <div className="space-y-12">
                {administrativeRoles.map((role, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"
                    ></div>
                    <div
                      className={`w-5/12 bg-white rounded-xl p-6 shadow-md border border-gray-100 ${
                        idx % 2 === 0 ? 'mr-auto' : 'ml-auto'
                      }`}
                      data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                      data-aos-delay={idx * 100}
                    >
                      <div className="text-sm text-slate-500 font-medium mb-2">{role.duration}</div>
                      <div className="text-lg font-semibold text-slate-800 mb-1">{role.position}</div>
                      <div className="text-slate-600">{role.institution}</div>
                      <div className="text-sm text-slate-500 mt-2">{role.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100" data-aos="fade-up">
          <p className="text-slate-600 mb-2">© 2025 Dr. JaiGanesh Venu. All rights reserved.</p>
          <p className="text-sm text-slate-500">
            Excellence in Academic Leadership and Engineering Education
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