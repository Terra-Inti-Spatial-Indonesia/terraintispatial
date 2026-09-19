"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BrandLogo } from "./BrandLogo";
import { Mail, MapPin, Phone, Globe, Send, CheckCircle2 } from "lucide-react";

export const FinalCTASection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Aerial Data Processing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="relative bg-[#111315] text-[#F5F5F7] py-24 sm:py-36 border-b border-white/10 overflow-hidden"
    >
      {/* Background Subtle Spatial Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Identifier matching PDF Page 16 */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-white border border-white/20 p-1 flex items-center justify-center">
            <Image
              src="/images/logo.jpeg"
              alt="Terra Inti Spatial Indonesia Logo"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold tracking-widest uppercase text-white">
              TERRA INTI SPATIAL INDONESIA
            </span>
            <span className="text-[10px] font-mono text-neutral-400 tracking-[0.2em] uppercase">
              CORPORATE PROFILE / 2025
            </span>
          </div>
        </div>

        {/* Main CTA Headlines matching PDF Page 16 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.98] text-white font-sans">
              LET'S TURN <br />
              SPATIAL DATA <br />
              INTO INTELLIGENCE.
            </h2>

            {/* Supporting Line in Orange matching PDF */}
            <p className="mt-8 text-xl sm:text-2xl font-light text-[#E35B27] tracking-wide">
              Capture. Process. Understand.
            </p>

            {/* Disciplines line from PDF Page 16 */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-400 uppercase">
                GEOSPATIAL TECHNOLOGY / AERIAL DATA / AI / 3D SPATIAL / BIM
              </p>
            </div>

            {/* Contact Placeholders matching exact format of PDF Page 16 */}
            <div className="mt-12 space-y-4 pt-8 border-t border-white/10 text-xs sm:text-sm font-mono">
              <div className="text-neutral-300">
                <span className="text-neutral-500">ADDRESS — </span>
                <span>[Insert address]</span>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-neutral-300">
                <div>
                  <span className="text-neutral-500">EMAIL — </span>
                  <span>[Insert email]</span>
                </div>
                <div>
                  <span className="text-neutral-500">WEBSITE — </span>
                  <span>[Insert website]</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-neutral-300">
                <div>
                  <span className="text-neutral-500">PHONE — </span>
                  <span>[Insert phone]</span>
                </div>
                <div>
                  <span className="text-neutral-500">LINKEDIN / INSTAGRAM — </span>
                  <span>[Insert handle]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Project Inquiry Terminal Form */}
          <div className="lg:col-span-5 bg-[#181B1E] border border-white/10 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 text-xs font-mono">
              <span className="flex items-center gap-2 text-[#E35B27] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#E35B27] animate-pulse"></span>
                PROJECT INQUIRY
              </span>
              <span className="text-neutral-500">INITIATE_SESSION</span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#10B981] mx-auto" />
                <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs font-mono text-neutral-400 max-w-xs mx-auto">
                  Thank you. Our spatial engineering team will review your parameters and follow up shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-white/5 border border-white/15 text-xs font-mono text-neutral-300 hover:text-white"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    YOUR NAME / ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engineering Lead / PT Mining Indonesia"
                    className="w-full bg-black/50 border border-white/15 px-3.5 py-2.5 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#E35B27]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    BUSINESS EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-black/50 border border-white/15 px-3.5 py-2.5 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#E35B27]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    PRIMARY SERVICE INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#111315] border border-white/15 px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-[#E35B27]"
                  >
                    <option value="Aerial Data Processing">01 — Aerial Data Processing (LiDAR & Drone)</option>
                    <option value="Geospatial Mapping">02 — Geospatial Mapping & GIS Deliverables</option>
                    <option value="AI Detection">03 — AI Detection & Automated Classification</option>
                    <option value="SLAM Reality Capture">04 — SLAM & 3D Reality Capture</option>
                    <option value="BIM & Scan-to-BIM">05 — BIM & Scan-to-BIM Modeling</option>
                    <option value="3D City Modeling">06 — 3D City & Digital Twin Modeling</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    PROJECT SCOPE & REQUIREMENTS
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe survey area, sensor requirements, or downstream deliverables..."
                    className="w-full bg-black/50 border border-white/15 px-3.5 py-2.5 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#E35B27]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#E35B27] hover:bg-[#F06529] text-white text-xs font-mono font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>SUBMIT INQUIRY</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Page Footer Marker matching PDF Page 16 */}
        <div className="mt-20 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span className="tracking-widest uppercase">TERRA INTI / SPATIAL INTELLIGENCE</span>
          <span className="text-[#E35B27] font-semibold">16</span>
        </div>
      </div>
    </section>
  );
};
