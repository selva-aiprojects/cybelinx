"use client";

import { useState } from "react";
import { Globe, ShieldCheck, CheckCircle, Lock, Cpu, Server, FileCode } from "lucide-react";
import Section, { SectionHeading } from "./Section";

const regions = [
  {
    id: "us",
    name: "North America (US / CA)",
    flag: "🇺🇸",
    frameworks: [
      { title: "HIPAA / HITECH Act", status: "Auto-Enforced", detail: "End-to-end PHI encryption with BAA audit logs." },
      { title: "SOC 2 Type II", status: "Continuous Audit", detail: "Automated trust services criteria verification." },
      { title: "PCI-DSS Level 1", status: "Certified", detail: "Tokenized payment card data isolation." },
    ],
    jurisdictionNote: "Auto-configures US-East/West AWS & GCP regions with FIPS 140-2 HSM key management.",
  },
  {
    id: "eu",
    name: "European Union (EU)",
    flag: "🇪🇺",
    frameworks: [
      { title: "GDPR / EU Data Sovereignty", status: "Auto-Enforced", detail: "Strict cross-border data residency and right-to-be-forgotten webhooks." },
      { title: "EuroRec & NIS 2 Directive", status: "Certified", detail: "EU-wide health record and critical infrastructure compliance." },
      { title: "DORA (Digital Operational Resilience)", status: "Active Guardrail", detail: "Financial entity ICT risk management framework." },
    ],
    jurisdictionNote: "Auto-configures Frankfurt / Paris sovereign cloud nodes with zero data egress outside EU boundaries.",
  },
  {
    id: "in",
    name: "India & South Asia (IN)",
    flag: "🇮🇳",
    frameworks: [
      { title: "ABDM Level 2 Certification", status: "Native Integration", detail: "ABHA health ID linking & FHIR record gateway." },
      { title: "Multi-State Statutory Tax Rules", status: "Auto-Calculated", detail: "PF, PT, TDS, ESI, Gratuity, & LWF rules engine across 28 states." },
      { title: "DPDP Act 2023 Compliance", status: "Native Compliance", detail: "Consent manager integration and data fiduciary audit trails." },
    ],
    jurisdictionNote: "Auto-configures Mumbai / Hyderabad data pods adhering to RBI & MeitY localization directives.",
  },
  {
    id: "apac",
    name: "Asia-Pacific (APAC / SG / AU)",
    flag: "🇸🇬",
    frameworks: [
      { title: "MAS TRM Guidelines", status: "Auto-Enforced", detail: "Monetary Authority of Singapore technology risk management." },
      { title: "APRA CPS 234", status: "Active Guardrail", detail: "Australian Prudential Regulation Authority information security standard." },
      { title: "PDPA (Singapore)", status: "Certified", detail: "Personal Data Protection Act regulatory isolation." },
    ],
    jurisdictionNote: "Auto-configures Singapore & Sydney Kubernetes clusters with localized key vaults.",
  },
];

export default function GlobalRegulatoryEngine() {
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <div className="w-full">
      <SectionHeading
        eyebrow="Pluggable Compliance Architecture"
        title="Global Regulatory Adaptation Engine"
        description="Stop re-architecting for local laws. Cybelinx dynamically configures statutory rules, data residency boundaries, and encryption primitives based on your active deployment jurisdiction."
      />

      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 shadow-2xl backdrop-blur-2xl p-6 sm:p-8">
        
        {/* Region Switcher Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Select Target Jurisdiction:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {regions.map((region) => {
              const isSelected = region.id === selectedRegion.id;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-white shadow-md shadow-primary/25"
                      : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  <span className="text-base">{region.flag}</span>
                  <span>{region.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Region Compliance Dashboard */}
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {selectedRegion.frameworks.map((fw) => (
            <div
              key={fw.title}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 p-5 flex flex-col justify-between hover:border-primary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                    {fw.title}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                    <CheckCircle className="h-3 w-3" />
                    {fw.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {fw.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Auto-Configuration Callout */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-900/10 via-indigo-900/10 to-purple-900/10 border border-blue-500/20 p-4 sm:p-5 flex items-center gap-4">
          <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary">
              Auto-Configured Platform Behavior
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5 font-medium">
              {selectedRegion.jurisdictionNote}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
