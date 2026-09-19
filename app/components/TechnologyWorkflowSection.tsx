"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

export const TechnologyWorkflowSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const workflow = [
    {
      num: "01",
      title: "CAPTURE",
      items: ["UAV", "LiDAR", "GNSS", "SLAM"],
      detail: "Multi-sensor aerial platforms, terrestrial laser scanners, kinematic GNSS base stations, and SLAM handheld systems.",
    },
    {
      num: "02",
      title: "PROCESS",
      items: ["Photogrammetry", "Registration", "QA/QC"],
      detail: "Dense point cloud matching, trajectory post-processing, boresight calibration, and geometric validation against GCPs.",
    },
    {
      num: "03",
      title: "ANALYZE",
      items: ["AI detection", "Classification"],
      detail: "Automated neural feature extraction, land cover segmentation, structural condition tagging, and difference analysis.",
    },
    {
      num: "04",
      title: "MODEL",
      items: ["GIS", "BIM", "Digital Twin"],
      detail: "Parametric 3D solid geometry, interoperable CityGML/IFC schemas, spatial databases, and spatial relation matrices.",
    },
    {
      num: "05",
      title: "DELIVER",
      items: ["Maps", "Databases", "Models"],
      detail: "Engineering-grade CAD, orthophoto mosaic packages, web-GIS dashboards, and decision-ready client documentation.",
    },
  ];

  return (
    <section 
      id="workflow" 
      className="relative bg-[#F4F3EE] text-[#111315] py-24 sm:py-32 border-b border-[#E2E0D7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#E35B27] font-mono text-xs tracking-[0.25em] font-bold uppercase">
              OUR TECHNOLOGY WORKFLOW
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111315] leading-[1.1]">
            From Reality to Intelligence
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            A connected spatial pipeline. Each stage preserves accuracy, context and traceability.
          </p>
        </div>

        {/* 5 Column Workflow Cards matching PDF Page 10 */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {workflow.map((step, idx) => {
            const isHovered = activeCard === idx;
            return (
              <div
                key={step.num}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                className={`p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                  isHovered 
                    ? "bg-[#111315] text-white border-[#111315] shadow-xl translate-y-[-4px]" 
                    : idx % 2 === 1 
                      ? "bg-[#ECE7DE] text-[#111315] border-[#DED8CE]" 
                      : "bg-white text-[#111315] border-[#E2E0D7]"
                }`}
              >
                <div>
                  {/* Large Number */}
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#E35B27] block mb-6">
                    {step.num}
                  </span>

                  {/* Title */}
                  <h3 className="font-mono text-sm sm:text-base font-bold tracking-widest uppercase mb-3">
                    {step.title}
                  </h3>

                  {/* Orange horizontal divider accent matching Page 10 */}
                  <div className="w-6 h-[2px] bg-[#E35B27] mb-4"></div>

                  {/* Items list */}
                  <p className={`text-xs font-mono tracking-wider leading-relaxed ${
                    isHovered ? "text-neutral-300" : "text-neutral-600"
                  }`}>
                    {step.items.join(" • ")}
                  </p>
                </div>

                {/* Subtext description */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/10">
                  <p className={`text-[11px] leading-relaxed ${
                    isHovered ? "text-neutral-400" : "text-neutral-500"
                  }`}>
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Page Footer Marker matching PDF Page 10 */}
        <div className="mt-20 pt-6 border-t border-[#E2E0D7] flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">10</span>
        </div>
      </div>
    </section>
  );
};
