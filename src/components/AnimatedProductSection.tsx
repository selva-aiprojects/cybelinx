"use client";

import { motion } from "framer-motion";
import { PortfolioContent } from "@/lib/portfolios";
import Button from "./Button";
import { CheckCircle2, ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function AnimatedProductSection({ content, index }: { content: PortfolioContent; index: number }) {
  const isEven = index % 2 === 0;

  // Determine glow color class based on theme
  const getGlowClass = (theme: string) => {
    switch (theme) {
      case "cyan":
      case "teal":
        return "orb-cyan bg-cyan-500/20";
      case "indigo":
      case "blue":
        return "orb-primary bg-indigo-500/20";
      case "emerald":
      case "green":
        return "orb-emerald bg-emerald-500/20";
      case "amber":
        return "orb-amber bg-amber-500/20";
      case "violet":
      case "rose":
      default:
        return "orb-violet bg-violet-500/20";
    }
  };

  return (
    <section className="relative py-24 overflow-hidden border-b border-border/50">
      {/* Background ambient mesh / gradient */}
      <div className={`absolute -top-40 ${isEven ? "-right-40" : "-left-40"} h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none opacity-40 ${getGlowClass(content.theme)}`} />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center"
        >
          {/* Text Content Block */}
          <div className={`flex flex-col ${!isEven ? "lg:order-2" : ""}`}>
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <span className="slugline block tracking-[0.2em] mb-0">{content.title}</span>
                {content.status === "phase-2" && (
                  <span className="inline-flex items-center rounded-md bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-inset ring-amber-500/20 dark:text-amber-400 dark:ring-amber-400/20">
                    Phase 2
                  </span>
                )}
              </div>
              <h2 className="font-display text-4xl font-extrabold text-surface tracking-tight sm:text-5xl mb-6 leading-tight">
                {content.hero.tagline}
              </h2>
            </motion.div>

            {/* Problem & Solution */}
            <motion.div variants={fadeUp} className="mt-8 space-y-8">
              <div className="glass p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-lg font-bold text-surface flex items-center gap-2 mb-4">
                  <Activity className="h-5 w-5 text-rose-500" />
                  The Challenge
                </h3>
                <ul className="space-y-3">
                  {content.problem.map((prob, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate text-sm leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate/40" />
                      {prob}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6 rounded-2xl border-primary/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-lg font-bold text-surface flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  Our Solution
                </h3>
                <p className="text-sm text-surface/90 mb-4 leading-relaxed font-medium">
                  {content.solution.description}
                </p>
                <ul className="space-y-3">
                  {content.solution.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate text-sm leading-relaxed">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <Button href={content.hero.ctaHref} variant="primary" size="lg" className="group">
                {content.hero.ctaLabel}
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Tech & Outcomes Block (Visual/Card Side) */}
          <div className={`flex flex-col gap-6 ${!isEven ? "lg:order-1" : ""}`}>
            <motion.div variants={fadeUp} className="spotlight-card p-8 rounded-3xl border-border relative">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-surface">Tech & Compliance</h3>
                </div>
                <ul className="space-y-4">
                  {content.tech.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate">
                      <div className="h-[1px] w-4 bg-primary/50" />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
              {content.outcomes.map((outcome, i) => (
                <div key={i} className="glass p-5 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-3xl font-extrabold gradient-text mb-2 block">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-xs font-semibold text-surface leading-snug">
                    {outcome}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
