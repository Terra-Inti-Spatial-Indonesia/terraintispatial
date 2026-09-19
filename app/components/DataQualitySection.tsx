"use client";

import React, { useState } from "react";
import { RadarChart } from "./RadarChart";
import { ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";

export const DataQualitySection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      title: "DATA VALIDATION",
      status: "teal",
      description: "Sensor trajectory integrity, satellite GNSS dilution of precision (PDOP), IMU drift checks, and raw coverage verification.",
    },
    {
      title: "PROCESSING QC",
      status: "teal",
      description: "LiDAR swath strip overlap adjustment, boresight calibration residuals, and photogrammetric bundle block tie point residuals.",
    },
    {
      title: "GEOMETRIC VERIFICATION",
      status: "teal",
      description: "Independent ground control point (GCP) and checkpoint delta testing across horizontal (XY) and vertical (Z) dimensions.",
    },
    {
      title: "CLASSIFICATION VALIDATION",
      status: "teal",
      description: "Automated ground filtering audit, vegetation height stratification, building segmentation boundary validation, and noise pruning.",
    },
    {
      title: "DELIVERABLE QA/QC",
      status: "orange",
      description: "Final client deliverable inspection, spatial database topological integrity, metadata standardization, and coordinate system compliance.",
    },
  ];

  return (
    <section 
      id="quality" 
      className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              DATA QUALITY & ACCURACY
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
            Reliable Data. Structured Workflows. <br />
            Measurable Results.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            Quality assurance is embedded across the lifecycle—from incoming sensor data to engineering-ready deliverables.
          </p>
        </div>

        {/* Two-Column Layout matching PDF Page 12 */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 5 Quality Control Stages */}
          <div className="lg:col-span-6 space-y-3.5">
            {stages.map((stage, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`p-4 sm:p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#111315] shadow-md ring-1 ring-[#111315]/10"
                      : "bg-white/70 border-[#E2E0D7] hover:border-neutral-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      {/* Square Status Indicator matching PDF Page 12 */}
                      <span
                        className={`w-3 h-3 rounded-none flex-shrink-0 ${
                          stage.status === "orange" ? "bg-[#E35B27]" : "bg-[#0D9488]"
                        }`}
                      ></span>

                      <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#111315] uppercase">
                        {stage.title}
                      </h3>
                    </div>

                    <span className="text-[10px] font-mono text-neutral-400">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-[#EAE7DE] text-xs text-neutral-600 leading-relaxed">
                      {stage.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: QUALITY CONTROL PROFILE Radar Chart matching PDF Page 12 */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 sm:p-8 bg-white border border-[#E2E0D7] shadow-xs">
            <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-[#EAE7DE]">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111315] uppercase">
                QUALITY CONTROL PROFILE
              </span>
              <span className="text-[10px] font-mono text-[#0D9488] bg-[#0D9488]/10 px-2 py-0.5 font-bold">
                RIGOROUS MULTI-AXIS QC
              </span>
            </div>

            <RadarChart theme="light" />

            <div className="mt-6 pt-4 border-t border-[#EAE7DE] text-[11px] font-mono text-neutral-500 text-center w-full">
              Five verification dimensions tracked throughout production lifecycle.
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 12 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">12</span>
        </div>
      </div>
    </section>
  );
};
