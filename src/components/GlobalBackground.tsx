"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* Base noise texture for premium feel */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTUwLDE1MCwxNTAsMC4xNSkiLz48L3N2Zz4=')] opacity-20 mix-blend-overlay" />

      {/* Ambient glowing orbs that slowly float around */}
      <motion.div
        animate={{
          x: ["0%", "20%", "-10%", "0%"],
          y: ["0%", "-20%", "10%", "0%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-[20vw] w-[60vw] h-[60vw] rounded-full filter blur-[150px] opacity-[0.15] dark:opacity-10 bg-primary/40 mix-blend-screen"
      />

      <motion.div
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "30%", "-10%", "0%"],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -right-[20vw] w-[50vw] h-[50vw] rounded-full filter blur-[120px] opacity-[0.15] dark:opacity-10 bg-violet/40 mix-blend-screen"
      />

      <motion.div
        animate={{
          x: ["0%", "30%", "-20%", "0%"],
          y: ["0%", "10%", "30%", "0%"],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20vw] left-1/3 w-[70vw] h-[70vw] rounded-full filter blur-[180px] opacity-[0.1] dark:opacity-5 bg-teal-500/30 mix-blend-screen"
      />
      
      {/* A soft wash to make sure text stays readable */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
    </div>
  );
}
