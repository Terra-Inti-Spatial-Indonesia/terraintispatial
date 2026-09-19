"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Building2, Layers, Cpu, Database, Check } from "lucide-react";

export const BIMScanToBIMSection: React.FC = () => {
  const scopeItems = [
    "Scan-to-BIM",
    "BIM modeling",
    "Reality capture",
    "Point-cloud preparation",
    "Asset documentation",
  ];

  const pipeline = [
    { title: "REALITY CAPTURE", desc: "Terrestrial laser scanning & SLAM mobile mapping" },
    { title: "POINT CLOUD", desc: "Registered, georeferenced & noise-filtered point clouds" },
    { title: "BIM", desc: "Parametric Revit/IFC modeling with LOD 200–400 geometry" },
    { title: "DIGITAL ASSET", desc: "Coordinated digital twin for lifecycle facility management" },
  ];

  return (
    <section 
      id="bim-scan" 
      className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                BIM & SCAN-TO-BIM
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
              From Reality to <br />
              Digital Engineering
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Scan-to-BIM transforms captured conditions into structured, coordinated digital asset documentation for design, operations and lifecycle decisions.
            </p>

            {/* Scope Items list matching PDF Page 8 */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2 text-xs font-mono font-medium text-neutral-800">
                {scopeItems.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-white border border-[#E2E0D7]">{item}</span>
                    {idx < scopeItems.length - 1 && <span className="text-[#E35B27]">•</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* REALITY CAPTURE -> POINT CLOUD -> BIM -> DIGITAL ASSET stepper */}
            <div className="mt-12 pt-8 border-t border-[#DCD9CE]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {pipeline.map((step, idx) => (
                  <React.Fragment key={step.title}>
                    <div className="px-3.5 py-2 bg-white border border-[#E2E0D7] text-xs font-mono font-bold tracking-wider text-neutral-900 shadow-2xs">
                      {step.title}
                    </div>
                    {idx < pipeline.length - 1 && (
                      <span className="w-3 sm:w-5 h-[1.5px] bg-[#E35B27] self-center"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual of Refinery / Plant to BIM from PDF Page 8 */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#E2E0D7] bg-white shadow-md overflow-hidden">
              <div className="p-3 bg-[#111315] text-white flex items-center justify-between text-[11px] font-mono border-b border-white/10">
                <span className="flex items-center gap-2 text-white">
                  <span className="w-2 h-2 rounded-full bg-[#E35B27]"></span>
                  SCAN-TO-BIM TRANSFORMATION PIPELINE
                </span>
                <span className="text-neutral-400">LOD 300 / 350 AS-BUILT</span>
              </div>

              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/bim-engineering.jpeg"
                  alt="Scan to BIM Digital Engineering Refinery Model"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/90 bg-black/60 backdrop-blur-xs px-3 py-1.5 border border-white/20">
                  <span>COORDINATION: MULTI-DISCIPLINARY MEP + STRUCTURAL</span>
                  <span className="text-[#E35B27] font-semibold">AS-BUILT ACCURACY</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 8 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">08</span>
        </div>
      </div>
    </section>
  );
};
