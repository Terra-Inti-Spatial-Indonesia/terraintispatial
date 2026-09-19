import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#111315",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "TERRA INTI SPATIAL INDONESIA — From Aerial Data to Spatial Intelligence",
  description:
    "Terra Inti specializes in aerial data processing, geospatial mapping, AI, 3D spatial technology, SLAM and BIM—bridging raw observations to decision-ready engineering information.",
  keywords: [
    "Geospatial Technology",
    "Aerial Data Processing",
    "LiDAR",
    "Photogrammetry",
    "AI Detection",
    "3D Spatial",
    "SLAM Reality Capture",
    "BIM",
    "Scan-to-BIM",
    "Digital Twin",
    "Terra Inti Spatial Indonesia",
  ],
  authors: [{ name: "Terra Inti Spatial Indonesia" }],
  openGraph: {
    title: "Terra Inti Spatial Indonesia — From Aerial Data to Spatial Intelligence",
    description:
      "Transforming raw aerial and spatial data into accurate, structured, intelligent engineering information.",
    url: "https://project.surveyteknologi.id",
    siteName: "Terra Inti Spatial Indonesia",
    locale: "en_ID",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpeg",
    shortcut: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-[#111315] text-[#F5F5F7] font-sans selection:bg-[#E35B27] selection:text-white">
        {children}
      </body>
    </html>
  );
}
