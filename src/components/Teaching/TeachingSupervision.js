"use client";

export default function TeachingSupervision() {

  const teachingExperience = [
    {
      position: "Principal",
      institution: "Tagore Institute of Engineering and Technology",
      location: "Tamil Nadu, India",
      duration: "February 2025 - Present",
      description: [
        "Leading overall academic and administrative operations of the institution.",
        "Driving institutional growth through strategic planning, quality assurance, and accreditation processes (NAAC, NBA, IET, ABET).",
        "Mentoring faculty and students while fostering a research-driven academic environment.",
      ],
    },
    {
      position: "Professor",
      institution: "Bharath Institute of Science and Technology",
      location: "Chennai",
      duration: "November 2021 - November 2024",
      description: [
        "Engaged in teaching core subjects in Mechanical Engineering.",
        "Contributed to curriculum development, research supervision, and publication in indexed journals.",
        "Coordinated departmental activities, faculty mentoring, and research collaborations.",
      ],
    },
    {
      position: "Professor & Dean - Mechanical",
      institution: "Mangalam College of Engineering",
      location: "Ettumanoor, Kerala",
      duration: "January 2019 - June 2019",
      description: [
        "Headed the Mechanical Engineering department with focus on R&D initiatives.",
        "Promoted academic excellence and innovation in teaching methodologies.",
      ],
    },
    {
      position: "Professor & Dean - Mechanical",
      institution: "Genba Sopanrao Moze College of Engineering",
      location: "Pune, Maharashtra",
      duration: "June 2018 - January 2019",
      description: [
        "Oversaw academic operations and faculty development in the Mechanical department.",
        "Strengthened industry-academia collaboration and guided project-based learning.",
      ],
    },
    {
      position: "Professor",
      institution: "S.A. Engineering College (Autonomous)",
      location: "Chennai",
      duration: "November 2011 - April 2018",
      description: [
        "Led research and consultancy initiatives in the department.",
        "Played a key role in applying for R&D funding, publishing scholarly papers, and enhancing student research engagement.",
      ],
    },
  ];

  const coursesTaught = {
    postgraduate: [
      "Advanced Total Quality Management",
      "Concurrent Management",
      "Maintenance Management",
      "Metrology and Non-Destructive Testing",
    ],
    undergraduate: [
      "Machine Tools and CNC Machines",
      "Manufacturing Technology",
      "Quality Control and Reliability Engineering",
      "Metal Forming Process",
      "Computer Integrated Manufacturing",
      "Total Quality Management",
      "Engineering Economics and Cost Analysis",
      "Unconventional Machining Processes",
      "Design of Jigs, Fixtures and Press Tools",
      "Applied Hydraulics and Pneumatics",
      "Process Planning and Cost Estimation",
      "Operations Research",
      "Welding Technology",
    ],
  };

  const projectsGuided = [
    {
      level: "Undergraduate (B.Tech)",
      projects: [
        { title: "Parametric optimization of ad5754 using friction stir welding", year: 2015 },
        { title: "Friction stir welding process parameter optimization of 6061 AL Alloy", year: 2015 },
        { title: "Friction stir welding of Magnesium alloy 91E alloy", year: 2015 },
        { title: "Investigation of Microstructure and Mechanical Properties of Friction Stir Welded", year: 2015 },
        { title: "Analyzing the Root Cause for Frequent Failure of Centrifugal Pump Shaft at Cooling Tower", year: 2015 },
        { title: "Optimization of Process Parameters and Micro Structural Analysis of AA5052 Aluminum Alloy", year: 2015 },
        { title: "Design and Fabrication of Pneumatic Panel", year: 2015 },
        { title: "Study of Mechanical Properties in Stainless Steel of Grade 316 Using TIG Welding", year: 2015 },
        { title: "Design and Fabrication of Chuck for Friction Stir Welding Machine", year: 2015 },
        { title: "Design and Fabrication of Pneumatic Piercing Machine", year: 2015 },
        { title: "Optimization of Process Parameters of FSW of 2014 Al Alloy", year: 2015 },
        { title: "Optimization of Process Parameter for Dissimilar Alloys (AA 5083 & 5456) Using FSW", year: 2015 },
        { title: "Analysis of Process Parameters in Friction Stir Welding for 6011 Aluminium Alloy", year: 2014 },
        { title: "Implementation of Solar Energy in E-Bike", year: 2014 },
        { title: "Optimization of Friction Stir Welding in 6033-T6 and Magnesium Alloys", year: 2014 },
        { title: "Experimental Investigation on Improved Inclined Solar Desalination for Domestic", year: 2014 },
        { title: "Experimental Investigation of FSW on ABS Thermo Plastics Plates", year: 2013 },
        { title: "Optimization of Process Parameters on FSW From Acrylic Plastics", year: 2013 },
        { title: "Optimization on Shaft Grinding Machine", year: 2012 },
        { title: "Modification and Design of Fixture for Main Shaft Pressing Machine", year: 2012 },
        { title: "Optimization of WEDM Process Parameters Using Desirability and Factor Analysis", year: 2008 },
        { title: "Multi-response Optimization on Face Milling Process Using Al-Si Composites", year: 2007 },
        { title: "Multi-response Optimization in Process Parameters of B.G. Collar Component Using Taguchi Techniques", year: 2007 },
        { title: "Optimization of Chip Thickness in Shaper Using Taguchi Technique", year: 2006 },
        { title: "Application to DOF to Reduce the Number of Rework in a Steering Gear Assembly Due to Ball Struck", year: 2006 },
        { title: "Selling Price Decision Support System for a Job Order Based Manufacturing Company", year: 2005 },
        { title: "Improvement on Manufacturing Barrels of Diesel Pumps", year: 2005 },
      ],
    },
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
              Dr. <span className="font-semibold">JaiGanesh <span className="text-blue-700">Venu</span></span>{" "}
              <span className="text-xl font-medium">ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dedicated Educator and Mentor in Mechanical Engineering
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl font-bold text-slate-700 mb-2">25+</div>
                <div className="text-sm text-slate-500 font-medium">Years of Teaching</div>
              </div>
              <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl font-bold text-slate-700 mb-2">13</div>
                <div className="text-sm text-slate-500 font-medium">Undergraduate Courses</div>
              </div>
              <div className="text-center p-6" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl font-bold text-slate-700 mb-2">4</div>
                <div className="text-sm text-slate-500 font-medium">Postgraduate Courses</div>
              </div>
              <div className="text-center p-6" data-aos="fade-up" data-aos-delay="400">
                <div className="text-3xl font-bold text-slate-700 mb-2">27</div>
                <div className="text-sm text-slate-500 font-medium">Projects Guided</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Teaching Experience */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Teaching <span className="font-semibold text-blue-700">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Over 25 years of leadership and teaching in Mechanical Engineering across premier institutions
            </p>
          </div>
          <div className="space-y-6 max-w-5xl mx-auto">
            {teachingExperience.map((exp, idx) => (
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
                        📚
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-lg text-slate-600 font-medium mb-1">{exp.institution}</p>
                          <p className="text-slate-500 mb-2">{exp.location}</p>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-block bg-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside text-slate-600 leading-relaxed">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
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

        {/* Courses Taught */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Courses <span className="font-semibold text-blue-700">Taught</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Comprehensive curriculum spanning postgraduate and undergraduate levels in Mechanical Engineering
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Postgraduate Level</h3>
              <ul className="list-disc list-inside text-slate-600">
                {coursesTaught.postgraduate.map((course, idx) => (
                  <li key={idx} className="mb-2">{course}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Undergraduate Level</h3>
              <ul className="list-disc list-inside text-slate-600">
                {coursesTaught.undergraduate.map((course, idx) => (
                  <li key={idx} className="mb-2">{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Guided */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Projects <span className="font-semibold text-blue-700">Guided</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Supervised innovative projects in Mechanical Engineering, fostering research and practical application
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {projectsGuided.map((level, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4" data-aos="fade-up">{level.level}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {level.projects.map((project, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                    >
                      <div className="text-lg font-medium text-slate-700">{project.title}</div>
                      <div className="text-sm text-slate-500 mt-2">Year: {project.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100" data-aos="fade-up">
          <p className="text-slate-600 mb-2">© 2025 Dr. JaiGanesh Venu. All rights reserved.</p>
          <p className="text-sm text-slate-500">Excellence in Engineering Education and Research</p>
        </div>
      </div>
    </div>
  );
}