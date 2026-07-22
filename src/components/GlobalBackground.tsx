"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] cinematic-bg">
      {/* Base noise texture for premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTUwLDE1MCwxNTAsMC4xNSkiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay" />

      {/* Vibrant background spots to make glass visible */}
      <motion.div
        animate={{
          x: ["0%", "10%", "-5%", "0%"],
          y: ["0%", "-10%", "5%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="cinematic-blob color-1"
        style={{ top: '-10%', left: '10%', width: '500px', height: '500px' }}
      />

      <motion.div
        animate={{
          x: ["0%", "-10%", "10%", "0%"],
          y: ["0%", "15%", "-5%", "0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="cinematic-blob color-2"
        style={{ bottom: '-10%', right: '10%', width: '600px', height: '600px' }}
      />
      
      {/* A soft wash to make sure text stays readable */}
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px] dark:bg-background/80" />
    </div>
  );
}
