import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "dark" | "light" | "auto";
  showText?: boolean;
  size?: number;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "dark",
  showText = true,
  size = 36,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Authentic Brand Emblem */}
      <div 
        className="relative overflow-hidden rounded-xs border border-white/20 shadow-sm flex-shrink-0 bg-white"
        style={{ width: size, height: size }}
      >
        <Image
          src="/images/logo.jpeg"
          alt="Terra Inti Spatial Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain p-[2px]"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-mono text-[13px] font-bold tracking-wider uppercase">
            TERRA INTI
          </span>
          <span className={`text-[10px] tracking-[0.2em] font-mono uppercase mt-0.5 ${
            variant === "light" ? "text-neutral-500" : "text-neutral-400"
          }`}>
            SPATIAL INDONESIA
          </span>
        </div>
      )}
    </div>
  );
};
