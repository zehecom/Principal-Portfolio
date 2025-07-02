"use client" 

export default function Patents() { 

  const patents = [
    {
      title: 'Eco-Friendly Friction Stir Welding Technique',
      patentNumber: 'IN202141XXXXXX',
      status: 'Published',
      filingDate: '2020-03-15',
      description: 'A novel friction stir welding method designed to minimize environmental impact while enhancing weld strength in dissimilar magnesium alloys.',
      icon: '🔩'
    },
    {
      title: 'Sustainable Composite Material Fabrication',
      patentNumber: 'IN202142XXXXXX',
      status: 'Published',
      filingDate: '2021-06-22',
      description: 'An innovative process for fabricating eco-friendly composite materials with enhanced mechanical properties for industrial applications.',
      icon: '🛠️'
    },
    {
      title: 'Energy-Efficient Manufacturing Process',
      patentNumber: 'IN202143XXXXXX',
      status: 'Filed',
      filingDate: '2022-09-10',
      description: 'A method to optimize energy consumption in manufacturing processes, focusing on sustainable industrial operations.',
      icon: '⚡'
    },
    {
      title: 'Advanced Material Joining Technique',
      patentNumber: 'IN202144XXXXXX',
      status: 'Filed',
      filingDate: '2023-01-25',
      description: 'A technique for joining advanced materials like aluminium and composites, improving durability and performance.',
      icon: '🔗'
    },
    {
      title: 'Polymer-Based Composite Reinforcement',
      patentNumber: 'IN202145XXXXXX',
      status: 'Filed',
      filingDate: '2023-04-12',
      description: 'A reinforcement method for polymer composites to enhance structural integrity in high-stress applications.',
      icon: '🧪'
    },
    {
      title: 'Optimized Industrial Cooling System',
      patentNumber: 'IN202146XXXXXX',
      status: 'Filed',
      filingDate: '2023-08-30',
      description: 'An energy-efficient cooling system designed for industrial machinery, reducing thermal stress and operational costs.',
      icon: '❄️'
    },
    {
      title: 'Smart Manufacturing Energy Management',
      patentNumber: 'IN202147XXXXXX',
      status: 'Filed',
      filingDate: '2024-02-18',
      description: 'A smart system for real-time energy management in manufacturing, leveraging IoT for sustainability.',
      icon: '📡'
    },
  ];

  const stats = [
    { label: 'Patents Filed', value: '7' },
    { label: 'Patents Published', value: '2' },
    { label: 'Years of Innovation', value: '5+' },
    { label: 'Research Areas Covered', value: '4' }
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
              Dr. <span className="font-semibold">JaiGanesh <span className='text-blue-700'>Venu</span></span> <span className='text-xl font-medium'>ME., MBA., Ph.D</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Innovator in Mechanical Engineering and Sustainable Technologies
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
        {/* Patents Section */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Patent <span className="font-semibold text-blue-700">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pioneering innovations in eco-friendly welding, sustainable composites, and energy-efficient manufacturing
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {patents.map((patent, idx) => (
              <div
                key={idx}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 `}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                        {patent.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                            {patent.title}
                          </h3>
                          <p className="text-lg text-slate-600 font-medium mb-1">
                            Patent Number: {patent.patentNumber}
                          </p>
                          <p className="text-slate-500 mb-2">
                            Filing Date: {patent.filingDate}
                          </p>
                        </div>
                        <div className="md:text-right">
                          <span className="inline-block bg-blue-50 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                            {patent.status}
                          </span>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {patent.description}
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

        {/* Timeline Visual */}
        <div className="mb-16" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-800 mb-4">
              Patent <span className="font-semibold text-blue-700">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-slate-700 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>

              <div className="space-y-12">
                {patents.map((patent, idx) => (
                  <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline dot */}
                    <div data-aos="fade-up" data-aos-delay={idx * 100} className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`w-5/12 bg-white rounded-xl p-6 shadow-md border border-gray-100 ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                      data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'} data-aos-delay={idx * 100}>
                      <div className="text-sm text-slate-500 font-medium mb-2">{patent.filingDate}</div>
                      <div className="text-lg font-semibold text-slate-800 mb-1">{patent.title}</div>
                      <div className="text-slate-600">Patent Number: {patent.patentNumber}</div>
                      <div className="text-sm text-slate-500 mt-2">{patent.status}</div>
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
            © 2025 Dr. Engineering Professional. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Innovating for a Sustainable Future
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