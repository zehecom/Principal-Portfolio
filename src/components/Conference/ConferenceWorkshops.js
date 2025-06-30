// "use client"; 
// import { Card, CardHeader, CardBody, Divider, Chip, Button } from "@nextui-org/react";

// export default function ConferencesWorkshops() {
   
//   const conferences = [
//     {
//       title: "International Conference Papers",
//       description: "Published 45 research papers in conferences of repute, covering topics in Material Science, Eco-Friendly Welding Techniques, and Sustainable Technology.",
//       highlight: "High-impact presentations at prestigious institutions like NUS and NTU.",
//       icon: "📝",
//     },
//     {
//       title: "Sponsored National Seminars & Conferences",
//       description: "Successfully organized and conducted 5 national seminars and conferences, fostering academic collaboration and knowledge dissemination.",
//       highlight: "Funded by reputed organizations, including AICTE.",
//       icon: "🎤",
//     },
//     {
//       title: "International Research Engagements",
//       description: "Visited Bangkok, Thailand, Cambodia, Malaysia, and Singapore for research discussions and paper presentations, interacting with global experts.",
//       highlight: "Collaborated with professors at NUS and NTU.",
//       icon: "🌍",
//     },
//   ];

//   const timeline = [
//     {
//       year: "2019",
//       event: "Paper Presentation at NUS, Singapore",
//       description: "Presented research on Eco-Friendly Welding Techniques at an international conference.",
//     },
//     {
//       year: "2018",
//       event: "Research Discussion at NTU, Singapore",
//       description: "Engaged with technical experts on Sustainable Technology and Materials Science.",
//     },
//     {
//       year: "2017",
//       event: "Conference in Bangkok, Thailand",
//       description: "Delivered a keynote on Manufacturing Energy Management.",
//     },
//     {
//       year: "2016",
//       event: "Workshop in Malaysia",
//       description: "Conducted a workshop on Composite Materials and their applications.",
//     },
//   ];

