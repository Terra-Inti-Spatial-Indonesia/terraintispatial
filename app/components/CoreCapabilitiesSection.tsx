"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Plane, 
  Map, 
  Cpu, 
  Scan, 
  Building2, 
  Box, 
  ArrowUpRight 
} from "lucide-react";

export const CoreCapabilitiesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const capabilities = [
    {
      num: "01",
      title: "Aerial Data Processing",
      subtitle: "LiDAR • photogrammetry • QA/QC",
      anchor: "#aerial-data",
      icon: Plane,
      description: "Rigorous trajectory calibration, strip adjustment, point-cloud classification and seamless orthomosaic generation.",
    },
    {
      num: "02",
      title: "Geospatial Mapping",
      subtitle: "Survey-to-GIS deliverables",
      anchor: "#geospatial-mapping",
      icon: Map,
      description: "Integrated UAV, LiDAR, GNSS, terrestrial surveys and GIS databases engineered for high accuracy and usability.",
    },
    {
      num: "03",
      title: "AI Detection & Classification",
      subtitle: "Automated feature intelligence",
      anchor: "#ai-detection",
      icon: Cpu,
      description: "Machine learning workflows for automated feature extraction, asset counting, vegetation analysis and change detection.",
    },
    {
      num: "04",
      title: "SLAM & 3D Reality Capture",
      subtitle: "Complex environments, captured",
      anchor: "#slam-reality",
      icon: Scan,
      description: "Mobile mapping and reality capture for tunnels, industrial facilities, and indoor spaces where GNSS is unavailable.",
    },
    {
      num: "05",
      title: "BIM & Scan-to-BIM",
      subtitle: "Reality to digital engineering",
      anchor: "#bim-scan",
      icon: Building2,
      description: "Converting dense point clouds into parametric, coordinated digital asset BIM models for lifecycle engineering.",
    },
    {
      num: "06",
      title: "3D City & Spatial Modeling",
      subtitle: "Terrain, infrastructure, cities",
      anchor: "#city-modeling",
      icon: Box,
      description: "Scalable digital representations of physical infrastructure, urban environments, and digital twin ecosystems.",
    },
  ];

  return (
    <section 
      id="capabilities" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background Graphic from PDF Page 3 */}
      <div className="absolute top-0 right-0 w-full lg:w-[48%] h-full pointer-events-none opacity-50 select-none hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/capabilities-terrain.jpeg"
            alt="Spatial Capabilities Landscape"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            One Spatial Ecosystem. <br />
            Multiple Possibilities.
          </h2>
        </div>

        {/* 6 Interactive Capability Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === idx;
            return (
              <a
                key={item.num}
                href={item.anchor}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group p-6 sm:p-8 bg-[#181B1E] border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#E35B27] bg-[#1E2226] shadow-xl translate-y-[-2px]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {/* Corner Crosshairs */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-600">+</span>
                <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-600">+</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-600">+</span>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-600">+</span>

                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xl font-mono font-bold text-[#E35B27]">
                      {item.num}
                    </span>
                    <div className={`p-2 rounded-xs border transition-colors ${
                      isHovered ? "bg-[#E35B27]/15 border-[#E35B27]/50 text-[#E35B27]" : "bg-white/5 border-white/10 text-neutral-400"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Subtitle from PDF */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#E35B27] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono tracking-wider text-neutral-400">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-xs text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-white transition-colors">
                  <span>EXPLORE SERVICE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E35B27] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Page Footer Marker matching PDF Page 3 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">03</span>
        </div>
      </div>
    </section>
  );
};
