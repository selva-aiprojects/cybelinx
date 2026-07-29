"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Light theme background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/50" />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wMykiLz48L3N2Zz4=')] opacity-30" />

      {/* Subtle light glowing orbs */}
      <motion.div
        animate={{
          x: ["0%", "8%", "-4%", "0%"],
          y: ["0%", "-8%", "4%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full opacity-[0.08]"
        style={{
          top: '-10%', left: '10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, #0D47FF, transparent)',
        }}
      />

      <motion.div
        animate={{
          x: ["0%", "-8%", "8%", "0%"],
          y: ["0%", "12%", "-4%", "0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full opacity-[0.06]"
        style={{
          bottom: '-10%', right: '10%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, #00C2FF, transparent)',
        }}
      />

      {/* Dark theme overrides */}
      <div className="absolute inset-0 bg-background/0 dark:bg-background/80 dark:backdrop-blur-[2px]" />
    </div>
  );
}
