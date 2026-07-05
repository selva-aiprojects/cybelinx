import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { Cloud, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Platform Engineering",
  description: "Cloud-native foundations powering every Cybelinx product platform.",
};

const offerings = [
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Every product runs on AWS with auto-scaling, multi-region DR, and enterprise-grade security.",
  },
  {
    icon: Layers,
    title: "Multi-Tenant Core",
    description: "Schema-isolated tenants with per-tenant configuration, feature flags, and subscription management.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & Compliance",
    description: "99.9% uptime SLA, SOC2-aligned controls, and audit-ready compliance for regulated industries.",
  },
];

export default function CloudPlatformPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Platform Foundation"
          title="Enterprise infrastructure. Product simplicity."
          description="Every Cybelinx product ships on a shared cloud-native, multi-tenant platform engineered for scale and compliance."
        />
      </Section>

      <Section textured>
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <FeatureCard key={offering.title} title={offering.title} description={offering.description} icon={offering.icon} />
          ))}
        </div>
      </Section>

      <Section>
        <CTABand heading="Explore the platform" subheading="Book an architecture deep-dive with our engineering team." />
      </Section>
    </>
  );
}
