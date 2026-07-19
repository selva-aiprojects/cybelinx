"use client";

import { motion } from "framer-motion";
import { Copy, Workflow, Brain, Settings2, Activity } from "lucide-react";

const workflows = [
  {
    title: "Onboard new tenants and environments",
    description: "Use golden-path templates and the developer portal, with tagging, access control, and compliance baselines applied from day one.",
    icon: Copy,
  },
  {
    title: "Connect existing CI/CD pipelines",
    description: "Connect pipelines (GitHub Actions, GitLab CI, Azure DevOps, Jenkins) to Cybelinx DevSecOps so builds, scans, and deployments follow standard patterns across clouds.",
    icon: Workflow,
  },
  {
    title: "Add AI and LLM features",
    description: "Plug products into the shared data and model orchestration layer, exposing tenant-aware LLM APIs with centralized governance and observability.",
    icon: Brain,
  },
  {
    title: "Roll out policies and changes",
    description: "Use guardrails as code and feature flags, testing safely in subsets of tenants instead of big-bang releases.",
    icon: Settings2,
  },
  {
    title: "Operate live environments",
    description: "Share dashboards, alerts, and platform-level telemetry to reduce manual incidents and continuously improve pipelines and policies.",
    icon: Activity,
  }
];

export default function TypicalWorkflows() {
  return (
    <div>
      <div className="mb-10">
        <h3 className="font-display text-3xl font-bold text-surface md:text-4xl">
          Typical workflows for platform & DevOps teams
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
          Cybelinx is designed around the daily workflows of platform, DevOps, and SRE teams in regulated enterprises. Instead of wiring every product and environment from scratch, teams reuse a proven, multi-tenant foundation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workflows.map((workflow, index) => (
          <motion.div
            key={workflow.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card-bg p-8 transition-all hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/40"
          >
            <div className="flex flex-col h-full">
              <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <workflow.icon className="h-6 w-6" />
              </div>
              <h4 className="mb-3 font-display text-xl font-bold text-surface">{workflow.title}</h4>
              <p className="text-sm leading-relaxed text-slate">{workflow.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center"
      >
        <p className="text-sm font-medium text-surface">
          These workflows are designed to reduce repetitive ops work and ticket churn, while giving engineering and platform teams a standardized way to ship and operate new regulated SaaS products.
        </p>
      </motion.div>
    </div>
  );
}
