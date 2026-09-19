"use client";

import React from "react";
import Image from "next/image";
import { Scan, Box, Layers, Building, Compass } from "lucide-react";

export const SLAMRealityCaptureSection: React.FC = () => {
  const applications = [
    "Indoor + outdoor mapping",
    "Industrial plants + tunnels",
    "Buildings + as-built documentation",
  ];

  const deliverables = [
    "POINT CLOUD",
    "3D MESH",
    "3D MODEL",
    "FLOOR PLANS",
    "SECTIONS",
  ];

  return (
    <section 
      id="slam-reality" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background 3D Point-Cloud Image from PDF Page 7 */}
      <div className="absolute top-0 right-0 w-full lg:w-[50%] h-full pointer-events-none opacity-60 select-none hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/images/slam-reality.jpeg"
            alt="3D Laser Scanning SLAM Reality Capture Industrial Plant"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/40"></div>
          
          {/* Surveyor Tripod Target Marker */}
          <div className="absolute bottom-1/4 left-1/4 border border-[#E35B27]/40 rounded-full w-24 h-24 flex items-center justify-center animate-pulse pointer-events-none">
            <div className="w-2 h-2 rounded-full bg-[#E35B27]"></div>
            <span className="absolute -bottom-5 text-[9px] font-mono text-[#E35B27]">
              STATION_04
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              SLAM & 3D REALITY CAPTURE
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Capturing Complex <br />
            Environments in 3D
          </h2>

          {/* Copy */}
          <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
            Mobile mapping and reality capture for places where conventional surveying is slow, unsafe or incomplete.
          </p>

          {/* APPLICATIONS */}
          <div className="mt-12">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-[#E35B27] uppercase mb-4">
              APPLICATIONS
            </h3>
            <div className="space-y-2.5">
              {applications.map((app) => (
                <div 
                  key={app} 
                  className="flex items-center gap-3 p-3 bg-[#181B1E] border border-white/10 text-sm font-mono text-neutral-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERABLES */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <h3 className="text-xs font-mono tracking-[0.2em] font-bold text-[#E35B27] uppercase mb-4">
              DELIVERABLES
            </h3>
            <div className="p-4 bg-[#181B1E] border border-white/10">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-white font-medium">
                {deliverables.join(" / ")}
              </p>
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 7 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">07</span>
        </div>
      </div>
    </section>
  );
};
