"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { Menu, X, Globe2, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "EQUIPMENT", href: "/" },
    // { label: "CAPABILITIES", href: "#capabilities" },
    { label: "WORKFLOW", href: "/workflow" },
    { label: "INDUSTRIES", href: "/industries" },
    // { label: "QUALITY", href: "#quality" },
    // { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111315]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
          : "bg-[#111315]/70 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <BrandLogo size={32} />
          </a>

          {/* Center Coordinates HUD readout (Desktop only) */}

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-mono tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 relative group py-1"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E35B27] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-mono uppercase tracking-wider font-semibold text-white bg-[#E35B27] hover:bg-[#F06529] border border-[#E35B27] transition-all duration-200 shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#111315]/98 border-b border-white/10 px-6 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/10 text-[10px] font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>CRS: WGS 84 / UTM 50S | TERRA INTI</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-mono tracking-wider text-neutral-200 hover:text-white hover:bg-white/5 border border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 text-xs font-mono uppercase tracking-widest font-bold text-white bg-[#E35B27]"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
