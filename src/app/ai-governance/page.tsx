import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Users,
  Brain,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Sparkles,
  Server,
  Layers,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Ethics, Safety & Governance | Cybelinx",
  description: "Cybelinx enterprise AI governance framework — zero customer data training, human-in-the-loop controls, bias mitigation, and alignment with NIST AI RMF and ISO/IEC 42001.",
};

const governancePrinciples = [
  {
    icon: Lock,
    title: "Zero Model Training on Customer Data",
    subtitle: "Absolute Tenant Data Sovereignty",
    description:
      "Enterprise customer data, prompts, and document embeddings are strictly isolated inside encrypted tenant enclaves. They are never ingested into shared training datasets or used to refine public foundation models.",
    color: "#0D47FF",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Safeguards",
    subtitle: "Configurable Decision Checkpoints",
    description:
      "All high-impact automated recommendations (payroll disbursement locks, credit risk exceptions, clinical flags) mandate designated human reviewer approval workflows prior to downstream execution.",
    color: "#7B61FF",
  },
  {
    icon: Scale,
    title: "Continuous Bias Testing & Fairness",
    subtitle: "Demographic Parity Auditing",
    description:
      "Our AI/ML infrastructure continuously monitors production model outputs for statistical demographic drift, disparate impact, and historical bias with automated quarterly transparency reporting.",
    color: "#00C2FF",
  },
  {
    icon: Eye,
    title: "Explainability & Interpretability",
    subtitle: "Clear Lineage on Every Token",
    description:
      "Every structured JSON response emitted by our copilot engines contains source attribution, document chunk references, and confidence scoring to provide complete auditability.",
    color: "#10B981",
  },
  {
    icon: AlertTriangle,
    title: "Real-Time Guardrail Telemetry",
    subtitle: "Prompt Injection & Toxicity Defense",
    description:
      "Bidirectional guardrail filters intercept hallucination vectors, sensitive PII/PHI leakage, and adversarial prompt injections with sub-10ms latency overhead.",
    color: "#F59E0B",
  },
  {
    icon: Award,
    title: "Global Standards Alignment",
    subtitle: "NIST AI RMF & ISO/IEC 42001",
    description:
      "Our governance processes are mapped directly to NIST AI Risk Management Framework, ISO/IEC 42001 (Artificial Intelligence Management System), and EU AI Act high-risk classification criteria.",
    color: "#EC4899",
  },
];

const lifecycleSteps = [
  {
    phase: "01. Design & Risk Assessment",
    items: [
      "Mandatory AI Risk Impact Assessment (AIRIA) for every proposed model workflow",
      "Classification according to EU AI Act & NIST AI RMF risk categories",
      "Definition of acceptable error thresholds and human escalation protocols",
    ],
  },
  {
    phase: "02. Secure Training & Fine-Tuning",
    items: [
      "Synthetic or client-authorized data only inside private VPC compute nodes",
      "Cryptographic weights signing to prevent unauthorized model tampering",
      "Automated differential privacy guarantees applied to fine-tuned adapters",
    ],
  },
  {
    phase: "03. Validation & Bias Benchmarking",
    items: [
      "Adversarial red-teaming for prompt injection and boundary testing",
      "Benchmark evaluation against domain datasets (clinical, statutory, financial)",
      "Multi-evaluator consensus scoring before deployment approval",
    ],
  },
  {
    phase: "04. Production Telemetry & Audit",
    items: [
      "100% immutable prompt/response logging to append-only WORM storage",
      "Real-time drift detection triggering automated model rollback if accuracy breaches SLA",
      "Annual third-party algorithmic fairness audit by independent cybersecurity firms",
    ],
  },
];

export default function AIGovernancePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Responsible Enterprise AI"
            title="AI Governance, Safety & Ethics Framework"
            description="As enterprise AI moves from sandbox experimentation to mission-critical healthcare, financial, and HCM infrastructure, governance must be an immutable architectural primitive."
          />
        </AnimatedSection>

        {/* Key Governance Commitments */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Data Sovereignty", value: "Zero Data Training", desc: "Customer data never trains public foundation models" },
              { label: "Decision Control", value: "100% Human Overrides", desc: "Mandatory human checkpoints on high-risk actions" },
              { label: "Compliance Standard", value: "NIST AI RMF", desc: "Aligned with ISO/IEC 42001 & EU AI Act standards" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
                <div className="text-xs font-bold uppercase tracking-wider text-primary">{stat.label}</div>
                <div className="mt-1 font-display text-xl font-extrabold text-surface">{stat.value}</div>
                <div className="mt-1 text-xs text-slate/70">{stat.desc}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── 6 Core Governance Principles ───────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Architectural Foundations</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Six Pillars of Responsible AI Architecture
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Enterprise leaders cannot afford black-box uncertainty. Our AI systems enforce mathematical guarantees at every execution step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {governancePrinciples.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: `${p.color}25` }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl mb-4"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}35` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: p.color }} />
                  </div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider" style={{ color: p.color }}>
                    {p.subtitle}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold text-surface">{p.title}</h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate">{p.description}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── AI Lifecycle Governance Flow ───────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Continuous Verification</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              AI Lifecycle Governance Process
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              How every AI agent, fine-tuned adapter, and RAG index is vetted from inception through continuous production telemetry.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {lifecycleSteps.map((step) => (
              <div key={step.phase} className="rounded-3xl border border-border bg-background p-7 shadow-xs">
                <h3 className="font-display text-base font-bold text-primary mb-4">{step.phase}</h3>
                <ul className="space-y-3">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs leading-relaxed text-slate">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Customer Contractual Addendum ──────────────────────────────── */}
      <Section textured className="py-10">
        <AnimatedSection>
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10 max-w-3xl mx-auto shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="h-7 w-7 text-primary" />
              <h2 className="font-display text-2xl font-bold text-surface">AI Data Protection Addendum (AI-DPA)</h2>
            </div>
            <p className="text-xs leading-relaxed text-slate">
              Every Cybelinx enterprise agreement includes our legally binding AI Data Protection Addendum. This contractually guarantees that your data will never be leaked, cached outside your designated geographic jurisdiction, or utilized for unauthorized algorithmic retraining.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
      <Section>
        <CTABand
          heading="Review our complete AI Governance Documentation"
          subheading="Connect with our AI Ethics Officer and Chief Technology Officer for a detailed review of our model evaluation criteria."
        />
      </Section>
    </>
  );
}
