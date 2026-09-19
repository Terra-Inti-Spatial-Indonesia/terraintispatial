"use client";

import React from "react";
import Image from "next/image";

export const ProjectPortfolioSection: React.FC = () => {
  const projects = [
    {
      num: "01",
      title: "AERIAL LiDAR DATA PROCESSING",
      image: "/images/project-lidar.jpeg",
      alt: "Aerial LiDAR Corridor and Terrain Processing",
      scope: "corridor + terrain processing",
      technology: "LiDAR / GNSS / QA",
      deliverables: "DTM, contours, point cloud",
    },
    {
      num: "02",
      title: "AI-BASED SPATIAL DETECTION",
      image: "/images/project-ai.jpeg",
      alt: "AI-Based Automated Feature Extraction",
      scope: "automated feature extraction",
      technology: "imagery / ML / GIS",
      deliverables: "vectors, classes, change map",
    },
    {
      num: "03",
      title: "3D REALITY CAPTURE",
      image: "/images/project-slam.jpeg",
      alt: "Industrial As-Built SLAM Reality Capture",
      scope: "industrial as-built capture",
      technology: "SLAM / laser scanning",
      deliverables: "point cloud, mesh, sections",
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              PROJECT PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Selected Spatial <br />
            Technology Applications
          </h2>
        </div>

        {/* 3 Project Cards matching PDF Page 13 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.num}
              className="group bg-[#181B1E] border border-white/10 hover:border-[#E35B27]/60 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={proj.image}
                  alt={proj.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181B1E] via-transparent to-transparent opacity-80"></div>
                <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 border border-white/20 text-[10px] font-mono text-neutral-300">
                  REF // APP_0{proj.num}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-mono font-bold tracking-wider text-[#E35B27] uppercase mb-4">
                    {proj.num} {proj.title}
                  </h3>

                  <div className="space-y-2 text-xs font-mono text-neutral-300">
                    <div>
                      <span className="text-neutral-500">Scope: </span>
                      <span className="text-neutral-200">{proj.scope}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500">Technology: </span>
                      <span className="text-neutral-200">{proj.technology}</span>
                    </div>

                    <div>
                      <span className="text-neutral-500">Deliverables: </span>
                      <span className="text-neutral-200">{proj.deliverables}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                  <span>TERRA INTI EXECUTION</span>
                  <span className="text-[#10B981]">VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page Footer Marker matching PDF Page 13 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">13</span>
        </div>
      </div>
    </section>
  );
};
