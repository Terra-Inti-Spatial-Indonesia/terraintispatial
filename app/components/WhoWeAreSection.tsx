"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const WhoWeAreSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    { title: "CAPTURE", desc: "Sensors, UAV, LiDAR, GNSS, SLAM reality scanning" },
    { title: "PROCESS", desc: "Calibration, photogrammetry, strip adjustment, QA/QC" },
    { title: "UNDERSTAND", desc: "AI feature extraction, classification, change analysis" },
    { title: "MODEL", desc: "Parametric BIM, GIS databases, 3D digital twins" },
    { title: "DELIVER", desc: "Decision-ready maps, engineering models, analytics" },
  ];

  return (
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
            Terra Inti specializes in aerial data processing, geospatial mapping, AI, 3D spatial technology, SLAM and BIM—bridging raw observations to decision-ready engineering information.
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
                  <span className="text-[#E35B27]">STAGE 0{activeStep + 1}:</span> {steps[activeStep].desc}
                </span>
              ) : (
                <span className="text-neutral-500">
                  Hover each approach phase to inspect downstream engineering flow.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 2 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">02</span>
        </div>
      </div>
    </section>
  );
};
