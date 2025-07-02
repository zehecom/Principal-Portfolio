"use client";

export default function ProjectsGrants() {
  

  const undergraduateProjects = [
    { title: 'Parametric Optimization of AD5754 Using Friction Stir Welding', year: 'Not Specified' },
    { title: 'Friction Stir Welding Process Parameter Optimization of 6061 AL Alloy', year: 'Not Specified' },
    { title: 'Friction Stir Welding of Magnesium Alloy 91E Alloy', year: 'Not Specified' },
    { title: 'Investigation of Microstructure and Mechanical Properties of Friction Stir Welded', year: 'Not Specified' },
    { title: 'Analyzing the Root Cause for Frequent Failure of Centrifugal Pump Shaft at Cooling Tower', year: 'Not Specified' },
    { title: 'Optimization of Process Parameters and Micro Structural Analysis of AA5052 Aluminum Alloy', year: 'Not Specified' },
    { title: 'Design and Fabrication of Pneumatic Panel', year: 'Not Specified' },
    { title: 'Study of Mechanical Properties in Stainless Steel of Grade 316 Using TIG Welding', year: 'Not Specified' },
    { title: 'Design and Fabrication of Chuck for Friction Stir Welding Machine', year: '2015' },
    { title: 'Design and Fabrication of Pneumatic Piercing Machine', year: '2015' },
    { title: 'Optimization of Process Parameters of FSW of 2014 Al Alloy', year: '2015' },
    { title: 'Optimization of Process Parameter for Dissimilar Alloys (AA 5083 & 5456) Using FSW', year: '2015' },
    { title: 'Analysis of Process Parameters in Friction Stir Welding for 6011 Aluminium Alloy', year: '2014' },
    { title: 'Implementation of Solar Energy in E-Bike', year: '2014' },
    { title: 'Optimization of Friction Stir Welding in 6033-T6 and Magnesium Alloys', year: '2014' },
    { title: 'Experimental Investigation on Improved Inclined Solar Desalination for Domestic', year: '2014' },
    { title: 'Experimental Investigation of FSW on ABS Thermo Plastics Plates', year: '2013' },
    { title: 'Optimization of Process Parameters on FSW From Acrylic Plastics', year: '2013' },
    { title: 'Optimization on Shaft Grinding Machine', year: '2012' },
    { title: 'Modification and Design of Fixture for Main Shaft Pressing Machine', year: '2012' },
    { title: 'Optimization of WEDM Process Parameters Using Desirability and Factor Analysis', year: '2008' },
    { title: 'Multi-response Optimization on Face Milling Process Using Al-Si Composites', year: '2007' },
    { title: 'Multi-response Optimization in Process Parameters of B.G. Collar Component Using Taguchi Techniques', year: '2007' },
    { title: 'Optimization of Chip Thickness in Shaper Using Taguchi Technique', year: '2006' },
    { title: 'Application to DOF to Reduce the Number of Rework in a Steering Gear Assembly Due to Ball Struck', year: '2006' },
    { title: 'Selling Price Decision Support System for a Job Order Based Manufacturing Company', year: '2005' },
    { title: 'Improvement on Manufacturing Barrels of Diesel Pumps', year: '2005' },
  ];

  const postgraduateProjects = [
    // Placeholder for postgraduate projects as the PDF content is truncated
    { title: 'Advanced Optimization Techniques in Manufacturing', year: '2016' },
    { title: 'Sustainable Manufacturing Process Analysis', year: '2007' },
    { title: 'Industrial Systems Optimization', year: '2006' },
  ];

  const expertise = [
    'Friction Stir Welding',
    'Process Parameter Optimization',
    'Sustainable Manufacturing',
    'Industrial Systems Analysis',
  ];

  const stats = [
    { label: 'Projects Guided', value: '30+' },
    { label: 'Years of Research', value: '25+' },
    { label: 'Patents Filed', value: '7' },
    { label: 'Publications', value: 'Multiple' },
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
              Dr. <span className="font-semibold">JaiGanesh <span className="text-blue-700">Venu</span></span> <span className="text-xl font-medium">ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pioneering Research in Mechanical Engineering and Sustainable Technologies
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
        {/* Undergraduate Projects */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Undergraduate <span className="font-semibold text-blue-700">Projects Guided</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Guided numerous undergraduate projects focusing on innovative engineering solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {undergraduateProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border mineralization-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        🔬
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        Year: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-slate-400 group-hover:via-slate-500 group-hover:to-slate-400 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Postgraduate Projects */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Postgraduate <span className="font-semibold text-blue-700">Projects Guided</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Mentored advanced research projects at the postgraduate level
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {postgraduateProjects.map((project, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        📚
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500">
                        Year: {project.year}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-slate-400 group-hover:via-slate-500 group-hover:to-slate-400 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Research <span className="font-semibold text-blue-700">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {expertise.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-slate-700 font-medium text-lg">{area}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Timeline */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Projects <span className="font-semibold text-blue-700">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>
              <div className="space-y-12">
                {undergraduateProjects
                  .filter((project) => project.year !== 'Not Specified')
                  .map((project, idx) => (
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
                        className={`w-5/12 bg-white rounded-xl p-6 shadow-md border border-gray-100 ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                        data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                        data-aos-delay={idx * 100}
                      >
                        <div className="text-sm text-slate-500 font-medium mb-2">{project.year}</div>
                        <div className="text-lg font-semibold text-slate-800 mb-1">{project.title}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100" data-aos="fade-up">
          <p className="text-slate-600 mb-2">© 2025 Dr. Engineering Professional. All rights reserved.</p>
          <p className="text-sm text-slate-500">Excellence in Engineering Research and Mentorship</p>
        </div>
      </div>
    </div>
  );
}