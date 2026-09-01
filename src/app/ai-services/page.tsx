"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Brain,
  Cpu,
  Sparkles,
  Mic,
  Eye,
  GitBranch,
  Shield,
  Users,
  Landmark,
  HeartPulse,
  Hotel,
  CheckCircle2,
  ArrowRight,
  Zap,
  Timer,
  BarChart3,
  Lock,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

// ── AI Capability Matrix ────────────────────────────────────────────────────
const capabilities = [
  {
    icon: Brain,
    title: "Embedded AI Copilots",
    description:
      "Intelligent assistants natively inside payroll, compliance, and operational workflows — not bolted on as chatbots. Context-aware, role-specific, and organization-isolated.",
    tags: ["LLM", "RAG", "Fine-tuned"],
    color: "#7B61FF",
  },
  {
    icon: Cpu,
    title: "Document Intelligence",
    description:
      "Extract, classify, and route unstructured documents across enterprise workflows automatically. From PDF invoices to medical records — structured JSON in milliseconds.",
    tags: ["OCR", "NLP", "Classification"],
    color: "#0D47FF",
  },
  {
    icon: GitBranch,
    title: "Agentic Workflows",
    description:
      "Multi-step autonomous agents that orchestrate complex approval chains, compliance checks, and data enrichment pipelines — with human-in-the-loop checkpoints.",
    tags: ["Agentic AI", "Orchestration", "Automation"],
    color: "#00C2FF",
  },
  {
    icon: Mic,
    title: "Voice AI & NLP",
    description:
      "Multilingual voice interfaces and NLP pipelines for conversational HR, patient check-in, and customer support — supporting 12+ Indian and global languages.",
    tags: ["ASR", "TTS", "Multilingual"],
    color: "#10B981",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description:
      "Real-time visual inspection for manufacturing defect detection, document verification, and retail shelf analytics — integrated into operational dashboards.",
    tags: ["Object Detection", "OCR", "Video Analytics"],
    color: "#F59E0B",
  },
  {
    icon: Sparkles,
    title: "MLOps & LLMOps",
    description:
      "End-to-end production ML infrastructure: model versioning, drift detection, A/B testing, auto-retraining pipelines, and guardrail telemetry for enterprise LLMs.",
    tags: ["LLMOps", "MLflow", "Vector DB"],
    color: "#EC4899",
  },
];

// ── Industry Use Cases ─────────────────────────────────────────────────────
const industryUseCases = [
  {
    id: "healthcare",
    label: "Healthcare",
    icon: HeartPulse,
    color: "#10B981",
    cases: [
      "AI-powered ABDM-compliant clinical notes generation from doctor dictation",
      "Automated ICD-10 coding with 97.3% accuracy — reducing coder workload by 60%",
      "Predictive patient readmission risk scoring from EHR vitals",
      "Pharmacy drug interaction detection via NLP on unstructured prescriptions",
      "HIPAA-compliant RAG search across patient history and protocol documents",
    ],
  },
  {
    id: "hcm",
    label: "HR & HCM",
    icon: Users,
    color: "#7B61FF",
    cases: [
      "AI Payroll Copilot: detect statutory anomalies before payroll run — 0 compliance errors",
      "Resume intelligence: semantic matching of JD to applicant profiles at scale",
      "Attrition prediction model: 89% accuracy 3 months before resignation",
      "AI-generated offer letters and employment contracts from structured HR data",
      "Voice-based employee helpdesk handling 400+ HR queries per day without agents",
    ],
  },
  {
    id: "banking",
    label: "Banking & FinTech",
    icon: Landmark,
    color: "#0D47FF",
    cases: [
      "Real-time transaction anomaly detection with <50ms latency across 10M+ daily events",
      "KYC document intelligence: Aadhaar, PAN, and corporate docs verified in under 30 seconds",
      "AI-driven credit scoring using 200+ alternative data signals beyond bureau scores",
      "Regulatory reporting automation: Basel III, RBI, and SEBI filings generated from live data",
      "GenAI-powered customer query resolution with 93% containment rate",
    ],
  },
  {
    id: "hospitality",
    label: "Hospitality",
    icon: Hotel,
    color: "#F59E0B",
    cases: [
      "Dynamic AI pricing engine: RevPAR optimization across 500+ room types in real time",
      "Guest sentiment analysis from reviews and voice feedback — multilingual",
      "Predictive housekeeping scheduling reducing labor costs by 18%",
      "AI concierge: conversational guest services via WhatsApp and in-app voice",
      "Demand forecasting model: 91% accuracy for 30-day occupancy predictions",
    ],
  },
];

