"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass, Layers, ShieldCheck, Cpu } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-between bg-[#111315] text-[#F5F5F7] overflow-hidden pt-28 pb-12 border-b border-white/10"
    >
      {/* Background Aerial Mining Landscape from PDF Page 1 */}
      <div className="absolute top-0 right-0 w-full lg:w-[62%] h-full pointer-events-none opacity-45 lg:opacity-75 select-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-mine.jpeg"
            alt="Terra Inti Spatial Terrain Landscape"
            fill
            className="object-cover object-center lg:object-right"
            priority
          />
          {/* Subtle gradient vignette to blend seamlessly with the charcoal background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/80 lg:via-[#111315]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/60"></div>

          {/* Interactive / Decorative LiDAR Point-Cloud Grid Wireframe */}
          <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] opacity-25 mix-blend-screen"></div>

          {/* Technical Target Reticle Overlay */}
          <div className="absolute top-1/3 right-1/4 hidden lg:block border border-[#10B981]/30 rounded-full w-44 h-44 pointer-events-none animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#10B981]/70">
              REF_PT_ALPHA
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#E35B27] font-mono text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase">
              CORPORATE PROFILE / 2025
            </span>
            <span className="w-8 h-[1px] bg-[#E35B27]/60"></span>
          </div>

          {/* Main Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.98] text-white font-sans">
            TERRA INTI <br />
            <span className="text-white/95">SPATIAL INDONESIA</span>
          </h1>

          {/* Main Tagline */}
          <p className="mt-6 text-xl sm:text-2xl text-neutral-300 font-light tracking-wide max-w-2xl">
            From Aerial Data to Spatial Intelligence
          </p>

          {/* Orange Accent Bar */}
          <div className="w-24 h-1.5 bg-[#E35B27] my-6"></div>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed max-w-xl">
            Terra Inti specializes in aerial data processing, geospatial mapping, AI, 3D spatial technology, SLAM and BIM—bridging raw observations to decision-ready engineering information.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E35B27] hover:bg-[#F06529] text-white text-xs font-mono tracking-widest uppercase font-semibold transition-colors duration-200 shadow-md"
            >
              <span>Explore Our Capabilities</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/15 text-xs font-mono tracking-widest uppercase font-medium transition-all duration-200 backdrop-blur-sm"
            >
              <span>View Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Supporting Identity Bar */}
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-400 uppercase">
              GEOSPATIAL TECHNOLOGY • AERIAL DATA PROCESSING • AI • 3D SPATIAL • BIM
            </p>
          </div>
        </div>
      </div>

      {/* Page Footer Marker matching PDF Page 1 */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-white/5 pt-4">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">01</span>
        </div>
      </div>
    </section>
  );
};
