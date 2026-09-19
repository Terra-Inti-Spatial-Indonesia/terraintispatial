"use client";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Plane,
  Map,
  Cpu,
  Scan,
  Building2,
  Box,
  Send,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

import { Footer } from "./components/Footer";

export default function Home() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

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

  const steps = [
    {
      title: "CAPTURE",
      desc: "Sensors, UAV, LiDAR, GNSS, SLAM reality scanning",
    },
    {
      title: "PROCESS",
      desc: "Calibration, photogrammetry, strip adjustment, QA/QC",
    },
    {
      title: "UNDERSTAND",
      desc: "AI feature extraction, classification, change analysis",
    },
    { title: "MODEL", desc: "Parametric BIM, GIS databases, 3D digital twins" },
    {
      title: "DELIVER",
      desc: "Decision-ready maps, engineering models, analytics",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const capabilities = [
    {
      num: "01",
      title: "Aerial Data Processing",
      subtitle: "LiDAR • photogrammetry • QA/QC",
      anchor: "/aerial-data",
      icon: Plane,
      description:
        "Rigorous trajectory calibration, strip adjustment, point-cloud classification and seamless orthomosaic generation.",
    },
    {
      num: "02",
      title: "Geospatial Mapping",
      subtitle: "Survey-to-GIS deliverables",
      anchor: "/geospatial-mapping",
      icon: Map,
      description:
        "Integrated UAV, LiDAR, GNSS, terrestrial surveys and GIS databases engineered for high accuracy and usability.",
    },
    {
      num: "03",
      title: "AI Detection & Classification",
      subtitle: "Automated feature intelligence",
      anchor: "/ai-detection",
      icon: Cpu,
      description:
        "Machine learning workflows for automated feature extraction, asset counting, vegetation analysis and change detection.",
    },
    {
      num: "04",
      title: "SLAM & 3D Reality Capture",
      subtitle: "Complex environments, captured",
      anchor: "#slam-reality",
      icon: Scan,
      description:
        "Mobile mapping and reality capture for tunnels, industrial facilities, and indoor spaces where GNSS is unavailable.",
    },
    {
      num: "05",
      title: "BIM & Scan-to-BIM",
      subtitle: "Reality to digital engineering",
      anchor: "/bim-scan",
      icon: Building2,
      description:
        "Converting dense point clouds into parametric, coordinated digital asset BIM models for lifecycle engineering.",
    },
    {
      num: "06",
      title: "3D City & Spatial Modeling",
      subtitle: "Terrain, infrastructure, cities",
      anchor: "/city-modeling",
      icon: Box,
      description:
        "Scalable digital representations of physical infrastructure, urban environments, and digital twin ecosystems.",
    },
  ];

  const principles = [
    {
      num: "01",
      title: "INTEGRATED",
      desc: "One connected capture-to-delivery ecosystem.",
    },
    {
      num: "02",
      title: "DATA-DRIVEN",
      desc: "Evidence, traceability and measurable accuracy.",
    },
    {
      num: "03",
      title: "INTELLIGENT",
      desc: "AI accelerates extraction and understanding.",
    },
    {
      num: "04",
      title: "SCALABLE",
      desc: "From single assets to regional datasets.",
    },
    {
      num: "05",
      title: "ENGINEERING-READY",
      desc: "Outputs structured for real decisions.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#111315] text-[#F5F5F7] selection:bg-[#E35B27] selection:text-white">
      {/* Sticky Technical Navigation Bar */}
      <main>
        {/* 01: HERO (PDF Page 1) */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-between bg-[#111315] text-[#F5F5F7] overflow-hidden pt-28 pb-12 border-b border-white/10"
        >
          {/* Background Aerial Mining Landscape from PDF Page 1 */}
          <div className="absolute top-0 right-0 w-full lg:w-[82%] h-full pointer-events-none select-none">
            <div className="relative w-full h-full">
              <Image
                src="https://halorobotics.com/wp-content/uploads/2025/01/Email-1-scaled.jpg"
                alt="Terra Inti Spatial Terrain Landscape"
                fill
                className="object-cover object-center lg:object-right"
                priority
                unoptimized
              />
              {/* Subtle gradient vignette to blend seamlessly with the charcoal background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/80 lg:via-[#111315]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/60"></div>
            </div>
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
            <div className="max-w-3xl">
              {/* Top Label */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#E35B27] font-mono text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase">
                  CORPORATE PROFILE / 2026
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
                Terra Inti specializes in aerial data processing, geospatial
                mapping, AI, 3D spatial technology, SLAM and BIM—bridging raw
                observations to decision-ready engineering information.
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
                  GEOSPATIAL TECHNOLOGY • AERIAL DATA PROCESSING • AI • 3D
                  SPATIAL • BIM
                </p>
              </div>
            </div>
          </div>

          {/* Page Footer Marker matching PDF Page 1 */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 border-t border-white/5 pt-4">
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">01</span>
            </div>
          </div>
        </section>
        <section
          id="vision"
          className="relative bg-[#111315] text-[#F5F5F7] py-28 sm:py-40 border-b border-white/10 overflow-hidden"
        >
          {/* Cinematic Mountain Sunset Backdrop from PDF Page 15 */}
          <div className="absolute inset-0 pointer-events-none opacity-45 select-none">
            <Image
              src="/images/vision-mountains.jpeg"
              alt="Atmospheric Mountain Landscape Vision"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#111315] via-[#111315]/80 to-[#111315]/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111315] via-transparent to-[#111315]/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Tag */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                  OUR VISION
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-6xl font-bold tracking-tight text-white leading-[1.08] font-sans">
                Building the Spatial <br />
                Intelligence Layer of <br />
                the Physical World
              </h2>

              {/* Lead Copy */}
              <p className="mt-8 text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl">
                We connect aerial data, AI, 3D spatial technology and
                engineering to make the physical world more measurable,
                understandable and actionable.
              </p>

              {/* Mission Callout Box with Orange Vertical Bar matching PDF Page 15 */}
              <div className="mt-14 pl-6 border-l-2 border-[#E35B27] max-w-2xl">
                <p className="text-sm sm:text-base font-normal text-neutral-200 leading-relaxed">
                  <span className="font-mono font-bold text-white tracking-widest uppercase">
                    MISSION /{" "}
                  </span>
                  Deliver accurate, interoperable spatial intelligence that
                  strengthens planning, design, operations and long-term
                  stewardship.
                </p>
              </div>
            </div>

            {/* Page Footer Marker matching PDF Page 15 */}
            <div className="mt-28 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">15</span>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
        >
          {/* Background Topographic Contour & Terrain Image from PDF Page 2 */}
          <div className="absolute top-0 right-0 w-full lg:w-[48%] h-full pointer-events-none opacity-85 select-none hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src="/images/approach-terrain.jpeg"
                alt="Terrain Contour Mapping"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4F3EE] via-[#F4F3EE]/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4F3EE] via-transparent to-[#F4F3EE]/20"></div>
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Section Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                  WHO WE ARE
                </span>
              </div>

              {/* Section Headline */}
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
                Transforming Spatial Data <br />
                into Intelligence
              </h2>

              {/* Core Descriptive Copy */}
              <p className="mt-8 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
                Terra Inti specializes in aerial data processing, geospatial
                mapping, AI, 3D spatial technology, SLAM and BIM—bridging raw
                observations to decision-ready engineering information.
              </p>

              {/* Our Approach Workflow Component */}
              <div className="mt-14 pt-8 border-t border-[#DCD9CE]">
                <span className="block text-[11px] font-mono text-[#E35B27] tracking-[0.2em] font-bold uppercase mb-4">
                  OUR APPROACH
                </span>

                {/* Stepper matching Page 2 */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {steps.map((step, idx) => {
                    const isHovered = activeStep === idx;
                    return (
                      <React.Fragment key={step.title}>
                        <div
                          onMouseEnter={() => setActiveStep(idx)}
                          onMouseLeave={() => setActiveStep(null)}
                          className={`px-4 py-2.5 rounded-xs border text-xs font-mono font-bold tracking-wider transition-all duration-200 cursor-pointer shadow-xs ${
                            isHovered
                              ? "bg-[#111315] text-white border-[#111315] shadow-md scale-105"
                              : "bg-white text-neutral-800 border-[#E2E0D7] hover:border-neutral-400"
                          }`}
                        >
                          {step.title}
                        </div>

                        {idx < steps.length - 1 && (
                          <span className="w-3 sm:w-5 h-[1.5px] bg-[#E35B27] self-center"></span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Micro description on hover or active step */}
                <div className="mt-4 min-h-[28px] text-xs font-mono text-neutral-600">
                  {activeStep !== null ? (
                    <span className="inline-flex items-center gap-2 text-neutral-900 font-medium">
                      <span className="text-[#E35B27]">
                        STAGE 0{activeStep + 1}:
                      </span>{" "}
                      {steps[activeStep].desc}
                    </span>
                  ) : (
                    <span className="text-neutral-500">
                      Hover each approach phase to inspect downstream
                      engineering flow.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Page Footer Marker matching PDF Page 2 */}
            <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">02</span>
            </div>
          </div>
        </section>
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
                    <span className="absolute top-2 left-2 text-[10px] font-mono text-neutral-600">
                      +
                    </span>
                    <span className="absolute top-2 right-2 text-[10px] font-mono text-neutral-600">
                      +
                    </span>
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono text-neutral-600">
                      +
                    </span>
                    <span className="absolute bottom-2 right-2 text-[10px] font-mono text-neutral-600">
                      +
                    </span>

                    <div>
                      {/* Top Bar: Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xl font-mono font-bold text-[#E35B27]">
                          {item.num}
                        </span>
                        <div
                          className={`p-2 rounded-xs border transition-colors ${
                            isHovered
                              ? "bg-[#E35B27]/15 border-[#E35B27]/50 text-[#E35B27]"
                              : "bg-white/5 border-white/10 text-neutral-400"
                          }`}
                        >
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
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">03</span>
            </div>
          </div>
        </section>
        <section
          id="why-terra-inti"
          className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                  WHY TERRA INTI
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
                Beyond Mapping
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
                A spatial technology partner built for complex, high-consequence
                environments.
              </p>
            </div>

            {/* 5 Principles Rows matching PDF Page 14 */}
            <div className="mt-16 divide-y divide-[#DCD9CE] border-y border-[#DCD9CE]">
              {principles.map((p) => (
                <div
                  key={p.num}
                  className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8 group hover:bg-white/40 transition-colors px-2"
                >
                  <div className="flex items-center gap-6 sm:gap-10 md:w-1/3">
                    <span className="text-sm sm:text-base font-mono font-bold text-[#E35B27]">
                      {p.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-mono font-bold tracking-widest text-[#111315] uppercase">
                      {p.title}
                    </h3>
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-sm sm:text-base text-neutral-700 font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Page Footer Marker matching PDF Page 14 */}
            <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">14</span>
            </div>
          </div>
        </section>

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
                          <span className="text-neutral-200">
                            {proj.technology}
                          </span>
                        </div>

                        <div>
                          <span className="text-neutral-500">
                            Deliverables:{" "}
                          </span>
                          <span className="text-neutral-200">
                            {proj.deliverables}
                          </span>
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
              <span className="tracking-widest uppercase">
                TERRA INTI / SPATIAL INTELLIGENCE
              </span>
              <span className="text-[#E35B27] font-semibold">13</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
