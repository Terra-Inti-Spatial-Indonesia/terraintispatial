import React from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";
import { CoreCapabilitiesSection } from "./components/CoreCapabilitiesSection";
import { AerialDataSection } from "./components/AerialDataSection";
import { GeospatialMappingSection } from "./components/GeospatialMappingSection";
import { AIDetectionSection } from "./components/AIDetectionSection";
import { SLAMRealityCaptureSection } from "./components/SLAMRealityCaptureSection";
import { BIMScanToBIMSection } from "./components/BIMScanToBIMSection";
import { CityModelingSection } from "./components/CityModelingSection";
import { TechnologyWorkflowSection } from "./components/TechnologyWorkflowSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { DataQualitySection } from "./components/DataQualitySection";
import { ProjectPortfolioSection } from "./components/ProjectPortfolioSection";
import { WhyTerraIntiSection } from "./components/WhyTerraIntiSection";
import { VisionSection } from "./components/VisionSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#111315] text-[#F5F5F7] selection:bg-[#E35B27] selection:text-white">
      {/* Sticky Technical Navigation Bar */}
      <Navbar />

      <main>
        {/* 01: HERO (PDF Page 1) */}
        <HeroSection />

        {/* 02: WHO WE ARE (PDF Page 2) */}
        <WhoWeAreSection />

        {/* 03: CORE CAPABILITIES (PDF Page 3) */}
        <CoreCapabilitiesSection />

        {/* 04: AERIAL DATA PROCESSING (PDF Page 4) */}
        <AerialDataSection />

        {/* 05: GEOSPATIAL MAPPING (PDF Page 5) */}
        <GeospatialMappingSection />

        {/* 06: AI DETECTION & CLASSIFICATION (PDF Page 6) */}
        <AIDetectionSection />

        {/* 07: SLAM & 3D REALITY CAPTURE (PDF Page 7) */}
        <SLAMRealityCaptureSection />

        {/* 08: BIM & SCAN-TO-BIM (PDF Page 8) */}
        <BIMScanToBIMSection />

        {/* 09: 3D CITY & SPATIAL MODELING (PDF Page 9) */}
        <CityModelingSection />

        {/* 10: OUR TECHNOLOGY WORKFLOW (PDF Page 10) */}
        <TechnologyWorkflowSection />

        {/* 11: INDUSTRIES WE SERVE (PDF Page 11) */}
        <IndustriesSection />

        {/* 12: DATA QUALITY & ACCURACY (PDF Page 12) */}
        <DataQualitySection />

        {/* 13: PROJECT PORTFOLIO (PDF Page 13) */}
        <ProjectPortfolioSection />

        {/* 14: WHY TERRA INTI (PDF Page 14) */}
        <WhyTerraIntiSection />

        {/* 15: OUR VISION (PDF Page 15) */}
        <VisionSection />

        {/* 16: FINAL CTA & CONTACT SPECIFICATION (PDF Page 16) */}
        <FinalCTASection />
      </main>

      {/* Engineering Footer */}
      <Footer />
    </div>
  );
}
