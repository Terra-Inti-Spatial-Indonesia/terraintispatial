"use client";

import React from "react";
import Image from "next/image";
import { Box, Layers, Building, Eye, Globe2 } from "lucide-react";

export const CityModelingSection: React.FC = () => {
  const domains = [
    { title: "URBAN PLANNING", desc: "Zoning analysis, line-of-sight studies, skyline impact and shadow simulations." },
    { title: "ASSET MANAGEMENT", desc: "Spatial indexing, lifecycle monitoring, condition documentation, and geospatial auditing." },
    { title: "ENVIRONMENT MONITORING", desc: "Catchment modeling, erosion assessment, vegetation canopy health, and flood risk zones." },
  ];

  return (
    <section 
      id="city-modeling" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background Cityscape 3D spatial mesh visual from PDF Page 9 */}
      <div className="absolute top-0 right-0 w-full lg:w-[52%] h-full pointer-events-none opacity-50 select-none hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/city-spatial.jpeg"
            alt="3D City Modeling and Digital Twin Infrastructure"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/40"></div>
          
          {/* Subtle Wireframe City Grid HUD */}
          <div className="absolute bottom-1/3 left-1/3 border border-cyan-400/30 w-44 h-32 pointer-events-none">
            <span className="absolute top-1 left-2 text-[9px] font-mono text-cyan-300">
              LOD2_BUILDING_EXTRUSION
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              3D CITY & DIGITAL SPATIAL MODELING
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Building Digital <br />
            Representations of <br />
            the Real World
          </h2>

          {/* Sub-lines matching PDF Page 9 */}
          <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-neutral-300 font-semibold tracking-wider">
            <span className="px-3 py-1 bg-white/5 border border-white/10">3D CITY MODELING</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10">GIS</span>
            <span className="px-3 py-1 bg-white/5 border border-white/10">DIGITAL TWIN</span>
          </div>
          <div className="mt-2 text-xs font-mono tracking-wider text-neutral-400">
            INFRASTRUCTURE + TERRAIN MODELING
          </div>

          {/* Domains / Focus areas */}
          <div className="mt-12 space-y-4">
            {domains.map((domain) => (
              <div 
                key={domain.title} 
                className="p-5 bg-[#181B1E] border border-white/10 hover:border-[#E35B27]/50 transition-colors"
              >
                <h3 className="text-sm font-mono font-bold tracking-widest text-white uppercase flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E35B27]"></span>
                  {domain.title}
                </h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 9 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">09</span>
        </div>
      </div>
    </section>
  );
};
