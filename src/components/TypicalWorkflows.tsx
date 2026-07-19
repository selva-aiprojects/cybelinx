"use client";

import { motion } from "framer-motion";
import { Copy, Workflow, Brain, Settings2 } from "lucide-react";

const workflows = [
  {
    title: "Onboarding new tenants and environments",
    description: "Use golden-path templates to provision new tenants, environments (dev, test, staging, prod), and baseline policies through the developer portal. Apply consistent tagging, access control, and compliance settings from day one, so every new customer or business unit starts on the same secure, observable footing.",
    icon: Copy,
  },
  {
    title: "Connecting existing CI/CD pipelines",
    description: "Integrate your preferred CI/CD tools (GitHub Actions, GitLab CI, Azure DevOps, Jenkins) with Cybelinx DevSecOps to standardize builds, scans, and deployments across clouds. Enforce security, compliance, and quality gates in pipelines without writing custom glue code for each team or stack.",
    icon: Workflow,
  },
  {
    title: "Adding AI and LLM features to products",
    description: "Plug products into the shared data and AI layer to enable use cases like anomaly detection, document analysis, conversational support, and workflow automation. Expose tenant-aware LLM APIs with centralized governance, monitoring, and cost controls, instead of building separate AI stacks per product.",
    icon: Brain,
  },
  {
    title: "Rolling out policies and changes across tenants",
    description: "Define guardrails as code—security baselines, tagging rules, resource limits, data residency constraints—and roll them out across tenants and environments from the platform layer. Use feature flags and configuration management to ship changes safely, test in controlled subsets of tenants, and avoid disruptive big-bang releases.",
    icon: Settings2,
  },
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
