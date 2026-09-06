"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {/* ── Pearl Light Theme Base ─────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafd] via-[#f1f6fd] to-[#eef4fd] dark:bg-[#020918]" />

      {/* ── Iridescent Pearl Dot Grid ────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(13,71,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Pearl Shimmer Prismatic Light Rays ─────── */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,247,255,0.4) 30%, rgba(255,250,255,0.3) 60%, rgba(235,245,255,0.6) 100%)",
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

      {/* ── Specular Cyan-Pearl floating orb (top-left) ─ */}
      <motion.div
        animate={{
          x: ["0%", "5%", "-3%", "0%"],
          y: ["0%", "-5%", "4%", "0%"],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          top: "-12%",
          left: "8%",
          width: "650px",
          height: "650px",
          background:
            "radial-gradient(circle, rgba(0,194,255,0.11) 0%, rgba(79,216,255,0.05) 35%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* ── Iridescent Violet-Lavender orb (center-right) ─ */}
      <motion.div
        animate={{
          x: ["0%", "-4%", "6%", "0%"],
          y: ["0%", "8%", "-4%", "0%"],
          scale: [1, 0.94, 1.05, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          top: "35%",
          right: "10%",
          width: "550px",
          height: "550px",
          background:
            "radial-gradient(circle, rgba(123,97,255,0.09) 0%, rgba(255,184,230,0.04) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* ── Electric Sapphire Core orb (bottom-left) ───── */}
      <motion.div
        animate={{
          x: ["0%", "6%", "-4%", "0%"],
          y: ["0%", "-6%", "5%", "0%"],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full"
        style={{
          bottom: "-15%",
          left: "15%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle, rgba(13,71,255,0.09) 0%, rgba(0,194,255,0.03) 45%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* ── Top Prismatic Bevel Line ───────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(13,71,255,0.4) 15%, rgba(0,194,255,0.8) 45%, rgba(123,97,255,0.7) 75%, transparent 100%)",
          opacity: 0.8,
        }}
      />
    </div>
  );
}
