import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import AnimatedSection from "@/components/AnimatedSection";
import { technologies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technologies",
  description: "Platform engineering stack, cloud infrastructure, and enterprise technologies powering Cybelinx product delivery.",
};

export default function TechnologiesPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Technologies"
          title="A modern stack for enterprise-grade SaaS products."
          description="We select technologies for durability, security, and developer velocity — aligned to cloud-native architecture and compliance requirements."
        />
      </Section>

      <Section textured>
        <AnimatedSection>
          <ArchitectureEcosystem
            title="The Cybelinx Multi-Tenant Stack"
            description="Four layers engineered from the ground up for strict tenant isolation, platform self-service, and enterprise-grade reliability."
            components={[
              {
                label: "Core Infrastructure",
                sublabel: "Cloud & Compute",
                items: ["AWS / GCP Multi-Region", "Kubernetes Clusters", "Zero-Trust Service Mesh", "Automated Failover & DR"],
                color: "primary",
              },
              {
                label: "Platform Services",
                sublabel: "Developer Experience",
                items: ["Internal Developer Portal", "Golden-Path Templates", "CI/CD Pipeline Automation", "Feature Flag Management"],
                color: "cyan",
              },
              {
                label: "Data & Multi-Tenancy",
                sublabel: "Tenant Isolation",
                items: ["Isolated Tenant Schemas", "Vector Embeddings DB", "Distributed Caching Layer", "Automated Backup & Restore"],
                color: "violet",
              },
              {
                label: "Security & Compliance",
                sublabel: "Governance",
                items: ["SOC 2 Type II Certified", "End-to-End Encryption", "RBAC & SAML/SSO", "Immutable Audit Logs"],
                color: "primary",
              },
            ]}
          />
        </AnimatedSection>
      </Section>

      <Section>
        <AnimatedSection>
          <div className="mb-8">
            <span className="slugline">Core Technologies</span>
            <h3 className="font-display mt-2 text-2xl font-bold text-surface">Proven frameworks for multi-tenant SaaS delivery.</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <AnimatedSection key={tech} delay={index * 0.05}>
                <div className="spotlight-card rounded-2xl p-6 text-sm font-bold text-white flex items-center justify-between group">
                  <span>{tech}</span>
                  <span className="h-2 w-2 rounded-full bg-cyan/40 group-hover:bg-cyan group-hover:shadow-[0_0_10px_#60c8e0] transition-all" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section textured>
        <AnimatedSection>
          <ArchitectureFlow
            title="Platform-Enabled Deployment Pipeline"
            steps={[
              { label: "Template & Security Audit", description: "Golden-path scaffolding with automated SAST/DAST scanning, dependency audits, and compliance gates enforced before merge." },
              { label: "Immutable Build & Deploy", description: "Containerized artifacts built once, deployed across multi-region Kubernetes clusters with canary release strategies." },
              { label: "Live Telemetry & Self-Healing", description: "Continuous observability with AI-driven anomaly detection, automatic failover, and incident response across all tenants." },
            ]}
            outcome="Product teams ship weekly with zero-downtime deployments, automated compliance, and self-healing infrastructure — 99.99% uptime across all client environments."
          />
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand heading="Platform architecture review" subheading="Our platform engineers can assess your stack and roadmap cloud-native modernization paths." />
      </Section>
    </>
  );
}
