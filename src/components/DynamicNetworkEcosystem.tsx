"use client";

import { useState } from "react";
import { topologyEcosystems, TopologyEcosystem, NetworkNode } from "@/lib/cognivectraContent";
import { Cpu, Server, Shield, Activity, Sparkles, Layers } from "lucide-react";

export default function DynamicNetworkEcosystem() {
  const [activeTabId, setActiveTabId] = useState<string>("ai");
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeEcosystem = topologyEcosystems.find((t) => t.id === activeTabId) || topologyEcosystems[0];

  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 rounded-3xl bg-slate-950/80 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">
      {/* Atmosphere glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] blur-[150px] rounded-full pointer-events-none opacity-30 transition-all duration-700"
        style={{ background: activeEcosystem.color }}
      />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-4 backdrop-blur-md">
          <Layers className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span>Dynamic Network Ecosystems</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Visualizing Platform Topologies & AI Flow
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          Interactive architecture diagrams — from distributed LLM orchestration to multi-cloud Kubernetes & GitOps pipelines.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10 max-w-6xl mx-auto">
        {/* Topology Selector Buttons */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {topologyEcosystems.map((eco) => {
            const isActive = eco.id === activeTabId;
            return (
              <button
                key={eco.id}
                onClick={() => setActiveTabId(eco.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-900/90 border-white/30 shadow-xl"
                    : "bg-slate-900/30 border-white/5 hover:bg-slate-900/60 hover:border-white/15"
                }`}
                style={{
                  boxShadow: isActive ? `0 0 25px ${eco.color}25` : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full shrink-0 transition-transform duration-300"
                    style={{
                      background: eco.color,
                      boxShadow: isActive ? `0 0 10px ${eco.color}` : "none",
                      transform: isActive ? "scale(1.25)" : "scale(1)",
                    }}
                  />
                  <h3 className="font-display font-bold text-base text-white">{eco.title}</h3>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{eco.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Canvas Display Box */}
        <div className="lg:col-span-8 relative h-[480px] rounded-2xl border border-white/10 bg-slate-900/40 p-4 overflow-hidden shadow-inner flex flex-col justify-between">
          {/* Top Label */}
          <div className="flex items-center justify-between z-10 px-2 py-1">
            <span
              className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md"
              style={{
                color: activeEcosystem.color,
                borderColor: `${activeEcosystem.color}40`,
                background: `${activeEcosystem.color}15`,
              }}
            >
              {activeEcosystem.title} Architecture
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              Hover nodes to view specifications
            </span>
          </div>

          {/* SVG Connections & Nodes Grid */}
          <div className="relative flex-1 w-full my-2">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <defs>
                <linearGradient id={`grad-${activeEcosystem.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={activeEcosystem.color} stopOpacity="0.2" />
                  <stop offset="50%" stopColor={activeEcosystem.color} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={activeEcosystem.color} stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {activeEcosystem.edges.map((edge, idx) => {
                const fromNode = activeEcosystem.nodes.find((n) => n.id === edge.from);
                const toNode = activeEcosystem.nodes.find((n) => n.id === edge.to);
                if (!fromNode || !toNode) return null;

                const midX = (fromNode.x + toNode.x) / 2;
                const pathD = `M ${fromNode.x} ${fromNode.y} Q ${midX} ${(fromNode.y + toNode.y) / 2} ${toNode.x} ${toNode.y}`;

                return (
                  <g key={idx}>
                    <path
                      d={pathD}
                      stroke={`url(#grad-${activeEcosystem.id})`}
                      strokeWidth="1.5"
                      fill="none"
                      strokeDasharray="3 3"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Nodes */}
            {activeEcosystem.nodes.map((node) => {
              const isHovered = hoveredNodeId === node.id;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: isHovered ? 40 : 20,
                  }}
                >
                  {/* Outer pulse ring */}
                  <div
                    className="absolute -inset-2 rounded-full opacity-40 animate-ping pointer-events-none"
                    style={{ background: activeEcosystem.color }}
                  />

                  {/* Circle Button */}
                  <div
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-slate-900 flex items-center justify-center text-white border-2 shadow-lg transition-transform duration-300 hover:scale-125"
                    style={{
                      borderColor: activeEcosystem.color,
                      boxShadow: `0 0 15px ${activeEcosystem.color}66`,
                    }}
                  >
                    <Cpu className="h-5 w-5" style={{ color: activeEcosystem.color }} />
                  </div>

                  {/* Node Title underneath */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap pointer-events-none">
                    <div
                      className="text-[9px] uppercase tracking-wider font-mono font-bold"
                      style={{ color: activeEcosystem.color }}
                    >
                      {node.layer}
                    </div>
                    <div className="text-xs font-bold text-white">{node.label}</div>
                  </div>

                  {/* Hover Popup Detail Card */}
                  {isHovered && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-60 p-4 rounded-xl bg-slate-900 border border-white/20 shadow-2xl text-left pointer-events-none z-50 animate-in fade-in zoom-in-95 duration-200"
                      style={{
                        boxShadow: `0 10px 30px rgba(0,0,0,0.8), 0 0 15px ${activeEcosystem.color}33`,
                      }}
                    >
                      <span
                        className="text-[9px] font-mono font-bold uppercase tracking-wider"
                        style={{ color: activeEcosystem.color }}
                      >
                        {node.layer}
                      </span>
                      <h4 className="text-sm font-bold text-white mt-0.5">{node.label}</h4>
                      <p className="text-xs text-slate-300 mt-1 font-mono">{node.desc}</p>
                      <p className="text-[11px] text-slate-400 mt-2 leading-snug border-t border-white/10 pt-2">
                        {node.hoverDetail}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom legend */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3 px-2">
            <span className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full inline-block"
                style={{ background: activeEcosystem.color }}
              />
              Active Node Network
            </span>
            <span className="font-mono text-[11px]">Real-Time Telemetry Simulated</span>
          </div>
        </div>
      </div>
    </div>
  );
}
