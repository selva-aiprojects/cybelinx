"use client";

import { motion } from "framer-motion";

const blades = Array.from({ length: 8 });

export default function ApertureScene() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <motion.div
        className="absolute inset-[10%] rounded-full"
        initial={{ rotate: -18, scale: 0.9, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {blades.map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 h-[46%] w-[3px] origin-top bg-gradient-to-b from-primary/70 to-transparent"
            style={{ transform: `rotate(${(360 / blades.length) * i}deg)` }}
          />
        ))}
        <div className="absolute inset-[12%] rounded-full border border-primary/30" />
        <div className="absolute inset-[24%] rounded-full border border-primary/30" />
        <div className="absolute inset-[36%] rounded-full border border-surface/10" />
      </motion.div>

      <div className="absolute inset-[30%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(74,159,223,0.28),transparent_45%,rgba(96,200,224,0.22)_75%,transparent_100%)]" />

      <div className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-surface/15" />
      <div className="absolute left-1/2 top-[4%] h-3 w-px -translate-x-1/2 bg-surface/30" />
      <div className="absolute left-1/2 bottom-[4%] h-3 w-px -translate-x-1/2 bg-surface/30" />
      <div className="absolute top-1/2 left-[4%] h-px w-3 -translate-y-1/2 bg-surface/30" />
      <div className="absolute top-1/2 right-[4%] h-px w-3 -translate-y-1/2 bg-surface/30" />

      <div className="absolute left-[8%] top-[8%] font-slug text-[10px] tracking-widest text-surface/60">
        f/1.8
      </div>
      <div className="absolute right-[8%] top-[8%] font-slug text-[10px] tracking-widest text-surface/60">
        24 FPS
      </div>
      <div className="absolute bottom-[8%] left-[8%] font-slug text-[10px] tracking-widest text-primary">
        &bull; REC
      </div>
      <div className="absolute bottom-[8%] right-[8%] font-slug text-[10px] tracking-widest text-surface/60">
        ISO 800
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-[radial-gradient(circle,rgba(74,159,223,0.25),rgba(96,200,224,0.14),transparent)] font-display text-3xl font-semibold text-surface shadow-[0_0_50px_rgba(74,159,223,0.25)]">
        X
      </div>
    </div>
  );
}
