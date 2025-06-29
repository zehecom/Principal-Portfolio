// 'use client'

// import React from 'react'
// import { Facebook, Twitter, Instagram, Linkedin, Award, BookOpen, Users, TrendingUp } from 'lucide-react'

// export default function Herosection() {
//   return (
//     <div className='min-h-screen bg-white'>
//       <div className='grid lg:grid-cols-2 min-h-screen'>
        
//         {/* Left Side - Image */}
//         <div className='relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-12'>
//           <div className='relative'>
//             {/* Main Image */}
//             <div className='relative z-10'>
//               <img 
//                 src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
//                 alt='Dr. JaiGanesh Venu'
//                 className='w-[600px] h-[600px] object-cover rounded-2xl shadow-2xl border-4 border-white'
//               />
//             </div>
            
//             {/* Floating Elements */}
//             <div className='absolute -top-6 -right-6 bg-blue-800 text-white p-4 rounded-xl shadow-lg z-20'>
//               <div className='text-center'>
//                 <div className='text-2xl font-bold'>25+</div>
//                 <div className='text-xs'>Years</div>
//               </div>
//             </div>

//             <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-blue-200 z-20'>
//               <div className='flex items-center space-x-2'>
//                 <Award className='w-5 h-5 text-blue-800' />
//                 <div>
//                   <div className='text-sm font-semibold text-gray-800'>Excellence</div>
//                   <div className='text-xs text-gray-800'>Award Winner</div>
//                 </div>
//               </div>
//             </div>

//             {/* Background Decorations */}
//             <div className='absolute -top-8 -left-8 w-24 h-24 bg-blue-200 rounded-full opacity-30'></div>
//             <div className='absolute -bottom-8 -right-8 w-32 h-32 border-4 border-blue-300 rounded-full opacity-40'></div>
//           </div>
//         </div>

//         {/* Right Side - Content */}
//         <div className='bg-white p-12 flex flex-col justify-center'>
//           <div className='max-w-[6xl] space-y-8'>
            
//             {/* Header */}
//             <div>
//               <div className='flex items-center mb-4'>
//                 <div className='w-12 h-1 bg-blue-800 mr-4'></div>
//                 <span className='text-blue-800 font-medium text-lg'>ACADEMIC PORTFOLIO</span>
//               </div>
//               <h1 className='text-5xl font-bold text-blue-900 mb-2'>
//                 Dr. JaiGanesh Venu
//               </h1>
//               <p className='text-xl text-gray-800 font-medium'>
//                 Principal & Educational Leader
//               </p>
//             </div>

//             {/* Description */}
//             <div className='space-y-4'>
//               <p className='text-gray-700 text-lg leading-relaxed'>
//                 Dedicated, resourceful and goal-driven professional educator with a solid commitment to the social 
//                 and academic growth and development of every student with 25 years of experience in Teaching and Research.
//               </p>
              
//               <div className='bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-lg'>
//                 <p className='text-gray-700 leading-relaxed'>
//                   Dr. JaiGanesh Venu is a distinguished academician, visionary leader, and interdisciplinary researcher 
//                   with over 25 years of extensive experience in the fields of engineering education, academic administration, 
//                   and applied research. He currently serves as the Principal of Tagore Institute of Engineering and Technology.
//                 </p>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className='grid grid-cols-3 gap-4'>
//               <div className='bg-blue-800 text-white p-6 rounded-xl text-center'>
//                 <Users className='w-6 h-6 mx-auto mb-2' />
//                 <div className='text-2xl font-bold'>5000+</div>
//                 <div className='text-blue-100 text-sm'>Students</div>
//               </div>
//               <div className='bg-white border-2 border-blue-200 p-6 rounded-xl text-center'>
//                 <BookOpen className='w-6 h-6 mx-auto mb-2 text-blue-800' />
//                 <div className='text-2xl font-bold text-blue-900'>25</div>
//                 <div className='text-gray-800 text-sm'>Years Exp</div>
//               </div>
//               <div className='bg-blue-50 border border-blue-200 p-6 rounded-xl text-center'>
//                 <TrendingUp className='w-6 h-6 mx-auto mb-2 text-blue-800' />
//                 <div className='text-2xl font-bold text-blue-900'>A+</div>
//                 <div className='text-gray-800 text-sm'>Rating</div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className='flex space-x-4'>
//               <a href='#' className='p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors'>
//                 <Facebook className='w-5 h-5' />
//               </a>
//               <a href='#' className='p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors'>
//                 <Twitter className='w-5 h-5' />
//               </a>
//               <a href='#' className='p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors'>
//                 <Instagram className='w-5 h-5' />
//               </a>
//               <a href='#' className='p-3 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-colors'>
//                 <Linkedin className='w-5 h-5' />
//               </a>
//             </div>

