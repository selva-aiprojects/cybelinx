"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABand({
  heading = "Ready to transform your enterprise platform?",
  subheading = "Book a demo or start a trial of CybeHRM or CybeHMS — see what an AI-native, multi-tenant platform can do for your team.",
}: {
  heading?: string;
  subheading?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep via-violet to-accent-warm p-[1px]">
      {/* Gradient border wrapper */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e1b5e] via-[#2d1b69] to-[#0c4a6e] p-12 text-center md:p-20">
        {/* Ambient orbs */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet/30 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 backdrop-blur-sm mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto"
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
              className="!bg-white !text-primary-deep !font-bold hover:!bg-white/90 !shadow-xl hover:!shadow-2xl"
              size="lg"
            >
              Book a Demo
            </Button>
            <Button
              href="/products"
              variant="ghost"
              size="lg"
              className="!text-white/85 hover:!text-white hover:!bg-white/10 !border !border-white/20"
            >
              Browse Products
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </motion.div>

          {/* Trust footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-xs text-white/40"
          >
            No credit card required · SOC 2 Type II · 99.9% Uptime SLA
          </motion.p>
        </div>
      </div>
    </div>
  );
}
