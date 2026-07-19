"use client";

import { motion } from "framer-motion";
import { Server, Database, Code, ShieldCheck } from "lucide-react";

export default function ArchitectureEcosystem() {
  const layers = [
    {
      id: "services",
      name: "Platform Services & DX",
      icon: Code,
      color: "bg-cyan/10 border-cyan/20 text-cyan",
      textColor: "text-cyan",
      items: ["Internal Developer Portal", "Golden-Path Templates", "CI/CD Pipeline Automation", "Feature Flags"],
    },
    {
      id: "data",
      name: "Data & Multi-Tenancy",
      icon: Database,
      color: "bg-violet/10 border-violet/20 text-violet",
      textColor: "text-violet",
      items: ["Isolated Tenant Schemas", "Vector Embeddings DB", "Distributed Caching", "Automated Backup"],
    },
    {
      id: "infra",
      name: "Core Infrastructure",
      icon: Server,
      color: "bg-primary/10 border-primary/20 text-primary",
      textColor: "text-primary",
      items: ["AWS / GCP Multi-Region", "Kubernetes Clusters", "Zero-Trust Service Mesh", "Failover & DR"],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mb-12 text-center">
          <span className="slugline">Platform Architecture</span>
          <h3 className="mt-4 font-display text-3xl font-bold text-surface md:text-4xl">The Cybelinx Stack</h3>
          <p className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-slate">
            Engineered for strict tenant isolation, high-throughput AI inference, and enterprise-grade reliability across every product.
          </p>
        </div>
      </motion.div>

      <div className="relative flex flex-col md:flex-row gap-6">
        {/* Security & Compliance Vertical Pillar (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-64 shrink-0 rounded-2xl border border-primary/30 bg-primary/5 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
          <ShieldCheck className="h-10 w-10 text-primary mb-4" />
          <h4 className="font-display text-lg font-bold text-surface">Security & Compliance</h4>
          <div className="mt-4 flex flex-col gap-3 w-full">
            {["SOC 2 Type II", "End-to-End Encryption", "RBAC & SAML/SSO", "Immutable Audit Logs"].map((item) => (
              <div key={item} className="rounded bg-background/50 border border-primary/10 py-2 px-3 text-xs font-semibold text-primary/80">
                {item}
              </div>
            ))}
          </div>
          <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/20">
            <svg width="24" height="120" viewBox="0 0 24 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60L24 60" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M0 20L24 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
              <path d="M0 100L24 100" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
            </svg>
          </div>
        </motion.div>

        {/* Stacked Layers (Right) */}
        <div className="flex-1 flex flex-col gap-4">
          {layers.map((layer, idx) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
              className={`relative rounded-2xl border ${layer.color} p-6 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20 z-0"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-3">
                    <layer.icon className={`h-6 w-6 ${layer.textColor}`} />
                    <h4 className="font-display text-lg font-bold text-surface">{layer.name}</h4>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-3">
                  {layer.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs font-medium text-slate">
                      <span className={layer.textColor}>▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
