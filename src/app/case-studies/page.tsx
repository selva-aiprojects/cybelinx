"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  HeartPulse,
  Landmark,
  Users,
  Hotel,
  CheckCircle2,
  TrendingUp,
  Clock,
  Shield,
  ArrowRight,
  BookOpen,
  Filter,
} from "lucide-react";

// ── Case Studies Data ──────────────────────────────────────────────────────
const caseStudies = [
  {
    id: "cs-001",
    industry: "Healthcare",
    industryId: "healthcare",
    icon: HeartPulse,
    color: "#10B981",
    company: "Multi-Specialty Hospital Group",
    region: "South India · 6 hospitals · 2,400 beds",
    challenge:
      "Manual patient registration and clinical documentation across 6 hospitals created data silos, 4-hour average admission time, and ABDM non-compliance penalties.",
    solution:
      "Deployed CybeHealth with AI-powered ABDM health record synchronization, automated OPD registration, and NLP-based SOAP note generation from doctor voice dictation.",
    outcomes: [
      { metric: "72%", label: "reduction in patient admission time (4h → 68 min)" },
      { metric: "99.1%", label: "ABDM compliance score — zero penalties post-deployment" },
      { metric: "₹1.2Cr", label: "annual savings from eliminated manual data entry roles" },
    ],
    tags: ["ABDM", "EHR/EMR", "AI Copilot", "Voice NLP"],
  },
  {
    id: "cs-002",
    industry: "Banking",
    industryId: "banking",
    icon: Landmark,
    color: "#0D47FF",
    company: "Regional Private Sector Bank",
    region: "Pan-India · 340+ branches · 18 lakh customers",
    challenge:
      "Legacy core banking system causing 3-second transaction latency, 14% KYC rejection rate due to document quality issues, and manual AML monitoring with 48-hour investigation cycles.",
    solution:
      "Migrated to CybeBank with real-time transaction processing, AI-powered KYC document intelligence (Aadhaar/PAN/GSTIN), and automated AML rule engine with ML anomaly scoring.",
    outcomes: [
      { metric: "98ms", label: "average transaction processing latency (from 3.2s)" },
      { metric: "40%", label: "reduction in KYC rejection rate via AI document validation" },
      { metric: "6 hrs", label: "AML investigation cycle reduced from 48 hours" },
    ],
    tags: ["Core Banking", "KYC/AML", "Real-time", "AI Risk Engine"],
  },
  {
    id: "cs-003",
    industry: "HCM",
    industryId: "hcm",
    icon: Users,
    color: "#7B61FF",
    company: "Pan-India Manufacturing Conglomerate",
    region: "12 subsidiaries · 22,000+ employees · 8 states",
    challenge:
      "Fragmented HRMS across subsidiaries with manual statutory compliance across 8 state labour laws, 40% payroll errors, and no visibility into workforce attrition risk.",
    solution:
      "Unified HRM on CybeHRMS / Synthalyst with multi-entity payroll automation, AI statutory rule engine covering PF/ESI/PT/TDS/gratuity, and ML attrition prediction model.",
    outcomes: [
      { metric: "40%", label: "reduction in payroll processing errors post-automation" },
      { metric: "₹86L", label: "annual statutory penalty avoidance across 8 states" },
      { metric: "89%", label: "accuracy in 90-day attrition prediction model" },
    ],
    tags: ["Payroll Automation", "Multi-entity", "Statutory AI", "Attrition ML"],
  },
  {
    id: "cs-004",
    industry: "Hospitality",
    industryId: "hospitality",
    icon: Hotel,
    color: "#F59E0B",
    company: "Boutique Hotel Chain",
    region: "India + UAE · 24 properties · 3,200 rooms",
    challenge:
      "Manual revenue management, siloed PMS systems per property, and no unified guest intelligence leading to 38% lower RevPAR vs market benchmark.",
    solution:
      "Deployed CybeHospitality / HostSphere with unified PMS, AI dynamic pricing engine, predictive demand forecasting, and multilingual AI concierge via WhatsApp.",
    outcomes: [
      { metric: "22%", label: "RevPAR improvement within 6 months of AI pricing deployment" },
      { metric: "99.97%", label: "platform uptime across 24 properties and 2 countries" },
      { metric: "18%", label: "housekeeping labor cost reduction via predictive scheduling" },
    ],
    tags: ["Revenue Management", "AI Pricing", "PMS Unification", "Guest AI"],
  },
];

