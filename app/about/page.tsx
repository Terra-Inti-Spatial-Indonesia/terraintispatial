"use client";

import React from "react";
import Image from "next/image";

export default function About(){
    return (
    <>
        <VisionSection/>
    </>
    )
}

const VisionSection: React.FC = () => {
  return (
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
            We connect aerial data, AI, 3D spatial technology and engineering to make the physical world more measurable, understandable and actionable.
          </p>

          {/* Mission Callout Box with Orange Vertical Bar matching PDF Page 15 */}
          <div className="mt-14 pl-6 border-l-2 border-[#E35B27] max-w-2xl">
            <p className="text-sm sm:text-base font-normal text-neutral-200 leading-relaxed">
              <span className="font-mono font-bold text-white tracking-widest uppercase">
                MISSION /{" "}
              </span>
              Deliver accurate, interoperable spatial intelligence that strengthens planning, design, operations and long-term stewardship.
            </p>
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 15 */}
        <div className="mt-28 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">15</span>
        </div>
      </div>
    </section>
  );
};
