import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import {
  ShieldCheck,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  KeyRound,
  Fingerprint,
  RefreshCw,
  Award,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Database,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security, Privacy & Zero-Trust Architecture | Cybelinx",
  description: "Enterprise security architecture — SOC 2 Type II, ISO 27001, HIPAA, GDPR, NIST PQC readiness, and Zero-Trust isolation for regulated enterprise buyers.",
};

const certBadges = [
  { name: "SOC 2 Type II", subtitle: "Security, Availability & Confidentiality", icon: ShieldCheck, color: "#0D47FF" },
  { name: "ISO 27001:2022", subtitle: "Information Security Management", icon: Award, color: "#7B61FF" },
  { name: "HIPAA & ABDM", subtitle: "Health Data Privacy & Consent", icon: FileCheck, color: "#10B981" },
  { name: "GDPR & DPDP Act", subtitle: "Comprehensive Data Protection", icon: Lock, color: "#00C2FF" },
  { name: "RBI & SEBI Ready", subtitle: "Financial Data Localization", icon: KeyRound, color: "#F59E0B" },
  { name: "NIST PQC Ready", subtitle: "Post-Quantum Cryptography", icon: Fingerprint, color: "#EC4899" },
];

const securityItems = [
  {
    icon: Lock,
    title: "Cryptographic Isolation & AES-256",
    description: "All client data is encrypted in transit via TLS 1.3 and at rest with customer-managed keys (AWS KMS / HashiCorp Vault) using AES-256-GCM. Schema-level multi-tenant separation guarantees zero cross-tenant query leaks.",
  },
  {
    icon: Fingerprint,
    title: "Zero-Trust Identity & SAML / SSO",
    description: "Mandatory multi-factor authentication (MFA), role-based access control (RBAC), and just-in-time access for administrative operators. Full federation with Okta, Azure AD, Ping, and Google Workspace.",
  },
  {
    icon: Server,
    title: "Multi-Zone Kubernetes & DR",
    description: "Workloads run across isolated Kubernetes node pools in multiple availability zones with automated cross-region failover, 15-minute RPO, and <1 hour RTO guarantees.",
  },
  {
    icon: Eye,
    title: "Immutable Audit Trails & SIEM",
    description: "Every API mutation, login attempt, and database read is immutably logged to append-only storage and streamed to your enterprise SIEM (Splunk, Datadog, SumoLogic) in real time.",
  },
  {
    icon: RefreshCw,
    title: "Automated DevSecOps Pipeline",
    description: "Continuous static code analysis (SAST), software composition analysis (SCA), and dynamic application scanning (DAST) run on every pull request prior to automated canary deployments.",
  },
  {
    icon: Database,
    title: "Strict Indian & Global Data Residency",
    description: "Data for Indian regulated entities is pinned strictly to MeitY-empaneled AWS/GCP regions in Mumbai and Hyderabad. Dedicated regional boundaries for US, EU, and APAC.",
  },
];

const auditCadence = [
  { frequency: "Continuous", title: "Automated SAST & Container Scanning", desc: "Trivy & Snyk scans run on every container image build." },
  { frequency: "Daily", title: "Cloud Security Posture Audits (CSPM)", desc: "Automated drift detection against CIS AWS/Kubernetes benchmarks." },
  { frequency: "Quarterly", title: "Third-Party Penetration Testing", desc: "Conducted by independent CREST-certified security assessment firms." },
  { frequency: "Annual", title: "SOC 2 Type II & ISO 27001 Re-Certification", desc: "Independent audit by Big 4 accounting firms with reports available under NDA." },
];

export default function SecurityPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section className="pt-16 pb-6">
        <AnimatedSection>
          <PageHeader
            eyebrow="Zero-Trust Enterprise Security"
            title="Security engineered as an architectural foundation."
            description="Enterprise security, continuous statutory compliance, and zero-trust data isolation are built directly into the Cybelinx platform runtime — not patched on as external compliance checklists."
          />
        </AnimatedSection>

        {/* Certification Badges Strip */}
        <AnimatedSection delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {certBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.name}
                  className="rounded-2xl border border-border bg-background p-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ borderColor: `${badge.color}25` }}
                >
                  <Icon className="mx-auto h-6 w-6 mb-2" style={{ color: badge.color }} />
                  <div className="font-display text-xs font-bold text-surface">{badge.name}</div>
                  <div className="mt-1 text-[10px] leading-tight text-slate/70">{badge.subtitle}</div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Zero-Trust Architecture Workflow ──────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Zero-Trust Pipeline</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Defense-in-depth across every transaction.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
              Every request is verified explicitly, authorized with least privilege, and executed inside encrypted compute enclaves.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: "01", title: "Explicit Verification", desc: "mTLS authentication, SAML 2.0 SSO identity resolution, and device posture verification.", color: "#0D47FF" },
              { step: "02", title: "Dynamic Policy Engine", desc: "Context-aware RBAC evaluating user role, location, time window, and sensitivity tier.", color: "#7B61FF" },
              { step: "03", title: "Schema-Isolated Execution", desc: "Database query routed to tenant-specific schema with encrypted columns and masking.", color: "#00C2FF" },
              { step: "04", title: "Immutable Telemetry", desc: "Audit log recorded to WORM (Write Once Read Many) storage with SIEM streaming.", color: "#10B981" },
            ].map((p) => (
              <div key={p.step} className="rounded-2xl border border-border bg-background p-6">
                <div className="font-display text-2xl font-extrabold mb-2" style={{ color: p.color }}>
                  {p.step}
                </div>
                <h3 className="font-display text-base font-bold text-surface">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate">{p.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Security Pillars ──────────────────────────────────────────── */}
      <Section className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Enterprise Safeguards</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Engineered for banks, hospitals, and regulated leaders.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <item.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 text-base font-bold text-surface">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Continuous Audit Cadence ───────────────────────────────────── */}
      <Section textured className="py-12">
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Continuous Verification</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-surface md:text-4xl">
              Audit Cadence & Independent Testing
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {auditCadence.map((audit) => (
              <div key={audit.title} className="rounded-2xl border border-border bg-background p-6">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-primary">
                  {audit.frequency}
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-surface">{audit.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate">{audit.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* ── Vulnerability Disclosure ──────────────────────────────────── */}
      <Section className="py-8">
        <AnimatedSection>
          <div className="rounded-3xl border border-border bg-background p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold text-surface">Responsible Vulnerability Disclosure</h2>
            </div>
            <p className="max-w-3xl text-xs leading-relaxed text-slate">
              Cybelinx values the contributions of independent security researchers. If you identify a potential security vulnerability within any Cybelinx platform or endpoint, please report it immediately to{" "}
              <a href="mailto:security@cybelinx.com" className="font-semibold text-primary underline">
                security@cybelinx.com
              </a>
              . We commit to acknowledging receipt within 24 hours and publishing remediation timelines within 5 business days.
            </p>
          </div>
        </AnimatedSection>
      </Section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <Section>
        <CTABand
          heading="Request SOC 2 Type II or Penetration Test Reports"
          subheading="We provide our full SOC 2 Type II audit packages, DPA, and third-party penetration reports under standard NDA."
        />
      </Section>
    </>
  );
}