// ── Pattern Library ────────────────────────────────────────────────────────
const patternLibrary = [
  {
    pattern: "Multi-Entity Payroll Compliance at Scale",
    industry: "HCM / Manufacturing",
    approach:
      "Unified statutory rule engine with per-state configuration. Automated PF, ESI, PT, and TDS computation with real-time TRACES reconciliation.",
    outcome: "Zero statutory penalties. 8-state coverage from a single payroll run.",
  },
  {
    pattern: "AI-Accelerated KYC & Onboarding",
    industry: "Banking / FinTech",
    approach:
      "Document intelligence pipeline: OCR → entity extraction → Aadhaar/PAN API cross-verification → risk scoring. Human review only on medium/high-risk cases.",
    outcome: "Sub-30-second KYC turnaround for 85%+ of customers.",
  },
  {
    pattern: "Predictive Demand & Revenue Optimization",
    industry: "Hospitality / Retail",
    approach:
      "Time-series ML model on historical occupancy, seasonality, events, and competitor pricing. Dynamic rate recommendations published to OTA channels every 4 hours.",
    outcome: "15–25% RevPAR improvement documented across 3 hotel chain deployments.",
  },
];

const allFilters = ["All", "Healthcare", "Banking", "HCM", "Hospitality"];

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === activeFilter);

  return (
    <>
      <Section className="pt-16 pb-0">
        <AnimatedSection>
          <PageHeader
            eyebrow="Case Studies"
            title="Proof in production."
            description="Selected enterprise programs demonstrating measurable scale, reliability, and business impact powered by Cybelinx product platforms. Identifying details anonymized per client agreements."
          />
        </AnimatedSection>
      </Section>

      {/* ── Filter Tabs ────────────────────────────────────────────────── */}
      <Section className="py-6">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-slate/50" />
            {allFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-md"
                    : "border border-border bg-background text-slate hover:text-surface"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Case Study Cards ───────────────────────────────────────────── */}
      <Section textured className="py-8">
        <div className="grid gap-6">
          {filtered.map((cs, i) => {
            const Icon = cs.icon;
            return (
              <AnimatedSection key={cs.id} delay={i * 0.1}>
                <div
                  className="rounded-2xl border bg-background p-8 transition-all hover:shadow-lg"
                  style={{ borderColor: `${cs.color}25` }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                        style={{ background: `${cs.color}15`, border: `1px solid ${cs.color}35` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: cs.color }} />
                      </div>
                      <div>
                        <div className="font-semibold text-surface">{cs.company}</div>
                        <div className="text-xs text-slate/60 mt-0.5">{cs.region}</div>
                      </div>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                      style={{ background: `${cs.color}15`, color: cs.color }}
                    >
                      {cs.industry}
                    </span>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-[1fr,1fr,auto]">
                    {/* Challenge */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate/50 mb-2">Challenge</div>
                      <p className="text-sm leading-relaxed text-slate">{cs.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate/50 mb-2">Solution</div>
                      <p className="text-sm leading-relaxed text-slate">{cs.solution}</p>
                    </div>

                    {/* Outcomes */}
                    <div className="min-w-[200px]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate/50 mb-3">Outcomes</div>
                      <div className="space-y-3">
                        {cs.outcomes.map((outcome, j) => (
                          <div key={j} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: cs.color }} />
                            <div>
                              <span className="font-display text-lg font-extrabold" style={{ color: cs.color }}>
                                {outcome.metric}
                              </span>
                              <span className="ml-1.5 text-xs text-slate">{outcome.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-background/50 px-2.5 py-0.5 text-[10px] font-semibold text-slate/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Section>

      {/* ── Pattern Library ────────────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-8">
            <BookOpen className="h-6 w-6 text-primary mb-3" />
            <h2 className="font-display text-2xl font-bold text-surface">Delivery Pattern Library</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate">
              Common enterprise problems we've solved — described as reusable patterns, without client-specific detail.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {patternLibrary.map((pattern, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary/70 mb-2">
                  {pattern.industry}
                </div>
                <h3 className="font-semibold text-surface leading-snug">{pattern.pattern}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{pattern.approach}</p>
                <div className="mt-4 rounded-xl border border-live/20 bg-live/5 px-4 py-2.5">
                  <TrendingUp className="h-3.5 w-3.5 text-live inline mr-1.5" />
                  <span className="text-xs font-semibold text-live">{pattern.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── NDA Reference ─────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-background p-8 text-center">
            <Shield className="mx-auto h-8 w-8 text-slate/40 mb-3" />
            <h3 className="font-display text-lg font-bold text-surface">
              Full case studies available under NDA
            </h3>
            <p className="mt-2 max-w-xl mx-auto text-sm text-slate">
              For full client names, detailed architecture diagrams, and ROI documentation — contact our team. We can share references specific to your industry and deal size.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand
          heading="Need a reference in your industry?"
          subheading="We can share relevant case studies and delivery references under NDA — matched to your sector and scale."
        />
      </Section>
    </>
  );
}
