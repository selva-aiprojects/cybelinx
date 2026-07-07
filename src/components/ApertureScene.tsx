"use client";

import { motion } from "framer-motion";

const blades = Array.from({ length: 8 });

export default function ApertureScene() {
  return (
    <div className="relative h-full w-full min-h-[320px] min-w-[320px] overflow-hidden rounded-2xl bg-gradient-to-br from-surface/[0.04] to-ink/80 p-6 border border-surface/10 shadow-2xl" aria-hidden="true">
      {/* Rotating Radar Scanner Sweep */}
      <motion.div
        className="absolute inset-0 origin-center bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(96,200,224,0.15)_360deg)] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute inset-[10%] rounded-full"
        initial={{ rotate: -18, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {blades.map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[46%] w-[3px] origin-top bg-gradient-to-b from-primary/80 via-cyan/40 to-transparent shadow-[0_0_8px_rgba(96,200,224,0.4)]"
            style={{ transform: `rotate(${(360 / blades.length) * i}deg)` }}
          />
        ))}
        <div className="absolute inset-[12%] rounded-full border border-primary/40 shadow-[0_0_20px_rgba(74,159,223,0.15)] animate-pulse-glow" />
        <div className="absolute inset-[24%] rounded-full border border-cyan/30" />
        <div className="absolute inset-[36%] rounded-full border border-surface/15" />
      </motion.div>

      <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(74,159,223,0.32),transparent_45%,rgba(96,200,224,0.25)_75%,transparent_100%)] animate-pulse-glow" />

      {/* Glowing Data Streams moving along axes */}
      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary/30 animate-spin" style={{ animationDuration: "30s" }} />
      
      <div className="absolute left-1/2 top-[4%] h-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan to-transparent shadow-[0_0_8px_#60c8e0]" />
      <div className="absolute left-1/2 bottom-[4%] h-4 w-[2px] -translate-x-1/2 bg-gradient-to-t from-cyan to-transparent shadow-[0_0_8px_#60c8e0]" />
      <div className="absolute top-1/2 left-[4%] h-[2px] w-4 -translate-y-1/2 bg-gradient-to-r from-cyan to-transparent shadow-[0_0_8px_#60c8e0]" />
      <div className="absolute top-1/2 right-[4%] h-[2px] w-4 -translate-y-1/2 bg-gradient-to-l from-cyan to-transparent shadow-[0_0_8px_#60c8e0]" />

      {/* Pro-Max HUD Indicators */}
      <div className="absolute left-[8%] top-[8%] flex items-center gap-1.5 font-slug text-[11px] font-bold tracking-widest text-cyan">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-ping" />
        AI PRECISION f/1.8
      </div>
      <div className="absolute right-[8%] top-[8%] font-slug text-[11px] font-bold tracking-widest text-surface/80 bg-surface/10 px-2 py-0.5 rounded border border-surface/20">
        60 FPS LIVE
      </div>
      <div className="absolute bottom-[8%] left-[8%] flex items-center gap-1.5 font-slug text-[11px] font-bold tracking-widest text-rose-400">
        <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
        &bull; REC STREAM
      </div>
      <div className="absolute bottom-[8%] right-[8%] font-slug text-[11px] font-bold tracking-widest text-primary">
        ISO 800
      </div>

      {/* Central Core Pulsing Node */}
      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/60 bg-[radial-gradient(circle,rgba(74,159,223,0.4),rgba(96,200,224,0.2),transparent)] font-display text-3xl font-bold text-white shadow-[0_0_50px_rgba(96,200,224,0.4)] animate-pulse-glow">
        <span className="bg-glow-gradient bg-clip-text text-transparent">AI</span>
      </div>
    </div>
  );
}