// ── AI Benchmarks ──────────────────────────────────────────────────────────
const benchmarks = [
  { value: "< 200ms", label: "P95 AI Inference Latency", icon: Timer, color: "#0D47FF" },
  { value: "98.7%", label: "Document Extraction Accuracy", icon: BarChart3, color: "#7B61FF" },
  { value: "50+", label: "LLM Models Supported", icon: Brain, color: "#00C2FF" },
  { value: "99.9%", label: "AI API Uptime SLA", icon: Zap, color: "#10B981" },
];

// ── AI Ethics Principles ───────────────────────────────────────────────────
const ethicsPrinciples = [
  {
    icon: Shield,
    title: "No Training on Customer Data",
    description:
      "Customer data is strictly isolated per organization. It is never used to train shared models or improve public LLMs. Your data trains only your models.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Controls",
    description:
      "Every high-stakes AI decision — loan approvals, payroll exceptions, clinical flags — includes configurable human override checkpoints and audit trails.",
    color: "#0D47FF",
  },
  {
    icon: RefreshCw,
    title: "Bias Testing & Fairness",
    description:
      "All production models undergo quarterly bias testing across demographic attributes. Disparity scores are tracked and published in internal AI transparency reports.",
    color: "#7B61FF",
  },
  {
    icon: Lock,
    title: "Encrypted AI Enclaves",
    description:
      "Inference workloads run in organization-isolated compute enclaves with AES-256 encryption at rest, TLS 1.3 in transit, and zero cross-tenant data exposure.",
    color: "#EC4899",
  },
  {
    icon: AlertCircle,
    title: "Guardrail Telemetry",
    description:
      "LLM outputs are monitored in real time for hallucinations, toxicity, and prompt injection attempts. Automatic blocking with audit logging for compliance review.",
    color: "#F59E0B",
  },
  {
    icon: CheckCircle2,
    title: "NIST AI RMF Aligned",
    description:
      "Our AI governance framework aligns with NIST AI Risk Management Framework, ISO/IEC 42001, and emerging EU AI Act requirements for high-risk AI systems.",
    color: "#00C2FF",
  },
];

// ── Interactive Demo Prompts ────────────────────────────────────────────────
const demoPrompts = [
  {
    label: "Payroll Audit",
    prompt: "Detect anomalies in May 2026 payroll run for 1,200 employees",
    output: `{
  "status": "ANOMALIES_DETECTED",
  "total_employees": 1200,
  "flagged_records": 7,
  "findings": [
    { "emp_id": "E-4892", "issue": "OT hours exceed statutory cap by 14h", "risk": "HIGH" },
    { "emp_id": "E-1103", "issue": "PF deduction mismatch — new salary not applied", "risk": "MEDIUM" },
    { "emp_id": "E-7741", "issue": "Duplicate TDS entry detected in Form 16 data", "risk": "HIGH" }
  ],
  "recommendation": "Hold payroll approval pending HR review of 7 records",
  "confidence": 0.97,
  "processing_time_ms": 143
}`,
  },
  {
    label: "KYC Verification",
    prompt: "Verify Aadhaar + PAN for new banking customer onboarding",
    output: `{
  "status": "VERIFIED",
  "customer_id": "CUS-2026-88421",
  "documents": {
    "aadhaar": { "valid": true, "name_match": true, "dob_match": true },
    "pan": { "valid": true, "name_match": true, "linked_to_aadhaar": true }
  },
  "risk_score": 0.12,
  "risk_level": "LOW",
  "aml_check": "CLEAR",
  "processing_time_ms": 2340,
  "next_step": "Auto-approve account creation"
}`,
  },
  {
    label: "Clinical Notes",
    prompt: "Generate ABDM-compliant SOAP note from doctor dictation audio",
    output: `{
  "status": "SUCCESS",
  "soap_note": {
    "subjective": "Patient reports persistent cough for 7 days, mild fever 99.4°F, fatigue.",
    "objective": "SpO2: 97%, Temp: 37.4°C, Lung sounds: mild crackles bilateral bases.",
    "assessment": "Community-acquired pneumonia (ICD-10: J18.9), mild severity.",
    "plan": "Amoxicillin 500mg TID × 7 days. Follow-up if no improvement in 72h."
  },
  "abdm_compliant": true,
  "fhir_ready": true,
  "processing_time_ms": 1820
}`,
  },
];

