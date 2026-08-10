"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight, Sparkles, ShieldCheck, Lock, Globe2 } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "ISO 27001" },
  { icon: Globe2, label: "GDPR Compliant" },
];

export default function CTABand({
  heading = "Build the platform your enterprise needs to scale.",
  subheading = "Schedule a strategy session to explore enterprise-ready solutions for AI, operations, compliance, and digital growth.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl p-[1.5px] animated-conic-border">
      {/* Inner container */}
      <div className="glass-premium shiny-card-active relative overflow-hidden rounded-[calc(1.5rem-1.5px)] px-10 py-14 text-center md:px-20 md:py-20 border border-white/20 dark:border-white/15">
        {/* Ambient orbs */}
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(123,97,255,0.35), transparent 70%)" }} />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full blur-3xl animate-pulse-glow pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,194,255,0.25), transparent 70%)", animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(13,71,255,0.18), transparent 60%)" }} />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="shiny-badge mb-6 cursor-default">
              <Sparkles className="h-3.5 w-3.5" />
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-[1.08] max-w-3xl mx-auto"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
          >
            {subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              href="/contact"
              variant="shiny"
              size="lg"
            >
              Book a Demo
            </Button>
            <Button
              href="/products"
              variant="glass"
              size="lg"
              className="text-white hover:text-white"
            >
              Browse Products
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap justify-center items-center gap-6"
          >
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2 text-xs text-white/40">
                  <Icon className="h-3.5 w-3.5 text-white/30" />
                  {badge.label}
                </div>
              );
            })}
            <span className="text-white/20 text-xs hidden sm:block">·</span>
            <span className="text-xs text-white/35">No credit card required</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}