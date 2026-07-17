import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import { ShieldCheck, Lock, Server, Eye, FileCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Compliance",
  description: "Cybelinx security practices — SOC 2 Type II, encryption, access controls, and compliance frameworks for enterprise buyers.",
};

const securityItems = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II",
    description: "We maintain SOC 2 Type II certification with controls for security, availability, and confidentiality. Audit reports are available under NDA.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Customer data is isolated per tenant with schema-level separation.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description: "Workloads run on AWS and GCP with multi-region disaster recovery, auto-scaling, and 99.9% uptime SLA commitments.",
  },
  {
    icon: Eye,
    title: "Access Controls",
    description: "RBAC with SAML/SSO integration, MFA enforcement, and just-in-time access for administrators. All access is logged and auditable.",
  },
  {
    icon: FileCheck,
    title: "Audit Logging",
    description: "Immutable audit trails capture every data access and configuration change. Logs are retained per regulatory requirements.",
  },
  {
    icon: Users,
    title: "Compliance Frameworks",
    description: "Platforms are designed for GDPR, HIPAA, and Indian IT Act compliance. Statutory rules are built into product workflows.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Trust"
          title="Security & Compliance"
          description="Enterprise-grade security is built into every layer of the Cybelinx platform — not bolted on after the fact."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <item.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-base font-semibold text-surface">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10">
          <h2 className="font-display text-2xl font-bold text-surface">Vulnerability Disclosure</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate">
            If you discover a security issue in any Cybelinx product, please report it
            privately to{" "}
            <a href="mailto:security@cybelinx.com" className="text-primary hover:underline">
              security@cybelinx.com
            </a>
            . We commit to acknowledging receipt within 24 hours and providing a fix timeline
            within 5 business days.
          </p>
        </div>
      </Section>

      <Section>
        <CTABand
          heading="Need a security review?"
          subheading="We can share our SOC 2 report, penetration test results, and data processing agreement under NDA."
        />
      </Section>
    </>
  );
}
