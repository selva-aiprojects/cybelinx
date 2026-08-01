"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { platformPillars, type PlatformPillar } from "@/lib/content";

/* ── Per-pillar accent system ─────────────────────── */
const accents = [
  { from: "#0D47FF", to: "#4FD8FF", text: "#4FD8FF", glow: "rgba(13,71,255,0.5)" },
  { from: "#7B61FF", to: "#C084FC", text: "#C084FC", glow: "rgba(123,97,255,0.5)" },
  { from: "#00C2FF", to: "#4FD8FF", text: "#00C2FF", glow: "rgba(0,194,255,0.5)" },
  { from: "#8B5CF6", to: "#C084FC", text: "#C084FC", glow: "rgba(139,92,246,0.5)" },
  { from: "#10B981", to: "#0D47FF", text: "#10B981", glow: "rgba(16,185,129,0.5)" },
];

/* ── Bento grid spans — feature card + wider middle ── */
const gridSpans = [
  "md:col-span-2", // Feature card: Web & SaaS/PaaS
  "",              // AI Agentic
  "",              // DevSecOps
  "",              // Quantum (last row left)
  "md:col-span-2", // Data Platform (last row right, wide)
];

/* ── Shared variants ─────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.2, staggerChildren: 0.11 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.97, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── 3D Tilt + Spotlight Card ────────────────────── */
function TiltCard({
  pillar,
  accent,
  index,
  className = "",
}: {
  pillar: PlatformPillar;
  accent: (typeof accents)[number];
  index: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 150,
    damping: 18,
  });

  /* Mouse-tracking spotlight */
  const spotlight = useMotionValue(
    "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)"
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
    spotlight.set(
      `radial-gradient(600px circle at ${((e.clientX - rect.left) / rect.width) * 100
      }% ${((e.clientY - rect.top) / rect.height) * 100}%, ${accent.glow} 0%, transparent 55%)`
    );
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mx.set(0);
    my.set(0);
    spotlight.set(
      "radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)"
    );
  };

  const Icon = pillar.icon;

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-shadow duration-500 ${className}`}
      whileHover={{
        boxShadow: `0 24px 80px ${accent.glow}, 0 0 0 1px ${accent.glow}`,
        transition: { duration: 0.35 },
      }}
    >
      {/* Animated conic gradient border — on hover */}
      <div
        className={`animated-border-conic transition-opacity duration-500 ${hovered ? "opacity-100" : "opacity-0"
          }`}
        style={{ "--border-c": accent.from } as React.CSSProperties}
      />

      {/* Mouse-tracking spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background: spotlight }}
      />

      {/* Ambient corner glow */}
      <div
        className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-700 ${hovered ? "opacity-30" : "opacity-10"
          }`}
        style={{ background: `radial-gradient(circle, ${accent.from}, transparent 70%)` }}
      />

      {/* Giant watermark numeral */}
      <span
        className="pointer-events-none absolute -top-4 right-3 font-display text-[7rem] font-extrabold leading-none tracking-tighter select-none transition-colors duration-500"
        style={{
          color: hovered ? `${accent.from}26` : "rgba(255,255,255,0.04)",
        }}
      >
        0{index + 1}
      </span>

      {/* Inner content translated on the Z axis for a 3D pop */}
      <div
        className="relative z-10 flex h-full flex-col p-7 md:p-8"
        style={{ transform: "translateZ(32px)" }}
      >
        <div className="mb-6 flex items-center justify-between">
          {/* Icon */}
          <motion.div
            className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accent.from}2e, ${accent.to}2e)`,
              border: `1px solid ${accent.from}55`,
              boxShadow: hovered ? `0 0 24px ${accent.glow}` : "none",
            }}
            whileHover={{ scale: 1.15, rotate: 6 }}
            transition={{ type: "spring", stiffness: 380, damping: 15 }}
          >
            <Icon className="h-6 w-6" style={{ color: accent.text }} />
          </motion.div>

          {/* Pillar chip */}
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest"
            style={{
              background: `${accent.from}1a`,
              color: accent.text,
              border: `1px solid ${accent.from}40`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse-glow"
              style={{ background: accent.text }}
            />
            Pillar 0{index + 1}
          </span>
        </div>

        <h3
          className="font-display text-xl font-bold text-white transition-all duration-300 md:text-2xl"
          style={{ textShadow: hovered ? `0 0 24px ${accent.glow}` : "none" }}
        >
          {pillar.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-slate/75">
          {pillar.description}
        </p>

        {/* Outcome chip */}
        <div
          className="mt-6 inline-flex items-start gap-2.5 rounded-xl px-4 py-3 text-xs font-semibold leading-snug transition-all duration-300"
          style={{
            background: hovered ? `${accent.from}1f` : `${accent.from}0f`,
            border: `1px solid ${accent.from}35`,
            color: accent.text,
            boxShadow: hovered ? `0 8px 32px ${accent.glow}22` : "none",
          }}
        >
          <span
            className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: accent.text, boxShadow: `0 0 8px ${accent.text}` }}
          />
          {pillar.outcome}
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────── */
export default function PlatformPillars() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  /* Magnetic CTA */
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaX = useMotionValue(0);
  const ctaY = useMotionValue(0);
  const ctaSpringX = useSpring(ctaX, { stiffness: 200, damping: 14 });
  const ctaSpringY = useSpring(ctaY, { stiffness: 200, damping: 14 });

  const handleCtaMove = (e: React.MouseEvent) => {
    const rect = ctaRef.current?.getBoundingClientRect();
    if (!rect) return;
    ctaX.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    ctaY.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleCtaLeave = () => {
    ctaX.set(0);
    ctaY.set(0);
  };

  return (
    <>
      {/* ── Animated Header ─────────────────────── */}
      <motion.div
        ref={headerRef}
        className="relative mx-auto mb-16 flex max-w-3xl flex-col items-center text-center"
        variants={headerContainer}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
      >
        {/* Glow orb behind badge */}
        <motion.div
          variants={headerItem}
          className="absolute -top-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(13,71,255,0.25), transparent 70%)",
          }}
          aria-hidden
        />

        <motion.span
          variants={headerItem}
          className="relative inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          The Cybelinx Platform
        </motion.span>

        <motion.h2
          variants={headerItem}
          className="relative mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Five pillars.{" "}
          <span className="text-gradient-animated">One foundation.</span>
        </motion.h2>

        <motion.p
          variants={headerItem}
          className="relative mt-6 max-w-2xl text-base leading-relaxed text-slate/80 md:text-lg"
        >
          SaaS/PaaS, AI & LLM, DevSecOps, a world-class data platform, and
          quantum-ready engineering — unified on a single regulated enterprise core.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={headerItem}
          className="relative mt-8 h-px w-56 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />
      </motion.div>

      {/* ── Bento Grid ──────────────────────────── */}
      <motion.div
        ref={gridRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid gap-5 md:grid-cols-3"
      >
        {platformPillars.map((pillar, index) => {
          const accent = accents[index % accents.length];
          const span = gridSpans[index % gridSpans.length];
          return (
            <TiltCard
              key={pillar.slug}
              pillar={pillar}
              index={index}
              accent={accent}
              className={span}
            />
          );
        })}
      </motion.div>

      {/* ── Magnetic CTA ────────────────────────── */}
      <motion.div
        ref={ctaRef}
        className="mt-14 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleCtaMove}
        onMouseLeave={handleCtaLeave}
        style={{ x: ctaSpringX, y: ctaSpringY }}
      >
        <Link
          href="/technologies"
          className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white transition-all duration-300"
        >
          {/* Gradient background */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-violet to-accent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
          {/* Animated shimmer on hover */}
          <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100" />

          {/* Border glow */}
          <span className="absolute inset-0 rounded-full ring-1 ring-white/20 transition-all duration-300 group-hover:ring-white/40" />
          <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-violet to-accent opacity-30 blur-lg transition-opacity duration-300 group-hover:opacity-60" />

          <span className="relative z-10">Explore the full technology stack</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </>
  );
}