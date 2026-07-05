import type { Metadata } from "next";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FeatureCard from "@/components/FeatureCard";
import CTABand from "@/components/CTABand";
import { Cloud, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Platform Engineering",
  description: "Cloud-native platform engineering, SRE, and developer experience at enterprise scale.",
};

const offerings = [
  {
    icon: Cloud,
    title: "Cloud-Native Platforms",
    description: "Design and build platforms on AWS, Azure, and GCP with security and cost governance.",
  },
  {
    icon: Layers,
    title: "Internal Developer Platforms",
    description: "Golden paths, self-service environments, and platform teams that accelerate delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability & SRE",
    description: "Observability, incident readiness, and SLO-driven operations for mission-critical systems.",
  },
];

export default function CloudPlatformPage() {
  return (
    <>
      <Section className="pt-16">
        <PageHeader
          eyebrow="Cloud & Platform Engineering"
          title="Platforms that scale teams—not just infrastructure."
          description="Cybelinx engineers cloud-native foundations so product teams ship faster with confidence."
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
        <CTABand heading="Platform strategy workshop" subheading="Align platform investments with product velocity and operational resilience." />
      </Section>
    </>
  );
}