export default function AIServicesPage() {
  const [activeIndustry, setActiveIndustry] = useState("healthcare");
  const [activeDemo, setActiveDemo] = useState(0);
  const activeCase = industryUseCases.find((i) => i.id === activeIndustry)!;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="pt-16 pb-0">
        <AnimatedSection>
          <PageHeader
            eyebrow="AI Capabilities"
            title="Intelligence engineered into products — not bolted on."
            description="Cybelinx platforms ship with production-grade AI built into core workflows — payroll, compliance, clinical, and operations — from day one. Not a wrapper. Not a plugin."
          />
        </AnimatedSection>

        {/* Benchmark Stats Bar */}
        <AnimatedSection delay={0.15}>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {benchmarks.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="rounded-2xl border border-border bg-background p-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: `${b.color}25` }}
                >
                  <Icon className="mx-auto h-5 w-5 mb-2" style={{ color: b.color }} />
                  <div className="font-display text-2xl font-extrabold" style={{ color: b.color }}>
                    {b.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate/60">
                    {b.label}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── AI Capability Matrix ───────────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">AI Capability Matrix</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Six AI domains, one unified platform.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate">
              Every capability runs in organization-isolated enclaves with strict data governance, audit logging, and human-in-the-loop controls.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group relative rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                  style={{ borderColor: `${cap.color}20` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at 20% 0%, ${cap.color}10, transparent 60%)` }}
                  />
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: `${cap.color}15`, border: `1px solid ${cap.color}30` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cap.color }} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-surface">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{cap.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                        style={{ background: `${cap.color}15`, color: cap.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Industry-Specific AI Use Cases ────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-8">
            <span className="slugline">Industry Use Cases</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              AI that speaks your industry&apos;s language.
            </h2>
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industryUseCases.map((industry) => {
              const Icon = industry.icon;
              const isActive = activeIndustry === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    isActive ? "shadow-md" : "border border-border bg-background text-slate hover:text-surface"
                  }`}
                  style={
                    isActive
                      ? { background: `${industry.color}18`, color: industry.color, border: `1px solid ${industry.color}40` }
                      : {}
                  }
                >
                  <Icon className="h-4 w-4" />
                  {industry.label}
                </button>
              );
            })}
          </div>

          {/* Use Case List */}
          <div
            className="rounded-2xl border p-8 transition-all"
            style={{ borderColor: `${activeCase.color}25`, background: `${activeCase.color}05` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: `${activeCase.color}20`, border: `1px solid ${activeCase.color}40` }}
              >
                <activeCase.icon className="h-5 w-5" style={{ color: activeCase.color }} />
              </div>
              <h3 className="font-display text-xl font-bold text-surface">
                AI in {activeCase.label}
              </h3>
            </div>
            <ul className="space-y-4">
              {activeCase.cases.map((useCase, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: activeCase.color }} />
                  <span className="text-sm leading-relaxed text-slate">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── AI in Action — Interactive Demo Panel ─────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-8">
            <span className="slugline">AI in Action</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              See what the AI actually returns.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Real structured outputs from Cybelinx AI workflows — not marketing copy.
            </p>
          </div>

          {/* Prompt selector */}
          <div className="flex flex-wrap gap-2 mb-6">
            {demoPrompts.map((demo, i) => (
              <button
                key={demo.label}
                onClick={() => setActiveDemo(i)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                  activeDemo === i
                    ? "bg-primary text-white shadow-md"
                    : "border border-border bg-background text-slate hover:text-surface"
                }`}
              >
                {demo.label}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-charcoal overflow-hidden shadow-xl">
            {/* Terminal bar */}
            <div className="flex items-center gap-2 border-b border-border/50 px-5 py-3">
              <div className="h-3 w-3 rounded-full bg-red-400/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
              <div className="h-3 w-3 rounded-full bg-green-400/60" />
              <span className="ml-3 text-xs font-mono text-slate/50">cybelinx-ai — enterprise-inference</span>
            </div>
            <div className="p-6 space-y-5">
              {/* Prompt */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary/70 mb-2">› prompt</div>
                <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 font-mono text-sm text-surface/90">
                  {demoPrompts[activeDemo].prompt}
                </div>
              </div>
              {/* Output */}
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-live/70 mb-2">← response</div>
                <pre className="rounded-xl border border-live/10 bg-background/30 px-4 py-4 font-mono text-xs text-live/80 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                  {demoPrompts[activeDemo].output}
                </pre>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── AI Ethics & Governance ─────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">AI Ethics & Governance</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Responsible AI is not optional — it&apos;s architecture.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Every AI capability in Cybelinx is governed by principles designed for regulated enterprise environments.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ethicsPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${principle.color}15`, border: `1px solid ${principle.color}30` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: principle.color }} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-surface">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{principle.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/ai-governance"
              className="inline-flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/25 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/15 hover:gap-3"
            >
              Read our full AI Governance Policy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <Section>
        <CTABand
          heading="See AI in action on your data"
          subheading="Book a technical demo to see how Cybelinx AI transforms your payroll, compliance, and operational workflows."
        />
      </Section>
    </>
  );
}