//             {/* CTA Buttons */}
//             <div className='flex gap-4'>
//               <button className='px-8 py-3 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
//                 View Profile
//               </button>
//               <button className='px-8 py-3 border-2 border-blue-800 text-blue-800 rounded-lg font-semibold hover:bg-blue-800 hover:text-white transition-colors'>
//                 Contact Me
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Achievement Section */}
//       <div className='bg-blue-50 py-16'>
//         <div className='max-w-6xl mx-auto px-8'>
//           <div className='text-center mb-12'>
//             <h2 className='text-3xl font-bold text-blue-900 mb-4'>
//               LEADERSHIP AND EDUCATIONAL EXCELLENCE
//             </h2>
//             <div className='w-24 h-1 bg-blue-800 mx-auto'></div>
//           </div>

//           <div className='grid lg:grid-cols-3 gap-8 items-start'>
//             <div className='lg:col-span-1'>
//               <img 
//                 src='https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop'
//                 alt='Academic Excellence'
//                 className='w-full h-64 object-cover rounded-xl shadow-lg'
//               />
//             </div>
            
//             <div className='lg:col-span-2 space-y-6'>
//               <div className='bg-white p-6 rounded-xl shadow-md border border-blue-100'>
//                 <h3 className='text-lg font-semibold text-blue-900 mb-3'>Educational Background</h3>
//                 <p className='text-gray-700 leading-relaxed'>
//                   He has obtained a Doctoral Degree (PhD) from India's premier institution, <strong className='text-blue-800'>Indian Institute of Technology Madras (IITM)</strong> in the field of Computational Fluid Dynamics (CFD) and Heat Transfer (Thermo-Fluids) at the Department of Mechanical Engineering.
//                 </p>
//               </div>

//               <div className='bg-white p-6 rounded-xl shadow-md border border-blue-100'>
//                 <h3 className='text-lg font-semibold text-blue-900 mb-3'>Professional Achievement</h3>
//                 <p className='text-gray-700 leading-relaxed'>
//                   He has splendid 25 years of experience in Administration, Academics and Research (AAR) in NBA, NAAC, and ABET Accredited Engineering Colleges. He was continuously worked as a <strong className='text-blue-800'>Professor and Principal</strong> (Head of the Institution) for 14+ years since 2003.
//                 </p>
//               </div>

