"use client";

import React from "react";
import { BrandLogo } from "./BrandLogo";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0C0E] text-neutral-400 border-t border-white/10 py-12 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          <div>
            <BrandLogo size={28} />
            <p className="mt-3 text-[11px] text-neutral-500 max-w-md">
              From Aerial Data to Spatial Intelligence — Transforming raw observations into decision-ready engineering information.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-white/30 text-[11px] text-neutral-300 hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] text-neutral-500">
          <div>
            © 2025 TERRA INTI SPATIAL INDONESIA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>CRS: WGS 84 / UTM 50S</span>
            <span>•</span>
            <span>GEOSPATIAL • AERIAL • AI • 3D SPATIAL • BIM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
