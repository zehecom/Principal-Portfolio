"use client";
import React from "react";

export default function ResearchPage() {
  const researchFocus = [
    "Materials Science and Characterization",
    "Eco-Friendly Welding Techniques",
    "Composite Materials",
    "Friction Stir Welding",
    "Sustainable Technology and Manufacturing",
    "Marketing Strategy & Academic Administration"
  ];

  const publications = [
    {
      title: "Composites made from Tamarindus Indica with epoxy and bisphenol resin",
      journal: "Journal of Vehicle Structures and Systems, 2020",
    },
    {
      title: "Investigation of Mechanical Properties of Morinda citrifolia composites",
      journal: "International Journal of Recent Technology and Engineering, 2019",
    },
    {
      title: "Friction Stir Welding: Process Parameters and Modeling",
      journal: "Advanced Engineering Research and Applications, 2017",
    }
    // Add more as needed...
  ];

  const patents = [
    "Eco-Friendly Hybrid Transport Device (2016)",
    "IOT Based Solar Drainage Cleaning Device (2017)",
    "Smart Solar Walkway for Energy Generation (2019)",
  ];

  const projects = [
    {
      title: "Development of Eco-Friendly High Strength Friction Stir Welding",
      agency: "AICTE RPS",
      cost: "₹13 Lakhs",
      status: "Completed (2012–2014)"
    },
    {
      title: "Nanofluids Characterization and Applications",
      agency: "CSIR",
      cost: "₹20,000",
      status: "Completed (2012)"
    }
    // Add more if needed
  ];

  const roles = [
    "Editorial Board – JAMES, Physics Journal",
    "Reviewer – Elsevier (Materials Design, RSER, Environmental Progress)",
    "Reviewer – ICTACT Journal on Soft Computing"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-light text-slate-800 mb-4">
            Research <span className="font-semibold text-blue-700">Profile</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Advancing innovation through interdisciplinary research and impactful publications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 space-y-24">
        {/* Research Focus */}
        <section>
          <h2 className="text-4xl text-center font-light text-slate-800 mb-6">
            Research <span className="text-blue-700 font-semibold">Focus</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {researchFocus.map((topic, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border text-center">
                <p className="text-slate-700 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2 className="text-4xl text-center font-light text-slate-800 mb-6">
            Notable <span className="text-blue-700 font-semibold">Publications</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {publications.map((pub, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border">
                <p className="text-slate-800 font-semibold">{pub.title}</p>
                <p className="text-slate-500 text-sm">{pub.journal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Patents */}
        <section>
          <h2 className="text-4xl text-center font-light text-slate-800 mb-6">
            Registered <span className="text-blue-700 font-semibold">Patents</span>
          </h2>
          <ul className="list-disc pl-8 max-w-3xl mx-auto text-slate-700 space-y-2">
            {patents.map((pat, idx) => (
              <li key={idx}>{pat}</li>
            ))}
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-4xl text-center font-light text-slate-800 mb-6">
            Major <span className="text-blue-700 font-semibold">Research Projects</span>
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow border">
                <p className="text-xl font-medium text-slate-800">{proj.title}</p>
                <p className="text-slate-600 text-sm">
                  <span className="font-medium">Agency:</span> {proj.agency} | <span className="font-medium">Cost:</span> {proj.cost} | <span className="font-medium">Status:</span> {proj.status}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviewer Roles */}
        <section>
          <h2 className="text-4xl text-center font-light text-slate-800 mb-6">
            Editorial & <span className="text-blue-700 font-semibold">Reviewer Roles</span>
          </h2>
          <ul className="list-disc pl-8 max-w-3xl mx-auto text-slate-700 space-y-2">
            {roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-24">
        <p className="text-slate-600 mb-2">
          &copy; 2025 Dr. JaiGanesh Venu. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">
          Advancing Engineering Research and Innovation
        </p>
      </div>
    </div>
  );
}
