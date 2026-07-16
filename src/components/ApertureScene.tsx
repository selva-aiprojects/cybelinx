"use client";

import { motion } from "framer-motion";

const blades = Array.from({ length: 8 });

export default function ApertureScene() {
  return (
    <div className="relative h-full w-full min-h-[320px] min-w-[320px] overflow-hidden rounded-lg bg-charcoal p-6 border border-border" aria-hidden="true">
      <motion.div
        className="absolute inset-0 origin-center bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,rgba(30,64,175,0.08)_360deg)] rounded-full"
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
            className="absolute left-1/2 top-1/2 h-[46%] w-[3px] origin-top bg-gradient-to-b from-primary/60 via-primary/20 to-transparent"
            style={{ transform: `rotate(${(360 / blades.length) * i}deg)` }}
          />
        ))}
        <div className="absolute inset-[12%] rounded-full border border-primary/30" />
        <div className="absolute inset-[24%] rounded-full border border-border" />
        <div className="absolute inset-[36%] rounded-full border border-border/50" />
      </motion.div>

      <div className="absolute left-1/2 top-[4%] h-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary to-transparent" />
      <div className="absolute left-1/2 bottom-[4%] h-4 w-[2px] -translate-x-1/2 bg-gradient-to-t from-primary to-transparent" />
      <div className="absolute top-1/2 left-[4%] h-[2px] w-4 -translate-y-1/2 bg-gradient-to-r from-primary to-transparent" />
      <div className="absolute top-1/2 right-[4%] h-[2px] w-4 -translate-y-1/2 bg-gradient-to-l from-primary to-transparent" />

      <div className="absolute left-[8%] top-[8%] flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        AI Precision
      </div>
      <div className="absolute right-[8%] top-[8%] text-[11px] font-bold uppercase tracking-widest text-slate bg-white px-2 py-0.5 rounded border border-border">
        Live Monitoring
      </div>
      <div className="absolute bottom-[8%] left-[8%] flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-accent">
        <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        &bull; Active
      </div>
      <div className="absolute bottom-[8%] right-[8%] text-[11px] font-bold uppercase tracking-widest text-slate">
        Real-Time
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-white font-display text-3xl font-bold text-primary shadow-sm">
        AI
      </div>
    </div>
  );
}
