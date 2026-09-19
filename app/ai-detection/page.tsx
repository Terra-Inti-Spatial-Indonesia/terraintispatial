"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, ScanEye, Sparkles, Filter, Check, Eye } from "lucide-react";

export default function AIDetection(){
  return (
    <>
    <AIDetectionSection />
    </>
  )
}

const AIDetectionSection: React.FC = () => {
  const [showOverlays, setShowOverlays] = useState(true);

  const capabilitiesLine1 = ["OBJECT DETECTION", "CLASSIFICATION", "SEGMENTATION"];
  const capabilitiesLine2 = ["CHANGE DETECTION", "VEGETATION ANALYSIS", "FEATURE EXTRACTION"];

  const pipelineSteps = [
    { name: "DATA", desc: "High-density LiDAR points & multispectral UAV rasters" },
    { name: "AI", desc: "Trained neural architectures & semantic classifiers" },
    { name: "INFORMATION", desc: "Structured asset classes, boundaries & polygons" },
    { name: "INSIGHT", desc: "Volumetric trends, change analytics & actionable reports" },
  ];

  return (
    <section 
      id="ai-detection" 
      className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                AI DETECTION & CLASSIFICATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
              Making Spatial <br />
              Data Intelligent
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal">
              Machine learning automates feature extraction from imagery and point clouds—turning massive spatial datasets into consistent, measurable information.
            </p>

            {/* Two rows of capabilities matching PDF Page 6 */}
            <div className="mt-8 space-y-2">
              <div className="flex flex-wrap gap-2 text-[11px] font-mono font-semibold tracking-wider text-neutral-800">
                {capabilitiesLine1.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-white border border-[#E2E0D7]">{item}</span>
                    {idx < capabilitiesLine1.length - 1 && <span className="text-[#E35B27]">•</span>}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 text-[11px] font-mono font-semibold tracking-wider text-neutral-800">
                {capabilitiesLine2.map((item, idx) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-white border border-[#E2E0D7]">{item}</span>
                    {idx < capabilitiesLine2.length - 1 && <span className="text-[#E35B27]">•</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* DATA -> AI -> INFORMATION -> INSIGHT workflow matching PDF Page 6 */}
            <div className="mt-12 pt-8 border-t border-[#DCD9CE]">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {pipelineSteps.map((step, idx) => (
                  <React.Fragment key={step.name}>
                    <div className="px-4 py-2 bg-white border border-[#E2E0D7] text-xs font-mono font-bold tracking-wider text-neutral-900 shadow-2xs">
                      {step.name}
                    </div>
                    {idx < pipelineSteps.length - 1 && (
                      <span className="w-3 sm:w-5 h-[1.5px] bg-[#E35B27] self-center"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual with Computer Vision Overlays */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#E2E0D7] bg-black shadow-md overflow-hidden group">
              {/* Header bar */}
              <div className="flex items-center justify-between p-3 bg-[#111315] text-white border-b border-white/10 text-[11px] font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  CV_INFERENCE_ENGINE // ACTIVE
                </span>
                <button
                  onClick={() => setShowOverlays(!showOverlays)}
                  className="flex items-center gap-1.5 px-2 py-0.5 bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                >
                  <Eye className="w-3 h-3" />
                  <span>{showOverlays ? "HIDE LABELS" : "SHOW LABELS"}</span>
                </button>
              </div>

              {/* Image from PDF Page 6 */}
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/ai-detection.jpeg"
                  alt="AI Feature Extraction and Mining Road Detection"
                  fill
                  className="object-cover"
                />

                {/* Computer Vision Detection Overlays */}
                {showOverlays && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Bounding box 1: Haul Truck */}
                    <div className="absolute top-[48%] left-[62%] w-[24%] h-[20%] border-2 border-[#E35B27] bg-[#E35B27]/10 animate-fade-in">
                      <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-[#E35B27] text-white text-[9px] font-mono font-bold">
                        HAUL_TRUCK_01: 99.4%
                      </span>
                    </div>

                    {/* Bounding box 2: Second Truck */}
                    <div className="absolute top-[32%] left-[48%] w-[16%] h-[15%] border border-[#10B981] bg-[#10B981]/10">
                      <span className="absolute -top-5 left-0 px-1.5 py-0.5 bg-[#10B981] text-black text-[9px] font-mono font-bold">
                        HAUL_TRUCK_02: 98.1%
                      </span>
                    </div>

                    {/* Corridor Polygon outline */}
                    <div className="absolute inset-x-8 bottom-6 border-t-2 border-dashed border-cyan-400/80">
                      <span className="absolute -top-4 right-2 text-[9px] font-mono text-cyan-300 bg-black/70 px-1">
                        CORRIDOR_SURFACE: 97.8%
                      </span>
                    </div>

                    {/* Scanline line */}
                    <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E35B27] to-transparent animate-scanline pointer-events-none opacity-70"></div>
                  </div>
                )}
              </div>

              {/* Telemetry info bar */}
              <div className="p-3 bg-[#111315] text-[10px] font-mono text-neutral-400 flex items-center justify-between border-t border-white/10">
                <span>MODEL: MULTI-CLASS GEOSPATIAL CNN</span>
                <span className="text-[#E35B27]">EXTRACTION: AUTOMATED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 6 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">06</span>
        </div>
      </div>
    </section>
  );
};
