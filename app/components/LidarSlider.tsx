"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Sliders, Eye, Layers, Crosshair } from "lucide-react";

export const LidarSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pos = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full relative select-none">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-none overflow-hidden border border-neutral-300 dark:border-white/15 bg-black cursor-ew-resize group shadow-lg"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Base Image: The Authentic Split LiDAR Elevation & Orthomosaic directly from PDF */}
        <div className="absolute inset-0">
          <Image
            src="/images/aerial-lidar-split.jpeg"
            alt="Aerial LiDAR Elevation Heatmap vs Orthomosaic"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Subtle dynamic technical grid & scan line overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        {/* Split Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Central Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111315] border-2 border-white flex items-center justify-center text-white shadow-xl">
            <Sliders className="w-3.5 h-3.5 rotate-90 text-[#E35B27]" />
          </div>
        </div>

        {/* Technical Badges Overlay */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>ELEVATION MODEL (LiDAR)</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span>TRUE ORTHOMOSAIC (RGB)</span>
          </div>
        </div>

        {/* Bottom Technical Telemetry Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-300 pointer-events-none z-10">
          <div className="flex items-center gap-3">
            <span className="text-[#E35B27] font-semibold">LiDAR STRIP ADJUSTED</span>
            <span className="text-white/30">|</span>
            <span>GSD: 2.5cm / px</span>
            <span className="text-white/30">|</span>
            <span>CALIBRATED DTM</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-neutral-400">
            <span>DRAG SLIDER TO INSPECT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
