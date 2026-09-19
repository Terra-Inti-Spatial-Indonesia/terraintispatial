"use client";

import React, { useState } from "react";
import { LidarSlider } from "@/app/components/LidarSlider";
import { CheckCircle2, ChevronRight, Layers, Cpu, ShieldCheck, Ruler } from "lucide-react";

export default function AerialData() {
  return (
    <>
      <AerialDataSection />
    </>
  );
}

export const AerialDataSection: React.FC = () => {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(1);

  const pipeline = [
    { title: "RAW DATA", desc: "Raw trajectory GNSS/IMU logs, raw LiDAR point clouds, and high-resolution aerial imagery." },
    { title: "PROCESSING", desc: "Sensor calibration, strip adjustment, boresight alignment, and aerotriangulation." },
    { title: "SPATIAL PRODUCTS", desc: "Ground-classified point clouds, calibrated DTM/DSM elevation models, and seamless orthomosaics." },
    { title: "INTELLIGENCE", desc: "Volume calculations, cross-sections, engineering grade vectors, and analytics." },
  ];

  const capabilities = [
    "LiDAR strip adjustment",
    "Photogrammetry & aerotriangulation",
    "Trajectory processing",
    "Point-cloud classification",
    "Orthomosaic production",
    "Geometric QA/QC",
  ];

  return (
    <section 
      id="aerial-data" 
      className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
                AERIAL DATA PROCESSING
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111315] leading-[1.05]">
              The Core of Our <br />
              Spatial Intelligence
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl">
              Aerial data is the foundation for accurate maps, models and intelligence. We calibrate, classify and validate every dataset for dependable downstream use.
            </p>

            {/* Processing Capabilities Checklist / Tags from PDF */}
            <div className="mt-8 pt-6 border-t border-[#DCD9CE]">
              <span className="block text-[11px] font-mono text-neutral-500 uppercase tracking-widest mb-4">
                CORE PROCESSING WORKFLOWS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div 
                    key={cap} 
                    className="flex items-center gap-2.5 p-2 bg-white/70 border border-[#E2E0D7] text-xs font-mono text-neutral-800"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E35B27] flex-shrink-0"></span>
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Dominant Visual: LiDAR Elevation Heatmap vs Orthomosaic */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Technical Header tag */}
              <div className="flex items-center justify-between pb-3 text-[11px] font-mono text-neutral-600">
                <span className="flex items-center gap-1.5 font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-[#E35B27]"></span>
                  CALIBRATED SENSOR COMPARISON
                </span>
                <span>DATA REF: LIDAR_ORTHO_SPLIT</span>
              </div>

              {/* Slider Component */}
              <LidarSlider />

              <p className="mt-3 text-[11px] font-mono text-neutral-500 text-center">
                Interactive spatial comparison: False-color elevation matrix vs natural color orthophoto
              </p>
            </div>
          </div>
        </div>

        {/* Processing Pipeline Flow Component matching PDF Page 4 */}
        <div className="mt-16 p-6 sm:p-8 bg-white border border-[#E2E0D7] shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EBE8DF]">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E35B27] uppercase">
              DATA VALUE CHAIN PIPELINE
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              CLICK STAGE TO VIEW TECHNICAL SPECIFICATION
            </span>
          </div>

          {/* Stepper buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipeline.map((step, idx) => {
              const isSelected = activePipelineStep === idx;
              return (
                <div
                  key={step.title}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-4 border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#111315] text-white border-[#111315] shadow-md"
                      : "bg-[#F9F8F5] text-neutral-800 border-[#E4E2DA] hover:border-neutral-400"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#E35B27]">
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 bg-[#E35B27] text-white uppercase">
                        ACTIVE
                      </span>
                    )}
                  </div>
                  <h4 className="font-mono text-xs font-bold tracking-wider mb-2">
                    {step.title}
                  </h4>
                  <p className={`text-[11px] leading-relaxed ${
                    isSelected ? "text-neutral-300" : "text-neutral-600"
                  }`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 4 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">04</span>
        </div>
      </div>
    </section>
  );
};
