"use client";

import React, { useState } from "react";

interface Metric {
  name: string;
  target: number;
  threshold: number;
}

const metrics: Metric[] = [
  { name: "Accuracy", target: 98, threshold: 85 },
  { name: "Completeness", target: 95, threshold: 82 },
  { name: "Consistency", target: 94, threshold: 80 },
  { name: "Traceability", target: 96, threshold: 84 },
  { name: "Usability", target: 97, threshold: 85 },
];

export const RadarChart: React.FC<{ theme?: "light" | "dark" }> = ({ theme = "light" }) => {
  const [activeMetric, setActiveMetric] = useState<Metric | null>(null);

  const size = 380;
  const center = size / 2;
  const radius = 130;
  const totalSides = metrics.length;
  const angleStep = (Math.PI * 2) / totalSides;
  // Offset angle so first axis is straight up (-PI/2)
  const angleOffset = -Math.PI / 2;

  // Grid levels
  const levels = [0.2, 0.4, 0.6, 0.8, 1.0];

  const getCoordinates = (value: number, index: number, maxVal = 100) => {
    const r = (value / maxVal) * radius;
    const angle = angleOffset + index * angleStep;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Generate path string for polygons
  const targetPoints = metrics.map((m, i) => getCoordinates(m.target, i));
  const thresholdPoints = metrics.map((m, i) => getCoordinates(m.threshold, i));

  const targetPath = targetPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
  const thresholdPath = thresholdPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";

  const isLight = theme === "light";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[420px] relative select-none">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-auto overflow-visible"
        >
          {/* Circular/Pentagonal Grid Rings */}
          {levels.map((level, lvlIdx) => {
            const levelPoints = metrics.map((_, i) => getCoordinates(level * 100, i));
            const levelPath = levelPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") + " Z";
            return (
              <g key={lvlIdx}>
                <path
                  d={levelPath}
                  fill="none"
                  stroke={isLight ? "#D8D6CD" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth="1"
                  strokeDasharray={lvlIdx < 4 ? "2 2" : "none"}
                />
                {/* Scale Percentage Labels along top axis */}
                <text
                  x={center + 6}
                  y={center - level * radius + 3}
                  fontSize="9"
                  fontFamily="monospace"
                  fill={isLight ? "#8A8D93" : "#6E737B"}
                  textAnchor="start"
                >
                  {Math.round(level * 100)}%
                </text>
              </g>
            );
          })}

          {/* Center 0% label */}
          <text
            x={center + 6}
            y={center + 3}
            fontSize="9"
            fontFamily="monospace"
            fill={isLight ? "#8A8D93" : "#6E737B"}
            textAnchor="start"
          >
            0%
          </text>

          {/* Axis Spoke Lines */}
          {metrics.map((_, i) => {
            const outer = getCoordinates(100, i);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={outer.x}
                y2={outer.y}
                stroke={isLight ? "#D8D6CD" : "rgba(255, 255, 255, 0.12)"}
                strokeWidth="1"
              />
            );
          })}

          {/* Control Threshold Area (Orange / Muted Gold) */}
          <path
            d={thresholdPath}
            fill="rgba(227, 91, 39, 0.12)"
            stroke="#E35B27"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />

          {/* Target Area (Teal / Blue) */}
          <path
            d={targetPath}
            fill="rgba(16, 185, 129, 0.18)"
            stroke="#0D9488"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Points for Threshold */}
          {thresholdPoints.map((p, i) => (
            <circle
              key={`th-${i}`}
              cx={p.x}
              cy={p.y}
              r="3.5"
              fill="#E35B27"
              stroke={isLight ? "#FFFFFF" : "#111315"}
              strokeWidth="1.5"
            />
          ))}

          {/* Points for Target */}
          {targetPoints.map((p, i) => (
            <circle
              key={`tg-${i}`}
              cx={p.x}
              cy={p.y}
              r="4.5"
              fill="#0D9488"
              stroke={isLight ? "#FFFFFF" : "#111315"}
              strokeWidth="1.5"
              className="cursor-pointer transition-transform hover:scale-125"
              onMouseEnter={() => setActiveMetric(metrics[i])}
              onMouseLeave={() => setActiveMetric(null)}
            />
          ))}

          {/* Metric Axis Labels */}
          {metrics.map((metric, i) => {
            const angle = angleOffset + i * angleStep;
            const labelR = radius + 26;
            const lx = center + labelR * Math.cos(angle);
            const ly = center + labelR * Math.sin(angle);

            // Anchor alignment based on position
            let anchor: "middle" | "start" | "end" = "middle";
            if (Math.cos(angle) > 0.3) anchor = "start";
            if (Math.cos(angle) < -0.3) anchor = "end";

            return (
              <text
                key={metric.name}
                x={lx}
                y={ly}
                fontSize="11"
                fontFamily="inherit"
                fontWeight="600"
                fill={isLight ? "#24272C" : "#E2E4E8"}
                textAnchor={anchor}
                dominantBaseline="central"
                className="cursor-pointer"
                onMouseEnter={() => setActiveMetric(metric)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                {metric.name}
              </text>
            );
          })}
        </svg>

        {/* Floating Tooltip if point hovered */}
        {activeMetric && (
          <div className="absolute top-2 right-2 bg-[#111315] text-white px-3 py-1.5 rounded border border-white/20 text-xs font-mono shadow-xl pointer-events-none z-10">
            <div className="font-bold text-[#10B981]">{activeMetric.name}</div>
            <div className="text-[11px] text-neutral-300">
              Target: <span className="font-semibold text-white">{activeMetric.target}%</span> | Min: <span className="font-semibold text-[#E35B27]">{activeMetric.threshold}%</span>
            </div>
          </div>
        )}
      </div>

      {/* Chart Legend exactly as shown on PDF Page 12 */}
      <div className="flex items-center gap-6 mt-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488]"></span>
          <span className={isLight ? "text-neutral-700" : "text-neutral-300"}>Target</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E35B27]"></span>
          <span className={isLight ? "text-neutral-700" : "text-neutral-300"}>Control threshold</span>
        </div>
      </div>
    </div>
  );
};
