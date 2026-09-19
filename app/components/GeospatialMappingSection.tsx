"use client";

import React from "react";
import Image from "next/image";
import { Layers, MapPin, Database, Compass, Globe } from "lucide-react";

export const GeospatialMappingSection: React.FC = () => {
  const services = [
    "Topographic",
    "UAV",
    "LiDAR",
    "Bathymetric",
    "Asset mapping",
    "Corridor",
    "GIS database",
  ];

  const deliverablesLine1 = ["ORTHOMOSAIC", "CONTOURS", "DTM", "DSM", "DEM"];
  const deliverablesLine2 = ["POINT CLOUDS", "3D MODELS", "GIS DATABASE"];

  return (
    <section 
      id="geospatial-mapping" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background High-Res Orthophoto Quarry visual from PDF Page 5 */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none opacity-50 select-none hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/geospatial-quarry.jpeg"
            alt="Nadir Aerial Quarry Mapping"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/40"></div>
          
          {/* Subtle Technical GIS Reticle HUD */}
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full w-52 h-52 pointer-events-none">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#E35B27]"></div>
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/50">
              CONTOUR INTERVAL: 0.5M
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              GEOSPATIAL MAPPING
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Mapping the <br />
            Physical World
          </h2>

          {/* Copy */}
          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Integrated UAV, LiDAR, photogrammetry, GNSS, terrestrial survey and GIS workflows—engineered around accuracy and usability.
          </p>

          {/* SERVICES section matching PDF Page 5 */}
          <div className="mt-12">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-[#E35B27] uppercase mb-4">
              SERVICES
            </h3>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {services.map((service, index) => (
                <div 
                  key={service} 
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#181B1E] border border-white/10 text-xs font-mono text-neutral-200 hover:border-[#E35B27] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-500"></span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERABLES section matching PDF Page 5 */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-[#E35B27] uppercase mb-4">
              DELIVERABLES
            </h3>
            
            <div className="space-y-3">
              <div className="p-3 bg-[#181B1E]/80 border border-white/10">
                <p className="text-xs sm:text-sm font-mono tracking-wider text-white font-medium">
                  {deliverablesLine1.join(" / ")}
                </p>
              </div>

              <div className="p-3 bg-[#181B1E]/80 border border-white/10">
                <p className="text-xs sm:text-sm font-mono tracking-wider text-white font-medium">
                  {deliverablesLine2.join(" / ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 5 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">05</span>
        </div>
      </div>
    </section>
  );
};
