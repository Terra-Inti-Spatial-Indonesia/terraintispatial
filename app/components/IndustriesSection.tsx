"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const industries = [
    { num: "01", name: "Mining & Natural Resources", focus: "Pit monitoring, stockpile volumes, haul road geometry & highwall stability" },
    { num: "02", name: "Infrastructure", focus: "Corridor mapping for toll roads, railways, bridges & utility easements" },
    { num: "03", name: "Construction & Engineering", focus: "Site topographic baselines, earthworks tracking & as-built structural QA" },
    { num: "04", name: "Urban Development", focus: "Master planning, cadastral validation, 3D city models & zoning analytics" },
    { num: "05", name: "Energy & Utilities", focus: "Transmission line clearance, pipeline corridor routing & substation scanning" },
    { num: "06", name: "Environment & Forestry", focus: "Canopy height models, biomass estimation, catchment & watershed analysis" },
    { num: "07", name: "Government & Public Sector", focus: "National spatial data infrastructure, regional GIS & hazard risk modeling" },
  ];

  return (
    <section 
      id="industries" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background Rail / Mining Corridor Image from PDF Page 11 */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <Image
          src="/images/industries-corridor.jpeg"
          alt="Infrastructure Rail Corridor"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/85 to-[#111315]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Spatial Intelligence <br />
            Across Industries
          </h2>
        </div>

        {/* 7 Industries in 2-Column Editorial Grid matching PDF Page 11 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {industries.map((ind) => (
            <div
              key={ind.num}
              className="group p-5 bg-[#181B1E]/70 hover:bg-[#1E2226] border border-white/10 hover:border-[#E35B27]/60 transition-all duration-200 flex items-start gap-5"
            >
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#E35B27] flex-shrink-0">
                {ind.num}
              </span>

              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#E35B27] transition-colors">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-xs text-neutral-400 font-mono leading-relaxed">
                  {ind.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Page Footer Marker matching PDF Page 11 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">11</span>
        </div>
      </div>
    </section>
  );
};
