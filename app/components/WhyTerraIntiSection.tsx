"use client";

import React from "react";

export const WhyTerraIntiSection: React.FC = () => {
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
            A spatial technology partner built for complex, high-consequence environments.
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
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">14</span>
        </div>
      </div>
    </section>
  );
};