//               <div className='bg-white p-6 rounded-xl shadow-md border border-blue-100'>
//                 <h3 className='text-lg font-semibold text-blue-900 mb-3'>Impact & Results</h3>
//                 <p className='text-gray-700 leading-relaxed'>
//                   Enhanced the college overall result from <strong className='text-blue-800'>57% to 82%</strong> in Anna University Examinations. Improved college overall rank from <strong className='text-blue-800'>157th place to 20th place</strong> out of 584 Colleges in Anna University examinations.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


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
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-white shadow-sm'>
        <div className='grid lg:grid-cols-2 min-h-screen'>
          
          {/* Left Side - Image */}
          <div className='relative bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-12'>
            <div className='relative' data-aos="fade-right">
              {/* Main Image */}
              <div className='relative z-10'>
                <img 
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
                  alt='Dr. JaiGanesh Venu'
                  className='w-[500px] h-[600px] object-cover rounded-2xl shadow-2xl border-4 border-white'
                />
              </div>
              
              {/* Floating Elements */}
              <div className='absolute -top-6 -right-6 bg-slate-800 text-white p-4 rounded-xl shadow-lg z-20' data-aos="fade-down" data-aos-delay="300">
                <div className='text-center'>
                  <div className='text-2xl font-bold'>25+</div>
                  <div className='text-xs'>Years</div>
                </div>
              </div>

              <div className='absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 z-20' data-aos="fade-up" data-aos-delay="500">
                <div className='flex items-center space-x-2'>
                  <Award className='w-5 h-5 text-blue-700' />
                  <div>
                    <div className='text-sm font-semibold text-slate-800'>Excellence</div>
                    <div className='text-xs text-slate-600'>Award Winner</div>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className='absolute -top-8 -left-8 w-24 h-24 bg-slate-200 rounded-full opacity-30'></div>
              <div className='absolute -bottom-8 -right-8 w-32 h-32 border-4 border-slate-300 rounded-full opacity-40'></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className='bg-white p-12 flex flex-col justify-center'>
            <div className='max-w-2xl space-y-8'>
              
              {/* Header */}
              <div data-aos="fade-left">
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-1 bg-slate-700 mr-4'></div>
                  <span className='text-slate-700 font-medium text-lg'>ACADEMIC PORTFOLIO</span>
                </div>
                <h1 className='text-5xl font-light text-slate-800 mb-2'>
                  Dr. <span className="font-semibold">JaiGanesh <span className='text-blue-700'>Venu</span></span>
                </h1>
                <p className='text-xl text-slate-600 font-medium mb-2'>
                  Principal & Educational Leader
                </p>
                <p className='text-lg text-slate-500'>
                  <span className='font-medium'>M.E., MBA., Ph.D</span>
                </p>
              </div>

              {/* Description */}
              <div className='space-y-6' data-aos="fade-left" data-aos-delay="200">
                <p className='text-slate-700 text-lg leading-relaxed'>
                  Dedicated, resourceful and goal-driven professional educator with a solid commitment to the social 
                  and academic growth and development of every student with 25 years of experience in Teaching and Research.
                </p>
                
                <div className='bg-blue-50 border-l-4 border-blue-700 p-6 rounded-r-lg'>
                  <p className='text-slate-700 leading-relaxed'>
                    Distinguished academician and visionary leader with extensive experience in engineering education, 
                    academic administration, and applied research. Currently serving as Principal of Tagore Institute of Engineering and Technology.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-2 gap-4' data-aos="fade-up" data-aos-delay="400">
                {achievements.slice(0, 4).map((achievement, idx) => (
                  <div key={idx} className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg ${
                    idx === 0 ? 'bg-slate-800 text-white' : 
                    idx === 1 ? 'bg-white border-2 border-slate-200' : 
                    'bg-blue-50 border border-slate-200'
                  }`}>
                    <achievement.icon className={`w-6 h-6 mx-auto mb-2 ${
                      idx === 0 ? 'text-white' : 'text-slate-700'
                    }`} />
                    <div className={`text-2xl font-bold ${
                      idx === 0 ? 'text-white' : 'text-slate-800'
                    }`}>{achievement.value}</div>
                    <div className={`text-sm ${
                      idx === 0 ? 'text-slate-200' : 'text-slate-600'
                    }`}>{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className='flex space-x-4' data-aos="fade-up" data-aos-delay="600">
                <a href='#' className='p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                  <Facebook className='w-5 h-5' />
                </a>
                <a href='#' className='p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                  <Twitter className='w-5 h-5' />
                </a>
                <a href='#' className='p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                  <Instagram className='w-5 h-5' />
                </a>
                <a href='#' className='p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                  <Linkedin className='w-5 h-5' />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className='flex gap-4' data-aos="fade-up" data-aos-delay="800">
                <button className='px-8 py-3 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center space-x-2'>
                  <span>View Qualifications</span>
                  <ChevronRight className='w-4 h-4' />
                </button>
                <button className='px-8 py-3 border-2 border-slate-800 text-slate-800 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-colors'>
                  Contact Me
                </button>
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