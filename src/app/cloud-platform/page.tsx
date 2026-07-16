import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import AnimatedSection from "@/components/AnimatedSection";
import ArchitectureEcosystem from "@/components/ArchitectureEcosystem";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import {
  Cloud,
  Layers,
  ShieldCheck,
  GitBranch,
  Gauge,
  ServerCog,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Engineering — Cloud & Developer Platforms | Cybelinx",
  description:
    "Internal developer platforms, golden-path templates, CI/CD automation, and cloud-native operating models powering every Cybelinx product.",
};

const offerings = [
  {
    icon: ServerCog,
    title: "Internal Developer Platforms",
    description:
      "Self-service infrastructure that lets product teams provision environments, databases, and services on demand — without filing tickets.",
  },
  {
    icon: GitBranch,
    title: "Golden-Path Templates",
    description:
      "Opinionated scaffolds for new microservices, tenants, and product modules — enforcing standards while eliminating boilerplate.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Kubernetes-orchestrated workloads on AWS/GCP with auto-scaling, multi-region disaster recovery, and global edge availability.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant Core",
    description:
      "Schema-isolated tenant data with per-tenant configuration, feature flags, and subscription management — new tenants are configuration, not forks.",
  },
  {
    icon: GitBranch,
    title: "CI/CD & Release Automation",
    description:
      "Progressive delivery pipelines with canary deployments, zero-downtime rollouts, and automated rollback — shipping weekly with confidence.",
  },
  {
    icon: Gauge,
    title: "Observability & Reliability",
    description:
      "Real-time telemetry, AI-driven anomaly detection, and self-healing infrastructure — 99.9% uptime SLA with SOC 2 Type II audit readiness.",
  },
];

const platformPrinciples = [
  {
    icon: ServerCog,
    title: "Self-Service Over Tickets",
    description:
      "Developers provision infrastructure through golden-path templates and APIs — reducing cycle time from days to minutes.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant by Design",
    description:
      "Schema isolation and feature flags are architectural primitives, not afterthoughts — every new customer is a configuration change.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance as Code",
    description:
      "SOC 2 controls, immutable audit logs, and statutory rules are enforced through automated pipelines — not manual checklists.",
  },
  {
    icon: Gauge,
    title: "Observability Everywhere",
    description:
      "Every service emits structured telemetry. AI-driven anomaly detection and self-healing keep uptime at 99.9% across all regions.",
  },
];

export default function CloudPlatformPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Platform Engineering"
          title="Enterprise infrastructure. Product-team velocity."
          description="We build and operate the internal developer platforms, CI/CD pipelines, and cloud-native foundations that let product teams ship multi-tenant SaaS — without reinventing the infrastructure every time."
        />
      </Section>

      {/* Core Offerings */}
      <Section textured>
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">What We Build</span>
            <h3 className="font-display mt-2 text-2xl font-bold text-surface md:text-3xl">
              Platform capabilities that compound across every product.
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-surface/85">
              Every Cybelinx product runs on a shared platform layer engineered for
              multi-tenancy, compliance, and rapid product iteration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering) => (
              <FeatureCard
                key={offering.title}
                title={offering.title}
                description={offering.description}
                icon={offering.icon}
              />
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Platform Architecture Stack */}
      <Section>
        <AnimatedSection>
          <ArchitectureEcosystem
            title="The Cybelinx Platform Stack"
            description="Four layers engineered from the ground up for strict tenant isolation, high-throughput AI inference, and seamless enterprise integrations."
            components={[
              {
                label: "Core Infrastructure",
                sublabel: "Cloud & Compute",
                items: [
                  "AWS / GCP Multi-Region",
                  "Kubernetes Clusters",
                  "Zero-Trust Service Mesh",
                  "Automated Failover & DR",
                ],
                color: "primary",
              },
              {
                label: "Platform Services",
                sublabel: "Developer Experience",
                items: [
                  "Internal Developer Portal",
                  "Golden-Path Templates",
                  "CI/CD Pipeline Automation",
                  "Feature Flag Management",
                ],
                color: "cyan",
              },
              {
                label: "Data & Multi-Tenancy",
                sublabel: "Tenant Isolation",
                items: [
                  "Isolated Tenant Schemas",
                  "Vector Embeddings DB",
                  "Distributed Caching Layer",
                  "Automated Backup & Restore",
                ],
                color: "violet",
              },
              {
                label: "Security & Compliance",
                sublabel: "Governance",
                items: [
                  "SOC 2 Type II Certified",
                  "End-to-End Encryption",
                  "RBAC & SAML/SSO",
                  "Immutable Audit Logs",
                ],
                color: "primary",
              },
            ]}
          />
        </AnimatedSection>
      </Section>

      {/* Platform Principles */}
      <Section textured>
        <AnimatedSection>
          <div className="mb-10">
            <span className="slugline">Engineering Principles</span>
            <h3 className="font-display mt-2 text-2xl font-bold text-surface md:text-3xl">
              Why our platform approach works.
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-surface/85">
              Platform engineering is not just tooling — it is a product discipline
              applied to the developer experience.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platformPrinciples.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.08}>
                <FeatureCard
                  title={principle.title}
                  description={principle.description}
                  icon={principle.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Deployment Pipeline */}
      <Section>
        <AnimatedSection>
          <ArchitectureFlow
            title="Platform-Enabled Delivery Pipeline"
            steps={[
              {
                label: "Template Scaffolding",
                description:
                  "Golden-path templates generate production-ready service skeletons with built-in observability, security policies, and tenant isolation.",
              },
              {
                label: "Automated Build & Scan",
                description:
                  "CI pipelines run SAST/DAST scanning, dependency audits, and container builds — gates enforced before merge.",
              },
              {
                label: "Progressive Rollout",
                description:
                  "Canary deployments with real-time telemetry. AI-driven anomaly detection triggers automatic rollback if thresholds breach.",
              },
            ]}
            outcome="Product teams ship features weekly with zero-downtime deployments, automated compliance, and self-healing infrastructure across all tenant environments."
          />
        </AnimatedSection>
      </Section>

      <Section>
        <CTABand
          heading="Platform architecture deep-dive"
          subheading="Book a session with our platform engineering team to review your stack and roadmap."
        />
      </Section>
    </>
  );
}