//   const stats = [
//     { label: "Conference Papers", value: "45" },
//     { label: "Sponsored Events", value: "5" },
//     { label: "Countries Visited", value: "4" },
//     { label: "International Collaborations", value: "10+" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <Card className="shadow-sm border-b" radius="none">
//         <CardBody className="container mx-auto px-6 py-16">
//           <div className="text-center" data-aos="fade-up">
//             <div className="mb-8">
//               <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center shadow-lg">
//                 <div className="text-4xl font-bold text-white">DR</div>
//               </div>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
//               Dr. <span className="font-semibold">JaiGanesh <span className="text-blue-700">Venu</span></span>{" "}
//               <span className="text-xl font-medium">ME., MBA., Ph.D</span>
//             </h1>
//             <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Global Contributor to Conferences, Workshops, and Research Collaborations
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               {stats.map((stat, idx) => (
//                 <Card key={idx} className="p-6" data-aos="fade-up" data-aos-delay={idx * 100}>
//                   <CardBody className="text-center">
//                     <div className="text-3xl font-bold text-slate-700 mb-2">{stat.value}</div>
//                     <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
//                   </CardBody>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </CardBody>
//       </Card>

//       {/* Conferences & Workshops Section */}
//       <div className="container mx-auto px-6 py-16">
//         <div className="mb-16" data-aos="fade-up">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-light text-slate-800 mb-4">
//               Conferences & <span className="font-semibold text-blue-700">Workshops</span>
//             </h2>
//             <Divider className="w-24 h-1 bg-slate-700 mx-auto mb-6" />
//             <p className="text-lg text-slate-600 max-w-3xl mx-auto">
//               Extensive contributions to global academic conferences and workshops, advancing research in Material Science and Sustainable Technologies
//             </p>
//           </div>

//           <div className="space-y-6 max-w-5xl mx-auto">
//             {conferences.map((conf, idx) => (
//               <Card
//                 key={idx}
//                 className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
//                 data-aos="fade-up"
//                 data-aos-delay={idx * 150}
//               >
//                 <CardBody className="p-8">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
//                         {conf.icon}
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
//                         <div>
//                           <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
//                             {conf.title}
//                           </h3>
//                           <p className="text-slate-600 leading-relaxed">{conf.description}</p>
//                         </div>
//                         <Chip color="primary" variant="flat" className="mt-4 md:mt-0">
//                           {conf.highlight}
//                         </Chip>
//                       </div>
//                     </div>
//                   </div>
//                 </CardBody>
//                 <Divider className="h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 group-hover:from-slate-400 group-hover:via-slate-500 group-hover:to-slate-400 transition-all duration-300" />
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className="mb-16" data-aos="fade-up">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-light text-slate-800 mb-4">
//               Global Engagement <span className="font-semibold text-blue-700">Timeline</span>
//             </h2>
//             <Divider className="w-24 h-1 bg-slate-700 mx-auto mb-6" />
//           </div>
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" data-aos="fade-down"></div>
//               <div className="space-y-12">
//                 {timeline.map((event, idx) => (
//                   <div
//                     key={idx}
//                     className={`relative flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
//                   >
//                     <div
//                       className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"
//                       data-aos="fade-up"
//                       data-aos-delay={idx * 100}
//                     ></div>
//                     <Card
//                       className={`w-5/12 rounded-xl shadow-md border border-gray-100 ${idx % 2 === 0 ? "mr-auto" : "ml-auto"}`}
//                       data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
//                       data-aos-delay={idx * 100}
//                     >
//                       <CardBody className="p-6">
//                         <div className="text-sm text-slate-500 font-medium mb-2">{event.year}</div>
//                         <div className="text-lg font-semibold text-slate-800 mb-1">{event.event}</div>
//                         <div className="text-slate-600">{event.description}</div>
//                       </CardBody>
//                     </Card>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <Card className="text-center rounded-2xl shadow-sm border border-gray-100" data-aos="fade-up">
//           <CardBody className="p-8">
//             <p className="text-slate-600 mb-2">© 2025 Dr. Engineering Professional. All rights reserved.</p>
//             <p className="text-sm text-slate-500">Excellence in Engineering Education and Research</p>
//           </CardBody>
//         </Card>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
// If you're using Lucide icons from CDN or manually, include them in your HTML head

export default function ConferencesWorkshops() {
  const conferences = [
    {
      title: "International Conference Papers",
      description:
        "Published 45 research papers in conferences of repute, covering topics in Material Science, Eco-Friendly Welding Techniques, and Sustainable Technology.",
      highlight: "High-impact presentations at prestigious institutions like NUS and NTU.",
      icon: "📝",
    },
    {
      title: "Sponsored National Seminars & Conferences",
      description:
        "Successfully organized and conducted 5 national seminars and conferences, fostering academic collaboration and knowledge dissemination.",
      highlight: "Funded by reputed organizations, including AICTE.",
      icon: "🎤",
    },
    {
      title: "International Research Engagements",
      description:
        "Visited Bangkok, Thailand, Cambodia, Malaysia, and Singapore for research discussions and paper presentations, interacting with global experts.",
      highlight: "Collaborated with professors at NUS and NTU.",
      icon: "🌍",
    },
  ];

  const timeline = [
    {
      year: "2019",
      event: "Paper Presentation at NUS, Singapore",
      description:
        "Presented research on Eco-Friendly Welding Techniques at an international conference.",
    },
    {
      year: "2018",
      event: "Research Discussion at NTU, Singapore",
      description:
        "Engaged with technical experts on Sustainable Technology and Materials Science.",
    },
    {
      year: "2017",
      event: "Conference in Bangkok, Thailand",
      description: "Delivered a keynote on Manufacturing Energy Management.",
    },
    {
      year: "2016",
      event: "Workshop in Malaysia",
      description:
        "Conducted a workshop on Composite Materials and their applications.",
    },
  ];

  const stats = [
    { label: "Conference Papers", value: "45" },
    { label: "Sponsored Events", value: "5" },
    { label: "Countries Visited", value: "4" },
    { label: "International Collaborations", value: "10+" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-16 text-center">
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
            Global Contributor to Conferences, Workshops, and Research Collaborations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white shadow p-6 rounded-xl">
                <div className="text-3xl font-bold text-slate-700 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conferences */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            Conferences & <span className="font-semibold text-blue-700">Workshops</span>
          </h2>
          <div className="w-24 h-1 bg-slate-700 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Extensive contributions to global academic conferences and workshops, advancing research in Material Science and Sustainable Technologies
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {conferences.map((conf, idx) => (
            <div
              key={idx}
              className="group rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 p-8 bg-white"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:bg-slate-200 transition-colors duration-300">
                  {conf.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {conf.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-2">{conf.description}</p>
                  <div className="inline-block text-blue-700 text-sm font-medium bg-blue-100 px-3 py-1 rounded-full">
                    {conf.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-light text-slate-800 mb-4">
            Global Engagement <span className="font-semibold text-blue-700">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-slate-700 mx-auto mb-12" />

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200" />
            <div className="space-y-12">
              {timeline.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div
                    className={`w-5/12 p-6 bg-white rounded-xl shadow-md border border-gray-100 ${
                      idx % 2 === 0 ? "mr-auto" : "ml-auto"
                    }`}
                  >
                    <div className="text-sm text-slate-500 font-medium mb-2">{event.year}</div>
                    <div className="text-lg font-semibold text-slate-800 mb-1">{event.event}</div>
                    <div className="text-slate-600">{event.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
          <p className="text-slate-600 mb-2">
            © 2025 Dr. Engineering Professional. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Excellence in Engineering Education and Research
          </p>
        </div>
      </div>
    </div>
  );
}
