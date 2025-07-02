'use client'

const About = () => {

  const highlights = [
    { icon: "🎓", title: "Academic Excellence", description: "25+ years in engineering education and research" },
    { icon: "🔬", title: "Research Pioneer", description: "Expertise in Materials Science & Friction Stir Welding" },
    { icon: "🏛️", title: "Leadership", description: "Principal at Tagore Institute of Engineering & Technology" },
    { icon: "🌟", title: "Recognition", description: "Multiple awards and professional achievements" }
  ];

  const expertise = [
    "Materials Science & Characterization",
    "Friction Stir Welding Technologies",
    "Eco-Friendly Welding Techniques",
    "Composite Materials Research",
    "Industrial Optimization",
    "Academic Administration",
    "Curriculum Development",
    "Strategic Planning"
  ];

  const researchAreas = [
    "Material Science and Materials Joining",
    "Surface Characterization Techniques",
    "Sustainable Manufacturing Technology",
    "Composite Materials and Polymers",
    "Evolutionary Optimization",
    "Manufacturing Energy Management"
  ];

  const qualifications = [
    {
      degree: "Ph.D.",
      field: "Mechanical Engineering",
      institution: "Anna University, Chennai",
      duration: "2008-2012",
      level: "Doctoral",
      icon: "🎓",
      description: "Advanced research in Materials Science with focus on welding technologies and surface characterization."
    },
    {
      degree: "M.Tech",
      field: "Production Engineering",
      institution: "Bharath University, Chennai", 
      duration: "2005-2007",
      level: "Masters",
      icon: "⚙️",
      description: "Specialized in production systems, manufacturing processes, and industrial optimization techniques."
    },
    {
      degree: "B.E.",
      field: "Mechanical Engineering",
      institution: "Government College of Engineering, Salem",
      duration: "2001-2005",
      level: "Bachelor's",
      icon: "🔧",
      description: "Foundation in mechanical engineering principles, design, and manufacturing systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section - Keeping as original */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
              About <span className="font-semibold text-blue-700">Dr. JaiGanesh</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Distinguished academician, visionary leader, and interdisciplinary researcher with over 25 years of extensive experience in engineering education, academic administration, and applied research.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Summary - Modern Card Design */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-12 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Professional Summary</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2 space-y-6 text-slate-700 leading-relaxed">
                  <p className="text-lg">
                    Dr. JaiGanesh Venu is a distinguished academician, visionary leader, and interdisciplinary researcher currently serving as the Principal of Tagore Institute of Engineering and Technology, where he plays a pivotal role in steering the institution toward academic excellence, student empowerment, and research innovation.
                  </p>
                  <p>
                    Throughout his illustrious career, Dr. Venu has held several key academic and administrative positions, including Professor of Mechanical Engineering at Bharath Institute of Higher Education and Research, Head of Department at G.S. Moze College of Engineering, Pune, and Research & Development Head at SA Engineering College, Chennai.
                  </p>
                  <p>
                    A prolific researcher, Dr. Venu has published widely in both engineering and management domains. His research interests span mechanical systems, industrial optimization, and marketing strategy, emphasizing interdisciplinary application and real-world impact.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <div className="text-6xl">👨‍🎓</div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      25+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights - Modern Grid */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Professional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Key achievements and milestones that define excellence in academic leadership
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/30 hover:scale-105"
                // onMouseEnter={() => setActiveCard(idx)}
                // onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Qualifications - Modern Timeline */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive academic journey spanning multiple disciplines and prestigious institutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>

              <div className="space-y-16">
                {qualifications.map((qual, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 ${idx % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center text-2xl mr-4">
                            {qual.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{qual.level}</div>
                            <div className="text-sm text-slate-500">{qual.duration}</div>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{qual.degree}</h3>
                        <p className="text-lg text-slate-600 font-medium mb-2">{qual.field}</p>
                        <p className="text-slate-500 mb-4">{qual.institution}</p>
                        <p className="text-slate-600 leading-relaxed text-sm">{qual.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Areas - Modern Cards */}
      <div className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Core Expertise */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Core Expertise</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 p-8">
                  <div className="grid gap-4">
                    {expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl hover:from-blue-100/50 hover:to-purple-100/50 transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-slate-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Research Areas */}
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Research Areas</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 p-8">
                  <div className="grid gap-4">
                    {researchAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center p-4 bg-gradient-to-r from-purple-50/50 to-blue-50/50 rounded-xl hover:from-purple-100/50 hover:to-blue-100/50 transition-all duration-300">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                        <span className="text-slate-700 font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Objectives - Modern Layout */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Vision */}
              <div>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-12 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      🔮
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">Vision</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      "Lead transformative changes in higher education through academic innovation and excellence",
                      "Foster a student-centric learning environment promoting critical thinking and lifelong learning",
                      "Bridge the gap between academia and industry through interdisciplinary research",
                      "Position institutions as centers of excellence at national and global levels"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div>
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl p-12 h-full">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                      🎯
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800">Objectives</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      "Apply 25+ years of experience toward enhancing institutional effectiveness",
                      "Promote research-driven teaching methodologies aligned with industry needs",
                      "Mentor faculty and students in achieving professional growth",
                      "Strengthen partnerships between educational institutions and industry"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Philosophy - Modern Quote Design */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <div className="absolute top-0 left-0 text-8xl text-blue-200 font-serif leading-none">"</div>
              <div className="absolute bottom-0 right-0 text-8xl text-purple-200 font-serif leading-none">"</div>
              <div className="relative z-10 py-16">
                <h3 className="text-3xl font-bold text-slate-800 mb-8">Professional Philosophy</h3>
                <p className="text-2xl text-slate-700 leading-relaxed font-light italic max-w-4xl mx-auto">
                  With a deep passion for education, innovation, and institutional growth, Dr. JaiGanesh Venu continues to inspire future engineers, foster academic collaborations, and lead with integrity, vision, and purpose. His contributions have left a lasting impact on students, faculty, and the broader academic community.
                </p>
                <div className="mt-8">
                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;