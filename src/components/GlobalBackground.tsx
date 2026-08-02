"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* ── Light theme base ─────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#eff4fb] dark:bg-[#020918]" />

      {/* ── Subtle dot grid ──────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(13,71,255,0.045) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* ── Light theme: diagonal gradient stripe ── */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(238,242,255,0.7) 0%, rgba(255,255,255,0) 40%, rgba(240,247,255,0.5) 100%)",
        }}
      />

      {/* ── Dark theme: rich deep gradient ─────── */}
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "linear-gradient(160deg, #020918 0%, #050d24 50%, #020c1f 100%)",
        }}
      />

      {/* ── Primary floating orb (top-left) ─────── */}
      <motion.div
        animate={{
          x: ["0%", "6%", "-3%", "0%"],
          y: ["0%", "-6%", "3%", "0%"],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          top: "-15%",
          left: "5%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(13,71,255,0.12) 0%, rgba(13,71,255,0.04) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* ── Cyan orb (bottom-right) ──────────────── */}
      <motion.div
        animate={{
          x: ["0%", "-5%", "8%", "0%"],
          y: ["0%", "10%", "-3%", "0%"],
          scale: [1, 0.92, 1.05, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          bottom: "-20%",
          right: "5%",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.10) 0%, rgba(0,194,255,0.03) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── Violet orb (center-right) ────────────── */}
      <motion.div
        animate={{
          x: ["0%", "4%", "-6%", "0%"],
          y: ["0%", "-8%", "5%", "0%"],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          top: "40%",
          right: "15%",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(123,97,255,0.09) 0%, transparent 70%)",
          filter: "blur(16px)",
        }}
      />

      {/* ── Top accent line ──────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #0D47FF 20%, #7B61FF 50%, #00C2FF 80%, transparent 100%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
